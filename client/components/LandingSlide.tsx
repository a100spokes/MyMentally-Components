import { Link } from "react-router-dom";

interface SlideObject {
  id: string;
  type: string;
  template: string;
  data: {
    heroImage: string;
    heroImageAlt: string;
    title: string;
    description: string;
    ctaText: string;
    branding: {
      name: string;
      logo: string;
      copyright: string;
      footerLinks: Array<{
        label: string;
        href: string;
      }>;
    };
  };
}

interface LandingSlideProps {
  slideObject: SlideObject;
  onCTA?: () => void;
}

export default function LandingSlide({ slideObject, onCTA }: LandingSlideProps) {
  const { data } = slideObject;

  const handleCTAClick = () => {
    if (onCTA) {
      onCTA();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-100 to-gray-50 relative">
      <div className="flex flex-col justify-between items-start flex-1 p-8 max-w-md mx-auto">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center flex-1 w-full">
          {/* Hero Image */}
          <div className="flex flex-col items-start pb-10 w-48">
            <svg
              className="w-48 h-48"
              viewBox="0 0 192 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M165.963 67.0183C166.914 79.5816 163.912 92.1278 157.377 102.9C150.454 114.081 146.734 126.949 146.622 140.1V174.417C146.623 175.288 146.452 176.15 146.12 176.955C145.787 177.76 145.299 178.491 144.683 179.107C144.067 179.723 143.336 180.212 142.532 180.545C141.727 180.879 140.865 181.05 139.994 181.05H91.8919C90.1343 181.05 88.4487 180.352 87.2059 179.109C85.9631 177.866 85.2649 176.18 85.2649 174.423V153.945C85.2649 152.634 84.7444 151.378 83.8177 150.451C82.8911 149.524 81.6344 149.004 80.3239 149.004H63.6874C58.7236 149.004 53.9631 147.032 50.453 143.522C46.943 140.012 44.9708 135.252 44.9704 130.288V115.389C44.9705 114.554 44.6614 113.748 44.1027 113.128C43.544 112.508 42.7753 112.116 41.9449 112.029L29.4619 110.725C28.7649 110.653 28.0993 110.398 27.5315 109.988C26.9637 109.577 26.5137 109.024 26.2265 108.385C25.9393 107.746 25.825 107.042 25.895 106.345C25.965 105.648 26.2169 104.981 26.6254 104.412L40.7539 84.7228C43.4989 80.8983 44.9737 76.3084 44.9704 71.6008V71.5333C44.9688 55.8564 51.0444 40.7892 61.9204 29.4986C72.7964 18.2079 87.6258 11.5731 103.292 10.9885C118.958 10.4039 134.241 15.9151 145.928 26.3637C157.615 36.8124 164.797 51.3849 165.963 67.0183Z"
                fill="#AAE1F0"
              />
              <path
                d="M137.606 87.6226C132.576 87.5686 127.765 85.5536 124.199 82.0065C110.976 86.787 95.5696 86.9565 87.5041 82.6155C86.5659 82.113 85.6727 81.5309 84.8341 80.8755C80.6158 82.3313 76.0579 82.488 71.7496 81.3255C64.6246 79.053 61.0021 72.1336 61.8106 62.3431C64.2106 33.3211 94.2511 23.9551 94.5541 23.8636C95.1226 23.7005 95.7325 23.7679 96.2517 24.0511C96.7709 24.3343 97.1578 24.8105 97.3285 25.3768C97.4993 25.9431 97.4402 26.5538 97.1641 27.0768C96.8879 27.5999 96.417 27.9931 95.8531 28.1715C94.7326 28.5 68.4361 36.774 66.2986 62.7001C65.8486 68.1 66.6751 74.9685 73.1206 77.025C75.8224 77.8139 78.6843 77.8775 81.4186 77.2095C79.0358 73.395 78.1493 68.8334 78.9301 64.4041C80.9386 48.4381 96.1351 37.425 106.284 34.704C111.876 33.204 116.193 34.0065 118.434 36.963C121.16 40.563 120.18 46.3605 115.524 54.213C115.434 54.363 115.346 54.5131 115.254 54.6631C119.198 55.4896 122.7 56.3805 125.819 57.3165C127.853 55.2566 130.098 53.416 132.518 51.8251C137.885 48.279 144.729 48.675 147.774 52.7115C149.216 54.6225 151.232 59.3116 145.281 67.0215C149.678 71.0715 150.368 74.8755 150.231 77.2395C149.894 82.914 144.288 87.5671 137.736 87.612L137.606 87.6226ZM128.849 80.0896C131.396 82.0259 134.499 83.0895 137.699 83.1226C141.857 83.094 145.536 80.2815 145.733 76.983C145.853 74.967 144.821 72.702 142.334 70.3995C141.219 71.5425 139.941 72.7425 138.476 73.9995C135.554 76.4521 132.316 78.5005 128.849 80.0896ZM90.0376 78.8596C97.6876 82.7085 110.477 81.696 121.238 78.0975C120.733 77.1816 120.325 76.216 120.02 75.216C119.336 72.8228 119.22 70.3032 119.68 67.8572C120.141 65.4112 121.165 63.1061 122.672 61.125C119.672 60.2806 116.322 59.475 112.622 58.7416C106.96 67.2895 99.1757 74.2215 90.0316 78.8596H90.0376ZM127.16 62.5005C124.191 66.2896 123.191 70.185 124.325 73.9005C124.605 74.8098 125.003 75.6782 125.51 76.4835C129.133 75.0284 132.516 73.0355 135.546 70.5721C136.725 69.5611 137.775 68.593 138.696 67.668C135.064 65.5043 131.192 63.7702 127.16 62.5005ZM111.332 38.484C110.017 38.5076 108.71 38.7007 107.445 39.0585C98.7661 41.3835 85.1191 51.2281 83.3911 64.9711C82.8241 69.4711 83.6911 73.0875 85.9726 75.7605C93.6541 72.5745 101.657 65.733 107.664 57.8265C104.764 57.3265 101.664 56.8696 98.3641 56.4556C98.0683 56.4217 97.7821 56.3294 97.5222 56.1842C97.2623 56.0389 97.0338 55.8435 96.85 55.6092C96.6662 55.375 96.5307 55.1066 96.4514 54.8196C96.3721 54.5326 96.3505 54.2328 96.3879 53.9374C96.4253 53.642 96.521 53.357 96.6694 53.0988C96.8178 52.8407 97.0159 52.6146 97.2523 52.4336C97.4887 52.2526 97.7587 52.1203 98.0466 52.0445C98.3345 51.9686 98.6347 51.9506 98.9296 51.9916C103.121 52.5205 106.984 53.1075 110.52 53.7525C110.91 53.1465 111.287 52.538 111.65 51.9271C116.727 43.3591 115.379 40.395 114.845 39.69C114.386 39.24 113.832 38.8981 113.225 38.6895C112.617 38.4808 111.97 38.4106 111.332 38.484ZM130.605 58.9095C134.508 60.2557 138.238 62.0571 141.719 64.2766C145.044 59.9701 145.319 56.9476 144.177 55.4266C142.769 53.5606 138.653 53.1646 134.994 55.584C133.458 56.5924 131.991 57.7034 130.605 58.9095Z"
                fill="#24A6D3"
              />
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col items-start pb-4">
            <div className="flex flex-col items-center">
              <h1 className="text-gray-800 text-center font-roboto font-bold text-3xl leading-9">
                {data.title}
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center max-w-96 px-1">
            <p className="text-gray-600 text-center font-roboto text-base leading-6">
              {data.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-start max-w-96 min-h-[100px] pt-10 w-full">
            <button
              onClick={handleCTAClick}
              className="w-full bg-[#50AEFF] hover:bg-[#3B9AEF] transition-colors duration-200 text-white text-center font-roboto font-bold text-lg leading-7 py-4 px-4 rounded-full shadow-lg"
            >
              {data.ctaText}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start gap-2 w-full">
          {/* Brand */}
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center pr-2">
              <img
                src={data.branding.logo}
                alt={`${data.branding.name} logo`}
                className="w-6 h-6 rounded-xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-center font-roboto font-semibold text-lg leading-7">
                {data.branding.name}
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center w-full">
            <p className="w-full text-gray-500 text-center font-roboto text-xs leading-4">
              {data.branding.copyright}
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex pt-2 justify-center items-start w-full">
            <div className="flex flex-wrap justify-center items-center gap-2 text-xs">
              {data.branding.footerLinks.map((link, index) => (
                <div key={link.href} className="flex items-center">
                  <Link
                    to={link.href}
                    className="text-gray-500 text-center font-roboto text-xs leading-4 underline hover:text-gray-700"
                  >
                    {link.label}
                  </Link>
                  {index < data.branding.footerLinks.length - 1 && (
                    <span className="text-gray-500 mx-2 font-roboto text-xs">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
