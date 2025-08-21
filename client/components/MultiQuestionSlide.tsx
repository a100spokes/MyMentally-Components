import { useState } from "react";

interface QuestionOption {
  id: string;
  title: string;
  image: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    buttonText: string;
    title: string;
    subtitle: string;
  };
  options: QuestionOption[];
}

interface MultiQuestionSlideProps {
  slideObject: SlideObject;
  onAnswer?: (selectedOptions: string[]) => void;
  onBack?: () => void;
}

export default function MultiQuestionSlide({ slideObject, onAnswer, onBack }: MultiQuestionSlideProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { data, options } = slideObject;

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => {
      const newSelection = prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId];
      return newSelection;
    });
  };

  const handleNextClick = () => {
    if (onAnswer) {
      onAnswer(selectedOptions);
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  const isSelected = (optionId: string) => selectedOptions.includes(optionId);

  return (
    <div className="h-screen flex flex-col items-center p-6" style={{ backgroundColor: '#EEF2FF' }}>
      <div className="flex flex-col flex-1 w-full max-w-md">
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
        <div className="flex flex-col items-center gap-2 flex-1 w-full">
          {/* Title */}
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full text-slate-800 font-roboto text-2xl font-bold leading-8">
              {data.title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="flex flex-col items-start w-full">
            <p className="w-full text-blue-500 font-roboto text-base leading-6">
              {data.subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col items-start gap-4 w-full pt-2 flex-1">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionToggle(option.id)}
                className={`flex justify-between items-center p-4 rounded-xl w-full transition-all duration-200 shadow-sm ${
                  isSelected(option.id)
                    ? 'bg-indigo-500 shadow-lg'
                    : 'bg-indigo-100 hover:bg-indigo-200'
                }`}
              >
                {/* Content */}
                <div className="flex items-center">
                  <div className="flex items-start pr-4">
                    <div className={`flex p-2 rounded-lg ${
                      isSelected(option.id) 
                        ? 'bg-white/30' 
                        : 'bg-gray-100'
                    }`}>
                      <img
                        src={option.image}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start flex-1">
                    <span className={`font-roboto text-base leading-6 text-left ${
                      isSelected(option.id) 
                        ? 'text-indigo-100' 
                        : 'text-slate-800'
                    }`}>
                      {option.title}
                    </span>
                  </div>
                </div>

                {/* Checkbox */}
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${
                  isSelected(option.id)
                    ? 'bg-indigo-100 border-indigo-100'
                    : 'bg-white border-gray-300'
                }`}>
                  {isSelected(option.id) && (
                    <span className="text-indigo-500 text-2xl leading-6">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start w-full pt-6">
          <button
            onClick={handleNextClick}
            className="flex justify-center items-center w-full py-4 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-200 shadow-lg"
          >
            <span className="flex-1 text-white text-center font-roboto text-base font-bold leading-6">
              {data.buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
