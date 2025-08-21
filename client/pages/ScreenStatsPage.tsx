import { useNavigate } from "react-router-dom";
import ScreenStats from "../components/ScreenStats";

export default function ScreenStatsPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "info_stats_1",
    type: "info",
    template: "ScreenStats",
    data: {
      image: "https://",
      buttonText: "Continue",
      title: "MyMentally Effect",
      textSection: [
        {
          id: "section_1",
          image: "https://",
          text: "The National Library of Medicine estimates that about 366.3 million adults worldwide show symptoms of ADHD"
        },
        {
          id: "section_2",
          image: "https://",
          text: "The U.S. Centers for Disease Control and Prevention report that around 60% of children with ADHD also have another mental, emotional, or behavioral condition"
        }
      ]
    }
  };

  const handleAnswer = (answer: string) => {
    // Navigate to the next screen in the funnel
    console.log("Stats answer:", answer);
    // navigate("/next-screen"); // Will be updated when next screen is created
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenStats
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
