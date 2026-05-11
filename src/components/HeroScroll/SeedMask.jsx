'use client'
import { motion } from 'framer-motion'

export default function SeedMask({ scale, bezelOpacity, children }) {
  return (
    <motion.div
      style={{ scale, opacity: 1 }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          opacity: bezelOpacity,
          background: `radial-gradient(
            ellipse at 30% 25%,
            var(--earth-300) 0%,
            var(--earth-500) 55%,
            var(--earth-700) 100%
          )`,
          boxShadow: `
            inset 0 0 0 12px rgba(255,255,255,0.2),
            inset 0 0 0 24px var(--earth-500),
            0 0 60px 20px rgba(13,40,24,0.6),
            0 0 0 4px rgba(255,255,255,0.1)
          `,
        }}
      />

      <div
        className="relative overflow-hidden w-[35vw] h-[65vh] border-[20px] border-[var(--earth-500)]"
        style={{
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
