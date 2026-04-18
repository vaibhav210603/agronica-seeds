"use client";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Vision & Mission", href: "/about#vision" },
  { name: "Contact Us", href: "/contact" },
];

const products = [
  { name: "Maize", href: "/products#maize" },
  { name: "Wheat (DBW187)", href: "/products#wheat" },
  { name: "Wheat (HD2967)", href: "/products#wheat" },
  { name: "Paddy", href: "/products#paddy" },
  { name: "Mustard", href: "/products#mustard" },
  { name: "Cotton", href: "/products#cotton" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={`container ${styles.footerInner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <img 
              src="/web-logo-ft.png" 
              alt="Agronica Seeds Footer Logo" 
              width="220"
              style={{ height: '56px', objectFit: 'contain', filter: 'brightness(0) invert(1)', display: 'block' }} 
            />
          </div>
          <p className={styles.brandDesc}>
            A fresh and innovative force in the seeds industry. We&apos;re
            empowering growers and contributing to a sustainable food future
            through high-quality, innovative seeds.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Website" className={styles.socialIcon}>
              <Globe size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.link}>
                  {link.name}
                  <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Products</h4>
          <ul className={styles.linkList}>
            {products.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.link}>
                  {link.name}
                  <ArrowUpRight size={12} className={styles.linkArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <MapPin size={14} className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Corporate Office</p>
                <p className={styles.contactText}>
                  Block 404, 4th Floor, Sagar Tech Plaza, B Wing, Andheri East,
                  Mumbai, Maharashtra - 400072
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={14} className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Registered Office</p>
                <p className={styles.contactText}>
                  Gram & Post - Mahuwadabar, Babhnan, Basti, Uttar Pradesh,
                  272161
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Phone size={14} className={styles.contactIcon} />
              <p className={styles.contactText}>022 - 40156765</p>
            </div>
            <div className={styles.contactItem}>
              <Mail size={14} className={styles.contactIcon} />
              <a
                href="mailto:Info@agronicaseeds.com"
                className={styles.contactText}
              >
                Info@agronicaseeds.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Agronica Seeds Spark Private Ltd. All
            rights reserved.
          </p>
          <p className={styles.ventureOf}>
            A venture of <strong>MRC Agrotech Ltd.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
