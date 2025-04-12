import React, { useState } from "react";

const PatientProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    age: "30",
    gender: "Male",
    height: "5'10\"",
    weight: "75kg",
    bloodGroup: "O+",
    emergencyContact: "Sarah - +91 98765 43210",
    allergies: "Peanuts",
    medicalHistory: "Asthma, Seasonal Allergies",
    medications: "Paracetamol",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved Patient Data:", formData);
    alert("Patient profile saved!");
  };

  return (
    <div className="p-6 space-y-4 max-w-2xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">Patient Profile</h2>
      {Object.keys(formData).map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded mt-1"
          />
        </div>
      ))}
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default PatientProfile;
