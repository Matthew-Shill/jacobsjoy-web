import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site, socials } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

const title = "Jacob’s Joy, Inc. | Carnivals, Retreats, and Every1Camp";
const description =
  "Jacob’s Joy provides free carnival days at children’s hospitals, free family retreats, and supports free sports camps for children with disabilities through a partnership with Every1Camp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.hostedUrl),
  title,
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.hostedUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jacob with his mom and dad, and the Jacob’s Joy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: "+1-585-451-6244",
  description: site.tagline,
  nonprofitStatus: "Nonprofit501c3",
  taxID: site.ein,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: "Pittsford",
    addressRegion: "NY",
    postalCode: "14534",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: socials.map((social) => social.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
