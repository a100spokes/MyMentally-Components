import { useNavigate } from "react-router-dom";
import ScreenDifference from "../components/ScreenDifference";

export default function ScreenDifferencePage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "info_feel_difference",
    type: "info",
    template: "ScreenDifference",
    data: {
      title: "Feel the Difference in Just 7 Days",
      chipText: "WITH MYMENTALLY",
      onNext: "Continue"
    },
    tabs: [
      {
        id: "tab_1",
        image: "https://",
        text_1: "Mood swings that don't make sense",
        text_2: "Stuck in loops of overthinking",
        text_3: "Stress and anxiety feel hard to manage",
        text_4: "Struggling to build helpful habits"
      },
      {
        id: "tab_2",
        image: "https://",
        text_1: "Recognizing what affects your mood",
        text_2: "Thoughts feel easier to navigate",
        text_3: "Have with tools to sooth yourself",
        text_4: "Follow routines that feel doable"
      }
    ]
  };

  const handleAnswer = (answer: string) => {
    console.log("ScreenDifference answer:", answer);
    // Navigate to the next screen (before ScreenPaywall)
    navigate("/ScreenPaywall");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenDifference
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
