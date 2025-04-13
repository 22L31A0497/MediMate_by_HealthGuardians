import React, { useState } from "react";

const DoctorProfile = () => {
  const [formData, setFormData] = useState({
    name: "Dr. Smita Equilibrium",
    specialization: "Dermatologist",
    experience: "10 years",
    qualification: "MBBS, MD",
    email: "dr.smita@example.com",
    phone: "+91 98765 12345",
    clinicAddress: "Ghatkopar, Mumbai",
    consultationTimings: "10am - 6pm",
    about: "Experienced dermatologist with focus on facial treatments.",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved Doctor Data:", formData);
    alert("Doctor profile saved!");
  };

  return (
    <div className="p-6 space-y-4 max-w-2xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">Doctor Profile</h2>
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
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save
      </button>
    </div>
  );
};

export default DoctorProfile;
