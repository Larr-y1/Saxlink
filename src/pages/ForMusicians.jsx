
import { motion } from 'framer-motion';
import { BadgeCheck, Shield, BarChart3, ArrowRight, Music, DollarSign, Calendar, Star, CheckCircle, XCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">For Saxophonists</span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">
                Your Career,<br /><span className="text-gradient italic font-normal">On Your Terms.</span>
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-lg">
                SaxLink was built specifically for saxophonists tired of middlemen, underpayment, and inconsistent gigs. Join Kenya's first structured saxophone booking platform.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/early-access"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-sm gap-2">Create Your Profile <ArrowRight className="w-4 h-4" /></Button></Link>
                <Link to="/how-it-works"><Button variant="outline" className="rounded-full px-8 py-6 text-sm">See How It Works</Button></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:ml-auto">
                <img src={IMG} alt="Saxophonist" className="w-full h-full object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 bg-primary text-primary-foreground rounded-2xl px-7 py-5 shadow-2xl shadow-primary/30">
                <div className="text-3xl font-heading font-bold">KES 8,500</div>
                <div className="text-sm text-primary-foreground/70">You keep per KES 10K gig</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">The Problem We Solve</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Before vs. After SaxLink</h2>
            </motion.div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.05}
                  className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-2xl p-5">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{p.before}</p>
                  </div>
                  <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{p.after}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Features</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Everything You Get</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earnings calculator */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Earnings</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">What You Earn</h2>
              <p className="text-muted-foreground mt-3">SaxLink takes 15% per successful booking. That's it — no monthly fees, no sign-up costs.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-secondary/30 border-b border-border grid grid-cols-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span>Event Type</span><span className="text-center">Client Pays</span><span className="text-right">You Receive</span>
              </div>
              {earningExample.map((e, i) => (
                <motion.div key={e.event} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="px-6 py-4 border-b border-border last:border-0 grid grid-cols-3 items-center">
                  <span className="text-sm text-foreground font-medium">{e.event}</span>
                  <span className="text-sm text-center text-muted-foreground">KES {e.price.toLocaleString()}</span>
                  <span className="text-sm text-right font-bold text-primary">KES {e.net.toLocaleString()}</span>
                </motion.div>
              ))}
              <div className="px-6 py-4 bg-primary/5 border-t border-primary/20">
                <p className="text-xs text-muted-foreground text-center">4 events/month = <strong className="text-foreground">KES 31,875+ in your pocket</strong></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-5xl mb-6">"</div>
              <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed italic">
                I used to rely on event planners who'd offer KES 3,000 for a full evening. SaxLink changed everything — I set my own rate, clients come to me, and I get paid the same day.
              </p>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">JK</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">James Kariuki</p>
                  <p className="text-xs text-muted-foreground">Jazz & Afro-Soul · Nairobi · 48 bookings</p>
                </div>
                <div className="flex gap-0.5 ml-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto px-6 text-center">
            <Music className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Ready to Join SaxLink?</h2>
            <p className="text-muted-foreground mt-4">Be one of the first verified saxophonists on the platform. Early sign-ups get priority visibility at launch.</p>
            <Link to="/early-access">
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-sm gap-2">
                Apply as a Musician <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}