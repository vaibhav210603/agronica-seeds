import Image from "next/image";
import styles from "./FitImage.module.css";

/* Shows the whole image (no cropping) over a blurred copy of itself
   that fills any leftover space, so mixed aspect ratios look intentional. */
export default function FitImage({ src, alt, sizes, className = "", priority = false }) {
  return (
    <div className={styles.wrap}>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="64px"
        quality={30}
        className={styles.backdrop}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${styles.image} ${className}`}
      />
    </div>
  );
}
