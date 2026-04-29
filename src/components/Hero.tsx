import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  const leaves = [
    { id: 1, top: "15%", left: "5%", rotate: 45, scale: 0.6, blur: "blur-sm" },
    { id: 2, top: "60%", left: "8%", rotate: -20, scale: 1, blur: "none" },
    { id: 3, top: "25%", right: "5%", rotate: 160, scale: 0.8, blur: "blur-[2px]" },
    { id: 4, top: "75%", right: "12%", rotate: 10, scale: 1.2, blur: "none" },
    { id: 5, top: "10%", left: "40%", rotate: -90, scale: 0.5, blur: "blur-md" },
    { id: 6, top: "85%", left: "30%", rotate: 30, scale: 0.7, blur: "blur-sm" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Parallax Image */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero_premium_bud.png" 
          alt="Premium Cannabis Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-earth/90 via-brand-earth/60 to-brand-earth" />
      </motion.div>

      {/* Floating Leaves with Depth */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute z-10 pointer-events-none ${leaf.blur}`}
          style={{ ...leaf }}
          animate={{
            y: [0, -30, 0],
            rotate: [leaf.rotate, leaf.rotate + 15, leaf.rotate],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-5xl filter brightness-0 text-brand-green select-none">🌿</div>
        </motion.div>
      ))}

      <div className="relative z-20 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 backdrop-blur-md"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-brand-green text-xs">★</span>
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">The Gold Standard of Green</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-brand-green"
        >
          Your Best Buds.<br />
          <span className="text-transparent stroke-brand-green stroke-2 webkit-text-stroke-brand-green uppercase">Daily Buddies.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl font-bold text-brand-dark mb-12 leading-relaxed"
        >
          We’ve stripped away the "premium" markup to bring you the culture of top-shelf cannabis at prices that respect your wallet. 365 days a year, until 2 AM.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 90, 39, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-brand-earth px-14 py-6 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl transition-all"
            >
              Shop The Collection
            </motion.button>
          </Link>
          
          <Link to="/shop" className="flex items-center gap-4 text-brand-green font-bold uppercase tracking-widest text-sm cursor-pointer group">
            <span className="w-12 h-px bg-brand-green/30 group-hover:w-16 transition-all"></span>
            See Live Menu
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-brand-green to-transparent" />
      </motion.div>
    </section>
  );
}
