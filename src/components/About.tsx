import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-square relative overflow-hidden rounded-[80px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1599406536574-8ac992634cca?auto=format&fit=crop&q=80&w=1200"
            alt="Buds n Buddies Community"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-8 text-brand-green"
          >
            A collective passion for the plant, rooted in quality and buddy-ship.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-brand-dark/60 leading-relaxed mb-10">
              Bud n' Buddies was founded to create a space where enthusiasts and newcomers alike could find premium cannabis without the complexity. Our mission is simple: to provide hand-selected, high-grade products that we are proud to share with our own buddies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-brand-green text-brand-earth px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Our Vibe
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
