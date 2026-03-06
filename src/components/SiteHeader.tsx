import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="#top" aria-label="Go to top">
          <span className="site-logo__amber">AG</span>
          <span className="site-logo__cream">.</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <button
            type="button"
            className="site-nav__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div
            className={`site-nav__links${menuOpen ? " site-nav__links--open" : ""}`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="site-nav__link"
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
