import { Hero } from "@/components/Hero"
import { ProductDetailLayout, ProductData } from "@/components/ProductDetailLayout"

// Define specific data for known products
const PRODUCT_DATA: Record<string, ProductData> = {
    "asb-system40": {
        title: "ASB System40",
        subtitle: "Squash court built of wall panels, thickness 40mm, which are anchored to the building wall",
        description: "The ASB System40 panels are generally useable for either a new court or a renovation of an existing court made of plaster or other materials which are not resistant to the impact of the squash ball. This already brings us to the challenge to manufacture a good squash wall.",
        mainImage: "/system40/system40_01.jpg",
        galleryImages: [
            "/system40/system40_02.jpg",
            "/system40/system40_03.jpg",
            "/system40/front wall.jpg",
            "/system40/system40_01.jpg",
        ],
        schematics: [],
        features: [
            "ASB is capable to level out differences in building walls, which ensures a completely straight wall and thus, the best playing characteristics",
            "The cavity between a building wall and an ASB panel is completely filled with fire-dried sand – this means no hollow spots, the entire wall becomes very solid and the rebound is even and consistent, no matter where the ball hits the wall"
        ],
        details: [
            "When a squash ball hits a wall at high speed a mini-vacuum is generated. This vacuum arises because the part of the ball hitting the wall first immediately leaves the wall again. With the even smallest unevenness this mini vacuum causes small parts of the plaster to be sucked from the wall. The ASB System40 wall prevents this phenomenon lastingly.",
            "The ASB Panel is fixed to the existing wall and is aligned vertically and horizontally. ASB technology helps to keep the distance between existing wall and panels. This cavity is filled with fire-dried sand, which is compressed. After this installation, the surface is without any visible joints and is covered with the ASB coating.",
            "In its specifications the World Squash Federation reduced the dimensions for renovated courts by 8 cm each in width and length for renovations and made these dimensions standard. These new dimensions are necessary as the System40 wall will be installed on top of an existing plaster wall, for example."
        ]
    },
    // Placeholders for other products as requested (layout first, content later)
    "asb-system100": {
        title: "ASB System100",
        subtitle: "Self-standing wall system, thickness 100mm",
        description: "ASB System100 is the classic model and standard for squash courts worldwide. It consists of self-standing wall elements with a thickness of 100mm.",
        mainImage: "/system100/297-1024x802.jpg",
        galleryImages: [
            "/system100/15.jpg",
            "/system100/18.jpg",
            "/system100/b_12.jpg",
            "/system100/b_13.jpg",
            "/system100/b_33.jpg"
        ],
        schematics: [],
        features: [
            "Self-standing structure",
            "Reliable and durable"
        ],
        details: ["Detailed information about ASB System100 will be updated."]
    },
    "asb-glasscourt": {
        title: "ASB GlassCourt",
        subtitle: "Premium Glass Court for Broadcast",
        description: "Designed for international tournaments and TV broadcasting, the ASB ShowGlassCourt is the pinnacle of squash court technology.",
        mainImage: "/GlassCourt/228.jpg",
        galleryImages: [
            "/GlassCourt/235.jpg",
            "/GlassCourt/5134315.jpg",
            "/GlassCourt/b_237.jpg",
            "/GlassCourt/london-classic-nc-08698-scaled.jpg",
            "/GlassCourt/n_291.jpg",
            "/GlassCourt/psa.jpg",
            "/GlassCourt/Squash-On-Fire-6c939146b2d4f85e9e30b4cec637af3e46e59f7b4fe583780fd27957d691fb38.jpg"
        ],
        schematics: [],
        features: ["Maximum visibility", "TV-friendly"],
        details: ["Detailed information about ASB GlassCourt will be updated."]
    },
    "asb-gamecourt": {
        title: "ASB GameCourt",
        subtitle: "Multi-purpose Space",
        description: "ASB GameCourt allows for flexible use of space, converting squash courts into a large multi-purpose hall.",
        mainImage: "/GameCourt/b_27.jpg",
        galleryImages: [
            "/GameCourt/b_25.jpg",
            "/GameCourt/b_28.jpg",
            "/GameCourt/b_29.jpg"
        ],
        schematics: [],
        features: ["Flexible space usage", "Movable walls"],
        details: ["Detailed information about ASB GameCourt will be updated."]
    },
    "asb-tpoint": {
        title: "ASB TPoint",
        subtitle: "Smart Outdoor Court",
        description: "Bringing squash to the outdoors. ASB TPoint is a smart outdoor court designed to change urban life.",
        mainImage: "/T-point/88.jpg",
        galleryImages: [],
        schematics: [],
        features: ["Outdoor play", "Smart technology"],
        details: ["Detailed information about ASB TPoint will be updated."]
    },
    "asb-rainbowcourt": {
        title: "ASB RainbowCourt",
        subtitle: "Visual Innovation",
        description: "ASB RainbowCourt brings color to the game, used in major championships for its visual appeal and training benefits.",
        mainImage: "/b_106.jpg",
        galleryImages: [],
        schematics: [],
        features: ["Visual appeal", "Training aid"],
        details: ["Detailed information about ASB RainbowCourt will be updated."]
    },
    // Mapped aliases purely for safety if slugs are slightly different (e.g. courts/walls/floors mapping)
    "courts": {
        title: "Courts",
        subtitle: "ASB Court Systems",
        description: "Overview of ASB Court Systems.",
        mainImage: "/system100/297-1024x802.jpg",
        galleryImages: [],
        schematics: [],
        features: [],
        details: ["Overview of courts."]
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const lowerSlug = slug.toLowerCase();
    const product = PRODUCT_DATA[lowerSlug] || PRODUCT_DATA["asb-system40"]; // Fallback to System40 if not found, or maybe just render specific one?
    // Actually best to try specific, if not found, try to map 'walls', 'floors' etc.
    // For now, let's use the found product.

    // If product exists in our data map, render the new layout
    if (product) {
        return <ProductDetailLayout product={product} />
    }

    // Fallback for unknown slugs (though we covered most)
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);
    return (
        <div>
            <Hero
                title={`${title}`}
                subtitle="High quality ASB product."
                image="https://images.unsplash.com/photo-1599474924187-334a4ae513ea?q=80&w=2069&auto=format&fit=crop"
                ctaLink="/contact"
                ctaText="Request Details"
            />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8">About {title}</h2>
                <p className="text-gray-400 mb-8">
                    Detailed information about {title} would go here.
                </p>
            </div>
        </div>
    )
}
