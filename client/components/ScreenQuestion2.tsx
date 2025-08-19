import { useState } from "react";

interface QuestionOption {
  id: string;
  title: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    title: string;
  };
  options: QuestionOption[];
}

interface ScreenQuestion2Props {
  slideObject: SlideObject;
  onAnswer?: (selectedOption: string) => void;
  onBack?: () => void;
}

export default function ScreenQuestion2({
  slideObject,
  onAnswer,
  onBack,
}: ScreenQuestion2Props) {
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

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-b from-indigo-50 to-purple-100 p-6">
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
              About You
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.375 3.5L5.25 10.5L2.625 7.875"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-0.5 w-11 bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex flex-col items-start gap-5 w-full h-[444px]">
          {/* Question Title */}
          <div className="w-full">
            <h1 className="text-gray-800 font-roboto text-2xl font-bold leading-8">
              {data.title}
            </h1>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 gap-y-4 flex-1 w-full">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`flex flex-col justify-center items-center py-3 px-14 rounded-lg transition-all duration-200 ${
                  selectedOption === option.id
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "bg-indigo-100 text-slate-800 hover:bg-indigo-200"
                }`}
              >
                <span className="font-roboto text-lg leading-7 text-center">
                  {option.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
