import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/portfolio";

function SkillsSection() {
  return (
    <section className="section section--skills" id="skills">
      <SectionHeading
        index="03"
        label="Core stack"
        titleFirstLine="Built with"
        titleSecondLine="intentional tools."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-column">
            <h3 className="skill-column__title">{group.title}</h3>
            <ul className="skill-column__list">
              {group.items.map((item) => (
                <li key={item} className="skill-column__item">
                  <span className="skill-column__bullet" aria-hidden="true">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
