const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Helper to generate JWT
const generateToken = (user, role) => {
  return jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Doctor Signup
exports.signupDoctor = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, speciality, experience, previousWorkplace, password } = req.body;

    const existing = await Doctor.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Doctor already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const doctor = new Doctor({
      fullName, email, phoneNumber, speciality, experience, previousWorkplace, password: hashed,
    });

    await doctor.save();
    const token = generateToken(doctor, 'doctor');
    res.status(201).json({ token, user: doctor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Patient Signup
exports.signupPatient = async (req, res) => {
  try {
    const {
      fullName, email, phoneNumber, age, location, emergencyContactName,
      emergencyContactNumber, password, previousConditions,
    } = req.body;

    const existing = await Patient.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Patient already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const patient = new Patient({
      fullName, email, phoneNumber, age, location, emergencyContactName,
      emergencyContactNumber, password: hashed, previousConditions,
    });

    await patient.save();
    const token = generateToken(patient, 'patient');
    res.status(201).json({ token, user: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Common Login for both
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const User = role === 'doctor' ? Doctor : Patient;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user, role);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
