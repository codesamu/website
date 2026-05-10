import { motion } from 'framer-motion';
import { Cloud, Play, Database, Server, Cpu } from 'lucide-react';

const services = [
  {
    title: "Nextcloud",
    desc: "Private cloud storage and collaboration suite for all digital assets.",
    url: "https://nc.samudev.xyz",
    icon: <Cloud size={32} />,
    status: "Online",
    type: "LXC"
  },
  {
    title: "Jellyfin",
    desc: "Self-hosted media system for streaming my personal collection.",
    url: "https://watch.samudev.xyz",
    icon: <Play size={32} />,
    status: "Online",
    type: "VM"
  },
  {
    title: "Sheetbase",
    desc: "Custom database and project management infrastructure.",
    url: "https://sheetbase.samudev.xyz",
    icon: <Database size={32} />,
    status: "Online",
    type: "LXC"
  }
];

const Services = () => {
  return (
    <section id="services" className="section container">
      <div style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
          <Server size={16} />
          Infrastructure
        </div>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>
          Self-Hosted <br /> Ecosystem
        </h2>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '500px' }}>
            My personal cloud running on a <strong>Proxmox VE</strong> cluster, leveraging a high-performance mix of <strong>VMs and LXC containers</strong>.
          </p>
          <div style={{ padding: '1rem 2rem', border: '1px solid var(--border)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <Cpu size={14} style={{ color: 'var(--accent)' }} /> Hypervisor: Proxmox 8.x
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {services.map((app, index) => (
          <motion.a 
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass"
            style={{ padding: '2.5rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
              <div style={{ color: 'var(--accent)' }}>
                {app.icon}
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, padding: '0.3rem 0.8rem', background: 'var(--surface)', borderRadius: '100px', border: '1px solid var(--border)' }}>
                {app.type}
              </div>
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{app.title}</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{app.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <div style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                background: app.status === "Online" ? 'var(--fg)' : 'var(--muted)',
                boxShadow: app.status === "Online" ? '0 0 10px rgba(0,0,0,0.1)' : 'none'
              }}></div>
              <span style={{ color: 'var(--fg)', fontWeight: 900 }}>{app.status}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Services;
