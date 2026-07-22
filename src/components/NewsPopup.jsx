"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, ArrowUpRight, Minus, Plus } from "lucide-react";
import styles from "./NewsPopup.module.css";

const NEWS = {
  title: "BHU signs MoU to commercialise wheat variety HUW 838",
  source: "Times of India",
  date: "July 17, 2026",
  image: "/images/products_dl/meeting.jpeg",
  url: "https://timesofindia.indiatimes.com/city/varanasi/bhu-signs-mous-to-commercialise-wheat-variety-ayurvedic-health-tool/articleshow/132484875.cms",
};

export default function NewsPopup() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="card"
            className={styles.card}
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.header}>
              <span className={styles.badge}>
                <Newspaper size={12} /> News
              </span>
              <button
                className={styles.collapseBtn}
                onClick={() => setOpen(false)}
                aria-label="Minimize news"
              >
                <Minus size={15} />
              </button>
            </div>

            <div className={styles.imageWrap}>
              <img src={NEWS.image} alt={NEWS.title} className={styles.image} />
            </div>

            <div className={styles.body}>
              <div className={styles.meta}>
                <span className={styles.source}>{NEWS.source}</span>
                <span className={styles.dot} />
                <span>{NEWS.date}</span>
              </div>
              <h4 className={styles.title}>{NEWS.title}</h4>
              <a
                href={NEWS.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.moreLink}
              >
                Click to know more <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="pill"
            className={styles.pill}
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: -12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Show news"
          >
            <Newspaper size={14} />
            <span className={styles.pillText}>News</span>
            <Plus size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
