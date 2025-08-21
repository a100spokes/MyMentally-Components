interface ReviewData {
  image: string;
  buttonText: string;
  title: string;
  subtitle: string;
  name: string;
  rating: string;
  review: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: ReviewData;
}

interface ScreenReviewsProps {
  slideObject: SlideObject;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenReviews({
  slideObject,
  onAnswer,
  onBack,
}: ScreenReviewsProps) {
  const { data } = slideObject;

  const handleNext = () => {
    if (onAnswer) {
      onAnswer("next");
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  // Generate star rating display
  const generateStars = (rating: string) => {
    const numRating = parseFloat(rating);
    const fullStars = Math.floor(numRating);
    const hasHalfStar = numRating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-2xl">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-2xl">☆</span>
      );
    }

    return stars;
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-4 py-8"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md">
        {/* Main Content Container */}
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-slate-800 text-center font-inter text-2xl font-bold leading-8 mb-6">
              {data.title}
            </h1>
          </div>

          {/* Image and Review Card Container */}
          <div className="flex flex-col justify-center items-center gap-0 w-full relative">
            {/* Background Image */}
            <img
              src={data.image}
              alt="Review background"
              className="w-full max-w-sm h-60 object-cover rounded-2xl"
            />
            
            {/* Review Card - Overlapping */}
            <div className="flex flex-col justify-center items-center gap-2 w-full max-w-xs p-6 bg-white rounded-2xl shadow-lg -mt-16 relative z-10">
              {/* Name and Rating Row */}
              <div className="flex justify-between items-center w-full mb-2">
                <div className="flex flex-col items-start">
                  <h2 className="text-slate-800 font-inter text-lg font-semibold leading-7">
                    {data.name}
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  {generateStars(data.rating)}
                  <span className="text-slate-800 font-inter text-base font-medium ml-1">
                    {data.rating}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div className="flex flex-col justify-center items-start w-full">
                <p className="text-slate-800 font-inter text-sm italic leading-6 text-left">
                  {data.review}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-6 w-full px-8">
          {/* Subtitle */}
          <div className="flex flex-col items-center w-full">
            <p className="text-blue-500 text-center font-inter text-sm leading-6">
              {data.subtitle}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex justify-center items-center w-full h-15 px-4 py-4 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-200"
          >
            <span className="text-white text-center font-roboto text-lg font-bold leading-6">
              {data.buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
