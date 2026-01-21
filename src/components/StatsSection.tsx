'use client'

import { motion } from "framer-motion"

interface StatsSectionProps {
    backgroundImage?: string;
}

export function StatsSection({ backgroundImage }: StatsSectionProps) {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* World Map Background Placeholder */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `url("${backgroundImage || 'https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg'}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center text-white items-center max-w-5xl mx-auto h-64">
                    {/* Empty Grid for Spacing */}
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
