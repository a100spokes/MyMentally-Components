interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    buttonText: string;
  };
  image: string;
  title: string;
  description: string;
}

interface ScreenInfoProps {
  slideObject: SlideObject;
  onAnswer?: () => void;
}

export default function ScreenInfo({ slideObject, onAnswer }: ScreenInfoProps) {
  const { image, title, description, data } = slideObject;

  const handleNextClick = () => {
    if (onAnswer) {
      onAnswer();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-gradient-to-t from-blue-50 to-white">
      <div className="flex flex-col justify-center items-center flex-1 w-full max-w-md">
        {/* Image Container */}
        <div className="flex justify-center items-center flex-1 w-full">
          <img
            src={image}
            alt="Illustration representing the content"
            className="w-82 h-76 max-w-[480px] max-h-[445px] flex-shrink-0 rounded-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start gap-4 w-full h-77 p-8 rounded-t-3xl">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h1 className="w-full text-gray-800 text-center font-roboto text-3xl font-bold leading-9">
              {title}
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center w-full pb-4">
            <p className="w-full text-gray-600 text-center font-roboto text-lg leading-7">
              {description}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className="flex justify-center items-center w-full py-4 px-4 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-200 shadow-lg"
          >
            <span className="flex-1 text-white text-center font-roboto text-lg font-bold leading-7">
              {data.buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
