"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { Leaf, Filter, X, FileText } from "lucide-react";
import styles from "./products.module.css";

const products = [
  {
    id: "maize",
    name: "Premium Maize Seeds",
    emoji: "🌽",
    image: "/images/products_dl/pros1.jpg",
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
    image: "/images/products_dl/pros2.jpg",
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
    image: "/images/products_dl/pros5.jpg",
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
    image: "/images/products_dl/pros3.jpg",
    category: "field",
    shortDesc: "Most important and extensively grown food crop, staple food of more than 60% of the world population.",
    fullDesc: "Paddy is the most important and extensively grown food crop in the World. It is the staple food of more than 60 percent of the world population. Rice is mainly produced and consumed in the Asian region. India has the largest area under paddy and ranks second in production after China.",
    tags: ["Kharif", "115-140 Days", "Staple Crop"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #16A34A 100%)",
    features: ["Crop matures in 115-120 days (Kharif) & 135-140 days (Rabi)", "More number of filled grains per panicle", "Bold grains", "Tolerance to blast and BPH"],
    geography: "Uttar Pradesh, Andhra Pradesh, Bihar (North), Chhattisgarh, Gujarat, Haryana, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Telangana, West Bengal",
  },
  {
    id: "kala-namak-kiran",
    name: "Kala Namak Kiran Paddy Seeds",
    emoji: "🌾",
    image: "/kala_namak.png",
    category: "field",
    shortDesc: "Heritage aromatic paddy with hi-yield certified performance — superior grain aroma, strong tillering, and excellent germination.",
    fullDesc: "Kala Namak Kiran bridges this gap: a hi-yield certified paddy seed that delivers the legendary aroma and grain quality of heritage Kala Namak with the agronomic performance modern farmers need. It thrives in the Indo-Gangetic Terai belt and preserves the signature 'screw-pine' (Pandanus) aroma.",
    tags: ["Kharif", "Aromatic", "GI Variety"],
    gradient: "linear-gradient(135deg, #A3E635 0%, #4D7C0F 100%)",
    features: ["Superior Grain Aroma & Quality with >62% head-rice recovery", "Moderate field tolerance to blast and brown spot", "Requires minimum 1,200 mm of water over the crop cycle", "Short-day, photoperiod-sensitive variety"],
    geography: "Indo-Gangetic Terai belt (Siddharth Nagar, Maharajganj, Gorakhpur, Balrampur, Basti in eastern UP)",
  },
  {
    id: "khushboo-606",
    name: "Khushbu 606 Paddy Seeds",
    emoji: "🌾",
    image: "/khushboo.png",
    category: "field",
    shortDesc: "Premium fragrant paddy variety with uniform crop growth, bold grains, and outstanding market value.",
    fullDesc: "Khushbu 606 is a premium fragrant paddy variety known for its uniform crop growth, bold grains, and outstanding market value. Designed for high yield and excellent resilience, this variety provides farmers with an exceptional return on investment.",
    tags: ["Kharif", "Fragrant", "High Yield"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #15803D 100%)",
    features: ["Uniform crop growth with bold, fragrant grains", "Excellent market value and high return on investment", "High tillering capacity", "Strong resistance to common paddy diseases"],
    geography: "Uttar Pradesh, Bihar, Haryana, Punjab, and other major paddy-growing states",
  },
  {
    id: "mustard",
    name: "Mustard",
    emoji: "🌻",
    image: "/images/products_dl/pros4.jpg",
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
    image: "/images/products_dl/pros6.jpg",
    category: "fibre",
    shortDesc: "Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance and reduce chemical pesticides.",
    fullDesc: "Agronica BGII — Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance, reduce reliance on chemical pesticides, and potentially increase yields. For irrigated areas, spacing of 120 x 60 cm is suggested, while rain fed areas benefit from 90 x 60 cm spacing. Seed rate of 2 to 3 packets per acre is generally suggested.",
    tags: ["Kharif", "Fiber Crop", "Bollgard II"],
    gradient: "linear-gradient(135deg, #E0E7FF 0%, #6366F1 100%)",
    features: ["Improved pest resistance with Bollgard II technology", "Irrigated spacing: 120 x 60 cm; Rain fed: 90 x 60 cm", "High Density Planting (HDPS) at 90 cm x 15 cm for rainfed conditions", "Seed rate: 2 to 3 packets per acre"],
    geography: "Gujarat, Maharashtra, Telangana, Andhra Pradesh, Karnataka",
  },
  {
    id: "radish",
    name: "Premium Radish Seeds",
    emoji: "🌱",
    image: "/images/products_dl/radish.jpeg",
    category: "vegetable",
    shortDesc: "Fast-maturing radish (Mooli) seeds yielding crisp, pure-white, uniform roots with a mild, pleasant pungency.",
    fullDesc: "Our premium radish seeds produce long, smooth, snow-white roots with a crisp texture and mild pungency prized in Indian kitchens. Quick to mature and highly tolerant of cool-season conditions, these plants deliver uniform, straight roots with minimal forking or pithiness. Ideal for both intensive market cultivation and kitchen gardens, they offer reliable germination and an excellent, extended harvest window.",
    tags: ["Vegetable", "Fast Growth", "45-55 Days"],
    gradient: "linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)",
    features: ["Fast maturity — harvest-ready in 45-55 days", "Long, straight, snow-white roots with crisp texture", "Mild, pleasant pungency preferred in Indian markets", "Strong tolerance to bolting and root forking"],
    geography: "Uttar Pradesh, Punjab, Haryana, West Bengal, Bihar, Maharashtra & Karnataka",
  },
  {
    id: "sponge-gourd",
    name: "Sponge Gourd Seeds",
    emoji: "🥒",
    image: "/images/products_dl/sponge.jpeg",
    category: "vegetable",
    shortDesc: "High-yielding sponge gourd (Turai / Nenua) seeds producing tender, dark-green, ridge-free fruits over a long picking season.",
    fullDesc: "Our sponge gourd seeds deliver vigorous, high-climbing vines that set an abundance of smooth, cylindrical, dark-green fruits. Harvested tender, the fruits are soft-fleshed and richly flavoured, making them a staple summer and rainy-season vegetable. The plants show strong resistance to common cucurbit diseases and offer a prolonged, continuous fruiting window ideal for commercial growers.",
    tags: ["Vegetable", "Kharif", "High Yield"],
    gradient: "linear-gradient(135deg, #A7F3D0 0%, #047857 100%)",
    features: ["Vigorous vines with heavy, continuous fruit setting", "Tender, smooth, uniform dark-green fruits", "Long harvesting window across summer and rainy seasons", "Good field tolerance to common cucurbit diseases"],
    geography: "Uttar Pradesh, Bihar, West Bengal, Maharashtra, Andhra Pradesh, Karnataka & Tamil Nadu",
  },
  {
    id: "okra",
    name: "Okra (Ladyfinger) Seeds",
    emoji: "🌿",
    image: "/images/products_dl/okra.jpeg",
    category: "vegetable",
    shortDesc: "Premium okra (Bhindi) seeds producing tender, dark-green, five-ridged pods with excellent yield and disease resistance.",
    fullDesc: "Our premium okra seeds yield sturdy, upright plants that bear an abundance of tender, straight, dark-green five-ridged pods. Bred for high productivity and strong resistance to Yellow Vein Mosaic Virus (YVMV), the plants keep producing over a long harvesting window. The pods remain soft and fibre-free when picked at market stage, delivering consistent quality for both fresh markets and home gardens.",
    tags: ["Vegetable", "Kharif/Summer", "YVMV Tolerant"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #15803D 100%)",
    features: ["Tender, straight, dark-green five-ridged pods", "Strong tolerance to Yellow Vein Mosaic Virus (YVMV)", "High yield with continuous, long-duration picking", "Sturdy upright plants suited to close spacing"],
    geography: "Uttar Pradesh, Gujarat, Maharashtra, Andhra Pradesh, Karnataka, West Bengal & Haryana",
  },
  {
    id: "onion",
    name: "Golden Onion Seeds",
    emoji: "🧅",
    image: "/images/generated/prod_onion.png",
    category: "vegetable",
    shortDesc: "Premium onion seeds for large, crisp bulbs. Excellent storage capability and uniform size.",
    fullDesc: "Our elite onion seeds produce large, attractive, uniform bulbs with clean golden-brown papery skins and solid, crisp inner rings. Selected for outstanding storage longevity (reducing post-harvest losses) and high bolting tolerance, these seeds deliver high commercial payouts for rabi and kharif cultivation cycles.",
    tags: ["Vegetable", "Long Shelf-life", "Rabi/Kharif"],
    gradient: "linear-gradient(135deg, #FCC419 0%, #E67700 100%)",
    features: ["Excellent bulb storage and holding capacity (up to 5 months)", "Highly uniform globe bulbs with rich golden skin", "Outstanding bolting resistance under variable temperatures", "Strong root development for nutrient-poor soils"],
    geography: "Maharashtra (Nashik), Madhya Pradesh, Karnataka, Gujarat, Rajasthan, Bihar & Uttar Pradesh",
  },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "field", name: "Field Crops" },
  { id: "vegetable", name: "Vegetable" },
  { id: "fibre", name: "Fibre" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("category");
  const productParam = searchParams.get("product");

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
    }
    if (productParam) {
      const prod = products.find((p) => p.id === productParam);
      if (prod) {
        setSelectedProduct(prod);
        if (prod.category) {
          setActiveCategory(prod.category);
        }
      }
    }
  }, [catParam, productParam]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image 
          src="/sarso.jpg"
          alt="Premium Mustard Fields"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.5)" }}
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
      <section className="section" style={{ background: "var(--bg-alt)" }}>
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
