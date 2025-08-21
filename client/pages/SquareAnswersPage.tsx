import { useNavigate } from "react-router-dom";
import SquareAnswers from "@/components/SquareAnswers";

const sampleSquareAnswersSlideObject = {
  id: "radio_how_do_you_feel",
  type: "radio",
  template: "SquareAnswers",
  data: {
    title: "How do you feel about the following statement?",
    subtitle: '"I often feel a strong urge to take action, even when unnecessary."',
  },
  options: [
    {
      id: "square_sad",
      image: "https://cdn.builder.io/api/v1/image/assets%2F06a9b9239e4142ec8519ebfeb96a4bb3%2Ff87cb3a89a51415f8bce54bfc3951bac?format=webp&width=64", // placeholder for sad emoji
    },
    {
      id: "square_flushed",
      image: "https://cdn.builder.io/api/v1/image/assets%2F06a9b9239e4142ec8519ebfeb96a4bb3%2Ff87cb3a89a51415f8bce54bfc3951bac?format=webp&width=64", // placeholder for flushed emoji
    },
    {
      id: "square_smile",
      image: "https://cdn.builder.io/api/v1/image/assets%2F06a9b9239e4142ec8519ebfeb96a4bb3%2Ff87cb3a89a51415f8bce54bfc3951bac?format=webp&width=64", // placeholder for smile emoji
    },
    {
      id: "square_smirking",
      image: "https://cdn.builder.io/api/v1/image/assets%2F06a9b9239e4142ec8519ebfeb96a4bb3%2Ff87cb3a89a51415f8bce54bfc3951bac?format=webp&width=64", // placeholder for smirking emoji
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
