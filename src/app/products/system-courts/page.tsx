import { Hero } from "@/components/Hero"

export default function SystemCourtsPage() {
    return (
        <div className="bg-white">
            <Hero
                title="System Courts"
                subtitle="The Standard in Squash"
                image="https://images.unsplash.com/photo-1599474924187-334a4ae513ea?q=80&w=2069&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">ASB System 100</h2>
                <p className="text-slate-600 mb-12">Details about System 100...</p>

                <h2 className="text-3xl font-bold mb-8 text-slate-900">ASB System 40</h2>
                <p className="text-slate-600 mb-12">Details about System 40...</p>
            </div>
        </div>
    )
}
