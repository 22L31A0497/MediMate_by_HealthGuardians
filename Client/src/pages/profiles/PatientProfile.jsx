import React, { useState } from "react";
import Navbar from "../../components/Navbar";

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

  return (<>
  <Navbar />
    <div className="p-6 space-y-6 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800">Patient Profile</h2>
      <p className="text-lg text-gray-600">Please review and update your details.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div></>
  );
};

export default PatientProfile;
