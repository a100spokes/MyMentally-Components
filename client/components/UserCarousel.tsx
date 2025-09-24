interface UserBadge {
  id: string;
  username: string;
  amount: string;
  avatar: string;
}

interface UserCarouselProps {
  className?: string;
}

export default function UserCarousel({ className = "" }: UserCarouselProps) {
  const userBadges: UserBadge[] = [
    {
      id: "1",
      username: "os**",
      amount: "$10",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/8a63517ddb60e35261e76e69d43d70f6c0e4e4e6?width=26",
    },
    {
      id: "2",
      username: "kat**",
      amount: "$1",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/ba80d55a979f387c0da64eb509eeb20d270a2c2e?width=26",
    },
    {
      id: "3",
      username: "Ol**",
      amount: "$2",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/57fc135e2e189cd7d412d9a692eeff4147c5622a?width=26",
    },
    {
      id: "4",
      username: "Zet**",
      amount: "$10",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/db0cd47433c2ad430f72e93c8cb17d05cb3defb4?width=26",
    },
    {
      id: "5",
      username: "kis**",
      amount: "$17.34",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/81243b21952f318fff7b8bdc62c734b826d779b9?width=26",
    },
    {
      id: "6",
      username: "koo*",
      amount: "$10",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/736edef1ee03c0771e1189dd0e281865c8671514?width=26",
    },
  ];

  // Triple the array to create seamless loop
  const duplicatedBadges = [...userBadges, ...userBadges, ...userBadges];

  const scrollKeyframes = `
    @keyframes userCarouselScroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollKeyframes }} />
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ width: "450px", height: "32px" }}
      >
        <div
          className="flex items-center gap-3"
          style={{
            width: "fit-content",
            animation: "userCarouselScroll 12s linear infinite",
          }}
        >
          {duplicatedBadges.map((badge, index) => (
            <div
              key={`${badge.id}-${index}`}
              className="flex items-center gap-2.5 px-2 py-1 rounded whitespace-nowrap flex-shrink-0"
              style={{
                backgroundColor: "rgba(49, 52, 93, 0.15)",
                boxShadow: "0 4px 8px 0 rgba(0, 5, 72, 0.12)",
              }}
            >
              <img
                src={badge.avatar}
                alt=""
                className="w-3.5 h-3.5 rounded-full object-cover"
              />
              <span className="text-[#31345D] text-xs font-normal leading-6">
                {badge.username} chose {badge.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
