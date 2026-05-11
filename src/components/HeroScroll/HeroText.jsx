'use client'
import { motion, useTransform } from 'framer-motion'

export default function HeroText({ progress }) {
  const leftX   = useTransform(progress, [0, 0.18], ['0%', '-120%'])
  const leftOp  = useTransform(progress, [0, 0.15], [1, 0])
  
  const rightX  = useTransform(progress, [0, 0.18], ['0%', '120%'])
  const rightOp = useTransform(progress, [0, 0.15], [1, 0])

  const botOp   = useTransform(progress, [0.04, 0.16], [1, 0])

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20">
      <motion.div style={{ x: leftX, opacity: leftOp }} className="absolute top-[12%] left-[4%]">
        <h1 className="text-[10vw] font-bold leading-[0.92] tracking-tight text-[var(--text-inverse)] whitespace-nowrap">
          We are<br />growth
        </h1>
      </motion.div>

      <motion.div style={{ x: rightX, opacity: rightOp }} className="absolute bottom-[18%] right-[4%] text-right">
        <h1 className="text-[10vw] font-bold leading-[0.92] tracking-tight text-[var(--text-inverse)] whitespace-nowrap">
          We are<br />harvest
        </h1>
      </motion.div>

      <motion.div style={{ opacity: botOp }} className="absolute bottom-[22%] left-[4%] max-w-[280px]">
        <p className="text-sm font-light tracking-wide text-[var(--text-inverse)] mb-2">
          Cultivating the future
        </p>
        <div className="w-6 h-px bg-white/50 mb-3" />
        <p className="text-[11px] text-[var(--text-inverse)]/70 leading-relaxed">
          Every seed is a promise of abundance.<br />
          We bring innovation to the fields,<br />
          empowering farmers to yield more.
        </p>
      </motion.div>

      <motion.div style={{ opacity: botOp }} className="absolute bottom-[8%] right-[4%] flex items-center gap-6">
        <span className="text-[9px] text-[var(--text-inverse)]/60 tracking-[0.22em] uppercase">
          ↓ Scroll to Sow
        </span>
      </motion.div>
    </div>
  )
}
