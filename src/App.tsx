import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SiteLayout } from "./layouts/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { RoiPage } from "./pages/RoiPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import {
  CookiesPage,
  DataHandlingPage,
  PrivacyPage,
  SecurityPage,
  TermsPage,
} from "./pages/PolicyPages";
import {
  FaqPage,
  LegalHubPage,
  NotFoundPage,
  PricingPage,
  StatusPage,
} from "./pages/InfoPages";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-svh" style={{ background: "var(--bg)", color: "var(--fg)" }}>
            <Routes>
              <Route element={<SiteLayout />}>
              <Route index element={<HomePage />} />
              <Route path="with-bizdaptive" element={<RoiPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="status" element={<StatusPage />} />
              <Route path="legal" element={<LegalHubPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="cookies" element={<CookiesPage />} />
              <Route path="security" element={<SecurityPage />} />
              <Route path="data-handling" element={<DataHandlingPage />} />
              <Route path="waitlist" element={<Navigate to="/contact?intent=waitlist" replace />} />
              <Route path="request-demo" element={<Navigate to="/contact?intent=founder-demo" replace />} />
              {/* Legacy paths */}
              <Route path="roi" element={<Navigate to="/with-bizdaptive" replace />} />
              <Route path="returns" element={<Navigate to="/with-bizdaptive" replace />} />
              <Route path="capabilities" element={<Navigate to="/with-bizdaptive" replace />} />
              <Route path="platform" element={<Navigate to="/with-bizdaptive" replace />} />
              <Route path="for-you" element={<Navigate to="/about" replace />} />
              <Route path="problem" element={<Navigate to="/" replace />} />
              <Route path="why-change" element={<Navigate to="/" replace />} />
              <Route path="product" element={<Navigate to="/how-it-works" replace />} />
              <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  );
}
