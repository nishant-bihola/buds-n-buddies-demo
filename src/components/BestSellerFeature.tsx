import React from "react";
import { motion } from "motion/react";
import { Check, X, ArrowUpRight } from "lucide-react";

export function BestSellerFeature() {
  const benefits = [
    { text: "Long-lasting Effects", type: "pos" },
    { text: "Organic Cultivation", type: "pos" },
    { text: "NO SYNTHETIC PESTICIDES", type: "neg" },
    { text: "NO FAKE TERPENES", type: "neg" },
    { text: "NO HARSH CHEMICALS", type: "neg" },
  ];

  return (
    <section className="py-24 px-4 overflow-hidden bg-brand-earth">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 text-brand-green"
          >
            HAND-PICKED BUDS<br />MADE FOR EVERY BUDDY
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-brand-green text-brand-earth px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest mb-16"
          >
            Shop Flower
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </motion.button>

          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">
              We grow cannabis the right way.
            </h3>
            <p className="text-brand-dark/60 text-lg mb-8 max-w-md">
              Crafted for elevated experiences and deep relaxation alike, our products are pure, potent, and hand-selected for quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-full ${b.type === 'pos' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {b.type === 'pos' ? <Check size={14} strokeWidth={4} /> : <X size={14} strokeWidth={4} />}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
            alt="Bud Feature"
            className="w-full h-auto rounded-[60px] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
