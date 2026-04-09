'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { StatsSection } from "@/components/StatsSection"
import { TechSlider } from "@/components/TechSlider"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Optimized H1 and Intro - Visually Hidden or Styled for Search Engines */}
      <h1 className="sr-only">ASBSQUASH - 글로벌 No.1 스쿼시 코트 시공 및 스쿼시장 설계 전문</h1>
      <div className="sr-only">
        <p>세계 No.1 ASB 스쿼시 코트(ASBSQUASH) 공식 한국 서비스입니다. 1976년부터 이어진 에이에스비스쿼시의 혁신 기술로 쇼글라스코트, 가변형 벽체, 시스템 코트 등 대한민국 스쿼시 경기장의 표준을 제시합니다. 나주스쿼시, 마산스쿼시, 울산스쿼시 등 전국 주요 경기장 시공 실적을 보유한 국내 유일의 전문 솔루션을 확인하십시오.</p>
      </div>

      {/* 1. HERO SECTION - LOCKED */}
      <section className="relative w-full bg-slate-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        >
          <source src="/media/homepage_bg23_2.webm" type="video/webm" />
        </video>
      </section>

      {/* Federation Logos Section - Option 2 (White Background) */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 md:gap-8 overflow-hidden py-4 flex-wrap">
            {[
              { src: '/logo/foto_1.png', p: 'p-0' },
              { src: '/logo/foto_2.png', p: 'p-0' },
              { src: '/logo/WSF.png', p: 'p-10' }, // Final WSF
              { src: '/logo/foto_4.png', p: 'p-0' },
              { src: '/logo/foto_3.png', p: 'p-0' }, // Restored 3
              { src: '/logo/foto_6.png', p: 'p-11' }  // French Logo
            ].map((logo, idx) => (
              <div key={idx} className={`w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 ${logo.p}`}>
                <img src={logo.src} alt={`Partner Logo ${idx}`} className={`w-full h-full object-contain ${logo.src.includes('WSF') ? 'scale-100' : 'scale-110'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* 2. THE STANDARD (STATS) */}
      <StatsSection backgroundImage="/athlete_wide.png" />

      {/* 3. PRODUCT GATEWAY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Product 1: System Courts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/products/asb-system40" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/system40/system40_03.jpg" alt="System Courts" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">System 40</h3>
                  {/* Description removed */}
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    Explore Systems <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Product 2: Glass Courts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/products/asb-glasscourt" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/GlassCourt/london-classic-nc-08698-scaled.jpg" alt="Glass Courts" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">Glass Court</h3>
                  {/* Description removed */}
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    View GlassCourts <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Product 3: ASB GlassFloor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/products/asb-system100" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/system100/297-1024x802.jpg" alt="ASB GlassFloor" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">System 100</h3>
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    Discover System 100 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Product 4: ASB GameCourt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/products/asb-gamecourt" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/b_27.jpg" alt="ASB GameCourt" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">ASB GameCourt</h3>
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    Explore GameCourt <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Product 5: ASB OutdoorSquashCourt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/products/asb-outdoorsquashcourt" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/OutdoorCourt/00-story-image-nyc-public-squash.jpg.webp" alt="ASB OutdoorSquashCourt" className="w-full h-full object-cover object-[center_85%] bg-slate-900 transition-transform duration-700 scale-[1.2] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">ASB OutdoorSquashCourt</h3>
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    View OutdoorSquashCourt <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Product 6: ASB RainbowCourt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/products/asb-rainbowcourt" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
                <img src="/b_106.jpg" alt="ASB RainbowCourt" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">

                  <h3 className="text-3xl font-bold text-white mb-4">ASB RainbowCourt</h3>
                  <span className="inline-flex items-center text-white font-bold group-hover:text-[#C62828] transition-colors">
                    Discover RainbowCourt <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY SLIDER */}
      <TechSlider />

    </div >
  )
}
