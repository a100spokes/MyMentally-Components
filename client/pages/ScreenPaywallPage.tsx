import { useNavigate } from "react-router-dom";
import ScreenPaywall from "../components/ScreenPaywall";

export default function ScreenPaywallPage() {
  const navigate = useNavigate();

  const slideObject = {
    id: "paywall_screen_1",
    type: "paywall",
    template: "ScreenPaywall",
    data: {
      timer: {
        minutes: 7,
        seconds: 29,
        message: "Your results and personalized plan are saved for you for the next 10 minutes.",
        buttonText: "Get my plan"
      },
      title: "You Have Moderate ADHD Symptoms. Let's Take Action Today",
      subtitle: "",
      symptoms: [
        {
          id: "physical",
          title: "Physical symptoms:",
          description: "Fatigue, trouble sleeping, depression, or frequent mood changes.",
          progress: 75,
          color: "#FF5D73"
        },
        {
          id: "psychological", 
          title: "Psychological symptoms:",
          description: "Anxiety, irritability, chronic exhaustion, or unexplained physical discomfort.",
          progress: 60,
          color: "#FFBC75"
        },
        {
          id: "behavioral",
          title: "Behavioral symptoms:",
          description: "Restlessness, vivid nightmares, or recurring distressing thoughts linked to past events.",
          progress: 45,
          color: "#FFD65D"
        },
        {
          id: "impact",
          title: "Impact on your life:",
          description: "Emotional instability, relationship challenges, difficulty focusing, and trouble meeting goals.",
          progress: 70,
          color: "#FFBE85"
        }
      ],
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/e27a917d89f19225b8d303be7d82a625e7af244f?width=776",
      adhdTitle: "How ADHD affects your daily life",
      adhdDescription: "Based on your responses, we've calculated your ADHD symptom score.",
      disturbingSymptoms: [
        {
          id: "delayed_responses",
          title: "Delayed responses",
          description: "Taking longer to react or complete simple tasks.",
          iconName: "work_outline",
          iconBg: "#F3E8FF",
          iconColor: "#A855F7"
        },
        {
          id: "elusive_memory",
          title: "Elusive memory",
          description: "Difficulty recalling details or keeping track of information",
          iconName: "lightbulb",
          iconBg: "#FEF9C3",
          iconColor: "#EAB308"
        },
        {
          id: "emotional_rollercoaster",
          title: "Emotional rollercoaster",
          description: "Rapid mood changes, irritability, and feeling emotionally drained.",
          iconName: "sentiment_very_dissatisfied",
          iconBg: "#FCE7F3",
          iconColor: "#EC4899"
        },
        {
          id: "reduced_productivity",
          title: "Reduced productivity",
          description: "Struggling to stay focused and maintain workflow.",
          iconName: "whatshot",
          iconBg: "#FFEDD5",
          iconColor: "#F97316"
        }
      ],
      tariffPlans: [
        {
          id: "weekly",
          name: "Weekly",
          originalPrice: "$15.99",
          discountPrice: "$7.99",
          finalPrice: "1",
          perDayPrice: "14 per Day",
          isSelected: false
        },
        {
          id: "monthly",
          name: "Monthly", 
          originalPrice: "$39.99",
          discountPrice: "$19.99",
          finalPrice: "0",
          perDayPrice: "66 per Day",
          isSelected: true,
          isPopular: true
        },
        {
          id: "yearly",
          name: "Yearly",
          originalPrice: "$79.99",
          discountPrice: "$39.99", 
          finalPrice: "0",
          perDayPrice: "16 per Day",
          isSelected: false
        }
      ],
      testimonial: {
        image: "https://api.builder.io/api/v1/image/assets/TEMP/7ada459cccf5bdb36fe3a4fdf8c60a967a2892c7?width=776",
        text: "I finally feel like myself again. MyMentally gave me clarity, focus, and the confidence to handle daily challenges.",
        author: "- Ava"
      },
      faqs: [
        {
          id: "payment_methods",
          question: "Which payment methods do you accept?",
          isExpanded: false
        },
        {
          id: "after_training",
          question: "What happens after I finish the training?",
          isExpanded: false
        },
        {
          id: "personal_info",
          question: "Is my personal information safe?",
          isExpanded: false
        }
      ],
      appStoreRating: "4.5 stars on",
      buttonText: "Get My Plan Now",
      disclaimer: "These purchases are automatically renewed subscriptions. Payment will be made using your Apple ID when you confirm your purchase. The subscription automatically renews if auto-renewal is not turned off at least 24 hours before the end of the current period. Your account will be paid for the renewal within 24 hours before the end of the current period. You can manage and turn off automatic subscription renewal by going to your account settings in the App Store after the purchase. After cancellation, you will not receive a refund for the current billing period and you will continue to receive subscription content. The cancellation takes effect after the end of the period.",
      links: {
        contactUs: "#",
        terms: "#",
        cookiePolicy: "#",
        privacyPolicy: "#"
      }
    }
  };

  const handleAnswer = (plan: string) => {
    // Handle plan selection and navigate to next screen
    console.log("Selected plan:", plan);
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
