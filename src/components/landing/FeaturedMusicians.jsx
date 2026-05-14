import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, BadgeCheck, MapPin, ArrowRight as LucideArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MUSICIANS } from '@/lib/musicians-data';

const genres = ['All', 'Jazz', 'Classical', 'Afrobeat', 'Neo-Soul', 'Bossa Nova'];

const ArtistCard = forwardRef(({ artist }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      className="flex-shrink-0 w-[320px] md:w-[450px] h-[500px] md:h-[650px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <Link to={`/musician/${artist.id}`} className="group block relative h-full">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full rounded-[2.5rem] overflow-hidden border border-primary/10 dark:border-white/5 premium-shadow-lg bg-white dark:bg-secondary transition-all duration-700 group-hover:border-primary/30"
        >
          {/* Main Portrait */}
          <div className="absolute inset-0 z-0 bg-slate-100 dark:bg-secondary">
            <img 
              src={artist.img} 
              alt={artist.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" 
              loading="lazy"
            />
            {/* Cinematic Overlay - Dynamic based on theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 dark:opacity-60 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Premium Badge: Verified Artist */}
          <div className="absolute top-8 left-8 z-20">
            <div className="flex items-center gap-3">
              <div className="bg-black/20 backdrop-blur-xl border border-white/20 p-2.5 rounded-full text-white">
                <BadgeCheck className="w-4 h-4" />
              </div>
              <div className="bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                Elite Residency
              </div>
            </div>
          </div>

          {/* Artist Dossier: Backstage Pass (Content) */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 translate-z-20">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{artist.genre.split(' ')[0]} Specialist</span>
            </div>

            <h3 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight mb-6 group-hover:text-primary transition-colors duration-500">
              {artist.name}
            </h3>

            {/* Expanded Info on Hover */}
            <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
              <div className="flex items-center justify-between border-t border-white/20 pt-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{artist.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <Star className="w-3 h-3 fill-primary" />
                    <span className="text-xs font-black tracking-tighter text-white">{artist.rating} <span className="text-white/60 font-normal">Expert Rating</span></span>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-primary/60 flex items-center justify-center text-primary bg-white/10 backdrop-blur-md group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100" height="100" filter="url(#noise)" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
});

ArtistCard.displayName = 'ArtistCard';

export default function FeaturedMusicians() {
  const [activeGenre, setActiveGenre] = useState('All');
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450; // Updated size
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filtered = activeGenre === 'All'
    ? MUSICIANS.slice(0, 8) // Show more for carousel
    : MUSICIANS.filter((m) => m.genre.toLowerCase().includes(activeGenre.toLowerCase()));

  return (
    <section id="musicians" className="py-10 md:py-16 bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-[#f8f7ff] dark:bg-transparent pointer-events-none transition-colors duration-1000" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">The Elite Roster</span>
            </div>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-foreground dark:text-white tracking-tighter leading-none mb-8 transition-colors">
              Curated <span className="italic font-light text-primary">Artistry.</span>
            </h2>
            <p className="text-lg text-foreground dark:text-white/60 font-medium md:font-light leading-relaxed transition-colors">
              We vet thousands of performers to bring you only the top 1% of saxophonists worldwide. Discover voices that redefine elegance.
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeGenre === g 
                      ? 'bg-primary text-white shadow-2xl shadow-primary/40' 
                      : 'bg-secondary/10 dark:bg-card/40 text-black/60 dark:text-white/40 border border-primary/10 dark:border-white/5 hover:border-primary/40 hover:text-primary dark:hover:text-white transition-colors'
                  }`}
                >
                  {g}
                </button>
              ))}
            </motion.div>

            {/* Premium Navigation Arrows */}
            <div className="flex gap-4 justify-end">
              <button 
                onClick={() => scroll('left')}
                className="w-16 h-16 rounded-full border border-primary/10 dark:border-white/5 flex items-center justify-center text-black dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group premium-shadow"
              >
                <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full border border-primary/10 dark:border-white/5 flex items-center justify-center text-black dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group premium-shadow"
              >
                <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-smooth"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((m, idx) => (
                <motion.div 
                  key={m.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="snap-center"
                >
                  <ArtistCard artist={m} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Subtle Gradient Fades for Carousel */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden lg:block" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden lg:block" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="mb-12 flex -space-x-4">
            {MUSICIANS.slice(0, 6).map((m) => (
              <div key={m.id} className="w-16 h-16 rounded-full border-4 border-white dark:border-background overflow-hidden shadow-2xl transition-all hover:scale-110 hover:z-10">
                <img src={m.img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-white dark:border-background bg-primary flex items-center justify-center text-white text-xs font-bold shadow-2xl transition-colors">
              + 2
            </div>
          </div>
          
          <Link to="/browse">
            <Button className="group relative overflow-hidden bg-secondary text-white dark:bg-white dark:text-black rounded-full px-16 py-10 text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all duration-700 shadow-2xl">
              <span className="relative z-10 flex items-center gap-4 text-black dark:text-black">
                Enter The Artist Registry <LucideArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}