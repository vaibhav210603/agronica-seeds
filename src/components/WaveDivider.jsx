"use client";

export default function WaveDivider({ flip = false, color = "var(--primary-700)", className = "" }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        lineHeight: 0,
        overflow: "hidden",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "clamp(40px, 5vw, 80px)" }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
