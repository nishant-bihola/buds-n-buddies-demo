import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { LogoMarquee } from "../components/LogoMarquee";
import { Intro } from "../components/Intro";
import { ProductGrid } from "../components/ProductGrid";
import { Reviews } from "../components/Reviews";
import { BestSellerFeature } from "../components/BestSellerFeature";
import { About } from "../components/About";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import type { Product } from "../types";
import { INITIAL_PRODUCTS } from "../constants";

export function Home() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Hero />
      <LogoMarquee />
      <Intro />
      <ProductGrid products={products} loading={loading} />
      <Reviews />
      <BestSellerFeature />
      <About />
    </>
  );
}
