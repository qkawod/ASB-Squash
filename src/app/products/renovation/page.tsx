import { Hero } from "@/components/Hero"

export default function RenovationPage() {
    return (
        <div className="bg-white">
            <Hero
                title="Kit & Renovation"
                subtitle="Upgrade Your Court"
                image="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Renovation Services</h2>
                <p className="text-slate-600 mb-12">Bring new life to old courts.</p>
            </div>
        </div>
    )
}
