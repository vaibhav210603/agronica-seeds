'use client'
import { useRef } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
import { useImagePreloader } from '../../hooks/useImagePreloader'
import CanvasSequence from './CanvasSequence'
import SeedMask from './SeedMask'
import HeroText from './HeroText'
import StoryText from './StoryText'
import HarvestYield from './HarvestYield'

const TOTAL_FRAMES = 31

export default function HeroScroll() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const { images, loaded, progress: loadProgress } = useImagePreloader(
    TOTAL_FRAMES,
    (i) => `/hero-sequence/ezgif-frame-${String(i).padStart(3, '0')}.jpg`
  )

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.30, 0.55, 1],
    ['var(--primary-900)', 'var(--primary-900)', 'var(--primary-50)', 'var(--primary-50)']
  )

  const windowScale = useTransform(scrollYProgress, [0, 0.01, 0.38], [0.44, 0.44, 3.0])
  const bezelOpacity = useTransform(scrollYProgress, [0.18, 0.40], [1, 0])
  
  const frameIndexRaw = useTransform(scrollYProgress, [0.25, 0.92], [0, TOTAL_FRAMES - 1], { clamp: true })
  
  const windowLabelOp = useTransform(scrollYProgress, [0, 0.14], [0.7, 0])
  const vignetteOp = useTransform(scrollYProgress, [0, 0.30], [1, 0])

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-[100] bg-[var(--primary-900)] flex flex-col items-center justify-center gap-4">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
            Preparing your journey
          </p>
          <div className="w-48 h-px bg-white/10 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[var(--primary-300)] transition-all"
              style={{ width: `${loadProgress * 100}%` }}
            />
          </div>
        </div>
      )}

      <div ref={containerRef} className="relative h-[400vh]">
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          <motion.div
            style={{ opacity: vignetteOp }}
            className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,transparent_30%,rgba(13,40,24,0.85)_100%)]"
          />

          <div className="absolute inset-0 z-0">
            <CanvasFrameSync images={images} frameIndexRaw={frameIndexRaw} />
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <SeedMask scale={windowScale} bezelOpacity={bezelOpacity}>
              <motion.span
                style={{ opacity: windowLabelOp }}
                className="absolute inset-0 flex items-center justify-center text-white/70 text-sm tracking-[0.35em] uppercase font-light z-20 pointer-events-none"
              >
                Agronica Seeds
              </motion.span>
            </SeedMask>
          </div>

          <HeroText progress={scrollYProgress} />
          <StoryText progress={scrollYProgress} />
          <HarvestYield progress={scrollYProgress} />
        </motion.div>
      </div>
    </>
  )
}

function CanvasFrameSync({ images, frameIndexRaw }) {
  const [frameIndex, setFrameIndex] = require('react').useState(0);
  
  useMotionValueEvent(frameIndexRaw, 'change', (val) => setFrameIndex(Math.round(val)));
  
  return <CanvasSequence images={images} frameIndex={frameIndex} />;
}
