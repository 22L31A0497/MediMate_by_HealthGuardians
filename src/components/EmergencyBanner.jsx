import React from "react";
import { Button } from "../components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencyBanner = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-2xl shadow-md px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Need Immediate Help?
              </h3>
              <p className="mt-2 text-gray-600">
                For medical emergencies, access our emergency services with one click.
              </p>
            </div>
          </div>
          <Link to="/emergency">
            <Button 
              size="lg"
              className="bg-orange-600 text-orange-750 hover:bg-orange-400 shadow-md shadow-orange-300 transition-all"
            >
              Get Emergency Assistance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
