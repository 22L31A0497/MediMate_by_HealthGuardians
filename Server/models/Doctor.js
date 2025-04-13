const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  speciality: String,
  experience: Number,
  previousWorkplace: String,
  password: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
