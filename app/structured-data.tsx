export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "تطوير مصر – SALT North Coast",
    description: "SALT سولت الساحل الشمالي من تطوير مصر – منتجع فاخر في رأس الحكمة. شاليهات وفيلات بإطلالة بحر مباشرة.",
    telephone: "+201016934396",
    address: {
      "@type": "PostalAddress",
      addressLocality: "القاهرة",
      addressCountry: "EG",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
