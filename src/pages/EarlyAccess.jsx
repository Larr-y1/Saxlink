import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Music2, 
  ArrowRight, 
  Mail, 
  User, 
  ChevronLeft, 
  Home as HomeIcon,
  Sparkles,
  ShieldCheck,
  Music,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const EarlyAccess = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#030712] flex items-center justify-center p-4 transition-colors duration-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 relative z-10"
        >
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 animate-bounce">
              <CheckCircle2 size={48} />
            </div>
          </div>
          <h1 className="text-4xl font-black text-black dark:text-white tracking-tighter">You're on the list!</h1>
          <p className="text-black/40 dark:text-white/40 font-medium">
            The verification protocol has been initialized. We will contact you at <span className="text-primary">{formData.email}</span> as soon as your access is granted.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="h-16 rounded-2xl px-12 text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all"
          >
            Return to Base
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] flex items-center justify-center p-4 transition-colors duration-500 overflow-hidden relative">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-[2px] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200" 
          alt="" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30 grayscale"
        />
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
          <span className="text-primary shrink-0">Registration</span>
          <span className="opacity-20 shrink-0">/</span>
          <span className="text-primary shrink-0">Step {step}</span>
        </nav>

        <div className="grid lg:grid-cols-2 bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Left Side: Illustration & Branding */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-white/5 dark:bg-white/[0.01] backdrop-blur-md relative overflow-hidden border-r border-black/5 dark:border-white/10">
            <div className="relative z-10">
              <Link to="/" className="flex items-center gap-3 mb-8 group">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Music2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-black dark:text-white uppercase">SaxLink</span>
              </Link>
              
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <ShieldCheck className="w-3 h-3 text-primary animate-pulse" />
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Residency Application</span>
              </div>

              <h2 className="text-5xl font-heading font-black leading-[0.9] text-black dark:text-white mb-8 tracking-tighter">
                Join the <br />
                <span className="italic font-light text-primary/80">Obsidian Tier.</span>
              </h2>
              <p className="text-black/60 dark:text-white/40 text-lg font-medium leading-relaxed max-w-[320px] italic">
                "Apply for residency within the world's most exclusive saxophonist guild."
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                { icon: Sparkles, title: "Priority Onboarding", desc: "Founding member status" },
                { icon: ShieldCheck, title: "Lower Fees", desc: "Locked-in platform rates" }
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

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full animate-ping [animation-duration:4s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary/30 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right Side: Animated Form */}
          <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center relative bg-white/40 dark:bg-transparent min-h-[450px]">
            <button 
              onClick={handleBack}
              className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white transition-all duration-500 text-black/60 dark:text-white/40 z-20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="lg:hidden flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-black dark:text-white">SaxLink</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 md:mb-4 block">Deployment Phase 01</span>
                    <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter mb-3 md:mb-4 leading-none">Choose Your Path</h1>
                    <p className="text-black/40 dark:text-white/40 font-medium text-sm md:text-base">Are you providing or seeking elite musical talent?</p>
                  </div>

                  <div className="grid gap-3 md:gap-4">
                    {[
                      { id: 'client', icon: User, title: "Client Residency", desc: "Seeking world-class performance" },
                      { id: 'musician', icon: Music, title: "Artisan Residency", desc: "Providing technical excellence" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setRole(item.id)}
                        className={`flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-[2rem] md:rounded-3xl border-2 transition-all duration-500 text-left relative overflow-hidden group ${role === item.id ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-black/5 dark:border-white/5 hover:border-primary/40 bg-white/40 dark:bg-white/5'}`}
                      >
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-colors shrink-0 ${role === item.id ? 'bg-primary text-white shadow-xl' : 'bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40'}`}>
                          <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-black dark:text-white">{item.title}</h4>
                          <p className="text-[9px] md:text-[10px] font-medium text-black/40 dark:text-white/30 uppercase tracking-widest">{item.desc}</p>
                        </div>
                        {role === item.id && (
                          <motion.div 
                            layoutId="activeRole"
                            className="absolute inset-0 bg-primary/5 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  <Button 
                    onClick={handleNext}
                    className="w-full h-14 md:h-18 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all duration-700 group"
                  >
                    Establish Intent
                    <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-3" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="lg:hidden flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-black dark:text-white">SaxLink</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 md:mb-4 block">Deployment Phase 02</span>
                    <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter mb-3 md:mb-4 leading-none">Core Identification</h1>
                    <p className="text-black/40 dark:text-white/40 font-medium text-sm md:text-base">Please provide your institutional details.</p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-black/20 dark:text-white/20 group-focus-within:text-primary transition-colors" />
                      <Input 
                        placeholder="Full Legal Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="pl-16 h-14 md:h-18 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:ring-primary/40 transition-all text-base md:text-lg"
                      />
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-black/20 dark:text-white/20 group-focus-within:text-primary transition-colors" />
                      <Input 
                        placeholder="Electronic Mail" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-16 h-14 md:h-18 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:ring-primary/40 transition-all text-base md:text-lg"
                      />
                    </div>
                  </div>

                  <Button 
                    disabled={!formData.name || !formData.email}
                    onClick={handleNext}
                    className="w-full h-14 md:h-18 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all duration-700 group"
                  >
                    Proceed to Verification
                    <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-3" />
                  </Button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="lg:hidden flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-black dark:text-white">SaxLink</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 md:mb-4 block">Deployment Phase 03</span>
                    <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter mb-3 md:mb-4 leading-none">Location & Entry</h1>
                    <p className="text-black/40 dark:text-white/40 font-medium text-sm md:text-base">Finalize your application for <span className="text-primary break-all">{formData.name}</span></p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="relative group">
                      <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-black/20 dark:text-white/20 group-focus-within:text-primary transition-colors" />
                      <Input 
                        placeholder="Operating City (Nairobi, KE)" 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="pl-16 h-14 md:h-18 rounded-2xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:ring-primary/40 transition-all text-base md:text-lg"
                      />
                    </div>
                  </div>

                  <div className="p-5 md:p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 leading-relaxed">
                    By requesting access, you agree to the <Link to="/terms" className="text-primary hover:underline">Guild Protocols</Link> and our commitment to absolute artistic excellence.
                  </div>

                  <Button 
                    onClick={handleNext}
                    className="w-full h-14 md:h-18 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all duration-700 group"
                  >
                    Finalize Request
                    <Sparkles className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-all group-hover:scale-125" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
