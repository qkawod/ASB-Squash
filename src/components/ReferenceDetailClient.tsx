"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ProjectReference } from "@/data/references"
import { motion } from "framer-motion"

export default function ReferenceDetailClient({ project, prevSlug, nextSlug }: { project: ProjectReference, prevSlug: string, nextSlug: string }) {
    const [currentImage, setCurrentImage] = useState(project.image)

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Main Image */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                            <motion.img
                                key={currentImage} // Trigger animation on image change
                                src={currentImage}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="w-full lg:w-1/3 flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h1 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
                            {project.title} - {project.location?.split(',')[0]}
                        </h1>
                        <h2 className="text-xl font-bold text-slate-800 italic mb-6">
                            {project.subtitle || `New ASB Squash Center in ${project.location}`}
                        </h2>

                        <div className="space-y-4 mb-8 text-slate-600 leading-relaxed text-sm">
                            {project.description ? (
                                project.description.map((desc, i) => <p key={i}>{desc}</p>)
                            ) : (
                                <p>This modern center features top-tier ASB Squash Courts, designed for optimal performance and durability. A perfect environment for athletes of all levels.</p>
                            )}
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-1 gap-x-4 mb-10 text-[11px] text-slate-500 font-medium">
                            {project.details?.map((detail, i) => (
                                <div key={i} className="flex gap-1 items-center">
                                    <span>{detail.label} -</span>
                                    <span className="text-slate-700">{detail.value}</span>
                                </div>
                            ))}
                            {!project.details && (
                                <>
                                    <div className="flex gap-2"><span className="w-20">Courts -</span><span className="text-slate-700">{project.category}</span></div>
                                    <div className="flex gap-2"><span className="w-20">Location -</span><span className="text-slate-700">{project.location}</span></div>
                                </>
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-auto py-4 px-2 bg-gray-200 rounded-lg">
                            <Link
                                href={prevSlug !== "#" ? `/references/${prevSlug}` : "#"}
                                className={`flex items-center gap-2 text-xs font-bold text-[#C62828] hover:text-[#B71C1C] transition-colors ${prevSlug === "#" ? "invisible" : ""}`}
                            >
                                <ArrowLeft size={16} />
                                Previous post
                            </Link>

                            <Link
                                href="/contact"
                                className="bg-[#C62828] hover:bg-[#B71C1C] text-white text-[10px] font-bold py-1 px-2 rounded transition-colors uppercase mx-4"
                            >
                                Ask for more information
                            </Link>

                            <Link
                                href={nextSlug !== "#" ? `/references/${nextSlug}` : "#"}
                                className={`flex items-center gap-2 text-xs font-bold text-[#C62828] hover:text-[#B71C1C] transition-colors ${nextSlug === "#" ? "invisible" : ""}`}
                            >
                                Next post
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery (Red Box Area) */}
                <motion.div
                    className="mt-4 pt-4 border-t-2 border-red-500 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pb-4">
                        {project.gallery?.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentImage(img)}
                                className={`relative aspect-[3/2] w-full cursor-pointer overflow-hidden border-2 transition-all ${currentImage === img ? 'border-red-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
