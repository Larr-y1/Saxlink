import { motion } from 'framer-motion';
import { BadgeCheck, Shield, Star, ArrowRight as LucideArrowRight, Music, BadgePercent, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SIDE_IMG = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200';

const features = [
  { 
    title: 'Fair Pricing', 
    desc: 'Set your own rates. No more underpayment through middlemen.',
    icon: <BadgePercent className="w-6 h-6" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.circle cx="50" cy="50" r="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M40 60 L60 40" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      </svg>
    )
  },
  { 
    title: 'Secure Payments', 
    desc: 'Payments are held securely until the gig is confirmed complete.',
    icon: <Shield className="w-6 h-6" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path d="M50 20 L80 35 V65 L50 80 L20 65 V35 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
      </svg>
    )
  },
  { 
    title: 'Grow Your Brand', 
    desc: 'Build your reputation with ratings, reviews, and a stunning profile.',
    icon: <Star className="w-6 h-6" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path d="M50 15 L61 38 L85 38 L66 54 L73 77 L50 63 L27 77 L34 54 L15 38 L39 38 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
      </svg>
    )
  },
  { 
    title: 'Consistent Gigs', 
    desc: 'Access a steady stream of booking requests from verified clients.',
    icon: <Calendar className="w-6 h-6" />,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.rect x="20" y="25" width="60" height="55" rx="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <path d="M20 40 H80 M35 20 V30 M65 20 V30" strokeOpacity="0.5" />
      </svg>
    )
  },
];

export default function ForMusicians() {
  return (
    <section id="for-musicians" className="py-10 md:py-16 bg-[#fcfbff] dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR: Large Obsidian block on the right side for composition */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#0a0a0c] dark:bg-transparent transition-colors duration-1000 z-0 hidden lg:block" />
      
      {/* Cinematic Lighting */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 lg:gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <div className="w-12 md:w-16 h-px bg-primary/60" />
              <span className="text-[10px] md:text-[11px] font-black text-primary uppercase tracking-[0.7em]">For Saxophonists</span>
            </div>
            
            <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12 transition-colors">
              Take Control of <br />
              <span className="italic font-light text-primary/80">Your Career.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-black dark:text-white/60 font-medium md:font-light leading-relaxed max-w-xl mb-8 md:mb-12 italic transition-colors">
              "Stop depending on middlemen. SaxLink puts you directly in front of clients who are ready to book and pay fairly for your talent."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {features.map((f, i) => (
                <motion.div 
                  key={f.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white dark:bg-white/[0.02] border border-primary/20 dark:border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 overflow-hidden hover:border-primary/40 transition-all duration-700 premium-shadow"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                    {f.illustration}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 dark:bg-white/5 border border-secondary/20 dark:border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 mb-8 relative z-10">
                    {f.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors duration-500 relative z-10">{f.title}</h3>
                  <p className="text-base text-black dark:text-white/70 leading-relaxed font-medium md:font-light relative z-10 transition-colors">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/register" className="inline-block mt-8 md:mt-12 w-full md:w-auto">
              <Button className="group relative overflow-hidden bg-secondary text-white dark:bg-primary dark:text-white rounded-full px-12 md:px-20 py-8 md:py-12 text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all duration-700 shadow-2xl w-full md:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-4 md:gap-6 text-black dark:text-white">
                  Join SaxLink Today <LucideArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-3 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              </Button>
            </Link>
          </motion.div>

          {/* Cinematic Composition (Dark Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* The Artist Profile Mockup Overlay */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -left-16 z-30 w-80 bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-[3rem] p-10 premium-shadow-lg hidden xl:block"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <BadgeCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-primary uppercase tracking-widest">VERIFIED_ARTIST</div>
                  <div className="text-lg font-bold text-white tracking-tight">Professional Elite</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-widest">
                  <span>Artist Authority</span>
                  <span className="text-primary">0.962 // ALPHA</span>
                </div>
              </div>
            </motion.div>

            <div className="relative rounded-[5rem] overflow-hidden aspect-[3/4] max-w-lg mx-auto lg:ml-auto shadow-2xl premium-shadow group">
              <img 
                src={SIDE_IMG} 
                alt="Elite Performance" 
                className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all [transition-duration:2.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
              
              {/* Floating Decorative Elements */}
              <div className="absolute bottom-16 left-12 right-12 p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Career Excellence</span>
                </div>
                <p className="text-xs text-white/40 uppercase tracking-[0.4em] leading-relaxed">Your professional journey, empowered by elite infrastructure.</p>
              </div>
            </div>

            {/* Background Halo */}
            <div className="absolute inset-0 bg-primary/10 blur-[150px] -z-10 rounded-full scale-90 translate-x-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
