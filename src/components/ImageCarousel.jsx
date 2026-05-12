"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-wrapper" style={{ position: 'relative', width: '100%', height: 'clamp(300px, 50vw, 600px)', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Infrastructure ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </AnimatePresence>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />

      <button 
        onClick={prev}
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={next}
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
      >
        <ChevronRight size={24} />
      </button>

      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
        {images.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            style={{ width: i === currentIndex ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === currentIndex ? 'white' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s', cursor: 'pointer' }} 
          />
        ))}
      </div>
    </div>
  );
}
