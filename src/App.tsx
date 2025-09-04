import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import Aurora from './Backgrounds/Aurora/Aurora'
import TextType from './TextAnimations/TextType/TextType'
import DecryptedText from './TextAnimations/DecryptedText/DecryptedText'
import GooeyNavRouter from './Components/GooeyNav/GooeyNavRouter'
import ElectricBorder from './Animations/ElectricBorder/ElectricBorder'
import './App.css'

// Import toast for notifications
import toast, { Toaster } from 'react-hot-toast'

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

// About Page Component
function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-1">
            <ElectricBorder color="#3b82f6" thickness={2} className="mb-4">
              <SimpleCard>
                <p className="card-text">
                  Hello everyone! I’m Arin, a recent graduate in Computer Engineering from UC Santa Cruz, passionate about building scalable applications and exploring new technologies. I’m actively seeking new grad opportunities where I can contribute my skills in software development and system optimization to transformative projects.
                </p>

                <p className="card-text">
                  Current projects I’m actively working on include the Baseball Stats MCP Server — a comprehensive baseball analytics MCP server exposing 32 analysis tools and real-time MLB/Statcast integrations; the OpenBiomechanics injury risk assessment pipeline (ML-based pitcher injury prediction with 195+ biomechanical features); and the Scholarly Research MCP Server for consolidated academic search and analysis. I’m focused on production-ready tooling, observability, and making research-grade analytics accessible via APIs and MCP tools.
                </p>

                <p className="card-text">
                  Recent experience: at Nutanix I built a containerized CPU benchmarking platform for LLM inference with Docker Compose, added a Streamlit UI for 10+ models, and instrumented Prometheus/Grafana with a SQLite backend—raising deployment consistency to 95% and enabling data-driven performance analysis. At The Difference I architected Flutter components, integrated eight third‑party APIs, and implemented GitHub Actions CI/CD to speed and stabilize deployments.
                </p>

                <p className="card-text">
                  With expertise across Python, C++, React, Flutter, Django, and ML frameworks, I enjoy turning complex systems into reliable products. Let’s connect and build something impactful.
                </p>
              </SimpleCard>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </div>
  )
}

