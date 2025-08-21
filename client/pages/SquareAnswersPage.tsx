import { useNavigate } from "react-router-dom";
import SquareAnswers from "@/components/SquareAnswers";

const sampleSquareAnswersSlideObject = {
  id: "radio_how_do_you_feel",
  type: "radio",
  template: "SquareAnswers",
  data: {
    title: "How do you feel about the following statement?",
    subtitle:
      '"I often feel a strong urge to take action, even when unnecessary."',
  },
  options: [
    {
      id: "square_sad",
      image: "https://", // SVG will be embedded directly in component
    },
    {
      id: "square_flushed",
      image: "https://", // SVG will be embedded directly in component
    },
    {
      id: "square_smile",
      image: "https://", // SVG will be embedded directly in component
    },
    {
      id: "square_smirking",
      image: "https://", // SVG will be embedded directly in component
    },
  ],
};

export default function SquareAnswersPage() {
  const navigate = useNavigate();

  const handleAnswer = (selectedOption: string) => {
    console.log("Selected emotion option:", selectedOption);
    // Here you would typically save the answer and navigate to next screen
    // For now, just log the selection
    // navigate("/next-screen");
  };

  const handleBack = () => {
    navigate("/MultiQuestion");
  };

  return (
    <SquareAnswers
      slideObject={sampleSquareAnswersSlideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
