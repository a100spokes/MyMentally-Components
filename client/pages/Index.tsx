import LandingSlide from "@/components/LandingSlide";

const sampleSlideObject = {
  id: "ln-landing",
  type: "landing",
  template: "LandingSlide",
  data: {
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F06a9b9239e4142ec8519ebfeb96a4bb3%2F1283301ecddd4e73bb0b5309d3ba4b8e?format=webp&width=800",
    heroImageAlt: "ADHD Self-Check",
    title: "ADHD Self-Check",
    description: "Discover your ADHD score and get guidance to move forward with clarity and confidence",
    ctaText: "Take Test",
    branding: {
      name: "MyMentally",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/bba2db1e027674db665a4dd4ff4b77caa9725f91?width=48",
      copyright: "2025 © All Rights Reserved.",
      footerLinks: [
        { label: "Terms of Service", href: "/service" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Subscription Terms", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie" },
      ]
    }
  }
};

export default function Index() {
  const handleCTA = () => {
    // Handle the CTA click - navigate to test or next slide
    console.log("CTA clicked - Take Test");
  };

  return (
    <LandingSlide slideObject={sampleSlideObject} onCTA={handleCTA} />
  );
}
