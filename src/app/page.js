"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  Leaf,
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Sprout,
  Factory,
  Wheat,
  ChevronRight,
  Lightbulb,
  TreePine,
  Star,
  Award,
  Handshake,
  Eye,
  Rocket,
  FileText,
  MousePointer2,
} from "lucide-react";
import ParticleField from "@/components/ParticleField";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import StatCounter from "@/components/StatCounter";
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
    image: "/images/products_dl/pros3.jpg",
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
    image: "/images/products_dl/pros4.jpg",
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
    image: "/images/products_dl/pros5.jpg",
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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace creativity and innovation in everything we do.",
    color: "#F59E0B",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    desc: "We prioritize environmental stewardship and social responsibility.",
    color: "#10B981",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We strive for excellence in our seeds and services.",
    color: "#8B5CF6",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with transparency, honesty, and ethical business practices.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Customer-Centricity",
    desc: "We put our customers at the heart of everything we do.",
    color: "#EF4444",
  },
];

const goals = [
  "Develop and launch new seed varieties that address specific customer needs",
  "Achieve a minimum of 20% annual growth in sales revenue",
  "Expand our customer base in new markets and regions",
  "Reduce our environmental footprint through sustainable practices",
  "Foster strategic partnerships with industry leaders and research institutions",
];

