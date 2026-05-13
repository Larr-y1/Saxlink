import { motion } from 'framer-motion';
import { BadgeCheck, Quote, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "SaxLink has completely transformed how we curate the atmosphere for our hotel lounge. The professionalism is unmatched, and our guests have been thoroughly enthralled.",
    name: 'Sarah Mutua',
    role: 'Events Manager, Tribe Hotel',
    venue: 'TRIBE HOTEL',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    artist: 'James Kariuki'
  },
  {
    quote: "Before this platform, I was dependent on unpredictable middlemen. Now I manage my own career with absolute precision and security. It is the tool I have always needed.",
    name: 'James Kariuki',
    role: 'Elite Residency Artist',
    venue: 'ARTIST PERSPECTIVE',
    img: 'https://images.unsplash.com/photo-1528642463367-7977457d5983?auto=format&fit=crop&q=80&w=200',
    artist: 'Portfolio Access'
  },
  {
    quote: "The direct connection to Kenya's finest musicians saved us hours of coordination. Transparent, secure, and incredibly efficient from start to finish.",
    name: 'David Njoroge',
    role: 'CEO, Horizon Events',
    venue: 'HORIZON EVENTS',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    artist: 'Grace Wambui'
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-64 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[220px] rounded-full" />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Voices of the Guild</span>
              <div className="w-16 h-px bg-primary/60" />
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tighter leading-[0.8] mb-12">
              Echoes of <br />
              <span className="italic font-light text-primary/80">Excellence.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl italic">
              "Distinguished venues and elite artists speak on the transformative power of a professional infrastructure."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-16 overflow-hidden hover:border-primary/40 transition-all duration-1000 premium-shadow flex flex-col shadow-2xl">
                
                {/* Institutional Seal */}
                <div className="absolute top-0 right-0 w-48 h-48 -translate-y-12 translate-x-12 opacity-[0.05] group-hover:opacity-100 group-hover:scale-110 transition-all [transition-duration:2s] ease-out">
                  <BadgeCheck className="w-full h-full text-primary" />
                </div>

                <div className="flex items-center justify-between mb-16 relative z-10">
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_10px_rgba(var(--primary),0.3)]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{t.venue}</span>
                </div>
                
                <Quote className="w-16 h-16 text-primary/10 mb-12 transform -translate-x-3 group-hover:text-primary/20 transition-colors duration-700" />
                
                <p className="font-heading text-2xl md:text-3xl text-foreground leading-[1.3] font-light mb-16 flex-1 group-hover:text-primary transition-colors duration-700 italic">
                  "{t.quote}"
                </p>
                
                <div className="pt-16 border-t border-white/5 flex flex-col gap-10">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-[2.5rem] border-2 border-primary/20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl shrink-0">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover scale-110" />
                    </div>
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">{t.name}</h4>
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em] mt-1.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Artist Dossier Link */}
                  <div className="flex items-center justify-between px-8 py-6 rounded-[2rem] bg-white/5 border border-white/5 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-700 shadow-inner">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-1">Performance by</span>
                      <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">{t.artist}</span>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                      <ChevronRight className="w-5 h-5" />
                    </div>
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
