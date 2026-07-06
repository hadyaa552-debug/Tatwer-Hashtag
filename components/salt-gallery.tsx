"use client"

export default function SaltGallery() {
  const images = [
    "https://prod-images.nawy.com/processed/compound_image/image/5978/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/5979/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/5980/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/5981/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/5975/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/5977/default.webp",
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              معرض الصور
            </h2>
            <p className="text-lg text-muted-foreground">شاهد تفاصيل SALT North Coast</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={src}
                  alt={`SALT North Coast ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
