import { Hero } from "@/components/Hero"
import { ProductDetailLayout, ProductData } from "@/components/ProductDetailLayout"

// Define specific data for known products
const PRODUCT_DATA: Record<string, ProductData> = {
    "asb-system40": {
        title: "ASB System40",
        subtitle: "기존 벽면을 활용한 고효율 패널 시스템 (두께 40mm)",
        description: "ASB System40 패널은 신규 코트 설치뿐만 아니라, 석고보드 등 스쿼시 공의 충격을 견디지 못하는 기존 코트의 리노베이션에 최적화된 솔루션입니다. \"완벽한 스쿼시 벽면 제조\"라는 ASB의 기술적 도전이 집약된 솔루션입니다.",
        mainImage: "/system40/system40_01.jpg",
        galleryImages: [
            "/system40/system40_02.jpg",
            "/system40/system40_03.jpg",
            "/system40/front wall.jpg",
            "/system40/system40_01.jpg",
        ],
        schematics: [],
        features: [
            "건물 벽면의 편차를 완벽하게 보정하여 100% 평평한 시스템 월을 구현, 최고의 경기력을 보장합니다.",
            "벽체와 패널 사이의 빈 공간을 건조 실리카 샌드로 빈틈없이 채워, 공이 벽면 어디에 맞아도 균일하고 일관된 반발력을 제공합니다."
        ],
        details: [
            "스쿼시 공이 고속으로 벽에 부딪힐 때 발생하는 진공 효과로 인해 일반 석고 벽면은 손상되기 쉽습니다. ASB System40은 이러한 현상을 영구적으로 방지합니다.",
            "ASB 패널은 기존 벽에 견고하게 고정되며, 수직 및 수평 정렬을 완벽하게 맞춥니다. 내부의 모래 충전층은 단단한 밀도를 형성하며, 표면은 이음새 없이 매끄러운 ASB 코팅으로 마감됩니다.",
            "세계스쿼시연맹(WSF)은 리노베이션 코트의 규격 오차 범위를 인정하고 있으나, ASB System40은 기존 벽면 위에 설치됨에도 불구하고 최대한 국제 규격에 부합하는 정밀한 시공을 제공합니다."
        ]
    },
    // Placeholders for other products as requested (layout first, content later)
    "asb-system100": {
        title: "ASB System100",
        subtitle: "전 세계 스쿼시 코트의 표준, 독립형 100mm 시스템",
        description: "ASB System100은 전 세계 스쿼시 코트의 기준이 된 클래식 모델입니다. 100mm 두께의 자립식(Self-standing) 벽체 구조로 설계되어 압도적인 내구성과 성능을 자랑합니다.",
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
            "건물 구조에 의존하지 않는 독립형 자립 구조",
            "검증된 신뢰성과 반영구적인 내구성",
            "공이 벽 어디에 맞아도 100% 균일한 반발력 제공",
            "탁월한 소음 및 진동 흡수 능력"
        ],
        details: [
            "설계자와 사용자 모두로부터 견고한 시공 품질과 압도적인 내구성을 인정받아 왔습니다. 수많은 국가대표 트레이닝 센터에 설치되어 있으며, 스쿼시가 정식 종목으로 채택된 1998년 이후 모든 커먼웰스 게임의 공식 코트로 사용되고 있습니다.",
            "ASB의 기술적 우위는 고압으로 압축된 드라이 실리카 샌드를 벽체 내부에 빈틈없이 채워 넣는 공법에 있습니다. 이는 콘크리트 벽과 동일한 밀도를 구현하여 최고의 경기력을 보장합니다."
        ]
    },
    "asb-glasscourt": {
        title: "ASB GlassCourt",
        subtitle: "국제 대회 및 중계에 최적화된 프리미엄 글라스 코트",
        description: "국제 토너먼트와 TV 중계를 위해 설계된 ASB ShowGlassCourt는 스쿼시 코트 기술의 정점입니다.",
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
        features: ["최상의 시야 확보", "TV 중계에 최적화된 디자인"],
        details: ["세계 정상급 선수들이 참가하는 주요 국제 투어와 PSA 대회를 위해 설계되었습니다. 가변식 사이드 월 기술을 통해 단식 경기를 위한 공간을 즉시 복식 코트로 전환할 수 있는 독보적인 유연성을 자랑합니다."]
    },
    "asb-gamecourt": {
        title: "ASB GameCourt",
        subtitle: "다목적 공간 활용의 혁신",
        description: "ASB GameCourt는 스쿼시 코트를 거대한 다목적 홀로 변환하여 공간 활용성을 극대화합니다.",
        mainImage: "/GameCourt/b_27.jpg",
        galleryImages: [
            "/GameCourt/b_25.jpg",
            "/GameCourt/b_28.jpg",
            "/GameCourt/b_29.jpg"
        ],
        schematics: [],
        features: ["유연한 공간 활용", "가변형 무빙 월 시스템"],
        details: ["세 면의 스쿼시 코트를 나란히 배치하고 그 사이에 두 개의 가변식 사이드 월을 설치한 형태입니다. 벽체를 이동시키면 순식간에 거대한 다목적 공간으로 변신합니다."]
    },
    "asb-tpoint": {
        title: "ASB TPoint",
        subtitle: "도심 속 스마트 아웃도어 코트",
        description: "스쿼시를 야외로 이끌어내다. ASB TPoint는 도시의 라이프스타일을 변화시키는 스마트 아웃도어 코트입니다.",
        mainImage: "/T-point/88.jpg",
        galleryImages: [],
        schematics: [],
        features: ["야외 스쿼시 경험", "최첨단 스마트 기술"],
        details: ["아름다운 디자인과 혁신적인 전자 제어 기술이 결합한 스마트 코트로, 기존에 없던 새롭고 흥미진진한 스포츠 경험을 도시 곳곳에 선사합니다."]
    },
    "asb-rainbowcourt": {
        title: "ASB RainbowCourt",
        subtitle: "시각적 혁신과 트레이닝의 진화",
        description: "ASB RainbowCourt는 다양한 컬러를 도입하여 시각적 즐거움과 탁월한 트레이닝 효과를 동시에 제공합니다.",
        mainImage: "/b_106.jpg",
        galleryImages: [],
        schematics: [],
        features: ["다채로운 시각적 매력", "과학적인 트레이닝 지원"],
        details: ["세계 선수권 대회와 월드컵 등 메이저 대회들이 레인보우 코트 위에서 치러지며 그 성능과 상징성을 증명해 내고 있습니다."]
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
