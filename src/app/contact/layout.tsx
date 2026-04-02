import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASB 스쿼시 시공 상담 및 견적 문의",
  description: "에이에스비스쿼시(asb스쿼시) 시공 견적 및 전문가 상담 요청. 나주, 마산, 울산 등 전국 스쿼시 경기장 설치부터 리노베이션까지 전문 상담원이 안내해 드립니다.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/contact",
  },
  openGraph: {
    title: "ASBSQUASH - 전문가 상담 및 시공 문의",
    description: "성공적인 스쿼시 프로젝트의 시작, ASB와 상담하세요.",
    url: "https://www.asbsquash.co.kr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
