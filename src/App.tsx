import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SiteLayout } from "./layouts/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { ReturnsPage } from "./pages/ReturnsPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
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
              <Route path="returns" element={<ReturnsPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              {/* Legacy paths */}
              <Route path="for-you" element={<Navigate to="/about" replace />} />
              <Route path="problem" element={<Navigate to="/" replace />} />
              <Route path="why-change" element={<Navigate to="/" replace />} />
              <Route path="product" element={<Navigate to="/how-it-works" replace />} />
              <Route path="capabilities" element={<Navigate to="/returns" replace />} />
              <Route path="platform" element={<Navigate to="/returns" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
