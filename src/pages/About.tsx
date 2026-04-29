import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Zap, Target, Users } from "lucide-react";

export function AboutPage() {
  const stats = [
    { label: "Happy Buddies", value: "10k+", icon: Users },
    { label: "Purity Grade", value: "99.9%", icon: Zap },
    { label: "Community First", value: "100%", icon: Target },
  ];

  return (
    <div className="pt-32 bg-brand-earth">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-brand-green mb-8"
          >
            Rooted in <br />
            <span className="text-brand-green/20 stroke-brand-green line-through decoration-brand-green/20">Mystery</span> Community
          </motion.h1>
          <p className="text-xl md:text-2xl text-brand-dark/60 max-w-3xl mx-auto font-medium">
            We started as a local collective of friends who just wanted better quality. Today, we're proud to share that standard with all our buddies.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-green text-brand-earth">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-12 border border-white/10 rounded-[60px]"
            >
              <div className="w-16 h-16 bg-brand-light-green/20 rounded-full flex items-center justify-center mb-6 text-brand-light-green">
                <stat.icon size={32} />
              </div>
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1628155255427-466030999054?auto=format&fit=crop&q=80&w=1200" 
               alt="Our Greenhouse" 
               className="rounded-[60px] shadow-2xl"
             />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-light-green rounded-[60px] flex flex-col items-center justify-center text-brand-green font-black text-center p-8 rotate-12 shadow-xl">
               <span className="text-4xl">EST.</span>
               <span className="text-6xl">2018</span>
             </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-green mb-8">
              It's Not Just <br /> Business, It's Bud.
            </h2>
            <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
              <p>
                Founded in the heart of the community, Bud n' Buddies was born out of a simple realization: the connection between growers and buddies was being lost in the noise of mass production.
              </p>
              <p>
                We decided to scale back, focus on small-batch cultivation, and prioritize the terpene profiles and purity that we ourselves look for. Every strain we carry is one we've tested, loved, and approved.
              </p>
              <p>
                Our mission is to provide an elevated experience that remains grounded in the values of transparency, quality, and mutual respect.
              </p>
            </div>
            <button className="mt-12 group flex items-center gap-4 bg-brand-green text-brand-earth px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest">
              Join the Circle
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
