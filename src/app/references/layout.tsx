import { Metadata } from "next";

export const metadata: Metadata = {
  title: "국내외 시공 사례 - 나주, 마산, 울산 스쿼시 경기장 실적",
  description: "나주스쿼시, 마산스쿼시, 울산 문수스쿼시장 등 전국 주요 경기장의 ASBSQUASH 시공 실적을 확인하세요. 전 세계 7,500개 이상의 코트 설치 경험이 증명하는 독보적인 시공 품질입니다.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/references",
  },
  openGraph: {
    title: "ASBSQUASH - 전국 시공 프로젝트 실적",
    description: "한계를 뛰어넘는 스쿼시 코트 시공 사례를 확인하세요.",
    url: "https://www.asbsquash.co.kr/references",
  },
};

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
