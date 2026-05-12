import { useState } from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
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
const categoryColors = {
  Business: 'bg-blue-500/10 text-blue-400',
  Weddings: 'bg-pink-500/10 text-pink-400',
  'Musician Stories': 'bg-purple-500/10 text-purple-400',
  Events: 'bg-orange-500/10 text-orange-400',
  Industry: 'bg-green-500/10 text-green-400',
  Technology: 'bg-cyan-500/10 text-cyan-400',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-6 py-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Insights</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">The SaxLink Blog</h1>
          <p className="text-muted-foreground mt-3 max-w-lg">Stories, guides, and insights from the world of live music in Kenya.</p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="group relative rounded-3xl overflow-hidden aspect-[16/7] cursor-pointer">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end max-w-2xl">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${categoryColors[featured.category] || 'bg-primary/20 text-primary'}`}>
                  {featured.category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{featured.title}</h2>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-5">
                  <span className="text-xs text-white/50 flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                  <span className="text-xs text-white/50">{featured.date}</span>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full text-xs gap-1 ml-auto">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === c ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div key={post.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${categoryColors[post.category] || 'bg-muted text-muted-foreground'}`}>
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-xs gap-1 text-primary hover:text-primary/80 p-0 h-auto">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Get Stories in Your Inbox</h2>
            <p className="text-muted-foreground mt-3 max-w-sm mx-auto">Weekly insights on live music, event planning tips, and musician spotlights.</p>
            <div className="flex gap-3 max-w-sm mx-auto mt-6">
              <input placeholder="your@email.com" className="flex-1 border border-border rounded-full px-5 py-3 text-sm bg-background text-foreground focus:outline-none focus:border-primary/50" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}