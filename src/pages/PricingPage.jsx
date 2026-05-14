
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import { Check, ArrowRight as LucideArrowRight, Shield, DollarSign, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import saxBg from '@/assets/sax-detail.png';

const plans = [
  {
    label: 'The Client',
    tier: 'Obsidian Access',
    price: 'Free',
    subtitle: 'Absolute transparency. No hidden registration fees.',
    features: [
      'Search our elite registry of verified saxophonists',
      'View detailed artisan dossiers & reviews',
      'Direct booking via technical riders',
      'Secured M-Pesa escrow vault protection',
      'Real-time engagement status tracking',
      'Automated confirmation interface',
      'Editorial rating & review system',
      'Access to talent in 5+ global regions',
    ],
    cta: 'Register as Client',
    href: '/register',
    featured: false,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-black/20 dark:text-white/20" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.rect x="20" y="20" width="60" height="60" rx="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M40 50 L47 57 L60 43" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      </svg>
    )
  },
  {
    label: 'The Artisan',
    tier: 'Elite Residency',
    price: '15%',
    priceSub: 'commission',
    subtitle: 'Zero upfront costs. We grow when your brand grows.',
    features: [
      'Professional premium residency profile',
      'High-fidelity media & experience showcase',
      'Direct client engagement management',
      'Secured honorarium protection',
      'Artisan dashboard & earnings analytics',
      'Technical rider verification system',
      'Verified prestige rating system',
      'Priority institutional support',
    ],
    cta: 'Apply for Residency',
    href: '/register',
    featured: true,
    illustration: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40" fill="none" stroke="currentColor" strokeWidth="1">
        <motion.circle cx="50" cy="50" r="40" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M30 70 L50 30 L70 70" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      </svg>
    )
  },
];

const faqs = [
  { q: 'Are there any recurring subscription fees?', a: 'No. SaxLink operates on a performance-based model. There are zero signup or monthly fees for either clients or musicians.' },
  { q: 'When exactly is the platform fee processed?', a: 'The 15% commission is automatically retained from the escrow vault only after the engagement is confirmed complete by both parties.' },
  { q: 'What protection is offered for cancellations?', a: 'If an engagement is cancelled through valid protocol, funds are returned from the vault to the client with zero penalties to the musician.' },
  { q: 'Can musicians define their own technical rates?', a: 'Yes. Every artisan maintains full control over their performance pricing. Our infrastructure simply facilitates the secure engagement.' },
];

export default function PricingPage() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      <SEO 
        title="Pricing & Economics" 
        description="Simple, transparent pricing. No subscription fees. SaxLink only earns when you do. Explore our Obsidian Access and Elite Residency tiers."
      />
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <div className="flex items-center justify-center md:justify-start gap-6 mb-12">
                  <div className="w-16 h-px bg-primary" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Commercial Model</span>
                </div>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
                  Transparent <br />
                  <span className="italic font-light text-primary/80">Economics.</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl text-white/60 font-light leading-relaxed max-w-sm italic mb-4"
              >
                "SaxLink only earns when you do. No subscriptions. No hidden costs. Just absolute clarity."
              </motion.p>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              {plans.map((p, i) => (
                <motion.div key={p.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all duration-1000 h-full flex flex-col border ${p.featured ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20' : 'bg-[#faf9ff] dark:bg-white/[0.02] border-primary/10 dark:border-white/10'}`}>
                  
                  <div className="absolute top-0 right-0 w-64 h-64 -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000">
                    {p.illustration}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <span className={`text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border ${p.featured ? 'border-white/20 bg-white/10' : 'border-primary/20 bg-primary/5 text-primary'}`}>
                        {p.tier}
                      </span>
                    </div>

                    <h3 className={`font-heading text-4xl font-black mb-2 ${p.featured ? 'text-white' : 'text-black dark:text-white group-hover:text-primary transition-colors'}`}>{p.label}</h3>
                    
                    <div className="mt-8 flex items-end gap-2">
                      <span className={`text-7xl font-heading font-black tracking-tighter ${p.featured ? 'text-white' : 'text-black dark:text-white'}`}>{p.price}</span>
                      {p.priceSub && <span className={`text-sm font-black uppercase tracking-widest mb-3 opacity-60 ${p.featured ? 'text-white' : 'text-primary'}`}>{p.priceSub}</span>}
                    </div>
                    
                    <p className={`text-lg font-light italic mt-6 max-w-sm leading-relaxed ${p.featured ? 'text-white/80' : 'text-gray-900 dark:text-white/60 font-semibold md:font-light'}`}>{p.subtitle}</p>
                  </div>

                  <ul className="space-y-6 mt-16 flex-1 relative z-10">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-4 text-sm font-medium transition-colors ${p.featured ? 'text-white/90' : 'text-gray-900 dark:text-white/80 font-bold md:font-medium'}`}>
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${p.featured ? 'bg-white/10 border-white/20' : 'bg-primary/10 border-primary/20'}`}>
                          <Check className={`w-3 h-3 ${p.featured ? 'text-white' : 'text-primary'}`} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link to={p.href} className="relative z-10 mt-16">
                    <Button className={`w-full rounded-full py-10 text-[12px] font-black uppercase tracking-[0.4em] transition-all duration-700 hover:scale-[1.02] ${p.featured ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20'}`}>
                      {p.cta} <LucideArrowRight className="w-5 h-5 ml-4" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Example Breakdown */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="mt-16 bg-[#faf9ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-10 text-primary">
                <DollarSign className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white/80 leading-relaxed italic max-w-4xl mx-auto">
                <span className="font-black text-black dark:text-white not-italic uppercase tracking-widest text-sm block mb-4 opacity-40">The Institutional Standard</span>
                "A Client pays <span className="text-primary font-bold">KES 20,000</span>. SaxLink secures the vault with a clear 15% platform fee (KES 3,000). The Artisan receives <span className="text-primary font-bold underline underline-offset-8 decoration-primary/30">KES 17,000</span> directly."
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-16 bg-[#faf9ff] dark:bg-secondary transition-colors duration-1000">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-12">
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em] mb-12 block">The Technical Query</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter mb-12">Pricing <span className="italic font-light text-primary">Protocol.</span></h2>
            </motion.div>
            
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                  className="group bg-white dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[2.5rem] p-10 hover:border-primary/40 transition-all duration-700">
                  <div className="flex gap-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 mt-1 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <HelpCircle className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors">{f.q}</p>
                      <p className="text-lg text-gray-900 dark:text-white/60 leading-relaxed font-bold md:font-light italic transition-colors">"{f.a}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 pointer-events-none">
            <img src={saxBg} alt="" className="w-full h-full object-cover opacity-10 grayscale contrast-150 -rotate-12 scale-150" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
          
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-12 border border-primary/40 backdrop-blur-xl">
              <Shield className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">No Surprises. <br /><span className="italic font-light text-primary/80">Ever.</span></h2>
            <p className="text-2xl text-white/60 font-light leading-relaxed mb-20 italic">"SaxLink's commercial model is built on mutual prestige. We only scale when our artisans and clients scale."</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/register">
                <Button className="bg-primary text-white rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all duration-700 shadow-2xl">
                  Get Early Access <LucideArrowRight className="w-5 h-5 ml-4" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" className="border-white/20 text-white rounded-full px-16 py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700">
                  Browse Musicians
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
