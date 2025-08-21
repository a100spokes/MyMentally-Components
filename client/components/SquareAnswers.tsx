import { useState } from "react";

interface QuestionOption {
  id: string;
  image: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    title: string;
    subtitle: string;
  };
  options: QuestionOption[];
}

interface SquareAnswersProps {
  slideObject: SlideObject;
  onAnswer?: (selectedOption: string) => void;
  onBack?: () => void;
}

export default function SquareAnswers({ slideObject, onAnswer, onBack }: SquareAnswersProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { data, options } = slideObject;

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

  const isSelected = (optionId: string) => selectedOption === optionId;

  return (
    <div className="h-screen flex flex-col flex-grow-0" style={{ backgroundColor: '#EEF2FF' }}>
      <div className="flex flex-col flex-1 p-6 pb-0" style={{ backgroundColor: '#EEF2FF' }}>
        <div className="w-full max-w-md mx-auto flex flex-col h-full">
          {/* Header */}
          <div className="flex flex-col items-start w-full pb-12">
            <div className="flex items-start w-full">
              <div className="flex flex-col items-center gap-4 flex-1">
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
                        d="M17.6673 10.6665L12.334 15.9998L17.6673 21.3332" 
                        stroke="#C9CFEC" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  
                  <div className="text-indigo-400 text-center font-roboto text-base">
                    Behaviors
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
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-8 flex-1 w-full min-h-0 pb-24">
            {/* Title */}
            <div className="flex flex-col items-start w-full">
              <h1 className="w-full text-slate-800 font-roboto text-2xl font-bold leading-8 text-center">
                {data.title}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="flex flex-col items-start w-full">
              <p className="w-full text-slate-800 font-roboto text-lg leading-7 text-center font-medium">
                {data.subtitle}
              </p>
            </div>

            {/* Options Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-xs mx-auto mt-8">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className="aspect-square flex items-center justify-center rounded-2xl transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: isSelected(option.id) ? '#5D88FF' : '#D4DDFF'
                  }}
                >
                  <img
                    src={option.image}
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6">
        <div className="w-full max-w-md mx-auto">
          <button
            onClick={() => selectedOption && onAnswer && onAnswer(selectedOption)}
            disabled={!selectedOption}
            className={`flex justify-center items-center w-full py-4 rounded-full transition-all duration-200 shadow-lg ${
              !selectedOption 
                ? 'cursor-not-allowed opacity-50' 
                : 'hover:opacity-90'
            }`}
            style={{ 
              backgroundColor: !selectedOption ? '#9CA3AF' : '#50AEFF'
            }}
          >
            <span className="flex-1 text-white text-center font-roboto text-base font-bold leading-6">
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
