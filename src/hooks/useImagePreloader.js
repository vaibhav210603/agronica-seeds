'use client'
import { useEffect, useRef, useState } from 'react'

export function useImagePreloader(totalFrames, pathTemplate) {
  const images = useRef([])
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let count = 0
    images.current = Array.from({ length: totalFrames }, (_, i) => {
      const img = new Image()
      img.src = pathTemplate(i + 1)
      img.onload = () => {
        count++
        setProgress(count / totalFrames)
        if (count === totalFrames) setLoaded(true)
      }
      img.onerror = () => {
        console.error(`Failed to load image at: ${img.src}`)
        count++
        setProgress(count / totalFrames)
        if (count === totalFrames) setLoaded(true)
      }
      return img
    })
  }, [totalFrames, pathTemplate])

  return { images: images.current, loaded, progress }
}
