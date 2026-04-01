import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    location: string;
    image: string;
    slug: string;
    type: string; // Relaxed from "LumiFlex" | "MultiSports" to string to accommodate existing data
}

export default function ProjectCard({ title, location, image, slug, type }: ProjectCardProps) {
    const isLogo = image.includes("logosquashcourt_s.svg");

    return (
        <Link
            href={slug !== "#" ? `/references/${slug}` : "#"}
            className={`group relative block w-full aspect-[4/3] rounded-[8px] overflow-hidden no-underline cursor-pointer ${isLogo ? "bg-white border border-gray-200" : "bg-[#222]"}`}
        >
            {/* Background Image Container */}
            <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${isLogo ? "p-16 pb-24" : "p-0"}`}>
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`${isLogo ? "object-contain" : "object-cover"} transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.1]`}
                    />
                </div>
                {/* Light Black Opaque Film - Only show for non-logo */}
                {!isLogo && (
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
                )}
            </div>

            {/* LED Line Animation (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 origin-left transition-transform duration-[400ms] ease-in-out z-40 group-hover:scale-x-100 overflow-hidden bg-[#FFE57F]/50 shadow-[0_0_15px_#FFE57F]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
            </div>

            {/* Gradient Overlay & Content */}
            <div
                className="absolute inset-0 z-10 flex flex-col justify-end p-[20px] sm:p-[30px]"
                style={!isLogo ? {
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)"
                } : {
                    background: "linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 20%, transparent 40%)"
                }}
            >
                <div className="relative z-20 flex flex-col items-start transform transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-[10px]">
                    <h3 className={`${isLogo ? "text-slate-900" : "text-white"} text-[1.2rem] sm:text-[1.5rem] font-bold mb-[4px] sm:mb-[8px] leading-[1.2] ${!isLogo ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" : ""}`}>
                        {title}
                    </h3>
                    <p className={`${isLogo ? "text-slate-600" : "text-[#ccc]"} text-[0.85rem] sm:text-[0.95rem] font-light capitalize transition-colors duration-300 group-hover:text-black`}>
                        {location}
                    </p>
                </div>
            </div>
        </Link>
    );
}
