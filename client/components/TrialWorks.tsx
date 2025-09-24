interface TrialWorksProps {
  onContinue?: () => void;
  onBack?: () => void;
}

export default function TrialWorks({ onContinue, onBack }: TrialWorksProps) {
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-5">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#31345D] font-bold text-xl md:text-2xl">
            How your trial works
          </h1>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          
          {/* Step 1 - Sign up */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.61808 19.8333L4.07642 14.2916L5.46183 12.9062L9.61808 17.0624L18.5382 8.14228L19.9236 9.5277L9.61808 19.8333Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-[#31345D] font-bold text-base line-through">
                Sign up for MyMentally
              </h3>
              <p className="text-[#31345D] text-sm leading-relaxed">
                You have successfully started your journey towards a more resilient and trauma-free version of yourself.
              </p>
            </div>
          </div>

          {/* Step 2 - Today */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.16661 10.1111H14.9166V8.16661C14.9166 7.35643 14.633 6.66777 14.0659 6.10064C13.4988 5.53351 12.8101 5.24994 11.9999 5.24994C11.1898 5.24994 10.5011 5.53351 9.93397 6.10064C9.36684 6.66777 9.08328 7.35643 9.08328 8.16661H7.13883C7.13883 6.8217 7.61279 5.67529 8.56071 4.72737C9.50863 3.77946 10.655 3.3055 11.9999 3.3055C13.3449 3.3055 14.4913 3.77946 15.4392 4.72737C16.3871 5.67529 16.8611 6.8217 16.8611 8.16661V10.1111H17.8333C18.368 10.1111 18.8258 10.3014 19.2065 10.6822C19.5873 11.063 19.7777 11.5208 19.7777 12.0555V21.7777C19.7777 22.3124 19.5873 22.7702 19.2065 23.151C18.8258 23.5318 18.368 23.7222 17.8333 23.7222H6.16661C5.63189 23.7222 5.17414 23.5318 4.79335 23.151C4.41256 22.7702 4.22217 22.3124 4.22217 21.7777V12.0555C4.22217 11.5208 4.41256 11.063 4.79335 10.6822C5.17414 10.3014 5.63189 10.1111 6.16661 10.1111ZM6.16661 21.7777H17.8333V12.0555H6.16661V21.7777ZM11.9999 18.8611C12.5347 18.8611 12.9924 18.6707 13.3732 18.2899C13.754 17.9091 13.9444 17.4513 13.9444 16.9166C13.9444 16.3819 13.754 15.9241 13.3732 15.5433C12.9924 15.1626 12.5347 14.9722 11.9999 14.9722C11.4652 14.9722 11.0075 15.1626 10.6267 15.5433C10.2459 15.9241 10.0555 16.3819 10.0555 16.9166C10.0555 17.4513 10.2459 17.9091 10.6267 18.2899C11.0075 18.6707 11.4652 18.8611 11.9999 18.8611Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-[#31345D] font-bold text-base">
                Today
              </h3>
              <p className="text-[#31345D] text-sm leading-relaxed">
                Enjoy full access to all the premium content.
              </p>
            </div>
          </div>

          {/* Step 3 - Day 5 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.22217 20.8055V18.8611H6.16661V12.0555C6.16661 10.7106 6.57171 9.51557 7.38189 8.47043C8.19208 7.42529 9.24532 6.74069 10.5416 6.41661V5.73606C10.5416 5.33096 10.6834 4.98664 10.967 4.70307C11.2505 4.41951 11.5949 4.27772 11.9999 4.27772C12.405 4.27772 12.7494 4.41951 13.0329 4.70307C13.3165 4.98664 13.4583 5.33096 13.4583 5.73606V6.41661C14.7546 6.74069 15.8078 7.42529 16.618 8.47043C17.4282 9.51557 17.8333 10.7106 17.8333 12.0555V18.8611H19.7777V20.8055H4.22217ZM11.9999 23.7222C11.4652 23.7222 11.0075 23.5318 10.6267 23.151C10.2459 22.7702 10.0555 22.3124 10.0555 21.7777H13.9444C13.9444 22.3124 13.754 22.7702 13.3732 23.151C12.9924 23.5318 12.5347 23.7222 11.9999 23.7222ZM8.11106 18.8611H15.8888V12.0555C15.8888 10.9861 15.508 10.0705 14.7465 9.30897C13.9849 8.5474 13.0694 8.16661 11.9999 8.16661C10.9305 8.16661 10.015 8.5474 9.25342 9.30897C8.49184 10.0705 8.11106 10.9861 8.11106 12.0555V18.8611Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-[#31345D] font-bold text-base">
                Day 5
              </h3>
              <p className="text-[#31345D] text-sm leading-relaxed">
                Reminder about the end of a trial period. Cancel it anytime in a few seconds.
              </p>
            </div>
          </div>

          {/* Step 4 - Day 7 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E0E7FF] rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-7 h-7 bg-[#5D88FF] rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36665 14L2.56665 10.2L3.51665 9.25L6.36665 12.1L12.4833 5.98333L13.4333 6.93333L6.36665 14Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-[#31345D] font-bold text-base">
                Day 7
              </h3>
              <p className="text-[#31345D] text-sm leading-relaxed">
                Your trial will be converted to a full price unless it is canceled
              </p>
            </div>
          </div>
        </div>

        {/* Total Today Section */}
        <div className="border-t border-dashed border-gray-300 pt-4">
          <div className="border-b border-dashed border-gray-300 pb-4 mb-4">
            <h2 className="text-[#31345D] font-bold text-lg mb-4">Total today</h2>
            
            <div className="flex justify-between items-start">
              <span className="text-[#31345D] text-sm">7-day trial</span>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#31345D] font-bold text-base">$1.43</span>
                  <span className="text-[#31345D] text-xs">/per day</span>
                </div>
                <div className="text-[#3B82F6] text-xs">Billed at $10.00</div>
              </div>
            </div>
          </div>
          
          <p className="text-[#31345D] text-sm leading-relaxed">
            You'll have a full 7 days to experience how MyMentally can improve your life.
          </p>
        </div>

        {/* Price After Trial Section */}
        <div className="border-t border-dashed border-gray-300 pt-4">
          <h2 className="text-[#31345D] font-bold text-lg mb-4">Price after trial</h2>
          
          <div className="flex justify-between items-start">
            <span className="text-[#31345D] text-sm">4-weeks plan</span>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className="text-[#31345D] font-bold text-base">$0.66</span>
                <span className="text-[#31345D] text-xs">/per day</span>
              </div>
              <div className="text-[#99A0A9] text-xs">Billed at $19.99/month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
