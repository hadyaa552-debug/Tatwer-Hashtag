"use client"

import { Anchor, UtensilsCrossed, Dumbbell, ShoppingBag, Hotel, Sparkles, Bike, TreePalm, ShieldCheck, Waves, Car, Sun } from "lucide-react"

export default function SaltAmenities() {
  const amenities = [
    { icon: Anchor, label: "مارينا يخوت" },
    { icon: Hotel, label: "فندق 5 نجوم" },
    { icon: Sparkles, label: "سبا ومساج" },
    { icon: UtensilsCrossed, label: "مطاعم وكافيهات" },
    { icon: ShoppingBag, label: "منطقة تجارية" },
    { icon: Dumbbell, label: "نوادي رياضية" },
    { icon: Waves, label: "لاجون 25 فدان" },
    { icon: Bike, label: "مسارات دراجات" },
    { icon: TreePalm, label: "حدائق ومتنزهات" },
    { icon: Sun, label: "كلوب هاوس" },
    { icon: Car, label: "جراجات واسعة" },
    { icon: ShieldCheck, label: "أمن 24/7" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              المميزات والخدمات
            </h2>
            <p className="text-lg text-muted-foreground">
              منتجع متكامل الخدمات — مارينا، فندق 5 نجوم، سبا، ومنطقة تجارية وترفيهية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((item, i) => (
              <div key={i} className="bg-background p-6 text-center hover:shadow-lg transition-all duration-300 border border-border group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
