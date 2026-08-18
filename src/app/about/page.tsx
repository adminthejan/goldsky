import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>About</span></nav>
      
      <section style={{maxWidth: "820px", margin: "0 auto", padding: "32px 24px 0"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 24px"}}>About GoldSky</h1>
      <p style={{fontSize: "16px", lineHeight: "1.75", color: "#16171A", margin: "0 0 20px"}}>GoldSky started as a small repair counter on Main Street in Eheliyagoda, fixing phones for the local community. As board-level faults became more common — devices that couldn't be repaired with parts alone — we invested in microscope and hot-air rework equipment to handle chip-level diagnostics in-house, rather than sending boards away.</p>
      <p style={{fontSize: "16px", lineHeight: "1.75", color: "#16171A", margin: "0 0 20px"}}>Today we run two sides of the same business: a repair workshop for screens, batteries, ports and board-level faults, and a parts counter supplying technicians and repair shops across Ratnapura District with genuine and OEM-grade components — retail and wholesale.</p>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "24px", fontWeight: "600", margin: "40px 0 16px"}}>The workshop</h2>
      <p style={{fontSize: "16px", lineHeight: "1.75", color: "#16171A", margin: "0 0 20px"}}>Every board repair happens under magnification at a dedicated soldering station, with hot-air rework stations, a regulated bench power supply for fault isolation, and an ultrasonic cleaner for corrosion and water damage cases. Screens and batteries are fitted at a separate cosmetic-repair bench to keep dust away from board work.</p>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "24px", fontWeight: "600", margin: "40px 0 16px"}}>The team</h2>
      <p style={{fontSize: "16px", lineHeight: "1.75", color: "#16171A", margin: "0 0 40px"}}>Our technicians handle both cosmetic repairs and chip-level diagnostics, so a phone that comes in for a screen replacement gets checked for underlying board issues at the same time — no separate trip needed.</p>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "40px", textAlign: "center"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "26px", letterSpacing: "-0.02em", margin: "0 0 12px"}}>Come see the workshop</h2>
      <p style={{fontSize: "15px", color: "#5B5E66", margin: "0 0 24px"}}>287, Main Street, Eheliyagoda, Ratnapura — open Mon–Sat, 9AM–7PM.</p>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{display: "inline-block", background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none"}}>Order on WhatsApp</a>
      </div>
      </section>
    </>
  );
}
