import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
          <div style={{ color: 'var(--muted)', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8 }}>
            <p>
              I'm Samuel Fronthaler, a programmer and student at HTL Anichstraße. 
              My technical focus is predominantly in <span style={{ color: 'var(--fg)', fontWeight: 800 }}>Python</span>, where I build 
              automation tools and creative software that bridge technology and art.
            </p>
            <p>
              I maintain a robust <span style={{ color: 'var(--fg)', fontWeight: 800 }}>personal homelab</span>, managing advanced networking 
              configurations and a suite of self-hosted services. This hands-on 
              infrastructure work complements my passion for software architecture.
            </p>
            <p>
              Outside of the terminal, I'm a digital artist and DJ, exploring 
              the boundaries of sound and visual expression.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ 
            aspectRatio: '4/5', 
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))',
            zIndex: 1
          }}></div>
          <img 
            src="/samuel.jpeg" 
            alt="Samuel Fronthaler" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.1)',
              transition: 'filter 0.5s ease'
            }}
            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)'}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
