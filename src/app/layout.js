import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Agronica Seeds Spark Pvt. Ltd. — Empowering the Future of Agriculture",
  description:
    "Agronica Seeds Spark Private Ltd. is dedicated to revolutionizing agriculture in India with high-quality, disease-resistant, and climate-resilient seed varieties. A venture of MRC Agrotech Ltd.",
  keywords: [
    "Agronica Seeds",
    "seed company India",
    "maize seeds",
    "wheat seeds",
    "paddy seeds",
    "mustard seeds",
    "cotton seeds",
    "agricultural innovation",
    "sustainable farming",
    "MRC Agrotech",
  ],
  openGraph: {
    title: "Agronica Seeds Spark Pvt. Ltd.",
    description:
      "Empowering growers with innovative, sustainable seed solutions for a food-secure world.",
    url: "https://agronicaseeds.com",
    siteName: "Agronica Seeds",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
