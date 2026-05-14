
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import { BadgeCheck, Shield, BarChart3, ArrowRight as LucideArrowRight, Music, DollarSign, Calendar, Star, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
};

const IMG = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200';

const benefits = [
  { icon: BadgeCheck, title: 'Verified Profile', desc: 'Get a professional, verified profile that puts you in front of hotels, restaurants, event planners, and private clients actively looking to book.' },
  { icon: DollarSign, title: 'Fair, Secure Payments', desc: 'Set your own price. Client pays via M-Pesa. Funds are held safely until your event is done — then released directly to you. No chasing invoices.' },
  { icon: Calendar, title: 'Structured Booking System', desc: 'Every gig comes with clear event type, date, time, location, and client details upfront. No more vague WhatsApp conversations.' },
  { icon: BarChart3, title: 'Earnings Dashboard', desc: 'Track every booking, see your payment status (Pending → Accepted → Secured → Paid), and request payouts from one clean dashboard.' },
  { icon: Star, title: 'Build Your Reputation', desc: 'After every event, clients rate and review you. A strong rating gives you more visibility and more bookings — a genuine merit system.' },
  { icon: Shield, title: 'Admin Dispute Protection', desc: 'If anything goes wrong, SaxLink\'s admin team steps in to mediate fairly. You\'re never left on your own.' },
];

const problems = [
  { before: 'Depending on agents who take big cuts', after: 'Direct client contact — only 15% platform fee on success' },
  { before: 'Inconsistent gigs, unpredictable income', after: 'Steady stream of booking requests to your dashboard' },
  { before: 'Underpayment with no structure', after: 'You set your own rates, clients pay upfront' },
  { before: 'Chasing payments after events', after: 'M-Pesa escrow — payment is secured before you perform' },
  { before: 'No professional profile or visibility', after: 'Searchable, verified profile with your bio, photos & reviews' },
];

const earningExample = [
  { event: 'Hotel Lounge Night', price: 8000, net: 6800 },
  { event: 'Wedding Ceremony', price: 12000, net: 10200 },
  { event: 'Corporate Dinner', price: 10000, net: 8500 },
  { event: 'Private Party', price: 7500, net: 6375 },
];

