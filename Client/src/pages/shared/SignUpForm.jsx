import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "../../components/Navbar";

// Doctor Schema
const doctorSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  specialization: z.string().min(3, "Specialization is required"),
  experience: z
    .number({ invalid_type_error: "Experience is required" })
    .min(0, "Experience must be non-negative"),
  previousWorkplace: z.string().min(3, "Previous workplace is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

// Patient Schema
const patientSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(1, "Age must be greater than 0"),
  location: z.string().min(2, "Location is required"),
  emergencyContactName: z.string().min(3, "Emergency contact name is required"),
  emergencyContactNumber: z.string().min(10, "Emergency contact number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  medicalHistory: z.string().optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

export default function SignUpForm() {
  const [userType, setUserType] = useState("doctor");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userType === "doctor" ? doctorSchema : patientSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Account created successfully!");
    reset();
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 space-y-6">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <p className="text-center text-gray-600">Sign up to access MediMate services</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4">
          {["doctor", "patient"].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-6 py-2 font-semibold rounded-full border transition ${
                userType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Common Fields */}
          <Input label="Full Name" {...register("fullName")} error={errors.fullName} />
          <Input label="Email" type="email" {...register("email")} error={errors.email} />
          <Input label="Phone Number" {...register("phone")} error={errors.phone} />

          {userType === "doctor" ? (
            <>
              <Input
                label="Speciality"
                {...register("specialization")}
                error={errors.specialization}
              />
              <Input
                label="Years of Experience"
                type="number"
                {...register("experience", { valueAsNumber: true })}
                error={errors.experience}
              />
              <Input
                label="Previous Workplace"
                {...register("previousWorkplace")}
                error={errors.previousWorkplace}
              />
            </>
          ) : (
            <>
              <Input
                label="Age"
                type="number"
                {...register("age", { valueAsNumber: true })}
                error={errors.age}
              />
              <Input
                label="Location"
                {...register("location")}
                error={errors.location}
              />
              <Input
                label="Emergency Contact Name"
                {...register("emergencyContactName")}
                error={errors.emergencyContactName}
              />
              <Input
                label="Emergency Contact Number"
                {...register("emergencyContactNumber")}
                error={errors.emergencyContactNumber}
              />
              <Input
                label="Previous Medical Conditions (if any)"
                {...register("medicalHistory")}
                error={errors.medicalHistory}
              />
            </>
          )}

          {/* Password */}
          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password}
          />

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("agreeTerms")}
              className="mt-1"
            />
            <p className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </p>
          </div>
          {errors.agreeTerms && (
            <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            {userType === "doctor" ? "Create Doctor Account" : "Create Patient Account"}
          </button>
        </form>

        {/* Navigation */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium underline">
            Sign in
          </a>
        </p>
        <p className="text-sm text-center">
          <a href="/" className="text-blue-600 font-medium underline">
            Return to home
          </a>
        </p>
      </div>
    </>
  );
}

// Reusable Input component
const Input = React.forwardRef(({ label, error, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      {...props}
      ref={ref}
      className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
));
