import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-secondary dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 pt-48 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-px bg-primary" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Confidentiality Protocol</span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white dark:text-white tracking-tighter leading-[0.8] mb-16">
            Privacy <br />
            <span className="italic font-light text-primary/80">Protocol.</span>
          </h1>

          <div className="space-y-16 text-black dark:text-white/60 font-medium md:font-light leading-relaxed text-xl transition-colors">
            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/20 dark:border-white/10 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">01 //</span> Information Architecture
              </h2>
              <p>
                At SaxLink, we treat your personal and professional data with the same technical precision we apply to our musical curation. This protocol outlines how we collect, safeguard, and manage your information within our secure network.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">02 //</span> Data Acquisition
              </h2>
              <p>
                We collect institutional data necessary for identity verification, professional portfolio display, and the execution of financial transactions. This includes media assets, performance history, and contact metadata.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">03 //</span> Encryption & Safeguards
              </h2>
              <p>
                All sensitive data, including financial payout information and private communications, is protected by industry-standard encryption protocols. We never share your institutional data with unauthorized third parties.
              </p>
            </section>

            <div className="pt-20 border-t border-primary/10 dark:border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/20">
                Last Updated: May 2026 // SECURE_CORE_V3.0
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
