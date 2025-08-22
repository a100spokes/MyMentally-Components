import React, { useState, useEffect } from "react";

interface TimerData {
  minutes: number;
  seconds: number;
  message: string;
  buttonText: string;
}

interface SymptomCard {
  id: string;
  title: string;
  description: string;
  progress: number;
  color: string;
}

interface DisturbingSymptom {
  id: string;
  title: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
}

interface TariffPlan {
  id: string;
  name: string;
  originalPrice: string;
  discountPrice: string;
  finalPrice: string;
  perDayPrice: string;
  isSelected: boolean;
  isPopular?: boolean;
}

interface FAQ {
  id: string;
  question: string;
  answer?: string;
  isExpanded?: boolean;
}

interface PaywallData {
  timer: TimerData;
  title: string;
  subtitle: string;
  symptoms: SymptomCard[];
  chartImage: string;
  adhdTitle: string;
  adhdDescription: string;
  disturbingSymptoms: DisturbingSymptom[];
  tariffPlans: TariffPlan[];
  testimonial: {
    image: string;
    text: string;
    author: string;
  };
  faqs: FAQ[];
  appStoreRating: string;
  buttonText: string;
  disclaimer: string;
  links: {
    contactUs: string;
    terms: string;
    cookiePolicy: string;
    privacyPolicy: string;
  };
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: PaywallData;
}

interface ScreenPaywallProps {
  slideObject: SlideObject;
  onAnswer?: (plan: string) => void;
  onBack?: () => void;
}

export default function ScreenPaywall({
  slideObject,
  onAnswer,
  onBack,
}: ScreenPaywallProps) {
  const { data } = slideObject;
  const [timeLeft, setTimeLeft] = useState({ minutes: data.timer.minutes, seconds: data.timer.seconds });
  const [selectedPlan, setSelectedPlan] = useState(data.tariffPlans.find(plan => plan.isSelected)?.id || "");

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleGetPlan = () => {
    onAnswer?.(selectedPlan);
  };

  const formatTime = (time: number) => String(time).padStart(2, "0");

  const renderProgressBar = (progress: number, color: string) => (
    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          backgroundColor: color,
          width: `${progress}%`,
        }}
      />
    </div>
  );

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-2xl">★</span>
        ))}
        <span className="text-yellow-400 text-2xl">☆</span>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-50 to-purple-50"
      style={{
        background: "linear-gradient(180deg, #F0F2FF 0%, #E8E8F5 100%)",
        font: '400 16px/24px Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      }}
    >
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Timer Section */}
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800 text-sm mb-2">{data.timer.message}</p>
          <div className="flex items-center justify-between">
            <div className="text-blue-800 text-3xl font-bold">
              {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
            </div>
            <button
              onClick={handleGetPlan}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              {data.timer.buttonText}
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

        {/* Symptoms Cards */}
        <div className="space-y-4">
          {data.symptoms.map((symptom) => (
            <div key={symptom.id} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">{symptom.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{symptom.description}</p>
              {renderProgressBar(symptom.progress, symptom.color)}
            </div>
          ))}
        </div>

        {/* Chart Image */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <img
            src={data.chartImage}
            alt="Productivity and healing chart"
            className="w-full h-auto"
          />
        </div>

        {/* ADHD Effects Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            How ADHD affects your <span className="text-blue-500">daily life</span>
          </h2>
          <p className="text-gray-600">{data.adhdDescription}</p>
        </div>

        {/* Most Disturbing Symptoms */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 text-center">
            Most disturbing ADHD symptoms you've noticed:
          </h3>
          <div className="space-y-3">
            {data.disturbingSymptoms.map((symptom) => (
              <div key={symptom.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: symptom.iconBg, color: symptom.iconColor }}
                >
                  {symptom.iconName === "work_outline" && "💼"}
                  {symptom.iconName === "lightbulb" && "💡"}
                  {symptom.iconName === "sentiment_very_dissatisfied" && "😞"}
                  {symptom.iconName === "whatshot" && "🔥"}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{symptom.title}</h4>
                  <p className="text-sm text-gray-600">{symptom.description}</p>
                </div>
              </div>
            ))}
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

        {/* Tariff Plans */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Select Tariff</h2>
          <div className="space-y-3">
            {data.tariffPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    {selectedPlan === plan.id ? (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">{plan.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-xs text-gray-600">{plan.discountPrice}</span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      selectedPlan === plan.id ? "bg-blue-500 text-white" : "bg-blue-100 text-gray-800"
                    }`}
                  >
                    <div className="text-right">
                      <div className="flex items-start">
                        <span className="text-xs">$</span>
                        <span className="text-2xl font-bold">{plan.finalPrice}</span>
                      </div>
                      <div className="text-xs opacity-70">{plan.perDayPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Button */}
        <button
          onClick={handleGetPlan}
          className="w-full bg-blue-500 text-white py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors"
        >
          {data.buttonText}
        </button>

        {/* App Store Badges */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Rating */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            {renderStars()}
          </div>
          <p className="text-sm text-gray-600">{data.appStoreRating}</p>
          <p className="text-sm text-gray-600">App Store & Google Play</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 leading-4">{data.disclaimer}</p>

        {/* Testimonial */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={data.testimonial.image}
            alt="User testimonial"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <p className="italic mb-2">{data.testimonial.text}</p>
            <p className="font-bold">{data.testimonial.author}</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Common Questions</h2>
          <div className="space-y-2">
            {data.faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-400 text-xl">+</span>
                </div>
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
