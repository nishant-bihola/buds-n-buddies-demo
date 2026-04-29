import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import type { Product } from "../types";
import { INITIAL_PRODUCTS } from "../constants";

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Dried Flower", "Edible", "Vape", "Pre-Roll", "Beverage", "Accessories"];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        if (!querySnapshot.empty) {
          const prodData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
          setProducts(prodData);
        }
      } catch (error) {
        console.warn("Firestore fetch failed, using local fallback:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-brand-earth min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-brand-green leading-none mb-4">
              The Menu
            </h1>
            <p className="text-xl text-brand-dark/50 font-medium">
              Curated selection of our finest grafts and gear.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                  ? "bg-brand-green text-brand-earth shadow-lg" 
                  : "bg-brand-green/5 text-brand-green hover:bg-brand-green/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-green/30" size={20} />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-brand-green/10 rounded-full py-5 pl-16 pr-8 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all text-lg"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white p-8 rounded-[40px] border border-brand-green/5 hover:shadow-2xl transition-all"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square relative overflow-hidden rounded-3xl mb-8 bg-brand-earth">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.isBestSeller && (
                      <span className="absolute top-4 left-4 bg-brand-green text-brand-earth px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10">
                        Best Seller
                      </span>
                    )}
                  </div>
                </Link>
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-green leading-tight hover:opacity-70 transition-opacity">
                      {product.name}
                    </h3>
                  </Link>
                  <span className="text-xl font-bold text-brand-dark">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-brand-dark/50 text-sm font-medium mb-8">
                  {product.category}
                </p>
                <button className="w-full flex items-center justify-center gap-3 bg-brand-green text-brand-earth py-4 rounded-full text-sm font-bold uppercase tracking-widest group-hover:scale-[1.02] transition-transform">
                  Add to Cart
                  <ArrowUpRight size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!loading && filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-2xl font-medium text-brand-dark/30 uppercase tracking-widest">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
