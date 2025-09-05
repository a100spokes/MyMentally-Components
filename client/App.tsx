import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Question from "./pages/Question";
import AgeQuestion from "./pages/AgeQuestion";
import InfoScreen from "./pages/InfoScreen";
import MultiQuestion from "./pages/MultiQuestion";
import SquareAnswersPage from "./pages/SquareAnswersPage";
import ScreenReviewsPage from "./pages/ScreenReviewsPage";
import ScreenStatsPage from "./pages/ScreenStatsPage";
import ScreenCalcPage from "./pages/ScreenCalcPage";
import ScreenEmailPage from "./pages/ScreenEmailPage";
import ScreenDifferencePage from "./pages/ScreenDifferencePage";
import ScreenPaywallPage from "./pages/ScreenPaywallPage";
import ProgressScreen from "./pages/ProgressScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/question" element={<Question />} />
            <Route path="/age-question" element={<AgeQuestion />} />
            <Route path="/InfoScreen" element={<InfoScreen />} />
            <Route path="/MultiQuestion" element={<MultiQuestion />} />
            <Route path="/SquareAnswers" element={<SquareAnswersPage />} />
            <Route path="/SquareAnswersPage" element={<SquareAnswersPage />} />
            <Route path="/ScreenReviews" element={<ScreenReviewsPage />} />
            <Route path="/ScreenReviewsPage" element={<ScreenReviewsPage />} />
            <Route path="/ScreenStats" element={<ScreenStatsPage />} />
            <Route path="/ScreenStatsPage" element={<ScreenStatsPage />} />
            <Route path="/ScreenCalc" element={<ScreenCalcPage />} />
            <Route path="/ScreenCalcPage" element={<ScreenCalcPage />} />
            <Route path="/ScreenEmail" element={<ScreenEmailPage />} />
            <Route path="/ScreenEmailPage" element={<ScreenEmailPage />} />
            <Route path="/ScreenPaywall" element={<ScreenPaywallPage />} />
            <Route path="/ScreenPaywallPage" element={<ScreenPaywallPage />} />
            <Route path="/progress" element={<ProgressScreen />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
