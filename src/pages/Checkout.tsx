import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Checkout() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setIsOrdered(true);
      clearCart();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="pt-40 pb-24 px-4 bg-brand-earth min-h-screen flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-brand-green text-brand-earth rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-green mb-4">Order Placed!</h1>
        <p className="text-xl text-brand-dark/60 max-w-md mb-12 font-medium">
          Your premium buds are being prepared for discrete delivery. Check your email for tracking details.
        </p>
        <Link 
          to="/" 
          className="bg-brand-green text-brand-earth px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 px-4 bg-brand-earth min-h-screen flex flex-col items-center text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-brand-green mb-8">Your cart is empty</h1>
        <Link 
          to="/shop" 
          className="bg-brand-green text-brand-earth px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-earth min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-green mb-12">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-8">
            {/* Delivery Info */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-brand-green/5 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <Truck size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Delivery Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">Shipping Address</label>
                  <input type="text" placeholder="123 Bud Street, Vancouver, BC" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-brand-green/5 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Payment Method</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">Card Number</label>
                    <input type="text" placeholder="**** **** **** ****" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 ml-4">CVC</label>
                    <input type="text" placeholder="***" className="w-full bg-brand-earth/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-green outline-none font-medium" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-5">
            <div className="bg-brand-green rounded-[40px] p-8 md:p-12 text-brand-earth sticky top-32 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 relative z-10">Order Summary</h2>
              
              <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar relative z-10">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-white rounded-2xl p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black uppercase tracking-tight truncate">{item.name}</h4>
                      <p className="text-brand-earth/60 text-xs font-bold uppercase tracking-widest">${item.price.toFixed(2)} each</p>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center bg-white/10 rounded-full p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-earth/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
                <div className="flex justify-between text-brand-earth/60 font-bold uppercase tracking-widest text-xs">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-brand-earth/60 font-bold uppercase tracking-widest text-xs">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-2xl font-black uppercase tracking-tighter pt-4">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full bg-white text-brand-green py-6 rounded-full mt-10 font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Complete Order"}
                {!loading && <ArrowRight size={20} />}
              </button>

              <div className="mt-8 flex items-center justify-center gap-6 text-brand-earth/40">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Discrete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
