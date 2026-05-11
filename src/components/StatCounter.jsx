"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function StatCounter({
  end,
  suffix = "+",
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
    <div ref={ref} className="stat-card" style={counterStyles.wrapper}>
      <div style={counterStyles.topRow}>
        {Icon && (
          <div style={counterStyles.iconWrap}>
            <Icon size={18} strokeWidth={2.5} />
          </div>
        )}
        <div style={counterStyles.number}>
          {prefix}{count.toLocaleString()}{suffix}
        </div>
      </div>
      {label && <div style={counterStyles.label}>{label}</div>}
    </div>
  );
}

const counterStyles = {
  wrapper: {
    textAlign: "left",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  iconWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.08)",
    color: "rgba(255, 255, 255, 0.8)",
    flexShrink: 0,
  },
  number: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
    fontWeight: 400,
    color: "white",
    lineHeight: 1,
    letterSpacing: "-0.01em",
  },
  label: {
    fontSize: "0.6875rem",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    paddingLeft: "0.125rem",
  },
};
