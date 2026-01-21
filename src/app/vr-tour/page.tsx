import { Hero } from "@/components/Hero"

export default function VRTourPage() {
    return (
        <div>
            <Hero
                title="Virtual Tour"
                subtitle="Explore our courts from anywhere."
                image="https://images.unsplash.com/photo-1626248386187-57351c20f384?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 py-20 text-center">
                <p className="text-xl text-gray-400">VR Tour embedding would go here.</p>
            </div>
        </div>
    )
}
