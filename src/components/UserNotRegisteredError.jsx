import { motion } from 'framer-motion';
import { ShieldAlert, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UserNotRegisteredError = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-white dark:bg-background transition-colors duration-1000">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full text-center space-y-12 relative z-10"
      >
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-500 border border-red-500/20 shadow-2xl">
            <ShieldAlert size={48} strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter">Access Protocol <span className="text-red-500 italic">Denied.</span></h1>
          <p className="text-black/60 dark:text-white/40 text-lg font-medium italic max-w-md mx-auto">
            "Your digital credentials are not currently recognized by the SaxLink Artisan Registry."
          </p>
        </div>

        <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[3rem] p-10 text-left space-y-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Resolution Procedures</span>
            <div className="flex-grow h-px bg-primary/10" />
          </div>
          
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="text-[10px] font-black">01</span>
              </div>
              <div>
                <p className="text-sm font-bold text-black dark:text-white">Verify Authentication</p>
                <p className="text-xs text-black/50 dark:text-white/40 italic">Ensure you are logged in with your approved professional account.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="text-[10px] font-black">02</span>
              </div>
              <div>
                <p className="text-sm font-bold text-black dark:text-white">Contact Registry Admin</p>
                <p className="text-xs text-black/50 dark:text-white/40 italic">Submit an access request to the system administrator for account validation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            variant="outline"
            asChild
            className="flex-1 h-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] border-black/10 dark:border-white/10 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
          >
            <Link to="/">
              <Home className="mr-2 w-4 h-4" /> Return Home
            </Link>
          </Button>
          <Button 
            asChild
            className="flex-1 h-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all"
          >
            <a href="mailto:admin@saxlink.com">
              <Mail className="mr-2 w-4 h-4" /> Request Access
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserNotRegisteredError;
