"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { Leaf, Filter, X, FileText } from "lucide-react";
import styles from "./products.module.css";

const products = [
  {
    id: "maize",
    name: "Maize",
    emoji: "🌽",
    image: "/images/products/maize.png",
    category: "field",
    shortDesc: "World's leading crop and queen of cereals, widely cultivated as cereal grain with highest genetic yield potential.",
    fullDesc: "Maize is the world's leading crop and is widely cultivated as cereal grain that was domesticated in Central America, China & India. It is one of the most versatile emerging crops having wider adaptability. Globally, maize is known as queen of cereals because of its highest genetic yield potential. Maize is the only food cereal crop that can be grown in diverse seasons, ecologies and uses.",
    tags: ["Kharif", "Rabi", "105-115 Days"],
    gradient: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)",
    features: ["Crop matures in 105-110 days (Kharif) & 110-115 days (Rabi)", "Attractive orange grain", "Longer storage capacity for the grain", "Tolerance to draught"],
    geography: "Uttar Pradesh, Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Haryana, Jharkhand, Karnataka, Madhya Pradesh, Maharashtra, Odisha, Punjab, Rajasthan, Telangana, Tamil Nadu & West Bengal",
  },
  {
    id: "wheat-dbw187",
    name: "Wheat (DBW187)",
    emoji: "🌾",
    image: "/images/products/wheat.png",
    category: "field",
    shortDesc: "Versatile crop used in a wide variety of food products with high yield potential under early sown irrigated conditions.",
    fullDesc: "Wheat is a versatile crop used in a wide variety of products, including bread, pasta, cereals, cakes, cookies, and even beer. It is a good source of carbohydrates, fibre, protein, and essential nutrients like iron, zinc, and B vitamins. DBW 187 is known for its high yield potential, particularly under early sown irrigated conditions.",
    tags: ["Rabi", "120 Days", "High Yield"],
    gradient: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
    features: ["Crop maturation period is around 120 days (110-140)", "High yield potential under early sown irrigated conditions", "Average yield of 61.28 q/ha during testing", "High heat tolerance for regions with temperature fluctuations"],
    geography: "North Western Plains Zone (Punjab, Haryana, Delhi, Rajasthan, Western UP, HP, J&K) and Northeast Plains Zone (Eastern UP, Bihar, Jharkhand, Odisha, West Bengal, Assam & Northeastern states)",
  },
  {
    id: "wheat-hd2967",
    name: "Wheat (HD2967)",
    emoji: "🌾",
    image: "/images/products/wheat.png",
    category: "field",
    shortDesc: "Double dwarf wheat variety with an average plant height of 101 cm, known for high yields.",
    fullDesc: "Crop maturation period is around 129 days (129-143). Double dwarf wheat variety with an average plant height of 101 cm. Known for high yields, contributing significantly to India's wheat production. Amber, medium bold, hard, and lustrous grain.",
    tags: ["Rabi", "129-143 Days", "Double Dwarf"],
    gradient: "linear-gradient(135deg, #FDE68A 0%, #B45309 100%)",
    features: ["Double dwarf wheat variety with average plant height of 101 cm", "Known for high yields, contributing significantly to India's wheat production", "Amber, medium bold, hard, and lustrous grain", "Crop maturation period around 129 days (129-143)"],
    geography: "North Western Plain Zone (Punjab, Haryana, Delhi, Rajasthan except Kota and Udaipur divisions) and Western U.P. (except Jhansi division), Jammu and Kathua districts of J&K, Una district and Paonta valley of HP and Tarai region of Uttarakhand",
  },
  {
    id: "paddy",
    name: "Paddy",
    emoji: "🌿",
    image: "/images/products/paddy.png",
    category: "field",
    shortDesc: "Most important and extensively grown food crop, staple food of more than 60% of the world population.",
    fullDesc: "Paddy is the most important and extensively grown food crop in the World. It is the staple food of more than 60 percent of the world population. Rice is mainly produced and consumed in the Asian region. India has the largest area under paddy and ranks second in production after China.",
    tags: ["Kharif", "115-140 Days", "Staple Crop"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #16A34A 100%)",
    features: ["Crop matures in 115-120 days (Kharif) & 135-140 days (Rabi)", "More number of filled grains per panicle", "Bold grains", "Tolerance to blast and BPH"],
    geography: "Uttar Pradesh, Andhra Pradesh, Bihar (North), Chhattisgarh, Gujarat, Haryana, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Telangana, West Bengal",
  },
  {
    id: "mustard",
    name: "Mustard",
    emoji: "🌻",
    image: "/images/products/mustard.png",
    category: "field",
    shortDesc: "Rich history documented in ancient literature including Sanskrit and Sumerian texts from 3000 BC.",
    fullDesc: "Mustard's rich history is documented in ancient literature, including Sanskrit and Sumerian texts from 3000 BC. It's mentioned in Greek and Roman writings, the Bible, and various medicinal texts. Mustard plants have long, tapered roots, with stems typically 45-150 cm long. Seeds are small, red-brown to black, and minutely pitted.",
    tags: ["Rabi", "Oilseed", "Ancient Crop"],
    gradient: "linear-gradient(135deg, #FDE047 0%, #CA8A04 100%)",
    features: ["Seeds are small, red-brown to black, and minutely pitted", "Plants have stems typically 45-150 cm long with waxy bloom", "Yield ranges from 23.2 q/ha to 1000 kg/ha depending on cultivar", "Documented in Sanskrit and Sumerian texts from 3000 BC"],
    geography: "Rajasthan, Uttar Pradesh, Madhya Pradesh, Haryana",
  },
  {
    id: "cotton",
    name: "Cotton (Agronica BGII)",
    emoji: "☁️",
    image: "/images/products/cotton.png",
    category: "fibre",
    shortDesc: "Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance and reduce chemical pesticides.",
    fullDesc: "Agronica BGII — Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance, reduce reliance on chemical pesticides, and potentially increase yields. For irrigated areas, spacing of 120 x 60 cm is suggested, while rain fed areas benefit from 90 x 60 cm spacing. Seed rate of 2 to 3 packets per acre is generally suggested.",
    tags: ["Kharif", "Fiber Crop", "Bollgard II"],
    gradient: "linear-gradient(135deg, #E0E7FF 0%, #6366F1 100%)",
    features: ["Improved pest resistance with Bollgard II technology", "Irrigated spacing: 120 x 60 cm; Rain fed: 90 x 60 cm", "High Density Planting (HDPS) at 90 cm x 15 cm for rainfed conditions", "Seed rate: 2 to 3 packets per acre"],
    geography: "Gujarat, Maharashtra, Telangana, Andhra Pradesh, Karnataka",
  },
  {
    id: "vegetable",
    name: "Vegetable Seeds",
    emoji: "🥬",
    image: "/images/products/vegetable.png",
    category: "vegetable",
    shortDesc: "Premium vegetable seed varieties for diverse climatic conditions and higher yields.",
    fullDesc: "Our vegetable seed portfolio covers a wide range of premium varieties optimized for Indian growing conditions.",
    tags: ["All Seasons", "High Germination", "Hybrid"],
    gradient: "linear-gradient(135deg, #BBF7D0 0%, #22C55E 100%)",
    features: ["High germination rate", "Disease resistant hybrids", "Excellent shelf life", "Verified quality standards"],
    geography: "Pan-India",
  },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "field", name: "Field Crops" },
  { id: "vegetable", name: "Vegetable" },
  { id: "fibre", name: "Fibre" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "#34D399" }}
          >
            Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Premium Seed{" "}
            <span className={styles.highlight}>Varieties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.heroSub}
          >
            Explore our diverse range of high-quality seeds designed for maximum
            yield, disease resistance, and climate resilience.
          </motion.p>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: "var(--gray-100)" }}>
        <div className="container">
          <div className={styles.filterBar}>
            <Filter size={18} />
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.filterBtnActive : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    product={product}
                    index={i}
                    onClick={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedProduct(null)}
              >
                <X size={18} />
              </button>
              <div
                className={styles.modalImage}
                style={{ background: selectedProduct.gradient }}
              >
                {selectedProduct.image ? (
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="600px"
                  />
                ) : (
                  <span className={styles.modalEmoji}>{selectedProduct.emoji}</span>
                )}
              </div>
              <div className={styles.modalBody}>
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.fullDesc}</p>
                <div className={styles.modalSection}>
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProduct.features?.map((f, i) => (
                      <li key={i}><Leaf size={14} /> {f}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.modalSection}>
                  <h4>Recommended Geography</h4>
                  <p className={styles.geoText}>{selectedProduct.geography}</p>
                </div>
                <div className={styles.modalTags}>
                  {selectedProduct.tags?.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <button
                  className={styles.quotationBtn}
                  onClick={() => {
                    setSelectedProduct(null);
                    window.location.href = `/contact?product=${encodeURIComponent(selectedProduct.name)}`;
                  }}
                >
                  <FileText size={16} />
                  Request Quotation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
