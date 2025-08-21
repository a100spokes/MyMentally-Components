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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
          {question}
        </h3>
        <div className="flex flex-col gap-3">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
