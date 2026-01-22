import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <div className="mb-4">
                        <Link href="/">
                            <img
                                src="/logo/logo_asbsquash.svg"
                                alt="ASB Squash"
                                className="h-[40px] w-auto opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-8 text-[13px] font-bold tracking-widest text-[#999999]">
                        <Link href="/products" className="hover:text-white transition-colors">
                            PRODUCTS
                        </Link>
                        <Link href="/technology" className="hover:text-white transition-colors">
                            TECHNOLOGY
                        </Link>
                        <Link href="/references" className="hover:text-white transition-colors">
                            REFERENCES
                        </Link>
                        <Link href="/company" className="hover:text-white transition-colors">
                            COMPANY
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            CONTACT
                        </Link>
                    </nav>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[13px] text-[#555555] font-medium leading-relaxed max-w-4xl text-center">
                        <span className="whitespace-nowrap">Tel : 031-717-1180</span>
                        <span className="hidden sm:inline border-r border-[#333333] h-3 mx-2"></span>
                        <span className="whitespace-nowrap">Fax : 031-717-1181</span>
                        <span className="hidden sm:inline border-r border-[#333333] h-3 mx-2"></span>
                        <span className="whitespace-nowrap">globe@globecorp.co.kr</span>
                        <span className="hidden sm:inline border-r border-[#333333] h-3 mx-2"></span>
                        <span className="whitespace-nowrap">경기도 성남시 분당구 판교역로 152, 1103</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-[11px] text-[#333333] font-bold tracking-wider uppercase">
                        COPYRIGHT © 2021 Globe Co.,Ltd. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </footer>
    );
}
