interface TextSection {
  id: string;
  image: string;
  text: string;
}

interface StatsData {
  image: string;
  buttonText: string;
  title: string;
  textSection: TextSection[];
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: StatsData;
}

interface ScreenStatsProps {
  slideObject: SlideObject;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenStats({
  slideObject,
  onAnswer,
  onBack,
}: ScreenStatsProps) {
  const { data } = slideObject;

  const handleContinue = () => {
    if (onAnswer) {
      onAnswer("continue");
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen p-6 gap-4"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
      }}
    >
      <div className="flex flex-col items-start gap-4 w-full max-w-md">
        {/* Title */}
        <div className="flex flex-col justify-end items-center py-5 w-full">
          <h1 className="text-slate-800 text-center font-roboto text-3xl font-bold leading-9">
            {data.title}
          </h1>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-start gap-0 w-full">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
            <span className="text-slate-800 font-roboto text-xs leading-5">
              Untreated ADHD
            </span>
          </div>
          <div className="flex items-center ml-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-slate-800 font-roboto text-xs leading-5 w-38">
              After ADHD treatment plan
            </span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="flex px-6 w-full">
          <div className="relative w-full">
            {/* Chart Area */}
            <div className="flex justify-between items-end h-64 border-b border-l border-gray-300 pb-1 pl-1">
              {/* Focus Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end">
                  <div className="w-5 h-30 bg-pink-400 rounded-t-md"></div>
                  <div className="w-5 h-50 bg-blue-500 rounded-t-md ml-2"></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Focus
                </div>
              </div>

              {/* Career Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end">
                  <div className="w-5 h-15 bg-pink-400 rounded-t-md"></div>
                  <div className="w-5 h-42 bg-blue-500 rounded-t-md ml-2"></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Career
                </div>
              </div>

              {/* Productivity Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end">
                  <div className="w-5 h-22 bg-pink-400 rounded-t-md"></div>
                  <div className="w-5 h-56 bg-blue-500 rounded-t-md ml-2"></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Productivity
                </div>
              </div>

              {/* Decision-making Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end">
                  <div className="w-5 h-17 bg-pink-400 rounded-t-md"></div>
                  <div className="w-5 h-55 bg-blue-500 rounded-t-md ml-2"></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-3 text-center">
                  Decision-
                  <br />
                  making
                </div>
              </div>
            </div>

            {/* Y-axis label */}
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-slate-800 font-roboto text-sm leading-6"
              style={{ transformOrigin: 'center' }}
            >
              Quality
            </div>

            {/* Horizontal grid lines */}
            <div className="absolute top-0 left-1 w-full h-64 pointer-events-none">
              <div className="absolute top-0 w-full h-0 border-t border-gray-200"></div>
              <div className="absolute top-1/3 w-full h-0 border-t border-gray-200"></div>
              <div className="absolute top-2/3 w-full h-0 border-t border-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Statistics Sections */}
        <div className="flex flex-col items-start gap-4 w-full">
          {/* NIH Section */}
          <div className="flex p-2 items-center w-full rounded-xl bg-blue-100">
            <div className="flex w-11 h-12 p-3 justify-center items-center rounded-lg bg-slate-800">
              <span className="text-white text-center font-roboto text-xs font-bold leading-4">
                NIH
              </span>
            </div>
            <div className="flex w-75 px-4 items-start">
              <p className="text-slate-800 font-roboto text-sm font-normal leading-5">
                The National Library of Medicine estimates that about{" "}
                <span className="font-bold">366.3 million</span> adults worldwide
                show symptoms of ADHD
              </p>
            </div>
          </div>

          {/* CDC Section */}
          <div className="flex p-2 items-center w-full rounded-xl bg-blue-100">
            <div className="flex w-12 h-12 p-3 justify-center items-center rounded-lg bg-blue-700">
              <span className="text-white text-center font-roboto text-xs font-bold leading-4">
                CDC
              </span>
            </div>
            <div className="flex w-75 h-20 px-3 flex-col justify-center items-start">
              <p className="text-slate-800 font-roboto text-sm font-normal leading-5">
                The U.S. Centers for Disease Control and Prevention report that{" "}
                <span className="font-bold">around 60%</span> of children with ADHD
                also have another mental, emotional, or behavioral condition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex h-14 max-w-md p-2 justify-center items-center w-full rounded-full bg-blue-500 mt-4">
        <button
          onClick={handleContinue}
          className="text-white text-center font-roboto text-lg font-bold leading-7 w-full"
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}
