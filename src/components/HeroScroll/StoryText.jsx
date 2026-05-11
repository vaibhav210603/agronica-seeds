'use client'
import { motion, useTransform } from 'framer-motion'

const COPY = `Agronica Seeds is a pioneer in agricultural innovation with over 20 years of research and development. From resilient crops to bountiful harvests, farmers trust our seeds to deliver uncompromised quality and abundant yields.`

export default function StoryText({ progress }) {
  const containerOp = useTransform(progress, [0.42, 0.52, 0.72, 0.82], [0, 1, 1, 0])
  const containerY  = useTransform(progress, [0.42, 0.55], ['40px', '0px'])
  const words = COPY.split(' ')
  const revealIndex = useTransform(progress, [0.48, 0.72], [0, words.length])

  return (
    <motion.div style={{ opacity: containerOp, y: containerY }} className="absolute inset-0 flex items-center justify-center z-30 px-[5%] text-center">
      <p className="text-[4.2vw] font-bold leading-[1.1] text-[var(--text-inverse)] max-w-[80vw]">
        {words.map((word, i) => (
          <WordReveal key={i} word={word} index={i} revealIndex={revealIndex} />
        ))}
      </p>
    </motion.div>
  )
}

function WordReveal({ word, index, revealIndex }) {
  const opacity = useTransform(revealIndex, [index - 2, index + 1], [0.14, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}
