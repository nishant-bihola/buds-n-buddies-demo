import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  const productImages = [
    { src: "/images/island_pink_kush.png", bg: "bg-brand-earth/40", alt: "Island Pink Kush" },
    { src: "/images/high_voltage_vape.png", bg: "bg-brand-green/20", alt: "High Voltage Vape" },
    { src: "/images/multi_pack_prerolls.png", bg: "bg-yellow-200/50", alt: "Multi Pack Prerolls" },
    { src: "/images/bhang_cookies_cream.png", bg: "bg-blue-200/50", alt: "Bhang Cookies & Cream" },
    { src: "/images/nano_banana_kush.png", bg: "bg-orange-200/50", alt: "Nano Banana Kush" },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [productImages.length]);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            365 Days a Year | Open Until 2 AM
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8 text-brand-green"
          >
            The Price You Want.<br />The Hours You Need.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl text-brand-dark/70 leading-relaxed mb-8">
              At Bud n’ Buddies, we don’t think quality should come with a "premium" tax. We’ve cut the fluff to give our community the best prices in town on sustainably grown, hand-trimmed flower. Whether it’s a holiday or just a Tuesday at midnight, we’re open until 2 AM every single day.
            </p>
            
            <div className="mb-10 p-6 bg-brand-earth/30 rounded-2xl border border-brand-green/10">
              <p className="text-brand-green font-black uppercase tracking-tight text-xl italic">
                "Top-shelf quality. Bottom-line prices. Always open."
              </p>
            </div>

          </motion.div>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[300px] md:max-w-[450px]">
            {productImages.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 10 }}
                animate={{ 
                  opacity: currentIndex === idx ? 1 : currentIndex === (idx + 1) % productImages.length ? 0.3 : 0,
                  scale: currentIndex === idx ? 1 : 0.9,
                  x: currentIndex === idx ? 0 : currentIndex === (idx + 1) % productImages.length ? -40 : 40,
                  rotate: currentIndex === idx ? 0 : currentIndex === (idx + 1) % productImages.length ? -5 : 5,
                  zIndex: currentIndex === idx ? 20 : 10
                }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[40px] overflow-hidden ${img.bg} p-12 shadow-2xl border-8 border-white`}
              >
                <img 
                  src={img.src} 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform hover:scale-110 duration-500"
                  alt={img.alt}
                />
              </motion.div>
            ))}
            
            {/* Floating decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-earth/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
