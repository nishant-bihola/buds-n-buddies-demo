import React from "react";
import { motion } from "motion/react";
import type { Product } from "../types";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

  return (
    <motion.div
      layout
      className="group relative flex flex-col pt-12 pb-8 px-8 bg-brand-earth/5 rounded-[40px] hover:bg-brand-earth/10 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-20" />
      <div className="flex justify-between items-start mb-8">
        {product.isBestSeller && (
          <span className="bg-brand-earth text-brand-green px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Best Seller
          </span>
        )}
        <span className="ml-auto text-xl font-bold font-mono">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <div className="relative h-[400px] flex items-center justify-center">
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-brand-light-green/20 blur-[100px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-4/5 h-4/5 object-cover rounded-3xl drop-shadow-xl"
          animate={{
            rotate: isHovered ? 0 : 5,
            y: [0, -10, 0],
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 0.4 },
          }}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter">
            {product.name}
          </h3>
          <p className="text-brand-earth/50 text-xs font-bold uppercase tracking-widest mt-1">
            {product.category}
          </p>
        </div>
        <motion.div 
          animate={{ rotate: isHovered ? 45 : 0 }}
          className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full group-hover:bg-brand-earth group-hover:text-brand-green transition-colors"
        >
          <ArrowUpRight size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
}
