import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Information",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}><a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Delivery Information</span></nav>
      
      <section style={{maxWidth: "820px", margin: "0 auto", padding: "32px 24px 0"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "40px", letterSpacing: "-0.03em", margin: "0 0 24px"}}>Delivery Information</h1>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "32px 0 12px"}}>Courier Partners</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>We ship parts orders islandwide through Domex and Koombiyo Delivery, with Sri Lanka Post used for remote or rural addresses where courier coverage is limited.</p>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "32px 0 12px"}}>Dispatch Cut-off Times</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>Orders confirmed before 3:00 PM on a business day are dispatched the same day. Orders confirmed after 3:00 PM or on a Sunday go out the following business day.</p>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "32px 0 12px"}}>Delivery Charges by Region</h2>
      <table style={{width: "100%", borderCollapse: "collapse", fontSize: "14px", marginBottom: "12px"}}>
      <tbody>
      <tr style={{background: "#fff", borderBottom: "1px solid #E4E2DD"}}><th style={{textAlign: "left", padding: "12px", color: "#5B5E66", fontWeight: "600"}}>Region</th><th style={{textAlign: "left", padding: "12px", color: "#5B5E66", fontWeight: "600"}}>Charge</th><th style={{textAlign: "left", padding: "12px", color: "#5B5E66", fontWeight: "600"}}>Typical Time</th></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "12px"}}>Colombo &amp; Western Province</td><td style={{padding: "12px"}}>LKR 350</td><td style={{padding: "12px"}}>1–2 days</td></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "12px"}}>Ratnapura, Kegalle &amp; Sabaragamuwa</td><td style={{padding: "12px"}}>LKR 300</td><td style={{padding: "12px"}}>Same to next day</td></tr>
      <tr style={{borderBottom: "1px solid #E4E2DD"}}><td style={{padding: "12px"}}>Other provinces</td><td style={{padding: "12px"}}>LKR 450</td><td style={{padding: "12px"}}>2–3 days</td></tr>
      <tr><td style={{padding: "12px"}}>Remote / rural areas</td><td style={{padding: "12px"}}>LKR 600</td><td style={{padding: "12px"}}>3–5 days</td></tr>
      </tbody>
      </table>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "32px 0 12px"}}>Cash on Delivery</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#16171A", margin: "0 0 12px"}}>Cash on delivery is available islandwide for retail orders. A COD handling fee of LKR 150 applies. Wholesale orders are settled by bank transfer before dispatch.</p>
      
      <h2 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "20px", fontWeight: "600", margin: "32px 0 12px"}}>Bulk &amp; Wholesale Shipments</h2>
      <p style={{fontSize: "15px", lineHeight: "1.7", color: "#16171A", margin: "0 0 40px"}}>Wholesale orders are packed with extra protective padding per unit and shipped via courier or arranged bus parcel service for larger volumes. For dealer accounts placing frequent orders, we can arrange a fixed weekly or fortnightly dispatch schedule — ask on WhatsApp to set this up.</p>
      </section>
    </>
  );
}
