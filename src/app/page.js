"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  Leaf,
  Target,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Sprout,
  Factory,
  ChevronRight,
  Lightbulb,
  Handshake,
  FileText,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import StatCounter from "@/components/StatCounter";
import WaveDivider from "@/components/WaveDivider";
import SeedJourney from "@/components/SeedJourney";
import styles from "./page.module.css";

/* ===== DATA ===== */
const products = [
  {
    id: "maize",
    name: "Maize",
    emoji: "🌽",
    image: "/images/products_dl/pros1.jpg",
    shortDesc:
      "World's leading crop and queen of cereals, widely cultivated as cereal grain with highest genetic yield potential.",
    fullDesc:
      "Maize is the world's leading crop and is widely cultivated as cereal grain that was domesticated in Central America, China & India. It is one of the most versatile emerging crops having wider adaptability. Globally, maize is known as queen of cereals because of its highest genetic yield potential. Maize is the only food cereal crop that can be grown in diverse seasons, ecologies and uses.",
    tags: ["Kharif", "Rabi", "105-115 Days"],
    gradient: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)",
    features: [
      "Crop matures in 105-110 days (Kharif) & 110-115 days (Rabi)",
      "Attractive orange grain",
      "Longer storage capacity for the grain",
      "Tolerance to draught",
    ],
    geography:
      "Uttar Pradesh, Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Haryana, Jharkhand, Karnataka, Madhya Pradesh, Maharashtra, Odisha, Punjab, Rajasthan, Telangana, Tamil Nadu & West Bengal",
  },
  {
    id: "wheat-dbw187",
    name: "Wheat (DBW187)",
    emoji: "🌾",
    image: "/images/products_dl/pros2.jpg",
    shortDesc:
      "Versatile crop used in a wide variety of food products with high yield potential under early sown irrigated conditions.",
    fullDesc:
      "Wheat is a versatile crop used in a wide variety of products, including bread, pasta, cereals, cakes, cookies, and even beer. It is a good source of carbohydrates, fibre, protein, and essential nutrients like iron, zinc, and B vitamins. DBW 187 is known for its high yield potential, particularly under early sown irrigated conditions.",
    tags: ["Rabi", "120 Days", "High Yield"],
    gradient: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
    features: [
      "Crop maturation period is around 120 days (110-140)",
      "High yield potential under early sown irrigated conditions",
      "Average yield of 61.28 q/ha during testing",
      "High heat tolerance for regions with temperature fluctuations",
    ],
    geography:
      "North Western Plains Zone (Punjab, Haryana, Delhi, Rajasthan, Western UP, HP, J&K) and Northeast Plains Zone (Eastern UP, Bihar, Jharkhand, Odisha, West Bengal, Assam & Northeastern states)",
  },
  {
    id: "wheat-hd2967",
    name: "Wheat (HD2967)",
    emoji: "🌾",
    image: "/images/products_dl/pros5.jpg",
    shortDesc:
      "Double dwarf wheat variety with an average plant height of 101 cm, known for high yields.",
    fullDesc:
      "Crop maturation period is around 129 days (129-143). Double dwarf wheat variety with an average plant height of 101 cm. Known for high yields, contributing significantly to India's wheat production. Amber, medium bold, hard, and lustrous grain.",
    tags: ["Rabi", "129-143 Days", "Double Dwarf"],
    gradient: "linear-gradient(135deg, #FDE68A 0%, #B45309 100%)",
    features: [
      "Double dwarf wheat variety with average plant height of 101 cm",
      "Known for high yields, contributing significantly to India's wheat production",
      "Amber, medium bold, hard, and lustrous grain",
      "Crop maturation period around 129 days (129-143)",
    ],
    geography:
      "North Western Plain Zone (Punjab, Haryana, Delhi, Rajasthan except Kota and Udaipur divisions) and Western U.P. (except Jhansi division), Jammu and Kathua districts of J&K, Una district and Paonta valley of HP and Tarai region of Uttarakhand",
  },
  {
    id: "paddy",
    name: "Paddy",
    emoji: "🌿",
    image: "/images/products_dl/pros3.jpg",
    shortDesc:
      "Most important and extensively grown food crop, staple food of more than 60% of the world population.",
    fullDesc:
      "Paddy is the most important and extensively grown food crop in the World. It is the staple food of more than 60 percent of the world population. Rice is mainly produced and consumed in the Asian region. India has the largest area under paddy and ranks second in production after China.",
    tags: ["Kharif", "115-140 Days", "Staple Crop"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #16A34A 100%)",
    features: [
      "Crop matures in 115-120 days (Kharif) & 135-140 days (Rabi)",
      "More number of filled grains per panicle",
      "Bold grains",
      "Tolerance to blast and BPH",
    ],
    geography:
      "Uttar Pradesh, Andhra Pradesh, Bihar (North), Chhattisgarh, Gujarat, Haryana, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Telangana, West Bengal",
  },
  {
    id: "mustard",
    name: "Mustard",
    emoji: "🌻",
    image: "/images/products_dl/pros4.jpg",
    shortDesc:
      "Rich history documented in ancient literature including Sanskrit and Sumerian texts from 3000 BC.",
    fullDesc:
      "Mustard's rich history is documented in ancient literature, including Sanskrit and Sumerian texts from 3000 BC. It's mentioned in Greek and Roman writings, the Bible, and various medicinal texts. Mustard plants have long, tapered roots, with stems typically 45-150 cm long. Seeds are small, red-brown to black, and minutely pitted.",
    tags: ["Rabi", "Oilseed", "Ancient Crop"],
    gradient: "linear-gradient(135deg, #FDE047 0%, #CA8A04 100%)",
    features: [
      "Seeds are small, red-brown to black, and minutely pitted",
      "Plants have stems typically 45-150 cm long with waxy bloom",
      "Yield ranges from 23.2 q/ha to 1000 kg/ha depending on cultivar",
      "Documented in Sanskrit and Sumerian texts from 3000 BC",
    ],
    geography: "Rajasthan, Uttar Pradesh, Madhya Pradesh, Haryana",
  },
  {
    id: "cotton",
    name: "Cotton (Agronica BGII)",
    emoji: "☁️",
    image: "/images/products_dl/pros6.jpg",
    shortDesc:
      "Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance and reduce chemical pesticides.",
    fullDesc:
      "Agronica BGII — Bollgard II is a valuable tool for cotton farmers seeking to improve pest resistance, reduce reliance on chemical pesticides, and potentially increase yields. For irrigated areas, spacing of 120 x 60 cm is suggested, while rain fed areas benefit from 90 x 60 cm spacing. Seed rate of 2 to 3 packets per acre is generally suggested.",
    tags: ["Kharif", "Fiber Crop", "Bollgard II"],
    gradient: "linear-gradient(135deg, #E0E7FF 0%, #6366F1 100%)",
    features: [
      "Improved pest resistance with Bollgard II technology",
      "Irrigated spacing: 120 x 60 cm; Rain fed: 90 x 60 cm",
      "High Density Planting (HDPS) at 90 cm x 15 cm for rainfed conditions",
      "Seed rate: 2 to 3 packets per acre",
    ],
    geography: "Gujarat, Maharashtra, Telangana, Andhra Pradesh, Karnataka",
  },
];





