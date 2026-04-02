import { Metadata } from "next";

export const metadata: Metadata = {
  description: "ASB Squash(에이에스비스쿼시) 기업 역사 및 브랜드 철학 소개.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/company",
  },
  openGraph: {
    title: "ASB Squash",
    description: "ASB Squash 기업 소개",
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
