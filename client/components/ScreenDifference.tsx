interface TabData {
  id: string;
  image: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
}

interface SlideData {
  title: string;
  chipText: string;
  onNext: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: SlideData;
  tabs: TabData[];
}

interface ScreenDifferenceProps {
  slideObject: SlideObject;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenDifference({
  slideObject,
  onAnswer,
  onBack,
}: ScreenDifferenceProps) {
  const { data, tabs } = slideObject;
  const beforeTab = tabs[0];
  const afterTab = tabs[1];

  const handleNext = () => {
    if (onAnswer) {
      onAnswer("continue");
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  // Generate minus circle icon for "Before" items
  const MinusIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="rgba(49, 52, 93, 0.7)"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke="rgba(49, 52, 93, 0.7)"
        strokeWidth="2"
      />
    </svg>
  );

  // Generate check circle icon for "After" items
  const CheckIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#10B981" />
      <path
        d="M8 12.5L10.5 15L16 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      className="min-h-[695.2px] sm:min-h-screen flex flex-col justify-center items-center px-4 py-6 rounded-tr-[15px]"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
      }}
    >
      <div className="w-full max-w-md flex flex-col gap-6">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-slate-800 font-roboto text-2xl sm:text-3xl font-bold leading-9">
            <span className="text-slate-800">Feel the </span>
            <span className="text-blue-500">Difference</span>
            <span className="text-slate-800"> in Just 7 Days</span>
          </h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {/* Before Card */}
          <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-2xl shadow-md w-full sm:w-48 min-h-[400px]">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e7a7eeebfa99168185674f3a6855ba000cb883b?width=140"
                alt="Wilted flower"
                className="w-16 h-16 rounded-2xl object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-slate-800 font-roboto text-xl font-bold text-center">
              Before
            </h2>

            {/* List Items */}
            <div className="flex flex-col gap-3 w-full">
              {[
                beforeTab.text_1,
                beforeTab.text_2,
                beforeTab.text_3,
                beforeTab.text_4,
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <MinusIcon />
                  </div>
                  <span className="text-slate-600 font-roboto text-sm leading-6">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg w-full sm:w-48 min-h-[400px] relative">
            {/* Chip */}
            <div className="w-full bg-indigo-100 px-4 py-1 flex justify-center items-center rounded-tl-[15px]">
              <span className="text-indigo-600 font-roboto text-xs font-bold text-center">
                {data.chipText}
              </span>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/75cac88a8199a98f7c7b0ea5c06b0f28ffdc828b?width=140"
                alt="Blooming pink tulip"
                className="w-16 h-16 rounded-2xl object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-slate-800 font-roboto text-xl font-bold text-center">
              After
            </h2>

            {/* List Items */}
            <div className="flex flex-col gap-3 w-full">
              {[
                afterTab.text_1,
                afterTab.text_2,
                afterTab.text_3,
                afterTab.text_4,
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <span className="text-slate-800 font-roboto text-sm leading-6">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <button
            onClick={handleNext}
            className="w-full bg-blue-400 hover:bg-blue-500 rounded-full py-4 px-6 transition-colors duration-200 shadow-lg"
          >
            <span className="text-white font-roboto text-lg font-bold">
              {data.onNext}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
