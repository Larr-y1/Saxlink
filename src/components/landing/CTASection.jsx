import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight as LucideArrowRight, Music, Users2, BadgeCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-background text-foreground transition-colors duration-1000">
      {/* Cinematic Background Layering */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80" 
          alt="" 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full object-cover grayscale opacity-70 dark:opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[220px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* The Elite Seal (Rotating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 h-40 mb-10 relative"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 p-2"
            >
              <div className="w-full h-full rounded-full border border-primary/10 flex items-center justify-center bg-primary/5 shadow-inner">
                <BadgeCheck className="w-12 h-12 text-primary/60" />
              </div>
            </motion.div>
            {/* Circular Text (SVG Path) */}
            <svg className="absolute inset-0 w-full h-full text-primary/40" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
              <text className="text-[5.5px] font-black uppercase tracking-[0.5em] fill-current">
                <textPath href="#circlePath">
                  · ELITE PERFORMANCE · SECURED EXCELLENCE · GLOBAL REACH ·
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-16 h-px bg-primary/60" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.8em]">The Curtain Call</span>
            <div className="w-16 h-px bg-primary/60" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-8xl lg:text-9xl font-black text-foreground dark:text-white leading-[0.8] tracking-tighter mb-10"
          >
            Ready to Find Your <br />
            <span className="italic font-light text-primary/80 text-4xl md:text-7xl lg:text-[8rem]">Perfect Saxophonist?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/60 dark:text-white/40 font-light leading-relaxed max-w-4xl mb-12 italic"
          >
            "Join hundreds of clients and musicians already using SaxLink to create unforgettable musical experiences."
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Client Portal */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/browse" className="group block h-full">
                <div className="h-full bg-secondary/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-primary/40 transition-all duration-1000 premium-shadow text-left shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2.5rem] bg-primary/10 dark:bg-white/5 flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner relative z-10">
                    <Users2 className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-white mb-6 relative z-10">Browse Musicians</h3>
                  <p className="text-sm text-foreground/40 dark:text-white/40 font-light leading-relaxed mb-12 uppercase tracking-[0.2em] relative z-10">Access the curated client registry</p>
                  <Button className="w-full rounded-full py-10 md:py-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary text-white shadow-2xl relative z-10">
                    Enter the Registry <LucideArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Artist Portal */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/register" className="group block h-full">
                <div className="h-full bg-secondary/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-primary/40 transition-all duration-1000 premium-shadow text-left shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2.5rem] bg-primary/10 dark:bg-white/5 flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner relative z-10">
                    <Music className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-white mb-6 relative z-10">Join as Musician</h3>
                  <p className="text-sm text-foreground/40 dark:text-white/40 font-light leading-relaxed mb-12 uppercase tracking-[0.2em] relative z-10">Apply for professional residency</p>
                  <Button variant="outline" className="w-full rounded-full py-10 md:py-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] border-primary/20 dark:border-white/10 text-foreground dark:text-white group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-2xl relative z-10 transition-all duration-700">
                    Begin Application <LucideArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}