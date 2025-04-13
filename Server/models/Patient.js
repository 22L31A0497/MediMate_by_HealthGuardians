const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  age: Number,
  location: String,
  emergencyContactName: String,
  emergencyContactNumber: String,
  password: String,
  previousConditions: String,
});

module.exports = mongoose.model('Patient', patientSchema);
