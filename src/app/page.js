"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import styles from "./page.module.css";

// Premium Modular Components
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Faqs from "@/components/Faqs";
import Gallery from "@/components/Gallery";

/* ── PRODUCTS DATA ──────────────────────────────────────────── */
const products = [
  {
    id: "tomato",
    name: "Premium Tomato Seeds",
    image: "/images/generated/prod_tomato.png",
    shortDesc: "High-yield, disease-resistant tomato seeds. Produces vibrant, juicy tomatoes perfect for commercial and home farming.",
    tags: ["Vegetable", "High Yield"],
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #C92A2A 100%)",
  },
  {
    id: "chili",
    name: "Spicy Chili Pepper",
    image: "/images/generated/prod_chili.png",
    shortDesc: "Vibrant red chili seeds yielding plants with an incredible kick. Perfect for warm climates and high-density planting.",
    tags: ["Spice", "Fast Growth"],
    gradient: "linear-gradient(135deg, #FF8787 0%, #E03131 100%)",
  },
  {
    id: "onion",
    name: "Golden Onion Seeds",
    image: "/images/generated/prod_onion.png",
    shortDesc: "Premium onion seeds for large, crisp bulbs. Excellent storage capability and uniform size.",
    tags: ["Vegetable", "Long Shelf-life"],
    gradient: "linear-gradient(135deg, #FCC419 0%, #E67700 100%)",
  },
  {
    id: "watermelon",
    name: "Sugar Watermelon",
    image: "/images/generated/prod_watermelon.png",
    shortDesc: "Produce sweet, massive watermelons with our premium seeds. Excellent drought tolerance and rapid vine growth.",
    tags: ["Fruit", "Summer Crop"],
    gradient: "linear-gradient(135deg, #69DB7C 0%, #2B8A3E 100%)",
  },
  {
    id: "maize",
    name: "Premium Maize Seeds",
    image: "/images/products_dl/pros1.jpg",
    shortDesc:
      "World's leading crop and queen of cereals, widely cultivated as cereal grain with highest genetic yield potential.",
    tags: ["Kharif / Rabi", "105–115 Days"],
    gradient: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)",
  },
  {
    id: "kala-namak-kiran",
    name: "Kala Namak Kiran Paddy Seeds",
    image: "/kala_namak.png",
    shortDesc: "Heritage aromatic paddy with hi-yield certified performance — superior grain aroma, strong tillering, and excellent germination.",
    tags: ["Kharif", "Aromatic", "GI Variety"],
    gradient: "linear-gradient(135deg, #A3E635 0%, #4D7C0F 100%)",
  },
  {
    id: "khushboo-606",
    name: "Khushbu 606 Paddy Seeds",
    image: "/khushboo.png",
    shortDesc: "Premium fragrant paddy variety with uniform crop growth, bold grains, and outstanding market value.",
    tags: ["Kharif", "Fragrant", "High Yield"],
    gradient: "linear-gradient(135deg, #86EFAC 0%, #15803D 100%)",
  },
];

/* ── STATS ──────────────────────────────────────────────────── */
const stats = [
  { value: 50000, suffix: "+", label: "Farmers Served" },
  { value: 6,     suffix: "+", label: "States Covered" },
  { value: 15,    suffix: "+", label: "Seed Varieties" },
  { value: 25,    suffix: "+", label: "Years of Excellence" },
];

/* ── INNOVATION FEATURES ────────────────────────────────────── */
const innovFeatures = [
  "Advanced hybrid breeding technology",
  "Multi-location yield testing & validation",
  "Climate-adaptive varieties for diverse regions",
  "ISO-certified quality control processes",
];

/* ── CATEGORIES ─────────────────────────────────────────────── */
const categories = [
  {
    name: "Vegetable Seeds",
    subtitle: "Tomato · Onion · Chili · Potato · Cauliflower",
    gradient: "linear-gradient(155deg, #003D2A 0%, #006D4E 55%, #00C896 100%)",
    href: "/products?category=vegetable",
    count: "12+ Varieties",
    image: "/images/generated/cat_vegetables.png",
  },
  
  {
    name: "Field Crops",
    subtitle: "Maize · Wheat · Paddy",
    gradient: "linear-gradient(155deg, #2E1500 0%, #8B5E14 55%, #F5A623 100%)",
    href: "/products?category=field",
    count: "6+ Varieties",
    image: "/images/generated/cat_field_crops.png",
  },
  {
    name: "Fiber Crops",
    subtitle: "Cotton · Jute",
    gradient: "linear-gradient(155deg, #001433 0%, #0D47A1 55%, #4FC3F7 100%)",
    href: "/products?category=fibre",
    count: "2+ Varieties",
    image: "/images/generated/cat_fiber_crops.png",
  },
];

