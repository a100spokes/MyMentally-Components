import { useNavigate } from "react-router-dom";
import TrialWorks from "../components/TrialWorks";

export default function TrialWorksPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the final paywall screen
    navigate("/ScreenPaywall");
  };

  const handleBack = () => {
    navigate("/ScreenTrial");
  };

  return <TrialWorks onContinue={handleContinue} onBack={handleBack} />;
}
