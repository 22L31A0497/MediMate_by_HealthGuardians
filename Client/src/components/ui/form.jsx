import React from "react";
import {
  useFormContext,
  FormProvider as RHFProvider,
  Controller
} from "react-hook-form";

export function Form({ children, ...props }) {
  return <form {...props}>{children}</form>;
}

export function FormItem({ children }) {
  return <div className="space-y-1">{children}</div>;
}

export function FormLabel({ children }) {
  return <label className="text-sm font-medium text-gray-700">{children}</label>;
}

export function FormControl({ children }) {
  return <div>{children}</div>;
}

export function FormMessage({ children }) {
  return <p className="text-sm text-red-500">{children}</p>;
}

export function FormField({ control, name, render }) {
  return (
    <Controller
      control={control}
      name={name}
      render={render}
    />
  );
}
