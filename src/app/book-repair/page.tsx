import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Repair",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Book a Repair</span></nav>
      
      <section style={{maxWidth: "640px", margin: "0 auto", padding: "32px 24px 100px"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "36px", letterSpacing: "-0.03em", margin: "0 0 12px"}}>Book a Repair</h1>
      <p style={{fontSize: "15px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 32px"}}>Tell us about the issue and we'll get back to you with a quote and timeframe. For a faster reply, message us directly on WhatsApp.</p>
      
      <form style={{display: "flex", flexDirection: "column", gap: "20px", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "32px"}}>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Full Name</label>
      <input type="text" placeholder="Your name" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Phone Number</label>
      <input type="tel" placeholder="07X XXX XXXX" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Device Model</label>
      <input type="text" placeholder="e.g. Samsung Galaxy A54" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Describe the Issue</label>
      <textarea rows={4} placeholder="What's wrong with the phone?" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px", fontFamily: "inherit", resize: "vertical"}} defaultValue=""></textarea>
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Preferred Date</label>
      <input type="date" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <button type="button" style={{background: "#16171A", color: "#fff", border: "none", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>Submit Booking Request</button>
      </form>
      
      <div style={{textAlign: "center", marginTop: "24px", fontSize: "14px", color: "#5B5E66"}}>Prefer not to fill in a form?</div>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20book%20a%20repair." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none", marginTop: "12px"}}>Message Us on WhatsApp Instead</a>
      </section>
    </>
  );
}
