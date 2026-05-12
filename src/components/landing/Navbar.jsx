import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/lib/ThemeProvider';
import Logo from '@/components/common/Logo';

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[90rem] transition-all duration-1000 ${
        isScrolled 
          ? 'py-3 md:py-4 px-8 md:px-12 bg-background/80 dark:bg-secondary/80 backdrop-blur-3xl border border-border dark:border-white/5 rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
          : 'py-6 md:py-8 px-6 md:px-10 bg-transparent'
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

            <Button asChild className="rounded-full px-10 py-6 bg-foreground text-background dark:bg-white dark:text-black font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-2xl">
              <Link to="/early-access">Join Circle</Link>
            </Button>
          </div>
        </div>

        {/* Mobile & Tablet Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-12 h-12 rounded-2xl bg-muted/50 dark:bg-white/5 flex items-center justify-center text-foreground dark:text-white"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
          
          <button 
            className="w-12 h-12 rounded-2xl bg-foreground text-background dark:bg-white dark:text-black flex items-center justify-center transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+1rem)] left-0 right-0 lg:hidden bg-background/95 dark:bg-secondary/95 backdrop-blur-3xl border border-border dark:border-white/10 rounded-[3rem] overflow-hidden shadow-2xl p-6"
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Discover Artists', href: '/browse' },
                { label: 'The Experience', href: '/how-it-works' },
                { label: 'Investment', href: '/pricing' },
                { label: 'Sign In', href: '/login' },
              ].map((item) => (
                <Link 
                  key={item.label}
                  to={item.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-2xl font-heading font-bold p-8 rounded-[2.5rem] hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
              <div className="pt-6 border-t border-border dark:border-white/5">
                <Button asChild className="rounded-[2.5rem] w-full py-10 text-[11px] font-black uppercase tracking-[0.5em] bg-primary shadow-2xl">
                  <Link to="/early-access" onClick={() => setMobileMenuOpen(false)}>Join Early Access</Link>
                </Button>
              </div>
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
    className="text-[11px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full transition-all relative group text-muted-foreground hover:text-primary"
  >
    <span className="relative z-10">{children}</span>
    <motion.div 
      className="absolute inset-0 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      layoutId="navHover"
    />
  </Link>
);

export default Navbar;
