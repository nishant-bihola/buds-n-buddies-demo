import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Menu, User, LogOut, X } from "lucide-react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

export function Navbar() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-earth/80 backdrop-blur-md border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-green text-brand-earth rounded-full text-sm font-bold uppercase tracking-wider relative z-[60]"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="hidden sm:inline">{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? "text-brand-green" : "text-brand-green/50 hover:text-brand-green"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 h-16 flex items-center">
          <img src="https://budnbuddies.ca/s/media/f/3b/9c/de/60/3b9cde60-00ed-4b8a-a7c3-2d10c55a81c7.png" alt="Bud n' Buddies Cannabis" className="h-full w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-8 h-8 rounded-full border border-brand-green/20" />
              <button 
                onClick={handleLogout}
                className="text-brand-green/60 hover:text-brand-green transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="flex items-center gap-2 text-brand-green hover:opacity-70 transition-opacity"
            >
              <User size={20} />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">Login</span>
            </button>
          )}

          <div className="h-4 w-px bg-brand-green/20 mx-2" />

          <Link to="/shop" className="hidden md:flex items-center gap-2 px-8 py-3 bg-brand-green text-brand-earth rounded-full text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform">
            Shop Now
          </Link>
          <div className="relative p-2 bg-brand-green/5 rounded-full cursor-pointer hover:bg-brand-green/10 transition-colors">
            <ShoppingCart size={24} className="text-brand-green" />
            <span className="absolute -top-1 -right-1 bg-brand-green text-brand-earth text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </div>
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
