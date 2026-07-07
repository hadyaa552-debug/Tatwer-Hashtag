"use client"

import { CreditCard, Calendar, CheckCircle } from "lucide-react"
import { trackWhatsApp, trackCall } from "@/lib/tracking"

export default function SaltPayment() {
  const phoneNumber = "+201016934396"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بأنظمة السداد في SALT North Coast من تطوير مصر")}`

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              أنظمة السداد
            </h2>
            <p className="text-lg text-muted-foreground">خطط دفع مرنة تناسب الجميع</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-background border border-border p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">النظام الأول</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-bold text-foreground">10%</span> مقدم</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">تقسيط على <span className="font-bold text-foreground">7 سنوات</span></span>
                </div>
              </div>
            </div>

            <div className="bg-background border-2 border-primary p-8 hover:shadow-xl transition-all duration-300 relative">
              <span className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1">الأكثر طلباً</span>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">النظام الثاني</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-bold text-foreground">10%</span> مقدم</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-bold text-foreground">5%</span> بعد 3 شهور</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">تقسيط على <span className="font-bold text-foreground">8 سنوات</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-muted-foreground">جدية حجز: <span className="font-bold text-foreground">100,000 جنيه</span></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
                className="bg-primary text-white px-10 py-4 font-bold text-lg hover:bg-primary/90 transition-colors">
                احجز وحدتك الآن
              </a>
              <a href={`tel:${phoneNumber}`} onClick={trackCall}
                className="border-2 border-primary text-primary px-10 py-4 font-bold text-lg hover:bg-primary hover:text-white transition-colors">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
