'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const HERO_IMAGES = [
    "/T-point/88.jpg",
    "/GlassCourt/228.jpg",
    "/00-story-image-nyc-public-squash.jpg.webp",
    "/55.jpg"
]

const PRODUCT_ITEMS = [
    {
        title: "ASB System40",
        subtitle: "",
        description: "기존 벽면을 활용한 고효율 패널 시스템 ASB System40은 건물 본체 벽면에 40mm 두께의 특수 패널을 직접 고정하는 방식입니다. 이 시스템은 신규 코트 설치뿐만 아니라, 스쿼시 공의 강력한 충격을 견디지 못하는 석고보드나 기타 마감재로 된 기존 코트의 리노베이션에 탁월한 성능을 발휘합니다. \"완벽한 스쿼시 벽면 제조\"라는 ASB의 기술적 도전이 집약된 솔루션입니다.",
        image: "/system40/system40_03.jpg"
    },
    {
        title: "ASB System100",
        subtitle: "",
        description: "전 세계가 인정한 독립형 클래식 코트 100mm 두께의 자립식 벽체로 구성된 ASB System100은 전 세계 스쿼시 코트의 표준으로 자리 잡은 클래식 모델입니다. 설계자와 사용자 모두로부터 견고한 시공 품질과 압도적인 내구성을 인정받아 왔습니다. 수많은 국가대표 트레이닝 센터에 설치되어 있으며, 스쿼시가 정식 종목으로 채택된 1998년 이후 모든 커먼웰스 게임의 공식 코트로 사용되고 있습니다.",
        image: "/system100/297-1024x802.jpg"
    },
    {
        title: "ASB GlassCourt",
        subtitle: "",
        description: "국제 대회와 중계에 최적화된 프리미엄 글라스 코트 ASB ShowGlassCourt는 세계 정상급 선수들이 참가하는 주요 국제 투어와 PSA 대회를 위해 설계되었습니다. 이 코트는 커먼웰스 게임과 같은 대형 이벤트의 핵심 시설로 활용되며, 특히 가변식 사이드 월 기술을 통해 단식 경기를 위한 공간을 즉시 복식 코트로 전환할 수 있는 독보적인 유연성을 자랑합니다.",
        image: "/GlassCourt/228.jpg"
    },
    {
        title: "ASB GameCourt",
        subtitle: "",
        description: "혁신적인 3면 통합 다목적 시스템 세 면의 스쿼시 코트를 나란히 배치하고 그 사이에 두 개의 가변식 사이드 월을 설치한 형태가 바로 ASB GameCourt입니다. 각 코트는 개별적으로 62.5㎡의 표준 경기 공간을 제공하지만, 벽체를 이동시키면 순식간에 187㎡에 달하는 거대한 다목적 공간으로 변신합니다. 공간의 효율성을 극대화하려는 현대 레저 시설에 가장 완벽한 해답을 제시합니다.",
        image: "/GameCourt/b_27.jpg"
    },
    {
        title: "ASB TPoint",
        subtitle: "",
        description: "도심 속 일상을 바꾸는 스마트 아웃도어 코트 우리는 \"숨겨진\" 실내 공간에 있던 스쿼시를 도심의 탁 트인 야외로 끌어내면, 더 많은 사람이 이 건강하고 즐거운 소셜 스포츠를 접하게 될 것이라 믿습니다. ASB TPoint는 아름다운 디자인과 혁신적인 전자 제어 기술이 결합한 스마트 코트로, 기존에 없던 새롭고 흥미진진한 스포츠 경험을 도시 곳곳에 선사합니다.",
        image: "/T-point/88.jpg"
    },
    {
        title: "ASB RainbowCourt",
        subtitle: "",
        description: "시각적 혁신을 통한 트레이닝의 진화 다양한 컬러 구성을 지원하는 ASB RainbowCourt는 전 세계 스쿼시계에 지속적이고 강력한 영향을 미쳐왔습니다. 이 제품이 시장에 출시된 이후, 세계 선수권 대회와 월드컵, 각국 국가대표 챔피언십 등 메이저 대회들이 레인보우 코트 위에서 치러지며 그 성능과 상징성을 증명해 내고 있습니다.",
        image: "/b_106.jpg"
    }
]

export default function ProductsPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Custom Hero Slider */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                {HERO_IMAGES.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url('${img}')` }}
                    />
                ))}

                {/* Overlay for text readability (Text Removed) */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10" />
            </section>

            {/* Product List Section with Spacing */}
            <div className="container mx-auto px-4 py-24 space-y-24">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 break-keep">
                        ASBSQUASH의 <span className="text-[#C62828]">기술 혁신</span> 제품군
                    </h1>
                    <p className="text-xl text-slate-600 max-w-4xl leading-relaxed font-medium break-keep">
                        쇼글라스코트(ShowGlassCourt)부터 가변형 벽체(Movable SideWall)까지, 에이에스비스쿼시(asb스쿼시)는 지난 수십 년간 스쿼시 코트의 새로운 기준을 제시해 왔습니다. 세계 스쿼시 연맹(WSF)과 프로스쿼시연맹(PSA)의 엄격한 기준을 충족하는 최첨단 시스템을 만나보십시오.
                    </p>
                </div>
                {PRODUCT_ITEMS.map((product, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image Side */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={index === 0 ? undefined : { opacity: 1, scale: 1 }}
                            animate={index === 0 ? { opacity: 1, scale: 1 } : undefined}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                <div className="group relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 cursor-pointer">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            className="w-full md:w-1/2 space-y-6 pt-4"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                            whileInView={index === 0 ? undefined : { opacity: 1, x: 0 }}
                            animate={index === 0 ? { opacity: 1, x: 0 } : undefined}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index === 0 ? 0.2 : 0.2 }}
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
                                    {product.title}
                                </h2>
                                {product.subtitle && (
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                        {product.subtitle}
                                    </p>
                                )}
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed font-medium whitespace-pre-line break-keep">
                                {product.description}
                            </p>

                            <Link
                                href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors text-sm tracking-wide"
                            >
                                SEE DETAILS
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
