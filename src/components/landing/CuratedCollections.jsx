import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Utensils, GlassWater, Music, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const occasions = [
  {
    title: 'Weddings',
    id: 'OCCASION_01',
    desc: 'Make your ceremony unforgettable with live saxophone music.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    icon: Heart,
  },
  {
    title: 'Corporate Events',
    id: 'OCCASION_02',
    desc: 'Elevate your brand with sophisticated live entertainment.',
    img: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=800',
    icon: Building2,
  },
  {
    title: 'Hotels & Restaurants',
    id: 'OCCASION_03',
    desc: 'Create an atmosphere guests will remember and return for.',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    icon: Utensils,
  },
  {
    title: 'Private Parties',
    id: 'OCCASION_04',
    desc: 'Turn any gathering into an extraordinary celebration.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    icon: GlassWater,
  },
  {
    title: 'Church Services',
    id: 'OCCASION_05',
    desc: 'Spiritual and uplifting performances for your congregation.',
    img: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles,
  },
  {
    title: 'Concerts',
    id: 'OCCASION_06',
    desc: 'Headline acts and supporting performances for any stage.',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800',
    icon: Music,
  },
];

export default function CuratedCollections() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 md:py-64 bg-[#f8f7ff] dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-primary/60" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em]">For Every Occasion</span>
            </div>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-[0.8] mb-10 transition-colors">
              Music for <br />
              <span className="italic font-light text-primary/80">Every Moment.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-col gap-10 lg:items-end">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl text-black dark:text-white/60 font-medium md:font-light leading-relaxed max-w-sm italic transition-colors"
            >
              Whether it's an intimate dinner or a grand celebration, SaxLink connects you with the perfect saxophonist for your event.
            </motion.p>

            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-16 h-16 rounded-full border border-primary/20 dark:border-white/20 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 premium-shadow bg-white dark:bg-white/5 shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full border border-primary/20 dark:border-white/20 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 premium-shadow bg-white dark:bg-white/5 shadow-sm active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-10 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
        >
          {occasions.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[320px] md:w-[480px] h-[600px] group relative rounded-[3rem] overflow-hidden border border-primary/5 dark:border-white/5 premium-shadow hover:border-primary/40 transition-all duration-700 cursor-pointer snap-start"
            >
              <img 
                src={o.img} 
                alt={o.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[2.5s] ease-out group-hover:scale-110" 
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 dark:opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-black text-white/60 tracking-[0.4em]">{o.id}</span>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-primary transition-all duration-700">
                    <o.icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-500">{o.title}</h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {o.desc}
                  </p>
                  <div className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em]">
                    Discover <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
