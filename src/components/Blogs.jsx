"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar, Clock, X, ArrowRight, BookOpen, Sparkles, ChevronRight, Award, ShieldCheck, Leaf, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Blogs.module.css";

const CATEGORIES = ["All", "Cultivation Guide", "Quality Assurance", "Climate Smart Agri", "Product Spotlight"];

const BLOG_POSTS = [
  {
    id: "wheat-harvest",
    title: "Maximizing Wheat Yields: Soil Prep, Climate Resilience & Variety Selection",
    category: "Cultivation Guide",
    date: "May 25, 2026",
    readTime: "8 min read",
    author: "Dr. Anand K. Kurien (Chief Agronomist)",
    excerpt: "Unlock the secrets to bountiful wheat harvests. Learn advanced soil conditioning techniques, climate-resilient farming practices, and how choosing the right wheat varieties can significantly boost your yield.",
    image: "/images/pdf_image_page3_0.jpeg",
    cardBadge: "Popular",
    icon: "wheat",
    content: {
      introduction: "Wheat cultivation is a critical pillar of global food security. However, unpredictable weather patterns and rising temperatures are challenging traditional farming methods. To ensure a profitable and high-yielding harvest, farmers must adopt modern agronomic practices and utilize advanced, climate-resilient wheat varieties. This guide details the essential steps for optimizing your soil, managing environmental stress, and selecting the best seeds for your region.",
      sections: [
        {
          title: "1. Optimal Soil Preparation & Nutrient Management",
          paragraphs: [
            "A successful wheat crop starts with impeccable soil preparation. Wheat thrives in well-drained loamy to clay-loam soils with a pH between 6.0 and 7.5. Proper seedbed preparation is vital for uniform germination and strong root establishment.",
            "Begin by deep plowing followed by harrowing to achieve a fine tilth. Incorporating organic matter, such as well-decomposed FYM, improves soil structure and moisture retention. A balanced application of basal fertilizers (NPK) is essential. Nitrogen promotes vigorous vegetative growth, while phosphorus is critical for early root development and uniform tillering. Applying a top dressing of nitrogen at the crown root initiation (CRI) stage further maximizes grain-filling potential."
          ]
        },
        {
          title: "2. Climate Resilience & Irrigation Strategies",
          paragraphs: [
            "Wheat is highly sensitive to moisture stress, especially during critical growth phases. Efficient water management is paramount to achieving maximum yield and grain quality.",
            "• Strategic Irrigation: The Crown Root Initiation (CRI) stage (20-25 days after sowing) is the most critical period for irrigation. Ensuring adequate moisture during this stage, as well as during flowering and dough stages, significantly impacts the final harvest.",
            "• Heat Stress Management: Terminal heat stress during the grain-filling period can prematurely ripen the crop, resulting in shriveled grains. Late-sown wheat is particularly vulnerable. Applying a light irrigation or foliar spray of potassium nitrate can help mitigate heat stress and prolong the grain-filling duration."
          ]
        },
        {
          title: "3. Selecting High-Performance Wheat Varieties",
          paragraphs: [
            "The foundation of a record-breaking harvest is the genetic potential of your seed. Choosing the right variety depends on your sowing window, soil type, and regional climate conditions.",
            "Agronica offers elite wheat varieties tailored for diverse environments. High-yielding varieties like HD-2967 and DBW-187 are renowned for their robust disease resistance—particularly against yellow rust—and excellent lodging tolerance. These varieties exhibit superior grain weight and adaptability, ensuring consistent performance whether sown early, timely, or late. By selecting scientifically bred seeds, farmers can secure a heavier, healthier harvest that commands premium market value."
          ]
        }
      ],
      conclusion: "By combining meticulous soil preparation with strategic irrigation and selecting superior, climate-resilient varieties like HD-2967, farmers can consistently achieve exceptional wheat yields. The key to a highly profitable season lies in proactive field management and trusting proven, quality-assured seed technology."
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
    image: "/WhatsApp%20Image%202026-06-03%20at%2010.12.43.jpeg",
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
    image: "/images/miss.jpg",
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
  },
  {
    id: "kala-namak-kiran-paddy",
    title: "Kala Namak Kiran: Cultivating India’s Prized Aromatic Paddy with Hi-Yield Certified Seeds",
    category: "Product Spotlight",
    date: "June 24, 2026",
    readTime: "7 min read",
    author: "Dr. Anand K. Kurien (Chief Agronomist)",
    excerpt: "Discover Kala Namak Kiran — Agronica’s premium hi-yield certified paddy seed that marries the legendary aroma of Kala Namak rice with modern agronomic performance. Learn cultivation tips, soil requirements, and why this variety is transforming paddy farming across the Terai belt.",
    image: "/images/kala-namak-kiran-paddy-seed.jpeg",
    cardBadge: "New",
    icon: "paddy",
    content: {
      introduction: "Kala Namak rice — known as the ‘Black Salt’ rice of the Buddha — has been cultivated in the Terai and Bhabhar regions of Uttar Pradesh and Nepal for over 3,000 years. Prized by connoisseurs for its unique violet-black husk, exquisite floral aroma, and soft texture, it commands a significant premium in domestic and export markets alike. However, traditional Kala Namak landraces are tall, lodging-prone, and low-yielding — a major constraint for commercial farming. Agronica’s Kala Namak Kiran bridges this gap: a hi-yield certified paddy seed (developed under license from MRC Agrotech Ltd.) that delivers the legendary aroma and grain quality of heritage Kala Namak with the agronomic performance modern farmers need.",
      sections: [
        {
          title: "1. What Makes Kala Namak Kiran Different",
          paragraphs: [
            "Kala Namak Kiran is not a generic high-yield hybrid — it is a purpose-bred improved variety that retains the full genetic identity of authentic Kala Namak rice. The signature ‘screw-pine’ (Pandanus) aroma comes from elevated 2-acetyl-1-pyrroline (2-AP) content in the grain, and Kiran preserves this trait completely while correcting the weaknesses of traditional landraces.",
            "• Premium Quality: Grains exhibit the characteristic dark husk, slender profile, and aromatic potency that fetch a premium of ₹8–15 per kg above standard paddy in regulated markets and GI-certified supply chains.",
            "• Excellent Germination: Certified under ISO-accredited protocols, each batch carries a guaranteed germination rate of 90%+, ensuring uniform field establishment and predictable plant populations.",
            "• Uniform Crop Growth: Improved plant architecture delivers consistent internode length and heading date, making harvesting with mechanical reapers practical — a first for this traditionally hand-harvested variety.",
            "• Strong Tillering Ability: Kiran produces 12–16 effective tillers per hill under optimum management, significantly higher than the 6–9 tillers typical of old landraces, directly translating into more panicles per square meter.",
            "• Superior Grain Aroma & Quality: Head-rice recovery exceeds 62% and milling outturn is consistent — qualities that matter greatly to premium rice millers and exporters targeting the GI Kala Namak niche."
          ]
        },
        {
          title: "2. Ideal Agro-Climatic Conditions & Soil Requirements",
          paragraphs: [
            "Kala Namak Kiran thrives in the Indo-Gangetic Terai belt — the districts of Siddharth Nagar, Maharajganj, Gorakhpur, Balrampur, and Basti in eastern UP — where the unique combination of alluvial soil, morning mist, and moderate humidity during grain filling naturally amplifies the 2-AP aroma compound.",
            "Soil: Well-drained clay-loam to silty-loam soils with a pH of 5.5–6.5 are ideal. Waterlogged heavy clays without drainage management can reduce tillering and increase the risk of sheath blight. Incorporate well-composted FYM (5–6 t/ha) at the time of puddling to improve organic matter and moisture retention.",
            "Water: Kala Namak Kiran requires a minimum of 1,200 mm of water over the crop cycle. Maintain 5 cm of standing water during active tillering and panicle initiation. Allow fields to dry before harvesting to facilitate mechanical cutting."
          ]
        },
        {
          title: "3. Nursery, Transplanting & Crop Calendar",
          paragraphs: [
            "Getting the nursery timing right is critical to capturing the correct photoperiod response for Kala Namak Kiran, which is a short-day, photoperiod-sensitive variety that initiates flowering when day length falls below 13 hours in October.",
            "• Nursery Sowing: Mid-June to early July. Use raised wet nursery beds. Seed rate: 30 kg/ha. Treat seed with Trichoderma viride (4 g/kg seed) before sowing to protect against seed-borne pathogens.",
            "• Transplanting: 25–30 day old seedlings (late July to early August). Transplant 2 seedlings per hill at a spacing of 20 × 15 cm to allow optimal light interception and air circulation.",
            "• Panicle Initiation: Late September (coincides with shortening days post-equinox).",
            "• Flowering: Mid-October — the critical window where morning temperatures of 22–26°C maximize pollen viability and fertilization.",
            "• Harvest: November (120–130 days after transplanting). Harvest when 80–85% of grains are mature and the husk has turned its characteristic dark straw-to-violet colour."
          ]
        },
        {
          title: "4. Nutrition Management for Maximum Yield & Aroma",
          paragraphs: [
            "Balanced nutrition is essential to simultaneously maximise yield and preserve the premium grain aroma that commands market value. Over-application of nitrogen is the single biggest mistake — it pushes vegetative growth, increases lodging risk, and dilutes 2-AP concentration in the grain.",
            "Recommended NPK: 90:40:30 kg/ha. Split nitrogen into three doses — 30 kg at basal (before transplanting), 30 kg at active tillering (21 DAT), and the final 30 kg at panicle initiation (45 DAT). Apply zinc sulphate (25 kg/ha) as a basal dose on zinc-deficient soils — a common deficiency in the Terai belt that suppresses tillering.",
            "Organic supplementation with well-composted neem cake (250 kg/ha) at transplanting suppresses soil-borne nematodes and provides a slow-release nitrogen source that supports steady vegetative growth without lodging."
          ]
        },
        {
          title: "5. Integrated Pest & Disease Management",
          paragraphs: [
            "Kala Namak Kiran carries moderate field tolerance to blast (Pyricularia oryzae) and brown spot, but proactive IPM is essential — particularly in high-humidity, high-density crop conditions of the Terai.",
            "• Sheath Blight: The primary disease threat. Maintain field hygiene, avoid excess nitrogen, and apply Validamycin or Hexaconazole at the onset of symptoms at tillering.",
            "• Stem Borer & Leaf Folder: Scout fields weekly from tillering onwards. Release Trichogramma japonicum egg parasitoids (1.5 lakh/ha) at 30 and 45 DAT as a biological first line of defence.",
            "• Brown Plant Hopper (BPH): Avoid prophylactic insecticide sprays that disrupt natural BPH predators. If populations exceed 5 hoppers per hill, apply Buprofezin or Dinotefuran as a targeted basal spray.",
            "• Seed Treatment: Kiran seeds from Agronica are supplied pre-coated with a bio-fungicide protective layer, significantly reducing early-stage blast and damping-off risk in the nursery."
          ]
        }
      ],
      conclusion: "Kala Namak Kiran represents the finest synthesis of heritage and science: the irreplaceable aroma and cultural legacy of India’s ancient ‘Buddha rice’ combined with the certified performance that today’s commercial farmer demands. With strong tillering, excellent germination, and superior grain quality, Kiran gives Terai-belt farmers a competitive product for premium paddy markets, GI-tagged supply chains, and export. Agronica’s hi-yield certified seeds ensure that every hill you plant is backed by laboratory-verified quality — giving you the confidence to grow more, earn more, and preserve an irreplaceable agricultural tradition."
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
              {category === "Product Spotlight" && <Star size={14} className={styles.btnIcon} />}
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


                  <div className={styles.cardFooter}>
                    <div className={styles.metaItem}>
                      <Calendar size={12} />
                      <span>{blog.date}</span>
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
