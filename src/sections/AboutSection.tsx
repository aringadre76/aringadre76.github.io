import CornerMarkers from "../components/CornerMarkers";
import SectionHeading from "../components/SectionHeading";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "∞", label: "Hours in games" },
  { value: "1", label: "Goal: build cool stuff" },
];

function AboutSection() {
  return (
    <section className="section section--about" id="about">
      <span className="section-ghost" aria-hidden="true">
        ABOUT
      </span>
      <CornerMarkers />
      <SectionHeading
        index="01"
        label="About me"
        titleFirstLine="Developer."
        titleSecondLine="Builder. Gamer."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m Arin, a recent Computer Engineering graduate from UC Santa
            Cruz focused on building <strong>scalable software</strong>,
            thoughtful interfaces, and reliable systems that hold up under real
            use.
          </p>
          <p>
            Lately I&apos;ve been shipping <strong>MCP servers</strong>, analytics
            tooling, and research-oriented developer infrastructure, with a lot of
            attention on observability, clean APIs, and production-ready
            workflows.
          </p>
          <p>
            My background spans <strong>full-stack development</strong>, machine
            learning, and systems work, and I&apos;m actively looking for an
            engineering role where I can build useful things with people who care
            about craft.
          </p>
        </div>

        <div className="about-stats" aria-label="Key stats">
          {stats.map((stat) => (
            <article key={stat.label} className="about-stat">
              <p className="about-stat__value">{stat.value}</p>
              <p className="about-stat__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
