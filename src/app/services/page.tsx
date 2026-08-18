import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repair Services",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Repair Services</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 12px"}}>Repair Services</h1>
      <p style={{fontSize: "16px", color: "#5B5E66", lineHeight: "1.6", maxWidth: "720px", margin: "0 0 40px"}}>Board-level micro-soldering to cosmetic replacement, done at our Eheliyagoda workshop under a microscope. Most repairs are completed the same day.</p>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px"}}>
      <a href="/services/screen-replacement" style={{textDecoration: "none", color: "inherit", border: "1px solid #B8892B", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Chip-Level Motherboard Repair</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Component-level diagnostics and micro-soldering for boot loops, no-power and water-damaged boards.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 3,500</span><span style={{color: "#5B5E66"}}>24–48 hrs</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Screen Replacement</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Cracked or dead display swapped and calibrated, with genuine or OEM-grade panels.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 4,500</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Battery Replacement</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Genuine-capacity battery replacement with proper adhesive re-seal.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 2,800</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Charging Port Repair</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Port replacement and IC-level diagnosis for phones that won't hold a charge.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 2,500</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Water Damage Recovery</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Ultrasonic cleaning and corrosion treatment before board-level repair begins.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 5,000</span><span style={{color: "#5B5E66"}}>2–5 days</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Camera Repair</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Lens, sensor and flex cable replacement for blurry, dark or non-functional cameras.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 3,200</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Back Glass Replacement</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Laser-separated back glass replacement without disturbing internal components.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 3,800</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Data Recovery</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>Data extraction from dead or water-damaged phones before any board repair.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 6,500</span><span style={{color: "#5B5E66"}}>1–3 days</span></div>
      </a>
      <a href="/services" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", padding: "28px", background: "#fff"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "19px", fontWeight: "600", margin: "0 0 8px"}}>Software &amp; Firmware</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 16px"}}>OS reinstalls, firmware flashing and unlocking for boards that check out electrically but won't boot properly.</p>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span style={{color: "#B8892B", fontWeight: "600"}}>from LKR 1,800</span><span style={{color: "#5B5E66"}}>Same day</span></div>
      </a>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "40px", textAlign: "center"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "26px", letterSpacing: "-0.02em", margin: "0 0 12px"}}>Not sure what's wrong with your phone?</h2>
      <p style={{fontSize: "15px", color: "#5B5E66", margin: "0 0 24px"}}>Book a repair and describe the issue — we'll diagnose it at the counter.</p>
      <a href="/book-repair" style={{display: "inline-block", background: "#16171A", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none"}}>Book a Repair</a>
      </div>
      </section>
    </>
  );
}
