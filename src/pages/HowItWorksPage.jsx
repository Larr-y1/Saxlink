
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, CalendarCheck, Shield, CheckCircle, ArrowRight, CheckCircle2, Clock, CreditCard, Bell, Sparkles, Building2, Utensils, GlassWater, Music, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import saxBg from '@/assets/sax-detail.png';

const clientSteps = [
  { 
    num: '01', 
    title: 'Curated Selection', 
    desc: 'Browse our elite registry of verified virtuosos, filtered by genre, atmosphere, and performance history.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.circle cx="50" cy="50" r="35" className="opacity-20" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        <motion.path d="M40 50 L48 58 L65 40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
        <motion.path d="M30 30 Q50 10 70 30" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
      </svg>
    )
  },
  { 
    num: '02', 
    title: 'Elite Dossiers', 
    desc: 'Review detailed portfolios, session media, and verified testimonials. No technical surprises — everything is transparent.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.rect x="25" y="20" width="50" height="60" rx="4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1 }} />
        <motion.path d="M35 40 H65 M35 50 H65 M35 60 H50" strokeOpacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
        <motion.circle cx="70" cy="30" r="10" className="fill-primary/20" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }} />
      </svg>
    )
  },
  { 
    num: '03', 
    title: 'Direct Engagement', 
    desc: 'Submit your technical rider and event details directly to the artist. Coordinate through our secure concierge interface.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M20 50 C20 20 80 20 80 50" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.circle cx="20" cy="50" r="5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
        <motion.circle cx="80" cy="50" r="5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
        <motion.path d="M35 50 H65" strokeWidth="1" strokeDasharray="2 2" animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    )
  },
  { 
    num: '04', 
    title: 'Secured Escrow', 
    desc: 'Process payments through our institutional-grade M-Pesa vault. Funds are only released post-performance.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M50 15 L80 30 V70 L50 85 L20 70 V30 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
        <motion.path d="M40 50 L47 57 L60 43" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
        <motion.circle cx="50" cy="50" r="25" className="opacity-10" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
      </svg>
    )
  },
  { 
    num: '05', 
    title: 'Virtuoso Confirmation', 
    desc: 'Once the engagement is complete, confirm the session to release the honorarium and provide your editorial review.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M10 50 Q50 10 90 50 Q50 90 10 50" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M30 50 L45 65 L70 35" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      </svg>
    )
  },
];

const musicianSteps = [
  { 
    num: '01', 
    title: 'Guild Residency', 
    desc: 'Apply for residency by curating your bio, experience, and high-fidelity media. Each application is manually reviewed.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M30 20 H70 V80 H30 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.path d="M40 40 H60 M40 50 H60 M40 60 H55" strokeOpacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
        <motion.path d="M75 15 L85 25 M85 15 L75 25" strokeWidth="2" strokeOpacity="0.4" animate={{ rotate: 90 }} transition={{ duration: 4, repeat: Infinity }} />
      </svg>
    )
  },
  { 
    num: '02', 
    title: 'Engagement Alerts', 
    desc: 'Receive direct booking requests from verified clients. Review the technical rider and choose to accept the engagement.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M20 30 H80 V70 H20 Z" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} />
        <motion.path d="M50 20 V30 M45 25 L55 25" initial={{ y: -10 }} animate={{ y: 0 }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="50" cy="50" r="3" className="fill-primary" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      </svg>
    )
  },
  { 
    num: '03', 
    title: 'Guaranteed Payouts', 
    desc: 'Upon acceptance, the client secures the funds. Perform with the confidence that your honorarium is locked in escrow.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.path d="M30 50 C30 30 70 30 70 50 C70 70 30 70 30 50" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
        <motion.path d="M40 50 L60 50 M50 40 L50 60" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} />
        <motion.circle cx="50" cy="50" r="35" strokeDasharray="5 5" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
      </svg>
    )
  },
  { 
    num: '04', 
    title: 'Artisan Console', 
    desc: 'Mark the performance as complete in your professional dashboard to trigger the automated 24-hour payout process.',
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.rect x="20" y="30" width="60" height="40" rx="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.path d="M40 70 L45 80 H55 L60 70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        <motion.path d="M35 45 H65" strokeWidth="2" strokeLinecap="round" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>
    )
  },
];

