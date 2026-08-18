import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Contact</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px"}}>
      <div>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "36px", letterSpacing: "-0.03em", margin: "0 0 24px"}}>Contact Us</h1>
      <form style={{display: "flex", flexDirection: "column", gap: "16px", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "28px", marginBottom: "32px"}}>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Name</label>
      <input type="text" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Phone or Email</label>
      <input type="text" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Message</label>
      <textarea rows={4} style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px", fontFamily: "inherit", resize: "vertical"}} defaultValue=""></textarea>
      </div>
      <button type="button" style={{background: "#16171A", color: "#fff", border: "none", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>Send Message</button>
      </form>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Message Us on WhatsApp Instead</a>
      </div>
      <div>
      <div style={{aspectRatio: "4/3", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", border: "1px solid #E4E2DD", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "13px", color: "#5B5E66", marginBottom: "24px"}}>Google Map — Eheliyagoda</div>
      <p style={{fontSize: "15px", lineHeight: "1.6", margin: "0 0 4px", fontWeight: "600"}}>GoldSky</p>
      <p style={{fontSize: "15px", lineHeight: "1.6", color: "#5B5E66", margin: "0 0 16px"}}>287, Main Street, Eheliyagoda, Ratnapura, Sri Lanka</p>
      <p style={{fontSize: "15px", margin: "0 0 4px"}}>076 933 255</p>
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px", marginTop: "16px"}}>
      <tbody>
      <tr><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", color: "#5B5E66"}}>Mon – Sat</td><td style={{padding: "6px 0", borderBottom: "1px solid #E4E2DD", textAlign: "right"}}>9:00 AM – 7:00 PM</td></tr>
      <tr><td style={{padding: "6px 0", color: "#5B5E66"}}>Sunday</td><td style={{padding: "6px 0", textAlign: "right"}}>Closed</td></tr>
      </tbody>
      </table>
      </div>
      </section>
    </>
  );
}
