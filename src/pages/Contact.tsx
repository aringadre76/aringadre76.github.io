import { contactLinks } from "../content";
import { Reveal, SectionHead } from "../components/ui";

export default function Contact() {
  return (
    <section className="page">
      <SectionHead title="contact" />
      <ul className="contact-list">
        {contactLinks.map((contact, i) => (
          <li key={contact.title}>
            <Reveal delay={i * 80}>
              <div className="card contact-card">
                <h2>{contact.title}</h2>
                <a href={contact.href}>{contact.value}</a>
                <p className="contact-note">{contact.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal delay={240}>
        <p className="contact-cta">
          <a
            className="btn"
            href="mailto:aringadre@gmail.com"
          >
            [ send an email ]
          </a>
        </p>
      </Reveal>
    </section>
  );
}
