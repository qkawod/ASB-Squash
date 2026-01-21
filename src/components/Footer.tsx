import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-[#555555] text-white pt-[32px] pb-3 border-t border-gray-600">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-1 text-sm text-gray-400">
                    {/* Header with Logo */}
                    <div className="flex items-center gap-3">
                        <div>
                            <img
                                src="/logo/logo_asbsquash.svg"
                                alt="ASB Squash"
                                className="h-[44px] w-auto relative top-[1px]"
                            />
                        </div>
                    </div>

                    {/* Address Info */}
                    <div className="flex flex-col leading-tight mt-1">
                        <p>본사 : 경기도 성남시 분당구 판교역로 152, 1103</p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-x-6 gap-y-0 leading-tight">
                        <p>T. 031-717-1180</p>
                        <p>F. 031-717-1181</p>
                        <p>E-mail : globe@globecorp.co.kr</p>
                    </div>

                    {/* Copyright */}
                    <div className="mt-1 text-xs text-gray-500 leading-tight">
                        COPYRIGHT © 2021 Globe Co.,Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
