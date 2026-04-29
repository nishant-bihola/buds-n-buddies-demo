import React from "react";
import { motion } from "motion/react";
import type { Product } from "../types";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

export function ProductGrid({ products, loading }: ProductGridProps) {
  return (
    <section className="py-24 px-4 bg-brand-green text-brand-earth overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
              Fresh Menu
            </h2>
          </div>
          <Link 
            to="/shop"
            className="flex items-center gap-4 border border-brand-earth/20 hover:bg-brand-earth hover:text-brand-green px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors self-start"
          >
            View Menu
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white/5 rounded-3xl h-[600px] animate-pulse" />
            ))
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col pt-10 pb-8 px-8 bg-[#1e4d2b] rounded-[40px] transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Link wraps everything EXCEPT the Add to Cart button */}
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10 relative z-20 pointer-events-none">
        {product.isBestSeller ? (
          <span className="bg-white text-[#1e4d2b] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            Best Seller
          </span>
        ) : (
          <div />
        )}
        <span className="text-xl font-bold text-white tracking-tight">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-[350px] flex items-center justify-center mb-6">
        <motion.div
          className="absolute w-[280px] h-[280px] bg-white rounded-xl shadow-2xl"
          animate={{
            rotate: isHovered ? -2 : -6,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        
        <motion.img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-[240px] h-[240px] object-contain"
          animate={{
            rotate: isHovered ? 0 : 2,
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -10 : 0
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Bottom Content */}
      <div className="mt-auto flex items-center justify-between relative z-20">
        <div className="flex-1 min-w-0 mr-4 pointer-events-none">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-brand-light-green transition-colors truncate">
            {product.name}
          </h3>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">
            {product.category}
          </p>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-12 h-12 flex items-center justify-center bg-white text-[#1e4d2b] rounded-full hover:scale-110 active:scale-95 transition-all shadow-lg shrink-0 pointer-events-auto"
          title="Add to Cart"
        >
          <Plus size={24} />
        </button>
      </div>
    </motion.div>
  );
}
