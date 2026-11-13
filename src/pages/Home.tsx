import { Link } from "react-router-dom";
import { heroDescription, roles } from "../content";
import { useTypewriter } from "../hooks";
import { Reveal } from "../components/ui";

const BANNER = ` ███  ████  █████  █   █
 █ █  ██ █    ██  ██  █
 ███  ████    ██  █ █ █
 █ █  ██ █    ██  █  ██
 █ █  ██ █  █████  █   █`;

export default function Home() {
  const role = useTypewriter(roles);

  return (
    <section className="hero">
      <pre className="ascii-banner" aria-hidden="true">
        {BANNER}
      </pre>
      <h1 className="hero-name">Arin Gadre</h1>
      <Reveal>
        <p className="hero-prompt">
          <span className="prompt-sign" aria-hidden="true">
            arin@portfolio:~$
          </span>{" "}
          <code>whoami</code>
        </p>
      </Reveal>
      <p className="hero-role">
        <span className="role-label" aria-hidden="true">
          role:{" "}
        </span>
        <span className="sr-only">{roles.join(", ")}</span>
        <span aria-hidden="true">
          {role}
          <span className="caret">▊</span>
        </span>
      </p>
      <Reveal delay={100}>
        <p className="hero-description">{heroDescription}</p>
      </Reveal>
      <Reveal delay={150}>
        <div className="hero-actions">
          <Link className="btn" to="/contact">
            [ get in touch ]
          </Link>
          <Link className="btn btn-ghost" to="/projects">
            [ view projects ]
          </Link>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="hero-status">
          status:{" "}
          <span className="accent-text">open to new opportunities</span>
        </p>
      </Reveal>
    </section>
  );
}
