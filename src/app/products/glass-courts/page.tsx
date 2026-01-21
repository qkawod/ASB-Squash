import { Hero } from "@/components/Hero"

export default function GlassCourtsPage() {
    return (
        <div className="bg-white">
            <Hero
                title="Glass Court"
                subtitle="Spectacular Broadcasting & Visibility"
                image="https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">ShowGlassCourt</h2>
                <p className="text-slate-600 mb-12">The ultimate stage for squash.</p>
            </div>
        </div>
    )
}
