
import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface OTPVerificationProps {
  contact: string;
  contactType: "email" | "phone";
  onVerified: () => void;
  onResend: () => void;
  onBack: () => void;
}

const OTPVerification = ({ contact, contactType, onVerified, onResend, onBack }: OTPVerificationProps) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all digits are entered
    if (newOtp.every(digit => digit !== "") && newOtp.join("").length === 6) {
      setTimeout(() => onVerified(), 500);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setIsResendDisabled(true);
    setOtp(["", "", "", "", "", ""]);
    onResend();
  };

  const setRef = useCallback(
    (el: HTMLInputElement | null, index: number) => {
      inputRefs.current[index] = el;
    },
    []
  );


  const maskedContact = contactType === "email"
    ? contact.replace(/(.{2})(.*)@/, "$1***@")
    : contact.replace(/(\d{3})(\d*)(\d{4})/, "$1***$3");

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to login
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-6">
          We sent a 6-digit code to <span className="font-medium">{maskedContact}</span>
        </p>

        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => setRef(el, index)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={handleResend}
            disabled={isResendDisabled}
            className="w-full"
          >
            {isResendDisabled
              ? `Resend code in ${countdown}s`
              : "Resend verification code"
            }
          </Button>

          <p className="text-xs text-gray-500">
            Didn&apos;t receive the code? Check your spam folder or try a different method.
          </p>
        </div>
      </div>
    </div>
  );
};

export { OTPVerification };
