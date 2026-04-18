"use client";
import { motion } from "framer-motion";

export default function TextShimmer({ text, className }) {
  // Split the text while preserving words so it wraps correctly
  const words = text.split(" ");

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {Array.from(word).map((char, charIndex) => {
            // Calculate an overall index for the delay
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              charIndex;
              
            return (
              <motion.span
                key={charIndex}
                initial={{ color: "rgba(255, 255, 255, 1)", textShadow: "0px 0px 0px transparent" }}
                animate={{
                  color: [
                    "rgba(255, 255, 255, 1)",
                    "#D4B058", // Warm brass/gold
                    "rgba(255, 255, 255, 1)",
                  ],
                  textShadow: [
                    "0px 0px 0px transparent",
                    "0px 0px 20px rgba(212, 176, 88, 0.4)", // Soft golden glow
                    "0px 0px 0px transparent",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.06, // Smooth wave delay
                  ease: "easeInOut",
                  repeatDelay: 1, // Pause between waves
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
          {/* Add a space after each word except the last */}
          {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
