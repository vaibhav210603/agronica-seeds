"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import styles from "./SeedJourney.module.css";

const steps = [
  {
    emoji: "🌱",
    title: "Seed Selection",
    desc: "Our scientists select and breed the finest genetic traits for disease resistance and yield.",
  },
  {
    emoji: "🚜",
    title: "Sowing",
    desc: "Farmers sow Agronica seeds with expert advisory on spacing, depth, and irrigation timing.",
  },
  {
    emoji: "🌿",
    title: "Growth",
    desc: "The crop thrives through the season, drawing on in-built resilience against pests and weather.",
  },
  {
    emoji: "🌾",
    title: "Harvest",
    desc: "Heavier, healthier harvests — more grain, better returns, and a stronger livelihood.",
  },
];

export default function SeedJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const activeSteps = isInView ? steps.length : 0;
  const progressPercent = isInView ? 100 : 0;

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <AnimatedSection direction="up" className={styles.header}>
          <span className="section-label">The Agronica Way</span>
          <h2 className="section-title">From Seed to Harvest</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Every Agronica seed follows a journey of scientific precision and
            farmer wisdom — from our lab to your field, and from sowing to a
            bountiful harvest.
          </p>
        </AnimatedSection>

        <div className={styles.journey}>
          {/* Animated progress line */}
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: isInView ? "75%" : "0%" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className={`${styles.step} ${i < activeSteps ? styles.stepActive : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
            >
              <motion.div
                className={styles.stepIcon}
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5, type: "spring" }}
              >
                <span style={{ fontSize: "1.75rem" }}>{step.emoji}</span>
              </motion.div>
              <div>
                <span className={styles.stepNumber}>{`Step ${String(i + 1).padStart(2, "0")}`}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
