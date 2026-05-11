export const lerp = (a, b, t) => a + (b - a) * t

/** Map a value in [inMin, inMax] to [outMin, outMax], clamped */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  const t = Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)))
  return lerp(outMin, outMax, t)
}
