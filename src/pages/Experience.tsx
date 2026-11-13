import { experiences } from "../content";
import { Reveal, SectionHead } from "../components/ui";

export default function Experience() {
  return (
    <section className="page">
      <SectionHead title="experience" />
      <ol className="timeline">
        {experiences.map((exp, i) => (
          <li className="exp" key={exp.title}>
            <Reveal delay={i * 80}>
              <h2>{exp.title}</h2>
              <p className="exp-meta">
                {exp.company} · {exp.period}
              </p>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
