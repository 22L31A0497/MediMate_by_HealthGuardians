import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [disease, setDisease] = useState(null);

  // 30 Symptoms
  const symptomsList = [
    "Fever", "Cough", "Headache", "Fatigue", "Chest pain",
    "Shortness of breath", "Sore throat", "Rash", "Itching", "Abdominal pain",
    "Diarrhea", "Nausea", "Vomiting", "Dizziness", "Joint pain",
    "Muscle aches", "Sweating", "Chills", "Runny nose", "Loss of smell",
    "Loss of taste", "Fatigue", "Eye pain", "Swelling", "Dry skin",
    "Sore eyes", "Itchy eyes", "Difficulty swallowing", "Stomach bloating", "Back pain"
  ];

  // Diseases with symptoms, precautions, and medications
  const diseasesData = [
    {
      disease: "Flu",
      symptoms: ["Fever", "Cough", "Headache", "Fatigue", "Sore throat"],
      precautions: ["Rest well", "Stay hydrated", "Take vitamin C"],
      medications: ["Paracetamol", "Ibuprofen"]
    },
    {
      disease: "Common Cold",
      symptoms: ["Runny nose", "Sneezing", "Cough", "Sore throat", "Fatigue"],
      precautions: ["Avoid cold air", "Use a humidifier", "Drink warm liquids"],
      medications: ["Cough syrup", "Decongestant"]
    },
    {
      disease: "COVID-19",
      symptoms: ["Fever", "Cough", "Shortness of breath", "Fatigue", "Loss of taste", "Loss of smell"],
      precautions: ["Quarantine", "Wear a mask", "Consult a doctor"],
      medications: ["Antiviral drugs", "Oxygen therapy"]
    },
    {
      disease: "Pneumonia",
      symptoms: ["Chest pain", "Cough", "Shortness of breath", "Fatigue"],
      precautions: ["Stay hydrated", "Rest", "Avoid crowded places"],
      medications: ["Antibiotics", "Pain relievers"]
    },
    {
      disease: "Migraine",
      symptoms: ["Headache", "Fatigue", "Sensitivity to light", "Nausea"],
      precautions: ["Avoid triggers", "Stay in a quiet, dark room", "Rest"],
      medications: ["Pain relievers", "Sumatriptan"]
    },
    {
      disease: "Sinusitis",
      symptoms: ["Headache", "Runny nose", "Fatigue", "Facial pain"],
      precautions: ["Use a humidifier", "Stay hydrated", "Avoid irritants"],
      medications: ["Decongestants", "Antibiotics"]
    },
    {
      disease: "Chronic Fatigue Syndrome",
      symptoms: ["Fatigue", "Joint pain", "Muscle aches", "Headache"],
      precautions: ["Get enough sleep", "Exercise moderately", "Eat healthy"],
      medications: ["Pain relievers", "Antidepressants"]
    },
    {
      disease: "Allergic Rhinitis",
      symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Fatigue"],
      precautions: ["Avoid allergens", "Use air purifiers", "Take antihistamines"],
      medications: ["Antihistamines", "Nasal sprays"]
    },
    {
      disease: "Gastritis",
      symptoms: ["Abdominal pain", "Nausea", "Fatigue", "Diarrhea"],
      precautions: ["Avoid spicy food", "Eat smaller meals", "Drink plenty of water"],
      medications: ["Antacids", "Proton pump inhibitors"]
    },
    {
      disease: "Dehydration",
      symptoms: ["Dizziness", "Fatigue", "Sweating", "Chills"],
      precautions: ["Drink plenty of water", "Avoid strenuous activity", "Stay cool"],
      medications: ["Electrolyte drinks", "Hydration solutions"]
    },
    {
      disease: "Heart Attack",
      symptoms: ["Chest pain", "Fatigue", "Shortness of breath", "Sweating"],
      precautions: ["Seek immediate medical help", "Take aspirin", "Stay calm"],
      medications: ["Aspirin", "Blood thinners"]
    },
    {
      disease: "Chronic Back Pain",
      symptoms: ["Back pain", "Fatigue", "Joint pain", "Muscle aches"],
      precautions: ["Exercise regularly", "Use proper posture", "Take pain relievers"],
      medications: ["Pain relievers", "Physical therapy"]
    },
    // Add more diseases here...
  ];

  // Handle symptom selection
  const handleSymptomChange = (e) => {
    const symptom = e.target.value;
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((item) => item !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  // Analyze selected symptoms
  const analyzeSymptoms = () => {
    const matchingDiseases = diseasesData.filter((disease) => {
      return selectedSymptoms.some((symptom) => disease.symptoms.includes(symptom));
    });
    setDisease(matchingDiseases.length > 0 ? matchingDiseases : null);
  };

  return (
    <classNames>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-sky-250 via-sky-300 to-sky-500 shadow-lg rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">🩺 Symptom Checker</h2>

        <div className="space-y-4">
          {/* Symptoms list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {symptomsList.map((symptom) => (
              <div key={symptom} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={symptom}
                  value={symptom}
                  onChange={handleSymptomChange}
                  className="mr-2 text-blue-600"
                />
                <label htmlFor={symptom} className="text-lg cursor-pointer">
                  {symptom}
                </label>
              </div>
            ))}
          </div>

          {/* Analyze Button */}
          <div className="text-center mt-6">
            <button
              onClick={analyzeSymptoms}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
            >
              Analyze
            </button>
          </div>

          {/* Selected Symptoms */}
          {selectedSymptoms.length > 0 && (
            <div className="mt-6 text-center">
              <h3 className="font-semibold text-xl">Selected Symptoms:</h3>
              <p>{selectedSymptoms.join(", ")}</p>
            </div>
          )}

          {/* Disease and Precautions */}
          {disease ? (
            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
              {disease.map((dis, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-semibold">{dis.disease}</h3>
                  <p className="mt-2 text-lg">
                    <strong>Precautions:</strong> {dis.precautions.join(", ")}
                  </p>
                  <p className="mt-2 text-lg">
                    <strong>Medications:</strong> {dis.medications.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            selectedSymptoms.length > 0 && (
              <div className="mt-6 text-center text-gray-500">
                <p>No exact match found for the selected symptoms.</p>
              </div>
            )
          )}
        </div>
      </div>
    </classNames>
  );
};

export default SymptomChecker;