const projectsData = [
  {
    title: 'Baseball Stats MCP Server',
    description: `Production-ready MCP (Model Context Protocol) server exposing 32 tools for comprehensive baseball analytics: traditional stats, Statcast metrics, pitch/batted-ball breakdowns, visualizations and comparisons. Integrates MLB & Statcast data, provides Plotly visualizations, and includes a robust test suite (~78% tools passing in docs).`,
    tech: 'Python, MCP, Async IO, Data Visualization',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/baseball-stats-mcp/' },
      { label: 'PyPI', url: 'https://pypi.org/project/baseball-stats-mcp/' }
    ]
  },
  {
    title: 'BingeFlix',
    description: `BingeFlix helps users discover where to stream movies and shows, manage personalized watchlists, and receive AI-driven recommendations. Features include Google OAuth login, smart watchlist management, AI recommendation endpoints that analyze a user's watchlist to suggest titles, sports team tracking, and endpoints to fetch current streaming availability across platforms. Deployed frontend and backend demos are available.`,
    links: [
      { label: 'Backend GitHub', url: 'https://github.com/aringadre76/bingeflix-backend' },
      { label: 'Frontend GitHub', url: 'https://github.com/aringadre76/bingeflix-frontend' },
      { label: 'Live Demo', url: 'https://bingeflixstreaming.vercel.app/' },
      { label: 'Video Demo', url: 'https://www.youtube.com/watch?v=WiLgSWHEQ1E' }
    ]
  },
  {
    title: 'Dino Game on Basys3',
    description: `FPGA implementation of a simplified Chrome dinosaur game targeting the Basys3 board. Provides RTL modules for game objects, display drivers, testbenches for behavioral and gate-level simulation, and scripts to generate ROMs from PNG assets for hardware synthesis with Vivado/Yosys.`,
    tech: 'SystemVerilog, FPGA (Basys3), Verilator, Vivado',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/dino-game' },
      { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=A_kBcON_fjk' }
    ]
  },
  {
    title: 'Real-Time Drawing Board',
    description: `Collaborative real-time drawing platform. Backend: Django + Django Channels with Redis channel layer for low-latency WebSocket messaging, stateless worker design and Docker deployment options. Frontend: Svelte-based client supporting responsive, low-latency drawing with smart interpolation and adaptive point handling. Includes development and deployment instructions, Vercel frontend deployment, and separate GitHub repos for frontend and backend.`,
    tech: 'Django, Channels, Redis, WebSockets, Svelte',
    links: [
      { label: 'Frontend GitHub', url: 'https://github.com/aringadre76/real-time-drawing-board-frontend' },
      { label: 'Backend GitHub', url: 'https://github.com/aringadre76/real-time-drawing-board-backend-deploy' },
      { label: 'Live Demo', url: 'https://real-time-drawing-board-front-deploy.vercel.app/' }
    ]
  },
  {
    title: 'Scholarly Research MCP Server',
    description: `Consolidated MCP toolset for academic research: multi-source search (PubMed, ArXiv, Google Scholar), paper analysis, citation management and Firecrawl-enabled web research. Published NPM package and TypeScript tooling for integration with AI assistants.`,
    tech: 'TypeScript, MCP, Web Scraping, OpenAI',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/mcp-for-research' },
      { label: 'NPM', url: 'https://www.npmjs.com/package/scholarly-research-mcp' }
    ]
  },
  {
    title: 'Amazon Link Cleaner',
    description: `Small Python service that parses Amazon product URLs, extracts the ASIN and region, and returns a clean canonical product link. Supports direct path cleaning (like fxtwitter), short-link preservation (a.co / amzn.to), a programmatic /api/create endpoint for short-clean links, and an optional Docker deployment via docker-compose.`,
    tech: 'Python, URL parsing, HTTP API, Docker',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/amazon-link-cleaner' }
    ]
  },
  {
    title: 'BananaSlug Emulator',
    description: `Full C++17 emulator for a custom RISC-style architecture implementing CPU, memory subsystem, ROM loading and an SDL2-based GPU framebuffer. Includes a CMake build, automated test suite for instruction validation, and tooling to load .slug ROMs for interactive debugging and CI testing.`,
    tech: 'C++17, SDL2, CMake, Emulator, Testing',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/cpp-emulator' }
    ]
  },
  {
    title: 'Distributed Task Queue System',
    description: `Design and roadmap for a horizontally scalable task queue: Go-based microservices, Redis/RabbitMQ queues, PostgreSQL metadata, worker pool orchestration, and Prometheus/Grafana monitoring. Focused on reliability patterns (retries, dead-letter queues, circuit breakers) and Kubernetes deployment for auto-scaling.`,
    tech: 'Go, Redis, RabbitMQ, PostgreSQL, Kubernetes'
    ,
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/distributed-task-queue' }
    ]
  },
  {
    title: 'Easy Wireshark',
    description: `LLM-assisted network traffic analyzer that wraps tshark to capture packets and uses a local LLM for natural-language query parsing and human-friendly protocol explanations. Supports real-time capture, command interpretation and a web UI for results.`,
    tech: 'Python, tshark, LLM, Network Analysis',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/easy-wireshark' }
    ]
  },
  {
    title: 'Image Classification Project',
    description: `End-to-end PyTorch pipeline using ResNet-50: dataset preprocessing, train/validation splits, learning-rate scheduling and early stopping, and batch prediction for unlabeled images. Produces trained model artifacts (best_model.pth) and CSV prediction outputs suitable for downstream evaluation.`,
    tech: 'Python, PyTorch, ResNet-50, Data Processing',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/ImageClassifcationModel' }
    ]
  },
  {
    title: 'Intermediate Representation Compiler',
    description: `Course project implementing a lexical scanner, parser/AST builder, IR generator and a local value numbering optimization pass. Includes test harnesses and scripts to compile source files to IR and apply optimization passes as part of the CSE110A homework pipeline.`,
    tech: 'Python, Compiler Design, IR, Optimization',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/ir-compiler' }
    ]
  },
  {
    title: 'OpenBiomechanics Injury Risk Assessment',
    description: `Machine-learning pipeline for pitcher injury risk using high-fidelity biomechanical time-series data. Extracts 195+ features, performs temporal feature engineering, and runs ensemble models for clinical risk stratification (documented metrics and processing throughput).`,
    tech: 'Python, ML, Time-series Feature Engineering',
    links: [
      { label: 'GitHub', url: 'https://github.com/aringadre76/baseball-injury-risk-assessment/' }
    ]
  }
]

