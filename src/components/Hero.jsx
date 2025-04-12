import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";


import { ArrowRight, Activity, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Smart Health Assistant for Emergency & Remote Care
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Instantly check symptoms, consult verified doctors, and get emergency help — all in one platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/symptom-checker">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Check Symptoms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/emergency">
              <Button variant="destructive">
                Emergency Help
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-video bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80"
              alt="Telemedicine consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons */}
          <div className="absolute -bottom-5 -left-5 bg-white rounded-full shadow-lg p-3 border border-gray-200">
            <Activity className="h-6 w-6 text-blue-600" />
          </div>
          <div className="absolute -top-5 -right-5 bg-white rounded-full shadow-lg p-3 border border-gray-200">
            <Video className="h-6 w-6 text-teal-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
