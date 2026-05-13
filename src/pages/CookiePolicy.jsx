import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-secondary dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-px bg-primary" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">Data Forensics</span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white dark:text-white tracking-tighter leading-[0.8] mb-16">
            Cookie <br />
            <span className="italic font-light text-primary/80">Policy.</span>
          </h1>

          <div className="space-y-16 text-black dark:text-white/60 font-medium md:font-light leading-relaxed text-xl transition-colors">
            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/20 dark:border-white/10 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">01 //</span> Technical Identification
              </h2>
              <p>
                SaxLink utilizes advanced data identification tokens (cookies) to ensure the seamless operation of our digital infrastructure. These tokens allow us to recognize your institutional identity and maintain your secure session across the platform.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">02 //</span> Operational Tokens
              </h2>
              <p>
                Essential cookies are required for core platform functionality, including access to the Artisan Console, the secure booking request flow, and encrypted session management.
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#f8f7ff] dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 shadow-sm">
              <h2 className="text-black dark:text-white font-heading text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
                <span className="text-primary font-mono text-sm tracking-normal">03 //</span> Analytical Insights
              </h2>
              <p>
                We utilize performance-tracking tokens to gain technical insights into how our virtuosos and clients interact with the ecosystem. This data is used exclusively to optimize the registry's efficiency and user experience.
              </p>
            </section>

            <div className="pt-20 border-t border-primary/10 dark:border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/20">
                Last Updated: May 2026 // DATA_PROTOCOL_V1.2
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
