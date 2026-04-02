import { Metadata } from "next";

export const metadata: Metadata = {
  title: "에이에스비스쿼시(ASBSQUASH) 기업 소개 | 독보적 기술력",
  description: "1976년부터 이어진 ASB 스쿼시의 역사와 글로벌 리더십을 소개합니다. 세계 스쿼시 연맹(WSF) 공인 기술력과 에이에스비스쿼시(asb스쿼시)만의 혁신 가치를 확인하세요.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/company",
  },
  openGraph: {
    title: "에이에스비스쿼시(ASBSQUASH) 기업 소개",
    description: "글로벌 No.1 스쿼시 코트 제조사 ASB의 역사와 철학.",
    url: "https://www.asbsquash.co.kr/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
