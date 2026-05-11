'use client'
import { motion, useTransform } from 'framer-motion'

export default function HarvestYield({ progress }) {
  const opacity = useTransform(progress, [0.72, 0.84], [0, 1])
  const leftX   = useTransform(progress, [0.72, 0.88], ['-80px', '0px'])
  const rightX  = useTransform(progress, [0.72, 0.88], ['80px', '0px'])

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-30 pointer-events-none">
      <motion.div style={{ x: leftX }} className="absolute bottom-[18%] left-[4%]">
        <h2 className="text-[10vw] font-bold leading-none text-[var(--primary-900)] tracking-tight">
          Yield in
        </h2>
        <p className="mt-3 text-sm text-[var(--primary-900)]/60 font-light tracking-wide">
          Abundance that<br />sustains the future
        </p>
      </motion.div>
      <motion.div style={{ x: rightX }} className="absolute bottom-[18%] right-[4%] text-right">
        <h2 className="text-[10vw] font-bold leading-none text-[var(--primary-900)] tracking-tight">
          Abundance
        </h2>
      </motion.div>
    </motion.div>
  )
}
