"use client";

import { useState } from "react";

export default function ProductDetailClient() {
  const [tab, setTab] = useState(0);

  function tabStyle(i: number): React.CSSProperties {
    const active = tab === i;
    return {
      padding: "16px 0",
      cursor: "pointer",
      borderBottom: `2px solid ${active ? "#B8892B" : "transparent"}`,
      color: active ? "#16171A" : "#5B5E66",
      marginBottom: "-1px",
    };
  }

  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <a href="/products" style={{color: "#5B5E66", textDecoration: "none"}}>Products</a> / <a href="/categories/displays" style={{color: "#5B5E66", textDecoration: "none"}}>Displays</a> / <span style={{color: "#16171A"}}>Samsung Galaxy A54 OLED Display</span></nav>

      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px"}}>
      <div>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", border: "1px solid #E4E2DD", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "13px", color: "#5B5E66", marginBottom: "12px", textAlign: "center", padding: "24px"}}>product photo — front, full screen</div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px"}}>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 8px,#F7F6F3 8px,#F7F6F3 16px)", border: "1px solid #E4E2DD", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "10px", color: "#5B5E66", textAlign: "center", padding: "6px"}}>front</div>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 8px,#F7F6F3 8px,#F7F6F3 16px)", border: "1px solid #E4E2DD", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "10px", color: "#5B5E66", textAlign: "center", padding: "6px"}}>back</div>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 8px,#F7F6F3 8px,#F7F6F3 16px)", border: "1px solid #E4E2DD", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "10px", color: "#5B5E66", textAlign: "center", padding: "6px"}}>connector</div>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 8px,#F7F6F3 8px,#F7F6F3 16px)", border: "1px solid #E4E2DD", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "10px", color: "#5B5E66", textAlign: "center", padding: "6px"}}>packaging</div>
      </div>
      </div>
      <div>
      <span style={{display: "inline-block", background: "#F5EBD8", color: "#B8892B", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "12px"}}>OEM Grade</span>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "32px", letterSpacing: "-0.02em", margin: "0 0 8px", lineHeight: "1.2"}}>Samsung Galaxy A54 OLED Display</h1>
      <div style={{fontSize: "13px", color: "#5B5E66", fontVariantNumeric: "tabular-nums", marginBottom: "6px"}}>Part No. GS-DIS-SA54-OG</div>
      <span style={{display: "inline-block", background: "#E9F5EE", color: "#2E7D53", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "20px"}}>In Stock</span>

      <div style={{borderTop: "1px solid #E4E2DD", borderBottom: "1px solid #E4E2DD", padding: "20px 0", marginBottom: "24px"}}>
      <div style={{fontSize: "16px", color: "#5B5E66", marginBottom: "2px"}}>Retail <span style={{color: "#16171A", fontWeight: "600"}}>LKR 12,500</span></div>
      <div style={{fontSize: "32px", fontWeight: "700", color: "#B8892B", fontVariantNumeric: "tabular-nums", margin: "2px 0 10px"}}>Wholesale from LKR 9,800</div>
      <span style={{display: "inline-block", background: "#F5EBD8", color: "#B8892B", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "8px"}}>WHOLESALE · 5+ units</span>
      <div style={{fontSize: "13px", color: "#5B5E66"}}>Bulk and dealer rates on WhatsApp</div>
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px"}}>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20order%3A%20Samsung%20Galaxy%20A54%20OLED%20Display%20(Part%3A%20GS-DIS-SA54-OG).%20Quantity%3A%20___.%20Please%20confirm%20price%20and%20availability." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Order on WhatsApp</a>
      <a href="tel:+9476933255" style={{display: "block", textAlign: "center", border: "1px solid #E4E2DD", color: "#16171A", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Call 076 933 255</a>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20ask%20about%20bulk%20pricing%20for%20the%20Samsung%20Galaxy%20A54%20OLED%20Display." style={{textAlign: "center", color: "#5B5E66", fontSize: "13px", textDecoration: "underline"}}>Ask about bulk pricing</a>
      </div>

      <div style={{fontSize: "13px", color: "#5B5E66", lineHeight: "1.7"}}>Ships islandwide by courier · Available for pickup at our Eheliyagoda counter.</div>
      </div>
      </section>

      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 0"}}>
      <div style={{display: "flex", gap: "32px", borderBottom: "1px solid #E4E2DD", fontSize: "14px", fontWeight: "600"}}>
      <span style={tabStyle(0)} onClick={() => setTab(0)}>Description</span>
      <span style={tabStyle(1)} onClick={() => setTab(1)}>Compatible Models</span>
      <span style={tabStyle(2)} onClick={() => setTab(2)}>Specifications</span>
      <span style={tabStyle(3)} onClick={() => setTab(3)}>Warranty &amp; Returns</span>
      </div>
      <div style={{padding: "32px 0", maxWidth: "760px", fontSize: "15px", lineHeight: "1.7", color: "#16171A"}}>
      {tab === 0 && (
      <p>This OLED display assembly is the OEM-grade replacement for the Samsung Galaxy A54 5G. It includes the pre-installed digitiser and frame, tested for touch response, brightness uniformity and colour accuracy before dispatch. Fitting requires desoldering the original flex cable connectors — we recommend our screen replacement service if you don&apos;t have micro-soldering tools.</p>
      )}
      {tab === 1 && (
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px"}}>
      <tbody>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><th style={{textAlign: "left", padding: "10px 0", color: "#5B5E66", fontWeight: "600"}}>Model</th><th style={{textAlign: "left", padding: "10px 0", color: "#5B5E66", fontWeight: "600"}}>Model Number</th></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "10px 0"}}>Galaxy A54 5G</td><td style={{padding: "10px 0", fontVariantNumeric: "tabular-nums"}}>SM-A546</td></tr>
      <tr><td style={{padding: "10px 0"}}>Galaxy A54 5G (dual SIM)</td><td style={{padding: "10px 0", fontVariantNumeric: "tabular-nums"}}>SM-A546B</td></tr>
      </tbody>
      </table>
      )}
      {tab === 2 && (
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px"}}>
      <tbody>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "10px 0", color: "#5B5E66"}}>Panel type</td><td style={{padding: "10px 0"}}>Super AMOLED, OEM-grade</td></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "10px 0", color: "#5B5E66"}}>Size</td><td style={{padding: "10px 0"}}>6.4 inch</td></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "10px 0", color: "#5B5E66"}}>Resolution</td><td style={{padding: "10px 0"}}>2340 × 1080</td></tr>
      <tr><td style={{padding: "10px 0", color: "#5B5E66"}}>Includes</td><td style={{padding: "10px 0"}}>Display, digitiser, frame</td></tr>
      </tbody>
      </table>
      )}
      {tab === 3 && (
      <>
      <p><strong>Coverage period:</strong> 90 days from the date of purchase or fitting.</p>
      <p><strong>What&apos;s covered:</strong> Dead pixels, touch response faults, and backlight failure under normal use.</p>
      <p><strong>What voids it:</strong> Physical damage after installation, liquid damage, or fitting by a third party without our supervision.</p>
      <p><strong>Return process:</strong> Bring the part and your receipt to our Eheliyagoda counter, or message us on WhatsApp to arrange a courier return. Faulty units are replaced or refunded after inspection, typically within 3 business days.</p>
      </>
      )}
      </div>
      </section>

      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "48px"}}>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 6px"}}>Get this fitted at our shop</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", margin: "0"}}>Same-day screen replacement with calibration, done in-store.</p>
      </div>
      <a href="/services/screen-replacement" style={{background: "#16171A", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap"}}>View Screen Replacement Service</a>
      </div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 16px"}}>You might also need</h2>
      <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
      <a href="/services/screen-replacement" style={{border: "1px solid #E4E2DD", borderRadius: "8px", padding: "20px", textDecoration: "none", color: "#16171A", minWidth: "220px"}}>
      <div style={{fontWeight: "600", marginBottom: "4px"}}>Repair Tools</div>
      <div style={{fontSize: "13px", color: "#5B5E66"}}>Browse our micro-soldering and fitting tool range</div>
      </a>
      </div>
      </section>
    </>
  );
}