/* ── FACILITY IMAGES ────────────────────────────────────────── */
const infraImages = [
  "/fc1.jpg","/fc2.jpg","/fc3.jpg",
  "/fc4.jpg","/seeds.jpeg","/factory.jpeg",
];

/* ── FLOATING SEED PARTICLES ────────────────────────────────── */
const seedParticles = [
  { id:1, x:"5%",  y:"18%", size:58, rot:25,  delay:0,   dur:7   },
  { id:2, x:"88%", y:"12%", size:44, rot:-15, delay:1.5, dur:8.5 },
  { id:3, x:"93%", y:"55%", size:36, rot:50,  delay:0.8, dur:6   },
  { id:4, x:"3%",  y:"72%", size:50, rot:-35, delay:2.2, dur:9   },
  { id:5, x:"78%", y:"82%", size:40, rot:15,  delay:1.2, dur:7.5 },
  { id:6, x:"48%", y:"6%",  size:28, rot:65,  delay:0.5, dur:6.5 },
  { id:7, x:"18%", y:"88%", size:52, rot:-20, delay:1.8, dur:8   },
  { id:8, x:"62%", y:"4%",  size:24, rot:80,  delay:0.3, dur:5.5 },
];

/* ── SEED SVG ────────────────────────────────────────────────── */
function SeedSvg({ size }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.62)}
      viewBox="0 0 100 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="50" cy="31" rx="46" ry="27" fill="#00C896" opacity="0.16" />
      <ellipse cx="50" cy="31" rx="36" ry="18" fill="#00C896" opacity="0.08" />
    </svg>
  );
}

/* ── ANIMATED STAT COUNTER ──────────────────────────────────── */
function StatItem({ value, suffix, label }) {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 2400;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statNumber}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statLine} />
    </div>
  );
}

/* ── FRAMER VARIANTS ────────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.7 } },
};
const heroItem = {
  hidden:  { y: 48, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const backdropVariant = {
  hidden: { x: "-100%", opacity: 1 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" } },
};

/* ── HERO SLIDES CONFIG ──────────────────────────────────────── */
const heroSlides = [
  {
    desktopImage: "/images/WhatsApp Image 2026-05-21 at 23.58.05.jpeg",
    mobileImage: "/images/WhatsApp Image 2026-05-22 at 00.06.15.jpeg",
    alt: "Premium seeds and healthy crop yield",
    badge: "Trusted by 50,000+ farmers worldwide",
    titleLight: "Pioneering the",
    titleBold: "Future of Seeds.",
  },
  {
    desktopImage: "/images/WhatsApp Image 2026-05-31 at 18.41.14 (1).jpeg",
    mobileImage: "/images/WhatsApp Image 2026-05-31 at 18.41.14.jpeg",
    alt: "Scientific crop cultivation and high-quality seeds",
    badge: "Premium Hybrid Varieties",
    titleLight: "Engineered for",
    titleBold: "Maximum Yield.",
  },
  {
    desktopImage: "/images/WhatsApp Image 2026-05-31 at 21.16.52.jpeg",
    mobileImage: "/images/WhatsApp Image 2026-05-31 at 21.16.53.jpeg",
    alt: "Golden crop harvests and agriculture excellence",
    badge: "ISO 9001:2015 Certified Quality",
    titleLight: "Nurturing Growth,",
    titleBold: "Securing Harvests.",
  },
];

