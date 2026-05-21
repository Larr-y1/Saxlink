
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, ChevronRight, ChevronLeft, Check, Star, BadgeCheck, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EVENT_TYPES, INSTRUMENTS, MUSICIANS } from '@/lib/musicians-data';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import SEO from '@/components/common/SEO';

const steps = [
  { id: 'event-type', title: 'Event Type' },
  { id: 'details', title: 'Date & Location' },
  { id: 'entertainment', title: 'Entertainment' },
  { id: 'matches', title: 'Matches' }
];

export default function FindMusician() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    time: '',
    duration: '3',
    location: '',
    instruments: [],
    requirements: ''
  });
  const [matches, setMatches] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAppStore(state => state.isAuthenticated);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInstrument = (inst) => {
    setFormData(prev => {
      const current = prev.instruments;
      if (current.includes(inst)) {
        return { ...prev, instruments: current.filter(i => i !== inst) };
      }
      return { ...prev, instruments: [...current, inst] };
    });
  };

  const handleNext = () => {
    if (currentStep === 2) {
      simulateFiltering();
    }
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleBookNow = (artistId) => {
    if (!isAuthenticated) {
      navigate(`/login?from=/book/${artistId}`);
    } else {
      navigate(`/book/${artistId}`);
    }
  };

  const simulateFiltering = () => {
    setIsFiltering(true);
    setTimeout(() => {
      const filtered = MUSICIANS.filter(m => {
        // If no instruments selected, show all
        if (formData.instruments.length === 0) return true;
        // Check if musician's instrument is in the selected list
        return formData.instruments.includes(m.instrument);
      });
      setMatches(filtered);
      setIsFiltering(false);
    }, 1500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-8">What type of event are you hosting?</h2>
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
                      ? 'border-primary bg-primary/5' 
                      : 'border-primary/10 hover:border-primary/30 bg-card'
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
            <h2 className="text-3xl font-heading font-bold mb-8">When and where?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-wider text-primary">Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    type="date" 
                    className="pl-12 h-14 rounded-2xl" 
                    value={formData.date}
                    onChange={(e) => updateFormData('date', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-wider text-primary">Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    type="time" 
                    className="pl-12 h-14 rounded-2xl" 
                    value={formData.time}
                    onChange={(e) => updateFormData('time', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-primary">Location (City / Venue)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input 
                    placeholder="e.g. Nairobi — Westlands" 
                    className="pl-12 h-14 rounded-2xl" 
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
                className="w-full h-14 rounded-full text-lg font-bold"
              >
                Continue <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-8">What entertainment do you need?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {INSTRUMENTS.filter(i => i !== 'All').map(inst => (
                <button
                  key={inst}
                  onClick={() => toggleInstrument(inst)}
                  className={`p-6 flex flex-col items-center gap-4 rounded-3xl border-2 transition-all ${
                    formData.instruments.includes(inst) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-primary/10 hover:border-primary/30 bg-card'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.instruments.includes(inst) ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    {formData.instruments.includes(inst) ? <Check className="w-6 h-6" /> : <Music className="w-6 h-6" />}
                  </div>
                  <span className="font-bold">{inst}</span>
                </button>
              ))}
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">Special Requirements (Optional)</label>
              <textarea 
                placeholder="e.g. Need elegant dinner ambience." 
                className="w-full p-6 rounded-3xl border-2 border-primary/10 focus:border-primary outline-none min-h-[120px] transition-colors bg-card"
                value={formData.requirements}
                onChange={(e) => updateFormData('requirements', e.target.value)}
              />
            </div>
            <div className="pt-4">
              <Button 
                onClick={handleNext} 
                className="w-full h-14 rounded-full text-lg font-bold"
              >
                Find My Matches <Search className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-heading font-bold">Recommended for your event</h2>
              <Badge variant="outline" className="px-4 py-2 rounded-full border-primary/20 text-primary">
                {matches.length} matches found
              </Badge>
            </div>
            
            {isFiltering ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <p className="text-lg font-medium text-muted-foreground animate-pulse">Our system is matching you with the perfect artists...</p>
              </div>
            ) : matches.length > 0 ? (
              <div className="grid gap-6">
                {matches.map(artist => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative bg-card border border-primary/10 rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all p-6 md:p-8 flex flex-col md:flex-row gap-8 premium-shadow"
                  >
                    <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={artist.img} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BadgeCheck className="w-4 h-4 text-primary" />
                          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Verified Professional</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">{artist.name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="font-bold text-foreground">{artist.rating}</span>
                            <span>rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Music className="w-4 h-4 text-primary" />
                            <span>{artist.instrument}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{artist.location}</span>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed line-clamp-2 text-muted-foreground">{artist.bio}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-primary/5 pt-6">
                        <div className="text-xl font-bold">
                          KSh {artist.price.toLocaleString()}
                        </div>
                        <Button 
                          onClick={() => handleBookNow(artist.id)}
                          className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/10 rounded-[3rem] border-2 border-dashed border-primary/20">
                <Filter className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No perfect matches yet</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your filters or entertainment types to see more artists.</p>
                <Button variant="outline" onClick={() => setCurrentStep(2)} className="rounded-full">
                  Adjust Entertainment Types
                </Button>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background transition-colors duration-1000">
      <SEO 
        title="Find the Perfect Musician" 
        description="Tell us about your event and we'll match you with verified, world-class musicians."
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Stepper */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-primary/10 -z-10" />
          {steps.map((step, idx) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                  idx <= currentStep ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-card border-2 border-primary/10 text-muted-foreground'
                }`}
              >
                {idx < currentStep ? <Check className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${idx <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
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
          {currentStep > 0 && currentStep < 3 && (
            <button 
              onClick={handleBack}
              className="absolute -left-16 top-0 hidden xl:flex w-12 h-12 rounded-full border border-primary/10 items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="bg-card/30 backdrop-blur-xl border border-primary/10 rounded-[3rem] p-8 md:p-16 premium-shadow">
            {renderStep()}
          </div>
        </motion.div>
        
        {currentStep < 3 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Trusted by premium hotels and event organizers across East Africa.
          </p>
        )}
      </div>
    </div>
  );
}
