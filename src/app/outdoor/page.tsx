import { Hero } from "@/components/Hero"

export default function OutdoorPage() {
    return (
        <div>
            <Hero
                title="Outdoor Squash Courts"
                subtitle="Bring the game to the people."
                image="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                ctaLink="/contact"
                ctaText="Learn More"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">ASB OutdoorSquashCourt</h2>
                <p className="text-slate-600 mb-12">야외 환경에 최적화된 새로운 스쿼시 코트</p>
            </div>
        </div>
    )
}
