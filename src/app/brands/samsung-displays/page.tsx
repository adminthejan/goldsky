import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samsung Displays",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <a href="/products" style={{color: "#5B5E66", textDecoration: "none"}}>Products</a> / Samsung / <span style={{color: "#16171A"}}>Displays</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "12px"}}>Brand + Category</div>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 16px"}}>Samsung Display Panels</h1>
      <p style={{fontSize: "16px", color: "#5B5E66", lineHeight: "1.6", maxWidth: "760px", margin: "0 0 40px"}}>Replacement OLED and LCD panels for the Samsung Galaxy A, M and S series, stocked at our Eheliyagoda workshop and shipped islandwide. Ratnapura and Colombo repair shops order these in bulk at wholesale rates — message us for current dealer pricing.</p>
      </section>
      
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <div style={{fontSize: "14px", color: "#5B5E66", marginBottom: "16px"}}>1 result</div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginBottom: "48px"}}>
      <a href="/products/samsung-galaxy-a54-oled-display" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "20px", display: "block"}}>
      <span style={{display: "inline-block", background: "#E9F5EE", color: "#2E7D53", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "12px"}}>In Stock</span>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "12px", color: "#5B5E66", marginBottom: "16px", textAlign: "center", padding: "16px"}}>product photo</div>
      <div style={{fontSize: "13px", color: "#5B5E66", marginBottom: "4px"}}>Fits Galaxy A54 / A546</div>
      <h2 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 12px", lineHeight: "1.4"}}>Samsung Galaxy A54 OLED Display</h2>
      <div style={{fontSize: "14px", color: "#5B5E66"}}>Retail LKR 12,500</div>
      <div style={{fontSize: "22px", fontWeight: "700", color: "#B8892B", fontVariantNumeric: "tabular-nums"}}>from LKR 9,800</div>
      </a>
      </div>
      <div style={{borderTop: "1px solid #E4E2DD", paddingTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px"}}>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 12px"}}>Related categories</h2>
      <div style={{display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px"}}>
      <a href="/categories/displays" style={{color: "#16171A", textDecoration: "underline"}}>All Displays</a>
      <a href="/products" style={{color: "#16171A", textDecoration: "underline"}}>Samsung Batteries</a>
      <a href="/products" style={{color: "#16171A", textDecoration: "underline"}}>Samsung Charging Ports</a>
      </div>
      </div>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "0 0 12px"}}>Get it fitted</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 12px"}}>Buying the part and want it installed same day? Our <a href="/services/screen-replacement" style={{color: "#16171A", fontWeight: "600"}}>screen replacement service</a> covers fitting and calibration.</p>
      </div>
      </div>
      </div>
    </>
  );
}
