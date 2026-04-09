'use client'

import { useState } from 'react'
import { Camera, Gamepad2 } from "lucide-react"
import Link from "next/link"

export interface ProductData {
    title: string
    subtitle: string
    description: string
    mainImage: string
    galleryImages: string[]
    schematics: string[]
    features: string[]
    details: string[] // List of paragraphs for the bottom section
}

export function ProductDetailLayout({ product }: { product: ProductData }) {
    const [currentImage, setCurrentImage] = useState(product.mainImage)

    // Ensure we have a valid image list even if some arrays are empty
    const allImages = [product.mainImage, ...product.galleryImages, ...product.schematics].filter(Boolean);

    return (
        <div className="bg-white min-h-screen pt-20">
            <main className="container mx-auto px-4 py-10 space-y-12 max-w-5xl">
                {/* Top Section: Hero Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Main Image */}
                    <div className="min-h-full">
                        <div className="relative w-full h-full bg-gray-100">
                            <img
                                src={currentImage}
                                alt={product.title}
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="bg-gray-100 p-8 h-full flex flex-col min-h-[450px]">
                        <div className="flex-grow overflow-hidden">
                            <h1 className="font-bold text-slate-900 mb-4 whitespace-pre-line leading-tight text-2xl lg:text-3xl">
                                {product.title}
                            </h1>
                            <p className="font-bold italic text-slate-800 mb-4 whitespace-pre-line break-keep leading-snug text-[15px] lg:text-lg">
                                {product.subtitle}
                            </p>
                            <div className="text-slate-700 leading-relaxed mb-6 text-sm break-keep">
                                {product.description}
                            </div>
                        </div>

                        <div className="mt-auto pt-4">
                            <div className="flex gap-4 mb-6">
                                <Camera className="w-8 h-8 text-[#C62828]" />
                                <Gamepad2 className="w-8 h-8 text-[#C62828]" />
                            </div>
                            <Link href="/contact" className="block w-full">
                                <button className="w-full py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-lg transition-colors uppercase">
                                    CONTACT US
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Gallery Grid - Standardized 8 thumbnails per row */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                    {/* Combine main image, gallery images, and schematics for the full list */}
                    {allImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative aspect-video bg-gray-200 cursor-pointer overflow-hidden border-2 ${currentImage === img ? 'border-red-600' : 'border-transparent'}`}
                            onClick={() => setCurrentImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Text Details Section */}
                <div className="space-y-6 text-slate-800 text-sm leading-relaxed border-t pt-10">
                    {product.details.map((paragraph, idx) => (
                        <p key={idx} className="whitespace-pre-line break-keep">{paragraph}</p>
                    ))}

                    {product.features.length > 0 && (
                        <>
                            <p className="mt-4 font-bold">{product.title} 주요 특징 (Main Advantages):</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
