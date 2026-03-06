import CornerMarkers from "../components/CornerMarkers";
import SectionHeading from "../components/SectionHeading";
import { contactLinks } from "../data/portfolio";

function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <CornerMarkers />
      <SectionHeading
        index="04"
        label="Contact"
        titleFirstLine="Let&apos;s build"
        titleSecondLine="something useful."
      />

      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            I&apos;m looking for software engineering roles where I can work on
            ambitious systems, contribute across the stack, and keep sharpening my
            craft.
          </p>
          <p>
            If you&apos;re hiring, collaborating, or just want to talk through an
            idea, send a note. I&apos;m always up for a good technical
            conversation.
          </p>
        </div>

        <div className="contact-list">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-list__item"
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <span className="contact-list__meta">
                <span className="contact-list__label">{link.label}</span>
                <span className="contact-list__value">{link.value}</span>
              </span>
              <span className="contact-list__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
