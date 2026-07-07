"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18301107500/xrB2CNrNr8wcEKz60pZE",
        value: 1.0,
        currency: "EGP",
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-lg">
        <CheckCircle className="w-20 h-20 text-primary mx-auto" />
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">شكراً لتواصلك!</h1>
        <p className="text-lg text-muted-foreground">تم استلام بياناتك بنجاح وسيتواصل معك فريقنا في أقرب وقت</p>
        <Link href="/" className="inline-block bg-primary text-white px-8 py-3 font-bold hover:bg-primary/90 transition-colors">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}
