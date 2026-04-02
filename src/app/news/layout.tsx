import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Stay up to date with the latest ASB Squash news and info.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/news",
  },
  openGraph: {
    title: "ASB Squash",
    description: "ASB Squash 최신 소식",
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
