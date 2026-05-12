import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", textClassName = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex items-center ${className}`}
    >
      <span className={`font-heading font-black text-2xl md:text-3xl tracking-[0.2em] uppercase text-foreground relative group flex items-center ${textClassName}`}>
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          className="transition-colors duration-500 group-hover:text-primary"
        >
          SAX
        </motion.span>
        <motion.span 
          className="font-light text-primary/60 group-hover:text-primary transition-all duration-700 ml-1"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, letterSpacing: "0.4em" }}
        >
          LINK
        </motion.span>
        
        {/* The Elite Underline */}
        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary/40 via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
        
        {/* Technical Registry Marker */}
        <div className="absolute -top-4 left-0 text-[7px] font-black tracking-[0.5em] text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          EST_2026 // ALPHA
        </div>
      </span>
    </motion.div>
  );
};

export default Logo;
