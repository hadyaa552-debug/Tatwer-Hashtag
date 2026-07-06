"use client"

import { MapPin, Building2, Home, Waves } from "lucide-react"

export default function SaltOverview() {
  const highlights = [
    { icon: MapPin, title: "الموقع", description: "الكيلو 185 – رأس الحكمة – الساحل الشمالي" },
    { icon: Building2, title: "المساحة", description: "294 فدان" },
    { icon: Waves, title: "الشاطئ", description: "830 متر على البحر المتوسط" },
    { icon: Home, title: "التسليم", description: "2027 – تشطيب سوبر لوكس" },
  ]

  return (
    <section id="salt" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="relative w-full aspect-square lg:aspect-[4/5] overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="https://prod-images.nawy.com/processed/compound_image/image/5976/default.webp"
                alt="SALT North Coast – منتجع فاخر على البحر المتوسط"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-right order-1 lg:order-2">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">المشروع الرئيسي</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                نبذة عن <span className="text-primary">SALT</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">SALT</span> أحدث مشاريع تطوير مصر على الساحل الشمالي — منتجع ساحلي فاخر في قلب رأس الحكمة على مساحة 294 فدان، مصمم على مصاطب متدرجة بارتفاعات من 9 لـ 33 متر فوق سطح البحر.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  90% من الوحدات بإطلالة بحر مباشرة، مع لاجونات كريستالية على 25 فدان، مارينا عالمية، فندق 5 نجوم، ومنطقة تجارية وترفيهية متكاملة.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="bg-muted/30 p-4 lg:p-6 text-right hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base lg:text-lg font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
