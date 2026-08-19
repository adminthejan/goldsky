/**
 * The shop's real location. Query uses the exact name on its Google
 * Business Profile ("Gold Sky Electronics" — the registered listing name,
 * distinct from the site's "GoldSky" brand string) plus its Plus Code, so
 * both the embed and the directions link resolve to the actual verified
 * pin rather than a geocoded guess at a street address. No Maps API key
 * needed for either — `output=embed` and the `/maps/dir` web endpoint are
 * both plain, keyless Google Maps URLs.
 */
const SHOP_QUERY = "Gold Sky Electronics, R7X8+M92, Ratnapura Road, Eheliyagoda";
const ENCODED_QUERY = encodeURIComponent(SHOP_QUERY);

export const SHOP_PLUS_CODE = "R7X8+M92";
export const SHOP_ADDRESS_LINE = "Ratnapura Road, Eheliyagoda, Ratnapura District, Sri Lanka";
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_QUERY}`;

export default function LocationMap({
  ratio = "4/3",
  rounded = "rounded-md",
  className = "",
}: {
  ratio?: string;
  rounded?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${rounded} ${className}`} style={{ aspectRatio: ratio }}>
      <iframe
        src={`https://www.google.com/maps?q=${ENCODED_QUERY}&output=embed`}
        title="GoldSky (Gold Sky Electronics) on Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
