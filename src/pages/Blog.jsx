import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45, ease: 'easeOut' } }),
};

const posts = [
  {
    id: 1,
    title: 'How Live Saxophone Music Increases Restaurant Revenue by 30%',
    excerpt: 'A deep dive into the data behind ambient live music in Nairobi\'s dining scene — and why more restaurateurs are choosing the sax.',
    category: 'Business',
    readTime: '5 min read',
    date: 'May 2, 2025',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Choosing the Right Saxophonist for Your Wedding',
    excerpt: 'From the ceremony walk-in to the first dance, here\'s how to match your musician\'s style to every moment of your big day.',
    category: 'Weddings',
    readTime: '7 min read',
    date: 'Apr 28, 2025',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'From WhatsApp Gigs to KES 80K a Month: A Musician\'s Journey',
    excerpt: 'James Kariuki shares how switching to SaxLink transformed his income, work-life balance, and creative freedom as a professional musician.',
    category: 'Musician Stories',
    readTime: '6 min read',
    date: 'Apr 20, 2025',
    img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Corporate Event Music: Why Saxophone Is the Smart Choice',
    excerpt: 'Jazz, neo-soul, and smooth classics create a sophisticated ambiance that impresses clients and keeps guests engaged. Here\'s the science.',
    category: 'Events',
    readTime: '4 min read',
    date: 'Apr 15, 2025',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'The Rise of Live Music Culture in Nairobi\'s Hotel Scene',
    excerpt: 'How Kenya\'s top hotels are investing in live entertainment to differentiate their guest experience and build loyalty.',
    category: 'Industry',
    readTime: '8 min read',
    date: 'Apr 8, 2025',
    img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'M-Pesa and Live Music: Building a Trust-First Booking Economy',
    excerpt: 'Why escrow payments are the key to unlocking a professional, scalable live music marketplace in East Africa.',
    category: 'Technology',
    readTime: '5 min read',
    date: 'Apr 1, 2025',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
];

const categories = ['All', 'Business', 'Weddings', 'Musician Stories', 'Events', 'Industry', 'Technology'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="min-h-[80vh] bg-white dark:bg-background relative overflow-hidden transition-colors duration-1000">
      <SEO 
        title="Insights & Editorial" 
        description="Explore stories, technical guides, and artisan insights from the world of elite live music in Kenya on the SaxLink blog."
      />
      {/* THE HYBRID ANCHOR */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black dark:bg-white/[0.02] transition-all duration-1000 z-0" />
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Navbar />
      <div className="pt-24 relative z-10 pb-16">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-px bg-primary" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.7em]">The Editorial Hub</span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
            The SaxLink <br />
            <span className="italic font-light text-primary/80">Insights.</span>
          </h1>
          <p className="text-2xl text-white/80 dark:text-white/60 font-light leading-relaxed max-w-lg italic">
            "Stories, technical guides, and artisan insights from the world of elite live music in Kenya."
          </p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[4rem] overflow-hidden aspect-[16/7] cursor-pointer shadow-2xl"
            >
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all [transition-duration:2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end max-w-4xl">
                <span className={`text-[10px] font-black px-5 py-2 rounded-full w-fit mb-8 uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-3xl text-white`}>
                  Featured _ {featured.category}
                </span>
                <h2 className="font-heading text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-8">{featured.title}</h2>
                <p className="text-white/70 mt-3 text-xl leading-relaxed italic max-w-2xl mb-12">"{featured.excerpt}"</p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3 text-[10px] font-black text-white/40 uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-primary" /> {featured.readTime}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">{featured.date}</div>
                  <Link to={`/blog/${featured.id}`} className="ml-auto">
                    <Button className="bg-white text-black hover:bg-primary hover:text-white rounded-full px-12 py-8 text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 shadow-2xl">
                      Read Dossier <ArrowRight className="w-5 h-5 ml-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-700 ${
                  activeCategory === c 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                    : 'bg-white/50 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-black dark:text-white hover:border-primary/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                className="group bg-[#f8f7ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[3rem] overflow-hidden hover:border-primary/40 hover:shadow-2xl transition-all duration-1000 cursor-pointer flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all [transition-duration:2s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-black px-4 py-2 rounded-xl bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-black text-gray-400 dark:text-white/20 flex items-center gap-3 uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-primary" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-black text-black dark:text-white leading-tight group-hover:text-primary transition-colors duration-700 mb-6">{post.title}</h3>
                  <p className="text-base text-gray-900 dark:text-white/80 leading-relaxed font-semibold md:font-light italic flex-1 transition-colors">"{post.excerpt}"</p>
                  <div className="flex items-center justify-between mt-10 pt-8 border-t border-primary/10 dark:border-white/10">
                    <span className="text-[10px] font-black text-gray-400 dark:text-white/20 uppercase tracking-widest">{post.date}</span>
                    <Button variant="ghost" className="text-[10px] font-black tracking-[0.3em] uppercase p-0 h-auto text-primary hover:text-black dark:hover:text-white transition-colors bg-transparent hover:bg-transparent">
                      Read Full Report <ArrowRight className="w-4 h-4 ml-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2 }}
            className="mt-12 bg-[#faf9ff] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-[4rem] p-12 md:p-16 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-6 transition-colors">Elite <span className="italic font-light text-primary">Intelligence.</span></h2>
              <p className="text-xl text-gray-900 dark:text-white/60 font-semibold md:font-light italic max-w-lg mx-auto mb-12 transition-colors">"Subscribe for weekly insights on live music architecture, artisan spotlights, and technical guides."</p>
              <div className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto">
                <input 
                  placeholder="Registry Email Address..." 
                  className="flex-1 border-b-2 border-primary/20 bg-transparent px-2 py-6 text-xl font-light italic text-black dark:text-white focus:outline-none focus:border-primary transition-all placeholder:text-gray-300 dark:placeholder:text-white/10" 
                />
                <Button className="bg-primary text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full px-12 py-8 text-[12px] font-black uppercase tracking-[0.4em] transition-all duration-700 shadow-2xl">
                  Initialize Feed
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}