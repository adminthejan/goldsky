import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Displays",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <a href="/products" style={{color: "#5B5E66", textDecoration: "none"}}>Products</a> / <span style={{color: "#16171A"}}>Displays</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 12px"}}>Phone Displays &amp; LCD Screens</h1>
      <p style={{fontSize: "16px", color: "#5B5E66", lineHeight: "1.6", maxWidth: "720px", margin: "0 0 32px"}}>Genuine and OEM-grade replacement displays for Samsung, Apple, Xiaomi and more, in stock at our Eheliyagoda counter and available islandwide by courier. Every panel is tested for touch response and colour accuracy before it leaves the shop.</p>
      </section>
      
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "260px 1fr", gap: "40px", alignItems: "start"}}>
      <aside style={{position: "sticky", top: "96px", display: "flex", flexDirection: "column", gap: "20px"}}>
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px"}}>Brand</div>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />Samsung</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      </div>
      <div>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "8px"}}>Quality Grade</div>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />OEM</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      </div>
      </aside>
      <main>
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
      <div style={{borderTop: "1px solid #E4E2DD", paddingTop: "32px"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "22px", fontWeight: "600", margin: "0 0 12px"}}>Understanding display quality grades</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#5B5E66", maxWidth: "760px", margin: "0"}}>An Original panel is pulled from a factory-sealed unit. OEM means the panel is manufactured to the phone maker's specification by a licensed supplier — the grade we stock most, balancing price and reliability. Incell panels are aftermarket with the touch digitiser bonded into the LCD layer, common on older or budget models. Aftermarket is the lowest tier — functional, but with visible differences in colour or touch sensitivity. We disclose the grade on every listing so you know exactly what's being fitted.</p>
      </div>
      </main>
      </div>
    </>
  );
}
