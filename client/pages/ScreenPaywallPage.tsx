import { useNavigate } from "react-router-dom";
import ScreenPaywall from "../components/ScreenPaywall";

export default function ScreenPaywallPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "paywall_screen_1",
    type: "paywall",
    template: "ScreenPaywall",
    data: {
      title: "You Have Moderate ADHD Symptoms. Let's Take Action Today",
      description: "Calculating your results...",
      buttonText: "Get My Plan Now"
    },
    countdownSection: {
      countdownText: "Your results and personalized plan are saved for you for the next 10 minutes.",
      countdownStartTime: "600000ms"
    },
    progressSection: [
      {
        id: "section_1",
        title: "Physical symptoms:",
        progressText: "Fatigue, trouble sleeping, depression, or frequent mood changes.",
        progressColor: "FF5D73",
        percProgress: 80
      },
      {
        id: "section_2",
        title: "Psychological symptoms:",
        progressText: "Anxiety, irritability, chronic exhaustion, or unexplained physical discomfort.",
        progressColor: "FFBC75",
        percProgress: 60
      },
      {
        id: "section_3",
        title: "Behavioral symptoms:",
        progressText: "Restlessness, vivid nightmares, or recurring distressing thoughts linked to past events.",
        progressColor: "FFD65D",
        percProgress: 50
      },
      {
        id: "section_4",
        title: "Impact on your life:",
        progressText: "Emotional instability, relationship challenges, difficulty focusing, and trouble meeting goals.",
        progressColor: "FFBE85",
        percProgress: 70
      }
    ],
    graphSection: {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e27a917d89f19225b8d303be7d82a625e7af244f?width=776"
    },
    affectSection: {
      title: "How ADHD affects your daily life",
      description: "Based on your responses, we've calculated your ADHD symptom score.",
      subtitle: "Most disturbing ADHD symptoms you've noticed:",
      options: [
        {
          id: "section_1",
          title: "Delayed responses",
          description: "Taking longer to react or complete simple tasks.",
          icon: "https://"
        },
        {
          id: "section_2",
          title: "Elusive memory",
          description: "Difficulty recalling details or keeping track of information.",
          icon: "https://"
        },
        {
          id: "section_3",
          title: "Emotional rollercoaster",
          description: "Rapid mood changes, irritability, and feeling emotionally drained.",
          icon: "https://"
        },
        {
          id: "section_4",
          title: "Reduced productivity",
          description: "Struggling to stay focused and maintain workflow.",
          icon: "https://"
        }
      ]
    },
    tariffSection: {
      title: "Select Tariff",
      description: "These purchases are automatically renewed subscriptions. Payment will be made using your Apple ID when you confirm your purchase. The subscription automatically renews if auto-renewal is not turned off at least 24 hours before the end of the current period. Your account will be paid for the renewal within 24 hours before the end of the current period. You can manage and turn off automatic subscription renewal by going to your account settings in the App Store after the purchase. After cancellation, you will not receive a refund for the current billing period and you will continue to receive subscription content. The cancellation takes effect after the end of the period.",
      options: [
        {
          id: "tariff_1",
          title: "Weekly",
          price: "$1.14",
          oldPrice: "$15.99",
          newPrice: "$7.99",
          isDefault: false
        },
        {
          id: "tariff_2",
          title: "Monthly",
          price: "$0.66",
          oldPrice: "$39.99",
          newPrice: "$19.99",
          isDefault: true
        },
        {
          id: "tariff_3",
          title: "Yearly",
          price: "$0.16",
          oldPrice: "$79.99",
          newPrice: "$39.99",
          isDefault: false
        }
      ]
    },
    choseUsSection: {
      title: "Why Our Users Choose Us",
      description: "I finally feel like myself again. MyMentally gave me clarity, focus, and the confidence to handle daily challenges. - Ava",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7ada459cccf5bdb36fe3a4fdf8c60a967a2892c7?width=776"
    },
    faqSection: {
      title: "Common Questions",
      options: [
        {
          id: "faq_1",
          title: "Which payment methods do you accept?",
          description: "We support online payment options, including credit cards, Apple Pay, and Google Pay."
        },
        {
          id: "faq_2",
          title: "What happens after I finish the training?",
          description: "After completing the MyMentally ADHD program, 88% of participants reported noticeable improvements in managing anxiety, reducing stress, and feeling more in control of their daily life. You can also expect to strengthen your personal and professional relationships."
        },
        {
          id: "faq_3",
          title: "Is my personal information safe?",
          description: "Yes. We do not store or collect any personal details provided during registration."
        }
      ]
    }
  };

  const handleAnswer = (tariffId: string) => {
    // Handle tariff selection and navigate to next screen
    console.log("Selected tariff:", tariffId);
    // For now, just log - will be updated when next screen is created
    // navigate("/next-screen");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ScreenPaywall
      slideObject={slideObject}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
