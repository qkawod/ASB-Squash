import { notFound } from "next/navigation"
import { REFERENCES } from "@/data/references"
import ReferenceDetailClient from "@/components/ReferenceDetailClient"

export function generateStaticParams() {
    return REFERENCES.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ReferenceDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const projectIndex = REFERENCES.findIndex(p => p.slug === params.slug)

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
