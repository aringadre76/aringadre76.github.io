import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string;
  role?: string;
  achievements: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, role, achievements, links }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#b3b3b3' }}>
        {description}
      </p>
      
      <div className="tech-box">
        <div className="tech-stack">
          <span className="neon-text">Tech Stack:</span> {techStack}
        </div>
        {role && (
          <div className="role">
            <span className="neon-text">Role:</span> {role}
          </div>
        )}
      </div>

      <div style={{ margin: '1rem 0' }}>
        <h4 className="cyan-text" style={{ marginBottom: '0.5rem' }}>Key Achievements:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {achievements.map((achievement, index) => (
            <li key={index} style={{ marginBottom: '0.3rem' }}>
              • {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "BingeFlix",
      description: "A unified streaming search platform aggregating movies, sports, and anime from various services.",
      techStack: "React, Node.js, MongoDB, ChatGPT API, Google OAuth",
      role: "Lead Developer & Scrum Master",
      achievements: [
        "Developed a unified streaming search platform aggregating content from various services",
        "Led team as Scrum Master through SCRUM processes, managing sprints and maintaining documentation",
        "Integrated streaming APIs for real-time availability and ChatGPT API for personalized recommendations",
        "Implemented Google OAuth 2.0 for secure user authentication",
        "Built comprehensive backend with movie management, AI recommendations, and sports tracking"
      ],
      links: [
        { label: "🌐 Live Demo", url: "https://bingeflixstreaming.vercel.app/" },
        { label: "🎬 Video Demo", url: "https://www.youtube.com/watch?v=WiLgSWHEQ1E" },
        { label: "💻 Frontend Code", url: "https://github.com/aringadre76/bingeflix-frontend" },
        { label: "⚙️ Backend Code", url: "https://github.com/aringadre76/bingeflix-backend" }
      ]
    },
    {
      title: "Real-Time Drawing Board",
      description: "A collaborative real-time drawing application with multi-user support.",
      techStack: "Svelte, Django, Django Channels, WebSockets, Redis",
      achievements: [
        "Created a collaborative real-time drawing application with multi-user support",
        "Implemented WebSocket for real-time updates and synchronization between users",
        "Built scalable backend with Django Channels and Redis for high-frequency drawing data",
        "Designed responsive interface supporting both desktop and mobile devices",
        "Deployed frontend on Vercel and backend with Docker for seamless access"
      ],
      links: [
        { label: "🌐 Live Demo", url: "https://real-time-drawing-board-front-deploy.vercel.app/" },
        { label: "💻 Frontend Code", url: "https://github.com/aringadre76/real-time-drawing-board-frontend" },
        { label: "⚙️ Backend Code", url: "https://github.com/aringadre76/real-time-drawing-board-backend-deploy" }
      ]
    },
    {
      title: "Dino Run Game",
      description: "A SystemVerilog implementation of the classic dinosaur runner game.",
      techStack: "SystemVerilog, FPGA, VGA, Basys3",
      achievements: [
        "Designed and implemented a dinosaur runner game using SystemVerilog with finite state machines",
        "Programmed VGA rendering for pixel-perfect graphics on FPGA with real-time obstacle spawning",
        "Developed modular game logic for score tracking, collision detection, and difficulty adjustments",
        "Implemented comprehensive testing with behavioral and gate-level simulation",
        "Created automated image ROM generation and synthesis scripts"
      ],
      links: [
        { label: "🎬 Demo Video", url: "https://www.youtube.com/watch?v=A_kBcON_fjk" },
        { label: "💻 Game Code", url: "https://github.com/aringadre76/dino-game" }
      ]
    },
    {
      title: "BananaSlug Emulator",
      description: "A complete emulator for a custom RISC-style architecture featuring CPU, GPU, and memory management.",
      techStack: "C++17, SDL2, CMake, Custom RISC Architecture",
      achievements: [
        "Implemented full CPU with custom instruction set and memory subsystem",
        "Built GPU rendering via SDL2 with virtual framebuffer",
        "Created console interface for loading and running ROM files",
        "Developed comprehensive test suite for emulator validation",
        "Achieved 1090+ lines of production-ready code with automated testing"
      ],
      links: [
        { label: "💻 Emulator Code", url: "https://github.com/aringadre76/cpp-emulator" }
      ]
    },
    {
      title: "Baseball Injury Risk Assessment",
      description: "A state-of-the-art machine learning system for assessing injury risk in baseball pitchers.",
      techStack: "Python, Scikit-learn, Biomechanical Analysis, ML Pipeline",
      achievements: [
        "Built comprehensive injury risk assessment system with perfect classification accuracy (AUC = 1.000)",
        "Processed 411 pitches from 100+ pitchers with 195+ biomechanical features",
        "Implemented advanced temporal feature extraction with 108 time-series features",
        "Created production-ready system processing 181 pitchers/hour",
        "Developed multi-component risk scoring for UCL and shoulder injuries"
      ],
      links: [
        { label: "💻 Research Code", url: "https://github.com/aringadre76/baseball-injury-risk-assessment/" }
      ]
    },
    {
      title: "Scholarly Research MCP Server",
      description: "A powerful research tool consolidating 24 tools into 5 for finding and analyzing academic papers.",
      techStack: "TypeScript, MCP Protocol, Multi-Source APIs, Research Tools",
      achievements: [
        "Consolidated 24 research tools into 5 powerful, multi-functional tools",
        "Integrated PubMed, Google Scholar, ArXiv, and JSTOR search capabilities",
        "Built content extraction and citation management systems",
        "Implemented user preference management and caching",
        "Published as NPM package for easy distribution"
      ],
      links: [
        { label: "📦 NPM Package", url: "https://www.npmjs.com/package/scholarly-research-mcp" },
        { label: "💻 Research Tool Code", url: "https://github.com/aringadre76/mcp-for-research/" }
      ]
    },
    {
      title: "Baseball Stats MCP Server",
      description: "The most comprehensive baseball analytics platform with 32 tools covering every advanced metric.",
      techStack: "Python, MCP Protocol, MLB API, Statcast, Advanced Analytics",
      achievements: [
        "Built 32 comprehensive tools covering every aspect of baseball analysis",
        "Integrated real-time data from MLB API and Statcast",
        "Implemented advanced metrics including biomechanics and tunneling analysis",
        "Created interactive visualizations with Plotly charts",
        "Achieved 78.1% test coverage with professional-grade analytics"
      ],
      links: [
        { label: "💻 Baseball Analytics Code", url: "https://github.com/aringadre76/baseball-stats-mcp/" }
      ]
    },
    {
      title: "IR Compiler",
      description: "A complete compiler implementation with lexical analysis, parsing, and intermediate representation generation.",
      techStack: "Python, Compiler Design, AST, Local Value Numbering",
      achievements: [
        "Implemented complete compiler pipeline from lexical analysis to IR generation",
        "Built parser and AST builder with comprehensive grammar support",
        "Created intermediate representation generator with optimization passes",
        "Implemented local value numbering for code optimization",
        "Developed comprehensive test suite with automated validation"
      ],
      links: [
        { label: "💻 Compiler Code", url: "https://github.com/aringadre76/ir-compiler" }
      ]
    }
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title glitch-text" data-text="Projects">Projects</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 className="neon-text" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
          🚀 Featured Projects
        </h3>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}

      <div className="tech-box" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3 className="cyan-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          🚀 Technical Highlights
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h4 className="neon-text">Full-Stack Development</h4>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>
              Frontend, backend, and infrastructure expertise
            </p>
          </div>
          <div>
            <h4 className="neon-text">Production Deployment</h4>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>
              Experience with Vercel, Render, Docker, and Kubernetes
            </p>
          </div>
          <div>
            <h4 className="neon-text">Testing & Quality</h4>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>
              Comprehensive test suites and automated validation
            </p>
          </div>
          <div>
            <h4 className="neon-text">AI/ML Expertise</h4>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>
              Computer vision, NLP, and biomechanical analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
