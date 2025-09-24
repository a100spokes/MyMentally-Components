import { useState } from "react";

interface ModalCheckoutProps {
  isOpen?: boolean;
  onClose?: () => void;
  onContinue?: () => void;
  className?: string;
}

type PaymentMethod = "apple_pay" | "credit_card";

export default function ModalCheckout({
  isOpen = true,
  onClose,
  onContinue,
  className = "",
}: ModalCheckoutProps) {
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethod>("apple_pay");
  const [expandedPayment, setExpandedPayment] = useState<PaymentMethod | null>(
    null,
  );
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method);
    setExpandedPayment(expandedPayment === method ? null : method);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#F0F2FF] to-[#E8E8F5] flex flex-col items-center justify-center px-4 py-11 ${className}`}
    >
      <div className="w-full max-w-md bg-[#F9FAFB] rounded-xl p-6 shadow-xl space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#31345D] font-bold text-2xl">Payment method</h1>
          <button className="text-[#3B82F6] text-sm font-medium">
            Why now?
          </button>
        </div>

        {/* Description */}
        <p className="text-[#6B7280] text-sm leading-5">
          You'll get 7 full days to see how MyMentally can improve your life.
        </p>

        {/* Price Info */}
        <p className="text-[#6B7280] text-xs leading-4">
          Price after trial: $19.99{"\n"}
          No charges if you cancel before the trial ends.
        </p>

        {/* Payment Methods Accordion */}
        <div className="space-y-4">
          {/* Apple Pay Option */}
          <div
            className={`border rounded-xl p-3 ${selectedPayment === "apple_pay" ? "border-[#3B82F6]" : "border-[#E5E7EB]"}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handlePaymentSelect("apple_pay")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === "apple_pay"
                      ? "bg-[#3B82F6] border-[#3B82F6]"
                      : "bg-white border-[#E5E7EB]"
                  }`}
                >
                  {selectedPayment === "apple_pay" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-[#31345D] text-sm font-medium">
                  Apple Pay
                </span>
              </div>

              {/* Apple Pay Icon */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.15 12.5H13V17.99H13.855V16.117H15.124C16.203 16.117 16.963 15.375 16.963 14.304C16.963 13.233 16.21 12.5 15.15 12.5ZM14.925 15.4H13.855V13.217H14.925C15.668 13.217 16.091 13.622 16.091 14.313C16.091 15.003 15.659 15.401 14.925 15.401V15.4Z"
                  fill="#303C42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.983 13.804C18.059 13.804 17.368 14.339 17.343 15.073H18.111C18.18 14.719 18.508 14.486 18.957 14.486C19.501 14.486 19.82 14.745 19.82 15.219V15.539L18.706 15.599C17.688 15.669 17.126 16.083 17.126 16.808C17.126 17.542 17.696 18.034 18.534 18.025C19.095 18.025 19.613 17.74 19.837 17.291H19.855V17.982H20.64V15.15C20.64 14.339 19.993 13.804 18.983 13.804ZM19.82 16.437C19.82 16.981 19.354 17.369 18.75 17.377C18.275 17.377 17.964 17.153 17.964 16.799C17.964 16.428 18.258 16.221 18.819 16.186L19.82 16.117V16.437Z"
                  fill="#303C42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.075 17.222H23.058L21.996 13.847H21.106L22.609 17.991L22.549 18.206C22.41 18.646 22.186 18.811 21.797 18.811C21.728 18.811 21.599 18.811 21.538 18.794V19.467C21.608 19.476 21.806 19.493 21.866 19.484C22.712 19.484 23.101 19.164 23.455 18.172L25 13.847H24.137L23.075 17.222Z"
                  fill="#303C42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28 4H2C0.897 4 0 4.897 0 6V24C0 25.103 0.897 26 2 26H28C29.103 26 30 25.103 30 24V6C30 4.897 29.103 4 28 4ZM29 24C29 24.551 28.551 25 28 25H2C1.449 25 1 24.551 1 24V6C1 5.449 1.449 5 2 5H28C28.551 5 29 5.449 29 6V24Z"
                  fill="#303C42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4401 14.25C10.4301 13.239 11.2671 12.751 11.3051 12.728C10.8351 12.039 10.1031 11.945 9.84206 11.934C9.21906 11.872 8.62606 12.301 8.31006 12.301C7.99506 12.301 7.50606 11.944 6.99006 11.954C6.31006 11.964 5.68506 12.348 5.33506 12.956C4.63006 14.181 5.15506 15.994 5.84206 16.987C6.17806 17.472 6.57906 18.019 7.10506 17.999C7.61206 17.979 7.80306 17.672 8.41506 17.672C9.02806 17.672 9.20006 17.999 9.73606 17.989C10.2811 17.979 10.6271 17.494 10.9611 17.007C11.3461 16.443 11.5051 15.897 11.5141 15.868C11.5021 15.864 10.4511 15.461 10.4401 14.25Z"
                  fill="#303C42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.85014 10C9.44714 10.016 8.96013 10.269 8.67113 10.606C8.41213 10.906 8.18513 11.385 8.24713 11.844C8.69613 11.879 9.15413 11.616 9.43413 11.278C9.71414 10.939 9.90114 10.468 9.85014 10Z"
                  fill="#303C42"
                />
              </svg>
            </div>

            {/* Apple Pay Expanded Content */}
            {expandedPayment === "apple_pay" && (
              <div className="mt-4 space-y-4">
                {/* Features List */}
                <div className="space-y-2 px-1 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E] text-base">✓</span>
                    <span className="text-[#6B7280] text-xs">
                      Easy and private payments with Face/Touch ID
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E] text-base">✓</span>
                    <span className="text-[#6B7280] text-xs">
                      Your payment details stay protected with end-to-end
                      encryption.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E] text-base">✓</span>
                    <span className="text-[#6B7280] text-xs">
                      Protected by Apple Pay's unique Device Account Number
                    </span>
                  </div>
                </div>

                {/* Apple Pay Button */}
                <button className="w-full h-11 bg-black rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    width="52"
                    height="24"
                    viewBox="0 0 52 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.40767 5.708C9.30768 5.784 10.2077 5.252 10.7717 4.574C11.3257 3.882 11.6917 2.944 11.6017 2C10.7997 2.038 9.81768 2.532 9.25568 3.226C8.73567 3.818 8.29367 4.794 8.40767 5.708ZM6.17965 18.092C7.17566 18.054 7.56766 17.438 8.76767 17.438C9.97568 17.438 10.3277 18.092 11.3777 18.078C12.4657 18.056 13.1477 17.09 13.8137 16.098C14.2841 15.3957 14.6506 14.6291 14.9017 13.822C14.8797 13.8 12.8017 12.992 12.7777 10.556C12.7557 8.516 14.4217 7.548 14.4937 7.488C13.5557 6.072 12.0937 5.92 11.5837 5.882L11.5877 5.884C10.2817 5.806 9.16567 6.636 8.54967 6.636C7.91967 6.636 6.97566 5.92 5.93965 5.942C4.59964 5.966 3.35363 6.736 2.67162 7.96C1.26161 10.418 2.30362 14.05 3.66763 16.052C4.33564 17.04 5.12964 18.13 6.17965 18.092ZM30.4998 10.374H32.5479C32.7199 9.46 33.5519 8.858 34.6939 8.858C36.0819 8.858 36.8619 9.512 36.8619 10.722V11.544L34.0279 11.72C31.3959 11.88 29.9698 12.976 29.9698 14.878C29.9778 16.796 31.4459 18.074 33.5539 18.076C34.9799 18.076 36.2999 17.346 36.8979 16.182H36.9419V17.964H39.0419V10.58C39.0419 8.442 37.3539 7.056 34.7599 7.056C32.3519 7.056 30.5698 8.454 30.4998 10.374ZM36.8699 13.946C36.8699 15.332 35.7059 16.32 34.1699 16.32C32.9619 16.32 32.1899 15.726 32.1899 14.828C32.1899 13.89 32.9319 13.352 34.3499 13.268L36.8699 13.108V13.946ZM19.1158 3.126V17.962H21.3878V12.892H24.5298C27.4018 12.892 29.4118 10.89 29.4118 7.998C29.4118 5.106 27.4338 3.126 24.6038 3.126H19.1158ZM27.1038 8.006C27.1038 9.878 25.9798 10.96 23.9978 10.96H21.3878V5.068H24.0058C25.9778 5.068 27.1038 6.132 27.1038 8.006ZM44.974 15.96L42.3039 7.2H39.9339L43.774 18.002L43.5639 18.656C43.2179 19.766 42.6559 20.202 41.6519 20.202C41.4719 20.202 41.1279 20.18 40.9839 20.164V21.946C41.1199 21.978 41.6839 22 41.8559 22L41.8539 21.996C44.066 21.996 45.108 21.136 46.018 18.54L50 7.2H47.69L45.02 15.96H44.974Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <p className="text-[#6B7280] text-xs text-center">
                  Secured with App Store
                </p>
              </div>
            )}
          </div>

          {/* Credit Card Option */}
          <div
            className={`border rounded-xl p-3 ${selectedPayment === "credit_card" ? "border-[#3B82F6]" : "border-[#E5E7EB]"}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handlePaymentSelect("credit_card")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === "credit_card"
                      ? "bg-[#3B82F6] border-[#3B82F6]"
                      : "bg-white border-[#E5E7EB]"
                  }`}
                >
                  {selectedPayment === "credit_card" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-[#31345D] text-sm font-medium">
                  Credit Card
                </span>
              </div>

              {/* Card Icons */}
              <div className="flex items-center gap-3">
                {/* Visa */}
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_556_1384)">
                    <path
                      d="M26.1062 25.3678C24.7018 25.3678 23.9318 25.1753 22.7493 24.6895L22.3112 24.4897L21.8143 27.3772C22.6687 27.7292 24.2087 28.0317 25.8018 28.0555C29.5437 28.0555 31.9893 26.3193 32.0187 23.6482C32.048 22.1797 31.0837 21.065 29.0468 20.1465C27.8112 19.5507 27.0412 19.151 27.0412 18.546C27.0412 18.0107 27.6993 17.4405 29.0743 17.4405C29.988 17.4185 30.8964 17.5865 31.7418 17.9337L32.0718 18.0803L32.5687 15.29L32.4825 15.3083C31.4594 14.9411 30.3795 14.7568 29.2925 14.7638C25.7725 14.7638 23.2883 16.5128 23.27 19.019C23.248 20.8615 25.0373 21.8992 26.3885 22.517C27.7763 23.1495 28.2402 23.5473 28.2365 24.1157C28.2273 24.9792 27.1273 25.3678 26.1062 25.3678ZM41.618 15.0003H38.868C38.0118 15.0003 37.372 15.2295 36.9962 16.0692L31.707 27.8758H35.4488L36.1968 25.9435L40.7618 25.9472C40.8737 26.3982 41.2018 27.8758 41.2018 27.8758H44.5L41.618 15.0003ZM37.2217 23.3017L38.6407 19.7028C38.6223 19.7395 38.934 18.9585 39.1137 18.4745L39.3575 19.5855L40.1807 23.3017H37.2217ZM15.9807 27.7732H19.5447L21.7722 14.8922H18.21V14.8885L15.9807 27.7732ZM9.5255 23.7802L9.15517 21.9908V21.9963L7.90483 16.082C7.69033 15.2625 7.06333 15.0205 6.286 14.9912H0.545833L0.5 15.2625C1.7925 15.565 2.95667 16.0032 3.998 16.5403C4.1597 16.6349 4.27811 16.7888 4.328 16.9693L7.408 27.8575H11.1737L16.7855 15.0003H13.0107L9.5255 23.7802Z"
                      fill="#191E6E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_556_1384">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {/* Mastercard */}
                <svg
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_556_1386)">
                    <path
                      d="M24.6802 25.3938H14.4302V9.84833H24.6802V25.3938Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M14.6893 17.6216C14.6877 16.052 15.0831 14.5027 15.8453 13.0909C16.6076 11.6792 17.7168 10.4419 19.089 9.47293C17.3898 8.27127 15.3491 7.52402 13.2002 7.31657C11.0514 7.10911 8.881 7.44982 6.93715 8.29977C4.99329 9.14971 3.35437 10.4746 2.20769 12.123C1.06101 13.7714 0.452823 15.6769 0.452637 17.6216C0.453051 19.5661 1.06131 21.4712 2.20791 23.1194C3.35452 24.7676 4.99323 26.0923 6.93681 26.9422C8.88039 27.7921 11.0505 28.1329 13.1991 27.9257C15.3477 27.7184 17.3882 26.9715 19.0874 25.7703C17.7157 24.801 16.6069 23.5637 15.845 22.1519C15.083 20.7402 14.6878 19.191 14.6893 17.6216Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M38.657 17.6211C38.6569 19.5657 38.0183 21.471 36.8142 23.1193C35.6102 24.7677 33.8894 26.0925 31.8483 26.9424C29.8073 27.7923 27.5284 28.133 25.2721 27.9255C23.0158 27.7181 20.8731 26.9709 19.0889 25.7693C21.9018 23.8716 23.7086 20.9273 23.7086 17.6211C23.7086 14.3148 21.9018 11.3705 19.0889 9.47281C20.8731 8.27122 23.0158 7.52401 25.2721 7.31656C27.5284 7.10912 29.8073 7.44981 31.8483 8.29971C33.8894 9.14961 35.6102 10.4744 36.8142 12.1228C38.0183 13.7711 38.6569 15.6764 38.657 17.6211Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_556_1386">
                      <rect
                        width="41"
                        height="38"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Credit Card Form */}
            {expandedPayment === "credit_card" && (
              <div className="mt-4 space-y-4">
                {/* Card Number */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    className="w-full p-4 pl-12 bg-[#F3F4F6] rounded-lg text-[#9CA3AF] placeholder-[#9CA3AF]"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] text-2xl">
                    💳
                  </div>
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      handleInputChange("expiryDate", e.target.value)
                    }
                    className="p-4 bg-[#F3F4F6] rounded-lg text-[#9CA3AF] placeholder-[#9CA3AF]"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    className="p-4 bg-[#F3F4F6] rounded-lg text-[#9CA3AF] placeholder-[#9CA3AF]"
                  />
                </div>

                {/* Cardholder Name */}
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={formData.cardholderName}
                  onChange={(e) =>
                    handleInputChange("cardholderName", e.target.value)
                  }
                  className="w-full p-4 bg-[#F3F4F6] rounded-lg text-[#9CA3AF] placeholder-[#9CA3AF]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-[#50AEFF] text-white font-bold text-base py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#3B9AEF] transition-colors"
        >
          <span className="text-2xl">🔒</span>
          Continue
        </button>

        {/* App Store Section */}
        <div className="text-center space-y-3 py-4">
          <div className="flex justify-center items-center gap-4">
            {/* Google Play */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6665 16C30.6665 17 30.1065 17.88 29.2932 18.3333L22.3598 22.1867L16.4932 16L22.3598 9.81334L29.2932 13.6667C30.1065 14.12 30.6665 15 30.6665 16Z"
                fill="#FFC107"
              />
              <path
                d="M16.4935 16L2.0935 31.1867C1.6135 30.7067 1.3335 30.0533 1.3335 29.3333V2.66667C1.3335 1.94667 1.6135 1.29334 2.0935 0.813339L16.4935 16Z"
                fill="#03A9F4"
              />
              <path
                d="M16.4933 16L22.3599 22.1867L5.29326 31.6667C4.9066 31.88 4.4666 32 3.99993 32C3.25326 32 2.57326 31.6933 2.09326 31.1867L16.4933 16Z"
                fill="#F44336"
              />
              <path
                d="M22.3599 9.81333L16.4933 16L2.09326 0.813333C2.57326 0.306667 3.25326 0 3.99993 0C4.4666 0 4.9066 0.12 5.29326 0.333333L22.3599 9.81333Z"
                fill="#4CAF50"
              />
            </svg>

            {/* App Store */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_556_1425)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 6.93335V25.0667C32.0018 25.9777 31.8237 26.8801 31.476 27.7221C31.1282 28.5641 30.6175 29.3292 29.9733 29.9733C29.3292 30.6175 28.5641 31.1282 27.7221 31.476C26.8801 31.8237 25.9777 32.0018 25.0667 32H6.93335C6.02234 32.0018 5.11994 31.8237 4.27792 31.476C3.43591 31.1282 2.67086 30.6175 2.02668 29.9733C1.3825 29.3292 0.871863 28.5641 0.524075 27.7221C0.176287 26.8801 -0.00180629 25.9777 1.38112e-05 25.0667V6.93335C-0.00180629 6.02234 0.176287 5.11994 0.524075 4.27792C0.871863 3.43591 1.3825 2.67086 2.02668 2.02668C2.67086 1.3825 3.43591 0.871863 4.27792 0.524075C5.11994 0.176287 6.02234 -0.00180629 6.93335 1.38112e-05H25.0667C25.9777 -0.00180629 26.8801 0.176287 27.7221 0.524075C28.5641 0.871863 29.3292 1.3825 29.9733 2.02668C30.6175 2.67086 31.1282 3.43591 31.476 4.27792C31.8237 5.11994 32.0018 6.02234 32 6.93335Z"
                  fill="url(#paint0_linear_556_1425)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_556_1425"
                  x1="15.9997"
                  y1="32"
                  x2="15.9997"
                  y2="1.52588e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1D6FF2" />
                  <stop offset="1" stopColor="#1AC8FC" />
                </linearGradient>
                <clipPath id="clip0_556_1425">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Stars */}
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FACC15] text-2xl">
                ⭐
              </span>
            ))}
          </div>

          <div className="space-y-1">
            <p className="text-[#31345D] text-sm">4.8 stars on</p>
            <p className="text-[#31345D] text-sm">App Store & Google Play</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[#22C55E] text-base">✓</span>
            <span className="text-[#31345D] text-xs">
              Your <strong>7-day trial for $1.00</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#22C55E] text-base">✓</span>
            <span className="text-[#6B7280] text-xs">
              You'll receive an email receipt every time your subscription
              renews.
            </span>
          </div>
        </div>

        {/* Terms */}
        <div className="space-y-3 text-xs text-[#31345D]/50">
          <p>
            These purchases are automatically renewed subscriptions. Payment
            will be made using your Apple ID when you confirm your purchase. The
            subscription automatically renews if auto-renewal is not turned off
            at least 24 hours before the end of the current period. Your account
            will be paid for the renewal within 24 hours before the end of the
            current period.
          </p>

          <p className="text-[#31345D]">
            By clicking continue, you accept the{" "}
            <span className="underline">Terms and Conditions</span> and{" "}
            <span className="underline">Subscription Terms</span>.
          </p>

          <p>
            You can manage and turn off automatic subscription renewal by going
            to your account settings in the App Store after the purchase. After
            cancellation, you will not receive a refund for the current billing
            period and you will continue to receive subscription content. The
            cancellation takes effect after the end of the period.
          </p>
        </div>
      </div>
    </div>
  );
}
