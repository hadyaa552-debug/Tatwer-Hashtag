"use client"

export default function ProjectMarinaTowers() {
  const phoneNumber = "+201016934396"
  const projectName = "Marina Towers IL Monte Galala"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${projectName} من تطوير مصر وأريد معرفة المزيد من التفاصيل`)}`

  return (
    <section id="marina-towers" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">جبل الجلالة — العين السخنة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Marina Towers</h2>
          <p className="text-xl text-muted-foreground">أبراج مارينا تاورز — IL Monte Galala</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="/images/ilmonte/aerial-sunset.webp" alt="Marina Towers IL Monte Galala" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Marina Towers</p>
            <p className="text-white/80">IL Monte Galala — العين السخنة</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              أول أبراج سكنية فندقية فاخرة على البحر الأحمر مباشرة بارتفاع 22 دور على جبل الجلالة. 10 أبراج بإدارة Marriott International، مارينا عالمية IGY تسع +150 يخت، ومركز مؤتمرات دولي.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "10", label: "أبراج" },
                { value: "22", label: "دور" },
                { value: "+150", label: "يخت بالمارينا" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "الموقع", value: "جبل الجلالة – العين السخنة – البحر الأحمر" },
              { label: "الوحدات", value: "ستوديو • 1-3 غرف • لوفت • بنتهاوس" },
              { label: "التشطيب", value: "تشطيب كامل بإطلالة بانورامية على البحر" },
              { label: "الإدارة", value: "Marriott International – خدمات فندقية عالمية" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["إدارة Marriott", "مارينا IGY", "22 دور ارتفاع", "إطلالة بانورامية", "ممشى سياحي 1 كم", "مركز مؤتمرات", "تشطيب كامل", "خدمات فندقية 24/7"].map((f, i) => (
            <div key={i} className="bg-muted/30 p-4 text-center text-sm text-muted-foreground font-medium">{f}</div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "/images/ilmonte/gallery-main.webp",
              "/images/ilmonte/payment-towers.jpeg",
              "/images/ilmonte/villa-1.webp",
              "/images/ilmonte/villa-2.webp",
              "/images/ilmonte/amenities.webp",
              "/images/ilmonte/masterplan.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={src} alt={`Marina Towers ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Marina Towers</h3>
          <p className="text-white/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
