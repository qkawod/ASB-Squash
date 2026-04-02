import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Learn more about the innovative ASB Squash technologies for court systems.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/technology",
  },
  openGraph: {
    title: "ASB Squash",
    description: "ASB Squash 기술 혁신",
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
