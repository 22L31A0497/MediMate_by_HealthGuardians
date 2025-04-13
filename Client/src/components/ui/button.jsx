// src/components/ui/button.js
import React from "react";
import classNames from "classnames";

export const Button = ({ children, className, variant = "primary", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={classNames(base, variants[variant], className, "px-4 py-2")}
      {...props}
    >
      {children}
    </button>
  );
};