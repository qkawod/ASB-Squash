import { Hero } from "@/components/Hero"

export default function CourtsPage() {
    return (
        <div>
            <Hero
                title="Indoor Squash Courts"
                subtitle="The benchmark for squash courts worldwide."
                image="https://images.unsplash.com/photo-1599474924187-334a4ae513ea?q=80&w=2069&auto=format&fit=crop"
                ctaLink="/contact"
                ctaText="Request a Quote"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">System 100</h2>
                <p className="text-slate-600 mb-12">The ASB System 100 is the world's most successful squash court.</p>

                <h2 className="text-3xl font-bold mb-8 text-slate-900">System 40</h2>
                <p className="text-slate-600 mb-12">Ideal for existing buildings and renovations.</p>
            </div>
        </div>
    )
}
