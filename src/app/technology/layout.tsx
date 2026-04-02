import { Metadata } from "next";

export const metadata: Metadata = {
  title: "독보적 스쿼시 코트 기술력 | ASBSQUASH Technology",
  description: "실리카 샌드 충진 벽체(System 100), 전동식 가변 벽체(Movable SideWall), 충격 흡수 바닥재 등 오직 ASBSQUASH(에이에스비스쿼시)에서만 만날 수 있는 혁신 기술을 소개합니다.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/technology",
  },
  openGraph: {
    title: "ASBSQUASH - 미래를 만드는 스쿼시 기술 혁신",
    description: "스쿼시 경기장의 표준을 바꾸는 ASB의 기술적 정수.",
    url: "https://www.asbsquash.co.kr/technology",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
