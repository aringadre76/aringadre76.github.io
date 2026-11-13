import { aboutParagraphs } from "../content";
import { Reveal, SectionHead } from "../components/ui";

export default function About() {
  return (
    <section className="page">
      <SectionHead title="about" />
      <Reveal>
        <div className="card doc-card">
          <p className="doc-head" aria-hidden="true">
            ~/notes/about.md
          </p>
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
