export default function NotFound() {
  return (
    <section style={{maxWidth: "600px", margin: "0 auto", padding: "120px 24px", textAlign: "center"}}>
      <div style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "700", fontSize: "88px", color: "#E4E2DD", letterSpacing: "-0.03em", lineHeight: "1"}}>404</div>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "28px", letterSpacing: "-0.02em", margin: "12px 0 12px"}}>Page not found</h1>
      <p style={{fontSize: "15px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 32px"}}>The page you&apos;re looking for doesn&apos;t exist. It may have been moved, or the link might be outdated.</p>
      <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap"}}>
        <a href="/" style={{border: "1px solid #16171A", color: "#16171A", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Back to Home</a>
        <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire." style={{background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "15px", fontWeight: "600", textDecoration: "none"}}>Order on WhatsApp</a>
      </div>
    </section>
  );
}
