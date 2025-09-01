import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import React from 'react'
import Aurora from './Backgrounds/Aurora/Aurora'
import TextType from './TextAnimations/TextType/TextType'
import DecryptedText from './TextAnimations/DecryptedText/DecryptedText'
import GooeyNavRouter from './Components/GooeyNav/GooeyNavRouter'
import './App.css'

// Import toast for notifications
import toast, { Toaster } from 'react-hot-toast'

// Enhanced Navigation Component with GooeyNav
function Navigation() {
  const location = useLocation()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ]

  const getCurrentActiveIndex = () => {
    const currentPath = location.pathname
    return navItems.findIndex(item => {
      if (item.href === '/' && currentPath === '/') return true
      if (item.href !== '/' && currentPath.startsWith(item.href)) return true
      return false
    })
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Arin Gadre
        </Link>
        <div className="gooey-nav-wrapper">
          <GooeyNavRouter 
            items={navItems}
            initialActiveIndex={getCurrentActiveIndex() >= 0 ? getCurrentActiveIndex() : 0}
            animationTime={600}
            particleCount={12}
            particleDistances={[80, 15]}
            colors={[1, 2, 3, 4]}
          />
        </div>
      </div>
    </nav>
  )
}

// Simple Button Component
function SimpleButton({ children, onClick, variant = 'primary' }: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Simple Card Component
function SimpleCard({ children, className = "" }: { 
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

// Home Page Component
function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <h1 className="hero-title">
            <DecryptedText
              text="Arin Gadre"
              speed={80}
              maxIterations={8}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              useOriginalCharsOnly={true}
            />
          </h1>
          <TextType
            text={[
              "Full Stack Developer",
              "AI Engineer", 
              "Creative Technologist",
              "Problem Solver"
            ]}
            as="p"
            className="hero-subtitle"
            typingSpeed={60}
            pauseDuration={2000}
            deletingSpeed={40}
            loop={true}
            initialDelay={2000}
            textColors={["#3b82f6", "#8b5cf6", "#06d6a0", "#f72585"]}
          />
          <p className="hero-description">
            <DecryptedText
              text="Building innovative solutions at the intersection of technology and human experience."
              speed={60}
              maxIterations={6}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              useOriginalCharsOnly={true}
            />
          </p>
          <div className="button-group">
            <SimpleButton onClick={() => toast.success('Welcome to my portfolio!')}>
              Get In Touch
            </SimpleButton>
            <SimpleButton variant="secondary">
              View Projects
            </SimpleButton>
          </div>
        </div>
      </div>
    </div>
  )
}

// About Page Component
function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-2">
            <SimpleCard>
              <h3 className="card-title">Background</h3>
              <p className="card-text">
                I'm a passionate developer with expertise in full-stack development, 
                machine learning, and AI systems. I love creating innovative solutions 
                that make a real impact.
              </p>
            </SimpleCard>
            <SimpleCard>
              <h3 className="card-title">Skills</h3>
              <p className="card-text">
                React, TypeScript, Python, Node.js, AI/ML, WebGL, 
                Cloud Architecture, and modern web technologies.
              </p>
            </SimpleCard>
          </div>
        </div>
      </div>
    </div>
  )
}

// Projects Page Component
function ProjectsPage() {
  const projects = [
    {
      title: "AI Portfolio Assistant",
      description: "Intelligent portfolio management system with natural language processing",
      tech: "React, TypeScript, OpenAI API"
    },
    {
      title: "WebGL Visualizations",
      description: "Interactive 3D data visualizations using modern WebGL techniques",
      tech: "Three.js, WebGL, GLSL"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Live data dashboard with real-time updates and interactive charts",
      tech: "React, Node.js, WebSockets"
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Projects</h1>
          <div className="grid grid-3">
            {projects.map((project) => (
              <SimpleCard key={project.title}>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <p className="card-tech">{project.tech}</p>
              </SimpleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Experience Page Component
function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and AI-powered features"
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built core platform features and implemented modern frontend architectures"
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Experience</h1>
          <div className="grid grid-2">
            {experiences.map((exp) => (
              <SimpleCard key={exp.title}>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-subtitle">{exp.company} • {exp.period}</p>
                <p className="card-text">{exp.description}</p>
              </SimpleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact Page Component
function ContactPage() {
  const contactOptions = [
    {
      title: "Email",
      value: "arin@example.com",
      description: "Best way to reach me"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/aringadre",
      description: "Professional network"
    },
    {
      title: "GitHub",
      value: "github.com/aringadre76",
      description: "Code repositories"
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Contact</h1>
          <div className="grid grid-3">
            {contactOptions.map((contact) => (
              <SimpleCard key={contact.title}>
                <div className="text-center">
                  <h3 className="card-title">{contact.title}</h3>
                  <p className="card-value">{contact.value}</p>
                  <p className="card-text">{contact.description}</p>
                </div>
              </SimpleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Resume Page Component
function ResumePage() {
  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Resume</h1>
          <SimpleCard>
            <p className="card-text">Resume content will be displayed here.</p>
            <SimpleButton onClick={() => toast.success('Resume download coming soon!')}>
              Download PDF
            </SimpleButton>
          </SimpleCard>
        </div>
      </div>
    </div>
  )
}

// Aurora Background Component
function AuroraBackground() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Aurora
        colorStops={["#1a1a1a", "#3b82f6", "#8b5cf6"]}
        amplitude={1.2}
        blend={0.6}
        speed={0.8}
      />
    </div>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="app">
        <AuroraBackground />
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App