'use client'

import { motion } from "framer-motion"
import { TrendingUp, Settings, Globe, ArrowRight, Share2, Award, Zap, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CompanyPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % 5) // 5 is the number of images
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-slate-900 min-h-screen text-slate-50 font-sans selection:bg-[#C62828] selection:text-white">

            {/* 1. Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    {[
                        "/T-point/GS033244.jpg.webp", // Existing image
                        "/Joo-Young-Na.jpg",
                        "/DSCF6165.JPG",
                        "/Miguel-Rodrigguez.jpg",
                        "/DSCF6613.jpg.webp"
                    ].map((img, index) => (
                        <div
                            key={img}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`ASB Squash Company Hero ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20"
                >
                    <div className="w-[1px] h-16 bg-white/30 mx-auto" />
                </motion.div>

                {/* Bottom Gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
            </section>


            {/* 2. Introduction Section (Who We Are) */}
            <section className="py-24 bg-white text-slate-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h3 className="text-[#C62828] font-bold text-sm tracking-widest uppercase mb-4">Introduction: Who We Are</h3>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight break-keep">
                                가장 오랜 역사와 독보적인 안정성,<br />
                                <span className="text-[#C62828]">글로벌 리더</span>의 증명
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                                <p className="break-keep">
                                    ASB SQUASH는 1976년 이래, 스쿼시 코트 제조 분야에서 명실상부한 글로벌 리더로 자리 잡았습니다.
                                </p>
                                <p className="break-keep">
                                    지난 수십 년간 전 세계에 수천 개의 코트를 설계, 공급, 설치하며 쌓아온 경험은 누구도 모방할 수 없는 ASB만의 자산입니다. 우리는 단순한 제조사가 아닙니다. 혁신적인 기술력으로 시장의 표준을 정립해 온 'Pioneer(개척자)'입니다.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image/Graphic */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative aspect-square lg:aspect-[4/3] flex items-center justify-center">
                                {/* Using History Image for Global Leadership */}
                                <img
                                    src="/asb-history-815.jpg.jpg"
                                    alt="ASB Global History"
                                    className="w-full h-auto object-contain rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* 3. Philosophy Section (Success with Partners) */}
            <section className="py-24 bg-slate-100/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h3 className="text-[#C62828] font-bold text-sm tracking-widest uppercase mb-3">Our Philosophy</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">"고객과 파트너가 우리의 성공을 만듭니다"</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C62828] group"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C62828] transition-colors duration-300">
                                <TrendingUp className="w-8 h-8 text-[#C62828] group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4 capitalize">Investment Value</h4>
                            <p className="text-slate-600 leading-relaxed break-keep">
                                ASB의 풍부한 경험과 전문성은 귀하의 투자가치를 극대화하는 가장 확실한 자산입니다.
                            </p>
                        </motion.div>

                        {/* Column 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-slate-800 group"
                        >
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors duration-300">
                                <Settings className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4 capitalize">Total Solution</h4>
                            <p className="text-slate-600 leading-relaxed break-keep">
                                품질, 기술 설계, 납기 준수, 그리고 보증 및 사후 관리에 이르기까지 압도적인 성능과 확실한 이점을 제공합니다.
                            </p>
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C62828] group"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C62828] transition-colors duration-300">
                                <Globe className="w-8 h-8 text-[#C62828] group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4 capitalize">Global Support</h4>
                            <p className="text-slate-600 leading-relaxed break-keep">
                                전 세계의 ASB 파트너들은 귀하의 든든한 지원군으로서 비즈니스 성공을 함께 실현합니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* 4. Innovation Section (Game Changers) */}
            <section className="py-24 bg-[#0f172a]">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h3 className="text-[#C62828] font-bold text-sm tracking-widest uppercase mb-3">Innovation</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">혁신으로 스포츠의 지평을 넓히다</h2>
                        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed break-keep">
                            세계 선수권 대회, PSA 월드 투어 등 메이저 대회가 ASB 쇼글라스코트에서 치러지는 것은 우연이 아닙니다. 우리는 스쿼시의 패러다임을 완전히 바꾸어 놓았습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Innovation Cards */}
                        {[
                            {
                                title: "ASB ShowGlassCourt",
                                desc: "관람형 스쿼시의 표준이자 메이저 대회의 상징",
                                img: "/projects/cairo-el-gouna/main.jpg",
                                link: "/products/asb-glasscourt"
                            },
                            {
                                title: "ASB SportsFloor",
                                desc: "충격 흡수율과 반발력이 뛰어난 프리미엄 바닥재",
                                img: "/b_65.jpg",
                                link: "/technology#asb-sportsfloor"
                            },
                            {
                                title: "ASB GlassBackWall",
                                desc: "공간 활용을 극대화하는 투명 유리 벽체",
                                img: "/projects/belgium-herentals/597.jpg",
                                link: "/technology#asb-glassbackwall"
                            },
                            {
                                title: "ASB Movable SideWall",
                                desc: "버튼 하나로 코트 규격을 조절하는 가변형 시스템",
                                img: "/projects/naju/585.jpg",
                                link: "/technology#asb-movable-sidewall"
                            }
                        ].map((item, index) => (
                            <Link href={item.link} key={index} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-300 font-medium break-keep">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* 5. History Section (Timeline) */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-0 opacity-50" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h3 className="text-[#C62828] font-bold text-3xl md:text-5xl uppercase mb-3">History</h3>
                    </div>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200" />

                        {/* Timeline Items */}
                        {[
                            { year: "1976", title: "ASB SystemCourt 출시", desc: "조립식 스쿼시 코트의 표준 정립" },
                            { year: "1979", title: "Movable SideWall 개발", desc: "다목적 공간 활용의 시초" },
                            { year: "1981", title: "ShowGlassCourt 최초 도입", desc: "British Open, 중계의 혁신" },
                            { year: "2006", title: "ASB GlassFloor 출시", desc: "세계 최초 전문 스포츠 유리 바닥재" },
                            { year: "Present", title: "Innovation Continues", desc: "지속적인 디지털 융합 및 혁신 선도" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex items-center justify-between mb-16 last:mb-0 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="w-5/12" />

                                {/* Point */}
                                <div className="z-20 w-8 h-8 rounded-full bg-[#C62828] border-4 border-white shadow-lg flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>

                                {/* Content */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="text-[#C62828] font-bold text-xl md:text-2xl block mb-2 font-mono">{item.year}</span>
                                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 font-medium break-keep">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 6. Promise & CTA Section */}
            <section className="py-32 bg-[#020617] relative">
                <div className="absolute inset-0 bg-[url('/b_344.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h3 className="text-[#C62828] font-bold text-sm tracking-widest uppercase mb-6">Our Promise</h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">품질에 대한 책임<br />평생의 파트너십</h2>

                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed break-keep">
                        철저한 품질 관리를 통해 고객이 늘 최신 기술을 누릴 수 있도록 보장하는 것, 이것이 ASB가 드리는 <span className="text-white font-bold">신뢰</span>입니다.
                        ASB SQUASH는 체계적인 사후 관리를 통해 귀하와 장기적인 파트너십을 이어갈 것을 약속드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-4 bg-[#C62828] hover:bg-[#b71c1c] text-white font-bold text-lg rounded-full transition-all hover:scale-105 shadow-xl shadow-red-900/30 flex items-center justify-center gap-2"
                        >
                            문의하기 (Contact Us) <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/references"
                            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-slate-600 hover:border-white text-white font-bold text-lg rounded-full transition-all hover:bg-white/10 flex items-center justify-center gap-2"
                        >
                            시공사례 보기 <Share2 className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
