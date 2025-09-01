import React from 'react';

const About: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
        <p>
          Computer Engineering student at UC Santa Cruz (Graduating: June 2025), focused on building innovative software solutions and tackling complex technical challenges.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        
        <div className="tech-box">
          <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Education</h3>
          <div>
            <h4 className="cyan-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>University of California, Santa Cruz</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• Expected Graduation: June 2025</li>
              <li>• B.A. in Network and Digital Technology</li>
            </ul>
            
            <h4 className="cyan-text" style={{ fontSize: '1.1rem', margin: '1.5rem 0 0.5rem 0' }}>Relevant Coursework</h4>
            <p style={{ fontSize: '0.95rem', color: '#b3b3b3' }}>
              Applied ML: Deep Learning, Software Engineering, Computer System Design, Computer Networks, 
              Compiler Design, Advanced Programming in C++, Data Structures & Algorithms, Logic Design, 
              Natural Language Processing
            </p>
          </div>
        </div>

        <div className="tech-box">
          <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technical Skills</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 className="cyan-text" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Languages</h4>
            <p style={{ fontSize: '0.95rem', color: '#b3b3b3' }}>
              Python, Java, C/C++, JavaScript, TypeScript, Dart, PHP, Verilog, SQL
            </p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h4 className="cyan-text" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Frameworks & Tools</h4>
            <p style={{ fontSize: '0.95rem', color: '#b3b3b3' }}>
              React, Laravel, Flutter, PyTorch, TensorFlow, Keras, Tailwind, Node.js, Express, 
              MongoDB, MySQL, Grafana, Prometheus, Flask
            </p>
          </div>

          <div>
            <h4 className="cyan-text" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Development</h4>
            <p style={{ fontSize: '0.95rem', color: '#b3b3b3' }}>
              SCRUM, Agile, API Integration, Unit Testing, Debugging Tools, Git, Android Studio, 
              Android SDK, NLTK
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
