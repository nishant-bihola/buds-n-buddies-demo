import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export function AgeVerification() {
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("age-verified");
    if (verified !== "true") {
      setShowGate(true);
    }
  }, []);

  const handleVerify = (verified: boolean) => {
    if (verified) {
      localStorage.setItem("age-verified", "true");
      setShowGate(false);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <AnimatePresence>
      {showGate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Layer with Parallax-like Depth */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/images/hero_premium_bud.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 blur-md scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-green/40" />
          </motion.div>

          <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
            {/* Logo Section */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <img 
                src="/images/buds_n_buddies_logo.png" 
                alt="Bud n' Buddies" 
                className="h-24 md:h-32 w-auto object-contain brightness-0 invert" 
              />
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[60px] shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-brand-earth/10 border border-brand-earth/20">
                <ShieldCheck className="text-brand-earth" size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-earth">Identity Verification</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                Are you of<br />
                <span className="text-brand-earth">Legal Age?</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                By entering this site, you confirm that you are at least 19 years of age or the legal age in your jurisdiction to purchase cannabis products.
              </p>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg mx-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVerify(true)}
                  className="flex-1 bg-brand-earth text-brand-green py-6 rounded-[24px] text-xl font-black uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  Yes, I am 19+
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVerify(false)}
                  className="flex-1 bg-white/5 text-white/40 py-6 rounded-[24px] text-xl font-black uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center gap-3"
                >
                  No, Exit
                  <ExternalLink size={20} />
                </motion.button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 text-white/20">
                <div className="h-px w-8 bg-current" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Always Enjoy Responsibly</span>
                <div className="h-px w-8 bg-current" />
              </div>
            </motion.div>

            {/* Footer Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 text-white/20 text-xs font-bold uppercase tracking-widest"
            >
              Bud n' Buddies &copy; 2024 &bull; Craft Quality &bull; Community Prices
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
