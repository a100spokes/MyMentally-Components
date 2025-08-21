import React, { useState, useEffect, useCallback } from "react";
import { QuizPopup } from "./QuizPopup";
import useEmblaCarousel from "embla-carousel-react";

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

interface ProgressItem {
  id: string;
  label: string;
  targetPercentage: number;
  currentPercentage: number;
  color: string;
  completed: boolean;
  pauseAt?: number;
  question?: Question;
}

export default function ScreenCalc({
  slideObject,
  onAnswer,
  onBack,
}: ScreenCalcProps) {
  const { data, progressSection, reviews } = slideObject;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 0 });

  // Convert progressSection to ProgressItem format
  const [progressItems, setProgressItems] = useState<ProgressItem[]>(() => {
    return progressSection.map((section) => ({
      id: section.id,
      label: section.progressText,
      targetPercentage: 100,
      currentPercentage: 0,
      color: section.progressColor.startsWith('#') ? section.progressColor : `#${section.progressColor}`,
      completed: false,
      pauseAt: section.question?.percProgress,
      question: section.question,
    }));
  });

  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupQuestion, setPopupQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle Embla carousel selection
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentTestimonial(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Handle dot click
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  // Start progress animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      animateCurrentProgress();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animate current progress item
  const animateCurrentProgress = () => {
    if (currentProgressIndex >= progressItems.length) return;

    const currentItem = progressItems[currentProgressIndex];
    if (currentItem.completed) {
      // Move to next item
      setCurrentProgressIndex((prev) => prev + 1);
      return;
    }

    // Animate to pause point or completion
    const targetPercentage = currentItem.pauseAt || currentItem.targetPercentage;

    const interval = setInterval(() => {
      setProgressItems((prev) => {
        const newItems = [...prev];
        const item = newItems[currentProgressIndex];

        if (item.currentPercentage < targetPercentage) {
          item.currentPercentage = Math.min(
            item.currentPercentage + 2,
            targetPercentage,
          );
          return newItems;
        } else {
          clearInterval(interval);

          // Check if we need to show popup
          if (
            item.pauseAt &&
            item.currentPercentage === item.pauseAt &&
            !item.completed &&
            item.question
          ) {
            setPopupQuestion(item.question.title);
            setCurrentQuestion(item.question);
            setShowPopup(true);
          } else if (item.currentPercentage === item.targetPercentage) {
            // Mark as completed and move to next
            item.completed = true;
            setTimeout(() => {
              setCurrentProgressIndex((prev) => prev + 1);
            }, 500);
          }

          return newItems;
        }
      });
    }, 50);
  };

  // Trigger next animation when index changes
  useEffect(() => {
    if (currentProgressIndex < progressItems.length && isAnimating) {
      const timer = setTimeout(animateCurrentProgress, 300);
      return () => clearTimeout(timer);
    }
  }, [currentProgressIndex, isAnimating]);

  // Continue animation after popup
  const handlePopupAnswer = (answer: string) => {
    setShowPopup(false);

    // Continue current progress to 100%
    setProgressItems((prev) => {
      const newItems = [...prev];
      const item = newItems[currentProgressIndex];

      const interval = setInterval(() => {
        setProgressItems((current) => {
          const updated = [...current];
          const currentItem = updated[currentProgressIndex];

          if (currentItem.currentPercentage < currentItem.targetPercentage) {
            currentItem.currentPercentage = Math.min(
              currentItem.currentPercentage + 3,
              currentItem.targetPercentage,
            );
            return updated;
          } else {
            clearInterval(interval);
            currentItem.completed = true;
            setTimeout(() => {
              setCurrentProgressIndex((prev) => prev + 1);
            }, 500);
            return updated;
          }
        });
      }, 30);

      return newItems;
    });
  };

  const renderCheckmark = () => (
    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L6 12L2.5 8.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const renderStars = (rating: string) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        width="24"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M11.3572 3.51249C11.7172 2.40729 13.2808 2.40729 13.6396 3.51249L14.9236 7.46289C15.0021 7.70348 15.1545 7.91311 15.3593 8.06182C15.564 8.21053 15.8106 8.29071 16.0636 8.29089H20.218C21.3808 8.29089 21.8632 9.77889 20.9236 10.4629L17.5636 12.9037C17.3584 13.0525 17.2057 13.2625 17.1272 13.5035C17.0487 13.7445 17.0486 14.0042 17.1268 14.2453L18.4108 18.1957C18.7708 19.3009 17.5048 20.2213 16.5628 19.5373L13.2028 17.0965C12.9979 16.9477 12.7511 16.8676 12.4978 16.8676C12.2445 16.8676 11.9978 16.9477 11.7928 17.0965L8.43281 19.5373C7.49201 20.2213 6.22721 19.3009 6.58601 18.1957L7.87001 14.2453C7.94822 14.0042 7.94808 13.7445 7.86961 13.5035C7.79114 13.2625 7.63837 13.0525 7.43321 12.9037L4.07441 10.4641C3.13481 9.78009 3.61841 8.29209 4.78001 8.29209H8.93321C9.18646 8.29216 9.43325 8.2121 9.63824 8.06337C9.84322 7.91464 9.9959 7.70487 10.0744 7.46409L11.3584 3.51369L11.3572 3.51249Z"
          fill="#FACC15"
        />
      </svg>
    ));
  };

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "#ebecf9",
        font: '400 16px/24px Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        height: "100vh",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        className="flex flex-col justify-start items-center mx-auto"
        style={{
          "@media (max-width: 640px)": {
            maxWidth: "720px",
            width: "100%",
            alignSelf: "center",
          },
        }}
      >
        <div
          className="flex items-start justify-center p-6 gap-4"
          style={{
            background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
            height: "100vh",
            width: "100%",
            maxWidth: "720px",
          }}
        >
          <div className="flex flex-col items-center max-w-md w-full gap-6 mx-auto p-6">
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center items-center w-full gap-6">
              {/* Title */}
              <h1 className="text-3xl font-bold text-slate-800 font-roboto text-center leading-9">
                {data.description}
              </h1>

              {/* Progress Items */}
              <div className="flex flex-col gap-6 w-full">
                {progressItems.map((item, index) => (
                  <div key={item.id} className="flex flex-col gap-1 w-full">
                    {/* Label and Percentage */}
                    <div className="flex items-center justify-between">
                      <span className="text-base text-slate-800 font-inter">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.completed ? (
                          renderCheckmark()
                        ) : (
                          <span
                            className="text-base font-bold font-inter"
                            style={{ color: item.color }}
                          >
                            {item.currentPercentage}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300 ease-out"
                        style={{
                          backgroundColor: item.color,
                          width: `${item.currentPercentage}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Cards and Dots Container */}
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Embla Carousel */}
                <div className="overflow-hidden w-full" ref={emblaRef}>
                  <div className="flex">
                    {reviews.map((review, index) => (
                      <div
                        key={review.id}
                        className="flex-shrink-0 w-full pl-4 pr-4"
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-lg min-h-[209px] flex flex-col justify-between">
                          {/* Rating */}
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="flex items-center gap-0">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-lg font-bold text-slate-800 font-inter ml-2">
                              {review.rating}
                            </span>
                          </div>

                          {/* Review Text */}
                          <div className="flex-1 flex items-center justify-center mb-4">
                            <p className="text-lg text-slate-800 font-roboto text-center leading-7">
                              {review.review}
                            </p>
                          </div>

                          {/* Author */}
                          <div className="text-center">
                            <p className="text-base text-gray-500 font-inter">
                              {review.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Navigation - Outside the cards */}
                <div className="flex items-center justify-center gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-gray-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Popup */}
      <QuizPopup
        isOpen={showPopup}
        question={popupQuestion}
        buttons={
          currentQuestion?.answers.map((answer) => ({
            text: answer.text,
            onClick: () => handlePopupAnswer(answer.id),
          })) || []
        }
      />
    </div>
  );
}
