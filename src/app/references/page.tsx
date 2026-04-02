'use client'

import { Hero } from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import { REFERENCES } from "@/data/references"
import { motion } from "framer-motion"

export default function ReferencesPage() {

    return (
        <div className="bg-white min-h-screen">
            <div className="relative">
                <Hero
                    video="/Squash_is_LA28BOUND.mp4"
                    imageClass="opacity-100"
                    overlayClass="hidden"
                />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
            </div>

            <div className="w-full h-[120px] bg-gradient-to-b from-slate-900 to-white"></div>

            <div className="w-full relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                <img
                    src="/asbsquashmap.png"
                    alt="ASB Squash Global Project Map"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 break-keep">
                            대한민국 및 전 세계 <span className="text-[#C62828]">시공 실적</span>
                        </h1>
                        <p className="text-slate-600 max-w-3xl text-lg leading-relaxed break-keep">
                            ASBSQUASH는 명실상부한 세계 최고의 스쿼시 코트 시공 브랜드입니다. <span className="font-semibold text-slate-900 border-b-2 border-red-200">나주스쿼시경기장, 마산합포스포츠센터, 울산 문수스쿼시경기장</span> 및 진천국가대표선수촌 등 대한민국을 대표하는 스쿼시 코트 대부분이 ASB의 기술력으로 완성되었습니다. 전 세계 70개국 이상에서 증명된 7,500개 이상의 시공 데이터가 고객님의 프로젝트 성공을 보장합니다.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REFERENCES.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    location={project.location}
                                    image={project.image}
                                    slug={project.slug}
                                    type={project.category}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
