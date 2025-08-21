import { useState, useEffect } from "react";

interface Question {
  id: string;
  idProgress: string;
  percProgress: number;
  title: string;
  answers: Array<{ id: string; text: string }>;
}

interface ProgressSection {
  id: string;
  progressText: string;
  progressColor: string;
  question?: Question;
}

interface Review {
  id: string;
  rating: string;
  review: string;
  subtitle: string;
}

interface CalcData {
  title: string;
  description: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: CalcData;
  progressSection: ProgressSection[];
  reviews: Review[];
}

interface ScreenCalcProps {
  slideObject: SlideObject;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenCalc({
  slideObject,
  onAnswer,
  onBack,
}: ScreenCalcProps) {
  const { data, progressSection, reviews } = slideObject;
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  // Generate star rating
  const generateStars = (rating: string) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          width="24"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M11.3592 3.51249C11.7192 2.40729 13.2828 2.40729 13.6416 3.51249L14.9256 7.46289C15.004 7.70348 15.1565 7.91311 15.3612 8.06182C15.566 8.21053 15.8125 8.29071 16.0656 8.29089H20.22C21.3828 8.29089 21.8652 9.77889 20.9256 10.4629L17.5656 12.9037C17.3604 13.0525 17.2076 13.2625 17.1292 13.5035C17.0507 13.7445 17.0506 14.0042 17.1288 14.2453L18.4128 18.1957C18.7728 19.3009 17.5068 20.2213 16.5648 19.5373L13.2048 17.0965C12.9998 16.9477 12.753 16.8676 12.4998 16.8676C12.2465 16.8676 11.9997 16.9477 11.7948 17.0965L8.43476 19.5373C7.49396 20.2213 6.22916 19.3009 6.58796 18.1957L7.87196 14.2453C7.95017 14.0042 7.95003 13.7445 7.87156 13.5035C7.79309 13.2625 7.64032 13.0525 7.43516 12.9037L4.07636 10.4641C3.13676 9.78009 3.62036 8.29209 4.78196 8.29209H8.93516C9.18842 8.29216 9.4352 8.2121 9.64019 8.06337C9.84517 7.91464 9.99785 7.70487 10.0764 7.46409L11.3604 3.51369L11.3592 3.51249Z"
            fill="#FACC15"
          />
        </svg>
      );
    }
    return stars;
  };

  const getProgressPercentage = (section: ProgressSection) => {
    if (section.question) {
      return section.question.percProgress;
    }
    return 0;
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case "5D88FF": return "#5D88FF";
      case "C084FC": return "#C084FC";
      case "FACC15": return "#FACC15";
      case "F87171": return "#F87171";
      case "FF8DE1": return "#FF8DE1";
      default: return "#5D88FF";
    }
  };

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "#ebecf9",
        font: '400 16px/24px Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      }}
    >
      <div className="flex flex-col justify-start items-center mx-auto">
        <div
          className="flex items-start justify-center p-6 gap-4"
          style={{
            background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
            height: "100vh",
            width: "420px",
          }}
        >
          <div 
            className="flex h-full max-w-md flex-col items-center gap-7 flex-1"
            style={{
              background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
              paddingTop: "43px",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingBottom: "5px",
            }}
          >
            {/* Title */}
            <div className="flex flex-col items-center w-full">
              <h1 className="text-slate-800 text-center font-roboto text-3xl font-bold leading-9">
                {data.description}
              </h1>
            </div>

            {/* Progress Sections */}
            <div className="flex pb-4 flex-col items-start gap-6 w-full">
              {progressSection.map((section, index) => {
                const percentage = getProgressPercentage(section);
                const progressColor = getProgressColor(section.progressColor);
                const textColor = percentage > 0 ? progressColor : section.progressColor.startsWith('#') ? section.progressColor : `#${section.progressColor}`;

                return (
                  <div key={section.id} className="flex flex-col items-start gap-1 w-full">
                    {/* Progress Text and Percentage */}
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start">
                        <span className="text-slate-800 font-inter text-base font-medium leading-6">
                          {section.progressText}
                        </span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span 
                          className="font-inter text-base font-bold leading-6"
                          style={{ color: textColor }}
                        >
                          {percentage}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex h-2.5 items-center w-full rounded-full bg-gray-200 relative">
                      {percentage > 0 && (
                        <div
                          className="h-2.5 rounded-full absolute left-0 top-0"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: progressColor,
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Review Carousel */}
            <div 
              className="flex p-6 flex-col items-start gap-3 flex-shrink-0 w-full rounded-2xl bg-white relative overflow-hidden"
              style={{
                height: "209px",
                boxShadow: "9px 12px 20px -3px #D4D3F2",
              }}
            >
              {/* Stars and Rating */}
              <div className="flex justify-center items-center w-full">
                <div className="flex items-start">
                  {generateStars(reviews[currentReviewIndex].rating)}
                </div>
                <div className="flex pl-2 flex-col items-start">
                  <span className="text-slate-800 font-inter text-lg font-bold leading-7">
                    {reviews[currentReviewIndex].rating}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div className="flex flex-col items-center w-full">
                <p className="text-slate-800 text-center font-roboto text-lg leading-7 w-full">
                  {reviews[currentReviewIndex].review}
                </p>
              </div>

              {/* Author */}
              <div className="flex pt-1 flex-col items-center w-full">
                <span className="text-gray-500 text-center font-inter text-base leading-6 w-full">
                  {reviews[currentReviewIndex].subtitle}
                </span>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-start w-full">
              {reviews.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentReviewIndex ? "bg-gray-600" : "bg-gray-300"
                    }`}
                  />
                  {index < reviews.length - 1 && <div className="w-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
