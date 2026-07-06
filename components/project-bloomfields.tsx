"use client"

export default function ProjectBloomfields() {
  const phoneNumber = "+201016934396"
  const projectName = "Bloomfields"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${projectName} من تطوير مصر وأريد معرفة المزيد من التفاصيل`)}`

  return (
    <section id="bloomfields" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">مدينة المستقبل – القاهرة الجديدة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Bloomfields</h2>
          <p className="text-xl text-muted-foreground">بلوم فيلدز – قلب مدينة المستقبل</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/9334/default.webp" alt="Bloomfields" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Bloomfields</p>
            <p className="text-white/80">مدينة المستقبل – القاهرة الجديدة</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              بلوم فيلدز في قلب مدينة المستقبل على مساحة 415 فدان، 10 دقائق من الجامعة الأمريكية وبالقرب من العاصمة الإدارية. مشروع سكني متكامل يضم شققاً وفيلات بتصميمات عالمية.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "415", label: "فدان" },
                { value: "10د", label: "من الجامعة الأمريكية" },
                { value: "45د", label: "من العين السخنة" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "الموقع", value: "مدينة المستقبل – على امتداد التجمع الخامس" },
              { label: "الوحدات", value: "شقق • تاون هاوس • توين هاوس • فيلات" },
              { label: "المساحات", value: "تبدأ من 80م² حتى 312م²" },
              { label: "قريب من", value: "العاصمة الإدارية • الجولدن سكوير" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["بحيرات صناعية", "مدارس دولية", "مول تجاري", "نوادي رياضية", "حدائق مركزية", "أمن 24/7", "كلوب هاوس", "مسجد"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://prod-images.nawy.com/processed/compound_image/image/9333/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/9332/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/9327/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/9328/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/9329/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/9319/default.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={src} alt={`Bloomfields ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Bloomfields</h3>
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
