const express = require('express');
const router = express.Router();
const { signupDoctor, signupPatient, login } = require('../controllers/authController');

// Route for doctor signup
router.post('/signup/doctor', signupDoctor);

// Route for patient signup
router.post('/signup/patient', signupPatient);

// Common login route
router.post('/login', login);

module.exports = router;
