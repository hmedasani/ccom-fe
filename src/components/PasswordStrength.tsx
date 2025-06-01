
interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const getStrength = (password: string) => {
    if (password.length === 0) return { score: 0, label: "", color: "" };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    const levels = [
      { score: 1, label: "Very Weak", color: "bg-red-500" },
      { score: 2, label: "Weak", color: "bg-orange-500" },
      { score: 3, label: "Fair", color: "bg-yellow-500" },
      { score: 4, label: "Good", color: "bg-blue-500" },
      { score: 5, label: "Strong", color: "bg-green-500" }
    ];
    
    return levels[score - 1] || levels[0];
  };

  const strength = getStrength(password);

  return (
    <div className="space-y-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-2 flex-1 rounded-full ${
              level <= strength.score ? strength.color : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-600">
        Password strength: <span className="font-medium">{strength.label}</span>
      </p>
    </div>
  );
};

export { PasswordStrength };
