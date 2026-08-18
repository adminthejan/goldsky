import type { Metadata } from "next";
import HeroFrameSequence from "@/components/HeroFrameSequence";

export const metadata: Metadata = {
  title: "GoldSky — Phone Parts & Repair, Eheliyagoda",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"GoldSky\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"287, Main Street\",\"addressLocality\":\"Eheliyagoda\",\"addressRegion\":\"Ratnapura\",\"addressCountry\":\"LK\"},\"telephone\":\"+9476933255\",\"openingHours\":\"Mo-Sa 09:00-19:00\",\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":6.8333,\"longitude\":80.2667}}" }} />
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "72px 24px", display: "grid", gridTemplateColumns: "minmax(0,0.82fr) minmax(0,1fr)", gap: "48px", alignItems: "start"}}>
      <div style={{position: "sticky", top: "96px"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "20px"}}>Chip-Level Repair · Genuine Parts · Wholesale</div>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.03em", margin: "0 0 24px"}}>Phone parts and board-level repair, done right.</h1>
      <p style={{fontSize: "18px", lineHeight: "1.6", color: "#5B5E66", margin: "0 0 32px", maxWidth: "480px"}}>Serving Eheliyagoda, Ratnapura and surrounding towns with micro-soldering repair and genuine phone parts — in-store and islandwide by courier.</p>
      <div style={{display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px"}}>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Order on WhatsApp</a>
      <a href="/products" style={{border: "1px solid #16171A", color: "#16171A", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Browse Products</a>
      </div>
      <div style={{display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "14px", color: "#5B5E66", borderTop: "1px solid #E4E2DD", paddingTop: "20px"}}>
      <span>10,000+ repairs</span><span>90-day warranty</span><span>Microscope &amp; hot-air rework</span>
      </div>
      </div>
      <HeroFrameSequence />
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "32px", background: "#fff"}}>
      <div style={{width: "40px", height: "40px", border: "1.5px solid #16171A", borderRadius: "999px", marginBottom: "20px"}}></div>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 8px"}}>Chip-Level Board Repair</h3>
      <p style={{fontSize: "15px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Micro-soldering and component-level diagnostics for logic board faults other shops turn away.</p>
      </div>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "32px", background: "#fff"}}>
      <div style={{width: "40px", height: "40px", border: "1.5px solid #16171A", borderRadius: "6px", marginBottom: "20px"}}></div>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 8px"}}>Screen &amp; Battery Replacement</h3>
      <p style={{fontSize: "15px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Same-day fitting with genuine and OEM-grade parts, backed by a 90-day warranty.</p>
      </div>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "32px", background: "#fff"}}>
      <div style={{width: "40px", height: "40px", border: "1.5px solid #16171A", transform: "rotate(45deg)", marginBottom: "20px"}}></div>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 8px"}}>Data Recovery</h3>
      <p style={{fontSize: "15px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Recovery from water damage, dead boards and corrupted storage before we begin any repair.</p>
      </div>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "12px"}}>Browse by Brand</div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 24px"}}>Parts for every major brand</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px"}}>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Samsung</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Apple</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Xiaomi</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Oppo</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Vivo</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Huawei</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Realme</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Infinix</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Tecno</a>
      <a href="/products" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textAlign: "center", fontWeight: "600", textDecoration: "none", color: "#16171A", background: "#fff"}}>Nokia</a>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "12px"}}>Featured Product</div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 24px"}}>In the shop right now</h2>
      <div style={{maxWidth: "420px", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "20px"}}>
      <span style={{display: "inline-block", background: "#E9F5EE", color: "#2E7D53", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "12px"}}>In Stock</span>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "12px", color: "#5B5E66", marginBottom: "16px", textAlign: "center", padding: "16px"}}>product photo — OLED display, front</div>
      <div style={{fontSize: "13px", color: "#5B5E66", marginBottom: "4px"}}>Fits Galaxy A54 / A546</div>
      <h3 style={{fontSize: "18px", fontWeight: "600", margin: "0 0 16px", lineHeight: "1.4"}}>Samsung Galaxy A54 OLED Display</h3>
      <div style={{fontSize: "16px", color: "#5B5E66", marginBottom: "2px"}}>Retail <span style={{color: "#16171A", fontWeight: "600"}}>LKR 12,500</span></div>
      <div style={{fontSize: "28px", fontWeight: "700", color: "#B8892B", fontVariantNumeric: "tabular-nums", margin: "2px 0 8px"}}>Wholesale from LKR 9,800</div>
      <span style={{display: "inline-block", background: "#F5EBD8", color: "#B8892B", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "8px"}}>WHOLESALE · 5+ units</span>
      <div style={{fontSize: "13px", color: "#5B5E66", marginBottom: "16px"}}>Bulk and dealer rates on WhatsApp</div>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20order%3A%20Samsung%20Galaxy%20A54%20OLED%20Display%20(Part%3A%20GS-DIS-SA54-OG).%20Quantity%3A%20___.%20Please%20confirm%20price%20and%20availability." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "12px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", marginBottom: "10px"}}>Enquire on WhatsApp</a>
      <a href="/products/samsung-galaxy-a54-oled-display" style={{display: "block", textAlign: "center", border: "1px solid #E4E2DD", color: "#16171A", padding: "12px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none"}}>View Details</a>
      </div>
      </section>
      
      <section style={{background: "#2C3E50", color: "#fff", padding: "80px 24px"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B8892B", marginBottom: "12px"}}>Wholesale</div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "44px", letterSpacing: "-0.02em", margin: "0 0 40px", maxWidth: "700px"}}>Wholesale rates for repair shops, technicians and resellers.</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginBottom: "40px"}}>
      <div style={{border: "1px solid rgba(255,255,255,0.18)", borderRadius: "8px", padding: "28px"}}>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 12px"}}>5–19 units</h3>
      <p style={{fontSize: "15px", color: "#C6CDD5", lineHeight: "1.6", margin: "0"}}>Standard trade discount off retail — a straightforward starting tier for independent repair shops.</p>
      </div>
      <div style={{border: "1px solid #B8892B", borderRadius: "8px", padding: "28px"}}>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 12px"}}>20–49 units</h3>
      <p style={{fontSize: "15px", color: "#C6CDD5", lineHeight: "1.6", margin: "0"}}>Deeper discount plus priority stock holds for shops placing regular monthly orders.</p>
      </div>
      <div style={{border: "1px solid rgba(255,255,255,0.18)", borderRadius: "8px", padding: "28px"}}>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 12px"}}>50+ units</h3>
      <p style={{fontSize: "15px", color: "#C6CDD5", lineHeight: "1.6", margin: "0"}}>Best available pricing, a dedicated account contact, and custom part sourcing on request.</p>
      </div>
      </div>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20the%20wholesale%20price%20list." style={{display: "inline-block", background: "#B8892B", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Get the Wholesale Price List on WhatsApp</a>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "80px 24px"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "12px"}}>Repair Services</div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 24px"}}>Board-level to cosmetic, all under one roof</h2>
      <div style={{display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "8px"}}>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Chip-Level Motherboard Repair</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 3,500</div><div style={{fontSize: "13px", color: "#5B5E66"}}>24–48 hrs</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Screen Replacement</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 4,500</div><div style={{fontSize: "13px", color: "#5B5E66"}}>Same day</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Battery Replacement</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 2,800</div><div style={{fontSize: "13px", color: "#5B5E66"}}>Same day</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Charging Port Repair</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 2,500</div><div style={{fontSize: "13px", color: "#5B5E66"}}>Same day</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Water Damage Recovery</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 5,000</div><div style={{fontSize: "13px", color: "#5B5E66"}}>2–5 days</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Camera Repair</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 3,200</div><div style={{fontSize: "13px", color: "#5B5E66"}}>Same day</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Back Glass Replacement</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 3,800</div><div style={{fontSize: "13px", color: "#5B5E66"}}>Same day</div></div>
      <div style={{minWidth: "240px", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><h3 style={{fontSize: "17px", fontWeight: "600", margin: "0 0 8px"}}>Data Recovery</h3><div style={{color: "#B8892B", fontWeight: "600", fontSize: "15px", marginBottom: "4px"}}>from LKR 6,500</div><div style={{fontSize: "13px", color: "#5B5E66"}}>1–3 days</div></div>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px"}}>
      <div style={{aspectRatio: "4/3", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", border: "1px solid #E4E2DD", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "13px", color: "#5B5E66"}}>Google Map — Eheliyagoda</div>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 20px"}}>Visit our Eheliyagoda counter</h2>
      <p style={{fontSize: "15px", lineHeight: "1.6", margin: "0 0 4px", fontWeight: "600"}}>GoldSky</p>
      <p style={{fontSize: "15px", lineHeight: "1.6", color: "#5B5E66", margin: "0 0 16px"}}>287, Main Street, Eheliyagoda, Ratnapura, Sri Lanka</p>
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px", marginBottom: "16px"}}>
      <tbody>
      <tr><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", color: "#5B5E66"}}>Mon – Sat</td><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", textAlign: "right"}}>9:00 AM – 7:00 PM</td></tr>
      <tr><td style={{padding: "6px 0", color: "#5B5E66"}}>Sunday</td><td style={{padding: "6px 0", textAlign: "right"}}>Closed</td></tr>
      </tbody>
      </table>
      <a href="https://maps.google.com" style={{color: "#B8892B", fontWeight: "600", fontSize: "14px", textDecoration: "none"}}>Get Directions →</a>
      <p style={{fontSize: "14px", lineHeight: "1.7", color: "#5B5E66", marginTop: "20px"}}>Based in <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Eheliyagoda</a>, GoldSky serves customers across <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Ratnapura</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Avissawella</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Kuruwita</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Kegalle</a> and <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "none"}}>Pelmadulla</a>, with islandwide courier delivery for parts orders.</p>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 24px"}}>Why GoldSky</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px"}}>
      <div><h3 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 8px"}}>Microscope-level soldering</h3><p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Board faults diagnosed and repaired under magnification, not guessed at.</p></div>
      <div><h3 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 8px"}}>Original &amp; OEM-grade parts</h3><p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Every part graded and disclosed — no unmarked substitutes.</p></div>
      <div><h3 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 8px"}}>90-day warranty</h3><p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Parts and workmanship covered on every job we complete.</p></div>
      <div><h3 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 8px"}}>Same-day service</h3><p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0"}}>Most screen, battery and port repairs done while you wait.</p></div>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 24px"}}>What customers say</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><div style={{color: "#B8892B", letterSpacing: "2px", marginBottom: "12px"}}>★★★★★</div><p style={{fontSize: "14px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>Board repair on my phone was fixed in a day when two other shops said it was unfixable. Fair price too.</p><div style={{fontSize: "13px", color: "#5B5E66"}}>— K. Perera, Ratnapura</div></div>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><div style={{color: "#B8892B", letterSpacing: "2px", marginBottom: "12px"}}>★★★★★</div><p style={{fontSize: "14px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>We order displays wholesale for our shop every month. Consistent quality and quick WhatsApp replies.</p><div style={{fontSize: "13px", color: "#5B5E66"}}>— Repair shop owner, Avissawella</div></div>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "24px", background: "#fff"}}><div style={{color: "#B8892B", letterSpacing: "2px", marginBottom: "12px"}}>★★★★★</div><p style={{fontSize: "14px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>Screen and battery done same day, delivered to Kegalle by courier the next morning.</p><div style={{fontSize: "13px", color: "#5B5E66"}}>— N. Fernando, Kegalle</div></div>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "56px", textAlign: "center"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 12px"}}>Need a part or a repair?</h2>
      <p style={{fontSize: "16px", color: "#5B5E66", margin: "0 0 28px"}}>Message us on WhatsApp — we reply within the hour during shop hours.</p>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{display: "inline-block", background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none", marginBottom: "20px"}}>Order on WhatsApp</a>
      <div style={{fontSize: "14px", color: "#5B5E66"}}>076 933 255 · 287, Main Street, Eheliyagoda, Ratnapura</div>
      </div>
      </section>
    </>
  );
}
