"use client"

import { MapPin, Navigation, Clock } from "lucide-react"

export default function SaltLocation() {
  const distances = [
    { place: "سيدي عبد الرحمن", time: "15 دقيقة" },
    { place: "مطار العلمين الدولي", time: "40 كم" },
    { place: "مدينة العلمين الجديدة", time: "80 كم" },
    { place: "مرسى مطروح", time: "140 كم" },
    { place: "طريق الفوكا الجديد", time: "مباشر" },
    { place: "القاهرة الجديدة", time: "280 كم" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              الموقع الاستراتيجي
            </h2>
            <p className="text-lg text-muted-foreground">
              الكيلو 185 طريق الإسكندرية – مرسى مطروح – قلب رأس الحكمة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="https://prod-images.nawy.com/processed/compound_image/image/5977/default.webp"
                alt="SALT North Coast - الموقع"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-foreground">سهولة الوصول</h3>
                  <p className="text-muted-foreground text-sm">على الطريق الساحلي الدولي وبالقرب من طريق الفوكا</p>
                </div>
              </div>
              {distances.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{item.place}</span>
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
