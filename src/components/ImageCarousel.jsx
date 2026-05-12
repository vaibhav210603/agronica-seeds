"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 2000);
    return () => clearInterval(timer);
  }, [page]); // Reset timer on page change to avoid double jumps

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <div className="carousel-wrapper" style={{ position: 'relative', width: '100%', height: 'clamp(300px, 50vw, 600px)', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', background: '#1a2e1a' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Infrastructure ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)', pointerEvents: 'none' }} />

      <button 
        onClick={() => paginate(-1)}
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10, transition: 'all 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => paginate(1)}
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10, transition: 'all 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <ChevronRight size={24} />
      </button>

      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
        {images.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
            style={{ 
              width: i === currentIndex ? '32px' : '8px', 
              height: '8px', 
              borderRadius: '4px', 
              background: i === currentIndex ? 'white' : 'rgba(255,255,255,0.4)', 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              cursor: 'pointer' 
            }} 
          />
        ))}
      </div>
    </div>
  );
}
