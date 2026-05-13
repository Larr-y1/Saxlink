import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    num: '01',
    q: 'How does the booking process work?',
    a: 'Discover your artist, review their repertoire, and submit an engagement request. Once the artist accepts, your payment is secured via our M-Pesa escrow system. Funds are only disbursed following a successful performance confirmation.',
  },
  {
    num: '02',
    q: 'How does payment security work?',
    a: 'We utilize a sophisticated escrow framework. When you book, your funds are held in a secure account. They are only released once both you and the artist confirm the completion of the engagement, ensuring total protection for both parties.',
  },
  {
    num: '03',
    q: 'How are musicians verified?',
    a: 'Every artist on SaxLink undergoes a rigorous multi-stage vetting process. This includes identity verification, portfolio audits, and for our Elite members, a private audition to ensure they meet our standard of world-class excellence.',
  },
  {
    num: '04',
    q: 'What happens after the performance?',
    a: 'Upon completion, the artist marks the event as finished in their console. You then confirm the completion. This triggers the automated payout process, and you are invited to leave an editorial review of the experience.',
  },
  {
    num: '05',
    q: 'What geographical regions are supported?',
    a: 'SaxLink currently curates talent across Kenya’s major cultural hubs, including Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. We are selectively expanding our roster to other regions soon.',
  },
  {
    num: '06',
    q: 'Is there a registration or monthly fee?',
    a: 'No. Access to the Client Registry and the Artist Guild is free of upfront costs. We only apply a transparent 15% commission per successful booking. We only succeed when our artists and clients do.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR: Large Obsidian block at the top */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[#f5f3ff] dark:bg-transparent transition-colors duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Technical Knowledge Base</span>
              <div className="w-16 h-px bg-primary/60" />
            </div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-foreground dark:text-white tracking-tighter leading-[0.8] mb-12 transition-colors">
              Curated <br />
              <span className="italic font-light text-primary/80">Inquiries.</span>
            </h2>
            <p className="text-2xl text-foreground dark:text-white/40 font-medium md:font-light leading-relaxed max-w-3xl italic transition-colors">
              "Everything you need to know about navigating the elite digital infrastructure of professional saxophone bookings."
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className={`relative bg-white dark:bg-white/[0.03] backdrop-blur-3xl border rounded-[2.5rem] overflow-hidden transition-all duration-1000 shadow-xl shadow-primary/5 ${open === i ? 'border-primary/40' : 'border-primary/10 dark:border-white/10 hover:border-primary/30'}`}>
                
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 group"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] font-black text-primary/40 group-hover:text-primary transition-all duration-700 tracking-[0.2em] shrink-0">#{faq.num}</span>
                    <span className="font-heading text-lg md:text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-700 tracking-tight leading-snug">{faq.q}</span>
                  </div>
                  <div className={`w-10 h-10 rounded-2xl bg-secondary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center transition-all duration-1000 shadow-inner shrink-0 ${open === i ? 'rotate-180 bg-primary/20 border-primary/40 text-primary' : 'text-foreground/40 dark:text-white/40 group-hover:text-foreground dark:group-hover:text-white'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 md:px-10 pb-10 pt-2 border-t border-primary/5 dark:border-white/5 mx-8 md:mx-10 mt-2">
                        <p className="text-base text-foreground dark:text-white/60 leading-relaxed font-medium md:font-light italic py-4 transition-colors">
                          "{faq.a}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}