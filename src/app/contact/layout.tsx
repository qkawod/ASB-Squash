import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ASB Squash team for consultations and quotes.",
  alternates: {
    canonical: "https://www.asbsquash.co.kr/contact",
  },
  openGraph: {
    title: "Contact | ASB Squash",
    description: "ASB Squash 문의하기",
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
