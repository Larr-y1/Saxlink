import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Music2, 
  ArrowRight, 
  Apple, 
  Chrome, 
  Mail, 
  Lock, 
  ChevronLeft, 
  Home as HomeIcon,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const login = useAppStore(state => state.login);

  const handleNext = () => {
    if (step === 1 && email) {
      setStep(2);
    }
  };

  const handleLogin = () => {
    // Mock login
    login({ email, name: email.split('@')[0] });
    
    // Redirect back to where they came from or home
    const from = new URLSearchParams(window.location.search).get('from') || '/';
    navigate(from);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] flex items-center justify-center p-4 transition-colors duration-500 overflow-hidden relative">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-[2px] z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-saxophonist-playing-in-a-dark-room-41315-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-20" />
      </div>

      {/* Cinematic Lighting */}
      <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 -right-4 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-pulse pointer-events-none delay-700" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-[1100px] relative z-10 flex flex-col gap-4 md:gap-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-1 md:mb-2 px-2 md:px-0 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors shrink-0">
            <HomeIcon className="w-3 h-3" />
            Home
          </Link>
          <span className="opacity-20 shrink-0">/</span>
          <span className="text-primary shrink-0">Authentication</span>
          {step === 2 && (
            <>
              <span className="opacity-20 shrink-0">/</span>
              <span className="text-primary shrink-0">Verification</span>
            </>
          )}
        </nav>

        <div className="grid lg:grid-cols-2 bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Left Side: Illustration & Branding */}
          <div className="hidden lg:flex flex-col justify-between p-16 bg-white/5 dark:bg-white/[0.01] backdrop-blur-md relative overflow-hidden border-r border-black/5 dark:border-white/10">
            <div className="relative z-10">
              <Link to="/" className="flex items-center gap-3 mb-16 group">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Music2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-black dark:text-white uppercase">SaxLink</span>
              </Link>
              
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">The Obsidian Tier Access</span>
              </div>

              <h2 className="text-5xl font-heading font-black leading-[0.9] text-black dark:text-white mb-8 tracking-tighter">
                Enter the <br />
                <span className="italic font-light text-primary/80">Virtuoso Suite.</span>
              </h2>
              <p className="text-black/60 dark:text-white/40 text-lg font-medium leading-relaxed max-w-[320px] italic">
                "Experience the definitive infrastructure for elite musical performance."
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                { icon: ShieldCheck, title: "Secure Protocol", desc: "Institutional grade encryption" },
                { icon: Zap, title: "Fast Payouts", desc: "M-Pesa integration within 24h" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-primary shadow-xl">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black dark:text-white">{item.title}</h4>
                    <p className="text-[10px] font-medium text-black/40 dark:text-white/30 uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Abstract Illustration Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full animate-ping [animation-duration:4s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary/30 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right Side: Animated Form */}
          <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative bg-white/40 dark:bg-transparent min-h-[500px]">
            <button 
              onClick={handleBack}
              className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white transition-all duration-500 text-black/60 dark:text-white/40 z-20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="lg:hidden flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-black dark:text-white">SaxLink</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 md:mb-4 block">Initialization</span>
                    <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter mb-3 md:mb-4 leading-none">Identify Yourself</h1>
                    <p className="text-black/40 dark:text-white/40 font-medium text-sm md:text-base">Please enter your credentials to access the ledger.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-14 md:h-16 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-700 font-black text-[9px] md:text-[10px] uppercase tracking-widest p-0">
                        <Chrome className="mr-2 md:mr-3 h-4 w-4" /> Google
                      </Button>
                      <Button variant="outline" className="h-14 md:h-16 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-700 font-black text-[9px] md:text-[10px] uppercase tracking-widest p-0">
                        <Apple className="mr-2 md:mr-3 h-4 w-4" /> Apple
                      </Button>
                    </div>

                    <div className="relative py-2 md:py-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-black/5 dark:border-white/10" />
                      </div>
                      <div className="relative flex justify-center text-[8px] md:text-[9px] uppercase font-black tracking-[0.3em]">
                        <span className="bg-[#fcfcfc] dark:bg-[#030712] px-4 text-black/20 dark:text-white/20">or use electronic mail</span>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-black/20 dark:text-white/20 group-focus-within:text-primary transition-colors" />
                        <Input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address" 
                          className="pl-16 h-14 md:h-18 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:ring-primary/40 focus:border-primary/40 transition-all text-base md:text-lg"
                        />
                      </div>
                      <Button 
                        disabled={!email}
                        onClick={handleNext}
                        className="w-full h-14 md:h-18 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all duration-700 group"
                      >
                        Continue Execution
                        <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-3" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-center text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 pt-6 md:pt-10 border-t border-black/5 dark:border-white/5">
                    New to the guild?{" "}
                    <Link to="/register" className="text-primary hover:tracking-[0.3em] transition-all">
                      Request Access
                    </Link>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="lg:hidden flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-black dark:text-white">SaxLink</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 md:mb-4 block">Verification</span>
                    <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter mb-3 md:mb-4 leading-none">Final Protocol</h1>
                    <p className="text-black/40 dark:text-white/40 font-medium text-sm md:text-base">Verify your identity for <span className="text-primary break-all">{email}</span></p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="relative group">
                      <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-black/20 dark:text-white/20 group-focus-within:text-primary transition-colors" />
                      <Input 
                        type="password" 
                        autoFocus
                        placeholder="Security Cipher (Password)" 
                        className="pl-16 h-14 md:h-18 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:ring-primary/40 focus:border-primary/40 transition-all text-base md:text-lg"
                      />
                    </div>

                    <div className="flex items-center justify-between px-1 md:px-2">
                      <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-md border-2 border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">Persistence</span>
                      </label>
                      <button className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary hover:tracking-[0.3em] transition-all">Recover Key</button>
                    </div>

                    <Button 
                      onClick={handleLogin}
                      className="w-full h-14 md:h-18 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all duration-700 group"
                    >
                      Authenticate
                      <Sparkles className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-all group-hover:scale-125" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
