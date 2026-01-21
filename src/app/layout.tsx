import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://asb-squash.vercel.app"),
  title: {
    template: "%s | ASB Squash Courts",
    default: "ASB Squash Courts - Global Leader in Squash Court Innovation",
  },
  description: "ASB Squash Courts is the world leader in squash court innovation, manufacturing, and installation. Explore our Glass Courts, System Courts, and advanced sports flooring technology. 스쿼시 코트 제작 및 설치의 글로벌 리더.",
  keywords: [
    "ASB Squash",
    "Squash Court",
    "Glass Court",
    "Squash Court Manufacturer",
    "Squash Court Construction",
    "Movable Side Walls",
    "GlassFloor",
    "Sports Flooring",
    "스쿼시",
    "스쿼시 코트",
    "ASB 스쿼시",
    "유리 코트",
    "스쿼시 경기장",
    "가변형 벽체",
    "스포츠 바닥재"
  ],
  openGraph: {
    title: "ASB Squash Courts - Global Leader in Squash Court Innovation",
    description: "The world leader in squash court innovation. Premium Glass Courts and System Courts.",
    url: "https://asb-squash.vercel.app",
    siteName: "ASB Squash Courts",
    images: [
      {
        url: "/logosquashcourt_s.png",
        width: 800,
        height: 600,
        alt: "ASB Squash Courts Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASB Squash Courts",
    description: "The world leader in squash court innovation.",
    images: ["/logosquashcourt_s.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification=YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "naver-site-verification": "YOUR_NAVER_VERIFICATION_CODE",
    },
  },
  alternates: {
    canonical: "https://asb-squash.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={`${inter.className} bg-white text-slate-900 break-keep`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ASB Squash Courts",
              "url": "https://asb-squash.vercel.app",
              "logo": "https://asb-squash.vercel.app/logosquashcourt_s.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82-31-717-1180",
                "contactType": "customer service",
                "areaServed": "KR",
                "availableLanguage": ["Korean", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "152, Pangyoyeok-ro, Bundang-gu",
                "addressLocality": "Seongnam-si",
                "addressRegion": "Gyeonggi-do",
                "postalCode": "13529",
                "addressCountry": "KR"
              },
              "sameAs": [
                // Add social media URLs here if available
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
