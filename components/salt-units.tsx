"use client"

import { Home, Maximize, Building } from "lucide-react"
import { trackWhatsApp } from "@/lib/tracking"

export default function SaltUnits() {
  const phoneNumber = "+201016934396"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع SALT North Coast من تطوير مصر وأريد معرفة المزيد عن الوحدات المتاحة وأنظمة السداد.")}`

  const units = [
    { type: "شاليهات", rooms: "1-3 غرف", area: "من 80م²", price: "من 10 مليون ج.م", icon: Home },
    { type: "تاون هاوس", rooms: "3-4 غرف", area: "من 150م²", price: "من 22 مليون ج.م", icon: Building },
    { type: "توين هاوس", rooms: "4 غرف", area: "من 185م²", price: "من 28 مليون ج.م", icon: Building },
    { type: "فيلات مستقلة", rooms: "4-6 غرف", area: "من 205م²", price: "من 38 مليون ج.م", icon: Maximize },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              الوحدات المتاحة
            </h2>
            <p className="text-lg text-muted-foreground">
              تنوع في الوحدات يناسب جميع الاحتياجات — من شاليهات مريحة لفيلات فاخرة
            </p>
            <p className="text-sm text-muted-foreground mt-2">* الأسعار استرشادية وقابلة للتغيير</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {units.map((unit, i) => (
              <div key={i} className="bg-muted/30 border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto bg-primary/10 flex items-center justify-center">
                    <unit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{unit.type}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{unit.rooms}</p>
                    <p>{unit.area}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-primary font-bold text-lg">{unit.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
              className="inline-block bg-primary text-white px-10 py-4 font-bold text-lg hover:bg-primary/90 transition-colors">
              اعرف أسعار اليوم عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
