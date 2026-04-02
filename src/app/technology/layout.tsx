import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "Learn more about the innovative ASB Squash technologies for court systems.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/technology",
  },
  openGraph: {
    title: "Technology | ASB Squash",
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
