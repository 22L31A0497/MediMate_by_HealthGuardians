// src/components/layout/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-medimate-dark">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold">MediMate</h1>
      </header>
      <main className="py-8 px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Layout;