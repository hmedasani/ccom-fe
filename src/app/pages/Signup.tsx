
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mail, User, Eye, EyeOff } from "lucide-react";
import { SocialLogin } from "@/components/SocialLogin";
import { OTPVerification } from "@/components/OTPVerification";
import { PasswordStrength } from "@/components/PasswordStrength";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [step, setStep] = useState<"input" | "otp" | "welcome">("input");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    password: "",
    agreeTerms: false,
    agreePrivacy: false
  });
  const [contactType, setContactType] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "contact" && typeof value === "string") {
      detectContactType(value);
    }
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.contact.trim()) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and privacy policy",
        variant: "destructive"
      });
      return;
    }

    setStep("otp");
    toast({
      title: "Verification Code Sent!",
      description: `Please check your ${contactType} for the verification code`,
    });
  };

  const handleOTPVerified = () => {
    setStep("welcome");
  };

  const handleResendOTP = () => {
    toast({
      title: "Code Resent",
      description: `New verification code sent to your ${contactType}`,
    });
  };

  const handleWelcomeComplete = () => {
    window.location.href = "/my-account";
  };

  if (step === "welcome") {
    return <WelcomeScreen firstName={formData.firstName} onComplete={handleWelcomeComplete} />;
  }

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
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>
              {step === "input" 
                ? "Join thousands of users who trust our platform" 
                : `Enter the verification code sent to your ${contactType}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === "input" ? (
              <>
                <form onSubmit={handleCreateAccount} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

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
                        value={formData.contact}
                        onChange={(e) => handleInputChange("contact", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                    {formData.contact && (
                      <p className="text-xs text-gray-500">
                        Detected as {contactType === "email" ? "email address" : "phone number"}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password (Optional)</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {formData.password && <PasswordStrength password={formData.password} />}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                          Terms of Service
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked as boolean)}
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Create Account
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
                contact={formData.contact}
                contactType={contactType}
                onVerified={handleOTPVerified}
                onResend={handleResendOTP}
                onBack={() => setStep("input")}
              />
            )}

            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
