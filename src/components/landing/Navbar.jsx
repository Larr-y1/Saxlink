import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/lib/ThemeProvider';
import Logo from '@/components/common/Logo';

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)] max-w-7xl transition-all duration-1000 ${
        isScrolled 
          ? 'py-2 md:py-3 px-6 md:px-8 bg-background/80 dark:bg-secondary/80 backdrop-blur-3xl border border-border dark:border-white/5 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
          : 'py-4 md:py-5 px-4 md:px-6 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className="group transition-transform active:scale-95 shrink-0"
        >
          <Logo 
            textClassName="text-foreground dark:text-white"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          <NavLink to="/browse">Discover Artists</NavLink>
          <NavLink to="/how-it-works">Experience</NavLink>
          <NavLink to="/about">Philosophy</NavLink>
          <NavLink to="/pricing">Investment</NavLink>
          
          <div className="flex items-center gap-6 ml-10 pl-10 border-l border-border dark:border-white/10">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="w-12 h-12 rounded-2xl bg-muted/50 dark:bg-white/5 flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary text-foreground dark:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            
            <Link to="/login" className="group flex items-center gap-3">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">
                Sign In
              </span>
            </Link>

            <Button asChild className="rounded-full px-8 py-4 bg-foreground text-background dark:bg-white dark:text-black font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-2xl">
              <Link to="/early-access">Join Circle</Link>
            </Button>
          </div>
        </div>

        {/* Mobile & Tablet Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-10 h-10 rounded-xl bg-muted/50 dark:bg-white/5 flex items-center justify-center text-foreground dark:text-white"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
          
          <button 
            className="w-10 h-10 rounded-xl bg-foreground text-background dark:bg-white dark:text-black flex items-center justify-center transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+1rem)] left-0 right-0 lg:hidden bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-6 z-[200]"
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Discover Artists', href: '/browse' },
                { label: 'The Experience', href: '/how-it-works' },
                { label: 'Philosophy', href: '/about' },
                { label: 'Investment', href: '/pricing' },
                { label: 'Support', href: '/support' },
                { label: 'Sign In', href: '/login' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-2xl font-heading font-black p-5 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-between group text-black dark:text-white"
                  >
                    {item.label}
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 mt-4 border-t border-black/5 dark:border-white/10"
              >
                <Button asChild className="rounded-2xl w-full py-10 text-[12px] font-black uppercase tracking-[0.5em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 group">
                  <Link to="/early-access" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-4">
                    Join Early Access <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-[11px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full transition-all relative group text-muted-foreground hover:text-primary"
  >
    <span className="relative z-10">{children}</span>
    <motion.div 
      className="absolute inset-0 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      layoutId="navHover"
    />
  </Link>
);

export default Navbar;
