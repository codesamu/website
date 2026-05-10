import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="section container artsy-bg" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            fontWeight: 700, 
            marginBottom: '1.5rem', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            fontSize: '0.7rem',
            color: 'var(--accent-2)'
          }}
        >
          Programmer • Digital Artist • DJ
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{ 
            fontSize: 'clamp(2.5rem, 11vw, 8.5rem)', 
            lineHeight: 0.75, 
            marginBottom: '3rem',
            fontWeight: 800,
            letterSpacing: '-0.05em'
          }}
          className="gradient-text"
        >
          Samuel <br /> <span style={{ fontFamily: "'Ballet', cursive", color: 'var(--accent)', fontWeight: 400, fontSize: '1.2em', marginLeft: '-0.1em' }}>Fronthaler</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ 
            fontSize: '1.15rem', 
            color: 'var(--muted)', 
            marginBottom: '4rem',
            lineHeight: 1.6,
            maxWidth: 'none'
          }}
        >
          Focusing on <span style={{ color: 'var(--accent)' }}>Python</span> and creative automation. Managing a personal <span style={{ color: 'var(--accent-2)' }}>homelab</span> with advanced networking and self-hosted infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
        >
          <a href="#projects" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg)' }}>Works</a>
          <a href="#about" className="nav-link" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>About &rarr;</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
