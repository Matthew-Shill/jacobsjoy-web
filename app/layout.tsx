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

const title = "Jacob’s Joy, Inc. | Free Carnival Days for Children and Families";
const description =
  "Jacob’s Joy, Inc. brings free carnival days to children’s hospitals, camps, and family retreats. Games, prizes, and family time for kids, siblings, and parents.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
