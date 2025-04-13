import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, UserCircle, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Heart className="text-red-500 w-6 h-6" />
            <span className="ml-2 text-xl font-bold text-gray-800">MediMate</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/symptom-checker" className="hover:text-blue-600">Symptom Checker</Link>
            <Link to="/video" className="hover:text-blue-600">Consult Doctor</Link>
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link to="/emergency" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
              Emergency
            </Link>
            <Link to="/login" className="flex items-center hover:text-blue-600">
              <LogIn className="w-5 h-5 mr-1" /> Login
            </Link>
            <Link to="/profile">
              <UserCircle className="w-7 h-7 text-gray-700 hover:text-blue-600" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/symptom-checker" className="block py-2" onClick={() => setIsOpen(false)}>Symptom Checker</Link>
          <Link to="/video" className="block py-2" onClick={() => setIsOpen(false)}>Consult Doctor</Link>
          <Link to="/dashboard" className="block py-2" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/emergency" className="block py-2 text-red-500" onClick={() => setIsOpen(false)}>Emergency</Link>
          <Link to="/login" className="block py-2" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/profile" className="block py-2" onClick={() => setIsOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
