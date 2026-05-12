import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Star, BadgeCheck, MapPin, X, ArrowRight, ChevronDown, Sparkles, Music, Filter, SortAsc } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { MUSICIANS, GENRES, LOCATIONS, EVENT_TYPES } from '@/lib/musicians-data';

export default function Browse() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All Cities');
  const [genre, setGenre] = useState('All');
  const [event, setEvent] = useState('All Events');
  const [maxPrice, setMaxPrice] = useState([20000]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return MUSICIANS
      .filter((m) => {
        const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.genre.toLowerCase().includes(search.toLowerCase());
        const matchLocation = location === 'All Cities' || m.location === location;
        const matchGenre = genre === 'All' || m.genre.toLowerCase().includes(genre.toLowerCase());
        const matchPrice = m.price <= maxPrice[0];
        return matchSearch && matchLocation && matchGenre && matchPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        if (sortBy === 'reviews') return b.reviews - a.reviews;
        return 0;
      });
  }, [search, location, genre, maxPrice, sortBy]);

  const activeFilterCount = [
    location !== 'All Cities',
    genre !== 'All',
    event !== 'All Events',
    maxPrice[0] < 20000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000 pb-32">
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Header Section */}
      <div className="pt-48 relative z-10">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-px bg-primary" />
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Elite Registry</span>
              </div>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
                Discover Your <br />
                <span className="italic font-light text-primary/80">Virtuoso.</span>
              </h1>
              <p className="text-2xl text-white/80 dark:text-white/60 font-light leading-relaxed max-w-2xl italic">
                "Hand-picked professionals for Kenya&apos;s most distinguished stages and private engagements."
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="hidden lg:block w-64 h-64 opacity-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
                <motion.circle cx="50" cy="50" r="40" animate={{ strokeDasharray: ["0 100", "100 100"] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.path d="M30 50 Q50 20 70 50 T100 50" animate={{ pathLength: [0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              </svg>
            </motion.div>
          </div>

          {/* SEARCH & FILTERS BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-white/90 dark:bg-white/[0.03] backdrop-blur-3xl border border-primary/10 dark:border-white/10 p-4 md:p-6 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 group w-full">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/40 group-focus-within:text-primary transition-all duration-500" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, genre or vibe..."
                  className="pl-20 pr-10 rounded-full bg-secondary/5 dark:bg-white/5 border-primary/5 dark:border-white/10 h-20 text-xl font-light italic text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all border-none"
                />
              </div>

              <div className="flex items-center gap-4 w-full lg:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`rounded-full h-20 px-12 gap-6 text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 ${
                    showFilters || activeFilterCount > 0 
                      ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/40' 
                      : 'bg-white/50 dark:bg-white/5 border-primary/10 dark:border-white/10 text-black dark:text-white hover:border-primary/40'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-2 w-8 h-8 rounded-full bg-white text-primary text-[10px] flex items-center justify-center font-black">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>

                <div className="hidden md:flex items-center gap-4 bg-secondary/5 dark:bg-white/5 h-20 px-8 rounded-full border border-primary/5 dark:border-white/10">
                  <SortAsc className="w-5 h-5 text-primary/40" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 bg-transparent border-none text-[11px] font-black uppercase tracking-[0.3em] text-black dark:text-white h-auto p-0 focus:ring-0">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[2rem] border-primary/10 dark:border-white/10 bg-white/90 dark:bg-background backdrop-blur-3xl p-4">
                      <SelectItem value="rating" className="rounded-xl px-6 py-4 text-[10px] font-black uppercase tracking-widest cursor-pointer">Top Rated</SelectItem>
                      <SelectItem value="price_low" className="rounded-xl px-6 py-4 text-[10px] font-black uppercase tracking-widest cursor-pointer">Price: Low to High</SelectItem>
                      <SelectItem value="price_high" className="rounded-xl px-6 py-4 text-[10px] font-black uppercase tracking-widest cursor-pointer">Price: High to Low</SelectItem>
                      <SelectItem value="reviews" className="rounded-xl px-6 py-4 text-[10px] font-black uppercase tracking-widest cursor-pointer">Most Reviews</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* EXPANDABLE FILTERS */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 10 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full left-0 w-full z-20"
                >
                  <div className="bg-white/95 dark:bg-background/95 backdrop-blur-3xl border border-primary/10 dark:border-white/10 rounded-[3rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <FilterGroup label="Institutional Region">
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger className="rounded-2xl border-primary/10 dark:border-white/10 bg-secondary/5 dark:bg-white/5 h-16 text-[10px] font-black uppercase tracking-widest px-6">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-[1.5rem] border-primary/10 dark:border-white/10">
                          {LOCATIONS.map((l) => <SelectItem key={l} value={l} className="rounded-lg">{l}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </FilterGroup>

                    <FilterGroup label="Musical Genre">
                      <Select value={genre} onValueChange={setGenre}>
                        <SelectTrigger className="rounded-2xl border-primary/10 dark:border-white/10 bg-secondary/5 dark:bg-white/5 h-16 text-[10px] font-black uppercase tracking-widest px-6">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-[1.5rem] border-primary/10 dark:border-white/10">
                          {GENRES.map((g) => <SelectItem key={g} value={g} className="rounded-lg">{g}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </FilterGroup>

                    <FilterGroup label="Engagement Type">
                      <Select value={event} onValueChange={setEvent}>
                        <SelectTrigger className="rounded-2xl border-primary/10 dark:border-white/10 bg-secondary/5 dark:bg-white/5 h-16 text-[10px] font-black uppercase tracking-widest px-6">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-[1.5rem] border-primary/10 dark:border-white/10">
                          {EVENT_TYPES.map((e) => <SelectItem key={e} value={e} className="rounded-lg">{e}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </FilterGroup>

                    <FilterGroup label={`Technical Rate: KES ${maxPrice[0].toLocaleString()}`}>
                      <div className="pt-6">
                        <Slider
                          min={3000} max={20000} step={500}
                          value={maxPrice}
                          onValueChange={setMaxPrice}
                          className="py-4"
                        />
                        <div className="flex justify-between text-[9px] text-primary font-black tracking-[0.3em] uppercase mt-4">
                          <span>3k</span>
                          <span>20k+</span>
                        </div>
                      </div>
                    </FilterGroup>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 py-40">
        {/* Musician Grid */}
        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-64 bg-secondary/5 dark:bg-white/[0.02] rounded-[4rem] border border-dashed border-primary/20 dark:border-white/10"
          >
            <div className="max-w-md mx-auto px-6">
              <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                <Search className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6 text-black dark:text-white tracking-tight uppercase">Registry Mismatch</h3>
              <p className="text-xl text-gray-900 dark:text-white/40 font-semibold md:font-light mb-12 italic">"Adjust your technical parameters or contact our concierge for a custom talent search."</p>
              <Button 
                variant="ghost" 
                className="rounded-full px-12 py-8 text-[11px] font-black uppercase tracking-[0.4em] border border-primary/20 hover:bg-primary hover:text-white transition-all duration-700"
                onClick={() => { setSearch(''); setLocation('All Cities'); setGenre('All'); setMaxPrice([20000]); }}
              >
                Reset Parameters
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((m, idx) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40 }}
                  transition={{ duration: 1, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={`/musician/${m.id}`} className="group block h-full">
                    <div className="relative bg-[#faf9ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[4rem] overflow-hidden transition-all duration-1000 premium-shadow group-hover:border-primary/40 group-hover:-translate-y-4 group-hover:shadow-[0_50px_100px_-20px_rgba(var(--primary),0.1)]">
                      
                      {/* Artistic Portrait Container */}
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img 
                          src={m.img} 
                          alt={m.name} 
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2.5s] ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
                        
                        <div className="absolute top-8 left-8">
                          <Badge className="bg-black/60 backdrop-blur-3xl border-white/10 text-white text-[9px] font-black uppercase tracking-[0.3em] gap-3 py-3 px-6 rounded-2xl">
                            <BadgeCheck className="w-4 h-4 text-primary" /> Verified
                          </Badge>
                        </div>
                        
                        <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-3xl rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="text-white text-[11px] font-black">{m.rating}</span>
                        </div>

                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-1000 ease-out">
                            <ArrowRight className="w-10 h-10" />
                          </div>
                        </div>
                      </div>

                      <div className="p-12">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-heading text-3xl font-black text-black dark:text-white tracking-tighter group-hover:text-primary transition-colors duration-700">{m.name}</h3>
                        </div>
                        
                        <div className="flex items-center gap-4 text-[11px] font-black text-gray-900 dark:text-white/40 uppercase tracking-[0.3em] mb-10 transition-colors">
                          <MapPin className="w-4 h-4 text-primary" />
                          {m.location}
                        </div>

                        <div className="flex flex-wrap gap-3 mb-12">
                          {m.tags.slice(0, 2).map((t) => (
                            <span key={t} className="text-[9px] font-black uppercase tracking-[0.3em] bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary px-4 py-2 rounded-xl">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="pt-10 border-t border-primary/10 dark:border-white/5 flex items-end justify-between">
                          <div>
                            <p className="text-[10px] font-black text-gray-700 dark:text-white/20 uppercase tracking-[0.5em] mb-2 transition-colors">Honorarium_Starting</p>
                            <span className="text-3xl font-heading font-black text-black dark:text-white group-hover:text-primary transition-colors duration-700">
                              KES {m.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div className="flex flex-col gap-6">
      <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-1">{label}</label>
      {children}
    </div>
  );
}
