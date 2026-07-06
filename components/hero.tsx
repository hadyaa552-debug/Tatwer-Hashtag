"use client"

import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://prod-images.nawy.com/processed/compound_image/image/5969/high.webp')" }}>
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-4 text-center lg:text-right">
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 tracking-wide">
                  رأس الحكمة — الساحل الشمالي
                </span>
                <h1 className="text-5xl font-bold text-white leading-tight lg:text-7xl">
                  <span className="text-primary block mb-3">SALT</span>
                  <span className="text-3xl lg:text-4xl font-medium">Experience The Salt Life</span>
                </h1>
                <p className="text-lg lg:text-xl font-normal text-white/90 mb-3">
                  أحدث مشاريع تطوير مصر على الساحل الشمالي
                </p>
                <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  منتجع فاخر على 294 فدان في قلب رأس الحكمة — شاطئ 830 متر، مارينا عالمية، فندق 5 نجوم، ولاجونات كريستالية على 25 فدان
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  { href: "#salt", label: "SALT" },
                  { href: "#marina-towers", label: "Marina Towers" },
                  { href: "#bloomfields", label: "Bloomfields" },
                ].map((btn, i) => (
                  <a key={i} href={btn.href}
                    className="border border-white/50 text-white/80 hover:bg-white/10 px-3 py-2.5 text-sm text-center transition-colors">
                    {btn.label} ↓
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: "294", label: "فدان" },
                  { value: "830م", label: "شاطئ خاص" },
                  { value: "90%", label: "إطلالة بحر" },
                ].map((stat, i) => (
                  <div key={i} className={`text-center lg:text-right space-y-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                    <div className="text-3xl lg:text-4xl font-semibold text-primary">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-full max-w-lg mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
