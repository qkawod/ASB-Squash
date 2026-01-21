import { Hero } from "@/components/Hero"

export default function NewsPage() {
    return (
        <div>
            <Hero
                title="News & Info"
                subtitle="Stay up to date with ASB Squash."
                image="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden group border border-slate-200 shadow-sm">
                            <div className="h-48 bg-slate-200" />
                            <div className="p-6">
                                <div className="text-yellow-600 text-sm font-medium mb-3">News</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">News Headline {i}</h3>
                                <p className="text-slate-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
