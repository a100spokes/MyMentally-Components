import { useNavigate, useLocation } from "react-router-dom";
import ScreenCheckout from "../components/ScreenCheckout";

export default function ScreenCheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get selected tariff from navigation state or default to monthly
  const selectedTariff = location.state?.selectedTariff || "tariff_m";

  const slideObject = {
    id: "checkout_screen",
    type: "checkout",
    template: "ScreenCheckout",
    data: {
      title: "Subscribe to",
      onNext: "Pay now",
      subtitle:
        "By providing your card information you allow MyMentally to charge your card for future payments in accordance with their terms.",
      tariffs: [
        {
          id: "tariff_w",
          title: "Weekly premium subscription",
          oldPrice: "$15.99",
          currentPrice: "$7.99",
          perDay: "$1.14",
        },
        {
          id: "tariff_m",
          title: "Monthly premium subscription",
          oldPrice: "$39.99",
          currentPrice: "$19.99",
          perDay: "$0.66",
        },
        {
          id: "tariff_y",
          title: "Yearly premium subscription",
          oldPrice: "$79.99",
          currentPrice: "$39.99",
          perDay: "$0.16",
        },
      ],
    },
  };

  const handleAnswer = (answer: string) => {
    console.log("Checkout answer:", answer);
    // Navigate to success screen or back to paywall
    if (answer === "payment_completed") {
      // For now, navigate to paywall as final step - can be updated later
      navigate("/ScreenPaywall");
    }
  };

  const handleBack = () => {
    navigate("/ScreenDifference");
  };

  return (
    <ScreenCheckout
      slideObject={slideObject}
      selectedTariff={selectedTariff}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
