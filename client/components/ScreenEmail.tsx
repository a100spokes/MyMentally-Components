import React, { useState } from "react";

interface EmailData {
  image: string;
  buttonText: string;
  title: string;
  description: string;
  placeholder: string;
  skip: boolean;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: EmailData;
}

interface ScreenEmailProps {
  slideObject: SlideObject;
  onAnswer?: (email: string) => void;
  onBack?: () => void;
}

export default function ScreenEmail({
  slideObject,
  onAnswer,
  onBack,
}: ScreenEmailProps) {
  const { data } = slideObject;
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (data.skip || (email && isValidEmail)) {
      onAnswer?.(email);
    }
  };

  // Check if button should be enabled
  const isButtonEnabled = data.skip || (email && isValidEmail);

  return (
    <div
      className="flex flex-col h-screen overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
        font: '400 16px/24px Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      }}
    >
      <div className="flex flex-col justify-between items-center h-full max-w-md mx-auto w-full p-6">
        {/* Main Content */}
        <div className="flex flex-col items-center flex-1 justify-center gap-6 w-full">
          {/* Email Icon */}
          <div className="flex flex-col items-center justify-end w-full">
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFA69E" }}
            >
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72 8H8C5.8 8 4 9.8 4 12V48C4 50.2 5.8 52 8 52H72C74.2 52 76 50.2 76 48V12C76 9.8 74.2 8 72 8Z"
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                />
                <path
                  d="M76 12L40 32L4 12"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="40" cy="20" r="3" fill="#F87171" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h1
              className="text-center font-roboto font-bold leading-9"
              style={{
                color: "#31345D",
                fontSize: "30px",
                lineHeight: "36px",
              }}
            >
              {data.title}
            </h1>
          </div>

          {/* Email Input */}
          <div className="w-full">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={data.placeholder}
              className="w-full px-4 py-4 text-lg font-roboto rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{
                fontSize: "18px",
                color: email ? "#31345D" : "#9CA3AF",
              }}
            />
          </div>

          {/* Privacy Notice */}
          <div
            className="w-full p-4 rounded-lg flex items-start gap-4"
            style={{ backgroundColor: "#E8E8F5" }}
          >
            <div className="flex items-center justify-center pt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11Z"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="font-roboto leading-5"
                style={{
                  color: "#6B7280",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            onClick={handleSubmit}
            disabled={!isButtonEnabled}
            className={`w-full py-4 px-6 rounded-full font-roboto font-bold text-lg transition-all ${
              isButtonEnabled
                ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            style={{
              backgroundColor: isButtonEnabled ? "#50AEFF" : "#D1D5DB",
              color: isButtonEnabled ? "#FFFFFF" : "#9CA3AF",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
