import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

/* Two families, two roles. Limited weights keep the payload small on
   Indian mobile networks; next/font self-hosts and preloads both. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* Shared with the sister Aslot & Associates site, so the two brands read as
   family. Garamond proportions need a touch more size and weight than a
   neutral text serif — the scale in globals.css accounts for that. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aslotwealth.in"),
  title: "Aslot Wealth Advisor – Personalised Investment Management",
  description:
    "A family wealth practice in Surat since 1989. Goal-aligned portfolios built for the long run. ₹75 crore+ AUM, 250+ clients, 99% retention.",
  authors: [{ name: "Aslot Wealth Advisor" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: { title: "Aslot" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Aslot Wealth Advisor – Personalised Investment Management",
    description:
      "A family wealth practice in Surat since 1989. Goal-aligned portfolios built for the long run. ₹75 crore+ AUM, 250+ clients, 99% retention.",
    type: "website",
    locale: "en_IN",
    siteName: "Aslot Wealth Advisor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslot Wealth Advisor – Personalised Investment Management",
    description:
      "A family wealth practice in Surat since 1989. Goal-aligned portfolios built for the long run.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Aslot Wealth Advisor",
  description:
    "Personalised investment management and wealth advisory services in Surat, practising since 1989.",
  url: "https://aslotwealth.in",
  telephone: "+91-9328826939",
  email: "info@aslotwealth.in",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "9, Gr. Floor, West Side, Vishwakarma Society, b/h Vishwakarma Temple, Nr. ITC Building, Majura Gate",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.1817, longitude: 72.8195 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:30",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹₹",
  foundingDate: "1989",
  founder: { "@type": "Person", name: "Pragnesh Aslot" },
  areaServed: { "@type": "State", name: "Gujarat" },
  sameAs: [
    "https://www.linkedin.com/in/ishan-aslot/",
    "https://www.instagram.com/aslotwealth",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wealth Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Goal-Aligned Portfolio Planning",
          description: "Asset allocation based on life and business objectives",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Long-Term Investment Management",
          description: "Disciplined compounding and tax-efficient strategies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Risk Management",
          description:
            "Portfolio monitoring, rebalancing, and transparent reporting",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
