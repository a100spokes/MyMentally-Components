import { useNavigate } from "react-router-dom";
import ScreenEmail from "../components/ScreenEmail";

export default function ScreenEmailPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "email_screen_1",
    type: "email",
    template: "ScreenEmail",
    data: {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/61bbbe2845908ff4a6c0ce759c3690c73b32cc2f?width=320",
      buttonText: "Explore results",
      title: "Enter email to receive your personal plan",
      description:
        "We promise not to use your email for any activities, and we guarantee its 100% safety and privacy.",
      placeholder: "Enter your email",
      skip: false,
    },
  };

  const handleAnswer = (email: string) => {
    // Store email and navigate to the paywall screen
    console.log("Email submitted:", email);
    navigate("/ScreenPaywall");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenEmail
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
