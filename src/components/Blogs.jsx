"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar, Clock, User, X, ArrowRight, BookOpen, Sparkles, ChevronRight, Award, ShieldCheck, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Blogs.module.css";

const CATEGORIES = ["All", "Cultivation Guide", "Quality Assurance", "Climate Smart Agri"];

const BLOG_POSTS = [
  {
    id: "tomato-harvest",
    title: "Maximizing Tomato Harvests: Soil Prep, Disease Management & Hybrid Selection",
    category: "Cultivation Guide",
    date: "May 25, 2026",
    readTime: "8 min read",
    author: "Dr. Anand K. Kurien (Chief Horticulturalist)",
    excerpt: "Unlock the secrets to bountiful greenhouse and hydroponic tomato yields. Learn advanced soil conditioning techniques, biological disease controls, and how choosing the right hybrid seeds can double your harvest.",
    image: "/images/generated/blog_tomato_harvest.png",
    cardBadge: "Popular",
    icon: "tomato",
    content: {
      introduction: "Tomato cultivation in India is undergoing a massive transformation. Historically, farmers struggled with open-pollinated varieties that produced low yields and succumbed easily to unpredictable disease outbreaks. Today, using advanced greenhouse systems, automated hydroponic setups, and high-performance hybrid seeds, professional growers are achieving double and triple their historic outputs. This comprehensive guide covers the critical steps needed to prepare your soil, implement an airtight disease defense, and choose the ultimate hybrid seeds to maximize your fruit-to-vine ratios.",
      sections: [
        {
          title: "1. Advanced Soil Conditioning & Substrate Preparation",
          paragraphs: [
            "A record-breaking tomato harvest begins underground. Tomatoes require a deeply aerated, loose, and biologically active medium. If planting in open fields or high-tunnel structures, ensure a well-drained sandy loam with a pH of 6.0 to 6.8. Soils outside this range restrict nutrient availability, particularly calcium, leading to the dreaded Blossom End Rot (BER).",
            "Begin by deep plowing your soil (at least 30 cm) to break up hardpans. Incorporate high-grade organic compost or well-decomposed Farm Yard Manure (FYM) at 20-25 tonnes per hectare. Mix in cocopeat, vermicompost, and bio-fertilizers like Azotobacter and vesicular-arbuscular mycorrhiza (VAM). VAM fungi form a symbiotic relationship with tomato roots, extending their reach to mine deep water and phosphorus reserves.",
            "For advanced hydroponic greenhouse systems, coco-coir bags or rockwool slabs are the gold standard. Keep your seedling coco-coir moist and maintain the Electrical Conductivity (EC) of the nutrient drain between 2.2 dS/m during early vegetative stages, gradually scaling up to 3.0-3.5 dS/m as the fruit begins to ripen. A higher EC at fruiting drives sugars directly into the tomatoes, boosting brix levels (sweetness) and producing a premium crop that commands top market pricing."
          ]
        },
        {
          title: "2. Integrated Disease Management (IDM) Protocols",
          paragraphs: [
            "Tomato crops are highly sensitive to pathogens, which can destroy up to 80% of a crop in a matter of days under high humidity. The three major threats are Early Blight (Alternaria solani), Late Blight (Phytophthora infestans), and Tomato Leaf Curl Virus (ToLCV). Rather than relying solely on chemical sprays, employ an Integrated Disease Management protocol:",
            "• Crop Rotation: Never plant tomatoes in a field that hosted Solanaceous crops (potatoes, eggplants, bell peppers) in the past 3 seasons. This breaks the lifecycle of soil-borne fungi and nematodes.",
            "• Drip Irrigation & Canopy Airflow: Avoid overhead sprinklers. Wet leaves act as incubators for fungal spores. Drip irrigation delivers water directly to the roots, keeping the canopy dry. In greenhouses, prune lower leaves (up to the first cluster of fruit) to maximize airflow and sunlight penetration.",
            "• Biological Soil Inoculation: Drench your nursery beds and transplant roots in a solution of Trichoderma viride and Pseudomonas fluorescens. These beneficial microbes colonize root surfaces, creating a physical and biological shield against soil-borne wilt pathogens like Fusarium and Ralstonia."
          ]
        },
        {
          title: "3. Selection Criteria for High-Performance Hybrids",
          paragraphs: [
            "Even the best soil and disease defense will fall short if your seeds lack genetic potential. When selecting a tomato hybrid, look for three vital genetic traits: disease resistance, heat tolerance, and transportability.",
            "Agronica's hybrid seeds are bred specifically to thrive in challenging environments. The hybrid variety Agronica Red-Ruby offers native genetic resistance to ToLCV and Fusarium Wilt Race 1 & 2. Crucially, its thick pericarp (inner fruit wall) ensures the tomatoes remain firm and resist bruising during long-distance transportation. This thick-walled trait reduces post-harvest losses from the usual 30% down to under 5%, allowing you to ship to high-value urban markets without worrying about transit spoilage."
          ]
        }
      ],
      conclusion: "By marrying robust soil biology with strict disease prevention protocols and elite genetic hybrids, professional growers can unlock yields upwards of 80 to 100 tonnes per hectare. The path to a profitable tomato season lies in planning your inputs, safeguarding root health, and trusting quality-assured seed technology."
    }
  },
  {
    id: "seed-lab-testing",
    title: "How ISO Accredited Seed Testing Labs Ensure 95%+ Germination Rates",
    category: "Quality Assurance",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Dr. Sunidhi Sharma (Lead QC Scientist)",
    excerpt: "Discover the rigorous science behind seed viability. We take you inside Agronica’s ISO-accredited testing facilities, detailing the cold-germination tests, purity assessments, and DNA fingerprinting that guarantee seed excellence.",
    image: "/images/generated/blog_seed_lab_testing.png",
    cardBadge: "Science",
    icon: "lab",
    content: {
      introduction: "At Agronica Seeds, high agricultural productivity is treated as a rigorous, measurable science. For a farmer, the seed represents the foundation of their entire investment—land, labor, fertilizer, and water depend on the seed waking up. If seeds germinate erratically or exhibit weak vigor, the field's yield potential is compromised from day one. To eliminate this risk, Agronica's seeds undergo multi-stage quality checks inside our state-of-the-art, ISO/IEC 17025 accredited testing laboratories. Here, we outline the strict scientific methodologies we use to ensure that every seed packet you purchase meets or exceeds a 95% germination rate.",
      sections: [
        {
          title: "1. Advanced Physical and Genetic Purity Analysis",
          paragraphs: [
            "Before germination testing even begins, raw seed lots undergo exhaustive purity screening. We utilize mechanical air-separators, gravity tables, and high-frequency optical sorters. These automated systems filter out weed seeds, chaff, pebbles, and cracked or underweight seeds.",
            "Once physically pure, the seeds are analyzed for genetic integrity. We run high-precision DNA fingerprinting and seed electrophoresis in our molecular lab. This ensures that the seed lot is free from self-pollinated off-types and contains exactly the hybrid genetic profile designed by our plant breeders. This genetic consistency ensures that every plant in the farmer's field will grow at the same speed, mature at the same time, and produce uniform premium fruits."
          ]
        },
        {
          title: "2. The Cold Stress and Vigor Testing Protocols",
          paragraphs: [
            "Standard germination tests are conducted in climate-controlled chambers with perfect temperature and moisture. However, real fields are rarely perfect. To ensure our seeds perform in real-world soils, we subject them to rigorous Stress and Vigor Testing.",
            "One key protocol is the Cold Germination Test. Here, seeds are planted in cold soil (10°C) and kept in a high-humidity dark chamber for 7 days, simulating an early-season wet, cold spell. They are then moved to a warm chamber (25°C). Only seed lots that demonstrate high 'Vigor Index' scores—showing robust root growth, thick hypocotyl development, and rapid emergence despite the cold stress—are approved for packaging. This gives farmers peace of mind that their crops will survive unexpected early-season weather changes."
          ]
        },
        {
          title: "3. Tetrazolium (TZ) Biochemical Viability Assay",
          paragraphs: [
            "Standard germination tests can take anywhere from 7 to 14 days to yield results. When rapid quality assessment is critical during harvesting and processing, our scientists deploy the Tetrazolium (TZ) test.",
            "In this biochemical assay, seeds are imbibed with water and placed in a 2,3,5-triphenyl tetrazolium chloride solution. Live, metabolizing tissues absorb this chemical, and their active dehydrogenase enzymes reduce the chemical into a red compound called formazan. This stains the living embryo a rich, bright pinkish-red. Dead tissues remain unstained white. Under high-powered microscopes, our analysts can visually inspect the exact health of the embryo and predict germination potential with 99% accuracy in under 24 hours."
          ]
        },
        {
          title: "4. Molecular Disease Screening & Bio-Protection Coatings",
          paragraphs: [
            "Seed-borne diseases can act as Trojan horses, introducing devastating pathogens directly into a clean field. We screen our seed lots using Polymerase Chain Reaction (PCR) assays to detect trace signatures of bacterial wilts, leaf spots, and mosaic viruses.",
            "Once a batch is certified pathogen-free, it is sent to our state-of-the-art coating division. Here, seeds receive a micro-thin protective coating infused with organic bio-fungicides (like Trichoderma) and micronutrients. This vibrant green coating shields the germinating seed from soil pests during its vulnerable first 10 days in the dirt, providing a major head start in development."
          ]
        }
      ],
      conclusion: "Our commitment to ISO-accredited testing standards ensures that every seed leaving Agronica is a high-octane packet of biological energy. By removing the guesswork from germination, we provide farmers with the reliable starting point they need to cultivate heavy yields and secure predictable incomes."
    }
  },
  {
    id: "climate-resilient-hybrids",
    title: "The Smart Farmer's Guide to Climate-Resilient Maize & Rice Hybrids",
    category: "Climate Smart Agri",
    date: "May 10, 2026",
    readTime: "7 min read",
    author: "Er. Rajesh V. Patil (Agricultural Extension Specialist)",
    excerpt: "Climate change is driving unpredictable weather, causing frequent droughts and floods. Learn how Agronica's climate-smart hybrid maize and rice seeds utilize deep-rooting traits and stress-tolerant genes to secure stable yields.",
    image: "/images/generated/blog_climate_hybrid.png",
    cardBadge: "Innovation",
    icon: "climate",
    content: {
      introduction: "The monsoon season in India has become highly erratic. Farmers are now experiencing two-week dry spells during key vegetative stages, followed by sudden, heavy cloudbursts that submerge fields for days. Standard open-pollinated seeds and older hybrid varieties simply cannot cope with these extreme moisture swings. To protect agricultural livelihoods and national food security, Agronica’s R&D department has engineered a portfolio of climate-smart hybrid maize and rice varieties. These hybrids are designed to thrive in stressful conditions, offering a reliable insurance policy against the unpredictable forces of nature.",
      sections: [
        {
          title: "1. Engineering Root Architecture in Hybrid Maize",
          paragraphs: [
            "When drought hits, a maize plant’s ability to survive depends entirely on its roots. Traditional maize varieties possess a shallow, horizontal root system that quickly dries out once topsoil moisture evaporates.",
            "Agronica's advanced hybrid maize series (such as AG-Gold 707) features a radically re-engineered root architecture. These hybrids are selected for a powerful vertical taproot that drills deep into the subsoil, combined with a dense network of highly branching lateral roots. When topsoils dry out, AG-Gold 707 roots tap into moisture reserves 1.5 to 2 meters deep. This keeps the plant's stomata open, allowing it to continue photosynthesis and grain filling even during a 20-day dry spell."
          ]
        },
        {
          title: "2. The Sub1 Gene: Underwater Survival for Hybrid Rice",
          paragraphs: [
            "In low-lying delta regions and river basins, sudden floods often submerge paddy fields. Standard rice varieties will drown if submerged for more than 4 to 5 days, as they exhaust all their energy reserves trying to grow upwards to reach the air.",
            "Agronica's flood-resilient hybrid rice seeds contain the revolutionary Sub1 gene. When a flood occurs, this gene acts as a biological switch, putting the rice plant into a state of 'dormant hibernation' underwater. The plant stops growing upwards, conserving its precious carbohydrate reserves. It can remain completely submerged in muddy water for up to 14 days. Once the floodwaters recede, the plant wakes up, shoots up new leaves, and resumes growth. This breakthrough technology preserves up to 90% of the yield potential, saving farmers from total crop failure."
          ]
        },
        {
          title: "3. Heat-Tolerance and Drought-Escape Mechanisms",
          paragraphs: [
            "Extreme heat during the flowering phase is another crop killer. If temperatures exceed 38°C during maize pollination, the pollen grains dry out and become sterile, resulting in poorly filled cobs with missing kernels.",
            "Agronica's hybrids are screened for pollen thermo-stability. Our climate-smart seeds maintain highly viable pollen up to 42°C, ensuring full grain setting even under intense summer heatwaves. Additionally, our varieties mature 10-15 days earlier than standard crops. This 'drought-escape' mechanism allows the crop to complete its lifecycle and harvest before the severe dry heatwaves of late summer set in."
          ]
        },
        {
          title: "4. Precision Agronomy for Climate-Smart Success",
          paragraphs: [
            "To maximize the climate-resilient genetics of Agronica seeds, growers must combine them with smart cultivation techniques. We recommend three simple changes:",
            "• Zero-Tillage: Plant directly into the previous crop's stubble to preserve organic soil matter and reduce evaporation.",
            "• Laser Land Leveling: Ensures uniform water distribution, preventing dry spots and waterlogged pockets.",
            "• Alternate Wetting and Drying (AWD): For rice cultivation, AWD reduces water consumption by 30% while encouraging deeper root penetration, making the crop physically stronger."
          ]
        }
      ],
      conclusion: "Climate change is an undeniable reality, but crop failure does not have to be. By combining Agronica’s deep-rooting, flood-tolerant hybrid seeds with modern precision farming techniques, Indian farmers can build a resilient, highly profitable agricultural business that stands firm against whatever the skies bring."
    }
  }
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Filtered blogs
  const filteredBlogs = BLOG_POSTS.filter((blog) => {
    if (selectedCategory === "All") return true;
    return blog.category === selectedCategory;
  });

  // Lock scrolling on background when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBlog]);

  return (
    <section className={styles.section} id="blogs">
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.headerLabel}>Agronica Hub</span>
          <h2 className={styles.headerTitle}>
            Knowledge from the <span className={styles.gradientText}>Field & Lab</span>
          </h2>
          <p className={styles.headerSub}>
            Discover professional guides, scientific insights, and climate-smart agronomy updates compiled by our chief horticulturists and lab researchers.
          </p>
        </div>

        {/* Category Filters */}
        <div className={styles.filtersContainer}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.activeFilter : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "All" && <Sparkles size={14} className={styles.btnIcon} />}
              {category === "Cultivation Guide" && <Leaf size={14} className={styles.btnIcon} />}
              {category === "Quality Assurance" && <ShieldCheck size={14} className={styles.btnIcon} />}
              {category === "Climate Smart Agri" && <Award size={14} className={styles.btnIcon} />}
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.article
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={styles.card}
                onClick={() => setSelectedBlog(blog)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.imageWrapper}>
                  {blog.cardBadge && <span className={styles.cardBadge}>{blog.cardBadge}</span>}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>{blog.category}</span>
                    <div className={styles.metaItem}>
                      <Clock size={12} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.excerpt}>{blog.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.authorRow}>
                      <User size={12} className={styles.authorIcon} />
                      <span className={styles.authorName}>{blog.author.split(" (")[0]}</span>
                    </div>
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className={styles.readMoreBtn}
                      aria-label={`Read full article: ${blog.title}`}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} className={styles.arrowIcon} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Reading Overlay Modal (Rendered via React Portal at body root to bypass CSS perspective constraints) */}
      {hasMounted && createPortal(
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
            >
              <motion.div
                className={styles.modalContainer}
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Sticky Header Bar */}
                <div className={styles.modalHeaderBar}>
                  <div className={styles.modalHeaderLeft}>
                    <span className={styles.modalCategory}>{selectedBlog.category}</span>
                    <div className={styles.modalMetaDivider}></div>
                    <div className={styles.modalHeaderMeta}>
                      <Clock size={13} />
                      <span>{selectedBlog.readTime}</span>
                    </div>
                  </div>
                  <button
                    className={styles.closeBtn}
                    onClick={() => setSelectedBlog(null)}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Scrollable Content Area */}
                <div className={styles.modalScrollableContent}>
                  {/* Hero Image */}
                  <div className={styles.modalHeroWrapper}>
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className={styles.modalHeroImage}
                    />
                    <div className={styles.modalHeroOverlay}></div>
                  </div>

                  {/* Article Header info */}
                  <div className={styles.modalArticleHeader}>
                    <div className={styles.authorBadge}>
                      <div className={styles.avatarCircle}>
                        {selectedBlog.author
                          .split(" ")
                          .filter(n => n.includes(".") || n.length > 2)
                          .slice(0, 2)
                          .map(n => n.replace(".", "")[0])
                          .join("")
                          .toUpperCase() || "AG"}
                      </div>
                      <div className={styles.authorDetails}>
                        <span className={styles.authorLabel}>WRITTEN BY</span>
                        <span className={styles.authorNameText}>{selectedBlog.author}</span>
                      </div>
                    </div>

                    <div className={styles.modalDateRow}>
                      <Calendar size={14} />
                      <span>Published on {selectedBlog.date}</span>
                    </div>
                  </div>

                  {/* Main Article Title */}
                  <h2 className={styles.modalArticleTitle}>{selectedBlog.title}</h2>

                  {/* Rich Content Area */}
                  <div className={styles.articleBody}>
                    <p className={styles.leadParagraph}>{selectedBlog.content.introduction}</p>

                    {selectedBlog.content.sections.map((section, idx) => (
                      <div key={idx} className={styles.articleSection}>
                        <h3 className={styles.sectionHeading}>{section.title}</h3>
                        {section.paragraphs.map((p, pIdx) => {
                          // Check if paragraph starts with a bullet point
                          if (p.trim().startsWith("•")) {
                            const parts = p.split(":");
                            if (parts.length > 1) {
                              return (
                                <div key={pIdx} className={styles.bulletItem}>
                                  <span className={styles.bulletDot}></span>
                                  <p className={styles.bulletText}>
                                    <strong>{parts[0].replace("•", "").trim()}:</strong>
                                    {parts.slice(1).join(":")}
                                  </p>
                                </div>
                              );
                            }
                            return (
                              <div key={pIdx} className={styles.bulletItem}>
                                <span className={styles.bulletDot}></span>
                                <p className={styles.bulletText}>{p.replace("•", "").trim()}</p>
                              </div>
                            );
                          }
                          return <p key={pIdx} className={styles.bodyParagraph}>{p}</p>;
                        })}
                      </div>
                    ))}

                    <div className={styles.divider}></div>

                    {/* Conclusion */}
                    <div className={styles.conclusionBox}>
                      <h4 className={styles.conclusionHeading}>Summary & Takeaway</h4>
                      <p className={styles.conclusionText}>{selectedBlog.content.conclusion}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Sticky Footer Bar */}
                <div className={styles.modalFooterBar}>
                  <span className={styles.footerBrand}>Agronica Seeds Scientific Hub</span>
                  <button
                    className={styles.footerCloseBtn}
                    onClick={() => setSelectedBlog(null)}
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
