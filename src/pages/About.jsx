
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import { Sparkles, ShieldCheck, Music2, Globe, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-1000">
      <SEO 
        title="Our Manifesto" 
        description="Learn about SaxLink's mission to redefine musical artistry and provide elite infrastructure for world-class saxophonists."
      />
      {/* HERO SECTION - The Manifesto */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-[2px] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1525994886773-080587e161c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Saxophone Detail" 
            className="w-full h-full object-cover grayscale opacity-20 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.8em]">The Virtuoso Manifesto</span>
              <div className="w-16 h-px bg-primary/60" />
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-black text-black dark:text-white leading-[0.8] tracking-tighter mb-12">
              Artistry <br />
              <span className="italic font-light text-primary/80">Redefined.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-black/60 dark:text-white/40 font-medium md:font-light leading-relaxed max-w-4xl mx-auto italic">
              "SaxLink exists at the intersection of technical precision and raw musical soul. We don't just book musicians; we curate experiences for the Obsidian Tier."
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION - The Infrastructure */}
      <section className="py-20 md:py-40 bg-[#fcfaff] dark:bg-secondary/20 transition-colors duration-1000">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-px bg-primary" />
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Our Core Mission</span>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-black dark:text-white leading-[0.9] tracking-tighter mb-8">
                The Infrastructure <br />
                <span className="italic font-light text-primary/80">of Excellence.</span>
              </h2>
              <div className="space-y-8 text-lg text-black/70 dark:text-white/60 leading-relaxed font-medium md:font-light italic">
                <p>
                  For too long, world-class saxophonists have been hidden behind outdated agencies and opaque booking processes. SaxLink was born to break those barriers.
                </p>
                <p>
                  Our mission is to provide the elite digital infrastructure that allows virtuosic talent to connect directly with those who value it most. We believe in absolute transparency, secured honorariums, and the preservation of musical integrity.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {[
                { icon: Globe, title: "Global Reach", val: "15+ Cities" },
                { icon: ShieldCheck, title: "Secured Vault", val: "100% Escrow" },
                { icon: Music2, title: "Elite Roster", val: "Top 1%" },
                { icon: Heart, title: "Artisan First", val: "Zero Fees" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="bg-white dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-700 shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">{item.title}</h4>
                  <p className="text-2xl font-heading font-black text-black dark:text-white tracking-tighter">{item.val}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE VETTING PROCESS - The Top 1% Standard */}
      <section className="py-20 md:py-40 bg-white dark:bg-background overflow-hidden transition-colors duration-1000">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.8em] mb-8 block">The Technical Standard</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter mb-12">
                The Obsidian Tier <br />
                <span className="italic font-light text-primary/80">Vetting Process.</span>
              </h2>
              <p className="text-xl text-black/60 dark:text-white/40 font-medium md:font-light max-w-2xl mx-auto italic">
                We receive thousands of applications, but only the top 1% achieve Residency status. Our vetting protocol is exhaustive and uncompromising.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                title: "Technical Mastery", 
                desc: "An exhaustive review of improvisational theory, tone control, and repertoire breadth by our board of master musicians." 
              },
              { 
                step: "02", 
                title: "Performance History", 
                desc: "We verify session history across global venues, ensuring each artist has the professional etiquette required for elite residencies." 
              },
              { 
                step: "03", 
                title: "Media Integrity", 
                desc: "Only raw, unedited performance media is accepted. We ensure the sound you hear online is the exact sound you get in person." 
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group p-12 bg-[#f8f7ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] transition-all duration-1000 hover:border-primary/40"
              >
                <div className="absolute top-10 right-12 text-6xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors">{item.step}</div>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6 tracking-tight">{item.title}</h3>
                <p className="text-black/60 dark:text-white/40 leading-relaxed font-medium md:font-light italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY - Born from Midnight */}
      <section className="py-20 md:py-40 bg-[#0a0a0c] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-px bg-primary/60" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Origin Story</span>
                </div>
                <h2 className="font-heading text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12">
                  Born from the <br />
                  <span className="italic font-light text-primary/80">Midnight Sessions.</span>
                </h2>
                <div className="space-y-8 text-xl text-white/40 font-light leading-relaxed italic">
                  <p>
                    SaxLink wasn't built in a boardroom. It was conceived in the dim lights of late-night jazz clubs and the high-pressure environments of private galas.
                  </p>
                  <p>
                    We saw the friction between elite performers and the clients who needed them. We saw musicians waiting weeks for payments and clients worrying about the technical reliability of their performers.
                  </p>
                  <p>
                    In 2024, we decided to build the solution. A platform that treats music with the institutional respect it deserves.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[4rem] overflow-hidden aspect-square shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Live Session" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12">
                  <div className="text-[11px] font-black text-primary uppercase tracking-widest mb-2">Location: Nairobi</div>
                  <div className="text-lg font-bold tracking-tight text-white/80 italic">"The first session that started it all."</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-40 bg-white dark:bg-background transition-colors">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter mb-12">
              Ready to Witness <br />
              <span className="italic font-light text-primary/80">The Standard?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/browse">
                <Button className="h-20 rounded-full px-16 text-[12px] font-black uppercase tracking-[0.4em] bg-primary text-white hover:scale-105 transition-all shadow-2xl">
                  Explore The Roster <ArrowRight className="ml-4 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="h-20 rounded-full px-16 text-[12px] font-black uppercase tracking-[0.4em] border-primary/20 dark:border-white/10 text-black dark:text-white hover:bg-primary hover:text-white transition-all">
                  Join The Guild
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
