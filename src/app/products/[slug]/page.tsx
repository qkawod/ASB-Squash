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
            "스쿼시 볼이 고속으로 벽에 충돌하면 순간적으로 미세한 진공이 발생합니다. 이는 벽에 먼저 닿은 볼의 일부가 즉시 벽면에서 떨어지면서 생기는 현상입니다. 이 미세한 진공은 벽면의 아주 작은 요철에도 반응하여 미장 표면의 작은 입자들을 빨아들이게 됩니다. ASB System40 벽면은 이러한 현상을 근본적으로 차단합니다.",
            "ASB 패널은 기존 벽면에 고정되어 수직·수평으로 정밀하게 정렬됩니다. ASB 기술은 기존 벽면과 패널 사이의 간격을 일정하게 유지시켜 주며, 이 공간은 고온 건조된 모래로 채워 압축됩니다. 시공 완료 후에는 이음새가 전혀 보이지 않는 매끄러운 표면에 ASB 전용 코팅이 마감됩니다.",
            "세계스쿼시연맹(WSF)은 리노베이션 코트에 대한 규격을 개정하여, 폭과 길이를 각각 8cm씩 줄인 치수를 표준으로 채택하였습니다. 이는 System40 벽면을 기존 미장 벽 위에 시공하는 경우 등을 고려한 기준입니다.",
            "ASB System40 주요 장점\n- 건축 벽면의 불균일한 부분을 보정하여 완벽하게 평탄한 벽면을 구현, 최상의 플레이 환경 제공\n- 건축 벽면과 ASB 패널 사이의 공간을 고온 건조 모래로 완전히 충전하여 빈 공간이 없고, 벽 전체가 견고해지며 어느 지점에서 볼이 맞더라도 균일하고 일관된 반발력 제공\n- ASB 패널 두께 18mm — 볼이 고온 건조 모래에 더 가까이 닿아 벽면이 더욱 단단해지고 우수한 플레이 특성 구현\n- 이음새나 틈이 없는 매끄럽고 견고한 코트 벽면 마감\n- 구조적 균열로 인한 벽면 손상 없음\n- 노후 미장 코트의 간편하고 신속한 리노베이션 가능\n- 간단하고 빠른 시공\n- 소음 저감 효과"
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
            "세계 최고의 스쿼시 선수들, TV 제작사, 그리고 대회 주최측은 ASB 코트가 플레이 특성, 심미적 완성도, 그리고 압도적인 시각적 아름다움에 있어 최고라는 평가를 꾸준히 전해왔습니다.",
            "ASB System100 스쿼시 코트는 자립형 벽면 구조로 설계되어 주변 건물 벽과 독립적으로 설치됩니다. 따라서 건물의 구조적 균열이나 온도 변화에 영향을 받지 않으며, 우수한 차음 성능을 안정적으로 제공합니다. 기존 벽면 또는 건물 구조물과의 거리는 코트에 영향을 주지 않도록 최적화되어 설계됩니다.",
            "ASB System100 스쿼시 코트 벽면 구조\nASB System100 벽면의 하중 구조는 알루미늄 프로파일로 구성됩니다. 이 프로파일의 양면에는 ASB 규격에 따라 제작된 고밀도 패널이 부착됩니다. 중간의 공간은 현장에서 고온 건조 모래로 채워지며, 이 충전재가 스쿼시에 최적화된 벽면 경도를 구현합니다.",
            "ASB System100 벽면은 완벽한 치수 정밀도를 자랑합니다. 각 연결부는 혁신적이고 정교하게 설계되어 있으며, 숙련된 기술진의 세심한 시공으로 스쿼시 코트 관련 시공사들의 다양한 문제를 해결합니다. ASB System100은 설치 완료 즉시 플레이가 가능합니다.",
            "높은 품질에는 그에 상응하는 책임이 따릅니다. 철저한 품질 관리를 통해 일관된 최고 수준의 제품을 제공하며, ASB의 끊임없는 혁신 의지는 고객이 항상 최신 기술이 적용된 제품을 구매한다는 확신을 드립니다."
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
        details: [
            "ASB 쇼글라스코트는 압도적인 시각적 아름다움을 자랑하며, 프로모터와 이벤트 주최측이 창의적이고 혁신적인 방식으로 최고의 장소에서 대형 토너먼트를 개최할 수 있도록 합니다. ASB 쇼글라스코트는 이상적인 플레이 환경을 제공하여 모든 선수들에게 사랑받고 있으며, 고속으로 진행되는 스쿼시 중계에 완벽하게 부합하는 극적인 연출로 TV 업계에서도 높은 평가를 받고 있습니다.",
            "ASB 유리\nASB 쇼글라스코트의 유리 패널은 12mm 두께의 \"SEKURIT\" 안전 단방향 투시 유리(one-way-vision™) 로 제작되며, 색상이 입혀진 세라믹 도트가 소성 처리되어 있습니다. 전체 표면의 50% 이상이 색상으로 채워져 있습니다.\n\n단식용 ASB 쇼글라스코트는 총 35개의 패널(도어 포함)로 구성됩니다. 이 중 32개는 단방향 투시 패널로, 전면 벽(8개)과 좌우 측면 벽(각 12개)에 사용되며, 후면 벽(패널 2개 + 도어)은 투명 유리로 제작됩니다.\n\nASB는 두 겹의 세라믹 도트(첫 번째 검정 도트, 그 위에 정확히 겹쳐진 컬러 도트) 기법을 적용한 단방향 투시 유리를 최초로 개발하였습니다. WSF도 이 기술 명칭을 공식 채택하였으나, 실제로 이 기법을 구현할 수 있는 유리 제조사는 많지 않습니다.\n\nASB 단방향 투시 유리란, \"SEKURIT\" 안전 유리 내면에 스크린 인쇄 방식으로 흑색/안트라사이트 색상의 도트를 1차 인쇄하고, 그 위에 밝은 컬러 도트를 정확히 겹쳐 2차 인쇄하는 방식입니다. 내부의 컬러 도트는 코트 안쪽에서 선수와 카메라에 선명하게 보입니다.\n\n전체 표면의 50% 이상이 도트로 덮여 있어, 외부 관중에게는 검정 도트가 보이지 않는 시각적 착시 효과로 경기를 최적의 시야로 관람할 수 있습니다. 반면 코트 내부의 밝은 컬러 도트는 선수가 코트 외부의 관중을 인식하기 어렵게 만드는 착시 효과를 냅니다.",
            "ASB TV/카메라 윈도우\nASB 쇼글라스코트의 전면 벽에는 표준화된 TV/카메라 윈도우 공간(\"클리어 TV 컷아웃\")이 설치되어 있습니다. 이는 바닥에서 90cm 높이까지, 코트 너비 6.40m 전체에 걸쳐 적용됩니다. 또한 측면 벽의 여러 패널에는 다양한 카메라 앵글과 촬영 옵션 확보를 위해 별도의 \"TV 컷아웃\"(바닥에서 약 40×40cm)이 추가로 설치됩니다.",
            "ASB LED 조명\nASB LED 조명은 최고 수준의 방송 기준을 충족하는 코트 일체형 시스템으로, 별도의 금속 지주 없이 특수 고정장치로 유리에 직접 부착되어 깔끔한 시야를 보장합니다. 코트 내 어느 위치에서든 바닥면 기준 최소 1,600~1,800럭스의 조도를 제공합니다. 또한 빛의 깜빡임 없이 4,000fps 초고속 촬영에도 완벽하게 대응합니다. 밝기 조절 및 프로그래밍된 라이트쇼 연출이 가능하며, 유리 상단에 빛 번짐 차단 시스템을 설치할 수 있어 단방향 투시 효과를 최적으로 유지합니다.",
            "ASB TVO 플로어\nASB는 PSA와 공동으로 특수 TVO 플로어(TV 최적화 이동형 바닥재 및 하부 구조)를 개발하였습니다. TVO 플로어는 땀 흡수 기능을 갖추고 있으며, 최적의 탄성과 안정적인 발판을 제공하고, 소량의 수분에도 미끄러지지 않습니다.\n\nASB TVO 플로어는 반복적인 설치와 철거가 가능한 이벤트용으로 설계되었습니다. 흰 볼의 시인성을 극대화하기 위해 무광 블랙 마감을 적용하였습니다. 방송 중계 시 볼 시인성에 있어 벽면 색상(현재까지 블루가 최적)과 바닥재 색상은 매우 중요한 요소입니다. 또한 ASB 쇼코트 구조와 기본 금속 프레임은 언제든지 ASB 글라스플로어로 업그레이드할 수 있도록 설계되어 있습니다.",
            "ASB 글라스플로어\nASB 글라스플로어는 ASB 쇼글라스코트의 자연스러운 진화입니다. 벽면과 바닥이 동일한 소재로 구성된 새로운 5면 ASB 쇼글라스코트입니다. 이 혁신적인 미끄럼 방지 스쿼시 바닥재는 스포츠 바닥재 분야의 획기적인 혁신입니다.\n\n유리는 탄성이 뛰어나면서도 매우 단단한 소재입니다. ASB 글라스플로어는 농구, 배구, 테니스 등 다양한 스포츠와 TV 쇼의 인터랙티브 표면으로도 활용되고 있습니다.",
            "ASB 이동형 글라스월\n1998년 쿠알라룸푸르 영연방 게임 이후, ASB는 쇼글라스코트에 이동형 유리 측벽을 도입하였습니다. 이는 ASB의 오랜 경험과 정교한 기술력을 바탕으로 실현된 결과입니다. 1998년부터 2018년까지 4년마다 개최된 영연방 게임에서 복식 경기를 위한 이동형 벽이 수백 차례 이동되었습니다.",
            "선택 옵션\nASB 쇼글라스코트에는 해당 국가의 전기 규격에 맞는 전원 공급장치, 소프트웨어, 배선 및 지지대가 포함된 인터랙티브스쿼시 시스템을 설치할 수 있습니다. 과거 PSA 이벤트(2019년 시카고 세계선수권대회)에서는 전면 벽 전체를 디스플레이로 활용한 \"비디오 월\"과 인터랙티브스쿼시 기술을 결합하여 트래킹, 광고, 게이미피케이션을 구현한 바 있습니다. 프로젝터를 활용한 기본형부터 비디오 월과 결합한 고사양 버전까지 다양한 구성이 가능하며, 현재 이러한 시스템을 쇼글라스코트에 통합하는 기업은 ASB가 유일합니다.\n\n외부 모니터 설치를 위한 홀 가공 및 맞춤형 마운트 제작도 가능하며, 모니터 위치를 사전에 지정하여 계획할 수 있습니다. 또한 유리 인쇄 없는 구간을 추가로 지정하거나 적합한 마운팅·보호 시스템을 적용할 수 있습니다."
        ]
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
    "asb-outdoorsquashcourt": {
        title: "ASB OutdoorSquashCourt",
        subtitle: "야외 환경에 최적화된 새로운 스쿼시 코트",
        description: "야외에서 즐기는 스쿼시. ASB는 스쿼시 코트 제작 및 설치 분야에서 오랜 역사와 검증된 경험을 보유하고 있습니다. 또한 그동안 다양한 실외 글라스코트 설치를 통해 축적한 풍부한 노하우를 바탕으로, 야외 환경에 최적화된 새로운 스쿼시 코트를 개발하였습니다.",
        mainImage: "/OutdoorCourt/00-story-image-nyc-public-squash.jpg.webp",
        galleryImages: [
            "/OutdoorCourt/merlin_Outdoor.jpg",
            "/OutdoorCourt/b_455.jpg",
            "/OutdoorCourt/b_457.jpg",
            "/OutdoorCourt/b_458-2.jpg",
            "/OutdoorCourt/b_456.jpg",
            "/OutdoorCourt/b_1191.jpg",
            "/OutdoorCourt/Turks%20&%20Caicos%201.jpeg",
            "/OutdoorCourt/Turks%20&%20Caicos%202.jpeg",
            "/OutdoorCourt/Turks%20&%20Caicos%203.jpeg",
            "/OutdoorCourt/Turks%20&%20Caicos%204.jpeg"
        ],
        schematics: [],
        features: [
            "야외 환경에 최적화된 고내구성 자재 사용",
            "다양한 실외 글라스코트 설치 노하우 집약",
            "스쿼시를 대중화하기 위한 혁신적인 접근"
        ],
        details: [
            "더 많은 사람들이 스쿼시를 쉽게 접할 수 있는 환경을 만들고, 새로운 스쿼시 인구를 늘리며, 스쿼시라는 스포츠의 매력을 널리 알리는 것이 ASB OutdoorSquashCourt의 목표입니다.",
            "ASB는 다목적 실외 스포츠 시설 구축에 있어 세계적인 경쟁력을 갖추고 있으며, 이를 통해 도시 미관과 스포츠 문화를 동시에 발전시킵니다."
        ]
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
