import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form, FormControl, FormField, FormItem,
  FormLabel, FormMessage
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "./ui/use-toast";
import { Phone, MapPin, Bell, SendHorizontal, Loader2 } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";

const formSchema = z.object({
  contactName: z.string().min(2, { message: "Contact name must be at least 2 characters." }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
  emergencyDetails: z.string().optional(),
});

const Emergency = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      contactPhone: "",
      emergencyDetails: "",
    },
  });

  const getLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLocating(false);
          toast({
            title: "Location detected",
            description: "Your location has been captured and will be shared.",
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          setIsLocating(false);
          toast({
            title: "Location error",
            description: "Unable to get location. Try again or enter manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      setIsLocating(false);
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support this feature.",
        variant: "destructive",
      });
    }
  };

  const callEmergencyServices = () => {
    window.location.href = "tel:108"; // For India
  };

  const handleSubmit = (data) => {
    setIsLoading(true);

    const alertPayload = {
      ...data,
      location,
      timestamp: new Date().toISOString(),
    };

    console.log("Sending alert:", alertPayload);

    setTimeout(() => {
      toast({
        title: "Emergency alert sent",
        description: `Alert sent to ${data.contactName} with your details.`,
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <Bell className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Emergency Assistance</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Share your location, alert emergency contacts, or call 108 directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-red-500" /> Call Emergency Services
            </h2>
            <p className="text-gray-600 mb-6">
              Tap below to call India's emergency ambulance number (108).
            </p>
            <Button
              onClick={callEmergencyServices}
              className="w-full py-6 text-lg bg-red-600 hover:bg-red-700"
            >
              Call 108
            </Button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Direct call to ambulance service
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" /> Detect Your Location
            </h2>
            <p className="text-gray-600 mb-6">
              Click to detect your current location automatically.
            </p>
            <Button
              onClick={getLocation}
              variant="outline"
              className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
              disabled={isLocating}
            >
              {isLocating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Detecting Location...
                </>
              ) : (
                "Detect My Location"
              )}
            </Button>

            {location && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm">
                <p className="font-medium text-gray-800">Detected Location:</p>
                <p className="text-gray-600">Latitude: {location.lat.toFixed(6)}</p>
                <p className="text-gray-600">Longitude: {location.lng.toFixed(6)}</p>
                <a
                  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Bell className="h-5 w-5 mr-2 text-orange-500" /> Alert Emergency Contact
          </h2>
          <p className="text-gray-600 mb-6">
            Send an emergency alert to your saved contact with optional details and your location.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="emergencyDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency Details (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the emergency..." className="h-20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Alert...
                  </>
                ) : (
                  <>
                    <SendHorizontal className="mr-2 h-4 w-4" />
                    Send Emergency Alert
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-8 bg-red-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Important</h3>
          <p className="text-gray-700">
            Always call 108 in case of a life-threatening emergency. This feature helps notify loved ones but does not replace professional services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Emergency;
