import { useNavigate } from "react-router-dom";
import ScreenWithProgress from "@/components/ScreenWithProgress";

const sampleProgressSlideObject = {
  id: "info_at_mymentally_progress",
  type: "info",
  template: "ScreenWithProgress",
  data: {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/057f9d69065de1d68a7b86d0227db077c1245d76?width=512",
    buttonText: "Next",
    title: "At MyMentally, we understand ADHD looks different for women",
    description:
      "Over 96,5% users manage ADHD more easily with our personalized plans",
    progressText: "Preparing tailored content",
    progressTime: 1500, // 1500ms
  },
};

export default function ProgressScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Progress complete - moving to next screen");
    // Here you would typically navigate to the next screen in the funnel
    // For now, just log the action
    // navigate("/next-screen");
  };

  return (
    <ScreenWithProgress
      slideObject={sampleProgressSlideObject}
      onAnswer={handleNext}
    />
  );
}
