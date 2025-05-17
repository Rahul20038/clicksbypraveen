
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { Camera } from "lucide-react";

const Login = () => {
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const toggleAuthType = () => {
    setAuthType(authType === "login" ? "register" : "login");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <Camera size={36} className="text-purple-600" />
                <span className="font-playfair font-bold text-2xl text-gray-800">
                  ClicksByPraveen
                </span>
              </Link>
              
              <h1 className="text-4xl font-bold mb-4">
                {authType === "login" ? "Welcome Back!" : "Join ClicksByPraveen"}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {authType === "login"
                  ? "Sign in to access your account and manage your bookings."
                  : "Create an account to book sessions and save your favorite photos."}
              </p>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=870&auto=format&fit=crop" 
                  alt="Photography session" 
                  className="rounded-lg shadow-lg max-h-96 object-cover mx-auto"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <AuthForm type={authType} onToggle={toggleAuthType} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
