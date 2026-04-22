"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sprout } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import styles from "./CropRecommender.module.css";

const products = [
  {
    id: "maize",
    name: "Maize",
    emoji: "🌽",
    season: ["Kharif", "Rabi"],
    shortDesc: "Highest genetic yield potential among all cereals. Versatile crop across seasons.",
    tags: ["105-115 Days", "Drought Tolerant"],
    states: ["Uttar Pradesh", "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Gujarat", "Haryana", "Jharkhand", "Karnataka", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Telangana", "Tamil Nadu", "West Bengal"],
  },
  {
    id: "wheat-dbw187",
    name: "Wheat (DBW187)",
    emoji: "🌾",
    season: ["Rabi"],
    shortDesc: "High yield potential under early sown irrigated conditions. Average 61.28 q/ha.",
    tags: ["120 Days", "High Yield", "Heat Tolerant"],
    states: ["Punjab", "Haryana", "Delhi", "Rajasthan", "Uttar Pradesh", "Himachal Pradesh", "Jammu & Kashmir", "Bihar", "Jharkhand", "Odisha", "West Bengal", "Assam"],
  },
  {
    id: "wheat-hd2967",
    name: "Wheat (HD2967)",
    emoji: "🌾",
    season: ["Rabi"],
    shortDesc: "Double dwarf variety. Amber, bold, lustrous grain. Significant in India's production.",
    tags: ["129-143 Days", "Double Dwarf"],
    states: ["Punjab", "Haryana", "Delhi", "Rajasthan", "Uttar Pradesh", "Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand"],
  },
  {
    id: "paddy",
    name: "Paddy",
    emoji: "🌿",
    season: ["Kharif", "Rabi"],
    shortDesc: "Staple food for 60%+ of the world. Bold grains, blast & BPH tolerant.",
    tags: ["115-140 Days", "Staple Crop"],
    states: ["Uttar Pradesh", "Andhra Pradesh", "Bihar", "Chhattisgarh", "Gujarat", "Haryana", "Jharkhand", "Madhya Pradesh", "Maharashtra", "Odisha", "Telangana", "West Bengal"],
  },
  {
    id: "mustard",
    name: "Mustard",
    emoji: "🌻",
    season: ["Rabi"],
    shortDesc: "Historic oilseed crop. Documented in Sanskrit texts from 3000 BC.",
    tags: ["Oilseed", "Ancient Crop"],
    states: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Haryana"],
  },
  {
    id: "cotton",
    name: "Cotton (Agronica BGII)",
    emoji: "☁️",
    season: ["Kharif"],
    shortDesc: "Bollgard II technology for superior pest resistance, reduced chemical use.",
    tags: ["Fiber Crop", "Bollgard II"],
    states: ["Gujarat", "Maharashtra", "Telangana", "Andhra Pradesh", "Karnataka"],
  },
];

const allStates = [...new Set(products.flatMap((p) => p.states))].sort();

export default function CropRecommender() {
  const [season, setSeason] = useState("all");
  const [state, setState] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSeason = season === "all" || p.season.includes(season);
      const matchState = state === "all" || p.states.includes(state);
      return matchSeason && matchState;
    });
  }, [season, state]);

  return (
    <section className={`section ${styles.recommenderSection}`}>
      <div className="container">
        <AnimatedSection direction="up" className={styles.header}>
          <div className={styles.headerEmoji}>🌱</div>
          <span className="section-label">Crop Recommender</span>
          <h2 className="section-title">What Should I Sow?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Select your season and state to discover the best Agronica seed
            varieties for your farm.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <div className={styles.controls}>
            <div className={styles.selectGroup}>
              <span className={styles.selectLabel}>Season</span>
              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                >
                  <option value="all">All Seasons</option>
                  <option value="Kharif">Kharif (Jun–Oct)</option>
                  <option value="Rabi">Rabi (Nov–Mar)</option>
                </select>
                <ChevronDown size={14} className={styles.selectArrow} />
              </div>
            </div>

            <div className={styles.selectGroup}>
              <span className={styles.selectLabel}>State / Region</span>
              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="all">All States</option>
                  {allStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className={styles.selectArrow} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className={styles.results}>
          {filtered.length > 0 && (
            <p className={styles.resultCount}>
              <span className={styles.resultCountNum}>{filtered.length}</span>{" "}
              {filtered.length === 1 ? "variety" : "varieties"} found
            </p>
          )}

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${season}-${state}`}
                className={styles.resultsGrid}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    className={styles.resultCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className={styles.resultTop}>
                      <div className={styles.resultEmoji}>{product.emoji}</div>
                      <div>
                        <h4 className={styles.resultName}>{product.name}</h4>
                        <div className={styles.resultSeason}>
                          {product.season.map((s) => (
                            <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "3px", marginRight: "0.5rem" }}>
                              <span className={`${styles.seasonDot} ${s === "Rabi" ? styles.seasonDotRabi : ""}`} />
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={styles.resultDesc}>{product.shortDesc}</p>
                    <div className={styles.resultTags}>
                      {product.tags.map((t) => (
                        <span key={t} className={styles.resultTag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className={styles.emptyState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className={styles.emptyEmoji}>🔍</span>
                <h4 className={styles.emptyTitle}>No varieties found</h4>
                <p className={styles.emptyText}>
                  Try selecting a different season or state to see our recommended varieties.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
