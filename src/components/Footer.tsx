import React from "react";
import { Instagram, Twitter, Facebook, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const links = [
    { 
      title: "Navigation", 
      items: [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
      ] 
    },
    { 
      title: "Discover", 
      items: [
        { name: "Dried Flower", path: "/shop" },
        { name: "Edibles", path: "/shop" },
        { name: "Vapes", path: "/shop" },
        { name: "Gear", path: "/shop" }
      ] 
    },
    { 
      title: "Community", 
      items: [
        { name: "Reviews", path: "/" },
        { name: "Our Vibe", path: "/about" },
        { name: "Grow Circle", path: "/contact" }
      ] 
    },
  ];

  return (
    <footer className="bg-brand-green text-brand-earth pt-24 pb-12 px-4 shadow-[0_-20px_50px_-10px_rgba(30,77,43,0.3)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 self-start">
            <div className="mb-8 h-12 flex items-center">
              <img src="https://budnbuddies.ca/s/media/f/3b/9c/de/60/3b9cde60-00ed-4b8a-a7c3-2d10c55a81c7.png" alt="Bud n' Buddies" className="h-full w-auto object-contain brightness-0 invert opacity-80" />
            </div>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <div key={i} className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-brand-green transition-colors cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {links.map((group, i) => (
              <div key={i}>
                <h4 className="text-white/40 text-xs font-black uppercase tracking-widest mb-6">{group.title}</h4>
                <ul className="space-y-4 font-bold text-sm uppercase tracking-wide">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <Link 
                        to={item.path}
                        className="hover:translate-x-1 hover:text-white transition-all inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-white/5 p-8 rounded-[40px] flex flex-col items-center text-center">
            <div className="flex gap-1 mb-4">
               {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-brand-light-green text-xs">★</span>)}
               <span className="text-[10px] ml-2 font-bold opacity-40 uppercase">Top Rated Dispensary</span>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tighter mb-4">Loved by the community</h4>
            <p className="text-sm opacity-50 mb-8">Praised for pure potency and consistent quality, we are the go-to for enthusiasts everywhere.</p>
            <div className="text-6xl mb-4">🍁</div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>©2026 Bud n’ Buddies Cannabis. All Rights Reserved.</p>
          <div className="flex gap-8">
             <span>Terms of Service</span>
             <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
