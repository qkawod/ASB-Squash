import { Hero } from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import { REFERENCES } from "@/data/references"

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
                    <h2 className="text-3xl font-bold mb-10 pl-2 text-slate-900">Case Studies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REFERENCES.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                location={project.location}
                                image={project.image}
                                slug={project.slug}
                                type={project.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
