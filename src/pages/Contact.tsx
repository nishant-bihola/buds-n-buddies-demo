import React from "react";
import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-earth min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-brand-green leading-[0.9] mb-12"
            >
              Let's <br /> Connect.
            </motion.h1>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-brand-green text-brand-earth rounded-[24px] flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Our Greenhouse</h3>
                  <p className="text-brand-dark/60 text-lg leading-relaxed">
                    123 Hybrid Way, Green District<br />
                    Van, BC V6B 1A1, Canada
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-brand-green text-brand-earth rounded-[24px] flex items-center justify-center shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Email Us</h3>
                  <p className="text-brand-dark/60 text-lg leading-relaxed">
                    hello@budnbuddies.ca<br />
                    support@budnbuddies.ca
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-brand-green text-brand-earth rounded-[24px] flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Call Buddy</h3>
                  <p className="text-brand-dark/60 text-lg leading-relaxed">
                    +1 (800) GROW-BUD<br />
                    (604) 555-0123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-[60px] shadow-2xl border border-brand-green/5"
          >
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-green mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-brand-earth/50 border border-brand-green/10 rounded-full px-6 py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-brand-earth/50 border border-brand-green/10 rounded-full px-6 py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-brand-earth/50 border border-brand-green/10 rounded-full px-6 py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 ml-4">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us everything..."
                  className="w-full bg-brand-earth/50 border border-brand-green/10 rounded-[32px] px-6 py-4 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all font-medium resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-4 bg-brand-green text-brand-earth py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-green/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
