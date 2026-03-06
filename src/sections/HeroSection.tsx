import CornerMarkers from "../components/CornerMarkers";
import TechnicalDecoration from "../components/TechnicalDecoration";

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <CornerMarkers variant="hero" />
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Software Engineer — Open to work</p>
        <h1 className="hero-section__title">
          <span className="hero-section__title-line hero-section__title-line--solid">
            ARIN
          </span>
          <span className="hero-section__title-line hero-section__title-line--outline">
            GADRE
            <span className="hero-section__cursor" aria-hidden="true" />
          </span>
        </h1>
        <p className="hero-section__copy">
          I build production-minded systems, developer tools, and interfaces that
          make complex workflows feel deliberate, fast, and reliable.
        </p>
        <div className="hero-section__actions">
          <a className="button button--primary" href="#projects">
            View projects
          </a>
          <a className="button button--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <TechnicalDecoration />
      <span className="hero-section__scroll">Scroll</span>
    </section>
  );
}

export default HeroSection;
