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
            <main className="container mx-auto px-4 py-10 space-y-12">
                {/* Top Section: Hero Split */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Main Image */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative aspect-video w-full bg-gray-100">
                            <img
                                src={currentImage}
                                alt={product.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/3 bg-gray-100 p-8 h-full min-h-[400px] flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>
                            <p className="text-xl font-bold italic text-slate-800 mb-6">
                                {product.subtitle}
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-8 text-sm">
                                {product.description}
                            </p>
                        </div>

                        <div>
                            <div className="flex gap-4 mb-8">
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

                {/* Middle Section: Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                <div className="space-y-6 text-slate-800 text-sm leading-relaxed max-w-4xl border-t pt-10">
                    {product.details.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
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
