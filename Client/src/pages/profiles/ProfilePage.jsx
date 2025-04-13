import PatientProfile from "./PatientProfile";
import DoctorProfile from "./DoctorProfile";

function ProfilePage() {
  const role = localStorage.getItem("role"); // get role from storage
  const isDoctor = role === "doctor";

  return isDoctor ? <DoctorProfile /> : <PatientProfile />;
}

export default ProfilePage;
