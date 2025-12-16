import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aslot Wealth Advisor - Personalised Investment Management",
  description:
    "Three generations of trusted financial advice. Goal-aligned portfolios built for the long run. ₹50cr+ AUM, 250+ clients, 99% retention.",
  authors: [{ name: "Aslot Wealth Advisor" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Aslot",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Aslot Wealth Advisor - Personalised Investment Management",
    description:
      "Three generations of trusted financial advice. Goal-aligned portfolios built for the long run.",
    type: "website",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Aslot Wealth Advisor",
  description:
    "Personalised investment management and wealth advisory services with three generations of expertise",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  priceRange: "₹₹₹",
  foundingDate: "1989",
  founder: {
    "@type": "Person",
    name: "Pragnesh Aslot",
  },
  areaServed: "IN",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script src="https://platform.linkedin.com/in.js" type="text/javascript"></script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}