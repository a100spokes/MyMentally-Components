import React from "react";

interface QuizPopupButton {
  text: string;
  onClick: () => void;
}

interface QuizPopupProps {
  isOpen: boolean;
  question: string;
  buttons: QuizPopupButton[];
}

export function QuizPopup({ isOpen, question, buttons }: QuizPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6">
      <div
        className="bg-white rounded-2xl w-full max-w-sm overflow-hidden"
        style={{
          backdropFilter: "blur(27px)",
          width: "350px",
        }}
      >
        {/* Header with Question */}
        <div className="px-6 py-5 flex flex-col justify-center items-center">
          <p
            className="text-black font-roboto text-base leading-4 text-center"
            style={{
              fontFeatureSettings: "'liga' off, 'clig' off",
              letterSpacing: "-0.078px",
            }}
          >
            {question}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 opacity-36"></div>

        {/* Action Row */}
        <div className="flex">
          {buttons.map((button, index) => (
            <React.Fragment key={index}>
              <button
                onClick={button.onClick}
                className="flex-1 py-3 px-2 flex justify-center items-center gap-2"
              >
                <span
                  className="text-blue-500 text-center font-roboto text-lg leading-6"
                  style={{
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    letterSpacing: "-0.408px",
                    color: "#0A7AFF",
                  }}
                >
                  {button.text}
                </span>
              </button>
              {/* Vertical divider between buttons */}
              {index < buttons.length - 1 && (
                <div className="w-px bg-gray-300 opacity-36 self-stretch"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
