"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const WK = "650038c6-d085-40c0-843f-bfc5dab8c48c"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WK,
          subject: "استفسار جديد - تطوير مصر – SALT North Coast",
          from_name: "Tatweer Misr Landing",
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "لم يتم تحديده",
          "نوع الوحدة": formData.unitType || "لم يتم تحديده",
        }),
      })

      const result = await response.json()

      if (result.success) {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-18301107500/xrB2CNrNr8wcEKz60pZE",
            value: 1.0,
            currency: "EGP",
          })
        }
        toast({
          title: "تم الإرسال بنجاح!",
          description: "سنتواصل معك في أقرب وقت ممكن",
        })
        setFormData({ name: "", email: "", phone: "", unitType: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card id="contact-form" className="shadow-2xl border-0 bg-card my-0 transition-all duration-500 hover:shadow-3xl">
      <CardHeader className="pb-0 space-y-0">
        <CardTitle className="text-2xl font-bold text-foreground my-0 text-center">احجز استشارة</CardTitle>
      </CardHeader>
      <CardContent className="my-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="name"
            placeholder="الاسم الكامل *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="text-right h-11 text-sm transition-all duration-300"
          />
          <Input
            id="phone"
            type="tel"
            placeholder="رقم الهاتف * (+20 123 456 7890)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="text-right h-11 text-sm transition-all duration-300"
            dir="ltr"
          />
          <Input
            id="email"
            type="email"
            placeholder="البريد الإلكتروني (example@email.com)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-right h-11 text-sm transition-all duration-300"
            dir="ltr"
          />
          <Select
            value={formData.unitType}
            onValueChange={(value) => setFormData({ ...formData, unitType: value })}
            required
          >
            <SelectTrigger className="text-right h-11 text-sm w-full transition-all duration-300">
              <SelectValue placeholder="نوع الوحدة *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="شاليه">شاليه</SelectItem>
              <SelectItem value="تاون هاوس">تاون هاوس</SelectItem>
              <SelectItem value="توين هاوس">توين هاوس</SelectItem>
              <SelectItem value="فيلا مستقلة">فيلا مستقلة</SelectItem>
              <SelectItem value="بنتهاوس">بنتهاوس</SelectItem>
              <SelectItem value="لوفت">لوفت</SelectItem>
              <SelectItem value="ستوديو">ستوديو</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base h-12 transition-all duration-300 hover:shadow-xl"
            size="lg"
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
