import { Metadata } from "next"
import { notFound } from "next/navigation"
import { REFERENCES, ProjectReference } from "@/data/references"
import ReferenceDetailClient from "@/components/ReferenceDetailClient"

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const project = REFERENCES.find((p: ProjectReference) => p.slug === params.slug)

    if (!project) return { title: "Project Not Found" }

    const description = project.description && project.description.length > 0 
        ? project.description[0].substring(0, 150) + "..." 
        : `시공 사례: ${project.title} - ${project.location}`;

    return {
        title: `${project.title} | ASBSQUASH 시공 실적`,
        description: description,
        openGraph: {
            title: `${project.title} - ASBSQUASH 시공 사례`,
            description: description,
            url: `https://www.asbsquash.co.kr/references/${project.slug}`,
            images: [project.image],
        },
    }
}

export function generateStaticParams() {
    return REFERENCES.map((project: ProjectReference) => ({
        slug: project.slug,
    }))
}

export default async function ReferenceDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const projectIndex = REFERENCES.findIndex((p: ProjectReference) => p.slug === params.slug)

    if (projectIndex === -1) {
        notFound()
    }

    const project = REFERENCES[projectIndex]
    const prevProject = projectIndex > 0 ? REFERENCES[projectIndex - 1] : null
    const nextProject = projectIndex < REFERENCES.length - 1 ? REFERENCES[projectIndex + 1] : null

    return (
        <ReferenceDetailClient
            project={project}
            prevSlug={prevProject ? prevProject.slug : "#"}
            nextSlug={nextProject ? nextProject.slug : "#"}
        />
    )
}