/* ===== HELPERS ===== */
function getCurrentSeason() {
  const month = new Date().getMonth(); // 0-indexed
  // Kharif: Jun-Oct (5-9), Rabi: Nov-Mar (10,11,0,1,2), Zaid: Apr-May (3,4)
  if (month >= 5 && month <= 9) return { name: "Kharif", color: "Kharif" };
  if (month >= 10 || month <= 2) return { name: "Rabi", color: "Rabi" };
  return { name: "Zaid", color: "Kharif" };
}

function getYearsSince(year) {
  return new Date().getFullYear() - year;
}


/* ===== COMPONENT ===== */
export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const season = getCurrentSeason();

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <Image 
          src="/images/her.png" 
          alt="Agronica Seeds Hero" 
          fill 
          priority 
          className={styles.heroBackgroundImageDesktop} 
        />
        <Image 
          src="/images/her.png" 
          alt="Agronica Seeds Hero Mobile" 
          fill 
          priority 
          className={styles.heroBackgroundImageMobile} 
        />
        <div className={styles.heroOverlay} />


        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <motion.div
              className={styles.heroLogo}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Image 
                src="/web-logo.png" 
                alt="Agronica Seeds Logo" 
                width={200} 
                height={50} 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </motion.div>

           

            <motion.h1
              className={styles.heroTitle}
            >
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block' }}
              >
                Welcome to
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', color: 'white' }}
              >
                Agronica Seeds
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Developing high-quality, disease-resistant, and climate-resilient
              seed varieties to inspire farmers and transform agricultural produce
              across India.
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link href="/products" className="btn btn-primary">
                Explore Our Seeds
                <ChevronRight size={16} />
              </Link>
              
            </motion.div>

            {/* Live Season Badge */}
            <motion.div
              className={styles.seasonBadge}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className={`${styles.seasonDot} ${season.color === "Kharif" ? styles.seasonDotKharif : styles.seasonDotRabi}`} />
              {season.name} Season • {new Date().toLocaleString("en-IN", { month: "long", year: "numeric" })}
            </motion.div>
          </div>

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT & STATS MERGED ===== */}
      <section className={`section section-emerald ${styles.aboutStats}`}>
        <div className="container">
          <div className={styles.aboutStatsGrid}>
            <div className={styles.aboutStatsTextSide}>
              <AnimatedSection direction="left" className={styles.aboutStatsHeader}>
                <h2 className="section-title">
                  3+ Years of Revolution in the Seeds Industry
                </h2>
                <p className="section-subtitle">
                  Agronica Seeds Spark Private Ltd. is a dedicated venture of MRC Agrotech Ltd., 
                  inspiring farmers to maximize productivity through high-quality seeds and innovative technology.
                </p>
              </AnimatedSection>

              <div className={styles.aboutStatsImageMobile}>
                <div className={styles.aboutStatsImageInner}>
                  <Image 
                    src="/images/about_visual.png" 
                    alt="Agronica Seeds Innovation" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className={styles.aboutVisualImage}
                  />
                </div>
              </div>

              <div className={styles.statsGridMerged}>
                <StatCounter end={7} label="Scientists" icon={Lightbulb} />
                <StatCounter end={5} label="Trial Centers" icon={Target} />
                <StatCounter end={4} label="Research Centers" icon={Factory} />
                <StatCounter end={10} label="States" icon={Globe} />
                <StatCounter end={500} label="Growers" icon={Users} />
                <StatCounter end={25} label="Sales Partners" icon={Handshake} />
                <StatCounter end={35} label="Channel Partners" icon={TrendingUp} />
              </div>
            </div>

            <div className={styles.aboutStatsImageDesktop}>
              <AnimatedSection direction="right" className={styles.aboutStatsImageSide}>
                <div className={styles.aboutStatsImageInner}>
                  <Image 
                    src="/images/about_visual.png" 
                    alt="Agronica Seeds Innovation" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className={styles.aboutVisualImage}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider color="var(--primary-700)" flip />



      {/* ===== PRODUCTS SECTION ===== */}
      <section className={`section ${styles.products}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.productsHeader}>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">
              Premium Seed Varieties
            </h2>
            <p className="section-subtitle">
              From field crops to vegetables, we offer a diverse range of
              high-quality seeds designed for maximum yield and resilience.
            </p>
          </AnimatedSection>

          <div className={`${styles.productsGrid} ${showAllProducts ? styles.showAll : ""}`}>
            {products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {!showAllProducts && (
            <div className={styles.viewMoreMobileOnly}>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowAllProducts(true)}
              >
                View More Products
              </button>
            </div>
          )}

          <AnimatedSection
            direction="up"
            delay={0.3}
            className={styles.productsCta}
          >
            <Link href="/products" className="btn btn-primary">
              View All Products
              <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>



      {/* ===== 🌾 SEED TO HARVEST JOURNEY ===== */}
      <SeedJourney />



      {/* ===== CTA SECTION ===== */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.ctaContent}>
            <h2 className="section-title">
              Let&apos;s Grow Something
              <br />
              Great Together
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto 2rem", textAlign: "center" }}
            >
              Whether you&apos;re a first-time grower or a seasoned farmer,
              our team is here to help you find the perfect seeds for your soil,
              season, and goals.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">
                Talk to Our Team
                <ChevronRight size={16} />
              </Link>
              <Link href="/products" className="btn btn-gold">
                Browse Our Seeds
              </Link>
            </div>
          </AnimatedSection>
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
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedProduct(null)}
              >
                ✕
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
                    className={styles.modalProductImg}
                    sizes="600px"
                  />
                ) : (
                  <span className={styles.modalEmoji}>
                    {selectedProduct.emoji}
                  </span>
                )}
              </div>
              <div className={styles.modalBody}>
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.fullDesc}</p>
                <div className={styles.modalFeatures}>
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProduct.features?.map((f, i) => (
                      <li key={i}>
                        <Leaf size={13} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.modalGeo}>
                  <h4>Recommended Geography</h4>
                  <p>{selectedProduct.geography}</p>
                </div>
                <div className={styles.modalTags}>
                  {selectedProduct.tags?.map((t) => (
                    <span key={t} className={styles.modalTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  className={styles.modalQuotation}
                  onClick={() => {
                    setSelectedProduct(null);
                    window.location.href = `/contact?product=${encodeURIComponent(selectedProduct.name)}`;
                  }}
                >
                  <FileText size={15} />
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
