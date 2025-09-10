import { useState } from "react";

interface TariffData {
  id: string;
  title: string;
  oldPrice: string;
  currentPrice: string;
  perDay: string;
}

interface SlideData {
  title: string;
  onNext: string;
  subtitle: string;
  tariffs: TariffData[];
}

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: SlideData;
}

interface ScreenCheckoutProps {
  slideObject: SlideObject;
  selectedTariff?: string;
  onAnswer?: (answer: string) => void;
  onBack?: () => void;
}

export default function ScreenCheckout({
  slideObject,
  selectedTariff = "tariff_m",
  onAnswer,
  onBack,
}: ScreenCheckoutProps) {
  const { data } = slideObject;
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    country: "Ukraine"
  });

  // Find the selected tariff or default to monthly
  const currentTariff = data.tariffs.find(t => t.id === selectedTariff) || data.tariffs[1];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayNow = () => {
    if (onAnswer) {
      onAnswer("payment_completed");
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Subscription Details */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-6 lg:p-12 flex flex-col justify-start">
        <div className="max-w-md">
          {/* Header with back button and logo */}
          <div className="flex items-center mb-8">
            <button
              onClick={handleBackClick}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors mr-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                  fill="black"
                  fillOpacity="0.7"
                />
              </svg>
            </button>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/09f7ad582717be1f037b63bf9080a0874a953edf?width=64"
              alt="MyMentally logo"
              className="w-8 h-8 rounded-xl"
            />
          </div>

          {/* Subscription Details */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-800 text-base leading-6 mb-3">
                {data.title}
              </p>
              <h1 className="text-gray-900 text-2xl font-semibold leading-8">
                {currentTariff.title}
              </h1>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-gray-900 text-2xl font-semibold">
                {currentTariff.currentPrice}
              </span>
              <span className="text-gray-800 text-sm">
                per {currentTariff.title.toLowerCase().includes('weekly') ? 'week' : 
                     currentTariff.title.toLowerCase().includes('monthly') ? 'month' : 'year'}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 text-sm">Total due today</span>
                <span className="text-gray-900 text-sm">
                  {currentTariff.currentPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Payment Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12 flex flex-col">
        <div className="max-w-md w-full">
          <div className="space-y-8">
            {/* Google Pay / Apple Pay Section */}
            <div>
              <button className="w-full h-12 bg-black text-white rounded font-medium flex items-center justify-center gap-2 mb-3">
                <span>G Pay</span>
                <span className="text-blue-400">•••• •••• •••• 5579</span>
              </button>
              
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-xs uppercase tracking-wide">
                  OR PAY BY CARD
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
            </div>

            {/* Card Form */}
            <div className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-12 px-4 border border-gray-400 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Card Number */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  className="w-full h-12 px-4 pr-16 border border-gray-400 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                  <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                </div>
              </div>

              {/* Expiration Date */}
              <div>
                <input
                  type="text"
                  placeholder="Expiration date"
                  value={formData.expirationDate}
                  onChange={(e) => handleInputChange("expirationDate", e.target.value)}
                  className="w-full h-12 px-4 border border-gray-400 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Security Code */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Security code"
                  value={formData.securityCode}
                  onChange={(e) => handleInputChange("securityCode", e.target.value)}
                  className="w-full h-12 px-4 pr-12 border border-gray-400 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect width="16" height="12" rx="2" fill="#E5E7EB"/>
                    <rect x="2" y="2" width="12" height="2" fill="#9CA3AF"/>
                    <rect x="10" y="6" width="4" height="1" fill="#9CA3AF"/>
                  </svg>
                </div>
              </div>

              {/* Country */}
              <div>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="w-full h-12 px-4 border border-gray-400 rounded text-gray-900 focus:outline-none focus:border-gray-600 bg-white"
                >
                  <option value="Ukraine">Ukraine</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayNow}
              className="w-full h-12 bg-gray-400 text-gray-600 rounded-lg font-medium hover:bg-gray-500 hover:text-white transition-colors"
            >
              {data.onNext}
            </button>

            {/* Footer Text */}
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-5">
                {data.subtitle}
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Secure checkout by RevenueCat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
