import { useNavigate } from "react-router-dom";
import ScreenInfo from "@/components/ScreenInfo";

const sampleInfoSlideObject = {
  id: "info_did_you_know",
  type: "info",
  template: "ScreenInfo",
  data: {
    buttonText: "Next",
  },
  image:
    "https://api.builder.io/api/v1/image/assets/TEMP/2dd7772704196a96fc3fe1bd2e42ef09ec6116a0?width=656",
  title: "Did You Know?",
  description:
    "Many women are misdiagnosed or overlooked because most ADHD research has focused on men.",
};

export default function InfoScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Next clicked - moving to multi-question screen");
    // Navigate to multi-question screen
    navigate("/multi-question");
  };

  return (
    <ScreenInfo slideObject={sampleInfoSlideObject} onAnswer={handleNext} />
  );
}
