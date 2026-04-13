"use client";
import { motion } from "framer-motion";
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
  Award,
  Handshake,
  Building2,
  Zap,
  MapPin,
} from "lucide-react";
import styles from "./about.module.css";

const timeline = [
  {
    year: "Foundation",
    title: "The Seed of an Idea",
    desc: "Agronica Seeds Spark Private Ltd. was born as a new venture of MRC Agrotech Ltd., with a vision to revolutionize agriculture in India.",
  },
  {
    year: "Growth",
    title: "Building Our Network",
    desc: "Established partnerships with 500 farmers and set up a 30,000 sq ft state-of-the-art processing plant in Basti, Uttar Pradesh.",
  },
  {
    year: "Innovation",
    title: "Research & Development",
    desc: "Launched high-performing, disease-resistant, and climate-resilient seed varieties across 6+ crop categories.",
  },
  {
    year: "Today",
    title: "Leading the Future",
    desc: "Operating across 10 states, empowering growers with cutting-edge seed technology and sustainable agricultural practices.",
  },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creativity and innovation in everything we do.", color: "#F59E0B" },
  { icon: TreePine, title: "Sustainability", desc: "We prioritize environmental stewardship and social responsibility.", color: "#10B981" },
  { icon: Star, title: "Quality", desc: "We strive for excellence in our seeds and services.", color: "#8B5CF6" },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, honesty, and ethical business practices.", color: "#3B82F6" },
  { icon: Heart, title: "Customer-Centricity", desc: "We put our customers at the heart of everything we do.", color: "#EF4444" },
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
            style={{ color: "#093827ff" }}
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

      {/* Company Overview */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection direction="left">
              <h2>
                Revolutionizing Agriculture with{" "}
                <span className={styles.highlight}>Innovation</span>
              </h2>
              <p>
                Agronica Seeds Spark Private Ltd. is a new Venture of MRC
                Agrotech Ltd. Dedicated to revolutionising agriculture in India,
                we are inspiring farmers to increase their agricultural produce
                and make it profitable with high quality and latest technology.
              </p>
              <p>
                Our story began with a simple idea — to harness the power of
                seeds to improve lives and the planet. We are dedicated to
                developing and supplying high-performing, disease-resistant, and
                climate-resilient seed varieties.
              </p>
              <p>
                We're excited to embark on this journey and contribute to
                the growth and development of the agricultural industry.
                Join us in shaping the future of seeds and sustainable
                agriculture.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.overviewVisual}>
                <div className={styles.overviewCard}>
                  <div className={styles.overviewEmoji}>🌾</div>
                  <h4>Shaping the Future of Seeds</h4>
                  <p>
                    We&apos;re excited to embark on this journey and contribute
                    to the growth and development of the agricultural industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Journey</span>
            <h2>The Agronica <span className={styles.highlightGold}>Timeline</span></h2>
          </AnimatedSection>

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <AnimatedSection
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.15}
              >
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <div className={styles.timelineLine} />
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

      {/* Vision & Mission */}
      <section className="section" id="vision" style={{ background: "var(--cream)" }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Vision & Mission</span>
            <h2>Where We&apos;re <span className={styles.highlight}>Headed</span></h2>
          </AnimatedSection>

          <div className={styles.vmGrid}>
            <AnimatedSection direction="left">
              <div className={styles.vmCard}>
                <div className={styles.vmIcon}>
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Our vision at Agronica is to be a leading provider of
                  innovative and sustainable seed solutions, shaping the future
                  of agriculture and contributing to a food-secure world. We
                  envision:
                </p>
                <ul>
                  <li>A world where sustainable agriculture practices are the norm</li>
                  <li>Growers achieving improved yields and livelihoods through our seeds and services</li>
                  <li>Our company being a trusted partner and industry leader in seed technology and sustainability</li>
                  <li>A future where our seeds and services make a positive impact on the environment and society</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.vmCard}>
                <div className={`${styles.vmIcon} ${styles.vmIconGold}`}>
                  <Rocket size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  At Agronica, our mission is to develop and supply high-quality
                  seeds that exceed our customers' expectations. Empowering
                  growers to achieve sustainable agricultural practices and
                  improved profit yields.
                </p>
                <ul>
                  <li>Develop and supply high-quality seeds that exceed our customers' expectations</li>
                  <li>Empower growers to achieve sustainable agricultural practices and improved profit yields</li>
                  <li>Foster a culture of innovation, integrity, and social responsibility</li>
                  <li>Build strong relationships with our customers, partners, and the communities we serve</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark" id="values">
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Core Values</span>
            <h2>What We <span className={styles.highlightGold}>Stand For</span></h2>
          </AnimatedSection>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.1}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon} style={{ background: `${v.color}20`, color: v.color }}>
                    <v.icon size={24} />
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section" id="infrastructure" style={{ background: "var(--cream)" }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Plant & Infrastructure</span>
            <h2>State-of-the-Art <span className={styles.highlight}>Facilities</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              The wide network of 500 farmers along with 30,000 sq ft plant
              area and the state-of-the-art infrastructural facilities enables
              ASSPL to guarantee the best seed supply at local and international
              levels.
            </p>
          </AnimatedSection>

          <div className={styles.infraGrid}>
            {[
              { icon: Factory, title: "Processing Plant", desc: "30,000 sq ft high-capacity seed processing facility at Basti, Uttar Pradesh" },
              { icon: Shield, title: "Seeds Production", desc: "ASSPL adheres to best practices in seed production that contribute to high quality seeds. Our team of experts work closely to ensure products meet specific quality standards." },
              { icon: Zap, title: "Processing & Conditioning", desc: "Seeds are processed at Basti, Uttar Pradesh plant with modern technologies adopted at high-capacity processing units to ensure the best quality." },
              { icon: MapPin, title: "Strategic Locations", desc: "Corporate office at Sagar Tech Plaza, Andheri East, Mumbai and registered office in Basti, Uttar Pradesh" },
              { icon: Handshake, title: "Farmer Network", desc: "Wide network of 500 partner farmers across India" },
              { icon: Globe, title: "Digital Technologies", desc: "We adopt digital technologies to ensure hassle-free and steady supply of seed products from our location plants" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.08}>
                <div className={styles.infraCard}>
                  <div className={styles.infraIcon}>
                    <item.icon size={24} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
