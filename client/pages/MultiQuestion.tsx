import { useNavigate } from "react-router-dom";
import MultiQuestionSlide from "@/components/MultiQuestionSlide";

const sampleMultiQuestionSlideObject = {
  id: "checkbox_free_time",
  type: "checkbox",
  template: "MultiQuestionSlide",
  data: {
    buttonText: "Next",
    title: "When you have free time, you often...",
    subtitle: "Choose as many as you need",
  },
  options: [
    {
      id: "question_find-hard",
      title: "Find it hard to slow down and relax",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3be8e11bf8138f5b57cf8927e66e997c25a40836?width=64",
    },
    {
      id: "question_jump_between",
      title: "Jump between tasks without thinking ahead",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ee800a14b9d380ae072a4859fc2bd8506a8307cb?width=58",
    },
    {
      id: "question_feel_restless",
      title: "Feel restless or need to move",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ae1d21fc8372b775f589da205ffcdfd87ce2ce1c?width=64",
    },
    {
      id: "question_enjoy_spending",
      title: "Enjoy spending time on solo hobbies",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d52e3e48b32886b3c967329122811a8850cc6dc7?width=64",
    },
    {
      id: "question_feel_peaceful",
      title: "Feel peaceful and at ease",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/87c52db0c4d660aff1473f2bc3f271cb9cd88bfd?width=64",
    },
    {
      id: "question_other",
      title: "Other",
      image: "https://via.placeholder.com/64/F8C69C/F8C69C.png", // Using placeholder for question mark icon
    },
  ],
};

export default function MultiQuestion() {
  const navigate = useNavigate();

  const handleAnswer = (selectedOptions: string[]) => {
    console.log("Selected options:", selectedOptions);
    // Navigate to square answers screen after selecting multiple options
    navigate("/SquareAnswers");
  };

  const handleBack = () => {
    navigate("/InfoScreen");
  };

  return (
    <MultiQuestionSlide
      slideObject={sampleMultiQuestionSlideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