/* ===== COMPONENT ===== */
export default function Home() {
  const [activeTab, setActiveTab] = useState("values");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <Image
          src="/images/hero/hero-bg.png"
          alt="Agricultural farmland at golden hour"
          fill
          priority
          className={styles.heroBgImage}
          sizes="100vw"
        />
        <ParticleField />
        <div className={styles.heroOverlay} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroOrb3} />

        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sprout size={14} />A Venture of MRC Agrotech Ltd.
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Empowering the
            <br />
            <span className={styles.heroHighlight}>Future of Agriculture</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Developing high-quality, disease-resistant, and climate-resilient
            seed varieties to inspire farmers and transform agricultural produce
            across India.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link href="/products" className="btn btn-primary">
              Explore Products
              <ChevronRight size={18} />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Our Story
            </Link>
          </motion.div>

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      {/* ===== SCROLLING MARQUEE ===== */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {["Premium Seeds", "High-Yield Crops", "Disease Resistant", "Climate Resilient", "Trusted by Farmers", "Sustainable Agriculture", "Innovative Farming"].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>{item}</span>
            ))}
            {["Premium Seeds", "High-Yield Crops", "Disease Resistant", "Climate Resilient", "Trusted by Farmers", "Sustainable Agriculture", "Innovative Farming"].map((item, i) => (
              <span key={`dup-${i}`} className={styles.marqueeItem}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimatedSection direction="left" className={styles.aboutText}>
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                A Fresh & Innovative Force in the{" "}
                <span className={styles.textGradient}>Seeds Industry</span>
              </h2>
              <p className="section-subtitle">
                Agronica Seeds Spark Private Ltd. is a new Venture of MRC
                Agrotech Ltd. Dedicated to revolutionising agriculture in
                India, we are inspiring farmers to increase their agricultural
                produce and make it profitable with high quality and latest
                technology.
              </p>
              <p style={{ marginTop: "1rem" }}>
                We are dedicated to developing and supplying high-performing,
                disease-resistant, and climate-resilient seed varieties.
                Leveraging cutting-edge technology and sustainable practices to
                reduce our environmental footprint. Building strong
                relationships with our customers, partners, and the communities
                we serve.
              </p>
              <div className={styles.aboutCta}>
                <Link href="/about" className="btn btn-primary">
                  Read Our Full Story
                  <ChevronRight size={18} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className={styles.aboutVisual}>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardInner}>
                  <div className={styles.aboutLeaf}>🌱</div>
                  <h4>Our Promise</h4>
                  <p>
                    Harnessing the power of seeds to improve lives and the
                    planet. Building strong relationships with customers,
                    partners, and communities. Fostering a culture of
                    innovation, integrity, and social responsibility.
                  </p>
                </div>
              </div>
              <div className={styles.aboutDecor1} />
              <div className={styles.aboutDecor2} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP SECTION ===== */}
      <section className={`section section-dark`}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">
              Guidance &{" "}
              <span className={styles.textGradient}>Expertise</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Led by industry veterans profoundly committed to revolutionising the Indian agricultural landscape.
            </p>
          </AnimatedSection>

          <div className={styles.leadershipGrid}>
            <AnimatedSection direction="left" delay={0.1}>
              <div className={styles.leaderCard}>
                <div className={styles.leaderAvatarWrap}>
                  <div className={styles.leaderAvatar}>
                    <Image src="/ashok.jpeg" alt="Ashok Singh" fill sizes="140px" style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <h3 className={styles.leaderName}>Ashok Singh</h3>
                <p className={styles.leaderRole}>Visionary Leader</p>
                <p className={styles.leaderQuote}>"Empowering farmers with high-yield technology to build a food-secure world."</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <div className={styles.leaderCard}>
                <div className={styles.leaderAvatarWrap}>
                  <div className={styles.leaderAvatar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={50} color="var(--gray-400)" />
                  </div>
                </div>
                <h3 className={styles.leaderName}>Shivendra Singh</h3>
                <p className={styles.leaderRole}>Strategic Leader</p>
                <p className={styles.leaderQuote}>"Sustainability and innovation are the cornerstones of a resilient agricultural ecosystem."</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className={`section section-emerald ${styles.stats}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className={styles.statsGrid}>
              <StatCounter
                end={7}
                label="Scientists"
                icon={Lightbulb}
              />
              <StatCounter
                end={5}
                label="Trial Centers"
                icon={Target}
              />
              <StatCounter
                end={4}
                label="Research Centers"
                icon={Factory}
              />
              <StatCounter
                end={10}
                label="States"
                icon={Globe}
              />
              <StatCounter
                end={500}
                label="Growers"
                icon={Users}
              />
              <StatCounter
                end={25}
                label="Sales Partners"
                icon={Handshake}
              />
              <StatCounter
                end={35}
                label="Channel Partners"
                icon={TrendingUp}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className={`section ${styles.products}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.productsHeader}>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">
              Premium Seed{" "}
              <span className={styles.textGradient}>Varieties</span>
            </h2>
            <p className="section-subtitle">
              From field crops to vegetables, we offer a diverse range of
              high-quality seeds designed for maximum yield and resilience.
            </p>
          </AnimatedSection>

          <div className={styles.productsGrid}>
            {products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          <AnimatedSection
            direction="up"
            delay={0.3}
            className={styles.productsCta}
          >
            <Link href="/products" className="btn btn-primary">
              View All Products
              <ChevronRight size={18} />
            </Link>
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
                        <Leaf size={14} /> {f}
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
                  <FileText size={16} />
                  Request Quotation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== VISION & MISSION ===== */}
      <section className={`section section-dark ${styles.vision}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.visionHeader}>
            <span className="section-label">Vision & Mission</span>
            <h2 className="section-title">
              Shaping the Future of{" "}
              <span className={styles.textGradientGold}>
                Sustainable Agriculture
              </span>
            </h2>
          </AnimatedSection>

          <div className={styles.visionGrid}>
            <AnimatedSection direction="left" delay={0.1}>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Our vision at Agronica is to be a leading provider of
                  innovative and sustainable seed solutions, shaping the future
                  of agriculture and contributing to a food-secure world. We
                  envision:
                </p>
                <ul className={styles.visionList}>
                  <li>
                    A world where sustainable agriculture practices are the norm
                  </li>
                  <li>Growers achieving improved yields and livelihoods through our seeds and services</li>
                  <li>Our company being a trusted partner and industry leader in seed technology and sustainability</li>
                  <li>
                    A future where our seeds and services make a positive impact on the environment and society
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className={styles.visionCard}>
                <div className={`${styles.visionIcon} ${styles.visionIconGold}`}>
                  <Rocket size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  At Agronica, our mission is to develop and supply high-quality
                  seeds that exceed our customers' expectations. Empowering
                  growers to achieve sustainable agricultural practices and
                  improved profit yields.
                </p>
                <ul className={styles.visionList}>
                  <li>
                    Develop and supply high-quality seeds that exceed our customers' expectations
                  </li>
                  <li>
                    Empower growers to achieve sustainable agricultural practices and improved
                    profit yields
                  </li>
                  <li>
                    Foster a culture of innovation, integrity, and social responsibility
                  </li>
                  <li>
                    Build strong relationships with our customers, partners, and the communities we serve
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VALUES / GOALS / PURPOSE ===== */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.valuesHeader}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">
              Values, Goals &{" "}
              <span className={styles.textGradient}>Purpose</span>
            </h2>
          </AnimatedSection>

          <div className={styles.tabButtons}>
            {["values", "goals", "purpose"].map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${
                  activeTab === tab ? styles.tabBtnActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.tabContent}
            >
              {activeTab === "values" && (
                <div className={styles.valuesGrid}>
                  {values.map((v, i) => (
                    <motion.div
                      key={v.title}
                      className={styles.valueCard}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div
                        className={styles.valueIcon}
                        style={{
                          background: `${v.color}20`,
                          color: v.color,
                        }}
                      >
                        <v.icon size={24} />
                      </div>
                      <h4>{v.title}</h4>
                      <p>{v.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "goals" && (
                <div className={styles.goalsList}>
                  {goals.map((g, i) => (
                    <motion.div
                      key={i}
                      className={styles.goalItem}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={styles.goalNumber}>{`0${i + 1}`}</div>
                      <p>{g}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "purpose" && (
                <div className={styles.purposeWrap}>
                  <motion.div
                    className={styles.purposeCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.purposeIcon}>
                      <Globe size={40} />
                    </div>
                    <h3>Feeding the World Sustainably</h3>
                    <p>
                      Our purpose at Agronica is to empower growers to feed a
                      growing world sustainably. We aim to achieve this by
                      developing and supplying innovative, high-quality seeds
                      that improve crop yields, disease resistance, and
                      nutritional value.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      We are committed to making a positive impact on the
                      environment, society, and the economy through our seeds,
                      services, and partnerships.
                    </p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== INFRASTRUCTURE ===== */}
      <section className={`section section-emerald ${styles.infra}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.infraContent}>
            <span className="section-label">Plant & Infrastructure</span>
            <h2 className="section-title">
              State-of-the-Art Facilities
            </h2>
            <p
              className="section-subtitle"
              style={{ color: "rgba(255,255,255,0.7)", maxWidth: "700px" }}
            >
              The wide network of 500 farmers along with 30,000 sq ft plant
              area and the state-of-the-art infrastructural facilities enables
              ASSPL to guarantee the best seed supply at local and international
              levels. We adopt digital technologies to ensure hassle-free and
              steady supply of seed products.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className={styles.infraCards}>
              <div className={styles.infraCard}>
                <Factory size={32} />
                <h4>Processing Plant</h4>
                <p>
                  30,000 sq ft high-capacity seed processing facility at Basti,
                  Uttar Pradesh
                </p>
              </div>
              <div className={styles.infraCard}>
                <Shield size={32} />
                <h4>Seeds Production</h4>
                <p>
                  ASSPL adheres to best practices in seed production that
                  contribute to high quality seeds. Our team of experts work
                  closely to ensure products meet specific quality standards.
                </p>
              </div>
              <div className={styles.infraCard}>
                <Shield size={32} />
                <h4>Processing & Conditioning</h4>
                <p>
                  Seeds are processed at Basti, Uttar Pradesh plant with modern
                  technologies adopted at high-capacity processing units to
                  ensure the best quality.
                </p>
              </div>
              <div className={styles.infraCard}>
                <Zap size={32} />
                <h4>Modern Technology</h4>
                <p>
                  Adopted high-capacity modern technologies for seed processing
                  and packaging
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <AnimatedSection direction="up" className={styles.ctaContent}>
            <h2 className="section-title" style={{ color: "var(--dark-900)" }}>
              Ready to Transform Your
              <br />
              <span className={styles.textGradient}>Agricultural Yield?</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto 2rem", textAlign: "center" }}
            >
              Connect with our team to discover the perfect seed solutions for
              your farming needs. We&apos;re here to help you succeed.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us Today
                <ChevronRight size={18} />
              </Link>
              <Link href="/products" className="btn btn-gold">
                Browse Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
