"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  icon: Icon,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  // Format the end value to calculate the width needed
  const formattedEnd = `${prefix}${end.toLocaleString()}${suffix}`;

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} style={counterStyles.wrapper}>
      {Icon && (
        <div style={counterStyles.iconWrap}>
          <Icon size={20} />
        </div>
      )}
      {/* Invisible placeholder to reserve space and prevent layout shift */}
      <div style={counterStyles.numberContainer}>
        <div style={{ ...counterStyles.number, ...counterStyles.placeholder }} aria-hidden="true">
          {formattedEnd}
        </div>
        <div style={counterStyles.number}>
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
      </div>
      {label && <div style={counterStyles.label}>{label}</div>}
    </div>
  );
}

const counterStyles = {
  wrapper: {
    textAlign: "center",
    padding: "1.25rem 1rem",
  },
  iconWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "0.75rem",
  },
  numberContainer: {
    position: "relative",
    display: "inline-block",
  },
  placeholder: {
    visibility: "hidden",
    position: "relative",
    whiteSpace: "nowrap",
  },
  number: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontWeight: 400,
    color: "white",
    lineHeight: 1.1,
    marginBottom: "0.375rem",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    letterSpacing: "-0.02em",
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.45)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
};
