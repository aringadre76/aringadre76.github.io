import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./NotFound";

const NAV_ITEMS = [
  { label: "about", path: "/about" },
  { label: "projects", path: "/projects" },
  { label: "experience", path: "/experience" },
  { label: "contact", path: "/contact" },
  { label: "resume", path: "/resume" },
];

function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close the menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link
          to="/"
          className="nav-brand"
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          <span className="prompt-sign" aria-hidden="true">
            ◆
          </span>
          arin@portfolio:~$
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "[ × ]" : "[ ≡ ]"}</span>
          <span className="sr-only">toggle menu</span>
        </button>
        <div id="nav-menu" className={`nav-menu${open ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={isActive(item.path) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-line" aria-hidden="true">
          └─ exit 0
        </span>
        <p className="footer-copy">
          © 2026 Arin Gadre ·{" "}
          <Link to="/contact">get in touch</Link>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
