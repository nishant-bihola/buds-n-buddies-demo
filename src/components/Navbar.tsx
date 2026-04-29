import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Menu, User, LogOut, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { user, login, logout } = useAuth();
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-earth/80 backdrop-blur-md border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
        {/* Left Section: Menu & Links */}
        <div className="flex-1 flex items-center gap-4 sm:gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand-green text-brand-earth rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-wider relative z-[60]"
          >
            {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
            <span className="hidden sm:inline">{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
          
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? "text-brand-green" : "text-brand-green/50 hover:text-brand-green"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Section: Logo */}
        <Link to="/" className="flex items-center justify-center h-full px-2 sm:px-4 group">
          <img 
            src="/images/buds_n_buddies_logo.png" 
            alt="Bud n' Buddies" 
            className="h-8 sm:h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Right Section: Actions */}
        <div className="flex-1 flex items-center justify-end gap-2 sm:gap-3">
          {user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-brand-green/20" />
              <button 
                onClick={logout}
                className="text-brand-green/60 hover:text-brand-green transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center gap-1 sm:gap-2 text-brand-green hover:opacity-70 transition-opacity"
            >
              <User size={18} />
              <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-widest">Login</span>
            </button>
          )}

          <div className="hidden sm:block h-4 w-px bg-brand-green/20 mx-1" />

          <Link to="/shop" className="hidden lg:flex items-center gap-2 px-4 xl:px-8 py-2 xl:py-3 bg-brand-green text-brand-earth rounded-full text-[10px] font-bold uppercase tracking-wider hover:scale-105 transition-transform whitespace-nowrap">
            Shop Now
          </Link>
          
          <Link 
            to="/checkout" 
            className="relative p-2 bg-brand-green/5 rounded-full cursor-pointer hover:bg-brand-green/10 transition-colors"
          >
            <ShoppingCart size={20} className="text-brand-green" />
            <motion.span 
              key={cartCount}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 bg-brand-green text-brand-earth text-[9px] w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full font-bold"
            >
              {cartCount}
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-green z-50 flex flex-col items-center justify-center h-screen"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-earth hover:text-brand-light-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-4 text-brand-earth/50"
            >
              <p className="font-bold uppercase tracking-widest text-xs">Based in Canada</p>
              <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                <span>Instagram</span>
                <span>Twitter</span>
                <span>Leafly</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
