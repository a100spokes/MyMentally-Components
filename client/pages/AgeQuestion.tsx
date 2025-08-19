import { useNavigate } from "react-router-dom";
import ScreenQuestion2 from "@/components/ScreenQuestion2";

const sampleAgeQuestionSlideObject = {
  id: "question_age",
  type: "radio",
  template: "ScreenQuestion2",
  data: {
    title: "Select your age",
  },
  options: [
    {
      id: "question_18-21",
      title: "18-21",
    },
    {
      id: "question_22-25",
      title: "22-25",
    },
    {
      id: "question_26-30",
      title: "26-30",
    },
    {
      id: "question_31-35",
      title: "31-35",
    },
    {
      id: "question_36-40",
      title: "36-40",
    },
    {
      id: "question_41-45",
      title: "41-45",
    },
    {
      id: "question_46-50",
      title: "46-50",
    },
    {
      id: "question_51-55",
      title: "51-55",
    },
    {
      id: "question_56-60",
      title: "56-60",
    },
    {
      id: "question_61-65",
      title: "61-65",
    },
    {
      id: "question_66-70",
      title: "66-70",
    },
    {
      id: "question_71+",
      title: "71+",
    },
  ],
};

export default function AgeQuestion() {
  const navigate = useNavigate();

  const handleAnswer = (selectedOption: string) => {
    console.log("Selected age option:", selectedOption);
    // Here you would typically save the answer and navigate to next question
    // For now, just log the selection
    // navigate("/next-question");
  };

  const handleBack = () => {
    navigate("/question");
  };

  return (
    <ScreenQuestion2
      slideObject={sampleAgeQuestionSlideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
