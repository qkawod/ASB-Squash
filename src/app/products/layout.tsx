import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Explore the range of high-quality ASB Squash courts and flooring systems.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/products",
  },
  openGraph: {
    title: "ASB Squash",
    description: "ASB Squash 제품 소개",
    url: "https://www.asbsquash.co.kr/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
