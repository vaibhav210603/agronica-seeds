"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import styles from "./Certifications.module.css";

// ── CUSTOM HIGH-FIDELITY SVG EMBLEMS & SEALS (REAL LOGO DESIGNS) ──────────

function IsoLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgLogo}>
      {/* Ribbon Tails */}
      <path d="M30 55L35 75L40 68L45 75L50 55" fill="#00A87E" opacity="0.85" />
      <path d="M40 55L45 78L50 71L55 78L57 52" fill="#00C896" opacity="0.6" />
      {/* Outer Scalloped Ring */}
      <circle cx="40" cy="38" r="28" fill="#FFFFFF" stroke="#003D2A" strokeWidth="2.5" />
      {/* Gold Inner Dash Ring */}
      <circle cx="40" cy="38" r="24" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Center Typography & Stars */}
      <text x="40" y="32" fontFamily="var(--font-heading)" fontSize="9" fontWeight="900" fill="#003D2A" textAnchor="middle" letterSpacing="0.05em">ISO</text>
      <text x="40" y="42" fontFamily="var(--font-heading)" fontSize="6" fontWeight="800" fill="#008A65" textAnchor="middle" letterSpacing="0.03em">9001:2015</text>
      <path d="M28 36H31M49 36H52" stroke="#003D2A" strokeWidth="1" strokeLinecap="round" />
      {/* Premium Gold Star */}
      <polygon points="40,20 41.5,22.5 44.5,22.5 42,24 43,27 40,25 37,27 38,24 35.5,22.5 38.5,22.5" fill="#F5A623" />
    </svg>
  );
}

function NsaiLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgLogo}>
      {/* Shield Background */}
      <path d="M22 20C32 20 40 14 40 14C40 14 48 20 58 20V42C58 52 48 60 40 64C32 60 22 52 22 42V20Z" fill="#F7FAF8" stroke="#003D2A" strokeWidth="2.5" />
      {/* Inner Gold Shield Border */}
      <path d="M26 23.5C34 23.5 40 18.5 40 18.5C40 18.5 46 23.5 54 23.5V40.5C54 48.5 46 55 40 58.5C34 55 26 48.5 26 40.5V23.5Z" stroke="#D97706" strokeWidth="1.2" />
      {/* Central Sprout Leaf Motif */}
      <path d="M40 44V30M40 34C37 32 32 33 32 36C32 39 37 39 40 39M40 31.5C43 29.5 48 30.5 48 33.5C48 37 43 37 40 37" stroke="#008A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Text NSAI */}
      <text x="40" y="49" fontFamily="var(--font-heading)" fontSize="8.5" fontWeight="900" fill="#003D2A" textAnchor="middle" letterSpacing="0.05em">NSAI</text>
      <text x="40" y="54" fontFamily="var(--font-body)" fontSize="4.5" fontWeight="800" fill="#00C896" textAnchor="middle" letterSpacing="0.04em">MEMBER</text>
    </svg>
  );
}

function IcarLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgLogo}>
      {/* Circular seal with custom golden leaf crown ticks */}
      <circle cx="40" cy="38" r="28" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
      <circle cx="40" cy="38" r="24" stroke="#003D2A" strokeWidth="1" strokeDasharray="2 3" />
      {/* Dual wheat stalks */}
      <path d="M25 43C25 35 29 31 31 29M55 43C55 35 51 31 49 29" stroke="#00C896" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="26" cy="37" r="1.5" fill="#00C896" />
      <circle cx="29" cy="33" r="1.5" fill="#00C896" />
      <circle cx="54" cy="37" r="1.5" fill="#00C896" />
      <circle cx="51" cy="33" r="1.5" fill="#00C896" />
      {/* Central ICAR Banner */}
      <rect x="26" y="32" width="28" height="12" rx="2" fill="#003D2A" />
      <text x="40" y="41" fontFamily="var(--font-heading)" fontSize="8.5" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.04em">ICAR</text>
      <text x="40" y="50" fontFamily="var(--font-heading)" fontSize="5.5" fontWeight="800" fill="#D97706" textAnchor="middle" letterSpacing="0.06em">VALIDATED</text>
    </svg>
  );
}

function NablLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgLogo}>
      {/* Gear/circle shape of precision lab */}
      <circle cx="40" cy="38" r="28" fill="#F7FAF8" stroke="#003D2A" strokeWidth="2.5" />
      {/* Precision measurement markings */}
      <line x1="40" y1="10" x2="40" y2="14" stroke="#003D2A" strokeWidth="2" />
      <line x1="40" y1="62" x2="40" y2="66" stroke="#003D2A" strokeWidth="2" />
      <line x1="12" y1="38" x2="16" y2="38" stroke="#003D2A" strokeWidth="2" />
      <line x1="64" y1="38" x2="68" y2="38" stroke="#003D2A" strokeWidth="2" />
      <circle cx="40" cy="38" r="22" stroke="#D97706" strokeWidth="1.2" />
      {/* Lab Flask shape inside */}
      <path d="M37 30H43M38 30L35 44H45L42 30" stroke="#003D2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="39" r="1.5" fill="#00C896" />
      {/* Central NABL badge */}
      <rect x="27" y="45" width="26" height="9" rx="1.5" fill="#003D2A" />
      <text x="40" y="52" fontFamily="var(--font-heading)" fontSize="6" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.04em">NABL</text>
    </svg>
  );
}

const certificationData = [
  {
    id: "iso",
    logo: IsoLogo,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Internationally certified Quality Management Systems for premium seed breeding, processing, and distribution.",
    badgeText: "Certified",
    accentColor: "rgba(0, 200, 150, 0.08)",
  },
  {
    id: "nsai",
    logo: NsaiLogo,
    title: "NSAI Member",
    subtitle: "National Seed Association of India",
    description: "Premier registered corporate member driving agricultural excellence and promoting progressive seed standards.",
    badgeText: "Registered",
    accentColor: "rgba(217, 119, 6, 0.08)",
  },
  {
    id: "icar",
    logo: IcarLogo,
    title: "ICAR Validated",
    subtitle: "Indian Council of Agricultural Research",
    description: "High-yielding hybrid varieties thoroughly tested, scientifically validated, and approved by the ICAR network.",
    badgeText: "Validated",
    accentColor: "rgba(0, 200, 150, 0.08)",
  },
  {
    id: "nabl",
    logo: NablLogo,
    title: "NABL Accredited",
    subtitle: "Accredited Laboratory Testing",
    description: "Advanced seed testing laboratory analyzing and guaranteeing purity, moisture, and germination vigor.",
    badgeText: "Accredited",
    accentColor: "rgba(0, 138, 101, 0.08)",
  }
];

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      {/* Decorative subtle ambient background orbs */}
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <AnimatedSection direction="up" delay={0.05}>
            <span className={styles.sectionLabel}>Trust & Authority</span>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className={styles.title}>
              Our Quality <span className={styles.gradientText}>Certifications</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.15}>
            <p className={styles.subtitle}>
              Agronica Seeds operates under the highest global benchmarks and national regulatory systems, 
              ensuring every grain is engineered for optimal yield and absolute purity.
            </p>
          </AnimatedSection>
        </div>

        <div className={styles.grid}>
          {certificationData.map((cert, index) => {
            const LogoComponent = cert.logo;
            return (
              <AnimatedSection 
                key={cert.id} 
                direction="up" 
                delay={0.15 + index * 0.08}
                className={styles.animatedCardWrapper}
              >
                <div 
                  className={styles.card}
                  style={{ "--accent-glow": cert.accentColor }}
                >
                  {/* Subtle hover backlight */}
                  <div className={styles.backlight}></div>
                  
                  <div className={styles.cardContent}>
                    {/* Glowing Logo emblem container */}
                    <div className={styles.logoContainer}>
                      <LogoComponent />
                    </div>
                    
                    {/* Certified Badge */}
                    <div className={styles.badge}>
                      <CheckCircle size={10} className={styles.badgeIcon} />
                      <span>{cert.badgeText}</span>
                    </div>

                    {/* Titles */}
                    <h3 className={styles.cardTitle}>{cert.title}</h3>
                    <h4 className={styles.cardSubtitle}>{cert.subtitle}</h4>
                    
                    {/* Description */}
                    <p className={styles.cardDescription}>{cert.description}</p>
                  </div>
                  
                  {/* Subtle sheen highlight */}
                  <div className={styles.sheen}></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        
        {/* Swipe indicator for mobile touch screen */}
        <p className={styles.swipeHint}>← Swipe horizontally to explore certifications →</p>
      </div>
    </section>
  );
}
