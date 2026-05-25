"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about#about-us" },
      { name: "Vision & Mission", href: "/about#vision-mission" },
      { name: "Values, Goals & Purpose", href: "/about#values-goals" },
      { name: "Infrastructure", href: "/about#infrastructure" },
    ],
  },
  {
    name: "Crop Seeds",
    href: "/products",
  },
  {
    name: "Vegetable Seeds",
    href: "/products",
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isExpanded = scrolled || hovered || isMobile;

  const navbarVariants = {
    top: {
      top: 24,
      width: "240px",
      maxWidth: "240px",
      borderRadius: 50,
      background: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
      border: "1px solid rgba(255,255,255,0.2)",
      x: "-50%",
      backdropFilter: "blur(20px)",
    },
    expanded: {
      top: 24,
      width: "90%",
      maxWidth: "1200px",
      borderRadius: 32,
      background: "rgba(255, 255, 255, 0.96)",
      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
      border: "1px solid rgba(0, 0, 0, 0.06)",
      x: "-50%",
      backdropFilter: "blur(20px)",
    }
  };

  return (
    <>
      <motion.nav
        className={styles.navbar}
        variants={navbarVariants}
        initial="top"
        animate={isExpanded ? "expanded" : "top"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        layout
      >
        <motion.div className={styles.navInner} layout>
          <motion.div 
            layout
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isExpanded ? 'flex-start' : 'center',
              flex: isExpanded ? 'none' : 1,
            }}
          >
            <Link href="/" className={styles.logo}>
              <motion.img 
                src="/web-logo.png" 
                alt="Agronica Seeds Logo" 
                style={{ height: '42px', objectFit: 'contain', display: 'block', width: 'auto' }} 
                layout
              />
            </Link>
          </motion.div>

          {isExpanded && (
            <motion.div 
              className={styles.navLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              layout
            >
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
                        size={13}
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
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
            </motion.div>
          )}

          {isExpanded && (
            <motion.div 
              className={styles.navActions}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              layout
            >
              <Link href="/contact" className={styles.ctaBtn}>
                Get in Touch
              </Link>
            </motion.div>
          )}

          {isExpanded && (
            <motion.button
              className={styles.menuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.25 }}
              layout
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          )}
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.mobileMenuInner}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileMenuContent}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
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
                transition={{ delay: 0.45 }}
              >
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: "100%" }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
