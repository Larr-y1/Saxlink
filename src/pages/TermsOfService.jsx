import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR: High-contrast Obsidian block for visual weight */}
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
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Institutional Protocol</span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white dark:text-white tracking-tighter leading-[0.8] mb-16">
            Terms of <br />
            <span className="italic font-light text-primary/80">Service.</span>
          </h1>

          <div className="space-y-16 text-black dark:text-white/60 font-medium md:font-light leading-relaxed text-xl transition-colors">
            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/20 dark:border-white/10 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">01 //</span> Acceptance of Protocol
              </h2>
              <p>
                By accessing the SaxLink platform, you agree to adhere to the institutional standards and technical protocols outlined in this agreement. These terms govern the relationship between SaxLink Technologies and all participants within the Registry and the Guild.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">02 //</span> Artisan Registry Standards
              </h2>
              <p>
                Musicians applying for residency within the Guild must undergo a multi-stage verification process. Maintaining active status requires adherence to the high-fidelity performance standards and professional conduct expected of world-class virtuosos.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">03 //</span> Financial Framework & Escrow
              </h2>
              <p>
                All financial transactions within SaxLink are managed through our secured escrow protocol. A transparent platform honorarium of 15% is applied to each successful engagement. Funds are held securely and only disbursed upon confirmation of performance completion.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">04 //</span> Institutional Rights
              </h2>
              <p>
                SaxLink reserves the right to moderate the registry and ensure the integrity of the ecosystem. Any deviation from the agreed-upon technical riders or professional standards may result in temporary suspension of platform access.
              </p>
            </section>

            <div className="pt-20 border-t border-primary/10 dark:border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/20">
                Last Updated: May 2026 // VERSION_4.2_ALPHA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
