'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react'

const slides = [
    {
        id: 1,
        title: "Single Court",
        description: "Standard configuration for match play.",
        video: "/ASB_SQUASH_Movable_walls_RevB.mp4"
    },
    {
        id: 2,
        title: "Doubles Court",
        description: "Movable walls expand width for doubles matches.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
]

export function TechSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Video Section */}
                    <div className="md:w-1/2 relative h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {slides[currentSlide].video ? (
                                    <video
                                        key={slides[currentSlide].video}
                                        src={slides[currentSlide].video}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls={false}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Text Content */}
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-2 text-slate-500 font-bold tracking-wider text-xs uppercase">
                            MOVABLE WALLS
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">ASB Movable SideWall</h2>
                        <p className="text-slate-600 text-base mb-8 leading-relaxed break-keep">
                            수 톤에 달하는 거대한 벽체가 버튼 하나로 움직입니다. ASB의 이동식 벽체 시스템은 항공기 격납고나 정밀 기계에 사용되는 전동 구동 장치를 적용하여, 오차 없이 부드럽게 공간을 변형시킵니다.
                        </p>

                        <div className="space-y-6 border-l-2 border-red-500 pl-6">
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Air Cushion Effect</h4>
                                <p className="text-slate-600 text-xs">벽체 이동 시 바닥 손상을 방지하기 위해 미세하게 띄워서 이동하는 기술이 적용됩니다.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Automation</h4>
                                <p className="text-slate-600 text-xs">수동 조작 없이 센서와 모터를 통해 안전하고 정확하게 설정된 위치로 이동합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
