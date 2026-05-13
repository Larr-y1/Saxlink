import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight as LucideArrowRight,
  CheckCircle, 
  CreditCard, 
  Calendar, 
  MapPin, 
  Music2, 
  User, 
  Clock, 
  Shield,
  Phone,
  Mail,
  Zap,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MUSICIANS } from '@/lib/musicians-data';
import Navbar from '@/components/landing/Navbar';

const STEPS = [
  { id: 'details', label: 'Details', icon: User },
  { id: 'review', label: 'Review', icon: Calendar },
  { id: 'payment', label: 'Payment', icon: CreditCard }
];

export default function BookingRequest() {
  const { id } = useParams();
  const musician = MUSICIANS.find(m => m.id === parseInt(id)) || MUSICIANS[0];
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client_name: '', client_email: '', client_phone: '',
    event_type: '', event_date: '', event_time: '', event_location: '', notes: '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const total = musician.price;

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-white dark:bg-background flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-1000">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center space-y-10 relative z-10"
        >
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary border border-primary/20 animate-bounce shadow-2xl">
              <CheckCircle size={48} strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter">Engagement Initialized.</h1>
            <p className="text-black/60 dark:text-white/40 text-lg font-medium italic">
              "Your performance request for <span className="text-primary font-bold italic">{musician.name}</span> has been broadcast to the Artisan console."
            </p>
          </div>

          <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[3rem] p-10 text-left space-y-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Technical Summary</span>
              <div className="flex-grow h-px bg-primary/10" />
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[9px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest mb-1">Artisan</p>
                <p className="text-base font-bold text-black dark:text-white">{musician.name}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest mb-1">Occasion</p>
                <p className="text-base font-bold text-black dark:text-white">{form.event_type}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest mb-1">Engagement Date</p>
                <p className="text-base font-bold text-black dark:text-white">{form.event_date}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest mb-1">Vault Status</p>
                <p className="text-base font-bold text-emerald-500">PENDING_ACCEPTANCE</p>
              </div>
            </div>

            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-lg font-black text-black dark:text-white">KES {total.toLocaleString()}</span>
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-4 py-2 rounded-full">Secured Protocol</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1 h-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] border-black/10 dark:border-white/10 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
            >
              Return Home
            </Button>
            <Button 
              onClick={() => navigate('/browse')}
              className="flex-1 h-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all"
            >
              Discover More
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Navbar />
      
      <div className="pt-24 relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12">
        <Link to={`/musician/${musician.id}`} className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Artisan Dossier
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Booking Logic */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.7em]">Engagement Request</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-black text-white dark:text-white tracking-tighter leading-[0.8] mb-12 transition-colors">
                Reserve your <br />
                <span className="italic font-light text-primary/80">Moment.</span>
              </h1>
            </header>

            {/* Step indicator - Visual Progress */}
            <div className="flex items-center justify-between gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 mb-12">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1 last:flex-none">
                  <div className={`flex items-center gap-4 transition-all duration-700 ${i <= step ? 'text-primary' : 'text-white/20'}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 ${i < step ? 'bg-primary text-white' : i === step ? 'bg-primary/20 text-primary border border-primary/40' : 'bg-white/5 border border-white/5 text-white/20'}`}>
                      {i < step ? <CheckCircle className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[9px] font-black uppercase tracking-widest leading-none mb-1">Step 0{i + 1}</p>
                      <p className={`text-xs font-bold uppercase tracking-widest ${i === step ? 'text-white' : ''}`}>{s.label}</p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && <div className={`flex-1 h-px mx-6 transition-all duration-1000 ${i < step ? 'bg-primary/40' : 'bg-white/5'}`} />}
                </div>
              ))}
            </div>

            {/* Steps Content with AnimatePresence */}
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/90 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-2xl"
                >
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-4">Artisan Requirements</h3>
                      <div className="space-y-4">
                        <InputGroup label="Full Name" icon={User}>
                          <Input value={form.client_name} onChange={e => set('client_name', e.target.value)} placeholder="Enter legal name" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none text-base italic" />
                        </InputGroup>
                        <InputGroup label="Institutional Email" icon={Mail}>
                          <Input value={form.client_email} onChange={e => set('client_email', e.target.value)} type="email" placeholder="name@domain.com" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none text-base italic" />
                        </InputGroup>
                        <InputGroup label="Phone (M-Pesa)" icon={Phone}>
                          <Input value={form.client_phone} onChange={e => set('client_phone', e.target.value)} placeholder="+254 7XX XXX XXX" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none text-base italic" />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-4">Event Parameters</h3>
                      <div className="space-y-4">
                        <InputGroup label="Occasion" icon={Music2}>
                          <Select value={form.event_type} onValueChange={v => set('event_type', v)}>
                            <SelectTrigger className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none italic">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-primary/10 dark:border-white/10">
                              {['Wedding', 'Corporate Dinner', 'Restaurant Night', 'Hotel Lounge', 'Private Party', 'Festival'].map(e => (
                                <SelectItem key={e} value={e}>{e}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </InputGroup>
                        <div className="grid grid-cols-2 gap-4">
                          <InputGroup label="Date" icon={Calendar}>
                            <Input value={form.event_date} onChange={e => set('event_date', e.target.value)} type="date" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none italic appearance-none" />
                          </InputGroup>
                          <InputGroup label="Time" icon={Clock}>
                            <Input value={form.event_time} onChange={e => set('event_time', e.target.value)} type="time" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none italic appearance-none" />
                          </InputGroup>
                        </div>
                        <InputGroup label="Location" icon={MapPin}>
                          <Input value={form.event_location} onChange={e => set('event_location', e.target.value)} placeholder="Venue name & address" className="h-14 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none text-base italic" />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <InputGroup label="Technical Rider / Performance Notes" icon={Star}>
                        <textarea value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Specify dress code, setlist preferences, or technical requirements..." rows={4} className="w-full h-32 rounded-3xl bg-secondary/5 dark:bg-white/5 border-none p-6 text-base italic focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none" />
                      </InputGroup>
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(1)}
                    disabled={!form.client_name || !form.client_email || !form.event_type || !form.event_date || !form.event_location}
                    className="w-full h-20 rounded-3xl bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-[0.5em] shadow-2xl shadow-primary/30 transition-all duration-700 group"
                  >
                    Validate Configuration
                    <LucideArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/90 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 md:p-14 space-y-12 shadow-2xl"
                >
                  <div className="space-y-8">
                    <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Protocol Verification</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-12">
                      <ReviewItem icon={User} label="Authorized Client" value={form.client_name} subValue={form.client_email} />
                      <ReviewItem icon={Music2} label="Selected Artisan" value={musician.name} subValue={musician.genre} />
                      <ReviewItem icon={Calendar} label="Engagement Time" value={form.event_date} subValue={`Starts at ${form.event_time || 'TBD'}`} />
                      <ReviewItem icon={MapPin} label="Deployment Location" value={form.event_location} />
                    </div>

                    {form.notes && (
                      <div className="p-8 rounded-[2rem] bg-secondary/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-4">Technical Rider Notes</p>
                        <p className="text-lg italic text-black/60 dark:text-white/60 leading-relaxed">"{form.notes}"</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button variant="ghost" onClick={() => setStep(0)} className="h-20 flex-1 rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                      Adjust Details
                    </Button>
                    <Button onClick={() => setStep(2)} className="h-20 flex-1 rounded-3xl bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-primary/30 group">
                      Initialize Vault
                      <LucideArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/90 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[3rem] p-10 md:p-14 space-y-12 shadow-2xl"
                >
                  <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-1">Escrow Protocol Active</p>
                      <p className="text-xs text-black/40 dark:text-white/40 font-medium italic">"Your honorarium is held in our institutional-grade vault. Funds are only released post-performance."</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <InputGroup label="M-Pesa Authorized Number" icon={Phone}>
                      <Input placeholder="+254 7XX XXX XXX" className="h-16 rounded-2xl bg-secondary/5 dark:bg-white/5 border-none text-xl font-mono tracking-widest text-black dark:text-white" defaultValue={form.client_phone} />
                    </InputGroup>

                    <div className="p-10 rounded-[2.5rem] bg-secondary/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest">Artisan Fee</span>
                        <span className="text-lg font-bold text-black dark:text-white">KES {total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-black/40 dark:text-white/20 uppercase tracking-widest">Platform Honorarium (15%)</span>
                        <span className="text-sm font-medium text-primary italic">Included</span>
                      </div>
                      <div className="h-px bg-black/5 dark:bg-white/5" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-black dark:text-white">Total Ledger Amount</span>
                        <span className="text-3xl font-black text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">KES {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Button
                      onClick={() => setSubmitted(true)}
                      className="w-full h-24 rounded-3xl bg-primary hover:bg-primary/90 text-white text-[12px] font-black uppercase tracking-[0.5em] shadow-2xl shadow-primary/40 group"
                    >
                      <CreditCard className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                      Authorize KES {total.toLocaleString()} via M-Pesa
                    </Button>
                    <button onClick={() => setStep(1)} className="w-full text-[10px] font-black text-black/40 dark:text-white/20 uppercase tracking-[0.5em] hover:text-primary transition-colors">
                      Return to Technical Review
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Sidebar — Musician Summary & Flow */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-secondary rounded-[3rem] overflow-hidden border border-primary/10 dark:border-white/5 shadow-2xl premium-shadow group"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={musician.img} alt={musician.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-white text-xs font-black tracking-tighter">{musician.rating} <span className="text-white/40 font-normal">ARTISAN_RATING</span></span>
                  </div>
                  <h3 className="text-3xl font-heading font-black text-white tracking-tight">{musician.name}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                    <MapPin className="w-3 h-3 text-primary" /> {musician.location}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Fee Structure</p>
                    <p className="text-2xl font-black text-black dark:text-white">KES {musician.price.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                    <Music2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protocol Flow */}
            <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 space-y-8 shadow-2xl">
              <div className="flex items-center gap-4">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <h4 className="text-[10px] font-black text-black dark:text-white uppercase tracking-[0.5em]">Protocol Sequence</h4>
              </div>
              
              <div className="space-y-6">
                {['Broadcast Request', 'Artisan Acceptance', 'Escrow Security', 'Performance Event', 'Session Confirmation', 'Vault Disbursement'].map((s, i) => (
                  <div key={s} className="flex items-center gap-6 group">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-[10px] font-black text-black/40 dark:text-white/20 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      0{i + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, icon: Icon, children }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 px-1">
        <Icon className="w-3 h-3 text-primary/60" />
        <label className="text-[9px] font-black text-black/40 dark:text-white/40 uppercase tracking-[0.3em]">{label}</label>
      </div>
      {children}
    </div>
  );
}

function ReviewItem({ icon: Icon, label, value, subValue }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-inner">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-1.5">{label}</p>
        <p className="text-xl font-bold text-black dark:text-white tracking-tight">{value}</p>
        {subValue && <p className="text-xs text-black/40 dark:text-white/40 font-medium italic mt-0.5">{subValue}</p>}
      </div>
    </div>
  );
}
