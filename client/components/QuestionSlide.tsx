import { useState } from "react";
import { Link } from "react-router-dom";

interface QuestionOption {
  id: string;
  title: string;
  icon: string;
}

interface Section {
  name: string;
  number: number;
  progressPercent: number;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    title: string;
  };
  options: QuestionOption[];
  section: Section;
}

interface QuestionSlideProps {
  slideObject: SlideObject;
  onAnswer?: (selectedOption: string) => void;
  onBack?: () => void;
}

export default function QuestionSlide({ slideObject, onAnswer, onBack }: QuestionSlideProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { data, options, section } = slideObject;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    if (onAnswer) {
      onAnswer(optionId);
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  // Gender icons mapping
  const getIconSymbol = (optionId: string) => {
    switch (optionId) {
      case 'male':
        return '♂';
      case 'female':
        return '♀';
      case 'other':
        return '⚧';
      default:
        return '?';
    }
  };

  const getIconColor = (optionId: string, isSelected: boolean) => {
    if (isSelected) {
      return 'text-white';
    }
    return 'text-pink-500';
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-indigo-50 to-purple-100 p-6">
      <div className="flex flex-col items-center gap-12 w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Top Navigation */}
          <div className="flex justify-between items-center w-full px-2">
            <button 
              onClick={handleBackClick}
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
                  d="M17.6654 10.6665L12.332 15.9998L17.6654 21.3332" 
                  stroke="#C9CFEC" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <div className="text-indigo-400 text-center font-roboto text-base">
              {section.name}
            </div>
            
            <div className="opacity-0 text-right font-roboto text-xs">
              <span className="font-bold text-base">1</span>
              <span>/31</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-5">
            {/* Background Progress */}
            <div className="flex w-full items-center h-5">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              <div className="h-0.5 flex-1 bg-gray-300"></div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              <div className="h-0.5 flex-1 bg-gray-300"></div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              <div className="h-0.5 flex-1 bg-gray-300"></div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
            </div>
            
            {/* Active Progress */}
            <div className="absolute top-0 left-0 w-16 h-5 overflow-hidden">
              <div className="flex w-full items-center h-5">
                {/* First step completed */}
                <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.375 3.5L5.25 10.5L2.625 7.875" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="h-0.5 w-11 bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex flex-col items-start gap-5 w-full">
          {/* Question Title */}
          <div className="w-full">
            <h1 className="text-slate-800 font-roboto text-2xl font-bold leading-8">
              {data.title}
            </h1>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-4 w-full">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`flex items-center p-4 rounded-lg w-full transition-all duration-200 ${
                  selectedOption === option.id
                    ? 'bg-indigo-500 shadow-lg'
                    : 'bg-indigo-100 hover:bg-indigo-200'
                }`}
              >
                <div className="flex items-center pr-4">
                  <span 
                    className={`text-2xl leading-8 ${getIconColor(option.id, selectedOption === option.id)}`}
                  >
                    {getIconSymbol(option.id)}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <span 
                    className={`font-roboto text-base leading-6 ${
                      selectedOption === option.id 
                        ? 'text-white font-medium' 
                        : 'text-slate-800'
                    }`}
                  >
                    {option.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
