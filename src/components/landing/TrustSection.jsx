import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Wallet, Gavel, BadgePercent, Headphones } from 'lucide-react';

const partners = [
  'Villa Rosa Kempinski', 'Tribe Hotel', 'Sankara Nairobi', 'Radisson Blu', 'Fairmont The Norfolk', 'Sarova Hotels'
];

const trusts = [
  { 
    title: 'Verified Musicians', 
    desc: 'Every musician on SaxLink is manually reviewed and verified by our team before being listed.',
    icon: <ShieldCheck className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path 
          d="M50 20 L80 35 V65 L50 80 L20 65 V35 Z" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
        <motion.path 
          d="M40 50 L47 57 L60 43" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.5 }}
        />
      </svg>
    )
  },
  { 
    title: 'Secure Escrow Payments', 
    desc: "Your payment is held safely until the gig is confirmed complete — you're never at risk.",
    icon: <Lock className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.rect 
          x="25" y="35" width="50" height="40" rx="4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
        <motion.path 
          d="M40 35 V25 C40 20 45 15 50 15 C55 15 60 20 60 25 V35" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.5 }}
        />
      </svg>
    )
  },
  { 
    title: 'M-Pesa Payouts', 
    desc: 'Musicians receive fast, reliable payouts directly to their M-Pesa within 24 hours of completion.',
    icon: <Wallet className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.circle cx="50" cy="50" r="35" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M35 50 L45 60 L65 40" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      </svg>
    )
  },
  { 
    title: 'Dispute Protection', 
    desc: 'Our team mediates any issues between clients and musicians to ensure a fair outcome.',
    icon: <Gavel className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path d="M30 70 L70 30 M35 25 L25 35 M75 65 L65 75" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
      </svg>
    )
  },
  { 
    title: 'Transparent Pricing', 
    desc: 'No hidden fees. What you see is what you pay — a clear 15% platform fee, nothing more.',
    icon: <BadgePercent className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.circle cx="50" cy="50" r="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M40 60 L60 40" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      </svg>
    )
  },
  { 
    title: '24/7 Support', 
    desc: 'Our dedicated support team is available around the clock to help with any booking questions.',
    icon: <Headphones className="w-8 h-8" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path d="M20 50 C20 20 80 20 80 50" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.rect x="15" y="50" width="10" height="20" rx="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
        <motion.rect x="75" y="50" width="10" height="20" rx="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
      </svg>
    )
  },
];

export default function TrustSection() {
  return (
    <section className="py-32 md:py-64 bg-[#faf9ff] dark:bg-secondary text-secondary-foreground relative overflow-hidden transition-colors duration-1000">
      {/* Cinematic Texture Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-primary/5 blur-[200px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-primary/5 blur-[180px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-40 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-40 flex-1"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Institutional Integrity</span>
            </div>
            
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.8] tracking-tighter mb-12 transition-colors">
              Built on Trust & <br />
              <span className="italic font-light text-primary/80">Transparency.</span>
            </h2>
            
            <p className="text-2xl text-black dark:text-white/80 font-medium md:font-light leading-relaxed max-w-xl mb-24 italic transition-colors">
              "We've built every feature of SaxLink to protect both clients and musicians — because great music starts with trust."
            </p>

            {/* Institutional Trust Logo Cloud */}
            <div className="pt-24 border-t border-primary/20 dark:border-white/10">
              <div className="flex items-center gap-4 mb-16">
                <span className="text-[10px] font-black text-black dark:text-white/60 uppercase tracking-[0.5em] transition-colors">Trusted by Global Institutions</span>
                <div className="flex-grow h-px bg-primary/10 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 opacity-80 grayscale-0 transition-all duration-1000">
                {partners.map((p) => (
                  <div key={p} className="text-[11px] font-black uppercase tracking-[0.3em] hover:text-primary transition-all cursor-default flex items-center gap-2 text-black dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {trusts.map((t, i) => (
              <motion.div 
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 overflow-hidden hover:border-primary/40 transition-all duration-1000 premium-shadow h-full flex flex-col">
                  
                  {/* Floating Illustration Background */}
                  <div className="absolute top-0 right-0 w-48 h-48 -translate-y-8 translate-x-8 opacity-[0.08] group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out">
                    {t.illustration}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 rounded-[2rem] bg-secondary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-700 shadow-2xl mb-10">
                      {t.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-6 group-hover:text-primary transition-colors duration-500 leading-tight">{t.title}</h3>
                      <p className="text-base text-black dark:text-white/80 leading-relaxed font-medium md:font-light mb-10 transition-colors">{t.desc}</p>
                      
                      <div className="mt-auto flex items-center gap-3 text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.3em] group-hover:text-primary/40 transition-colors">
                        PROTOCOL_SECURED <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Scanline Animation */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
