import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import type { Product } from "../types";
import { INITIAL_PRODUCTS } from "../constants";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      
      // First check local constants
      const localProduct = INITIAL_PRODUCTS.find(p => p.id === id);
      if (localProduct) {
        setProduct(localProduct);
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="pt-40 text-center text-brand-green font-bold text-2xl animate-pulse">Loading Buddy...</div>;
  if (!product) return <div className="pt-40 text-center text-brand-green font-bold text-2xl text-red-500">Product Not Found.</div>;

  return (
    <div className="pt-32 pb-24 bg-brand-earth min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-brand-green/60 hover:text-brand-green font-bold uppercase tracking-widest text-xs mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-white rounded-[60px] overflow-hidden border border-brand-green/5 shadow-2xl p-12 flex items-center justify-center relative"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {product.isBestSeller && (
              <span className="absolute top-10 left-10 bg-brand-green text-brand-earth px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                Staff Pick
              </span>
            )}
          </motion.div>

          {/* Details Side */}
          <div className="py-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-brand-green text-brand-green" />)}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-green leading-none mb-6">
              {product.name}
            </h1>

            <div className="text-4xl font-black text-brand-dark mb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-xl text-brand-dark/60 leading-relaxed mb-10 font-medium">
              {product.description}
            </p>

            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center border border-brand-green/10 rounded-full bg-white p-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-brand-green font-bold text-xl hover:bg-brand-earth rounded-full transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-black text-brand-green">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-brand-green font-bold text-xl hover:bg-brand-earth rounded-full transition-colors"
                >
                  +
                </button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-4 bg-brand-green text-brand-earth py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-green/20">
                Add to Cart
                <ShoppingCart size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-brand-green/10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-brand-green/5">
                  <ShieldCheck className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm mb-1">Quality Guaranteed</h4>
                  <p className="text-xs text-brand-dark/40 font-bold uppercase tracking-widest">Lab-Tested & Verified</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-brand-green/5">
                  <Truck className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm mb-1">Discrete Delivery</h4>
                  <p className="text-xs text-brand-dark/40 font-bold uppercase tracking-widest">Same day Local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
