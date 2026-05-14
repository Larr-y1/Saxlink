import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Search, ChevronDown, HelpCircle, LifeBuoy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const faqs = [
  {
    question: "How do I book a musician?",
    answer: "Browse our curated list of musicians, select your favorite, choose your date and event type, and click 'Reserve Now'. Our team will coordinate the rest."
  },
  {
    question: "How does payment work?",
    answer: "We support secure M-Pesa payments. Your payment is held securely and only released to the musician after the successful completion of your event."
  },
  {
    question: "Can I cancel a booking?",
    answer: "Yes, you can cancel a booking. Our cancellation policy varies depending on how close to the event date the cancellation occurs. Please refer to our Terms of Service for details."
  },
  {
    question: "Are the musicians verified?",
    answer: "Every musician on SaxLink undergoes a thorough verification process, including talent assessment and background checks, to ensure high-quality performances."
  },
  {
    question: "What happens if a musician cancels?",
    answer: "In the rare event of a musician cancellation, SaxLink will provide a full refund or help you find an equivalent replacement immediately."
  }
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

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
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <LifeBuoy className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Support Center</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">How can we help you?</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Find answers to common questions or reach out to our dedicated support team for personalized assistance.
          </p>
          
          <div className="max-w-xl mx-auto mt-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search for articles or questions..." 
              className="pl-12 h-14 rounded-2xl border-border bg-card shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {/* Contact Methods */}
          <ContactCard 
            icon={MessageSquare}
            title="WhatsApp Enquiries"
            description="Speak with our elite concierge instantly for any inquiries."
            action="Start Chat"
            href="https://wa.me/254757566786?text=Hello%20SaxLink%2C%20I'd%20like%20to%20make%20an%20enquiry%20as%20a%20client/musician."
            variants={itemVariants}
          />
          <ContactCard 
            icon={Mail}
            title="Email Support"
            description="Send us a detailed message and we'll reply within 2 hours."
            action="Send Email"
            href="mailto:support@saxlink.co"
            variants={itemVariants}
          />
          <ContactCard 
            icon={Phone}
            title="Direct Line"
            description="Available Mon-Fri, 9am - 6pm for direct support."
            action="Call +254 757 566 786"
            href="tel:+254757566786"
            variants={itemVariants}
          />
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-bold text-foreground">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still need help? */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-primary rounded-[3rem] p-12 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)]" />
          <h2 className="font-heading text-3xl font-bold mb-4 relative z-10">Still have questions?</h2>
          <p className="opacity-90 max-w-xl mx-auto mb-8 relative z-10 font-light">
            Our support team is here to help you make your event extraordinary. Don't hesitate to reach out!
          </p>
          <a href="https://wa.me/254757566786?text=Hello%20SaxLink%2C%20I'd%20like%20to%20make%20an%20enquiry%20as%20a%20client/musician.">
            <Button variant="secondary" className="rounded-xl px-8 py-6 h-auto font-bold uppercase tracking-widest gap-2 relative z-10 group">
              Contact Us Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

function ContactCard({ icon: Icon, title, description, action, variants, href }) {
  return (
    <motion.div 
      variants={variants}
      className="bg-card border border-border rounded-[2rem] p-8 text-center hover:border-primary/50 transition-all group"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{description}</p>
      {href ? (
        <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
          <Button variant="outline" className="rounded-xl w-full border-border hover:bg-secondary transition-all">
            {action}
          </Button>
        </a>
      ) : (
        <Button variant="outline" className="rounded-xl w-full border-border hover:bg-secondary transition-all">
          {action}
        </Button>
      )}
    </motion.div>
  );
}
