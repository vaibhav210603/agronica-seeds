"use client";
import AnimatedSection from "./AnimatedSection";
import styles from "./SeasonalCalendar.module.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const crops = [
  {
    name: "Maize",
    emoji: "🌽",
    season: "Kharif / Rabi",
    // Kharif sowing: Jun-Jul, Harvest: Sep-Oct | Rabi sowing: Oct-Nov, Harvest: Feb-Mar
    sowing: [5, 6, 9, 10],    // Jun, Jul, Oct, Nov (0-indexed)
    harvest: [8, 9, 1, 2],    // Sep, Oct, Feb, Mar
  },
  {
    name: "Wheat (DBW187)",
    emoji: "🌾",
    season: "Rabi",
    sowing: [10, 11],         // Nov, Dec
    harvest: [2, 3],          // Mar, Apr
  },
  {
    name: "Wheat (HD2967)",
    emoji: "🌾",
    season: "Rabi",
    sowing: [10, 11],
    harvest: [2, 3],
  },
  {
    name: "Paddy",
    emoji: "🌿",
    season: "Kharif",
    sowing: [5, 6],           // Jun, Jul
    harvest: [9, 10],         // Oct, Nov
  },
  {
    name: "Mustard",
    emoji: "🌻",
    season: "Rabi",
    sowing: [9, 10],          // Oct, Nov
    harvest: [1, 2],          // Feb, Mar
  },
  {
    name: "Cotton (BGII)",
    emoji: "☁️",
    season: "Kharif",
    sowing: [4, 5],           // May, Jun
    harvest: [9, 10, 11],     // Oct, Nov, Dec
  },
];

export default function SeasonalCalendar() {
  const currentMonth = new Date().getMonth(); // 0-indexed

  return (
    <section className={`section ${styles.calendarSection}`}>
      <div className="container">
        <AnimatedSection direction="up" className={styles.header}>
          <span className="section-label">Crop Calendar</span>
          <h2 className="section-title">When to Sow, When to Harvest</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Plan your farming season with our visual crop timeline. See at a
            glance when each Agronica variety goes into the ground and when you
            reap the rewards.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <div className={styles.calendarWrap}>
            <div className={styles.calendar}>
              {/* Month header */}
              <div className={styles.monthsRow}>
                <div className={styles.monthsLabel}>Crop Variety</div>
                {months.map((m, i) => (
                  <div
                    key={m}
                    className={`${styles.monthCell} ${i === currentMonth ? styles.currentMonth : ""}`}
                  >
                    {m}
                  </div>
                ))}
              </div>

              {/* Crop rows */}
              {crops.map((crop) => (
                <div key={crop.name} className={styles.cropRow}>
                  <div className={styles.cropInfo}>
                    <span className={styles.cropEmoji}>{crop.emoji}</span>
                    <div>
                      <div className={styles.cropName}>{crop.name}</div>
                      <div className={styles.cropSeason}>{crop.season}</div>
                    </div>
                  </div>
                  {months.map((_, monthIdx) => {
                    const isSowing = crop.sowing.includes(monthIdx);
                    const isHarvest = crop.harvest.includes(monthIdx);
                    return (
                      <div
                        key={monthIdx}
                        className={`${styles.timelineCell} ${monthIdx === currentMonth ? styles.currentMonth : ""}`}
                      >
                        {isSowing && <div className={styles.barSowing} title="Sowing period" />}
                        {isHarvest && !isSowing && <div className={styles.barHarvest} title="Harvest period" />}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <p className={styles.scrollHint}>← Scroll horizontally to view all months →</p>

          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.legendSowing}`} />
              Sowing Period
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.legendHarvest}`} />
              Harvest Period
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.legendCurrent}`} />
              Current Month
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
