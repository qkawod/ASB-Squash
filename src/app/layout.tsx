import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asbsquash.co.kr"),
  title: {
    default: "ASBSQUASH - 스쿼시 코트 및 스쿼시장 시공의 글로벌 리더",
    template: "%s | ASBSQUASH"
  },
  description: "세계 No.1 ASB 스쿼시 코트(ASBSQUASH) 공식 한국 서비스. 1976년부터 이어진 에이에스비스쿼시의 혁신 기술로 쇼글라스코트, 가변형 벽체, 시스템 코트 등 독보적인 경기 환경을 제공합니다.",
  keywords: [
    "ASBSQUASH",
    "asb스쿼시",
    "에이에스비스쿼시",
    "squash",
    "스쿼시",
    "스쿼시코트",
    "스쿼시장",
    "스쿼시 코트 시공",
    "스쿼시장 설계",
    "나주스쿼시",
    "마산스쿼시",
    "울산스쿼시",
    "Movable Side Walls",
    "GlassFloor",
    "스포츠 바닥재"
  ],
  openGraph: {
    title: "ASBSQUASH - 글로벌 No.1 스쿼시 코트 및 경기장 솔루션",
    description: "전 세계 스쿼시 코트의 표준, ASBSQUASH. 프리미엄 쇼글라스코트와 시스템 코트의 정점에 서 있는 에이에스비스쿼시를 경험하세요.",
    url: "https://www.asbsquash.co.kr",
    siteName: "ASB Squash Courts",
    images: [
      {
        url: "/ASB-1024x1024.png",
        width: 1024,
        height: 1024,
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
    images: ["/ASB-1024x1024.png"],
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
              "@type": "WebSite",
              "name": "ASBSQUASH",
              "url": "https://www.asbsquash.co.kr",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.asbsquash.co.kr/references?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ASBSQUASH (에이에스비스쿼시)",
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
                "streetAddress": "36, Hwangsaeul-ro 200beon-gil, Bundang-gu, Seongnam-si, Dongbu Root Bldg 1010,1011",
                "addressLocality": "Seongnam-si",
                "addressRegion": "Gyeonggi-do",
                "postalCode": "13595",
                "addressCountry": "KR"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": "https://www.asbsquash.co.kr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "제품소개",
                  "item": "https://www.asbsquash.co.kr/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "시공실적",
                  "item": "https://www.asbsquash.co.kr/references"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
