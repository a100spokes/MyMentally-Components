import React from "react";

interface QuizHeaderProps {
  title?: string;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
}

export function QuizHeader({ 
  title, 
  currentStep, 
  totalSteps, 
  onBack 
}: QuizHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full px-2">
      <button
        onClick={onBack}
        className="w-8 h-8 flex items-center justify-center"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6673 10.6665L12.334 15.9998L17.6673 21.3332"
            stroke="#C9CFEC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {title && (
        <div className="text-indigo-400 text-center font-roboto text-base">
          {title}
        </div>
      )}

      {currentStep && totalSteps && (
        <div className="text-right font-roboto text-xs">
          <span className="font-bold text-base">{currentStep}</span>
          <span>/{totalSteps}</span>
        </div>
      )}
    </div>
  );
}
