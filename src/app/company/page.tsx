import { Hero } from "@/components/Hero"

export default function CompanyPage() {
    return (
        <div className="bg-white">
            <Hero
                title="Company"
                subtitle="Since 1965"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20 space-y-20">
                <section id="history">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">History</h2>
                    <div className="border-l-4 border-yellow-500 pl-6 space-y-8">
                        <div>
                            <span className="font-bold text-yellow-600 block mb-1">1965</span>
                            <p className="text-slate-600">Company founded.</p>
                        </div>
                        <div>
                            <span className="font-bold text-yellow-600 block mb-1">1978</span>
                            <p className="text-slate-600">First system court installed.</p>
                        </div>
                    </div>
                </section>

                <section id="sustainability">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">Sustainability</h2>
                    <p className="text-slate-600">Commitment to eco-friendly manufacturing.</p>
                </section>
            </div>
        </div>
    )
}
