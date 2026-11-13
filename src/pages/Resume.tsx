import { Reveal, SectionHead } from "../components/ui";

export default function Resume() {
  return (
    <section className="page">
      <SectionHead title="resume" />
      <Reveal>
        <div className="card resume-card">
          <p className="resume-file" aria-hidden="true">
            ~/docs/resume.pdf
          </p>
          <p>
            My resume — covering projects, experience, and skills — is
            available below.
          </p>
          <a className="btn" href="/resume.pdf" download>
            [ download resume ]
          </a>
        </div>
      </Reveal>
    </section>
  );
}
