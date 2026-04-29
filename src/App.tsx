import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
const Home = React.lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const AboutPage = React.lazy(() => import("./pages/About").then(m => ({ default: m.AboutPage })));
const ShopPage = React.lazy(() => import("./pages/Shop").then(m => ({ default: m.ShopPage })));
const ContactPage = React.lazy(() => import("./pages/Contact").then(m => ({ default: m.ContactPage })));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails").then(m => ({ default: m.ProductDetails })));
const Checkout = React.lazy(() => import("./pages/Checkout").then(m => ({ default: m.Checkout })));

import { AgeVerification } from "./components/AgeVerification";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <AgeVerification />
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <React.Suspense fallback={<div className="h-screen bg-brand-green flex items-center justify-center"><div className="w-12 h-12 border-4 border-brand-earth border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
