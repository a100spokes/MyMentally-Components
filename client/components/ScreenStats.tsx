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
        <div className="flex px-6 flex-col items-start w-full">
          <div className="relative w-full">
            {/* Chart Area with Border */}
            <div className="flex h-64 justify-between items-end border-b border-l border-gray-400 pb-px pl-px">
              {/* Focus Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end px-6">
                  <div
                    className="w-5 rounded-t-md"
                    style={{
                      height: '120px',
                      background: '#FF8DE1'
                    }}
                  ></div>
                  <div
                    className="w-5 rounded-t-md ml-2 flex-shrink-0"
                    style={{
                      height: '200px',
                      background: '#5D88FF'
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Focus
                </div>
              </div>

              {/* Career Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end px-6">
                  <div
                    className="w-5 rounded-t-md"
                    style={{
                      height: '60px',
                      background: '#FF8DE1'
                    }}
                  ></div>
                  <div
                    className="w-5 rounded-t-md ml-2 flex-shrink-0"
                    style={{
                      height: '170px',
                      background: '#5D88FF'
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Career
                </div>
              </div>

              {/* Productivity Column */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex justify-center items-end px-6">
                  <div
                    className="w-5 rounded-t-md"
                    style={{
                      height: '90px',
                      background: '#FF8DE1'
                    }}
                  ></div>
                  <div
                    className="w-5 rounded-t-md ml-2 flex-shrink-0"
                    style={{
                      height: '230px',
                      background: '#5D88FF'
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-slate-800 font-roboto text-sm leading-6">
                  Productivity
                </div>
              </div>

              {/* Decision-making Column */}
              <div className="flex flex-col items-center flex-1 py-px">
                <div className="flex justify-center items-end px-6 h-54">
                  <div
                    className="w-5 rounded-t-md"
                    style={{
                      height: '70px',
                      background: '#FF8DE1'
                    }}
                  ></div>
                  <div
                    className="w-5 rounded-t-md ml-2 flex-shrink-0"
                    style={{
                      height: '220px',
                      background: '#5D88FF'
                    }}
                  ></div>
                </div>
                <div className="mt-3 text-slate-800 font-roboto text-sm leading-4 text-center w-14 h-9">
                  Decision-
                  <br />
                  making
                </div>
              </div>
            </div>

            {/* Y-axis with grid lines */}
            <div className="absolute left-0 top-0 w-93 h-64 flex flex-col justify-between items-start">
              <div className="h-21 flex-shrink-0 w-full border-b border-gray-200"></div>
              <div
                className="transform -rotate-90 text-slate-800 font-roboto text-sm leading-6"
                style={{ transformOrigin: 'center' }}
              >
                Quality
              </div>
              <div className="h-21 flex-shrink-0 w-full border-b border-gray-200"></div>
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
