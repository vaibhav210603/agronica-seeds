"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Leaf, 
  ShieldCheck, 
  Award, 
  ShoppingBag, 
  Globe, 
  HeartHandshake, 
  Info 
} from "lucide-react";
import Link from "next/link";
import styles from "./Faqs.module.css";

const faqItems = [
  {
    id: "germination",
    question: "What is the standard germination rate of Agronica hybrid seeds?",
    answer: "Agronica hybrid seeds consistently deliver a premium germination rate of 85% to 95% under optimal laboratory testing and controlled field conditions. We subject every batch to strict physical purity and viability tests at our ISO-certified processing facilities before packaging, ensuring that farmers receive seeds of outstanding vigor.",
    icon: Leaf,
    highlight: "85% to 95% germination rate"
  },
  {
    id: "storage",
    question: "How should I store seed packets before sowing to maintain maximum vigor?",
    answer: "To maintain maximum seedling vigor and prevent premature aging, store unopened Agronica seed packets in a cool, dry, and well-ventilated space, ideally at temperatures between 15°C and 20°C (59°F–68°F) with relative humidity below 40%. Avoid direct exposure to sunlight, damp soil, or extreme heat. Once opened, it is highly recommended to sow the seeds within 24 to 48 hours.",
    icon: ShieldCheck,
    highlight: "15°C and 20°C with <40% humidity"
  },
  {
    id: "certification",
    question: "Are Agronica Seeds certified by government agencies?",
    answer: "Yes, all Agronica hybrid and high-yielding varieties are rigorously tested and comply with the seed standards set by the Central Seed Committee under the Ministry of Agriculture, Government of India. Our processing plants are fully certified, and every batch features a certified/truthful label detailing seed purity, germination percentage, and moisture content for absolute transparency.",
    icon: Award,
    highlight: "Ministry of Agriculture certified"
  },
  {
    id: "bulk-orders",
    question: "How can I place bulk seed orders for commercial farming?",
    answer: "Commercial growers, farming cooperatives, and authorized distributors can place bulk orders directly through our Commercial Sales Division by navigating to our Contact Page or emailing sales@agronicaseeds.com. We offer custom packaging, volume discounts, door-to-step logistics across major agricultural states, and dedicated agronomic advisory services for large-scale operations.",
    icon: ShoppingBag,
    highlight: "sales@agronicaseeds.com"
  },
  {
    id: "climate-zones",
    question: "What climate zones are your hybrid field crops optimized for?",
    answer: "Our research-bred hybrid field crops (including Maize, Wheat, Paddy, and Mustard) are scientifically optimized for the diverse agro-climatic zones of India, spanning the fertile Indo-Gangetic plains, semi-arid regions of Central India, and tropical climates of Western & Southern zones. Each seed variety is mapped to specific sowing windows and soil types to maximize performance under regional heat and moisture stresses.",
    icon: Globe,
    highlight: "diverse agro-climatic zones of India"
  },
  {
    id: "advisory",
    question: "Do you provide agronomic advisory support during the crop cycle?",
    answer: "Absolutely. At Agronica Seeds, we believe in supporting farmers beyond the sale. Our certified agronomists provide comprehensive, on-the-ground and digital advisory support. From seed bed preparation, soil testing, and optimal sowing depth to fertilizer schedules, water management, and pest control, we assist you at every stage of the crop growth cycle to ensure a record-breaking harvest.",
    icon: HeartHandshake,
    highlight: "comprehensive on-the-ground advisory"
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Helper to split answer and highlight the key phrase
  const renderAnswer = (answer, highlight) => {
    if (!highlight) return answer;
    const parts = answer.split(highlight);
    if (parts.length < 2) return answer;
    return (
      <>
        {parts[0]}
        <span className={styles.answerHighlight}>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={styles.faqSection} id="faqs">
      {/* Decorative Blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.headerLabel}>FAQ Section</span>
          <h2 className={styles.headerTitle}>
            Got Questions? We Have <span className={styles.headerHighlight}>Answers</span>
          </h2>
          <p className={styles.headerSub}>
            Find clear, honest answers to the most common queries about our premium hybrid seeds, storage guidelines, government certifications, and ordering process.
          </p>
        </div>

        {/* Accordion Container */}
        <div className={styles.accordionContainer}>
          {faqItems.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ""}`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                >
                  <div className={styles.questionContent}>
                    <span className={styles.questionIcon}>
                      <IconComponent size={22} strokeWidth={2} />
                    </span>
                    <span className={styles.questionText}>
                      {item.question}
                    </span>
                  </div>
                  <div className={styles.chevronWrapper}>
                    <ChevronDown
                      size={18}
                      className={`${styles.chevron} ${isOpen ? styles.chevronActive : ""}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className={styles.answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                    >
                      <div className={styles.answerContent}>
                        <p>{renderAnswer(item.answer, item.highlight)}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Info */}
        <div className={styles.infoBanner}>
          <Info size={20} className={styles.infoIcon} />
          <div className={styles.infoText}>
            Still have questions about our sowing protocols, bulk dealer margins, or crop advisory support? We&apos;re here to help.{" "}
            <Link href="/contact" className={styles.infoLink}>
              Contact our agronomy support team
            </Link>{" "}
            for personalized assistance.
          </div>
        </div>
      </div>
    </section>
  );
}
