import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BadgeCheck, MapPin, Clock, Globe, BarChart3, ArrowLeft, Calendar, CheckCircle, MessageCircle, Music2, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { MUSICIANS } from '@/lib/musicians-data';

const sampleReviews = [
  { name: 'Sarah M.', initials: 'SM', date: 'April 2025', rating: 5, comment: 'Absolutely phenomenal performance. Our guests were captivated all evening. Will book again!' },
  { name: 'David N.', initials: 'DN', date: 'March 2025', rating: 5, comment: 'Punctual, professional, and incredibly talented. The best decision we made for our event.' },
  { name: 'Aisha K.', initials: 'AK', date: 'February 2025', rating: 5, comment: 'The music created the perfect atmosphere. We received so many compliments from our clients.' },
];

export default function MusicianProfile() {
  const { id } = useParams();
  const musician = MUSICIANS.find((m) => m.id === parseInt(id)) || MUSICIANS[0];
  const [date, setDate] = useState('');

  const others = MUSICIANS.filter((m) => m.id !== musician.id).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-[80vh] bg-background text-foreground">
      <Navbar />
      
      <div className="pt-24">
        {/* Breadcrumb & Actions */}
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link to="/browse" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Browse
          </Link>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="rounded-full border border-border/50">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full border border-border/50">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 pb-12"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero card */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
                <div className="aspect-[16/8] relative overflow-hidden group">
                  <img src={musician.img} alt={musician.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-primary/90 backdrop-blur-md border-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3">
                          <BadgeCheck className="w-3 h-3" /> Verified Artist
                        </Badge>
                      </div>
                      <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">{musician.name}</h1>
                      <p className="text-white/70 mt-2 flex items-center gap-2 text-sm font-light">
                        <MapPin className="w-4 h-4 text-primary" /> {musician.location} · {musician.genre}
                      </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] px-6 py-4 text-center shadow-2xl">
                      <div className="text-3xl font-heading font-bold text-white flex items-center justify-center gap-2">
                        <Star className="w-6 h-6 fill-primary text-primary" /> {musician.rating}
                      </div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">{musician.reviews} reviews</div>
                    </div>
                  </div>
                </div>

                {/* Stat pills */}
                <div className="p-8 grid grid-cols-3 gap-6 bg-gradient-to-b from-card to-secondary/10">
                  <StatPill icon={Clock} label="Response" value={musician.responseTime} />
                  <StatPill icon={BarChart3} label="Punctuality" value={musician.completionRate} />
                  <StatPill icon={Music2} label="Experience" value={musician.experience} />
                </div>
              </motion.div>

              {/* About */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Artistic Journey</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-light italic">
                  &quot;{musician.bio}&quot;
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {musician.tags.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-secondary/50 text-muted-foreground px-4 py-2 rounded-xl">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Performance Gallery */}
              {musician.performanceVideos && musician.performanceVideos.length > 0 && (
                <motion.div variants={itemVariants} className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Performance Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {musician.performanceVideos.map((videoUrl, index) => (
                      <div key={index} className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-lg group">
                        <div className="aspect-video relative">
                          <video 
                            src={videoUrl} 
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Languages & Skills */}
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-[2rem] p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" /> Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {musician.languages.map((l) => (
                      <div key={l} className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 border border-border/50">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-foreground">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-[2rem] p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                    <Music2 className="w-5 h-5 text-primary" /> Performance
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Specializes in high-end acoustic and amplified performances for diverse audiences.
                  </p>
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-[2.5rem] p-10">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Guest Experiences
                  </h2>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {musician.reviews} total reviews
                  </span>
                </div>
                <div className="space-y-8">
                  {sampleReviews.map((r, idx) => (
                    <div key={r.name} className={`pb-8 border-b border-border last:border-0 last:pb-0 ${idx > 0 ? 'pt-2' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">{r.name}</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">{r.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 bg-secondary/30 px-2 py-1 rounded-lg">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4 leading-relaxed font-light italic text-sm">&quot;{r.comment}&quot;</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* More musicians */}
              <motion.div variants={itemVariants}>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Curated Recommendations</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {others.map((m) => (
                    <Link key={m.id} to={`/musician/${m.id}`} className="group block bg-card border border-border rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                      <div className="aspect-square overflow-hidden relative">
                        <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-5">
                        <p className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{m.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{m.location}</p>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                          <span className="text-sm font-bold text-foreground">KES {m.price.toLocaleString()}</span>
                          <Star className="w-3 h-3 fill-primary text-primary" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column — booking card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:sticky lg:top-32 self-start space-y-6"
            >
              <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <div className="flex flex-col gap-1 mb-8">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Investment</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-heading font-bold text-foreground">KES {musician.price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground font-light">/ event</span>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="group">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 px-1 block group-focus-within:text-primary transition-colors">Selection Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-border rounded-2xl pl-11 pr-4 py-4 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 px-1 block">Occasion</label>
                    <select className="w-full border border-border rounded-2xl px-5 py-4 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                      <option>Select event type</option>
                      <option>Wedding Ceremony</option>
                      <option>Corporate Gala</option>
                      <option>Hotel Engagement</option>
                      <option>Private Celebration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to={`/book/${musician.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-8 text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                      Reserve Now
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full rounded-2xl py-8 text-sm font-bold uppercase tracking-widest gap-3 border-border hover:bg-secondary/50 transition-all">
                    <MessageCircle className="w-4 h-4" /> Message Artist
                  </Button>
                </div>
                
                <p className="text-[10px] font-bold text-center text-muted-foreground uppercase tracking-[0.1em] mt-6">
                  Secure M-Pesa Payment Guarantee
                </p>
              </div>

              {/* Premium Guarantee */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-primary/5 border border-primary/20 rounded-[2rem] p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">SaxLink Elite Protection</p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed font-light">We guarantee a world-class performance. In the rare case of issues, our concierge team will handle everything.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

function StatPill({ icon: IconComponent, label, value }) {
  return (
    <div className="flex flex-col items-center text-center p-2 group">
      <div className="w-10 h-10 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
      </div>
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-sm font-bold text-foreground tracking-tight">{value}</p>
    </div>
  );
}
