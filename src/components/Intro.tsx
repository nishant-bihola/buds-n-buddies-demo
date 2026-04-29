import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <img 
              src="/images/island_pink_kush.png" 
              className="w-full h-full object-cover"
              alt="Hand trimmed flower"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[3/4] overflow-hidden rounded-3xl mt-20"
          >
            <img 
              src="/images/premium_bud_brand.png" 
              className="w-full h-full object-cover"
              alt="Premium Bud"
            />
          </motion.div>
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8 text-brand-green"
          >
            Pure Quality, Crafted for the Community.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
              Cultivated with Care
              <span className="w-8 h-px bg-brand-green"></span>
            </h3>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-10">
              At Bud n' Buddies, we believe in the power of quality cannabis to bring people together. Our flower is sustainably grown, hand-trimmed, and cured to perfection to ensure the smoothest experience possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-brand-green text-brand-earth px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Our Story
              <div className="bg-brand-earth/20 rounded-full p-1 group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
