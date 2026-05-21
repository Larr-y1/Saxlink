
import { motion } from 'framer-motion';
import { Twitter, Instagram, ArrowUp, ShieldCheck, Globe, CreditCard, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

// Custom TikTok Icon
const TikTok = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.05 1.13-.3 2.29-.87 3.28-1.14 2.02-3.56 3.12-5.79 2.76-2.28-.35-4.24-2.14-4.83-4.38-.88-3.2 1.35-6.6 4.63-7.14.36-.06.72-.09 1.08-.09V13.3c-1.42.01-2.91.48-3.86 1.57-.92 1.06-1.17 2.58-.8 3.93.36 1.33 1.55 2.39 2.92 2.54 1.37.15 2.8-.52 3.42-1.74.2-.4.29-.84.32-1.28.14-3.41.28-6.82.43-10.23-.01-2.73-.02-5.46-.02-8.19l-.02-.01z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#faf9ff] dark:bg-background border-t border-primary/10 dark:border-white/5 pt-20 pb-12 relative overflow-hidden transition-colors duration-1000">
      {/* Instagram Preview Grid - New Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary/60" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Instagram_Feed // LIVE</span>
          </div>
          <a href="#" className="text-[9px] font-black text-black/60 dark:text-muted-foreground hover:text-primary uppercase tracking-[0.4em] transition-all">Follow @SaxLink_Elite</a>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square rounded-3xl bg-white dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-primary/40 transition-all duration-700 relative overflow-hidden shadow-sm">
              <Loader2 className="w-6 h-6 text-primary/20 animate-spin group-hover:text-primary transition-colors" />
              <span className="text-[8px] font-black text-black/30 dark:text-muted-foreground/30 uppercase tracking-widest">Loading_Asset</span>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Moving Ghost Branding */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none whitespace-nowrap opacity-[0.02] dark:opacity-[0.02]">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black text-black dark:text-foreground tracking-tighter leading-none"
        >
          SAXLINK · THE GUILD · ARTISTRY · PRECISION · SAXLINK · THE GUILD · ARTISTRY · PRECISION ·
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Narrative */}
          <div className="lg:col-span-4">
            <Logo className="mb-8 scale-100 origin-left" />
            <p className="text-xl text-black/60 dark:text-muted-foreground font-light leading-relaxed max-w-sm mb-10 italic transition-colors">
              "Redefining the digital infrastructure of live music through absolute technical precision and world-class artistry."
            </p>
            <div className="flex gap-4">
              {[
                { Icon: TikTok, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.03] border border-primary/10 dark:border-white/5 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-500 premium-shadow shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Technical Directory: Registry */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">THE_REGISTRY</h4>
            <ul className="space-y-4">
              {[
                { label: 'Browse Artists', href: '/browse' },
                { label: 'Find a Musician', href: '/book' },
                { label: 'Booking Protocol', href: '/how-it-works' },
                { label: 'Our Philosophy', href: '/about' },
                { label: 'Concierge Support', href: '/support' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-base text-black/60 dark:text-muted-foreground hover:text-primary transition-all font-light tracking-tight group flex items-center gap-3">
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Directory: The Guild */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">THE_GUILD</h4>
            <ul className="space-y-4">
              {[
                { label: 'Residency Application', href: '/register' },
                { label: 'Artist Console', href: '/login' },
                { label: 'Technical Rider', href: '/how-it-works' },
                { label: 'Elite Benefits', href: '/pricing' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-base text-black/60 dark:text-muted-foreground hover:text-primary transition-all font-light tracking-tight group flex items-center gap-3">
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Artisan Brief (Newsletter) */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">THE_ARTISAN_BRIEF</h4>
            <p className="text-sm text-black/60 dark:text-muted-foreground font-light mb-6 leading-relaxed transition-colors">
              Subscribe to our weekly dispatch on high-end performance trends and exclusive venue residencies.
            </p>
            <div className="relative group p-1 bg-white dark:bg-white/[0.03] border border-primary/10 dark:border-white/10 rounded-2xl focus-within:border-primary/40 transition-all shadow-sm">
              <input 
                type="email" 
                placeholder="signature@email.com" 
                className="w-full bg-transparent border-none px-6 py-4 text-sm font-light focus:outline-none placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all font-black text-[9px] uppercase tracking-widest border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Trust Badges & Legal */}
        <div className="pt-12 border-t border-primary/10 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 text-black dark:text-white">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Institutional Grade</span>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Verified Payouts</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Regional Presence</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
              { label: 'Privacy Policy', href: '/privacy' }
            ].map((l) => (
              <Link key={l.label} to={l.href} className="text-[10px] font-black text-black/60 dark:text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Closing Signature */}
        <div className="mt-16 pt-10 border-t border-primary/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black text-black/10 dark:text-white/10 uppercase tracking-[0.3em] transition-colors">
            © 2026 SaxLink Technologies · Handcrafted for the Global Stage.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.4em] hover:text-black dark:hover:text-white transition-all"
          >
            Ascend to Top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}