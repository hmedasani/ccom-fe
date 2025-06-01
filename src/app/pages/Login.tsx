
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, User } from "lucide-react";
import { SocialLogin } from "@/components/SocialLogin";
import { OTPVerification } from "@/components/OTPVerification";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [step, setStep] = useState<"input" | "otp">("input");
  const [contact, setContact] = useState("");
  const [contactType, setContactType] = useState<"email" | "phone">("email");
  const { toast } = useToast();

  const detectContactType = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    
    if (emailRegex.test(value)) {
      setContactType("email");
    } else if (phoneRegex.test(value.replace(/\s+/g, ""))) {
      setContactType("phone");
    }
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      toast({
        title: "Required Field",
        description: "Please enter your email or phone number",
        variant: "destructive"
      });
      return;
    }
    
    setStep("otp");
    toast({
      title: "Code Sent!",
      description: `Verification code sent to your ${contactType}`,
    });
  };

  const handleOTPVerified = () => {
    toast({
      title: "Welcome back!",
      description: "You've been successfully logged in",
    });
    // Redirect to dashboard or my-account
    window.location.href = "/my-account";
  };

  const handleResendOTP = () => {
    toast({
      title: "Code Resent",
      description: `New verification code sent to your ${contactType}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              {step === "input" 
                ? "Enter your email or phone number to continue" 
                : `Enter the verification code sent to your ${contactType}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === "input" ? (
              <>
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact">Email or Phone Number</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        {contactType === "email" ? (
                          <Mail className="w-4 h-4 text-gray-400" />
                        ) : (
                          <User className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <Input
                        id="contact"
                        placeholder="Enter email or phone number"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          detectContactType(e.target.value);
                        }}
                        className="pl-10"
                        required
                      />
                    </div>
                    {contact && (
                      <p className="text-xs text-gray-500">
                        Detected as {contactType === "email" ? "email address" : "phone number"}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Verification Code
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <SocialLogin />
              </>
            ) : (
              <OTPVerification
                contact={contact}
                contactType={contactType}
                onVerified={handleOTPVerified}
                onResend={handleResendOTP}
                onBack={() => setStep("input")}
              />
            )}

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
