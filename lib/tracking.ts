declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackFormLead() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18301107500/xrB2CNrNr8wcEKz60pZE",
      value: 1.0,
      currency: "EGP",
    })
  }
}

export function trackWhatsApp() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18301107500/ArsGCN3Nr8wcEKz60pZE",
      value: 1.0,
      currency: "EGP",
    })
  }
}

export function trackCall() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18301107500/f1j5CNjOr8wcEKz60pZE",
      value: 1.0,
      currency: "EGP",
    })
  }
}
