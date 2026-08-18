import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function Page() {
  return (
    <>
      <nav aria-label="Breadcrumb" style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 0", fontSize: "13px", color: "#5B5E66"}}>
      <a href="/" style={{color: "#5B5E66", textDecoration: "none"}}>Home</a> / <span style={{color: "#16171A"}}>Products</span>
      </nav>
      
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 80px", display: "grid", gridTemplateColumns: "280px 1fr", gap: "40px", alignItems: "start"}}>
      
      <aside style={{position: "sticky", top: "96px", display: "flex", flexDirection: "column", gap: "20px"}}>
      <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontWeight: "600", fontSize: "24px", letterSpacing: "-0.02em", margin: "0 0 4px"}}>All Products</h1>
      <p style={{fontSize: "13px", color: "#5B5E66", margin: "0 0 8px"}}>Genuine and OEM-grade phone parts, retail and wholesale.</p>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px", display: "flex", justifyContent: "space-between"}}>Device Brand<span>−</span></div>
      <input placeholder="Search brands..." style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "8px 10px", fontSize: "13px", marginBottom: "10px"}} />
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />Samsung</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />Apple</span><span>(0)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />Xiaomi</span><span>(0)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />Oppo</span><span>(0)</span></label>
      </div>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px", display: "flex", justifyContent: "space-between"}}>Model<span>−</span></div>
      <input placeholder="Search models..." style={{width: "100%", border: "1px solid #E4E2DD", borderRadius: "4px", padding: "8px 10px", fontSize: "13px", marginBottom: "10px"}} />
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />Galaxy A54</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      </div>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px", display: "flex", justifyContent: "space-between"}}>Part Type<span>−</span></div>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />Displays</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      </div>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "8px", display: "flex", justifyContent: "space-between"}}>Quality Grade<span>−</span></div>
      <p style={{fontSize: "12px", color: "#5B5E66", lineHeight: "1.6", margin: "0 0 10px"}}>Original: factory part. OEM: made to spec by a licensed supplier. Incell: aftermarket panel, integrated touch layer. Aftermarket: budget replacement.</p>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />OEM</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      </div>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px"}}>Price Range</div>
      <div style={{height: "4px", background: "#E4E2DD", borderRadius: "999px", position: "relative", marginBottom: "10px"}}>
      <div style={{position: "absolute", left: "15%", right: "55%", top: "0", bottom: "0", background: "#B8892B", borderRadius: "999px"}}></div>
      <div style={{position: "absolute", left: "15%", top: "-6px", width: "16px", height: "16px", borderRadius: "999px", background: "#fff", border: "2px solid #B8892B"}}></div>
      <div style={{position: "absolute", left: "45%", top: "-6px", width: "16px", height: "16px", borderRadius: "999px", background: "#fff", border: "2px solid #B8892B"}}></div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#5B5E66"}}>
      <span>LKR 8,000</span><span>LKR 25,000</span>
      </div>
      </div>
      
      <div style={{borderBottom: "1px solid #E4E2DD", paddingBottom: "16px"}}>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px"}}>Availability</div>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />In Stock</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />Pre-order</span><span>(0)</span></label>
      </div>
      
      <div>
      <div style={{fontWeight: "600", fontSize: "14px", marginBottom: "12px"}}>Warranty</div>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />30 days</span><span>(0)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}><span><input type="checkbox" defaultChecked style={{marginRight: "8px"}} />90 days</span><span style={{color: "#5B5E66"}}>(1)</span></label>
      <label style={{display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#B8B6AE"}}><span><input type="checkbox" disabled style={{marginRight: "8px"}} />180 days</span><span>(0)</span></label>
      </div>
      </aside>
      
      <main>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "16px"}}>
      <div style={{fontSize: "14px", color: "#5B5E66"}}>1 result</div>
      <div style={{display: "flex", gap: "12px", alignItems: "center"}}>
      <select style={{border: "1px solid #E4E2DD", borderRadius: "6px", padding: "8px 10px", fontSize: "13px", background: "#fff"}}>
      <option>Sort: Relevance</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest</option>
      </select>
      <div style={{display: "flex", border: "1px solid #E4E2DD", borderRadius: "6px", overflow: "hidden", fontSize: "13px"}}>
      <span style={{padding: "8px 12px", background: "#F5EBD8", color: "#B8892B", fontWeight: "600"}}>Grid</span>
      <span style={{padding: "8px 12px", color: "#5B5E66"}}>List</span>
      </div>
      </div>
      </div>
      
      <div style={{display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px"}}>
      <span style={{display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #B8892B", color: "#B8892B", borderRadius: "999px", padding: "6px 12px", fontSize: "13px"}}>Samsung ×</span>
      <span style={{display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #B8892B", color: "#B8892B", borderRadius: "999px", padding: "6px 12px", fontSize: "13px"}}>OEM ×</span>
      <span style={{display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #B8892B", color: "#B8892B", borderRadius: "999px", padding: "6px 12px", fontSize: "13px"}}>In Stock ×</span>
      <span style={{fontSize: "13px", color: "#5B5E66", textDecoration: "underline", padding: "6px 0"}}>Clear all</span>
      </div>
      
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px"}}>
      <a href="/products/samsung-galaxy-a54-oled-display" style={{textDecoration: "none", color: "inherit", border: "1px solid #E4E2DD", borderRadius: "8px", background: "#fff", padding: "20px", display: "block"}}>
      <span style={{display: "inline-block", background: "#E9F5EE", color: "#2E7D53", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px", marginBottom: "12px"}}>In Stock</span>
      <div style={{aspectRatio: "1", background: "repeating-linear-gradient(45deg,#F0EEE9,#F0EEE9 10px,#F7F6F3 10px,#F7F6F3 20px)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "12px", color: "#5B5E66", marginBottom: "16px", textAlign: "center", padding: "16px"}}>product photo</div>
      <div style={{fontSize: "13px", color: "#5B5E66", marginBottom: "4px"}}>Fits Galaxy A54 / A546</div>
      <h3 style={{fontSize: "16px", fontWeight: "600", margin: "0 0 12px", lineHeight: "1.4"}}>Samsung Galaxy A54 OLED Display</h3>
      <div style={{fontSize: "14px", color: "#5B5E66"}}>Retail LKR 12,500</div>
      <div style={{fontSize: "22px", fontWeight: "700", color: "#B8892B", fontVariantNumeric: "tabular-nums"}}>from LKR 9,800</div>
      </a>
      </div>
      
      <div style={{border: "1px dashed #E4E2DD", borderRadius: "8px", padding: "32px", textAlign: "center", marginTop: "32px"}}>
      <p style={{fontSize: "14px", color: "#5B5E66", margin: "0 0 12px"}}>More listings are added every week. Looking for a part not shown here?</p>
      <a href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27m%20looking%20for%20a%20part%20that%27s%20not%20listed%20on%20the%20site." style={{color: "#B8892B", fontWeight: "600", textDecoration: "none", fontSize: "14px"}}>Ask us on WhatsApp →</a>
      </div>
      </main>
      </div>
    </>
  );
}
