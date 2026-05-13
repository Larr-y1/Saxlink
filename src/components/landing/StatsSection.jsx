import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Globe2, Briefcase } from 'lucide-react';
import saxBg from '@/assets/sax-detail.png';

function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { 
    value: 150, 
    suffix: '+', 
    label: 'Virtuoso Partners', 
    sub: 'Elite Global Network', 
    detail: 'A curated collective of the world\'s finest saxophonists, each hand-selected through our rigorous Obsidian-tier vetting process.',
    icon: Sparkles,
    grid: 'lg:col-span-2 lg:row-span-2'
  },
  { 
    value: 0, 
    suffix: '+', 
    label: 'Prestigious Venues', 
    sub: 'Institutional Partners', 
    detail: 'From high-end hotel lounges to exclusive private residences, we bridge the gap between world-class talent and iconic stages.',
    icon: Globe2,
    grid: 'lg:col-span-1'
  },
  { 
    value: 0, 
    suffix: '+', 
    label: 'Seamless Engagements', 
    sub: 'Successful Bookings', 
    detail: 'Our automated infrastructure has facilitated over a thousand high-stakes performances with zero technical disruptions.',
    icon: Briefcase,
    grid: 'lg:col-span-1'
  },
  { 
    value: 99.9, 
    suffix: '%', 
    label: 'Success Quotient', 
    sub: 'Reliability Excellence', 
    detail: 'An industry-leading performance completion rate, backed by our "Elite Escrow" protection and dedicated support team.',
    icon: ShieldCheck,
    grid: 'lg:col-span-1 lg:row-span-2'
  },
];

export default function StatsSection() {
  return (
    <section className="py-10 md:py-16 bg-[#f5f3ff] dark:bg-secondary text-secondary-foreground relative overflow-hidden transition-colors duration-1000">
      {/* Premium Photographic Background & Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={saxBg} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.05] grayscale contrast-150" 
        />
        
        {/* Abstract Musical Illustration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] dark:opacity-[0.08]">
          <svg viewBox="0 0 400 600" className="w-full h-full text-primary" fill="currentColor">
            <path d="M200 100c-50 0-100 50-100 100s50 100 100 100 100-50 100-100-50-100-100-100zm0 150c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z" />
            <rect x="190" y="200" width="20" height="300" rx="10" />
            <circle cx="200" cy="500" r="50" fill="none" stroke="currentColor" strokeWidth="10" />
            <path d="M150 450c0-20 20-40 50-40s50 20 50 40" stroke="currentColor" strokeWidth="10" fill="none" />
          </svg>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ff] via-transparent to-[#f5f3ff] dark:from-secondary dark:via-transparent dark:to-secondary z-10" />
      </div>

      {/* Decorative Radial Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Institutional Authority</span>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter text-black dark:text-white transition-colors">
              The <span className="italic font-light text-primary">Elite</span> <br />
              Ledger.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-black dark:text-white/60 text-lg font-medium md:font-light leading-relaxed max-w-sm mb-4 transition-colors"
          >
            A quantitative overview of our commitment to live music infrastructure and professional security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {stats.map((s, idx) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative bg-white/40 dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 overflow-hidden hover:border-primary/30 transition-all duration-700 flex flex-col justify-between ${s.grid}`}
            >
              {/* Card Background Watermark Number */}
              <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-primary/[0.03] dark:text-primary/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
                {s.value}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[9px] font-black text-black dark:text-white/60 uppercase tracking-[0.3em] opacity-60">Ref: SL-2026/00{idx+1}</div>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-2 transition-colors">{s.label}</h3>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {s.sub}
                </p>
                <p className="text-sm text-black dark:text-white/80 font-medium md:font-light leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {s.detail}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="font-heading text-7xl md:text-8xl font-bold tracking-tighter text-black dark:text-white group-hover:text-primary transition-all duration-500 flex items-baseline">
                  <CountUp target={s.value} />
                  <span className="text-3xl ml-1 text-primary/40 dark:text-primary/40 font-light">{s.suffix}</span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}