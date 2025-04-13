import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medimate-dark">About MediMate</h3>
            <p className="text-gray-600 mb-4">
              MediMate is a smart health assistant for emergency and remote care,
              designed to make healthcare accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-medimate-primary hover:text-medimate-secondary ring-2 ring-blue-500 p-1 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-medimate-primary hover:text-medimate-secondary ring-2 ring-blue-500 p-1 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-medimate-primary hover:text-medimate-secondary ring-2 ring-blue-500 p-1 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medimate-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medimate-primary">Home</Link>
              </li>
              <li>
                <Link to="/symptom-checker" className="text-gray-600 hover:text-medimate-primary">Symptom Checker</Link>
              </li>
              <li>
                <Link to="/consult" className="text-gray-600 hover:text-medimate-primary">Consult a Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-medimate-primary">Dashboard</Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-600 hover:text-medimate-primary">Emergency</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medimate-dark">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                support@medimate.app
              </p>
              <p className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                +1 (800) MEDIMATE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} MediMate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-medimate-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-medimate-primary">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-medimate-primary">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
