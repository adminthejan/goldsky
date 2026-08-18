import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Wholesale</span></nav>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 0"}}>
      <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#5B5E66", marginBottom: "12px"}}>Dealer Programme</div>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: "800px"}}>Wholesale rates for repair shops, technicians and resellers.</h1>
      <p style={{fontSize: "16px", color: "#5B5E66", lineHeight: "1.6", maxWidth: "720px", margin: "0 0 40px"}}>We supply independent repair shops and resellers across Ratnapura, Colombo and beyond with genuine and OEM-grade parts at tiered wholesale pricing. No minimum order to get started — pricing improves as your monthly volume grows.</p>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 64px"}}>
      <table style={{width: "100%", borderCollapse: "collapse", background: "#fff", border: "1px solid #E4E2DD", borderRadius: "8px", overflow: "hidden"}}>
      <tbody>
      <tr style={{background: "#F7F6F3", borderBottom: "1px solid #E4E2DD"}}>
      <th style={{textAlign: "left", padding: "16px 20px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5B5E66"}}>Tier</th>
      <th style={{textAlign: "left", padding: "16px 20px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5B5E66"}}>Volume</th>
      <th style={{textAlign: "left", padding: "16px 20px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5B5E66"}}>What you get</th>
      </tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}>
      <td style={{padding: "20px", fontWeight: "600"}}>Starter</td>
      <td style={{padding: "20px"}}>5–19 units per order</td>
      <td style={{padding: "20px", color: "#5B5E66"}}>Standard trade discount off retail pricing</td>
      </tr>
      <tr style={{borderBottom: "1px solid #E4E2DD", background: "#FBF7EF"}}>
      <td style={{padding: "20px", fontWeight: "600", color: "#B8892B"}}>Trade</td>
      <td style={{padding: "20px"}}>20–49 units per order</td>
      <td style={{padding: "20px", color: "#5B5E66"}}>Deeper discount plus priority stock holds for regular monthly orders</td>
      </tr>
      <tr>
      <td style={{padding: "20px", fontWeight: "600"}}>Dealer</td>
      <td style={{padding: "20px"}}>50+ units per order</td>
      <td style={{padding: "20px", color: "#5B5E66"}}>Best available pricing, dedicated account contact and custom part sourcing</td>
      </tr>
      </tbody>
      </table>
      </section>
      
      <section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px"}}>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "22px", fontWeight: "600", margin: "0 0 16px"}}>Dealer Enquiry Form</h2>
      <form style={{display: "flex", flexDirection: "column", gap: "16px", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "28px"}}>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Business Name</label>
      <input type="text" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Contact Person</label>
      <input type="text" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Phone Number</label>
      <input type="tel" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Estimated Monthly Volume</label>
      <input type="text" placeholder="e.g. 30 units / month" style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px"}} />
      </div>
      <div>
      <label style={{display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px"}}>Message</label>
      <textarea rows={3} style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "12px", fontSize: "14px", fontFamily: "inherit", resize: "vertical"}} defaultValue=""></textarea>
      </div>
      <button type="button" style={{background: "#16171A", color: "#fff", border: "none", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>Submit Enquiry</button>
      </form>
      </div>
      <div>
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "22px", fontWeight: "600", margin: "0 0 16px"}}>Or go straight to WhatsApp</h2>
      <p style={{fontSize: "14px", color: "#5B5E66", lineHeight: "1.7", margin: "0 0 20px"}}>Most dealer accounts start with a quick WhatsApp conversation — tell us your shop location and typical monthly volume, and we'll send current wholesale pricing.</p>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20the%20wholesale%20price%20list." style={{display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "14px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Get the Wholesale Price List on WhatsApp</a>
      </div>
      </section>
    </>
  );
}
