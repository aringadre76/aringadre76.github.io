import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={`nav-link ${isActive('/') ? 'active' : ''}`}
      >
        About
      </Link>
      <Link 
        to="/projects" 
        className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
      >
        Projects
      </Link>
      <Link 
        to="/experience" 
        className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
      >
        Experience
      </Link>
      <Link 
        to="/contact" 
        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
      >
        Contact
      </Link>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-link"
      >
        Resume
      </a>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo glitch-text" data-text="Arin Gadre">
          Arin Gadre
        </h1>
        <p className="tagline">Full Stack Engineer | UCSC Student</p>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="cyberpunk-bg">
        <Header />
        <Navigation />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;