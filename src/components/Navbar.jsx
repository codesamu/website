import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div style={{ position: 'fixed', top: '2rem', left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'center' }}>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ 
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '0.75rem 2.5rem',
          borderRadius: '100px',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}
      >
        <a href="#" style={{ fontWeight: 800, fontSize: '1.125rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.05em' }}>
          samu<span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        
        <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          <a href="#projects" className="nav-link">Works</a>
          <a href="#services" className="nav-link">Apps</a>
          <a href="#about" className="nav-link">Profile</a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
