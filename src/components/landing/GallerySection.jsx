

import { motion } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';

const galleryItems = [
  { 
    id: 'SESSION_01',
    src: 'https://res.cloudinary.com/my-law-firm/video/upload/v1778705140/My_favorite_gig_Turning_milestone_moments_into_unforgettable_memories_with_a_custom_saxophone_su_pzdabb.mp4', 
    title: 'Midnight Jazz Residency',
    venue: 'TRIBE HOTEL',
    vibe: 'SOPHISTICATED // DEEP SOUL',
    isLarge: true,
    isVideo: true
  },
  { 
    id: 'SESSION_02',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', 
    title: 'The Golden Hour Wedding',
    venue: 'WINDSOR GOLF CLUB',
    vibe: 'ROMANTIC // ETHEREAL'
  },
  { 
    id: 'SESSION_03',
    src: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=800', 
    title: 'Corporate Gala Ensemble',
    venue: 'KEMPINSKI NAIROBI',
    vibe: 'POLISHED // HIGH-ENERGY'
  },
  { 
    id: 'SESSION_04',
    src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200', 
    title: 'Sun-Drenched Garden Party',
    venue: 'PRIVATE RESIDENCE',
    vibe: 'LAID-BACK // BOSSA NOVA',
    isWide: true 
  },
  { 
    id: 'SESSION_05',
    src: 'https://res.cloudinary.com/my-law-firm/video/upload/v1778704875/Good_times_jammin_alongside_davidstephenkoz_geraldalbright_richardelliotmusic_mindiabair_g_tso2kx.mp4', 
    title: 'Acoustic Solo Session',
    venue: 'SANKARA ROOFTOP',
    vibe: 'INTIMATE // NEO-SOUL',
    isVideo: true
  },
];

export default function GallerySection() {
  return (
    <section className="py-10 md:py-16 bg-[#fcfaff] dark:bg-secondary text-secondary-foreground relative overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[10px] md:text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Visual Repertoire</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 transition-colors">
              Moments of Pure <br />
              <span className="italic font-light text-primary/80">Resonance.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-black/60 dark:text-white/40 font-medium md:font-light leading-relaxed max-w-sm italic transition-colors"
          >
            "Capturing the atmosphere where world-class talent meets Kenya's most prestigious stages."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 auto-rows-[400px]">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 premium-shadow hover:border-primary/40 transition-all duration-1000 ${
                item.isLarge ? 'sm:col-span-2 sm:row-span-2' : 
                item.isWide ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Media with Magnetic Focus Effect */}
              <div className="absolute inset-0 z-0">
                {item.isVideo ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.muted = false}
                    onMouseLeave={(e) => e.currentTarget.muted = true}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all [transition-duration:3s] ease-out cursor-pointer"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all [transition-duration:3s] ease-out" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
              </div>

              {/* Premium Metadata Callouts */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black text-white/40 tracking-[0.5em]">{item.id}</span>
                  <div className="w-16 h-16 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-primary" />
                    <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">{item.venue}</span>
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">
                      {item.vibe}
                    </span>
                    <div className="flex-grow h-px bg-white/5" />
                  </div>
                </div>
              </div>

              {/* Play Indicator / Interactive Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/90 text-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 z-20 shadow-[0_0_50px_rgba(var(--primary),0.5)]">
                <Play className="w-10 h-10 fill-current ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}