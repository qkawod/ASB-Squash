import { Metadata } from "next";

export const metadata: Metadata = {
  title: "References",
  description: "View our global and domestic project references across the world.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/references",
  },
  openGraph: {
    title: "References | ASB Squash",
    description: "ASB Squash 시공 실적",
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
