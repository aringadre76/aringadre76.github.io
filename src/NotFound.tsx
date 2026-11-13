import { Link } from "react-router-dom";
import { Reveal } from "./components/ui";

export default function NotFound() {
  return (
    <section className="page not-found">
      <Reveal>
        <pre className="nf-code" aria-hidden="true">{`$ resolve "/…"
error: no such file or directory`}</pre>
        <h1 className="nf-title">404</h1>
        <p className="nf-text">
          The path you requested doesn’t exist on this host.
        </p>
        <Link className="btn" to="/">
          [ cd ~ ]
        </Link>
      </Reveal>
    </section>
  );
}
