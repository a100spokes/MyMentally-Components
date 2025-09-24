import { useNavigate } from "react-router-dom";
import ScreenTrial from "../components/ScreenTrial";

export default function ScreenTrialPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "question_trial",
    type: "radio",
    funnelType: "childhood",
    template: "ScreenTrial",
    data: {
      title: "Unlock everything with a contribution that feels right",
      description: [
        {
          text: "Full results from your trauma test",
        },
        {
          text: "35+ expert-built personality tests",
        },
        {
          text: "Personalized daily plan for you",
        },
        {
          text: "Calming games to relax your mind",
        },
      ],
      textBlock:
        "We want mental health support to stay accessible for everyone. It costs us $17.34 to provide this trial.\nBut you're free to choose the amount that feels right for you.",
    },
    options: [
      {
        id: "1",
        isDefault: false,
        title: "1$",
      },
      {
        id: "2",
        isDefault: false,
        title: "2$",
      },
      {
        id: "10",
        isDefault: true,
        title: "10$",
      },
      {
        id: "17.34",
        isDefault: false,
        title: "17.34$",
        subButtonText: "Cost to cover our team's effort",
      },
    ],
  };

  const handleAnswer = (answer: string) => {
    console.log("Trial answer:", answer);
    // Navigate to TrialWorks before final paywall
    navigate("/TrialWorks", { state: { selectedAmount: answer } });
  };

  const handleBack = () => {
    navigate("/ScreenCheckout");
  };

  return (
    <ScreenTrial
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
