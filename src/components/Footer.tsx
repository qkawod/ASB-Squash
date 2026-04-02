import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white text-slate-900 pt-12 pb-10 border-t border-slate-200 selection:bg-slate-900 selection:text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                    
                    {/* Left Side: Logo & Minimal Contact */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo/logo_asbsquash.svg"
                                alt="ASB Squash"
                                className="h-[32px] w-auto brightness-0"
                            />
                        </Link>
                         <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-medium tracking-wide">
                            <span className="whitespace-nowrap"><span className="text-slate-900 font-semibold uppercase">주식회사 글로브</span></span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="whitespace-nowrap"><span className="text-slate-400">사업자등록번호.</span> 249-88-01280</span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="whitespace-nowrap"><span className="text-slate-400">T.</span> 070-4144-7837</span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="whitespace-nowrap"><a href="mailto:info@asbsquash.co.kr" className="hover:text-slate-900 transition-colors">info@asbsquash.co.kr</a></span>
                             <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="whitespace-nowrap text-slate-400 font-normal">경기도 성남시 분당구 황새울로200번길 36, 동부루트빌딩 1010,1011</span>
                        </div>
                    </div>

                    {/* Right Side: Navigation & Copyright */}
                    <div className="flex flex-col items-start md:items-end gap-3 md:gap-4 mt-4 md:mt-0">
                        <div className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-4 md:mt-1" suppressHydrationWarning>
                            © {new Date().getFullYear()} ASBSQUASH CO.,LTD. ALL RIGHTS RESERVED.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
