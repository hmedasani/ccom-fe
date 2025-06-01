
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  firstName: string;
  onComplete: () => void;
}

const WelcomeScreen = ({ firstName, onComplete }: WelcomeScreenProps) => {
  const [step, setStep] = useState(0);

  const steps = [
    "Creating your account...",
    "Setting up your profile...",
    "Almost ready..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {firstName}! 🎉
              </h1>
              <p className="text-gray-600">
                Your account has been successfully created
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  {steps.map((stepText, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${index <= step ? "bg-green-500" : "bg-gray-300"
                        } transition-colors duration-300`} />
                      <span className={`text-sm ${index <= step ? "text-gray-900" : "text-gray-500"
                        }`}>
                        {stepText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {step >= steps.length - 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">What`&apos;s next?</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Complete your profile information</li>
                      <li>• Set up security preferences</li>
                      <li>• Explore your account dashboard</li>
                    </ul>
                  </div>

                  <Button onClick={onComplete} className="w-full" size="lg">
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { WelcomeScreen };
