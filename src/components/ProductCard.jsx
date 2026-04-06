"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, index = 0, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageWrap} onClick={onClick}>
        <div
          className={styles.imageBg}
          style={{ background: product.gradient }}
        />
        {product.image && !imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.productImage}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.emoji}>{product.emoji}</div>
        )}
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.shortDesc}</p>
        <div className={styles.tags}>
          {product.tags?.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.learnMore} onClick={onClick}>
            Learn More <ArrowRight size={16} />
          </button>
          <button
            className={styles.quotationBtn}
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = `/contact?product=${encodeURIComponent(product.name)}`;
            }}
          >
            <FileText size={14} />
            Request Quotation
          </button>
        </div>
      </div>
      <div className={styles.glowBorder} />
    </motion.div>
  );
}
