
import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart3, Calendar, Wallet, User, CheckCircle2, ArrowRight as LucideArrowRight } from 'lucide-react';

const artistBookings = [
  { venue: 'Tribe Hotel – Lounge Night', date: 'Fri 25 Apr · 7:00 PM', status: 'Accepted', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  { venue: 'Wanjiku & David Wedding', date: 'Sat 3 May · 3:00 PM', status: 'Secured', color: 'text-primary bg-primary/10 border-primary/20' },
  { venue: 'Sarova Corporate Dinner', date: 'Fri 18 Apr · 6:30 PM', status: 'Paid', color: 'text-secondary/40 dark:text-white/40 bg-secondary/5 dark:bg-white/5 border-primary/10 dark:border-white/10' },
];

const clientBookings = [
  { venue: 'James Kariuki', date: 'Fri 25 Apr · 7:00 PM', status: 'In Escrow', color: 'text-primary bg-primary/10 border-primary/20' },
  { venue: 'Amina Hassan', date: 'Sat 10 May · 8:00 PM', status: 'Confirmed', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
];

export default function DashboardPreview() {
  const [view, setView] = useState('artist');
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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

  return (
    <section className="py-10 md:py-16 bg-[#f8f7ff] dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* Cinematic Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[220px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] mb-10 block">The Technical Ledger</span>
            <h2 className="font-heading text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-16 leading-[0.8] text-black dark:text-white">
              A Private Suite for <br />
              <span className="italic font-light text-primary/80">Virtuosos.</span>
            </h2>
            
            {/* View Switcher */}
            <div className="flex items-center justify-center mt-20">
              <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 p-2.5 rounded-[2.5rem] flex items-center gap-3 shadow-2xl">
                <button 
                  onClick={() => setView('artist')}
                  className={`px-10 py-4 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-700 ${view === 'artist' ? 'bg-primary text-white shadow-2xl shadow-primary/40' : 'text-black/60 dark:text-muted-foreground hover:text-black dark:hover:text-foreground hover:bg-primary/5 dark:hover:bg-white/5'}`}
                >
                  Artisan View
                </button>
                <button 
                  onClick={() => setView('client')}
                  className={`px-10 py-4 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-700 ${view === 'client' ? 'bg-primary text-white shadow-2xl shadow-primary/40' : 'text-black/60 dark:text-muted-foreground hover:text-black dark:hover:text-foreground hover:bg-primary/5 dark:hover:bg-white/5'}`}
                >
                  Client View
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parallax Dashboard Container */}
        <div 
          className="perspective-[2500px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="max-w-6xl mx-auto relative"
          >
            {/* Main Window */}
            <div className="bg-white/60 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[2rem] md:rounded-[4rem] overflow-hidden premium-shadow-lg relative z-10">
              {/* Toolbar */}
              <div className="px-6 md:px-12 py-8 border-b border-primary/5 dark:border-white/5 flex items-center justify-between bg-secondary/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center gap-8">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/10" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/10" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/10" />
                  </div>
                  <span className="text-[10px] font-black text-black/40 dark:text-white/20 uppercase tracking-[0.5em] border-l border-primary/10 dark:border-white/10 pl-8 transition-colors">
                    {view === 'artist' ? 'ARTISAN_CONSOLE // PROTOCOL_V2.4' : 'CLIENT_CONCIERGE // PROTOCOL_V1.8'}
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-4 text-[10px] font-black text-emerald-600 dark:text-emerald-400/60 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    SYSTEM_LIVE
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-inner">
                    <User className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12 lg:p-20">
                <div className="grid md:grid-cols-12 gap-10 md:gap-20">
                  {/* Left Column: Stats & Profile */}
                  <div className="md:col-span-4 space-y-12">
                    <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-secondary/[0.03] dark:bg-white/[0.03] border border-primary/10 dark:border-white/10 relative overflow-hidden group shadow-2xl">
                      <div className="relative z-10">
                        <p className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-6">
                          {view === 'artist' ? 'Portfolio Resonance' : 'Institutional Investment'}
                        </p>
                        <p className="text-5xl font-heading font-black text-black dark:text-white transition-colors mb-6">
                          {view === 'artist' ? '4.2k+' : '124k'}
                          <span className="text-lg font-light text-black/60 dark:text-muted-foreground ml-2 transition-colors">{view === 'artist' ? 'Views' : 'KES'}</span>
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest transition-colors">
                          <CheckCircle2 className="w-4 h-4" /> +18.4% GROWTH_INDEX
                        </div>
                      </div>
                      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />
                    </div>

                    <div className="space-y-6">
                      {[
                        { label: 'Technical Overview', icon: BarChart3 },
                        { label: 'Active Itinerary', icon: Calendar },
                        { label: 'Financial Ledger', icon: Wallet },
                        { label: 'Guild Settings', icon: User }
                      ].map((item, i) => (
                        <div key={item.label} className={`flex items-center gap-6 px-8 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${i === 0 ? 'bg-primary text-white shadow-2xl shadow-primary/30' : 'text-black/60 dark:text-muted-foreground hover:bg-primary/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}`}>
                          <item.icon className="w-5 h-5" />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Active Items */}
                  <div className="md:col-span-8">
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <h4 className="text-[11px] font-black text-black dark:text-white uppercase tracking-[0.5em]">ACTIVE_ENGAGEMENTS</h4>
                      </div>
                      <button className="text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all">VIEW_FULL_HISTORY</button>
                    </div>

                    <div className="space-y-8">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={view}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-8"
                        >
                          {(view === 'artist' ? artistBookings : clientBookings).map((b, i) => (
                              <motion.div 
                                key={b.venue}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-center justify-between p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-secondary/[0.02] dark:bg-white/[0.02] border border-primary/5 dark:border-white/5 hover:border-primary/40 transition-all duration-1000 group shadow-lg"
                              >
                              <div className="flex items-center gap-10">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                                  <Calendar className="w-7 h-7" />
                                </div>
                                <div>
                                  <p className="text-xl font-bold text-black dark:text-white tracking-tight mb-2 group-hover:text-primary transition-colors">{b.venue}</p>
                                  <p className="text-[11px] text-black/40 dark:text-white/30 uppercase tracking-[0.3em] font-black">{b.date}</p>
                                </div>
                              </div>
                              <div className={`text-[10px] font-black px-6 py-3 rounded-full uppercase tracking-[0.3em] border ${b.color} shadow-sm`}>
                                {b.status}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parallax Decorative Layers */}
            <motion.div 
              style={{ translateZ: 60, x: useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]), y: useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]) }}
              className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 blur-[150px] rounded-full z-0"
            />
            <motion.div 
              style={{ translateZ: 120, x: useTransform(mouseXSpring, [-0.5, 0.5], [60, -60]), y: useTransform(mouseYSpring, [-0.5, 0.5], [60, -60]) }}
              className="absolute -bottom-24 -left-24 p-12 bg-white/40 dark:bg-white/[0.05] backdrop-blur-3xl border border-primary/10 dark:border-white/20 rounded-[3rem] z-20 premium-shadow-lg hidden xl:block shadow-2xl"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] leading-none mb-2">ESCROW_SECURED</div>
                  <div className="text-[10px] font-black text-secondary/20 dark:text-white/30 uppercase tracking-[0.4em]">VERIFIED_TRANSACTION</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to="/register">
            <Button variant="ghost" className="rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] gap-6 border border-primary/10 dark:border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-1000 group text-black dark:text-white">
              Experience the Full Suite <LucideArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}