import { ThemeProvider } from "./theme/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyChange } from "./components/WhyChange";
import { Platform } from "./components/Platform";
import { Benefits } from "./components/Benefits";
import { Industries } from "./components/Industries";
import { Journey } from "./components/Journey";
import { FinalCta } from "./components/Footer";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-svh" style={{ background: "var(--bg)", color: "var(--fg)" }}>
        <Navbar />
        <main>
          <Hero />
          <WhyChange />
          <Platform />
          <Benefits />
          <Industries />
          <Journey />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