/* ── HOME PAGE ──────────────────────────────────────────────── */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero    = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yStats   = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Hero slider refs ───────────────────────────────────── */
  const swiperRef      = useRef(null);
  const videoRef       = useRef(null);
  const imageTimerRef  = useRef(null);

  /* Slide changed → restart video on slide (desktop only), start 6s timer on image slides */
  const handleSlideChange = (swiper) => {
    if (imageTimerRef.current) clearTimeout(imageTimerRef.current);

    if (!isMobile && swiper.realIndex === heroSlides.length) {
      /* Back on video slide — rewind and play */
      const vid = videoRef.current;
      if (vid) { vid.currentTime = 0; vid.play().catch(() => {}); }
    } else {
      /* On image slide (or any slide on mobile) — auto-advance after 3.5 s */
      imageTimerRef.current = setTimeout(() => {
        swiperRef.current?.slideNext();
      }, 3500);
    }
  };

  /* Video finishes → go to image slide */
  const handleVideoEnded = () => swiperRef.current?.slideNext();

  useEffect(() => () => { if (imageTimerRef.current) clearTimeout(imageTimerRef.current); }, []);

  return (
    <main className={styles.mainWrapper}>


      {/* ═══════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════ */}
      <section className={styles.hero}>

        {/* Hero Slider — advances only when video finishes */}
        <Swiper
          key={hasMounted ? (isMobile ? "mobile" : "desktop") : "initial"}
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          loop={hasMounted}
          allowTouchMove={true}
          autoplay={hasMounted && isMobile ? { delay: 3500, disableOnInteraction: false } : false}
          pagination={(hasMounted && !isMobile) ? { clickable: true } : false}
          onSwiper={(s) => { swiperRef.current = s; }}
          onSlideChange={handleSlideChange}
          className={styles.heroSwiper}
        >
          {/* Dynamic Image Slides */}
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={styles.slideWrapper}>
                  <motion.div className={styles.heroBgImg} aria-hidden style={{ y: yHero }}>
                    <Image
                      src={isMobile ? slide.mobileImage : slide.desktopImage}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      className={styles.bgImageFull}
                    />
                    <div className={styles.heroGradientOverlay} />
                  </motion.div>

                  <div className={styles.heroContentWrapper}>
                    <div className={styles.heroLayout}>
                      <motion.div
                        className={styles.heroContent}
                        variants={heroContainer}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                      >
                        {/* Animated slider background plane */}
                        <motion.div
                          className={styles.heroBackdrop}
                          variants={backdropVariant}
                        />
                        
                        <div className={styles.heroContentInner}>
                          <motion.div variants={heroItem} className={styles.heroBadge}>
                            <span className={styles.badgeDot} />
                            {slide.badge}
                          </motion.div>

                          <motion.h1 variants={heroItem} className={styles.heroTitle}>
                            <span className={styles.heroLight}>{slide.titleLight}</span>
                            <span className={styles.heroBold}>{slide.titleBold}</span>
                          </motion.h1>

                          <motion.div variants={heroItem} className={styles.heroCTAs}>
                            <Link href="/products" className={styles.ctaSolidGreen}>
                              Explore Our Seeds
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Slide: Video — plays once, then advances (Excluded on Mobile) */}
          {hasMounted && !isMobile && (
            <SwiperSlide key="video">
              <div className={styles.slideWrapper}>
                <motion.div className={styles.heroBgImg} aria-hidden style={{ y: yHero }}>
                  <video
                    ref={videoRef}
                    src="/agronica.mp4"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                    className={`${styles.bgImageFull} ${styles.heroVideo}`}
                  />
                  <div className={styles.heroGradientOverlay} />
                </motion.div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        {/* Wave divider */}
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#007A55" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

      </section>

      {/* Crop Navigation Marquee */}
      <div className={styles.cropNav}>
        <div className={styles.cropNavInner}>
          <div className={styles.cropNavMarquee}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><circle cx="12" cy="14" r="8" /><path d="M12 2v4M9 4l3 2 3-2" /></svg>
                  Tomato
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M12 2c-3 8-8 8-8 13a8 8 0 0 0 16 0c0-5-5-5-8-13z" /><path d="M10 22v2M14 22v2M12 22v3" /></svg>
                  Onion
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M9 2a3 3 0 0 0 6 0" /><path d="M12 5v2" /><path d="M7 10c0-3 10-3 10 0v5c0 5-5 7-5 7s-5-2-5-7v-5z" /></svg>
                  Pepper
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M2 12a10 10 0 0 0 20 0z" /><circle cx="12" cy="16" r="1" fill="currentColor"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/></svg>
                  Watermelon
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M12 2c-3 0-5 3-5 10s2 10 5 10 5-3 5-10-2-10-5-10z" /><path d="M7 12h10M8 8h8M8 16h8" /></svg>
                  Maize
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M12 2v20M8 6l4 4M16 6l-4 4M8 12l4 4M16 12l-4 4M8 18l4 4M16 18l-4 4" /></svg>
                  Wheat
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M12 22V8" /><path d="M12 10c-2 0-4 1-5 3M12 14c-3 0-5 1-6 3M12 18c-4 0-6 1-7 3M12 8c2 0 4 1 5 3M12 12c3 0 5 1 6 3M12 16c4 0 6 1 7 3" /></svg>
                  Paddy
                </Link>
                <Link href="/products" className={styles.cropNavItem}>
                  <svg viewBox="0 0 24 24" className={styles.cropIcon}><path d="M12 20v4" /><path d="M7 16a5 5 0 0 1 1-9 4 4 0 0 1 8 0 5 5 0 0 1 1 9z" /><path d="M6 18l6-2 6 2M12 16v4" /></svg>
                  Cotton
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          2. NUMBER STRIP — Stats
          ═══════════════════════════════════════════ */}
      <section className={styles.statsSection}>
        <motion.div className={styles.statsBg} aria-hidden style={{ y: yStats }} />
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BLOGS
          ═══════════════════════════════════════════ */}
      <Blogs />

      {/* ═══════════════════════════════════════════
          4. SEED CATEGORIES — Explore by Crop Type
          ═══════════════════════════════════════════ */}
      <section className={styles.catsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>Seed Portfolio</span>
            <h2 className={styles.sectionTitle}>Explore by Crop Type</h2>
          </motion.div>

          <div className={styles.catsGrid}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={cat.href} className={styles.catCard}>
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className={styles.catCardImage}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  )}
                  <div className={styles.catCardOverlay} style={{ background: cat.gradient }} />
                  <div className={styles.catCardInner}>
                    <span className={styles.catCount}>{cat.count}</span>
                    <h3 className={styles.catName}>{cat.name}</h3>
                    <p className={styles.catSub}>{cat.subtitle}</p>
                    <div className={styles.catArrow}><ArrowRight size={18} /></div>
                  </div>
                  <div className={styles.catShine} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. SIGNATURE SEED VARIETIES — Products
          ═══════════════════════════════════════════ */}
      <section className={styles.productsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>Our Seeds</span>
            <h2 className={styles.sectionTitle}>Signature Seed Varieties</h2>
            <p className={styles.sectionDesc}>
              High-performance seeds developed through rigorous research, tested
              across diverse agro-climatic zones in India.
            </p>
          </motion.div>

          <div className={styles.productsGrid}>
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className={styles.productCard}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className={styles.cardAccent} style={{ background: product.gradient }} />
                <div className={styles.cardImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardTagStrip}>
                    {product.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <p className={styles.cardDesc}>{product.shortDesc}</p>
                  <div className={styles.cardActions}>
                    <Link href="/products" className={styles.cardBtn}>
                      Learn More <ArrowRight size={14} />
                    </Link>
                    <Link href={`/contact?product=${product.id}`} className={styles.cardBtnSecondary}>
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.productsFooter}>
            <Link href="/products" className={styles.viewAllBtn}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. CERTIFICATIONS
          ═══════════════════════════════════════════ */}
      <Certifications />

      {/* ═══════════════════════════════════════════
          7. INFRASTRUCTURE — Factory Photos & Innovation
          ═══════════════════════════════════════════ */}
      <section className={styles.facilitySection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>Infrastructure</span>
            <h2 className={styles.sectionTitle}>World-Class Facilities</h2>
            <p className={styles.sectionDesc}>
              State-of-the-art processing, quality testing, and storage
              infrastructure ensuring every seed meets international standards.
            </p>
          </motion.div>

          <div className={styles.facilityGrid}>
            {infraImages.map((img, i) => (
              <motion.div
                key={i}
                className={styles.facilityCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Image
                  src={img}
                  alt="Agronica facility"
                  fill
                  className={styles.facilityImg}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className={styles.facilityOverlay} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          8. FAQS & GALLERY
          ═══════════════════════════════════════════ */}
      <Gallery />
      <Faqs />

      {/* ═══════════════════════════════════════════
          8. CTA BANNER
          ═══════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} aria-hidden />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.ctaBadge}>Partner with Agronica</span>
            <h2 className={styles.ctaTitle}>
              Ready to Elevate<br />Your Harvest?
            </h2>
            <p className={styles.ctaDesc}>
              Join 50,000+ farmers who trust Agronica for premium seeds that
              deliver consistent, high-yield results season after season.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaWhiteBtn}>
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/products" className={styles.ctaGhostBtn}>
                Browse Seeds
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
