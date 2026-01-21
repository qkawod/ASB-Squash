'use client'

import { Hero } from "@/components/Hero"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

const TECHNOLOGY_ITEMS = [
    {
        title: "Wall System",
        subtitle: "System 100",
        description: "ASB 기술의 정수는 '채움'에 있습니다. 벽체 내부의 빈 공간을 허용하지 않습니다. 고압으로 압축된 드라이 실리카 샌드를 벽체 내부에 빈틈없이 채워 넣는 공법은 콘크리트 벽과 동일한 밀도를 구현합니다.",
        benefits: [
            { title: "Void-Free Structure", desc: "공이 벽 어디에 맞아도 100% 균일한 반발력을 제공합니다." },
            { title: "Sound Absorption", desc: "모래 입자가 타격 시 발생하는 진동과 소음을 흡수하여, 시끄러운 울림 없는 쾌적한 경기 환경을 만듭니다." }
        ],
        image: "/system100/15.jpg"
    },
    {
        title: "ASB GlassWall",
        subtitle: "MAINTENANCE-FREE INNOVATION",
        description: "기존 스쿼시 코트의 관리 문제는 이제 과거의 일입니다. ASB GlassWall은 특수 코팅된 하이엔드 매트 유리 패널을 적용하여, 설치 직후부터 별도의 유지보수가 필요 없습니다. 습도나 충격에 강해 실내외 어디서든 변함없는 내구성을 자랑하며, 혁신적인 피팅 시스템으로 기존 코트 리노베이션에도 최적화된 솔루션입니다.",
        benefits: [
            { title: "UNCOMPROMISED DURABILITY", desc: "반복되는 공의 충격에도 마모되거나 손상되지 않는 영구적인 내구성을 제공하며, 특수 매트 마감으로 빛 반사와 눈부심을 완벽히 차단합니다." },
            { title: "LIMITLESS DESIGN & HYGIENE", desc: "모든 RAL 컬러 및 그래픽 구현이 가능해 브랜딩 활용도가 높으며, 스쿼시 공 자국이 거의 남지 않아 물과 스폰지만으로도 손쉽게 청결을 유지할 수 있습니다." }
        ],
        image: "/GlassCourt/psa.jpg"
    },
    {
        title: "ASB Movable SideWall",
        subtitle: "Movable Walls",
        description: "수 톤에 달하는 거대한 벽체가 버튼 하나로 움직입니다. ASB의 이동식 벽체 시스템은 항공기 격납고나 정밀 기계에 사용되는 전동 구동 장치를 적용하여, 오차 없이 부드럽게 공간을 변형시킵니다.",
        benefits: [
            { title: "Air Cushion Effect", desc: "벽체 이동 시 바닥 손상을 방지하기 위해 미세하게 띄워서 이동하는 기술이 적용됩니다." },
            { title: "Automation", desc: "수동 조작 없이 센서와 모터를 통해 안전하고 정확하게 설정된 위치로 이동합니다." }
        ],
        image: "/ASB_SQUASH_Movable_walls_RevB.mp4"
    },
    {
        title: "ASB Tinboard",
        subtitle: "Tin Board",
        description: "스쿼시에서 틴은 테니스의 네트와 같습니다. ASB의 틴 보드는 2mm 두께의 고강도 알루미늄 프로파일로 설계되어, 공이 닿는 순간 심판과 선수가 즉각적으로 인지할 수 있는 명확한 금속성 타격음을 생성합니다.",
        benefits: [
            { title: "Acoustic Accuracy", desc: "'로우 볼' 발생 시 특유의 소리를 통해 오심 없는 정확한 경기 진행을 돕습니다." },
            { title: "Multi-Height Adjustment", desc: "일반 경기(48cm), PSA 프로 토너먼트(43cm), 복식 경기(33cm) 등 경기 방식에 맞춰 단 몇 초 만에 높이를 정밀하게 조절할 수 있습니다." }
        ],
        image: "/b_136.jpg"
    },
    {
        title: "ASB SportsFloor",
        subtitle: "Flooring System",
        description: "스쿼시는 그 어떤 스포츠보다 급격한 가속과 감속이 반복됩니다. ASB의 바닥재는 단순한 탄성이 아닌, 선수의 관절에 가해지는 충격을 분산시키는 생체역학적 하부 구조를 가지고 있습니다.",
        benefits: [
            { title: "Shock Absorption", desc: "무릎과 발목에 가해지는 하중을 효과적으로 흡수하여 부상 위험을 최소화합니다." },
            { title: "Controlled Friction", desc: "미끄러짐과 멈춤 사이의 최적의 마찰 계수를 공학적으로 계산하여 설계했습니다." }
        ],
        image: "/b_65.jpg"
    },
    {
        title: "ASB GlassBackWall",
        subtitle: "SAFETY GLASS WALL",
        description: "스쿼시 코트의 뒷벽은 관중과 소통하는 창이자, 선수의 안전을 지키는 방패입니다. ASB는 12mm 강화 안전 유리를 기반으로, 설치 환경에 따라 견고한 알루미늄 프레임 방식과 시야 개방감을 극대화한 유리 핀 지지 방식을 모두 제공합니다.",
        benefits: [
            { title: "Tailored Structural Engineering", desc: "알루미늄 기둥으로 내구성을 높인 'ASB Pro' 모델과, 30cm 유리 핀으로 지지하여 구조물 없는 시야를 제공하는 'Freestanding' 모델을 통해 모든 코트 환경에 최적화된 솔루션을 제시합니다." },
            { title: "Absolute Safety", desc: "WSF 규격을 완벽히 충족하는 12mm 강화 유리를 사용하여, 격렬한 경기 중 선수가 강하게 충돌하더라도 파손을 방지하고 절대적인 안전을 보장합니다." }
        ],
        image: "/b_185.jpg"
    }
]

const HERO_IMAGES = [
    "/T-point/GS033244.jpg.webp",
    "/NET04238.jpg",
    "/b_456.jpg"
]

export default function TechnologyPage() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(timer)
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

                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10" />
            </section>

            {/* Header Section Removed */}<div className="h-72"></div>

            {/* Content List Section */}
            <div className="container mx-auto px-4 pb-32 space-y-32">
                {TECHNOLOGY_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        id={item.title.toLowerCase().replace(/\s+/g, '-')}
                        className={`flex flex-col md:flex-row items-start gap-12 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image Side */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="group relative rounded-xl overflow-hidden shadow-2xl bg-slate-200 flex items-center justify-center">
                                {item.image ? (
                                    item.image.endsWith('.mp4') ? (
                                        <video
                                            src={item.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-auto transform transition-transform duration-700 ${index === 0 ? 'scale-110 group-hover:scale-115' :
                                                index === 1 ? 'scale-105 group-hover:scale-110' :
                                                    'group-hover:scale-105'
                                                }`}
                                        />
                                    )
                                ) : (
                                    <div className="text-center p-6">
                                        <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-500 font-medium font-bold">Image Placeholder</p>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            className="w-full md:w-1/2 space-y-6 pt-4"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                    {item.subtitle}
                                </p>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed font-medium whitespace-pre-line break-keep">
                                {item.description}
                            </p>

                            <div className="grid sm:grid-cols-1 gap-4 pt-2">
                                {item.benefits.map((benefit, bIndex) => (
                                    <div key={bIndex} className="border-l-4 border-red-600 pl-4 py-1">
                                        <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-1">{benefit.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed break-keep">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
