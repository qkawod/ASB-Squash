import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { StatsSection } from "@/components/StatsSection"
import { TechSlider } from "@/components/TechSlider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <div className="flex justify-around items-center gap-4 overflow-x-auto">
            {[1, 2, 5, 4, 3].map((num) => (
              <div key={num} className="w-[230px] h-[230px] rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 p-2">
                <img src={`/logo/foto_${num}.png`} alt={`Federation Logo ${num}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* 2. THE STANDARD (STATS) */}
      <StatsSection backgroundImage="/Squash-Court-Installation-Courtcraft.webp" />

      {/* 3. PRODUCT GATEWAY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Leading Court Systems</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Product 1: System Courts */}
            <Link href="/products/system-courts" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/system40/system40_03.jpg" alt="System Courts" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Standard</div>
                <h3 className="text-3xl font-bold text-white mb-4">System 40</h3>
                {/* Description removed */}
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  Explore Systems <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Product 2: Glass Courts */}
            <Link href="/products/glass-courts" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/GlassCourt/london-classic-nc-08698-scaled.jpg" alt="Glass Courts" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Spectacle</div>
                <h3 className="text-3xl font-bold text-white mb-4">Glass Court</h3>
                {/* Description removed */}
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  View GlassCourts <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Product 3: ASB GlassFloor */}
            <Link href="/products/glass-courts" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/system100/297-1024x802.jpg" alt="ASB GlassFloor" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Future</div>
                <h3 className="text-3xl font-bold text-white mb-4">System 100</h3>
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  Discover GlassFloor <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Product 4: ASB GameCourt */}
            <Link href="/products" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/b_27.jpg" alt="ASB GameCourt" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Versatile</div>
                <h3 className="text-3xl font-bold text-white mb-4">ASB GameCourt</h3>
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  Explore GameCourt <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Product 5: ASB TPoint */}
            <Link href="/products" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/T-point/88.jpg" alt="ASB TPoint" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Landmark</div>
                <h3 className="text-3xl font-bold text-white mb-4">ASB TPoint</h3>
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  View TPoint <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Product 6: ASB RainbowCourt */}
            <Link href="/products" className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[600px] shadow-lg block">
              <img src="/b_106.jpg" alt="ASB RainbowCourt" className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 scale-[2.0] group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wider">The Training</div>
                <h3 className="text-3xl font-bold text-white mb-4">ASB RainbowCourt</h3>
                <span className="inline-flex items-center text-white font-bold group-hover:text-yellow-500 transition-colors">
                  Discover RainbowCourt <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY SLIDER */}
      <TechSlider />

    </div >
  )
}
