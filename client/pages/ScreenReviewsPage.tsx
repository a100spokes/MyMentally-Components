import { useNavigate } from "react-router-dom";
import ScreenReviews from "../components/ScreenReviews";

export default function ScreenReviewsPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "info_review_1",
    type: "info",
    template: "ScreenReviews",
    data: {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6a92d167abaf8454865b2f9f90283da71c9d6b51?width=712",
      buttonText: "Next",
      title: "It's easier to stay focused with MyMentally",
      subtitle: "Margaret is among many living barrier-free from ADHD now",
      name: "Margaret",
      rating: "4.8",
      review:
        '"Thanks to MyMentally\'s tests and personalized courses, I finally understood how to manage my ADHD and took control over my impulsive habits"',
    },
  };

  const handleAnswer = (answer: string) => {
    // Navigate to the ScreenStats component
    console.log("Review answer:", answer);
    navigate("/ScreenStats");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenReviews
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
