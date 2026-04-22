"use client";
import { MapPin, Leaf } from "lucide-react";
import styles from "./FarmerTestimonials.module.css";

const testimonials = [
  {
    quote: "Agronica ki maize variety ne meri paidawaar kya badha di — pehle se 30% zyada nikli. Ab toh main apne saare khet mein yehi lagata hoon.",
    name: "Ramesh Yadav",
    location: "Basti, Uttar Pradesh",
    crop: "Maize",
    initials: "RY",
  },
  {
    quote: "DBW187 wheat has been outstanding in our fields. Even with late sowing, the yield remained impressive. The grain quality fetches better market prices too.",
    name: "Gurpreet Singh",
    location: "Karnal, Haryana",
    crop: "Wheat (DBW187)",
    initials: "GS",
  },
  {
    quote: "Paddy ki fasal mein blast ki dikkat bahut thi, Agronica ke beej lagane ke baad se koi bimari nahi aayi. Pani bhi kam lagta hai in beejo mein.",
    name: "Sunita Devi",
    location: "Deoria, Uttar Pradesh",
    crop: "Paddy",
    initials: "SD",
  },
  {
    quote: "Cotton cultivation had become risky with pests. After switching to Agronica BGII, my pesticide costs dropped dramatically and bolls are healthier than ever.",
    name: "Bhimrao Patil",
    location: "Amravati, Maharashtra",
    crop: "Cotton (BGII)",
    initials: "BP",
  },
  {
    quote: "Sarson ki kheti mein Agronica ke beej se zyada tel niklata hai. Mandi mein bhi achha daam mil jaata hai. Poore gaon mein ab yehi beej lagta hai.",
    name: "Mahendra Sharma",
    location: "Alwar, Rajasthan",
    crop: "Mustard",
    initials: "MS",
  },
  {
    quote: "What impressed me most was Agronica's advisory support. They didn't just sell seeds — they guided us on spacing, irrigation timing, and pest management throughout the season.",
    name: "Ajay Kumar",
    location: "Gorakhpur, Uttar Pradesh",
    crop: "Maize",
    initials: "AK",
  },
  {
    quote: "HD2967 wheat variety has given us consistently high yields for two seasons now. The grain is bold and lustrous — traders specifically ask for it.",
    name: "Balwinder Kaur",
    location: "Ludhiana, Punjab",
    crop: "Wheat (HD2967)",
    initials: "BK",
  },
  {
    quote: "Agronica ki team wahan aakar dikhati hai — kaise beej bona hai, kitna paani dena hai. Yeh service aur koi company nahi deti.",
    name: "Raju Vishwakarma",
    location: "Azamgarh, Uttar Pradesh",
    crop: "Paddy",
    initials: "RV",
  },
];

export default function FarmerTestimonials() {
  // Duplicate for seamless loop
  const cards = [...testimonials, ...testimonials];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Farmer Voices</span>
        <h2 className={styles.headerTitle}>Straight From the Field</h2>
        <p className={styles.headerSub}>
          Real stories from the farmers who grow with Agronica seeds every season.
        </p>
      </div>

      <div className={styles.marqueeTrack}>
        {cards.map((t, i) => (
          <div key={`${t.name}-${i}`} className={styles.card}>
            <p className={styles.quoteText}>{t.quote}</p>
            <div className={styles.farmerInfo}>
              <div className={styles.farmerAvatar}>{t.initials}</div>
              <div>
                <div className={styles.farmerName}>{t.name}</div>
                <div className={styles.farmerLocation}>
                  <MapPin size={10} />
                  {t.location}
                </div>
                <div className={styles.cropBadge}>
                  <Leaf size={9} />
                  {t.crop}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
