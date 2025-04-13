import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorSignup from './pages/doctor/DoctorSignup';
import DoctorAvailability from './pages/doctor/DoctorAvailability';
import PatientSignup from './pages/patient/PatientSignup';  
import Home from './pages/shared/Home';
import Login from './pages/shared/Login';
import Emergency from './components/Emergency';
import SignUpForm from './pages/shared/SignUpForm';
import DoctorPro from './pages/doctor/DoctorPro';
import ProfilePage from './pages/profiles/ProfilePage';
import SymptomChecker from './pages/patient/SymptomChecker';
import VedioCall from './components/VedioCall';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/doctor-availability" element={<DoctorAvailability />} />
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/doctor-pro" element={<DoctorPro />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} /> 
        <Route path="/consult" element={<Navigate to="/video-call" />} />
        <Route path="/video" element={<VedioCall />} />
        {/* Add more routes as needed */}

      </Routes>
    </BrowserRouter>
  );
}
