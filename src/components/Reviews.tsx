import React from "react";
import { motion } from "motion/react";

export function Reviews() {
  const reviews = [
    { name: "Daniela A.", blurb: "Best Bud Around", quote: "Smooth, clean, and incredible potency. The Nano Banana Kush is a game changer for my evening relaxation." },
    { name: "Mike S.", blurb: "MY GO-TO DISPENSARY", quote: "Bud n' Buddies always has the freshest flower and the staff actually knows their stuff. Top tier quality every time." },
    { name: "Jared D.", blurb: "CONSISTENT QUALITY", quote: "No harshness at all. Just clean, hand-trimmed bud that smokes perfectly. I've tried many spots, and this is the best." },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(197,225,165,0.4)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="text-brand-earth text-5xl md:text-7xl font-black uppercase tracking-tighter text-center md:text-left">
            What Our Buddies Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-earth p-10 rounded-[40px] flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-brand-green text-sm">★</span>
                ))}
              </div>
              <h4 className="text-brand-green font-black uppercase text-xl mb-4">
                {review.blurb}
              </h4>
              <p className="text-lg text-brand-dark/60 font-medium italic mb-10 italic">
                "{review.quote}"
              </p>
              <div className="mt-auto pt-6 border-t border-brand-green/10 flex items-center justify-between">
                <span className="font-bold text-brand-green">{review.name}</span>
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
