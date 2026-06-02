"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import styles from "./Gallery.module.css";
import Image from "next/image";

const MEDIA_ITEMS = [
  { type: "image", src: "/images/pdf_image_page1_0.jpeg", alt: "Farmers in field with HD-2967" },
  { type: "video", src: "/images/VIDEO-2026-06-02-12-26-26.mp4", alt: "Seed packing operations" },
  { type: "image", src: "/images/PHOTO-2026-06-02-12-26-24%202.jpg", alt: "Stacked seed bags in warehouse" },
  { type: "video", src: "/images/VIDEO-2026-06-02-12-26-27.mp4", alt: "Seed processing machinery" },
  { type: "image", src: "/images/pdf_image_page4_0.jpeg", alt: "Agronica wheat field landscape" },
  { type: "video", src: "/images/VIDEO-2026-06-02-12-26-35.mp4", alt: "Weighing and packing seeds" },
  { type: "image", src: "/images/pdf_image_page3_0.jpeg", alt: "Close up of healthy green crops" },
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>From The Fields</span>
          <h2 className={styles.sectionTitle}>Our Media Gallery</h2>
          <p className={styles.sectionDesc}>
            Take a look at the real on-ground results, field preparations, and healthy crops.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {MEDIA_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.gridItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <div className={styles.mediaWrapper}>
                  <img src={item.src} alt={item.alt} className={styles.media} loading="lazy" />
                  <div className={styles.overlay}></div>
                </div>
              ) : (
                <div className={styles.mediaWrapper}>
                  <video src={item.src} className={styles.media} muted playsInline />
                  <div className={styles.overlay}>
                    <Play className={styles.playIcon} size={48} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setSelectedMedia(null)}>
                <X size={24} />
              </button>
              {selectedMedia.type === "image" ? (
                <img src={selectedMedia.src} alt={selectedMedia.alt} className={styles.modalMedia} />
              ) : (
                <video src={selectedMedia.src} controls autoPlay className={styles.modalMedia} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
