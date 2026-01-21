export interface ProjectReference {
    slug: string;
    category: string;
    title: string;
    location: string;
    image: string;
    gallery: string[];
    subtitle?: string;
    description?: string[];
    details?: {
        label: string;
        value: string;
    }[];
}

export const REFERENCES: ProjectReference[] = [
    {
        category: "ASB System100",
        title: "Korea Hap-po Squash Courts",
        location: "Masan, South Korea",
        image: "/projects/hap-po/main.jpg",
        slug: "hap-po",
        gallery: [
            "/projects/hap-po/main.jpg",
            "/projects/hap-po/1034.jpg",
            "/projects/hap-po/1053.jpg",
            "/projects/hap-po/1054.jpg",
            "/projects/hap-po/1055.jpg",
            "/projects/hap-po/1043.jpg",
            "/projects/hap-po/1044.jpg",
            "/projects/hap-po/1045.jpg",
            "/projects/hap-po/1046.jpg",
            "/projects/hap-po/1047.jpg",
            "/projects/hap-po/1048.jpg",
            "/projects/hap-po/1049.jpg",
            "/projects/hap-po/1050.jpg",
            "/projects/hap-po/1051.jpg",
            "/projects/hap-po/1052.jpg",
            "/projects/hap-po/1039.jpg",
            "/projects/hap-po/1040.jpg",
            "/projects/hap-po/1041.jpg",
            "/projects/hap-po/1042.jpg",
            "/projects/hap-po/1033.jpg",
            "/projects/hap-po/1037.jpg",
            "/projects/hap-po/1036.jpg",
            "/projects/hap-po/1038.jpg"
        ],
        subtitle: "New Squash Courts for Korea",
        description: [
            "세계 스쿼시 연맹(WSF)과 대한 스쿼시 연맹(KSF)의 공인을 받은 5개의 최신 ASB System100 스쿼시 코트가 설치되었습니다.",
            "모든 코트에는 ASB Pro GlassBackWalls와 ASB SportsFloors가 적용되어 최고의 경기 환경을 제공합니다.",
            "5개의 코트 중 2개는 ASB Movable SideWalls를 사용하여 단식 코트에서 복식 코트로 전환할 수 있습니다. 이를 통해 센터는 다양한 스쿼시 이벤트를 유연하게 개최할 수 있는 환경을 갖추었습니다.",
            "설치 작업을 시작하기 위해 특수 장비를 사용하여 자재를 2층으로 인양하는 정교한 공정이 진행되었습니다.",
            "이 경기장은 제105회 전국체육대회 개최지로 선정되었습니다. 대한민국 스포츠 역사의 중요한 이벤트를 ASB가 함께하게 된 것을 영광으로 생각합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Movable SideWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "South Korea Naju",
        location: "Naju, South Korea",
        image: "/projects/naju/585.jpg",
        slug: "naju",
        gallery: [
            "/projects/naju/585.jpg",
            "/projects/naju/584.jpg",
            "/projects/naju/581.jpg",
            "/projects/naju/582.jpg",
            "/projects/naju/583.jpg",
            "/projects/naju/586.jpg"
        ],
        subtitle: "New Squash Centre",
        description: [
            "대한민국 나주에 5개의 최신 스쿼시 코트가 성공적으로 설치되었습니다.",
            "그중 한 코트에는 ASB Movable SideWall(이동식 사이드월) 기술이 적용되어, 단식 코트와 복식 코트 간의 빠른 전환이 가능하여 활용도를 극대화했습니다.",
            "또한, 스쿼시 경기의 품격을 높이는 ASB ShowGlassCourt가 설치되어 관중과 선수 모두에게 최고의 몰입감을 선사합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB PermanentGlassWall" },
            { label: "Walls", value: "ASB GlassWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Indonesia Squash Arena Disporasu",
        location: "Deli Serdang, Indonesia",
        image: "/projects/indonesia/main.jpg",
        slug: "indonesia-disporasu",
        gallery: [
            "/projects/indonesia/main.jpg",
            "/projects/indonesia/1013.jpg",
            "/projects/indonesia/1014.jpg",
            "/projects/indonesia/1015.jpg",
            "/projects/indonesia/1016.jpg"
        ],
        subtitle: "World Class Squash Venue",
        description: [
            "인도네시아에 새로운 월드 클래스 스쿼시 경기장이 탄생했습니다.",
            "ASB System100 스쿼시 코트 4면이 설치되었으며, 그중 2면에는 ASB Movable SideWall(이동식 사이드월)이 적용되어 벽을 이동시킴으로써 동일한 코트에서 단식과 복식 경기를 모두 소화할 수 있습니다.",
            "이로써 모든 최상위 레벨의 대회를 유치할 수 있는 자격을 갖추었으며, 현지 선수들에게 완벽한 훈련 환경을 제공합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Walls", value: "ASB Movable SideWall" },
            { label: "Location", value: "Deli Serdang, North Sumatra" }
        ]
    },
    {
        category: "ASB System40",
        title: "Bavli Tower",
        location: "Tel Aviv, Israel",
        image: "/projects/bavli/main.jpg",
        slug: "bavli-tower",
        gallery: [
            "/projects/bavli/main.jpg",
            "/projects/bavli/976.jpg",
            "/projects/bavli/972.jpg",
            "/projects/bavli/971.jpg",
            "/projects/bavli/973.jpg",
            "/projects/bavli/974.jpg",
            "/projects/bavli/975.jpg"
        ],
        subtitle: "Luxury Residential Squash Court",
        description: [
            "텔아비브의 최고급 주거 단지 중 하나인 바블리 타워(Bavli Tower)에 최첨단 ASB System40 스쿼시 코트 설치를 완료했습니다.",
            "이 최고 수준의 코트는 도심 한가운데서 월드 클래스 스쿼시 경험을 제공하며, 입주민들이 건물 밖으로 나가지 않고도 프로 수준의 시설을 이용할 수 있게 합니다.",
            "이번 설치는 텔아비브의 럭셔리 레지던스 내 프리미엄 피트니스 시설에 대한 수요 증가를 반영하며, 스쿼시 커뮤니티 활성화에 기여할 것입니다."
        ],
        details: [
            { label: "Courts", value: "ASB System40" },
            { label: "Walls", value: "ASB System40" },
            { label: "Accessories", value: "ASB Height Adjustable Tin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Munsu Squash Centre in Ulsan",
        location: "Ulsan, South Korea",
        image: "/projects/munsu-ulsan/main.jpg",
        slug: "munsu-ulsan",
        gallery: [
            "/projects/munsu-ulsan/main.jpg",
            "/projects/munsu-ulsan/90.jpg",
            "/projects/munsu-ulsan/69.jpg",
            "/projects/munsu-ulsan/68.jpg",
            "/projects/munsu-ulsan/63.jpg",
            "/projects/munsu-ulsan/65.jpg",
            "/projects/munsu-ulsan/70.jpg",
            "/projects/munsu-ulsan/64.jpg",
            "/projects/munsu-ulsan/66.jpg",
            "/projects/munsu-ulsan/67.jpg"
        ],
        subtitle: "High End Squash Project",
        description: [
            "대한민국 울산에 위치한 문수 스쿼시 센터에 ASB의 최첨단 기술이 도입되었습니다. ASB Movable SideWall과 ASB ShowGlassCourt가 설치된 최고급 프로젝트입니다.",
            "기존 시설을 전면 리모델링하여 5면의 ASB System100 코트와 1면의 ASB ShowGlassCourt를 갖춘 최신식 시설로 탈바꿈했습니다.",
            "특히 2면에는 ASB Movable SideWall이 적용되어 단식과 복식 전환이 가능합니다. 이로써 6개의 단식 코트, 혹은 4개 단식/2개 복식 등으로 다채로운 활용이 가능합니다.",
            "ASB ShowGlassCourt와 System100 코트에 설치된 특수 카메라 윈도우를 통해 완벽한 방송 중계 환경을 제공합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB Movable SideWall" },
            { label: "Broadcasting", value: "Special Camera Windows" }
        ]
    },
    {
        category: "ASB System100",
        title: "Yolo Squash Tallinn",
        location: "Tallinn, Estonia",
        image: "/projects/yolo-tallinn/main.jpg",
        slug: "yolo-tallinn",
        gallery: [
            "/projects/yolo-tallinn/main.jpg",
            "/projects/yolo-tallinn/1088.jpg",
            "/projects/yolo-tallinn/1083.jpg",
            "/projects/yolo-tallinn/1086.jpg",
            "/projects/yolo-tallinn/1089.jpg",
            "/projects/yolo-tallinn/1090.jpg",
            "/projects/yolo-tallinn/1094.jpg",
            "/projects/yolo-tallinn/1084.jpg",
            "/projects/yolo-tallinn/1085.jpg",
            "/projects/yolo-tallinn/1087.jpg",
            "/projects/yolo-tallinn/1082.jpg",
            "/projects/yolo-tallinn/1093.jpg",
            "/projects/yolo-tallinn/1091.jpg",
            "/projects/yolo-tallinn/1092.jpg"
        ],
        subtitle: "You Only Live Once!",
        description: [
            "에스토니아 탈린에 위치한 새로운 스쿼시 클럽 YOLO Squash의 건설이 완료되었습니다.",
            "6면의 스탠다드 ASB System100 코트와 1면의 ASB Glass Court가 설치되어 일반인부터 선수까지 모두를 위한 훌륭한 공간을 제공합니다.",
            "모든 코트에는 ASB Freestanding GlassBackWall이 적용되어 개방적이고 현대적인 분위기를 연출합니다.",
            "WSF와 PSA 인증을 받은 이 코트들은 에스토니아뿐만 아니라 발트해 및 스칸디나비아 지역 스쿼시 커뮤니티의 중요한 거점이 될 것입니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "USA MSquash",
        location: "South Norwalk, USA",
        image: "/projects/usa-msquash/main.jpg",
        slug: "usa-msquash",
        gallery: [
            "/projects/usa-msquash/main.jpg",
            "/projects/usa-msquash/789.jpg",
            "/projects/usa-msquash/835.jpg",
            "/projects/usa-msquash/790.jpg",
            "/projects/usa-msquash/836.jpg"
        ],
        subtitle: "High Performance Academy",
        description: [
            "Shaun과 Katline Moxham이 운영하는 MSquash Academy는 사우스 노워크(South Norwalk) 센터를 확장하여 2개의 ASB System100 코트를 추가로 설치했습니다.",
            "이로써 총 7개의 System100 코트와 1개의 ASB ShowGlassCourt를 갖추게 되었으며, 이는 성공적인 비즈니스 모델과 ASB와의 장기적인 파트너십을 보여주는 사례입니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "ASB at PanAmerican Games",
        location: "Santiago, Chile",
        image: "/projects/santiago-panam/main.jpg",
        slug: "santiago-panam",
        gallery: [
            "/projects/santiago-panam/main.jpg",
            "/projects/santiago-panam/886.jpg"
        ],
        subtitle: "PanAmerican Games 2023",
        description: [
            "ASB와 현지 파트너 Sportek은 칠레 산티아고에서 열린 2023 팬아메리칸 게임을 위해 4개의 스쿼시 코트와 4개의 라켓볼 코트를 건설했습니다.",
            "단식과 복식 경기를 모두 소화할 수 있도록 ASB Freestanding GlassBackWall과 ASB Movable SideWall이 장착된 4개의 ASB System100 샌드 필드(sand-filled) 코트가 포함되었습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB GameCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB GlassWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Walls", value: "ASB Movable SideWalls" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System40",
        title: "City of Dreams Cyprus",
        location: "Limassol, Cyprus",
        image: "/projects/cyprus-city-of-dreams/main.jpg",
        slug: "cyprus-city-of-dreams",
        gallery: [
            "/projects/cyprus-city-of-dreams/main.jpg",
            "/projects/cyprus-city-of-dreams/1104.jpg",
            "/projects/cyprus-city-of-dreams/1105.jpg",
            "/projects/cyprus-city-of-dreams/1106.jpg",
            "/projects/cyprus-city-of-dreams/1107.jpg"
        ],
        subtitle: "Luxury Resort Squash",
        description: [
            "ASB는 키프로스 리마솔의 City of Dreams 리조트에 두 개의 스쿼시 코트 설치를 성공적으로 완료했습니다.",
            "클라이언트의 요청에 따라 JUNCKERS 하드우드 바닥재가 시공되었습니다. 이를 통해 관광객과 지역 주민들은 럭셔리한 리조트 환경에서 스쿼시를 즐길 수 있게 되었습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System40" },
            { label: "Walls", value: "ASB System40" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor (JUNCKERS hardwood)" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB ShowGlassCourt",
        title: "Two ASB ShowGlassCourts",
        location: "Cairo & El Gouna, Egypt",
        image: "/projects/cairo-el-gouna/main.jpg",
        slug: "cairo-el-gouna-2022",
        gallery: [
            "/projects/cairo-el-gouna/main.jpg",
            "/projects/cairo-el-gouna/363.jpg",
            "/projects/cairo-el-gouna/364.jpg",
            "/projects/cairo-el-gouna/366.jpg",
            "/projects/cairo-el-gouna/367.jpg"
        ],
        subtitle: "World Championship & El Gouna Action",
        description: [
            "역사상 가장 큰 스쿼시 이벤트인 PSA 월드 챔피언십(상금 110만 달러)을 위해 두 개의 ASB ShowGlassCourt가 세워졌습니다.",
            "이집트 스쿼시 연맹이 소유한 측면 두 개의 문이 있는 코트는 Club S Allegria Giza/Cairo에, 뒷벽 중앙에 표준 문이 있는 새로운 코트는 이집트 문명 국립 박물관에 설치되었습니다.",
            "이집트 선수들은 ASB의 최신 혁신 기술인 새로운 버전의 ASB GlassFloor를 테스트하기도 했습니다."
        ],
        details: [
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Floors", value: "ASB GlassFloor (New Version)" },
            { label: "Event", value: "PSA World Championships 2022" }
        ]
    },
    {
        category: "ASB System100",
        title: "STK Baldershallen",
        location: "Sundsvall, Sweden",
        image: "/projects/stk-baldershallen/main.jpg",
        slug: "stk-baldershallen",
        gallery: [
            "/projects/stk-baldershallen/main.jpg",
            "/projects/stk-baldershallen/324.jpg",
            "/projects/stk-baldershallen/325.jpg",
            "/projects/stk-baldershallen/326.jpg",
            "/projects/stk-baldershallen/327.jpg",
            "/projects/stk-baldershallen/328.jpg",
            "/projects/stk-baldershallen/329.jpg"
        ],
        subtitle: "Innovative Racket and Sports Hall",
        description: [
            "룬스발(Sundsvall)은 쿨한 도시적 감성과 독특한 자연경관을 제공하는 스웨덴의 매력적인 도시입니다. Baldershallen 프로젝트는 테니스, 파델, 배드민턴, 스쿼시, 짐 등 다양한 활동을 결합한 스웨덴에서 가장 훌륭하고 혁신적인 라켓 스포츠 홀입니다.",
            "ASB Freestanding GlassBackWall이 적용된 5개의 ASB System100 스쿼시 코트 설치는 약 5주가 소요되었으며 2022년에 완공되었습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" }
        ]
    },
    {
        category: "ASB PermanentGlassCourt",
        title: "ASB SquashCourt in Private Villa",
        location: "Private Location",
        image: "/projects/private-villa/main.jpg",
        slug: "private-villa",
        gallery: [
            "/projects/private-villa/main.jpg",
            "/projects/private-villa/83.jpg",
            "/projects/private-villa/82.jpg",
            "/projects/private-villa/80.jpg",
            "/projects/private-villa/87.jpg",
            "/projects/private-villa/84.jpg",
            "/projects/private-villa/81.jpg",
            "/projects/private-villa/86.jpg",
            "/projects/private-villa/85.jpg"
        ],
        subtitle: "Luxury Private Court",
        description: [
            "아름다운 건축물 내에 ASB PermanentGlassCourt가 완벽하게 통합되었습니다.",
            "개인 빌라의 품격을 높여주는 프리미엄 스쿼시 코트입니다."
        ],
        details: [
            { label: "Courts", value: "ASB PermanentGlassCourt" }
        ]
    },
    {
        category: "ASB System100",
        title: "USA University of Pennsylvania",
        location: "Philadelphia, USA",
        image: "/projects/usa-penn/main.jpg",
        slug: "usa-penn",
        gallery: [
            "/projects/usa-penn/main.jpg",
            "/projects/usa-penn/806.jpg",
            "/projects/usa-penn/805.jpg",
            "/projects/usa-penn/807.jpg",
            "/projects/usa-penn/808.jpg",
            "/projects/usa-penn/804.jpg"
        ],
        subtitle: "Penn Squash Center",
        description: [
            "아이비리그 명문 펜실베이니아 대학교의 이 스쿼시 센터는 3개 층에 걸쳐 10개의 ASB System100 코트와 2개의 ASB ShowGlassCourt를 자랑합니다.",
            "이 센터는 대학 남녀 팀뿐만 아니라 US 주니어 오픈과 같은 수많은 주니어 대회를 개최합니다.",
            "기존 건물 외관은 유지한 채 내부를 완전히 리모델링하여 12개의 새로운 코트를 기존 공간에 완벽하게 배치했습니다. Ewing Cole의 건축가들과 L.F. Driscoll Company LLC의 완벽한 시공 덕분에 이 도전적인 프로젝트가 성공적으로 완료되었습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB PermanentGlassCourt" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB GlassWall" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Belarus Minsk Falcon Sports Centre",
        location: "Minsk, Belarus",
        image: "/projects/belarus-minsk/main.jpg",
        slug: "belarus-minsk",
        gallery: [
            "/projects/belarus-minsk/main.jpg",
            "/projects/belarus-minsk/50.jpg",
            "/projects/belarus-minsk/49.jpg",
            "/projects/belarus-minsk/48.jpg",
            "/projects/belarus-minsk/46.jpg"
        ],
        subtitle: "Falcon Club",
        description: [
            "4개의 ASB System100 코트와 파란색 유리 벽 및 어두운 스포츠 바닥재가 적용된 2개의 ASB PermanentGlassCourt를 설치했습니다.",
            "측면 유리에 적용된 원웨이 비전(One Way Vision) 기술 덕분에 관중은 코트 내부를 볼 수 있지만, 선수는 내부에서 외부를 볼 수 없어 경기에만 온전히 집중할 수 있습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System40" },
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB PermanentGlassCourt" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System40" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB PermanentGlassWall" },
            { label: "Walls", value: "ASB GlassWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Switzerland Uster SquashArena",
        location: "Uster, Switzerland",
        image: "/projects/switzerland-uster/main.jpg",
        slug: "switzerland-uster",
        gallery: [
            "/projects/switzerland-uster/main.jpg",
            "/projects/switzerland-uster/51.jpg",
            "/projects/switzerland-uster/53.jpg",
            "/projects/switzerland-uster/54.jpg",
            "/projects/switzerland-uster/55.jpg"
        ],
        subtitle: "SquashArena Uster",
        description: [
            "독특한 ASB ShowGlassCourt를 중심으로 양쪽에 ASB System100 스쿼시 코트가 배치된 멋진 구조입니다.",
            "일반 코트에도 ASB Movable SideWall(이동식 사이드월)이 장착되어 있습니다. 이러한 혁신을 통해 스쿼시 코트는 다목적 공간으로 변모하며, 오늘날 레저 센터에서 요구하는 다양한 활용성을 제공합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB GameCourt" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Movable SideWall" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Qatar Doha Aspire Academy",
        location: "Doha, Qatar",
        image: "/projects/aspire-academy/main.jpg",
        slug: "aspire-academy",
        gallery: [
            "/projects/aspire-academy/main.jpg",
            "/projects/aspire-academy/314.jpg",
            "/projects/aspire-academy/312.jpg",
            "/projects/aspire-academy/313.jpg",
            "/projects/aspire-academy/315.jpg"
        ],
        subtitle: "Prime Squash Training Facility",
        description: [
            "카타르 도하의 아스파이어 아카데미(Aspire Academy)는 2010년에 건립된 이래 카타르 최고의 스쿼시 훈련 시설로 자리 잡았습니다.",
            "6면의 ASB System100 코트에는 전동식 이동 벽(ASB electrical movable side walls)이 설치되어 있어 훈련 목적에 따라 공간을 효율적으로 활용할 수 있습니다.",
            "또한, 원웨이 비전(One-way vision) 기술이 적용된 ASB ShowGlassCourt는 관중에게는 완벽한 시야를, 선수에게는 방해 없는 집중력을 제공합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB Movable SideWall" }
        ]
    },
    {
        category: "ASB System100",
        title: "Belgium Herentals",
        location: "Herentals, Belgium",
        image: "/projects/belgium-herentals/main.jpg",
        slug: "belgium-herentals",
        gallery: [
            "/projects/belgium-herentals/main.jpg",
            "/projects/belgium-herentals/587.jpg",
            "/projects/belgium-herentals/588.jpg",
            "/projects/belgium-herentals/589.jpg",
            "/projects/belgium-herentals/590.jpg",
            "/projects/belgium-herentals/591.jpg",
            "/projects/belgium-herentals/592.jpg",
            "/projects/belgium-herentals/593.jpg",
            "/projects/belgium-herentals/594.jpg",
            "/projects/belgium-herentals/595.jpg",
            "/projects/belgium-herentals/596.jpg",
            "/projects/belgium-herentals/597.jpg",
            "/projects/belgium-herentals/598.jpg",
            "/projects/belgium-herentals/599.jpg"
        ],
        subtitle: "State-of-the-Art Squash Centre",
        description: [
            "벨기에 헤렌탈스(Herentals)에 위치한 이 스쿼시 센터는 ASB의 최첨단 기술이 집약된 공간입니다.",
            "ASB ShowGlassCourt를 비롯하여 ASB System100 코트들이 설치되어 있으며, 전동식 ASB Movable SideWall(이동식 사이드월)이 적용되어 코트 구성을 자유롭게 변경할 수 있습니다.",
            "또한 ASB Rotary GlassBackWall과 ASB SportsFloor가 적용되어 선수들에게 최상의 경기 환경을 제공합니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB GameCourt" },
            { label: "Courts", value: "ASB ShowGlassCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Movable SideWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Walls", value: "ASB Freestanding GlassBackWall" },
            { label: "Walls", value: "ASB Rotary GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB PermanentGlassCourt",
        title: "AIDA diva Luxury Cruise Ship",
        location: "International Waters",
        image: "/projects/aida-diva/main.jpg",
        slug: "aida-diva",
        gallery: [
            "/projects/aida-diva/main.jpg",
            "/projects/aida-diva/307.jpg",
            "/projects/aida-diva/308.jpg",
            "/projects/aida-diva/309.jpg",
            "/projects/aida-diva/310.jpg",
            "/projects/aida-diva/311.jpg"
        ],
        subtitle: "Squash on the High Seas",
        description: [
            "2007년 ASB는 새로운 이정표를 세웠습니다. 스쿼시가 바다 위로 진출한 것입니다. AIDA 크루즈 라인의 럭셔리 라이너 'AIDA diva'의 갑판 위에 ASB AllGlassCourt가 설치되었습니다.",
            "이는 호스트 바빈스키(Horst Babinsky)가 개발한 특수 알루미늄 베이스와 탄성 있는 안전 유리 패널 설계를 통해 선박의 흔들림과 거친 해양 환경을 완벽하게 견뎌냅니다.",
            "승객들은 태양 아래서, 또는 달빛 아래서 바다를 배경으로 특별한 스쿼시 경험을 즐길 수 있습니다."
        ],
        details: [
            { label: "Courts", value: "ASB PermanentGlassCourt" },
            { label: "Floors", value: "ASB GlassFloor" }
        ]
    },
    {
        category: "ASB System100",
        title: "Six new ASB SquashCourts",
        location: "Gdańsk, Poland",
        image: "/projects/oliwa/1110.jpg",
        slug: "oliwa-squash",
        gallery: [
            "/projects/oliwa/1110.jpg",
            "/projects/oliwa/1111.jpg",
            "/projects/oliwa/1112.jpg",
            "/projects/oliwa/1113.jpg",
            "/projects/oliwa/1114.jpg",
            "/projects/oliwa/1115.jpg",
            "/projects/oliwa/1116.jpg",
            "/projects/oliwa/1117.jpg",
            "/projects/oliwa/1118.jpg"
        ],
        subtitle: "Oliwa Squash",
        description: [
            "그단스크의 새로운 ASB 스쿼시 센터 – Oliwa Squash",
            "ASB Squash는 파트너 Wojtek Kosow와 협력하여 폴란드 그단스크에 최신식 스쿼시 센터인 Oliwa Squash를 오픈했습니다.",
            "이 현대적인 센터는 모든 레벨의 선수들에게 최상의 경기 경험을 제공하기 위해 정밀하게 설계된 6개의 ASB SquashCourts를 갖추고 있습니다.",
            "입문자부터 숙련된 선수까지, Oliwa Squash에서 열정과 성과가 어우러지는 최고 수준의 환경을 경험할 수 있습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System40" },
            { label: "Courts", value: "ASB System100" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "USA Houston Squash Club",
        location: "Houston, USA",
        image: "/projects/usa-houston/main.jpg",
        slug: "usa-houston",
        gallery: [
            "/projects/usa-houston/main.jpg",
            "/projects/usa-houston/785.jpg",
            "/projects/usa-houston/781.jpg",
            "/projects/usa-houston/782.jpg",
            "/projects/usa-houston/777.jpg"
        ],
        subtitle: "Host of World Junior Championships",
        description: [
            "텍사스 휴스턴에 위치한 이 센터는 4개의 새로운 ASB System100 코트와 방송 중계가 가능한 PSA 규격의 쇼 코트를 요청했습니다.",
            "미국 파트너사인 Endurance Squash Courts가 설치를 담당했으며, 이후 2024년 WSF 세계 주니어 스쿼시 선수권 대회 개최지로 선정되는 영광을 안았습니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB GlassWall" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    },
    {
        category: "ASB System100",
        title: "Ball Sports Arena Dresden",
        location: "Dresden, Germany",
        image: "/projects/dresden-ball-sports/main.jpg",
        slug: "dresden-ball-sports",
        gallery: [
            "/projects/dresden-ball-sports/main.jpg",
            "/projects/dresden-ball-sports/900.jpg",
            "/projects/dresden-ball-sports/899.jpg",
            "/projects/dresden-ball-sports/901.jpg",
            "/projects/dresden-ball-sports/902.jpg",
            "/projects/dresden-ball-sports/903.jpg",
            "/projects/dresden-ball-sports/904.jpg",
            "/projects/dresden-ball-sports/905.jpg"
        ],
        subtitle: "Multifunctional Sports Arena",
        description: [
            "우리는 전동식 ASB Movable SideWall(이동식 사이드월)이 장착된 스쿼시 코트를 설치했으며, 그중 한 코트에는 인터랙티브 스쿼시(interactiveSQUASH) 시스템과 ASB GlassFloor가 적용되었습니다.",
            "이 아레나는 스쿼시뿐만 아니라 농구, 배드민턴 등 다양한 스포츠를 즐길 수 있는 다목적 스포츠 센터입니다."
        ],
        details: [
            { label: "Courts", value: "ASB System100" },
            { label: "Courts", value: "ASB GameCourt" },
            { label: "Walls", value: "ASB System100" },
            { label: "Walls", value: "ASB Pro GlassBackWall" },
            { label: "Floors", value: "ASB SportsFloor" },
            { label: "Floors", value: "ASB GlassFloor" },
            { label: "Accessories", value: "ASB Height AdjustableTin" }
        ]
    }
];
