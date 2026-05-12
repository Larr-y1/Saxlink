
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { text: 'Jazz', style: 'font-black' },
  { text: 'Weddings', style: 'font-light italic font-heading text-primary' },
  { text: 'Afro-Soul', style: 'font-black' },
  { text: 'Nairobi', style: 'font-light italic font-heading' },
  { text: 'Gospel', style: 'font-black' },
  { text: 'Corporate Soirées', style: 'font-light italic font-heading text-primary' },
  { text: 'Bossa Nova', style: 'font-black' },
  { text: 'Mombasa', style: 'font-light italic font-heading' },
  { text: 'Hotel Lounges', style: 'font-black text-primary' },
  { text: 'R&B', style: 'font-black' },
  { text: 'Kisumu', style: 'font-light italic font-heading' },
  { text: 'Private Residencies', style: 'font-black text-primary' },
];

export default function MarqueeBanner() {
  return (
    <div className="bg-[#faf9ff] dark:bg-background pt-48 pb-24 overflow-hidden relative transition-colors duration-1000">
      {/* Ghost Background Layer - Using Framer Motion for guaranteed movement */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden opacity-[0.04] dark:opacity-[0.03]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-[15vw] font-black uppercase tracking-tighter text-black dark:text-foreground"
        >
          <span>SAXLINK • PERFORMANCE • ARTISTRY • </span>
          <span>SAXLINK • PERFORMANCE • ARTISTRY • </span>
          <span>SAXLINK • PERFORMANCE • ARTISTRY • </span>
        </motion.div>
      </div>

      <div className="relative border-y border-primary/10 py-10 bg-black/[0.02] dark:bg-white/5 backdrop-blur-sm transition-colors duration-1000">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span 
              key={i} 
              className={`inline-flex items-center mx-16 text-xl md:text-2xl uppercase tracking-[0.2em] transition-all hover:opacity-100 opacity-80 ${item.style.includes('text-primary') ? item.style : `${item.style} text-black dark:text-white`}`}
            >
              {item.text}
              <span className="ml-16 text-primary/30 font-light">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}