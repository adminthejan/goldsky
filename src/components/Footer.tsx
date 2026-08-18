import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background: "#2C3E50", color: "#CBD3DA"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "40px"}}>
        <div>
          <div style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "20px", color: "#fff", marginBottom: "12px"}}>GoldSky</div>
          <p style={{fontSize: "14px", lineHeight: "1.7", margin: "0 0 16px"}}>287, Main Street, Eheliyagoda,<br />Ratnapura, Sri Lanka</p>
          <p style={{fontSize: "14px", margin: "0 0 4px"}}>076 933 255</p>
          <p style={{fontSize: "14px", margin: "0"}}>Mon–Sat 9AM–7PM</p>
        </div>
        <div>
          <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#8B95A1", marginBottom: "16px"}}>Product Categories</div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px"}}>
            <Link href="/categories/displays" style={{color: "#CBD3DA", textDecoration: "none"}}>Displays</Link>
            <Link href="/products" style={{color: "#CBD3DA", textDecoration: "none"}}>Batteries</Link>
            <Link href="/products" style={{color: "#CBD3DA", textDecoration: "none"}}>Motherboards &amp; ICs</Link>
            <Link href="/products" style={{color: "#CBD3DA", textDecoration: "none"}}>Charging Ports</Link>
            <Link href="/products" style={{color: "#CBD3DA", textDecoration: "none"}}>Back Glass &amp; Housings</Link>
            <Link href="/products" style={{color: "#CBD3DA", textDecoration: "none"}}>All Products →</Link>
          </div>
        </div>
        <div>
          <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#8B95A1", marginBottom: "16px"}}>Repair Services</div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px"}}>
            <Link href="/services/screen-replacement" style={{color: "#CBD3DA", textDecoration: "none"}}>Chip-Level Motherboard Repair</Link>
            <Link href="/services" style={{color: "#CBD3DA", textDecoration: "none"}}>Screen Replacement</Link>
            <Link href="/services" style={{color: "#CBD3DA", textDecoration: "none"}}>Battery Replacement</Link>
            <Link href="/services" style={{color: "#CBD3DA", textDecoration: "none"}}>Water Damage Recovery</Link>
            <Link href="/book-repair" style={{color: "#CBD3DA", textDecoration: "none"}}>Book a Repair →</Link>
          </div>
        </div>
        <div>
          <div style={{fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#8B95A1", marginBottom: "16px"}}>Service Areas</div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px"}}>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Eheliyagoda</Link>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Ratnapura</Link>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Avissawella</Link>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Kuruwita</Link>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Kegalle</Link>
            <Link href="/locations/eheliyagoda" style={{color: "#CBD3DA", textDecoration: "none"}}>Pelmadulla</Link>
          </div>
        </div>
      </div>
      <div style={{borderTop: "1px solid #3B4A5A", padding: "20px 24px", maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "13px", color: "#8B95A1"}}>
        <span>© 2026 GoldSky. All rights reserved.</span>
        <div style={{display: "flex", gap: "20px"}}>
          <Link href="/delivery" style={{color: "#8B95A1", textDecoration: "none"}}>Delivery Information</Link>
          <span>Made in Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
