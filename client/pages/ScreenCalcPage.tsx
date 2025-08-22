import { useNavigate } from "react-router-dom";
import ScreenCalc from "../components/ScreenCalc";

export default function ScreenCalcPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "calculations_screen_1",
    type: "calculations",
    template: "ScreenCalc",
    data: {
      title: "Calculating your results...",
      description: "Calculating your results...",
    },
    progressSection: [
      {
        id: "section_1",
        progressText: "Processing your ADHD assessment",
        progressColor: "5D88FF",
        question: {
          id: "question_1",
          idProgress: "section_1",
          percProgress: 34,
          title:
            "Over the past month, have you often experienced intense negative emotions in response to setbacks while monitoring your progress?",
          answers: [
            { id: "answer_1_1", text: "Yes" },
            { id: "answer_1_2", text: "No" },
          ],
        },
      },
      {
        id: "section_2",
        progressText: "Examining your behavioral patterns",
        progressColor: "C084FC",
        question: {
          id: "question_2",
          idProgress: "section_2",
          percProgress: 32,
          title:
            "Has anyone in your family ever been diagnosed with ADHD or another mental health condition?",
          answers: [
            { id: "answer_2_1", text: "Yes" },
            { id: "answer_2_2", text: "No" },
          ],
        },
      },
      {
        id: "section_3",
        progressText: "Evaluating your habits",
        progressColor: "FACC15",
        question: {
          id: "question_3",
          idProgress: "section_3",
          percProgress: 17,
          title:
            "Would you say you're sensitive to strong sounds and bright light?",
          answers: [
            { id: "answer_3_1", text: "Yes" },
            { id: "answer_3_2", text: "No" },
          ],
        },
      },
      {
        id: "section_4",
        progressText: "Crafting a tailored list of solutions",
        progressColor: "F87171",
      },
      {
        id: "section_5",
        progressText: "Developing your personalized plan",
        progressColor: "FF8DE1",
      },
    ],
    reviews: [
      {
        id: "review_1",
        rating: "5.0",
        review:
          "MyMentally has helped me spot patterns in my mood. I feel more in control every day",
        subtitle: "Racheal, 35, California",
      },
      {
        id: "review_2",
        rating: "4.9",
        review:
          "The insights are clear and practical. I've already made positive changes",
        subtitle: "Amy, 29, New York",
      },
      {
        id: "review_3",
        rating: "5.0",
        review:
          "Tracking my emotions is now effortless. MyMentally keeps me mindful and balanced",
        subtitle: "Rose, 31, Chicago",
      },
    ],
  };

  const handleAnswer = (answer: string) => {
    // Navigate to the email screen
    console.log("Calc answer:", answer);
    navigate("/ScreenEmail");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenCalc
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
