import React from "react";
import { motion } from "motion/react";

export function LogoMarquee() {
  const logos = [
    { name: "High Times", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/High_Times_logo.svg/1200px-High_Times_logo.svg.png" },
    { name: "Leafly", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Leafly_logo.svg/1200px-Leafly_logo.svg.png" },
    { name: "Weedmaps", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Weedmaps_Logo.svg/1200px-Weedmaps_Logo.svg.png" },
    { name: "Herb", url: "https://images.squarespace-cdn.com/content/v1/589ca3e01b631b53e8e19c0b/1488219491024-V4V0Z0X3O3O3O3O3O3O3/HERB+Logo.png" },
  ];

  return (
    <section className="bg-brand-green py-12 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white/30 font-bold uppercase tracking-widest text-sm whitespace-nowrap">
          As Seen In
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 font-black text-brand-earth/20 italic text-2xl uppercase">
          {logos.map((logo, i) => (
             <div key={i} className="hover:text-white transition-colors cursor-default">
               {logo.name}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
