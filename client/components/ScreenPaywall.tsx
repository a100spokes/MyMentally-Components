import React, { useState, useEffect } from "react";

interface CountdownSection {
  countdownText: string;
  countdownStartTime: string; // in ms like "600000ms"
}

interface ProgressSection {
  id: string;
  title: string;
  progressText: string;
  progressColor: string;
  percProgress: number;
}

interface GraphSection {
  image: string;
}

interface AffectOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface AffectSection {
  title: string;
  description: string;
  subtitle: string;
  options: AffectOption[];
}

interface TariffOption {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  newPrice: string;
  isDefault: boolean;
}

interface TariffSection {
  title: string;
  description: string;
  options: TariffOption[];
}

interface ChoseUsSection {
  title: string;
  description: string;
  image: string;
}

interface FAQOption {
  id: string;
  title: string;
  description: string;
}

interface FAQSection {
  title: string;
  options: FAQOption[];
}

interface PaywallData {
  title: string;
  description: string;
  buttonText: string;
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: PaywallData;
  countdownSection: CountdownSection;
  progressSection: ProgressSection[];
  graphSection: GraphSection;
  affectSection: AffectSection;
  tariffSection: TariffSection;
  choseUsSection: ChoseUsSection;
  faqSection: FAQSection;
}

interface ScreenPaywallProps {
  slideObject: SlideObject;
  onAnswer?: (tariffId: string) => void;
  onBack?: () => void;
}

export default function ScreenPaywall({
  slideObject,
  onAnswer,
  onBack,
}: ScreenPaywallProps) {
  const { 
    data, 
    countdownSection, 
    progressSection, 
    graphSection, 
    affectSection, 
    tariffSection, 
    choseUsSection, 
    faqSection 
  } = slideObject;

  // Parse countdown time from string (e.g., "600000ms" -> 600000)
  const initialTime = parseInt(countdownSection.countdownStartTime.replace('ms', '')) / 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [selectedTariff, setSelectedTariff] = useState(
    tariffSection.options.find(option => option.isDefault)?.id || tariffSection.options[0]?.id || ""
  );
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
  };

  const handleTariffSelect = (tariffId: string) => {
    setSelectedTariff(tariffId);
  };

  const handleGetPlan = () => {
    onAnswer?.(selectedTariff);
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const renderProgressBar = (progress: number, color: string) => (
    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          backgroundColor: color.startsWith('#') ? color : `#${color}`,
          width: `${progress}%`,
        }}
      />
    </div>
  );

  const getIconForAffectOption = (option: AffectOption, index: number) => {
    // Fallback icons based on common types since icon URLs might not work
    const iconMap = ["💼", "💡", "😞", "🔥"];
    const bgColorMap = ["#F3E8FF", "#FEF9C3", "#FCE7F3", "#FFEDD5"];
    const textColorMap = ["#A855F7", "#EAB308", "#EC4899", "#F97316"];

    return {
      icon: iconMap[index % iconMap.length],
      bgColor: bgColorMap[index % bgColorMap.length],
      textColor: textColorMap[index % textColorMap.length]
    };
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
        font: '400 16px/24px Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      }}
    >
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Countdown Section */}
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800 text-sm mb-2">{countdownSection.countdownText}</p>
          <div className="flex items-center justify-between">
            <div className="text-blue-800 text-3xl font-bold">
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={handleGetPlan}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              Get my plan
            </button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 leading-9">
            <span className="text-gray-800">You Have Moderate </span>
            <span className="text-blue-500">ADHD Symptoms. </span>
            <span className="text-gray-800">Let's Take Action Today</span>
          </h1>
        </div>

        {/* Progress Sections */}
        <div className="space-y-4">
          {progressSection.map((section) => (
            <div key={section.id} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{section.progressText}</p>
              {renderProgressBar(section.percProgress, section.progressColor)}
            </div>
          ))}
        </div>

        {/* Graph Section */}
        {graphSection.image && (
          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src={graphSection.image}
              alt="Productivity and healing chart"
              className="w-full h-auto"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Affect Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {affectSection.title.includes('daily life') ? (
              <>
                How ADHD affects your <span className="text-blue-500">daily life</span>
              </>
            ) : (
              affectSection.title
            )}
          </h2>
          <p className="text-gray-600">{affectSection.description}</p>
        </div>

        {/* Most Disturbing Symptoms */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 text-center">
            {affectSection.subtitle}
          </h3>
          <div className="space-y-3">
            {affectSection.options.map((option, index) => {
              const iconData = getIconForAffectOption(option, index);
              return (
                <div key={option.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: iconData.bgColor, color: iconData.textColor }}
                  >
                    {iconData.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* First CTA Button */}
        <div className="space-y-2">
          <button
            onClick={handleGetPlan}
            className="w-full bg-blue-500 text-white py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            {data.buttonText}
          </button>
          <p className="text-center text-sm text-gray-500">* no-commitment, cancel anytime</p>
        </div>

        {/* Tariff Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{tariffSection.title}</h2>
          <div className="space-y-3">
            {tariffSection.options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleTariffSelect(option.id)}
                className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all ${
                  selectedTariff === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    {selectedTariff === option.id ? (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">{option.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 line-through">{option.oldPrice}</span>
                      <span className="text-xs text-gray-600">{option.newPrice}</span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      selectedTariff === option.id ? "bg-blue-500 text-white" : "bg-blue-100 text-gray-800"
                    }`}
                  >
                    <div className="text-right">
                      <div className="flex items-start">
                        <span className="text-xs">$</span>
                        <span className="text-2xl font-bold">{option.price.replace('$', '')}</span>
                      </div>
                      <div className="text-xs opacity-70">per Day</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second CTA Button */}
        <button
          onClick={handleGetPlan}
          className="w-full bg-blue-500 text-white py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors"
        >
          {data.buttonText}
        </button>

        {/* App Store Badges Placeholder */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Rating */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="flex items-center gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <span key={index} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="text-yellow-400 text-2xl">☆</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">4.5 stars on</p>
          <p className="text-sm text-gray-600">App Store & Google Play</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 leading-4">{tariffSection.description}</p>

        {/* Chose Us Section (Testimonial) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">{choseUsSection.title}</h2>
          <div className="relative rounded-lg overflow-hidden">
            {choseUsSection.image && (
              <img
                src={choseUsSection.image}
                alt="User testimonial"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="italic">{choseUsSection.description}</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">{faqSection.title}</h2>
          <div className="space-y-2">
            {faqSection.options.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">{faq.title}</h3>
                    <span className="text-gray-400 text-xl">
                      {expandedFAQ === faq.id ? '−' : '+'}
                    </span>
                  </div>
                </div>
                {expandedFAQ === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            <span className="underline">Contact Us</span> • <span className="underline">Terms</span> • 
            <span className="underline">Cookie Policy</span> • <span className="underline">Privacy Policy</span>
          </p>
        </div>

        {/* Final CTA */}
        <div className="space-y-2">
          <button
            onClick={handleGetPlan}
            className="w-full bg-blue-500 text-white py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            {data.buttonText}
          </button>
          <p className="text-center text-sm text-gray-500">No-commitment, cancel anytime</p>
        </div>
      </div>
    </div>
  );
}
