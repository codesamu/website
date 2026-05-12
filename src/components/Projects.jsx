import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Code2, Terminal, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('https://api.github.com/users/codesamu/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section" style={{ padding: '8rem 0 4rem 0' }}>
      <div className="container" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', marginBottom: '2rem' }}>
          Creative <br /> <span style={{ color: 'var(--accent)' }}>Works</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.25rem', maxWidth: '600px' }}>
          An archive of software experiments, musical sets, and visual art.
        </p>
      </div>

      {/* 01. Software */}
      <div style={{ marginBottom: '4rem' }}>
        <div className="container" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)' }}>01 / Software</h3>
          <div style={{ height: '1px', flexGrow: 1, background: 'var(--border)' }}></div>
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>
        ) : (
          <div
            ref={containerRef}
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem 10vw',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {repos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} containerRef={containerRef} />
            ))}
          </div>
        )}
      </div>

      {/* 02. Music & 03. Visuals (Combined Row) */}
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {/* Music */}
        <div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)' }}>02 / Music</h3>
            <div style={{ height: '1px', flexGrow: 1, background: 'var(--border)' }}></div>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { id: '5xyQ_ypnCjE', title: 'groovy techno B2B set' },
              { id: 'DFvIkZpvm5Y', title: 'Latin Tech House set in the woods' }
            ].map((video) => (
              <motion.a
                key={video.id}
                href={`https://youtube.com/watch?v=5xyQ_ypnCjE`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass"
                style={{ overflow: 'hidden', height: '180px', position: 'relative', background: 'var(--surface)' }}
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                  onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid white' }}></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Visuals */}
        <div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)' }}>03 / Visuals</h3>
            <div style={{ height: '1px', flexGrow: 1, background: 'var(--border)' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="glass"
                style={{
                  aspectRatio: '1',
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  fontSize: '0.55rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em'
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent)'
                }}
              >
                {i === 1 ? (
                  <img
                    src="/idgaf2.png"
                    alt="Visual artwork"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : (
                  'Soon'
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ repo, index, containerRef }) => {
  const cardRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        minWidth: '340px',
        width: '340px',
        scrollSnapAlign: 'center',
        scale
      }}
    >
      <motion.a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '280px',
          padding: '2rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          textDecoration: 'none',
          color: 'inherit',
          position: 'relative'
        }}
        whileHover={{
          y: -5,
          borderColor: 'var(--accent)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <Code2 size={20} style={{ color: 'var(--accent)' }} />
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', fontSize: '0.75rem', fontWeight: 800 }}>
            <Star size={12} style={{ color: 'var(--accent)' }} /> {repo.stargazers_count}
          </div>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{repo.name}</h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: 1.6 }}>
          {repo.description || "Digital exploration and software architecture."}
        </p>

        <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)' }}>
          Explore &rarr;
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Projects;
