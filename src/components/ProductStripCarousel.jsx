"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductStripCarousel.module.css";

export default function ProductStripCarousel({ crops }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollPos = 0;
    const cardWidth = track.scrollWidth / crops.length;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= track.scrollWidth - track.clientWidth) {
        scrollPos = 0;
      }
      track.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [crops.length]);

  return (
    <div className={styles.container}>
      <div className={styles.track} ref={trackRef}>
        {crops.map((crop) => (
          <Link key={crop.id} href={crop.href} className={styles.card}>
            <Image
              src={crop.image}
              alt={crop.name}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 85vw, 33vw"
            />
            <div className={styles.overlay} />
            <div className={styles.info}>
              <span className={styles.badge}>{crop.badge}</span>
              <h3 className={styles.name}>{crop.name}</h3>
              <span className={styles.duration}>{crop.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
