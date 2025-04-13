import React from "react"
import Navbar from "./Navbar"

const DoctorConsultancy = () => {
  const doctors = [
    {
      name: "Dr. Anjali Sharma",
      specialization: "Cardiologist",
      experience: "10 years",
      available: true,
    },
    {
      name: "Dr. Rajiv Menon",
      specialization: "Dermatologist",
      experience: "7 years",
      available: true,
    },
    {
      name: "Dr. Priya Verma",
      specialization: "Pediatrician",
      experience: "5 years",
      available: false,
    },
    {
      name: "Dr. Arjun Desai",
      specialization: "Orthopedic",
      experience: "12 years",
      available: true,
    },
  ]

  const specializations = [...new Set(doctors.map((doc) => doc.specialization))]
  const [filter, setFilter] = React.useState("All")

  const filteredDoctors =
    filter === "All" ? doctors : doctors.filter((doc) => doc.specialization === filter)

  return (<>
  <Navbar />
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Consult a Doctor</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
            filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        {specializations.map((spec, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
              filter === spec ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(spec)}
          >
            {spec}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc, i) => (
          <div
            key={i}
            className={`rounded-2xl p-5 shadow-md border ${
              doc.available ? "border-green-200" : "border-gray-300"
            } bg-white`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{doc.name}</h2>
            <p className="text-blue-600 mt-1">{doc.specialization}</p>
            <p className="text-sm text-gray-500 mt-1">{doc.experience} experience</p>

            <div className="mt-4 flex justify-between items-center">
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                  doc.available
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {doc.available ? "Available" : "Offline"}
              </span>

              <button
                disabled={!doc.available}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                  doc.available
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                🎥 Video Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></>
  )
}

export default DoctorConsultancy