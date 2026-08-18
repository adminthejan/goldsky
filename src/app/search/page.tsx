import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

export default function Page() {
  return (
    <>
      <section style={{maxWidth: "820px", margin: "0 auto", padding: "48px 24px 24px"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "32px", letterSpacing: "-0.03em", margin: "0 0 20px"}}>Search</h1>
      <input type="text" defaultValue="display" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "6px", padding: "14px 16px", fontSize: "15px", marginBottom: "8px"}} />
      <div style={{fontSize: "14px", color: "#5B5E66", marginBottom: "32px"}}>1 result for "display"</div>
      
      <a href="/products/samsung-galaxy-a54-oled-display" style={{display: "flex", gap: "20px", textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "20px", marginBottom: "40px"}}>
      <div style={{width: "96px", height: "96px", flexShrink: "0", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 8px,#F7F6F3 8px,#F7F6F3 16px)", borderRadius: "6px"}}></div>
      <div>
      <div style={{fontSize: "13px", color: "#5B5E66", marginBottom: "4px"}}>Fits Galaxy A54 / A546</div>
      <h2 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 8px"}}>Samsung Galaxy A54 OLED Display</h2>
      <div style={{fontSize: "18px", fontWeight: "700", color: "#B8892B", fontVariantNumeric: "tabular-nums"}}>from LKR 9,800</div>
      </div>
      </a>
      
      <div style={{border: "1px dashed #E4E2DD", borderRadius: "8px", padding: "32px", textAlign: "center"}}>
      <p style={{fontSize: "14px", color: "#5B5E66", margin: "0 0 12px"}}>No luck finding a part? Our catalogue is growing — ask us directly and we'll check stock.</p>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27m%20looking%20for%20a%20part%20that%27s%20not%20listed%20on%20the%20site." style={{color: "#B8892B", fontWeight: "600", textDecoration: "none", fontSize: "14px"}}>Ask us on WhatsApp →</a>
      </div>
      </section>
    </>
  );
}
