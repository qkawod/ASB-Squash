import { Hero } from "@/components/Hero"

export default function PartnershipPage() {
    return (
        <div>
            <Hero
                title="Partnership"
                subtitle="Growing the game together."
                image="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                ctaLink="/contact"
                ctaText="Become a Partner"
            />
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Our Partners</h2>
                <div className="flex justify-center flex-wrap gap-12 opacity-50 hover:opacity-100 transition-all text-slate-900">
                    <div className="text-2xl font-black">WSF</div>
                    <div className="text-2xl font-black">PSA</div>
                    <div className="text-2xl font-black">US SQUASH</div>
                </div>
            </div>
        </div>
    )
}
