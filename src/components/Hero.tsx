import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroProps {
    title?: string
    subtitle?: string
    image?: string
    video?: string
    ctaLink?: string
    ctaText?: string
    overlayClass?: string
    imageClass?: string
}

export function Hero({ title, subtitle, image, video, ctaLink, ctaText, overlayClass, imageClass }: HeroProps) {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {video ? (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={cn("absolute inset-0 w-full h-full object-cover opacity-50", imageClass)}
                />
            ) : image ? (
                <div className={cn("absolute inset-0 bg-cover bg-center opacity-50", imageClass)} style={{ backgroundImage: `url('${image}')` }} />
            ) : null}

            <div className={cn("absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900 z-10", overlayClass)} />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                {title && (
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                        {subtitle}
                    </p>
                )}
                {ctaLink && ctaText && (
                    <Link
                        href={ctaLink}
                        className="px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
                    >
                        {ctaText} <ArrowRight className="w-5 h-5" />
                    </Link>
                )}
            </div>
        </section>
    )
}