export default function ForMusicians() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      <SEO 
        title="For Saxophonists" 
        description="Join Kenya's first structured saxophone booking platform. Set your own rates, get verified, and manage your bookings from one dashboard."
      />
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Navbar />
      <div className="pt-24 relative z-10">
        {/* Hero */}
        <section className="relative py-10 md:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-px bg-primary" />
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">For Saxophonists</span>
              </div>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
                Your Career, <br />
                <span className="italic font-light text-primary/80">On Your Terms.</span>
              </h1>
              <p className="text-2xl text-white/80 dark:text-white/60 font-light leading-relaxed max-w-lg italic mb-12">
                "SaxLink was built specifically for saxophonists tired of middlemen, underpayment, and inconsistent gigs. Join Kenya's first structured saxophone booking platform."
              </p>
              <div className="flex flex-wrap gap-8">
                <Link to="/register">
                  <Button className="bg-primary text-white rounded-full px-12 py-8 text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all duration-700 shadow-2xl">
                    Create Your Profile <LucideArrowRight className="w-5 h-5 ml-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white/20 text-white rounded-full px-12 py-8 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative">
              <div className="rounded-[4rem] overflow-hidden aspect-[3/4] max-w-md mx-auto lg:ml-auto relative group">
                <img src={IMG} alt="Saxophonist" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
                className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 shadow-2xl">
                <div className="text-4xl font-heading font-black text-white">KES 8,500</div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mt-2">Net per KES 10K Engagement</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="py-10 md:py-16 bg-[#fcfaff] dark:bg-secondary text-secondary-foreground transition-colors duration-1000">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">The Industrial Evolution</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.8] tracking-tighter transition-colors">Before vs <br /><span className="italic font-light text-primary">SaxLink.</span></h2>
            </motion.div>
            <div className="max-w-6xl mx-auto space-y-8">
              {problems.map((p, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.05}
                  className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="flex items-center gap-8 bg-destructive/5 border border-destructive/20 rounded-[3rem] p-10 group transition-all duration-500 hover:bg-destructive/10">
                    <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <p className="text-lg text-gray-900 dark:text-white/80 font-bold md:font-medium italic leading-relaxed">"{p.before}"</p>
                  </div>
                  <div className="flex items-center gap-8 bg-primary/5 border border-primary/20 rounded-[3rem] p-10 group transition-all duration-500 hover:bg-primary/10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-black dark:text-white font-black italic leading-relaxed">"{p.after}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 md:py-16 bg-white dark:bg-background transition-colors duration-1000">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">Artisan Infrastructure</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.8] tracking-tighter">Everything <br /><span className="italic font-light text-primary">You Get.</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="bg-[#f8f7ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-12 hover:border-primary/40 transition-all duration-1000 group flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <b.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-6 group-hover:text-primary transition-colors leading-tight">{b.title}</h3>
                  <p className="text-base text-gray-900 dark:text-white/80 leading-relaxed font-semibold md:font-light italic transition-colors">"{b.desc}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earnings calculator */}
        <section className="py-10 md:py-16 bg-[#fcfaff] dark:bg-secondary text-secondary-foreground transition-colors duration-1000">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">The Honorarium Ledger</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.8] tracking-tighter">What <br /><span className="italic font-light text-primary">You Earn.</span></h2>
              <p className="text-2xl text-gray-900 dark:text-white/60 font-semibold md:font-light mt-12 italic max-w-2xl mx-auto">"SaxLink takes a 15% technical fee per successful booking. Zero monthly overhead."</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
              className="bg-white dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
              <div className="px-10 py-8 bg-primary/5 dark:bg-white/5 border-b border-primary/10 dark:border-white/10 grid grid-cols-3 text-[10px] font-black text-primary uppercase tracking-[0.5em]">
                <span>Engagement Type</span><span className="text-center">Client Pays</span><span className="text-right">You Receive</span>
              </div>
              {earningExample.map((e, i) => (
                <motion.div key={e.event} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="px-10 py-10 border-b border-primary/5 dark:border-white/5 last:border-0 grid grid-cols-3 items-center hover:bg-primary/5 dark:hover:bg-white/5 transition-colors duration-500">
                  <span className="text-xl text-black dark:text-white font-black italic">{e.event}</span>
                  <span className="text-xl text-center text-gray-700 dark:text-white/60 font-bold">KES {e.price.toLocaleString()}</span>
                  <span className="text-3xl text-right font-heading font-black text-primary">KES {e.net.toLocaleString()}</span>
                </motion.div>
              ))}
              <div className="px-10 py-12 bg-primary/5 dark:bg-white/5 border-t border-primary/10 dark:border-white/10 text-center">
                <p className="text-lg text-gray-900 dark:text-white/60 font-semibold italic">A standard 4-engagement month = <strong className="text-black dark:text-white font-black text-2xl not-italic ml-2 tracking-tighter">KES 31,875+ Secured Income</strong></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-10 md:py-16 bg-white dark:bg-background transition-colors duration-1000">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-8xl text-primary/20 font-serif leading-none mb-12 group-hover:scale-110 transition-transform duration-1000">"</div>
              <p className="font-heading text-3xl md:text-5xl text-black dark:text-white leading-[1.1] font-black tracking-tighter italic mb-16">
                I used to rely on event planners who'd offer KES 3,000 for a full evening. SaxLink changed everything — I set my own rate, clients come to me, and I get paid the same day.
              </p>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">JK</span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-2xl font-black text-black dark:text-white leading-none mb-2">James Kariuki</p>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Jazz & Afro-Soul · Nairobi · 48 bookings</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-primary text-primary animate-pulse" style={{ animationDelay: `${s * 0.2}s` }} />)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 pointer-events-none">
            <Music className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-white/5 rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-24 h-24 bg-primary/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-primary/40 backdrop-blur-3xl animate-bounce-slow">
              <Music className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">Enter The <br /><span className="italic font-light text-primary/80">Artisan Guild.</span></h2>
            <p className="text-2xl text-white/60 font-light leading-relaxed mb-20 italic">"Be one of the first verified saxophonists on the platform. Early sign-ups get priority visibility at launch."</p>
            <Link to="/register">
              <Button className="bg-primary text-white rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all duration-700 shadow-2xl">
                Apply for Residency <LucideArrowRight className="w-5 h-5 ml-4" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}