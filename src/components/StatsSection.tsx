'use client'

import { motion } from "framer-motion"

interface StatsSectionProps {
    backgroundImage?: string;
}

export function StatsSection({ backgroundImage }: StatsSectionProps) {
    return (
        <section className="relative py-24 bg-black border-t border-slate-800 overflow-hidden">
            {/* World Map Background Placeholder */}
            <div className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("${backgroundImage || 'https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg'}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center text-white items-center max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-600 mb-3 tracking-tight drop-shadow-sm">
                            1965
                        </div>
                        <div className="h-px w-12 bg-yellow-500/50 mb-4"></div>
                        <div className="text-slate-300 font-bold tracking-[0.2em] text-xs uppercase">Established</div>
                    </div>

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600 mb-3 tracking-tight drop-shadow-sm">
                            15,000+
                        </div>
                        <div className="h-px w-12 bg-blue-500/50 mb-4"></div>
                        <div className="text-slate-300 font-bold tracking-[0.2em] text-xs uppercase">Courts Installed</div>
                    </div>

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block absolute right-1/3 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-600 mb-3 tracking-tight drop-shadow-sm">
                            WSF
                        </div>
                        <div className="h-px w-12 bg-green-500/50 mb-4"></div>
                        <div className="text-slate-300 font-bold tracking-[0.2em] text-xs uppercase">Certified Partner</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
