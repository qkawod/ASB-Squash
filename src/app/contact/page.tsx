'use client'

import { useState } from 'react'
import { Check, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            companyName: formData.get('companyName'),
            jobTitle: formData.get('jobTitle'),
            email: formData.get('email'),
            telephone: formData.get('telephone'),
            inquiryType: formData.get('inquiryType'),
            productInterest: formData.get('productInterest'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || '메시지 전송에 실패했습니다.');
            }

            setSubmitStatus({ success: true, message: '감사합니다! 메시지가 성공적으로 전송되었습니다.' });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setSubmitStatus({ success: false, message: '메시지 전송 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-white text-slate-900 pt-24 pb-12 overflow-x-hidden selection:bg-slate-900 selection:text-white">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                
                {/* Unified Header & Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-x-20 lg:gap-x-32">
                    
                    {/* Left Column Header (Position maintained) */}
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-5xl lg:text-7xl font-light text-slate-900 mb-4 tracking-tighter uppercase break-keep">
                            ASBSQUASH<br />전문가 시공 상담
                        </h1>
                        <div className="h-[1px] w-24 bg-slate-900 mb-8 lg:mb-12" />
                    </div>

                    {/* Right Column Header Label (Aligned with h1) */}
                    <div className="hidden lg:block pt-4 lg:pt-10">
                        <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 pl-1">기본 정보</h2>
                    </div>

                    {/* Main Content Area */}
                    <div className="contents contents-area">
                    
                    {/* Right Column: Architectural Form (Moved to Right) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:col-start-2 lg:row-start-2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            
                            {/* Section 01: Identification */}
                            <section className="relative">
                                <span className="absolute -top-10 -left-4 text-7xl font-black text-slate-50 opacity-[0.03] select-none pointer-events-none">01</span>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6 pl-1 lg:hidden">기본 정보</h2>
                                
                                <div className="space-y-8">
                                    <div className="group relative">
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-focus-within:text-slate-900">성함 *</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="이름을 입력해 주세요"
                                            className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium"
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-12">
                                        <div className="flex-[3] group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-focus-within:text-slate-900">회사명 *</label>
                                            <input
                                                name="companyName"
                                                type="text"
                                                required
                                                placeholder="기업 또는 기관명"
                                                className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium"
                                            />
                                        </div>
                                        <div className="flex-[2] group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-focus-within:text-slate-900">직함</label>
                                            <input
                                                name="jobTitle"
                                                type="text"
                                                placeholder="직위/직책 (선택 사항)"
                                                className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 transition-colors group-focus-within:text-slate-900">이메일 주소 *</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="example@email.com"
                                                className="w-full bg-transparent border-b border-slate-200 py-2 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 transition-colors group-focus-within:text-slate-900">연락처 *</label>
                                            <input
                                                name="telephone"
                                                type="tel"
                                                required
                                                placeholder="010-0000-0000"
                                                className="w-full bg-transparent border-b border-slate-200 py-2 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 02: Project Details */}
                            <section className="relative">
                                <span className="absolute -top-10 -left-4 text-7xl font-black text-slate-50 opacity-[0.03] select-none pointer-events-none">02</span>
                                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6 pl-1">프로젝트 상세</h2>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-focus-within:text-slate-900">문의 유형 *</label>
                                            <div className="relative">
                                                <select name="inquiryType" title="문의 유형 선택" className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer font-medium">
                                                    <option value="Purchase">구매</option>
                                                    <option value="Technical">기술</option>
                                                    <option value="Support">고객지원</option>
                                                    <option value="Partnership">파트너쉽</option>
                                                    <option value="Other">기타</option>
                                                </select>
                                                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                                                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group relative">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-focus-within:text-slate-900">관심 제품 *</label>
                                            <div className="relative">
                                                <select name="productInterest" title="관심 제품 선택" className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer font-medium">
                                                    <option value="ASB System 40">ASB System 40</option>
                                                    <option value="ASB System 100">ASB System 100</option>
                                                    <option value="ASB GlassCourt">ASB GlassCourt</option>
                                                    <option value="ASB TPoint">ASB TPoint</option>
                                                </select>
                                                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                                                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 transition-colors group-focus-within:text-slate-900">상세 내용 *</label>
                                        <textarea
                                            name="message"
                                            rows={1}
                                            required
                                            placeholder="프로젝트 규모, 일정 또는 궁금하신 사항을 자유롭게 적어주세요."
                                            className="w-full bg-transparent border-b border-slate-200 py-2 text-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-200 font-medium resize-none overflow-hidden"
                                            onInput={(e) => {
                                                const target = e.target as HTMLTextAreaElement;
                                                target.style.height = 'auto';
                                                target.style.height = target.scrollHeight + 'px';
                                            }}
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="relative flex items-center pt-1">
                                        <input type="checkbox" required id="privacy" className="peer h-4 w-4 cursor-pointer appearance-none border border-slate-200 bg-white checked:bg-slate-900 checked:border-slate-900 transition-all rounded-sm" />
                                        <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={10} />
                                    </div>
                                    <label htmlFor="privacy" className="text-[10px] text-slate-400 leading-tight select-none cursor-pointer uppercase tracking-wider font-medium">
                                        [필수] 개인정보 수집 및 이용에 동의합니다. <br />
                                        <span className="text-[9px] opacity-60">보내주신 정보는 문의 답변을 위한 용도로만 사용됩니다.</span>
                                    </label>
                                </div>

                                {submitStatus && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-3 border-l-2 ${submitStatus.success ? 'bg-slate-50 border-slate-900 text-slate-900' : 'bg-red-50 border-red-500 text-red-700'}`}
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                            {submitStatus.success ? <Check size={12} /> : null}
                                            {submitStatus.message}
                                        </p>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-fit min-w-[200px] bg-slate-900 text-white font-bold py-4 px-12 hover:bg-slate-800 transition-all uppercase tracking-[0.3em] text-[10px] flex items-center justify-between disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-3">
                                            <svg className="animate-spin h-3 w-3 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            전송 중...
                                        </span>
                                    ) : (
                                        <>
                                            문의하기
                                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Left Column: Dynamic Visual */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="w-full lg:col-start-1 lg:row-start-2 lg:sticky lg:top-32"
                    >
                        <div className="relative group">
                            <div className="bg-slate-50 p-1 rounded-[1px] overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] lg:aspect-video relative overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                                    >
                                        <source src="/ASB%20ShowGlassCourt%202024%20Locations.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
                                </div>
                                <div className="p-10 bg-white">
                                    <img src="/logo/logosquashcourt_s.svg" alt="ASB SquashCourts" className="h-10 w-auto opacity-20 grayscale" />
                                    <p className="mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] leading-loose">
                                        Global Standard of Excellence <br />
                                        Since 1976. INNOVATION & PERFORMANCE.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    )
}
