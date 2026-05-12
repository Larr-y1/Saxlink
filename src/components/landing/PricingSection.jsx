
import { motion } from 'framer-motion';
import { Check, ArrowRight, Wallet, ShieldCheck, Zap, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const residencies = [
  {
    type: 'The Client Registry',
    price: 'FREE',
    desc: 'Access Kenya&apos;s most prestigious roster of saxophonists with absolute security.',
    features: [
      'Unlimited Search & Discovery',
      'High-Fidelity Media Previews',
      'Direct Concierge Messaging',
      'Escrow Payment Protection',
      'Verified Performance Reviews'
    ],
    cta: 'Register for Access'
  },
  {
    type: 'The Artist Guild',
    price: '15%',
    priceDetail: 'Per Performance',
    desc: 'Elevate your professional career with elite venue access and secured payments.',
    features: [
      'Editorial Artist Portfolio',
      'Zero Monthly Maintenance Fees',
      'Priority Search Placement',
      'Automated Escrow Payouts',
      'Performance Analytics Suite'
    ],
    cta: 'Apply for Residency',
    featured: true
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 md:py-64 bg-[#faf9ff] dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR: Large Obsidian block on the left side */}
      <div className="absolute top-0 left-0 w-full lg:w-[45%] h-full bg-[#0a0a0c] dark:bg-transparent transition-colors duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-start">
          
          {/* Left Side: Editorial Context (Inside Obsidian Anchor) */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Financial Framework</span>
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
              Absolute <br />
              <span className="italic font-light text-primary/80">Transparency.</span>
            </h2>
            <p className="text-2xl text-white/40 font-light leading-relaxed mb-16 italic">
              "We operate on a results-first model. No registration fees, no monthly subscriptions. SaxLink only earns when you successfully perform."
            </p>

            {/* The Ledger Breakdown Visual */}
            <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 premium-shadow shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-12 block">TECHNICAL_LEDGER // V1.0</span>
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center text-base gap-4">
                  <span className="text-white/30 uppercase tracking-[0.3em] font-black text-[10px] shrink-0">Institutional Investment</span>
                  <span className="font-mono font-black text-white text-base md:text-lg tracking-wider whitespace-nowrap">KES 20,000.00</span>
                </div>
                <div className="flex justify-between items-center text-base gap-4">
                  <span className="text-primary/60 uppercase tracking-[0.3em] font-black text-[10px] flex items-center gap-2 shrink-0">
                    <Minus className="w-3 h-3" /> Platform Honorarium (15%)
                  </span>
                  <span className="font-mono font-black text-primary/80 text-base md:text-lg tracking-wider whitespace-nowrap">- KES 3,000.00</span>
                </div>
                <div className="h-px bg-white/5 my-8" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="text-white uppercase tracking-[0.5em] font-black text-[11px]">NET_ARTISAN_PAYOUT</span>
                  <span className="font-mono font-black text-3xl md:text-4xl text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)] whitespace-nowrap">KES 17,000.00</span>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                <ShieldCheck className="w-5 h-5 text-emerald-500/60" /> SECURED_ESCROW_PROTOCOL_ACTIVE
              </div>
            </div>
          </motion.div>

          {/* Right Side: Residency Options (On Pearl Background) */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 md:gap-12">
            {residencies.map((r, i) => (
              <motion.div
                key={r.type}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className={`relative h-full bg-white dark:bg-white/[0.03] backdrop-blur-3xl border rounded-[3rem] p-10 md:p-14 overflow-hidden transition-all duration-1000 premium-shadow flex flex-col shadow-2xl ${r.featured ? 'border-primary/40' : 'border-primary/10 dark:border-white/10 hover:border-primary/30'}`}>
                  
                  {r.featured && (
                    <div className="absolute top-10 right-10">
                      <Zap className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}

                  <div className="mb-12">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-8">{r.type}</h3>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="font-mono text-6xl md:text-7xl font-black text-foreground dark:text-white tracking-tighter transition-colors">{r.price}</span>
                      {r.priceDetail && <span className="text-[9px] font-black text-foreground dark:text-white/40 uppercase tracking-[0.4em] mb-2 transition-colors">{r.priceDetail}</span>}
                    </div>
                    <p className="text-base text-foreground dark:text-white/60 font-medium md:font-light leading-relaxed italic transition-colors">"{r.desc}"</p>
                  </div>

                  <ul className="space-y-6 mb-16 flex-1">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start gap-4 text-[11px] font-black text-foreground dark:text-white/80 uppercase tracking-[0.15em] group-hover:text-foreground dark:group-hover:text-white transition-colors leading-tight">
                        <div className="w-5 h-5 rounded-xl bg-secondary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link to="/register">
                    <Button className={`w-full rounded-full py-8 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-1000 shadow-xl ${r.featured ? 'bg-primary text-white hover:scale-105' : 'bg-secondary text-black dark:bg-white/5 dark:text-white border border-secondary/10 dark:border-white/10 hover:bg-secondary/90 dark:hover:bg-white/10'}`}>
                      <span className="flex items-center gap-4">
                        {r.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}