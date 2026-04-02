import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASB 스쿼시 코트 제품 라인업 | 쇼글라스코트 & 시스템코트",
  description: "쇼글라스코트(ShowGlassCourt), 시스템코트(System40/100), 가변형 벽체(Movable SideWall) 등 ASBSQUASH만의 프리미엄 스쿼시 코트 기술을 확인하세요.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/products",
  },
  openGraph: {
    title: "ASBSQUASH - 최첨단 스쿼시 시스템 제품군",
    description: "세계 스쿼시 연맹(WSF) 공인 기술력의 정수.",
    url: "https://www.asbsquash.co.kr/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