// Helper to render project links (supports single `link` or multiple `links`)
function renderProjectLinks(links?: { label?: string; url: string }[], singleLink?: string) {
  const items = links && links.length > 0 ? links : (singleLink ? [{ label: 'Repository', url: singleLink }] : [])
  if (!items || items.length === 0) return null

  return (
    <div style={{ marginTop: '0.5rem' }}>
      {items.map((l, idx) => (
        <p className="card-link" key={idx} style={{ margin: 0 }}>
          <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label ? l.label : 'Link'}</a>
        </p>
      ))}
    </div>
  )
}

// Helper to render extra key/value fields for a project
function renderProjectExtras(extras?: { label: string; value?: string; link?: string }[]) {
  if (!extras || extras.length === 0) return null

  return (
    <ul className="card-extras" style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
      {extras.map((e, i) => (
        <li key={i} className="card-extra-item">
          <strong>{e.label}:</strong>{' '}
          {e.link ? (
            <a href={e.link} target="_blank" rel="noopener noreferrer">{e.value ?? e.link}</a>
          ) : (
            e.value
          )}
        </li>
      ))}
    </ul>
  )
}

// Projects Page Component
function ProjectsPage() {
  const projects = projectsData

  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Projects</h1>
          <div className="grid grid-list">
            {projects.map((project: any) => (
              <SimpleCard key={project.title}>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <p className="card-tech">{project.tech}</p>

                {renderProjectLinks(project.links, project.link)}

                {renderProjectExtras(project.extra)}
              </SimpleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Experience Page Component (card layout with bullet lists)
function ExperiencePage() {
  const experiences = [
    {
      title: "Co-op Intern – GenAI CPU Analytics Tool",
      company: "Nutanix",
      period: "Jan 2025 -- June 2025",
      bullets: [
        "Architected containerized benchmarking platform for CPU inference of LLMs using Docker Compose, achieving 95% deployment consistency across client and VM services",
        "Built interactive Streamlit UI supporting 10+ LLM models with configurable parameters, reducing manual testing effort by 80%",
        "Configured Prometheus metrics pipeline collecting 50+ system metrics and designed Grafana dashboards for real-time performance analysis",
        "Designed SQLite schema with 6 normalized tables storing 10,000+ benchmark records for trend analysis"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "The Difference LLC",
      period: "Sept 2023 -- June 2025",
      bullets: [
        "Architected Flutter mobile components with Provider state management, streamlining 15+ interactive features and improving responsiveness by 30%",
        "Integrated 8 third-party APIs (payments, social), boosting user engagement by 45% and enabling 5 new features",
        "Authored API documentation for 25+ endpoints using Swagger, cutting onboarding time by 50%",
        "Implemented GitHub Actions CI/CD with a 3-stage deployment, reducing deployment time from 45 to 12 minutes and achieving 99% success rate"
      ]
    },
    {
      title: "Engineer – Product Demos & Website Revamp",
      company: "Othentk",
      period: "2025 -- Present",
      bullets: [
        "Presented product at 5+ startup events and trade shows, collecting feedback from 200+ potential customers and 12 investors, generating 3 qualified leads",
        "Redesigned company website for responsive performance, achieving 40% faster page loads and 25% higher user engagement"
      ]
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="section">
          <h1 className="section-title">Experience</h1>
          <div className="grid grid-list">
            {experiences.map((exp) => (
              <SimpleCard key={exp.title}>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-subtitle">{exp.company} • {exp.period}</p>
                <ul className="card-list" style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                  {exp.bullets.map((b: string, i: number) => (
                    <li key={i} className="card-text">{b}</li>
                  ))}
                </ul>
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
      value: "aringadre@gmail.com",
      href: "mailto:aringadre@gmail.com",
      description: "Best way to reach me"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/aringadre",
      href: "https://www.linkedin.com/in/arin-gadre",
      description: "Professional network"
    },
    {
      title: "GitHub",
      value: "github.com/aringadre76",
      href: "https://github.com/aringadre76",
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
              <ElectricBorder color="#3b82f6" thickness={2} key={contact.title} className="mb-2">
                <SimpleCard>
                  <div className="text-center">
                    <h3 className="card-title">{contact.title}</h3>
                    <p className="card-value">
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">{contact.value}</a>
                    </p>
                    <p className="card-text">{contact.description}</p>
                  </div>
                </SimpleCard>
              </ElectricBorder>
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

// Home Page Component
function HomePage() {
  const navigate = useNavigate()

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
            <SimpleButton onClick={() => navigate('/contact')}>
              Get In Touch
            </SimpleButton>
            <SimpleButton variant="secondary" onClick={() => navigate('/projects')}>
              View Projects
            </SimpleButton>
          </div>
        </div>
      </div>
    </div>
  )
}

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