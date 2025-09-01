import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <div className="page">
      <h1>Arin Gadre</h1>
      <p>Full Stack Engineer | UCSC Student</p>
      <p>Portfolio coming soon...</p>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>About section coming soon...</p>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <p>Projects section coming soon...</p>
    </div>
  )
}

function ExperiencePage() {
  return (
    <div className="page">
      <h1>Experience</h1>
      <p>Experience section coming soon...</p>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>Contact section coming soon...</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href="/resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App