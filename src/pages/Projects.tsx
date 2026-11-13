import { projects } from "../content";
import { Reveal, SectionHead } from "../components/ui";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Projects() {
  return (
    <section className="page">
      <SectionHead title="projects" />
      <div className="grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 80}>
            <article className="card proj">
              <div className="proj-bar" aria-hidden="true">
                <span className="proj-path">~/projects/{slugify(project.title)}</span>
                <span className="proj-mark">▣</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.tech ? (
                <p className="proj-tech">
                  <span className="tech-label">stack: </span>
                  {project.tech}
                </p>
              ) : null}
              <ul className="proj-links">
                {project.links
                  .filter((link) => link.url.length > 0)
                  .map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [{link.label}]
                      </a>
                    </li>
                  ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
