"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Leaf,
  Sprout,
  Wheat,
  Phone,
} from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/about" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Values & Purpose", href: "/about#values" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "All Products", href: "/products" },
      { name: "Maize", href: "/products#maize" },
      { name: "Wheat", href: "/products#wheat" },
      { name: "Paddy", href: "/products#paddy" },
      { name: "Mustard", href: "/products#mustard" },
      { name: "Cotton", href: "/products#cotton" },
    ],
  },
  { name: "Infrastructure", href: "/about#infrastructure" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <img 
              src="/web-logo.png" 
              alt="Agronica Seeds Logo" 
              width="200"
              style={{ height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)', display: 'block' }} 
            />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={styles.navItem}
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`${styles.chevron} ${
                        activeDropdown === link.name ? styles.chevronActive : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={styles.dropdownLink}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className={styles.navActions}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={16} />
              Get In Touch
            </Link>
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenuInner}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className={styles.mobileMenuContent}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className={styles.mobileSubLinks}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileSubLink}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className={styles.mobileCta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: "100%" }}
                >
                  <Phone size={16} />
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
