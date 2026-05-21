
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight as LucideArrowRight,
  CheckCircle, 
  Calendar, 
  MapPin, 
  Music2, 
  User, 
  Clock, 
  Phone,
  Mail,
  Star,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MUSICIANS, EVENT_TYPES } from '@/lib/musicians-data';
import Navbar from '@/components/landing/Navbar';
import SEO from '@/components/common/SEO';

const STEPS = [
  { id: 'event-type', title: 'Event Type', icon: Music2 },
  { id: 'details', title: 'When & Where', icon: Calendar },
  { id: 'personal', title: 'Personal Info', icon: User },
  { id: 'review', title: 'Review', icon: CheckCircle }
];

export default function BookingRequest() {
  const { id } = useParams();
  const musician = MUSICIANS.find(m => m.id === parseInt(id)) || MUSICIANS[0];
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client_name: '', 
    client_email: '', 
    client_phone: '',
    eventType: '', 
    date: '', 
    time: '', 
    location: '', 
    notes: '',
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === STEPS.length - 1) {
      setSubmitted(true);
    } else {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 bg-background flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-1000">
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
            <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground tracking-tighter">Booking Initialized.</h1>
            <p className="text-muted-foreground text-lg font-medium italic">
              "Your performance request for <span className="text-primary font-bold italic">{musician.name}</span> has been broadcast to the Artisan console."
            </p>
          </div>

          <div className="bg-card/40 backdrop-blur-3xl border border-border rounded-[3rem] p-10 text-left space-y-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Technical Summary</span>
              <div className="flex-grow h-px bg-primary/10" />
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Artisan</p>
                <p className="text-base font-bold text-foreground">{musician.name}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Occasion</p>
                <p className="text-base font-bold text-foreground">{formData.eventType}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Engagement Date</p>
                <p className="text-base font-bold text-foreground">{formData.date}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Vault Status</p>
                <p className="text-base font-bold text-emerald-500">PENDING_ACCEPTANCE</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border flex justify-between items-center">
              <span className="text-lg font-black text-foreground">Professional Request</span>
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-4 py-2 rounded-full">Secured Protocol</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1 h-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] border-border hover:bg-foreground hover:text-background transition-all"
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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">What type of event for {musician.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EVENT_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('eventType', type);
                    handleNext();
                  }}
                  className={`p-6 text-left rounded-3xl border-2 transition-all ${
                    formData.eventType === type 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/30 bg-card text-muted-foreground'
                  }`}
                >
                  <span className="font-bold text-lg">{type}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">When and where?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    type="date" 
                    className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                    value={formData.date}
                    onChange={(e) => updateFormData('date', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    type="time" 
                    className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                    value={formData.time}
                    onChange={(e) => updateFormData('time', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Location (City / Venue)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    placeholder="e.g. Nairobi — Westlands" 
                    className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                onClick={handleNext} 
                disabled={!formData.date || !formData.location}
                className="w-full h-14 rounded-full text-lg font-bold bg-primary text-white"
              >
                Continue <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Your Information</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    placeholder="Enter legal name" 
                    className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                    value={formData.client_name}
                    onChange={(e) => updateFormData('client_name', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Institutional Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input 
                      placeholder="name@domain.com" 
                      className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                      value={formData.client_email}
                      onChange={(e) => updateFormData('client_email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Phone (M-Pesa)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input 
                      placeholder="+254 7XX XXX XXX" 
                      className="pl-12 h-14 rounded-2xl bg-card border-border text-foreground" 
                      value={formData.client_phone}
                      onChange={(e) => updateFormData('client_phone', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Performance Notes (Optional)</label>
                <textarea 
                  placeholder="Specify dress code, setlist preferences, etc." 
                  className="w-full p-6 rounded-3xl border-2 border-border focus:border-primary outline-none min-h-[120px] transition-colors bg-card text-foreground"
                  value={formData.notes}
                  onChange={(e) => updateFormData('notes', e.target.value)}
                />
              </div>
            </div>
            <div className="pt-4">
              <Button 
                onClick={handleNext} 
                disabled={!formData.client_name || !formData.client_email || !formData.client_phone}
                className="w-full h-14 rounded-full text-lg font-bold bg-primary text-white"
              >
                Review Request <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Review & Confirm</h2>
            
            <div className="bg-card rounded-[2rem] p-8 border border-border space-y-8">
              <div className="grid sm:grid-cols-2 gap-8 text-foreground">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Artisan</p>
                  <p className="text-xl font-bold">{musician.name}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Event Type</p>
                  <p className="text-xl font-bold">{formData.eventType}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Date & Time</p>
                  <p className="text-xl font-bold">{formData.date} at {formData.time}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">{formData.location}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Client Contact</p>
                  <p className="text-xl font-bold">{formData.client_name} ({formData.client_phone})</p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button 
                onClick={handleNext} 
                className="w-full h-20 rounded-3xl bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-[0.5em] shadow-2xl shadow-primary/30 transition-all"
              >
                Initialize Engagement Request
                <LucideArrowRight className="ml-4 w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setCurrentStep(0)}
                className="w-full h-14 rounded-full text-muted-foreground hover:text-foreground"
              >
                Reset Form
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-1000">
      <SEO 
        title={`Book ${musician.name}`} 
        description={`Initialize your professional engagement with ${musician.name}.`}
      />
      
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="pt-32 relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <Link to={`/musician/${musician.id}`} className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Artisan Dossier
        </Link>

        {/* Progress Stepper */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-border -z-10" />
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                  idx <= currentStep ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-card border-2 border-border text-muted-foreground/40'
                }`}
              >
                {idx < currentStep ? <Check className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${idx <= currentStep ? 'text-primary' : 'text-muted-foreground/40'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {currentStep > 0 && (
            <button 
              onClick={handleBack}
              className="absolute -left-16 top-0 hidden xl:flex w-12 h-12 rounded-full border border-border items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="bg-card/30 backdrop-blur-xl border border-border rounded-[3rem] p-8 md:p-16 premium-shadow">
            {renderStep()}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
