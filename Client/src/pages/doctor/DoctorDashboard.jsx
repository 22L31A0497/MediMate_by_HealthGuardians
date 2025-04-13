import React from "react"
import Navbar from "../../components/Navbar"

const Dashboard = () => {
  const patientData = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    location: "Chennai",
    emergencyContact: "9876543210",
    currentHealthStatus: "Stable",
    pastDiseases: ["Diabetes", "Hypertension"],
    ongoingMedications: ["Metformin", "Amlodipine"],
    prescriptionHistory: [
      { date: "2024-01-10", medications: ["Metformin", "Amlodipine"] },
      { date: "2024-02-15", medications: ["Amlodipine"] },
    ],
    recentReports: [
      { date: "2024-03-01", reportName: "Blood Sugar", value: "120 mg/dL" },
      { date: "2024-03-05", reportName: "Blood Pressure", value: "130/85 mmHg" },
    ],
  }

  const [tab, setTab] = React.useState("overview")

  return (<>
   
    <Navbar />
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-2 font-medium rounded-full shadow ${
            tab === "overview"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setTab("overview")}
        >
          Health Overview
        </button>
        <button
          className={`px-6 py-2 font-medium rounded-full shadow ${
            tab === "reports"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setTab("reports")}
        >
          Reports & History
        </button>
      </div>

      {tab === "overview" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Patient Info</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Name:</strong> {patientData.name}</li>
              <li><strong>Age:</strong> {patientData.age}</li>
              <li><strong>Gender:</strong> {patientData.gender}</li>
              <li><strong>Location:</strong> {patientData.location}</li>
              <li><strong>Emergency Contact:</strong> {patientData.emergencyContact}</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Current Health Status</h2>
            <div className="text-center">
              <span className="text-lg inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
                {patientData.currentHealthStatus}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-yellow-100">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">Past Diseases</h2>
            <div className="flex flex-wrap gap-3">
              {patientData.pastDiseases.map((disease, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {disease}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Ongoing Medications</h2>
            <div className="flex flex-wrap gap-3">
              {patientData.ongoingMedications.map((med, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {med}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "reports" && (
        <div className="space-y-6">
          <div className="mt-4 bg-white rounded-2xl shadow-md p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Prescription History</h2>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="p-3 text-left border">Date</th>
                  <th className="p-3 text-left border">Medications</th>
                </tr>
              </thead>
              <tbody>
                {patientData.prescriptionHistory.map((entry, i) => (
                  <tr key={i} className="hover:bg-indigo-50">
                    <td className="p-3 border">{entry.date}</td>
                    <td className="p-3 border">{entry.medications.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Recent Reports</h2>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-pink-100 text-pink-800">
                  <th className="p-3 text-left border">Date</th>
                  <th className="p-3 text-left border">Report</th>
                  <th className="p-3 text-left border">Value</th>
                </tr>
              </thead>
              <tbody>
                {patientData.recentReports.map((report, i) => (
                  <tr key={i} className="hover:bg-pink-50">
                    <td className="p-3 border">{report.date}</td>
                    <td className="p-3 border">{report.reportName}</td>
                    <td className="p-3 border">{report.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Dashboard