import React from 'react';
import { motion } from 'framer-motion';

const SoundWave = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-20 dark:opacity-30"
      >
        <motion.path
          d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          animate={{
            d: [
              "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500",
              "M0,500 C200,600 300,400 500,500 C700,600 800,400 1000,500",
              "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary/50"
          animate={{
            d: [
              "M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550",
              "M0,550 C200,650 300,450 500,550 C700,650 800,450 1000,550",
              "M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
      
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen" />
    </div>
  );
};

export default SoundWave;