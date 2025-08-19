import { useNavigate } from "react-router-dom";
import QuestionSlide from "@/components/QuestionSlide";

const sampleQuestionSlideObject = {
  id: "question_gender",
  type: "radio",
  template: "QuestionSlide",
  data: {
    title: "Which gender best describes you?",
  },
  options: [
    {
      id: "male",
      title: "Male",
      icon: "https://...",
    },
    {
      id: "female",
      title: "Female",
      icon: "https://...",
    },
    {
      id: "other",
      title: "Other",
      icon: "https://...",
    },
  ],
  section: {
    name: "About You",
    number: 1,
    progressPercent: 0,
  },
};

export default function Question() {
  const navigate = useNavigate();

  const handleAnswer = (selectedOption: string) => {
    console.log("Selected option:", selectedOption);
    // Navigate to age question after selecting gender
    navigate("/age-question");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <QuestionSlide
      slideObject={sampleQuestionSlideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
