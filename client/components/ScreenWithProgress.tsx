import { useState, useEffect } from "react";

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    image: string;
    buttonText: string;
    title: string;
    description: string;
    progressText: string;
    progressTime: number; // in milliseconds
  };
}

interface ScreenWithProgressProps {
  slideObject: SlideObject;
  onAnswer?: () => void;
}

export default function ScreenWithProgress({ slideObject, onAnswer }: ScreenWithProgressProps) {
  const { data } = slideObject;
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start progress after 0.5 seconds
    const startDelay = setTimeout(() => {
      // Non-linear progress with pauses
      const progressSteps = [
        { percent: 20, delay: 300 },    // First chunk: 20% in 300ms
        { percent: 25, delay: 200 },    // Pause: stay at 25% for 200ms
        { percent: 60, delay: 500 },    // Second chunk: 60% in 500ms
        { percent: 65, delay: 300 },    // Pause: stay at 65% for 300ms
        { percent: 100, delay: 200 },   // Final chunk: 100% in 200ms
      ];

      let currentStep = 0;
      let currentProgress = 0;

      const runNextStep = () => {
        if (currentStep >= progressSteps.length) {
          setIsComplete(true);
          return;
        }

        const step = progressSteps[currentStep];
        const targetPercent = step.percent;
        const stepDuration = step.delay;

        // Animate to target percentage
        const startTime = Date.now();
        const startProgress = currentProgress;
        const progressDiff = targetPercent - startProgress;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progressRatio = Math.min(elapsed / stepDuration, 1);
          
          // Use easeOutQuart for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
          const newProgress = startProgress + (progressDiff * easeOutQuart);
          
          setProgress(Math.round(newProgress));

          if (progressRatio < 1) {
            requestAnimationFrame(animate);
          } else {
            currentProgress = targetPercent;
            currentStep++;
            
            // Move to next step after a brief delay
            setTimeout(runNextStep, 50);
          }
        };

        requestAnimationFrame(animate);
      };

      runNextStep();
    }, 500); // 0.5 second delay before starting

    return () => clearTimeout(startDelay);
  }, [data.progressTime]);

  const handleNextClick = () => {
    if (onAnswer) {
      onAnswer();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-md py-9">
        {/* Image Container */}
        <div className="flex justify-center items-center w-full px-8 pb-8">
          <img
            src={data.image}
            alt="Illustration representing MyMentally's understanding"
            className="w-64 h-64 max-w-96 rounded-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start gap-4 w-full px-8">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h1 className="w-full text-slate-800 text-center font-roboto text-2xl font-bold leading-7">
              {data.title}
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center w-full">
            <p className="w-80 text-slate-800 text-center font-roboto text-base leading-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Progress or Button Container */}
      <div className="flex flex-col items-start gap-2 w-96 px-8">
        {!isComplete ? (
          <>
            {/* Progress Info */}
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="flex flex-col items-center w-full">
                <p className="w-full text-blue-400 text-center font-roboto text-sm leading-5">
                  {data.progressText}
                </p>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="w-full text-blue-400 text-center font-roboto text-lg font-bold leading-7">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center w-full h-2.5 rounded-full bg-gray-200 relative">
              <div 
                className="h-2.5 bg-blue-400 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        ) : (
          /* Next Button */
          <button
            onClick={handleNextClick}
            className="flex justify-center items-center w-full py-4 px-4 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-200 shadow-lg"
          >
            <span className="flex-1 text-white text-center font-roboto text-lg font-bold leading-7">
              {data.buttonText}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
