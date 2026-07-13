import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SiteLayout } from "./layouts/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { RoiPage } from "./pages/RoiPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-svh" style={{ background: "var(--bg)", color: "var(--fg)" }}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<HomePage />} />
              <Route path="roi" element={<RoiPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="legal" element={<LegalPage />} />
              {/* Legacy paths */}
              <Route path="returns" element={<Navigate to="/roi" replace />} />
              <Route path="capabilities" element={<Navigate to="/roi" replace />} />
              <Route path="platform" element={<Navigate to="/roi" replace />} />
              <Route path="for-you" element={<Navigate to="/about" replace />} />
              <Route path="problem" element={<Navigate to="/" replace />} />
              <Route path="why-change" element={<Navigate to="/" replace />} />
              <Route path="product" element={<Navigate to="/how-it-works" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
