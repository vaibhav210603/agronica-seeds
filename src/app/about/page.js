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
import styles from "./about.module.css";

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
                Agronica Seeds Spark Private Ltd. is a new Venture of MRC Agrotech Ltd. 
                Dedicated to revolutionising agriculture in India, we proudly state that 
                we are inspiring farmers to increase their agricultural produce and 
                make it profitable with high quality and latest technology.
              </p>
              <p>
                Our story began with a simple idea: to harness the power of seeds to improve lives and the planet.
              </p>
              
              <div className={styles.focusPoints}>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Sprout size={18} /></div>
                  <p>Dedicated to developing and supplying high-performing, disease-resistant, and climate-resilient seed varieties.</p>
                </div>
                <div className={styles.focusPoint}>
                  <div className={styles.focusIcon}><Zap size={18} /></div>
                  <p>Leveraging cutting-edge technology and sustainable practices to reduce our environmental footprint.</p>
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

              <p style={{ marginTop: '1.5rem' }}>
                We're excited to embark on this journey and contribute to the growth and development 
                of the agricultural industry. Join us in shaping the future of seeds and sustainable agriculture.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className={styles.overviewVisual} style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/5' }}>
                <Image 
                  src="/hm1.gif" 
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
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Vision & Mission</span>
            <h2>Shaping the <span className={styles.highlight}>Future of Agriculture</span></h2>
          </AnimatedSection>

          <div className={styles.vmGrid}>
            <AnimatedSection direction="left">
              <div className={styles.vmCard}>
                <div className={styles.vmIcon}>
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Our vision at Agronica is to be a leading provider of innovative and sustainable seed solutions, 
                  shaping the future of agriculture and contributing to a food-secure world. We envision:
                </p>
                <ul>
                  <li>A world where sustainable agriculture practices are the norm.</li>
                  <li>Growers achieving improved yields and livelihoods through our seeds and services.</li>
                  <li>Our company being a trusted partner and industry leader in seed technology and sustainability.</li>
                  <li>A future where our seeds and services make a positive impact on the environment and society.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className={styles.vmCard}>
                <div className={`${styles.vmIcon} ${styles.vmIconGold}`}>
                  <Rocket size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>At Agronica, our mission is to:</p>
                <ul>
                  <li>Develop and supply high-quality seeds that exceed our customers&apos; expectations.</li>
                  <li>Empower growers to achieve sustainable agricultural practices and improved profit yields.</li>
                  <li>Foster a culture of innovation, integrity, and social responsibility.</li>
                  <li>Build strong relationships with our customers, partners, and the communities we serve.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', fontStyle: 'italic' }}>
                  We strive to make a positive impact on the environment, society, and the economy through our seeds and services.
                </p>
              </div>
            </AnimatedSection>
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

      {/* Plant & Infrastructure */}
      <section className="section" id="infrastructure" style={{ background: "var(--bg)" }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Plant & Infrastructure</span>
            <h2>In Tune with <span className={styles.highlight}>Industry Standards</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "900px" }}>
              The wide network of 500 farmers along with 30,000 sq feet Plant area and the state-of-the-art infrastructural facilities enables ASSPL to guarantee the best seed supply at local and international levels with every stage of processes, technology, and equipment is standardised to international norms and quality. We adopt digital technologies to ensure hassle free and steady supply of seed products from our location plants for different crops and products.
            </p>
          </AnimatedSection>

          <div className={styles.infraGrid}>
            <AnimatedSection direction="up" delay={0.1}>
              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <Shield size={24} />
                </div>
                <h4>Seeds Production</h4>
                <p>
                  ASSPL to best practices in seed production that contribute to high quality seeds. Our team of experts work closely to ensure the products meet specific quality standards. The entire process of seed production is rigorously monitored through training and providing crop management materials to farmers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <Zap size={24} />
                </div>
                <h4>Processing & Conditioning</h4>
                <p>
                  The seeds are processed at Basti Uttar Pradesh Plant with Modern technologies like adopted at high-capacity processing units to ensure the best quality.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <Factory size={24} />
                </div>
                <h4>Quality Assurance</h4>
                <p>
                  Our processing units are equipped with advanced grading and cleaning machinery, ensuring every batch meets our stringent purity and germination standards before reaching the farmer.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
