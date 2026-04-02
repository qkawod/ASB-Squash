import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white text-slate-900 pt-12 pb-10 border-t border-slate-200 selection:bg-slate-900 selection:text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col gap-8">
                    
                    {/* Row 1: Logo */}
                    <div className="flex justify-start">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo/logo_asbsquash.svg"
                                alt="ASB Squash"
                                className="h-[28px] w-auto brightness-0"
                            />
                        </Link>
                    </div>

                    {/* Row 2: Company Info & Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-4">
                        
                        {/* Company Details Block */}
                        <div className="flex flex-col gap-2">
                            {/* Line 1: Basic Business Info */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium tracking-wide">
                                <span className="whitespace-nowrap font-bold text-slate-900 uppercase">주식회사 글로브</span>
                                <span className="text-slate-300">|</span>
                                <span className="whitespace-nowrap">249-88-01280</span>
                                <span className="text-slate-300">|</span>
                                <span className="whitespace-nowrap"><span className="text-slate-400">T.</span> 070-4144-7837</span>
                                <span className="text-slate-300">|</span>
                                <span className="whitespace-nowrap"><span className="text-slate-400">E.</span> <a href="mailto:info@asbsquash.co.kr" className="hover:text-slate-900 transition-colors">info@asbsquash.co.kr</a></span>
                            </div>
                            
                            {/* Line 2: Address (Independent Line) */}
                            <div className="text-[11px] text-slate-400 font-normal tracking-wide">
                                경기도 성남시 분당구 황새울로200번길 36, 동부루트빌딩 1010,1011
                            </div>
                        </div>

                        {/* Copyright Block */}
                        <div className="flex flex-col items-start md:items-end">
                            <div className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase whitespace-nowrap" suppressHydrationWarning>
                                © {new Date().getFullYear()} ASBSQUASH CO., LTD. ALL RIGHTS RESERVED.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
