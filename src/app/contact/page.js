"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Clock,
  Send,
  CheckCircle,
  User,
  AtSign,
  MessageSquare,
  Wheat,
} from "lucide-react";
import styles from "./contact.module.css";

function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    crop: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      const cropMap = {
        "maize": "maize",
        "wheat (dbw187)": "wheat",
        "wheat (hd2967)": "wheat",
        "paddy": "paddy",
        "mustard": "mustard",
        "cotton": "cotton",
        "vegetable seeds": "vegetable",
      };
      const cropValue = cropMap[productParam.toLowerCase()] || "other";
      setFormData((prev) => ({
        ...prev,
        crop: cropValue,
        message: `I am interested in ${productParam} seeds. Please send me a quotation.`,
      }));
    }
  }, [productParam]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "#34D399" }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get In <span className={styles.highlight}>Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.heroSub}
          >
            Have questions about our seed varieties? We&apos;re here to help you
            find the perfect solution for your farming needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <AnimatedSection direction="left">
              <div className={styles.formCard}>
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <div className={styles.inputIcon}>
                        <AtSign size={18} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.inputIcon}>
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <Wheat size={18} />
                    </div>
                    <select
                      name="crop"
                      value={formData.crop}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="">Select Crop Interest</option>
                      <option value="maize">Maize</option>
                      <option value="wheat">Wheat</option>
                      <option value="paddy">Paddy</option>
                      <option value="mustard">Mustard</option>
                      <option value="cotton">Cotton</option>
                      <option value="vegetable">Vegetable Seeds</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={`${styles.inputIcon} ${styles.inputIconTop}`}>
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${styles.input} ${styles.textarea}`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} /> Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4>Corporate Office</h4>
                    <p>
                      Block 404, 4th Floor, Sagar Tech Plaza, B Wing, Off
                      Andheri Kurla Road, Sakinaka, Andheri East, Mumbai,
                      Maharashtra - 400072
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Registered Office</h4>
                    <p>
                      Agronica Seeds Spark Private Ltd., Gram & Post -
                      Mahuwadabar, Babhnan, Basti, Uttar Pradesh, India - 272161
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>022 - 40156765</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:Info@agronicaseeds.com">
                      Info@agronicaseeds.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.006!2d72.8862!3d19.0945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84f5b9debc3%3A0x6f0bce7e8fbc8a0d!2sSagar%20Tech%20Plaza!5e0!3m2!1sen!2sin!4v1698745612345!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Agronica Seeds Corporate Office Location"
        />
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
