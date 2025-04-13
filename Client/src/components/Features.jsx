import React from "react";
import {
  Brain,
  Video,
  FileText,
  MapPin,
  Clock,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-medimate-primary" />,
    title: "AI Symptom Checker",
    description:
      "Enter your symptoms and get instant predictions about possible conditions and precautions to take.",
  },
  {
    icon: <Video className="h-10 w-10 text-medimate-primary" />,
    title: "Video Consultations",
    description:
      "Connect with doctors in real-time via video calls for personalized medical advice.",
  },
  {
    icon: <FileText className="h-10 w-10 text-medimate-primary" />,
    title: "Health Records",
    description:
      "Keep track of your symptoms, prescriptions, and medical reports all in one secure place.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-medimate-primary" />,
    title: "Emergency Assistance",
    description:
      "Quickly call for emergency services with location sharing and alert your emergency contacts.",
  },
  {
    icon: <Clock className="h-10 w-10 text-medimate-primary" />,
    title: "24/7 Availability",
    description:
      "Access health support anytime, anywhere - we're always available when you need us.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-medimate-primary" />,
    title: "Doctor Availability",
    description:
      "See which doctors are online and available for immediate consultation.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-medimate-dark">
            Features to Keep You Healthy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            MediMate combines cutting-edge technology with healthcare expertise
            to provide essential services that help you manage your health
            effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 shadow-sm transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-medimate-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
