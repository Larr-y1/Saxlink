
import { ArrowRight, Music2, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SoundWave from './SoundWave';
import heroImg from '@/assets/hero-premium.png';

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-24 lg:pb-32 transition-colors duration-1000"
    >
      {/* Background Video / Cinematic Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Overlay for Light/Dark visibility */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] z-10 transition-colors duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50 dark:opacity-60 contrast-110 saturate-100"
          poster={heroImg}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-saxophonist-playing-in-a-dark-room-41315-large.mp4" type="video/mp4" />
        </video>
        <SoundWave />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* LEFT CONTENT - Floating Typography */}
          <div className="flex-[1.2] text-center lg:text-left z-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-secondary/5 dark:bg-white/5 border border-secondary/10 dark:border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-xl transition-colors"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </motion.div>
              <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.4em]">The Obsidian Tier residencies</span>
            </motion.div>

            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.06em] lg:-ml-1 text-foreground dark:text-white transition-colors"
              >
                <span className="block mb-2">Find the</span>
                <span className="relative inline-block text-primary italic font-light drop-shadow-2xl">
                  Perfect
                  <motion.div 
                    className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-2 bg-primary/20 blur-xl -z-10"
                    animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </span>
                <span className="block mt-2 font-heading">Saxophonist</span>
                <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground dark:text-foreground/80 transition-colors">for Your Event</span>
              </motion.h1>
              
              {/* Bespoke Rotating Seal Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-24 -right-12 hidden xl:flex w-40 h-40 items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary/60 dark:text-primary/40">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fontSize="8" fontWeight="bold" fill="currentColor" letterSpacing="2">
                      <textPath href="#textPath">
                        CURATED ARTISTRY • MIDNIGHT RESIDENCIES • OBSIDIAN TIER • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="w-16 h-16 rounded-full bg-primary/20 dark:bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-md">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 md:mt-8 text-base md:text-xl text-foreground dark:text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium md:font-light transition-colors"
            >
              Book verified, world-class saxophonists for weddings, corporate events, restaurants, and private parties — all in one place.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8 md:mt-12"
            >
              <MagneticButton>
                <Button className="rounded-full px-6 md:px-10 py-5 md:py-6 text-sm md:text-base bg-primary hover:bg-primary/90 text-white shadow-xl transition-all group overflow-hidden relative border-none">
                  <span className="relative z-10 flex items-center">
                    Discover Artists <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />
                </Button>
              </MagneticButton>
              <Button variant="ghost" className="rounded-full px-6 md:px-10 py-5 md:py-6 text-sm md:text-base hover:bg-secondary/5 dark:hover:bg-white/5 text-foreground dark:text-foreground border border-secondary/10 dark:border-white/10 backdrop-blur-sm transition-all">
                Join as Musician
              </Button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT - Cinematic Visuals with Floating Parallax */}
          <div className="flex-1 relative w-full perspective-1000 hidden md:block">
            <motion.div 
              style={{ 
                rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]),
                rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5])
              }}
              className="relative z-10 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group"
            >
              <motion.img 
                src={heroImg} 
                alt="Saxophonist performing" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 [transition-duration:2s]"
                style={{
                  x: useTransform(mouseX, [-0.5, 0.5], [10, -10]),
                  y: useTransform(mouseY, [-0.5, 0.5], [10, -10])
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-60" />
              
              <motion.div 
                style={{
                  x: useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
                  y: useTransform(mouseY, [-0.5, 0.5], [-10, 10])
                }}
                className="absolute bottom-6 left-6 right-6 bg-secondary/40 dark:bg-black/40 backdrop-blur-3xl border border-white/10 p-4 md:p-6 rounded-[1.5rem] premium-shadow transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Live Performance</div>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: `${i*0.2}s` }} />)}
                  </div>
                </div>
                <div className="font-heading text-xl font-bold text-white mb-1 italic">The Sunset Afro-Soul Session</div>
                <div className="text-white/60 text-xs font-light">Featuring Kenya's premier Obsidian artists</div>
              </motion.div>
            </motion.div>
            
            {/* Ambient Light Layers */}
            <motion.div 
              style={{
                x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
                y: useTransform(mouseY, [-0.5, 0.5], [50, -50])
              }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MagneticButton({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}