'use client'
import { useEffect, useRef } from 'react'

export default function CanvasSequence({ images, frameIndex, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = images[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.scale(dpr, dpr)

    const { naturalWidth: iw, naturalHeight: ih } = img
    const cw = window.innerWidth
    const ch = window.innerHeight
    const scale = Math.max(cw / iw, ch / ih)
    const drawW = iw * scale
    const drawH = ih * scale
    const dx = (cw - drawW) / 2
    const dy = (ch - drawH) / 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, dx, dy, drawW, drawH)
  }, [images, frameIndex])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ width: '100%', height: '100%' }}
      role="img"
      aria-label="Seed to Harvest sequence"
    />
  )
}
