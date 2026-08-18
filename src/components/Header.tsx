import Link from "next/link";

export default function Header() {
  return (
    <header style={{position: "sticky", top: "0", zIndex: "50", background: "#FFFFFF", borderBottom: "1px solid #E4E2DD"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap"}}>
        <Link href="/" style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "22px", color: "#16171A", textDecoration: "none", letterSpacing: "-0.02em"}}>GoldSky</Link>
        <nav style={{display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", fontWeight: "500", flexWrap: "wrap"}}>
          <Link href="/products" style={{color: "#16171A", textDecoration: "none"}}>Products</Link>
          <Link href="/services" style={{color: "#16171A", textDecoration: "none"}}>Repair Services</Link>
          <Link href="/wholesale" style={{color: "#16171A", textDecoration: "none"}}>Wholesale</Link>
          <Link href="/about" style={{color: "#16171A", textDecoration: "none"}}>About</Link>
          <Link href="/contact" style={{color: "#16171A", textDecoration: "none"}}>Contact</Link>
        </nav>
        <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
          <Link href="/search" style={{color: "#16171A", textDecoration: "none", fontSize: "14px", border: "1px solid #E4E2DD", borderRadius: "6px", padding: "8px 12px"}}>Search</Link>
          <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{background: "#25D366", color: "#fff", padding: "10px 18px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap"}}>Order on WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
