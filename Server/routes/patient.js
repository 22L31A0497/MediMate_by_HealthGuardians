const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User') // Assuming you have a User model for patients
const bcrypt = require('bcryptjs'); // Assuming you are using bcrypt for password hashing
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, userType: 'patient' });
    if (!user) return res.status(400).json({ message: 'User not found or incorrect credentials.' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      fullName: user.fullName,
      message: 'Login successful',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
