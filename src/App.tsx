import "./App.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="site-main">
        <HeroSection />
        <div className="section-divider" aria-hidden="true" />
        <AboutSection />
        <div className="section-divider" aria-hidden="true" />
        <ProjectsSection />
        <div className="section-divider" aria-hidden="true" />
        <SkillsSection />
        <div className="section-divider" aria-hidden="true" />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
