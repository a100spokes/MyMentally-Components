import { useState } from "react";
import UserCarousel from "./UserCarousel";

interface DescriptionItem {
  text: string;
}

interface Option {
  id: string;
  isDefault: boolean;
  title: string;
  subButtonText?: string;
}

interface SlideData {
  title: string;
  description: DescriptionItem[];
  textBlock: string;
}

interface SlideObject {
  id: string;
  type: string;
  funnelType: string;
  template: string;
  data: SlideData;
  options: Option[];
}

interface ScreenTrialProps {
  slideObject: SlideObject;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenTrial({
  slideObject,
  onAnswer,
  onBack,
}: ScreenTrialProps) {
  const { data, options } = slideObject;
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.isDefault)?.id || options[0]?.id,
  );

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (onAnswer && selectedOption) {
      onAnswer(selectedOption);
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F2FF] to-[#E8E8F5] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-[#31345D] font-bold text-2xl md:text-3xl leading-tight">
              {data.title}
            </h1>
          </div>

          {/* Description List */}
          <div className="space-y-4">
            {data.description.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#31345D] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#31345D] text-base leading-7 flex-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="space-y-6">
            <p className="text-[#3B82F6] text-sm text-center leading-7">
              Choose the amount you're comfortable with
            </p>

            {/* Pricing Options */}
            <div className="grid grid-cols-4 gap-2.5">
              {options.map((option) => (
                <div key={option.id} className="relative">
                  <button
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full h-14 rounded-xl font-bold text-base transition-all ${
                      selectedOption === option.id
                        ? "bg-[#5D88FF] text-white shadow-lg"
                        : "bg-[#F3F4F6] text-[#1F2937] shadow-sm hover:bg-gray-200"
                    }`}
                  >
                    {option.title}
                  </button>
                  {option.subButtonText && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20">
                      <p className="text-[#6B7280] text-xs text-center leading-3">
                        {option.subButtonText}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* User Carousel */}
          <div className="flex justify-center mt-8">
            <UserCarousel />
          </div>

          {/* Text Block with Heart */}
          <div className="bg-[#E0E7FF] border border-[#C7D2FE] rounded-xl p-5 mt-12">
            <div className="text-center space-y-4">
              <div className="text-2xl">❤️</div>
              <p className="text-[#31345D] text-sm leading-snug px-2">
                {data.textBlock}
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full h-14 bg-[#50AEFF] text-white font-bold text-base rounded-full shadow-lg hover:bg-[#3B9AEF] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
