import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asbsquash.co.kr"),
  title: "ASB Squash",
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
    url: "https://www.asbsquash.co.kr",
    siteName: "ASB Squash Courts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ASB Squash Courts - Global Leader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASB Squash Courts",
    description: "The world leader in squash court innovation.",
    images: ["/og-image.png"],
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
    canonical: "https://www.asbsquash.co.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth light" suppressHydrationWarning>
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
              "url": "https://www.asbsquash.co.kr",
              "logo": "https://www.asbsquash.co.kr/ASB-1024x1024.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "070-4144-7837",
                "contactType": "customer service",
                "areaServed": "KR",
                "availableLanguage": ["Korean", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "511, Yeongdong-daero, Gangnam-gu, Trade Tower",
                "addressLocality": "Seoul",
                "addressRegion": "Seoul",
                "postalCode": "06164",
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
