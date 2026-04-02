import { Metadata } from "next";

export const metadata: Metadata = {
  title: "스쿼시 소식 및 업계 동향 | ASBSQUASH News",
  description: "에이에스비스쿼시(asb스쿼시)가 전하는 최신 스쿼시 뉴스, 경기장 시공 사례 업데이트, 글로벌 스쿼시 업계의 최신 트렌드를 확인하세요.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/news",
  },
  openGraph: {
    title: "ASBSQUASH - 최신 뉴스 및 정보를 확인하세요",
    description: "새로운 프로젝트부터 기술 혁신까지, ASB의 모든 것.",
    url: "https://www.asbsquash.co.kr/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
