import type React from "react"
import type { Metadata } from "next"
import { Cairo, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import StructuredData from "./structured-data"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SALT North Coast سولت الساحل الشمالي | تطوير مصر – شاليهات وفيلات رأس الحكمة",
  description:
    "SALT سولت الساحل الشمالي من تطوير مصر – منتجع فاخر في رأس الحكمة على 294 فدان بشاطئ 830 متر. شاليهات وفيلات بإطلالة بحر مباشرة، مارينا عالمية، فندق 5 نجوم، لاجونات 25 فدان. مقدم 10% وتقسيط حتى 8 سنوات. + Marina Towers المونت جلالة بإدارة Marriott و Bloomfields مدينة المستقبل.",
  keywords: [
    "SALT",
    "سولت",
    "SALT North Coast",
    "سولت الساحل الشمالي",
    "تطوير مصر",
    "Tatweer Misr",
    "رأس الحكمة",
    "الساحل الشمالي",
    "شاليهات رأس الحكمة",
    "فيلات الساحل الشمالي",
    "SALT Tatweer Misr",
    "Marina Towers",
    "المونت جلالة",
    "IL Monte Galala",
    "Bloomfields",
    "بلوم فيلدز",
    "مدينة المستقبل",
    "مشاريع تطوير مصر",
    "عقارات الساحل الشمالي",
    "شاليهات للبيع",
    "فيلات للبيع الساحل",
  ],
  authors: [{ name: "تطوير مصر للتطوير العقاري" }],
  creator: "Tatweer Misr",
  publisher: "Tatweer Misr",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    title: "SALT North Coast | تطوير مصر – شاليهات وفيلات رأس الحكمة + Marina Towers + Bloomfields",
    description:
      "منتجع SALT سولت في رأس الحكمة على 294 فدان – مارينا، فندق 5 نجوم، لاجونات. مقدم 10% وتقسيط 8 سنوات. + Marina Towers بإدارة Marriott + Bloomfields مستقبل سيتي.",
    siteName: "تطوير مصر – SALT North Coast",
    images: [
      {
        url: "https://prod-images.nawy.com/processed/compound_image/image/5969/high.webp",
        width: 1200,
        height: 630,
        alt: "SALT North Coast – سولت الساحل الشمالي من تطوير مصر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SALT North Coast | تطوير مصر – رأس الحكمة",
    description: "منتجع فاخر على 294 فدان في رأس الحكمة. مقدم 10% وتقسيط 8 سنوات.",
    images: ["https://prod-images.nawy.com/processed/compound_image/image/5969/high.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Real Estate",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18301107500" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18301107500');
        `}} />
        <StructuredData />
      </head>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
