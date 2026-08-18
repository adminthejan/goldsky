import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eheliyagoda — Service Area",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"GoldSky\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"287, Main Street\",\"addressLocality\":\"Eheliyagoda\",\"addressRegion\":\"Ratnapura\",\"addressCountry\":\"LK\"},\"telephone\":\"+9476933255\",\"openingHours\":\"Mo-Sa 09:00-19:00\"}" }} />
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Phone Repair in Eheliyagoda</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 16px"}}>Phone Repair in Eheliyagoda</h1>
      <p style={{fontSize: "16px", color: "#5B5E66", lineHeight: "1.7", maxWidth: "760px", margin: "0 0 40px"}}>GoldSky's workshop sits on Main Street in Eheliyagoda, serving customers across Ratnapura District with chip-level phone repair and genuine parts. Whether it's a cracked screen, a dead battery, or a board that won't power on, our technicians diagnose and fix it on-site with microscope-level tools most shops in the area don't carry.</p>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px"}}>
      <div style={{aspectRatio: "4/3", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", border: "1px solid #E4E2DD", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "13px", color: "#5B5E66"}}>Google Map — 287 Main Street, Eheliyagoda</div>
      <div>
      <p style={{fontSize: "15px", lineHeight: "1.6", margin: "0 0 4px", fontWeight: "600"}}>GoldSky</p>
      <p style={{fontSize: "15px", lineHeight: "1.6", color: "#5B5E66", margin: "0 0 16px"}}>287, Main Street, Eheliyagoda, Ratnapura, Sri Lanka</p>
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px", marginBottom: "16px"}}>
      <tbody>
      <tr><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", color: "#5B5E66"}}>Mon – Sat</td><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", textAlign: "right"}}>9:00 AM – 7:00 PM</td></tr>
      <tr><td style={{padding: "6px 0", color: "#5B5E66"}}>Sunday</td><td style={{padding: "6px 0", textAlign: "right"}}>Closed</td></tr>
      </tbody>
      </table>
      <a href="https://maps.google.com" style={{color: "#B8892B", fontWeight: "600", fontSize: "14px", textDecoration: "none", display: "block", marginBottom: "20px"}}>Get Directions →</a>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Order on WhatsApp</a>
      </div>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px"}}>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "22px", fontWeight: "600", margin: "0 0 12px"}}>Also serving nearby towns</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#5B5E66", maxWidth: "760px", margin: "0"}}>Customers regularly travel to our Eheliyagoda counter from <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>Ratnapura</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>Avissawella</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>Kuruwita</a>, <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>Kegalle</a> and <a href="/locations/eheliyagoda" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>Pelmadulla</a>. Parts orders from these areas ship by courier within 1–2 business days — see our <a href="/delivery" style={{color: "#16171A", fontWeight: "600", textDecoration: "underline"}}>delivery information</a> for charges by region.</p>
      </section>
    </>
  );
}
