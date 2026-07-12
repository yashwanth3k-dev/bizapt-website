import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SiteLayout } from "./layouts/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { WhyChangePage } from "./pages/WhyChangePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PlatformPage } from "./pages/PlatformPage";
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
              <Route path="problem" element={<WhyChangePage />} />
              <Route path="product" element={<HowItWorksPage />} />
              <Route path="capabilities" element={<PlatformPage />} />
              <Route path="contact" element={<ContactPage />} />
              {/* Legacy paths */}
              <Route path="why-change" element={<Navigate to="/problem" replace />} />
              <Route path="how-it-works" element={<Navigate to="/product" replace />} />
              <Route path="platform" element={<Navigate to="/capabilities" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
