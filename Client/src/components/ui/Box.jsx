import React from "react";
import { cn } from "@/lib/utils";

const Box = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md border border-gray-100 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
