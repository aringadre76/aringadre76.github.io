import React from 'react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: "Email",
      url: "mailto:aringadre@gmail.com",
      icon: "✉️",
      description: "Direct communication channel"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/arin-gadre",
      icon: "💼",
      description: "Professional network"
    },
    {
      name: "GitHub",
      url: "https://github.com/aringadre76",
      icon: "💻",
      description: "Code repositories"
    }
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title glitch-text" data-text="NETRUNNER CONTACT">
        NETRUNNER CONTACT
      </h2>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 className="neon-text" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          INITIALIZE CONNECTION
        </h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#b3b3b3' }}>
          Got some tech to discuss, jobs to collaborate on, or opportunities to explore? Let's sync up in Night City.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((contact, index) => (
          <div key={index} className="contact-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {contact.icon}
            </div>
            <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {contact.name}
            </h3>
            <p style={{ color: '#b3b3b3', marginBottom: '1.5rem' }}>
              {contact.description}
            </p>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{ display: 'inline-block' }}
            >
              Connect
            </a>
          </div>
        ))}
      </div>

      <div className="project-card" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3 className="cyan-text" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          SYSTEM STATUS: ACTIVE
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div className="tech-box">
            <h4 className="neon-text">Seeking</h4>
            <p>Full-Time Engineering Position [2025]</p>
          </div>
          <div className="tech-box">
            <h4 className="neon-text">Available</h4>
            <p>Technical Collaborations</p>
          </div>
          <div className="tech-box">
            <h4 className="neon-text">Scanning</h4>
            <p>R&D Operations</p>
          </div>
          <div className="tech-box">
            <h4 className="neon-text">Ready</h4>
            <p>High-Impact Tech Projects</p>
          </div>
        </div>
      </div>

      <div className="tech-box" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3 className="cyan-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          CURRENT COORDINATES
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <h4 className="neon-text">Operating Zone</h4>
            <p>Santa Cruz District</p>
          </div>
          <div>
            <h4 className="neon-text">Mission Status</h4>
            <p>Targeting New Grad Positions [2025]</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 className="neon-text" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          Quick Access Links
        </h3>
        <div className="social-links">
          <a
            href="mailto:aringadre@gmail.com"
            className="social-link"
            title="Email"
          >
            ✉️
          </a>
          <a
            href="https://linkedin.com/in/arin-gadre"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://github.com/aringadre76"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            💻
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Resume"
          >
            📄
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', borderTop: '1px solid rgba(255, 46, 136, 0.3)' }}>
        <p style={{ fontSize: '1.1rem', color: '#b3b3b3' }}>
          <span className="neon-text">CONNECTION STATUS:</span> READY FOR TRANSMISSION
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
          Response time: &lt; 24 hours | Timezone: PST
        </p>
      </div>
    </div>
  );
};

export default Contact;
