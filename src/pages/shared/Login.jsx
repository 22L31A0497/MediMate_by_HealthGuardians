import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "../../components/Navbar";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const [userType, setUserType] = useState("patient");
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    toast({
      title: `${userType} Login Successful`,
      description: `Welcome back! You've been logged in as a ${userType}.`,
    });

    navigate("/dashboard");
  };

  return (<>
    <Layout>
      <div className="container max-w-md mx-auto py-10">
        <div className="flex justify-center mb-6">
          <Heart className="h-10 w-10 text-medimate-primary" />
          <span className="ml-2 text-2xl font-bold text-medimate-dark">MediMate</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="patient" onValueChange={setUserType}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient">Patient</TabsTrigger>
                <TabsTrigger value="doctor">Doctor</TabsTrigger>
              </TabsList>

              <TabsContent value={userType}>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-medimate-primary hover:bg-blue-600">
                      Sign In
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col">
            <div className="text-sm text-center">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-medimate-primary hover:underline">
                Sign up
              </Link>
            </div>

            <Link to="/" className="text-sm text-medimate-dark hover:text-medimate-primary mt-2">
              Return to home
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Layout></>
  );
};

export default Login;
