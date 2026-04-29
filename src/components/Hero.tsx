import React from "react";
import { motion } from "motion/react";

export function Hero() {
  const leaves = [
    { id: 1, top: "20%", left: "15%", rotate: 45, scale: 0.8 },
    { id: 2, top: "70%", left: "10%", rotate: -20, scale: 1.2 },
    { id: 3, top: "30%", right: "10%", rotate: 160, scale: 0.9 },
    { id: 4, top: "80%", right: "20%", rotate: 10, scale: 1.1 },
    { id: 5, top: "15%", left: "45%", rotate: -90, scale: 0.7 },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute z-0"
          style={{ ...leaf }}
          animate={{
            y: [0, -20, 0],
            rotate: [leaf.rotate, leaf.rotate + 10, leaf.rotate],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl filter grayscale opacity-20 brightness-0 text-brand-green">🌿</div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="text-green-600 text-lg">★</span>
          ))}
          <span className="text-sm font-bold uppercase tracking-widest ml-2">High Grade Cannabis</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-brand-green"
        >
          Premium Bud,<br />
          <span className="text-brand-green/20 stroke-brand-green">Crafted For Buddies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-brand-dark/60 mb-10"
        >
          Small-batch, hand-trimmed, never dry.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-green text-brand-earth px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest shadow-xl shadow-brand-green/20"
        >
          Shop Collection
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 relative w-full max-w-5xl px-4"
      >
        <img 
          src="/images/hero_premium_bud.png" 
          alt="Premium Cannabis Flower" 
          className="w-full h-auto rounded-[60px] shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
