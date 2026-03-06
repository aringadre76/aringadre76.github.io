import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";

function ProjectsSection() {
  return (
    <section className="section section--projects" id="projects">
      <SectionHeading
        index="02"
        label="Selected work"
        titleFirstLine="Systems."
        titleSecondLine="Tools. Experiments."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={project.title}
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-card__accent" aria-hidden="true" />
            <p className="project-card__index">
              PROJECT / {String(index + 1).padStart(3, "0")}
            </p>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => {
                const isAccent = project.accentTags?.includes(tag) ?? false;
                return (
                  <span
                    key={tag}
                    className={`project-card__tag${isAccent ? " project-card__tag--accent" : ""}`}
                  >
                    {tag}
                  </span>
                );
              })}
              {project.accentTags
                ?.filter((tag) => !project.tags.includes(tag))
                .map((tag) => (
                  <span
                    key={tag}
                    className="project-card__tag project-card__tag--accent"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <span className="project-card__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
