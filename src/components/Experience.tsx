import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  achievements: string[];
  projectShowcase?: string;
}

const ExperienceCard: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  duration, 
  achievements, 
  projectShowcase 
}) => {
  return (
    <div className="project-card">
      <div style={{ marginBottom: '1rem' }}>
        <h3 className="project-title">{title}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="neon-text" style={{ fontSize: '1.2rem' }}>{company}</span>
          <span className="cyan-text" style={{ fontSize: '1rem' }}>{duration}</span>
        </div>
      </div>

      <div style={{ margin: '1.5rem 0' }}>
        <h4 className="cyan-text" style={{ marginBottom: '1rem' }}>Key Achievements</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {achievements.map((achievement, index) => (
            <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
              • {achievement}
            </li>
          ))}
        </ul>
      </div>

      {projectShowcase && (
        <div className="tech-box">
          <span className="neon-text">Project Showcase: </span>
          <a 
            href={projectShowcase} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            style={{ marginLeft: '0.5rem' }}
          >
            View Project Details
          </a>
        </div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Co-op Intern – GenAI CPU Analytics Tool",
      company: "Nutanix",
      duration: "January 2025 - June 2025",
      achievements: [
        "Architected containerized benchmarking platform for CPU inference of LLMs using Docker Compose, orchestrating client and VM services",
        "Enhanced vLLM inference engine by integrating Node Exporter and Intel PCM Exporter to collect detailed CPU performance counters",
        "Developed FastAPI microservices on client and VM sides to coordinate benchmark execution and results management",
        "Built interactive Streamlit UI for configuring, running, and visualizing benchmarks with model selection and parameter tuning",
        "Configured Prometheus metrics pipeline and designed Grafana dashboards to visualize model latency, throughput, and system resource utilization",
        "Designed SQLite schema and initialization scripts for persistent storage and analysis of benchmark results"
      ],
      projectShowcase: "https://csspp.engineering.ucsc.edu/capstone/gen-al-cpu-analytics-nutanix-inc/"
    },
    {
      title: "Software Engineer Intern",
      company: "The Difference LLC",
      duration: "September 2023 - Present",
      achievements: [
        "Architected Flutter mobile app components with optimized state management using Provider, streamlining 15+ interactive features",
        "Integrated various third-party APIs to enhance application functionality and boost user engagement",
        "Developed new back-end functions in Laravel and performed DB migrations, expanding service capabilities",
        "Implemented debouncing techniques to optimize search functionality, reducing API response time by 60%",
        "Created comprehensive API documentation using Swagger, improving development workflow and reducing onboarding time by 50%",
        "Implemented automated CI/CD pipeline using GitHub Actions, reducing deployment time from 45 to 12 minutes"
      ]
    }
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title glitch-text" data-text="Experience">Experience</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#b3b3b3', lineHeight: '1.8' }}>
          Professional experience building scalable software solutions and leading technical initiatives
        </p>
      </div>

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}

      <div className="tech-box" style={{ marginTop: '3rem' }}>
        <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Professional Impact
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="cyan-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>60%</div>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>API Response Time Reduction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="cyan-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>50%</div>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>Onboarding Time Improvement</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="cyan-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>73%</div>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>Deployment Time Reduction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="cyan-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>15+</div>
            <p style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>Interactive Features Built</p>
          </div>
        </div>
      </div>

      <div className="project-card" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          🎯 Current Status
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <h4 className="cyan-text">Seeking</h4>
            <p>Full-Time Engineering Position [2025]</p>
          </div>
          <div>
            <h4 className="cyan-text">Available</h4>
            <p>Technical Collaborations</p>
          </div>
          <div>
            <h4 className="cyan-text">Scanning</h4>
            <p>R&D Operations</p>
          </div>
          <div>
            <h4 className="cyan-text">Ready</h4>
            <p>High-Impact Tech Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
