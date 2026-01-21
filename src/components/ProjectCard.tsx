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
    return (
        <Link
            href={slug !== "#" ? `/references/${slug}` : "#"}
            className="group relative block w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#222] no-underline cursor-pointer"
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.1]"
                />
                {/* Light Black Opaque Film */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
            </div>

            {/* LED Line Animation (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 origin-left transition-transform duration-[400ms] ease-in-out z-40 group-hover:scale-x-100 overflow-hidden bg-[#FFE57F]/50 shadow-[0_0_15px_#FFE57F]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
            </div>

            {/* Gradient Overlay & Content */}
            <div
                className="absolute inset-0 z-10 flex flex-col justify-end p-[30px]"
                style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)"
                }}
            >
                <div className="relative z-20 flex flex-col items-start transform transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-[10px]">

                    {/* Badge */}


                    <h3 className="text-white text-[1.5rem] font-bold mb-[8px] leading-[1.2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {title}
                    </h3>
                    <p className="text-[#ccc] text-[0.95rem] font-light capitalize transition-colors duration-300 group-hover:text-white">
                        {location}
                    </p>
                </div>
            </div>
        </Link>
    );
}
