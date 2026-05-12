import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saxBg from '@/assets/sax-detail.png';

const steps = [
  { 
    num: '01', 
    title: 'Curation', 
    tag: 'ARTISAN_SELECTION',
    desc: 'Browse our elite registry of verified virtuosos, filtered by genre, atmosphere, and performance history.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.circle 
          cx="50" cy="50" r="40" 
          className="opacity-20" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
        <motion.path 
          d="M30 50 L45 65 L75 35" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </svg>
    )
  },
  { 
    num: '02', 
    title: 'Engagement', 
    tag: 'PROTOCOLS',
    desc: 'Directly coordinate with your selected artist through our secure interface to finalize the technical rider.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.rect 
          x="25" y="20" width="50" height="60" rx="4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <path d="M35 40 H65 M35 55 H65" strokeOpacity="0.5" />
        <motion.path 
          d="M70 25 L80 25 M75 20 L75 30" 
          strokeWidth="2" 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
        />
      </svg>
    )
  },
  { 
    num: '03', 
    title: 'Secured Escrow', 
    tag: 'FINANCIAL_LEDGER',
    desc: 'Process payments through our institutional-grade M-Pesa vault. Funds are only released post-performance.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path 
          d="M50 15 L80 30 V70 L50 85 L20 70 V30 Z" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
        <motion.circle 
          cx="50" cy="50" r="12" 
          className="fill-primary/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    )
  },
  { 
    num: '04', 
    title: 'Virtuoso Encore', 
    tag: 'EXECUTION',
    desc: 'Experience an unparalleled live performance. Upon completion, confirm the session to release the artist honorarium.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path 
          d="M20 80 C40 80 40 20 60 20 C80 20 80 80 100 80" 
          strokeOpacity="0.3" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
        <motion.path 
          d="M50 40 V70 M40 50 L50 40 L60 50" 
          strokeWidth="2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    )
  },
];

export default function HowItWorks() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="how-it-works" className="py-24 md:py-48 bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR: A large obsidian block that sits behind the header area in light mode */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[#f5f3ff] dark:bg-transparent pointer-events-none transition-colors duration-1000" />
      
      {/* Cinematic Macro Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={saxBg} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.15] grayscale-0 scale-125 rotate-12" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background transition-colors duration-1000" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start mb-40">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/3"
          >
            <div className="bg-secondary p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Decorative Line Art */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg width="120" height="120" viewBox="0 0 100 100" className="text-primary fill-none stroke-current stroke-[0.5]">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="20" />
                </svg>
              </div>

              <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] mb-8 block">The Artisan's Journey</span>
              <h2 className="font-heading text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                A Seamless <br />
                <span className="italic font-light text-primary/80">Rhythmic Flow.</span>
              </h2>
              <p className="mt-12 text-white/90 font-medium md:font-light leading-relaxed">
                Four phases of performance management, engineered for absolute transparency.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-10">
            {steps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative transition-all duration-1000 ${
                  hoveredIdx !== null && hoveredIdx !== idx ? 'opacity-30 scale-[0.97] blur-[2px]' : 'opacity-100 scale-100'
                }`}
              >
                <div className="relative bg-white dark:bg-secondary backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[4rem] p-12 overflow-hidden hover:border-primary/40 transition-all duration-1000 premium-shadow h-full flex flex-col min-h-[400px]">
                  
                  {/* Active Spotlight Glow */}
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  <div className="absolute -top-12 -right-12 w-48 h-48 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-1000 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-100">
                    {s.illustration}
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center gap-4 mb-16">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">PHASE_{s.num}</span>
                      <div className="flex-grow h-px bg-primary/20" />
                    </div>
                    
                    <h3 className="text-4xl font-heading font-bold text-black dark:text-white mb-8 group-hover:text-primary transition-colors duration-500">{s.title}</h3>
                    <span className="text-[9px] font-bold text-black dark:text-white/60 uppercase tracking-[0.4em] mb-6 block transition-colors">{s.tag}</span>
                    <p className="text-lg text-black dark:text-white/80 leading-relaxed font-medium md:font-light transition-colors">{s.desc}</p>
                  </div>

                  {/* Technical Metadata Footer */}
                  <div className="relative z-10 mt-12 pt-8 border-t border-primary/20 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[9px] font-black text-black/60 dark:text-white/40 uppercase tracking-widest transition-colors">EST_VERIFICATION_PASS</span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}