const guarantees = [
  { title: 'Zero Agent Dependencies', desc: 'No middlemen. Deal directly with clients through our elite digital infrastructure.', icon: Sparkles },
  { title: 'Secured Escrow Vault', desc: 'Financial protection for both parties. No gig is performed without secured funds.', icon: Shield },
  { title: 'Verified Editorial Reviews', desc: 'Build your prestige through verified client feedback and session ratings.', icon: Star },
  { title: '24/7 Concierge Support', desc: 'Dedicated institutional support for any technical or logistical inquiries.', icon: Bell },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="pt-48 relative z-10">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-px bg-primary" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Operational Manual</span>
                </div>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
                  How SaxLink <br />
                  <span className="italic font-light text-primary/80">Actually Works.</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-white/80 dark:text-white/60 font-light leading-relaxed max-w-sm italic mb-4"
              >
                "Redefining the digital infrastructure of live music through absolute technical precision and world-class artistry."
              </motion.p>
            </div>
          </div>
        </section>

        {/* FOR CLIENTS */}
        <section className="py-32 md:py-64 bg-[#fcfaff] dark:bg-secondary text-secondary-foreground transition-colors duration-1000">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-40 items-start mb-40">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky lg:top-40 flex-1"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-px bg-primary/60" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Client Journey</span>
                </div>
                
                <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.8] tracking-tighter mb-12 transition-colors">
                  Booking an <br />
                  <span className="italic font-light text-primary/80">Artisan.</span>
                </h2>
                
                <p className="text-2xl text-black dark:text-white/80 font-medium md:font-light leading-relaxed max-w-xl italic transition-colors">
                  "Institutional-grade discovery and secure payments for the most prestigious events."
                </p>
              </motion.div>

              <div className="flex-[1.5] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {clientSteps.map((s, i) => (
                  <motion.div key={s.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative">
                    <div className="relative bg-white dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 overflow-hidden hover:border-primary/40 transition-all duration-1000 h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8 opacity-[0.05] group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                        {s.illustration}
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-secondary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center text-primary mb-10 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                        <span className="font-mono text-sm font-black tracking-normal">{s.num}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-6 group-hover:text-primary transition-colors leading-tight relative z-10">{s.title}</h3>
                      <p className="text-base text-gray-900 dark:text-white/80 leading-relaxed font-semibold md:font-light relative z-10 transition-colors">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOR MUSICIANS */}
        <section className="py-32 md:py-64 bg-white dark:bg-background transition-colors duration-1000">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-40 items-start">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky lg:top-40 flex-1"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-px bg-primary/60" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Artisan Career</span>
                </div>
                
                <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.8] tracking-tighter mb-12 transition-colors text-right">
                  Control Your <br />
                  <span className="italic font-light text-primary/80">Destiny.</span>
                </h2>
                
                <p className="text-2xl text-black dark:text-white/80 font-medium md:font-light leading-relaxed max-w-xl ml-auto text-right italic transition-colors">
                  "Absolute transparency and secured payouts. Stop chasing checks, start performing."
                </p>
              </motion.div>

              <div className="flex-[1.5] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {musicianSteps.map((s, i) => (
                  <motion.div key={s.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative">
                    <div className="relative bg-[#f8f7ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 overflow-hidden hover:border-primary/40 transition-all duration-1000 h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8 opacity-[0.05] group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                        {s.illustration}
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-secondary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center text-primary mb-10 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                        <span className="font-mono text-sm font-black tracking-normal">{s.num}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-6 group-hover:text-primary transition-colors leading-tight relative z-10">{s.title}</h3>
                      <p className="text-base text-gray-900 dark:text-white/80 leading-relaxed font-semibold md:font-light relative z-10 transition-colors">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Status Flow */}
        <section className="py-32 md:py-48 bg-[#faf9ff] dark:bg-secondary transition-colors duration-1000 overflow-hidden">
          <div className="max-w-[90rem] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-40">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">The Technical Ledger</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter mb-12">The Elite <span className="italic font-light text-primary">Sequence.</span></h2>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 hidden lg:block -translate-y-12" />
              
              {[
                { label: 'Pending', color: 'text-amber-800 dark:text-amber-600 border-amber-600/20 bg-amber-600/5', desc: 'Registry sync initiated' },
                { label: 'Accepted', color: 'text-blue-800 dark:text-blue-600 border-blue-600/20 bg-blue-600/5', desc: 'Technical rider confirmed' },
                { label: 'Payment Secured', color: 'text-purple-800 dark:text-purple-600 border-purple-600/20 bg-purple-600/5', desc: 'Funds held in escrow vault' },
                { label: 'Completed', color: 'text-emerald-800 dark:text-emerald-600 border-emerald-600/20 bg-emerald-600/5', desc: 'Session successfully executed' },
                { label: 'Paid Out', color: 'text-primary border-primary/20 bg-primary/5', desc: 'Automated disbursement' },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 1 }}
                  className={`relative z-10 border rounded-[2.5rem] p-10 text-center w-full lg:w-64 backdrop-blur-xl ${s.color} transition-all duration-700 hover:scale-105`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current mx-auto mb-6 animate-pulse" />
                  <p className="text-lg font-black uppercase tracking-widest mb-3 leading-none">{s.label}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-32 md:py-64 bg-white dark:bg-background">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-40 items-center">
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">Institutional Integrity</span>
                <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.8] tracking-tighter mb-12">The SaxLink <br /><span className="italic font-light text-primary/80">Guarantee.</span></h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guarantees.map((g, i) => (
                  <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 1 }}
                    className="bg-[#f8f7ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 hover:border-primary/40 transition-all duration-1000">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary">
                      <g.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-black dark:text-white mb-4 leading-tight">{g.title}</h3>
                    <p className="text-sm text-gray-900 dark:text-white/60 leading-relaxed font-semibold md:font-light italic transition-colors">"{g.desc}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-48 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 pointer-events-none">
            <img src={saxBg} alt="" className="w-full h-full object-cover opacity-10 grayscale contrast-150 rotate-12 scale-125" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
          
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">Ready to Enter <br /><span className="italic font-light text-primary/80">The Guild?</span></h2>
            <p className="text-2xl text-white/60 font-light leading-relaxed mb-20 italic">"Join hundreds of clients and musicians already using SaxLink to create unforgettable musical experiences."</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/browse">
                <Button className="bg-primary text-white rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all duration-700 shadow-2xl">
                  Browse Musicians <ArrowRight className="w-5 h-5 ml-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-white/20 text-white rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700">
                  Join as Musician
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
