import { Mail, Globe, ExternalLink, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="section container" style={{ borderTop: '1px solid var(--border)', paddingBottom: '4rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '4rem'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Let's work <br /> <span style={{ color: 'var(--accent)' }}>together.</span></h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '400px', fontSize: '1.125rem' }}>
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <a 
            href="mailto:samufro3@gmail.com" 
            className="glass" 
            style={{ 
              padding: '1.25rem 3rem', 
              display: 'inline-block',
              fontWeight: 800,
              color: '#fff',
              background: 'var(--fg)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Email Me
          </a>
        </div>

        <div style={{ display: 'flex', gap: '4rem' }}>
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Social</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="https://github.com/codesamu" className="hover-link">GitHub</a>
              <a href="https://www.linkedin.com/in/samuel-fronthaler-984188374/" className="hover-link">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#about" className="hover-link">About</a>
              <a href="#projects" className="hover-link">Projects</a>
              <a href="#services" className="hover-link">Services</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '8rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        color: 'var(--muted)', 
        fontSize: '0.875rem' 
      }}>
        <p>&copy; {new Date().getFullYear()} Samuel Fronthaler.</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
