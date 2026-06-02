"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import {
  Users,
  Factory,
  Wheat,
  Globe,
  Eye,
  Rocket,
  Lightbulb,
  TreePine,
  Star,
  Shield,
  Heart,
  Target,
  Handshake,
  Zap,
  MapPin,
  TrendingUp,
  FileText,
  Sprout
} from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import styles from "./about.module.css";

const infraImages = [
  "/bori.jpg",
  "/fc1.jpg",
  "/fc2.jpg",
  "/fc3.jpg",
  "/fc4.jpg"
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creativity and innovation in everything we do.", color: "#F59E0B" },
  { icon: TreePine, title: "Sustainability", desc: "We prioritize environmental stewardship and social responsibility.", color: "#10B981" },
  { icon: Star, title: "Quality", desc: "We strive for excellence in our seeds and services.", color: "#8B5CF6" },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, honesty, and ethical business practices.", color: "#3B82F6" },
  { icon: Heart, title: "Customer-centricity", desc: "We put our customers at the heart of everything we do.", color: "#EF4444" },
];

const goals = [
  "Develop and launch new seed varieties that address specific customer needs.",
  "Achieve a minimum of 20% annual growth in sales revenue.",
  "Expand our customer base in new markets and regions.",
  "Reduce our environmental footprint through sustainable practices.",
  "Foster strategic partnerships with industry leaders and research institutions."
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image 
          src="/Maize 2025-08-12 at 11.55.12 AM.JPEG"
          alt="Agronica Seeds Fields"
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our <span className={styles.highlight}>Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.heroSub}
          >
            A fresh and innovative force in the seeds industry, empowering
            growers and contributing to a sustainable food future.
          </motion.p>
        </div>
      </section>

      {/* Section 1: About Us */}
      <section className="section" id="about-us" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection direction="left">
              <span className="section-label">Agronica Seeds Spark Private Ltd.</span>
              <h2>
                Revolutionizing Agriculture with{" "}
                <span className={styles.highlight}>Innovation</span>
              </h2>
              <p>
                As a new venture of MRC Agrotech Ltd., we are dedicated to revolutionising agriculture in India. 
                Our story began with a simple idea: to harness the power of seeds to improve lives and the planet by 
                inspiring farmers to increase their produce through high-quality seeds and latest technology.
              </p>
              
              <div className={styles.focusPoints}>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Sprout size={18} /></div>
                  <p>Developing high-performing, disease-resistant, and climate-resilient seed varieties.</p>
                </div>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Zap size={18} /></div>
                  <p>Leveraging cutting-edge technology and sustainable practices to reduce environmental footprint.</p>
                </div>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Handshake size={18} /></div>
                  <p>Building strong relationships with our customers, partners, and the communities we serve.</p>
                </div>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Lightbulb size={18} /></div>
                  <p>Fostering a culture of innovation, integrity, and social responsibility.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className={styles.overviewVisual} style={{ position: 'relative', width: '100%', maxWidth: '100%', aspectRatio: '1' }}>
                <Image 
                  src="/images/PHOTO-2026-06-02-12-26-23.jpg"
                  alt="Agricultural innovation" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  style={{ objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-emerald" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className={styles.statsGrid}>
            <StatCounter end={500} label="Partner Farmers" icon={Users} />
            <StatCounter end={30000} suffix=" sq ft" label="Plant Area" icon={Factory} />
            <StatCounter end={6} label="Crop Varieties" icon={Wheat} />
            <StatCounter end={10} label="States Covered" icon={Globe} />
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="section" id="vision-mission" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-label">Vision & Mission</span>
            <h2>Shaping the <span className={styles.highlight}>Future of Agriculture</span></h2>
          </AnimatedSection>

          <div className={styles.vmRows}>
            {/* Vision Row */}
            <div className={styles.vmRow}>
              <AnimatedSection direction="left" className={styles.vmImageSide}>
                <div className={styles.vmImageWrapper}>
                  <Image 
                    src="/images/vis.jpg" 
                    alt="Our Vision" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className={styles.vmImageOverlay}>
                    <Eye size={40} />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" className={styles.vmTextSide}>
                <div className={styles.vmContent}>
                  <span className={styles.vmCategory}>Our Vision</span>
                  <h3>Providing Sustainable Solutions</h3>
                  <p>
                    Our vision at Agronica is to be a leading provider of innovative and sustainable seed solutions, 
                    shaping the future of agriculture and contributing to a food-secure world. We envision:
                  </p>
                  <ul className={styles.vmList}>
                    <li>A world where sustainable agriculture practices are the norm.</li>
                    <li>Growers achieving improved yields and livelihoods through our seeds and services.</li>
                    <li>A trusted partner and industry leader in seed technology and sustainability.</li>
                    <li>A future where our seeds and services make a positive impact on the environment.</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Mission Row */}
            <div className={`${styles.vmRow} ${styles.vmRowReverse}`}>
              <AnimatedSection direction="right" className={styles.vmImageSide}>
                <div className={styles.vmImageWrapper}>
                  <Image 
                    src="/images/miss.jpg" 
                    alt="Our Mission" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className={`${styles.vmImageOverlay} ${styles.vmImageOverlayGold}`}>
                    <Rocket size={40} />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" className={styles.vmTextSide}>
                <div className={styles.vmContent}>
                  <span className={styles.vmCategory}>Our Mission</span>
                  <h3>Empowering the Growers</h3>
                  <p>At Agronica, our mission is to develop and supply high-quality seeds that exceed our customers&apos; expectations:</p>
                  <ul className={styles.vmList}>
                    <li>Develop and supply high-quality seeds that exceed expectations.</li>
                    <li>Empower growers to achieve sustainable practices and improved yields.</li>
                    <li>Foster a culture of innovation, integrity, and social responsibility.</li>
                    <li>Build strong relationships with our customers, partners, and communities.</li>
                  </ul>
                  <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    We strive to make a positive impact on the environment, society, and the economy through our seeds and services.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values, Goals & Purpose */}
      <section className="section section-dark" id="values-goals">
        <div className="container">
          <div className={styles.vgpGrid}>
            {/* Values Sub-section */}
            <div className={styles.valuesSub}>
              <AnimatedSection direction="up" style={{ marginBottom: "3rem" }}>
                <span className="section-label">Our Core Values</span>
                <h2>What We <span className={styles.highlightGold}>Stand For</span></h2>
              </AnimatedSection>
              
              <div className={styles.valuesGridSmall}>
                {values.map((v, i) => (
                  <AnimatedSection key={v.title} direction="up" delay={i * 0.1}>
                    <div className={styles.valueCardSmall}>
                      <div className={styles.valueIconSmall} style={{ background: `${v.color}20`, color: v.color }}>
                        <v.icon size={20} />
                      </div>
                      <div>
                        <h4>{v.title}</h4>
                        <p>{v.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Goals & Purpose Sub-section */}
            <div className={styles.goalsPurposeSub}>
              <AnimatedSection direction="right">
                <div className={styles.goalsCard}>
                  <h3>Our Goals</h3>
                  <ul className={styles.goalsList}>
                    {goals.map((goal, i) => (
                      <li key={i}>
                        <Target size={16} className={styles.goalIcon} />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.purposeCard}>
                  <div className={styles.purposeIcon}>
                    <Heart size={24} />
                  </div>
                  <h3>Our Purpose</h3>
                  <p>
                    Our purpose at Agronica is to empower growers to feed a growing world sustainably. 
                    We aim to achieve this by developing and supplying innovative, high-quality seeds 
                    that improve crop yields, disease resistance, and nutritional value. We are committed 
                    to making a positive impact on the environment, society, and the economy through 
                    our seeds, services, and partnerships.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Leadership */}
      <section className="section section-dark" id="leadership">
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Our Leadership</span>
            <h2>Meet Our <span className={styles.highlightGold}>Directors</span></h2>
          </AnimatedSection>

          <div className={styles.leadershipGrid}>
            <AnimatedSection direction="up" delay={0.1}>
              <div className={styles.directorCard}>
                <div className={styles.directorImageWrap}>
                  <Image 
                    src="/ashok.jpeg" 
                    alt="Ashok Kumar Singh" 
                    fill 
                    className={styles.directorImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.directorImageOverlay}></div>
                </div>
                <div className={styles.directorContent}>
                  <h3>Ashok Kumar Singh</h3>
                  <p className={styles.directorTitle}>Director</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className={styles.directorCard}>
                <div className={styles.directorImageWrap}>
                  <Image 
                    src="/shivendra3.png" 
                    alt="Shivendra Pratap Singh" 
                    fill 
                    className={styles.directorImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.directorImageOverlay}></div>
                </div>
                <div className={styles.directorContent}>
                  <h3>Shivendra Pratap Singh</h3>
                  <p className={styles.directorTitle}>Director</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: Plant & Infrastructure */}
      <section className="section" id="infrastructure" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className={styles.infraHeaderGrid}>
            <AnimatedSection direction="left">
              <span className="section-label">Plant & Infrastructure</span>
              <h2>In Tune with <span className={styles.highlight}>Industry Standards</span></h2>
              <p className="section-subtitle" style={{ textAlign: "left", margin: "1.5rem 0 0" }}>
                The wide network of 500 farmers along with 30,000 sq feet Plant area and the state-of-the-art infrastructural facilities enables ASSPL to guarantee the best seed supply at local and international levels. We adopt digital technologies to ensure hassle-free and steady supply of seed products.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Our location plants are standardized to international norms and quality, ensuring every stage of processing is monitored for excellence.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div style={{ maxWidth: '600px', marginLeft: 'auto' }}>
                <ImageCarousel images={infraImages} />
              </div>
            </AnimatedSection>
          </div>

          <div className={styles.facilitiesGrid}>
            <AnimatedSection direction="up" delay={0.1}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImageWrap}>
                  <Image
                    src="/fc1.jpg"
                    alt="Processing facility with modern equipment"
                    fill
                    className={styles.facilityImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.facilityContent}>
                  <h4>Advanced Processing Infrastructure</h4>
                  <p>
                    The wide network of 500 farmers along with 30000 sq feet Plant area and the state-of-the-art infrastructural facilities..
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImageWrap}>
                  <Image
                    src="/fc2.jpg"
                    alt="Seed processing and conditioning equipment"
                    fill
                    className={styles.facilityImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.facilityContent}>
                  <h4>Quality Assurance & Best Practices</h4>
                  <p>
                    ASSPL to best practices in seed production that contribute to high quality seeds. Our team of experts work closely..
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImageWrap}>
                  <Image
                    src="/fc3.jpg"
                    alt="Basti Uttar Pradesh modern processing plant"
                    fill
                    className={styles.facilityImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.facilityContent}>
                  <h4>State-of-the-Art Technology</h4>
                  <p>
                    He seeds are processed at Basti Uttar Pradesh Plant with Modern technologies like adopted at high-capacity..
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
