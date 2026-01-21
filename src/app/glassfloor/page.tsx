import { Hero } from "@/components/Hero"

export default function GlassFloorPage() {
    return (
        <div>
            <Hero
                title="ASB GlassFloor"
                subtitle="The most advanced sports flooring system in the world."
                image="https://images.unsplash.com/photo-1626248386187-57351c20f384?q=80&w=2070&auto=format&fit=crop"
                ctaLink="/contact"
                ctaText="Get Inspired"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">LumiFlex</h2>
                <p className="text-slate-600 mb-12">Full LED video floor for unlimited possibilities.</p>

                <h2 className="text-3xl font-bold mb-8 text-slate-900">MultiSports</h2>
                <p className="text-slate-600 mb-12">Performance meets durability.</p>
            </div>
        </div>
    )
}
