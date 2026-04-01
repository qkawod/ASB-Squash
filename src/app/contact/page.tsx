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
        <div className="min-h-screen bg-white text-slate-900 pt-24 pb-12 overflow-x-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="mb-12 lg:mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">프로젝트 문의</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[40%]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2 group">
                                <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">성함 *</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="이름을 입력해 주세요"
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">회사명 *</label>
                                    <input
                                        name="companyName"
                                        type="text"
                                        required
                                        placeholder="기업 또는 기관명"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">직함</label>
                                    <input
                                        name="jobTitle"
                                        type="text"
                                        placeholder="직위/직책 (선택 사항)"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">이메일 주소 *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="example@email.com"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">연락처 *</label>
                                    <input
                                        name="telephone"
                                        type="tel"
                                        required
                                        placeholder="010-0000-0000"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">문의 유형 *</label>
                                    <div className="relative">
                                        <select name="inquiryType" title="문의 유형 선택" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300 appearance-none cursor-pointer">
                                            <option value="Purchase">구매</option>
                                            <option value="Technical">기술</option>
                                            <option value="Support">고객지원</option>
                                            <option value="Partnership">파트너쉽</option>
                                            <option value="Other">기타</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l border-slate-200 pl-3">
                                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">관심 제품 *</label>
                                    <div className="relative">
                                        <select name="productInterest" title="관심 제품 선택" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300 appearance-none cursor-pointer">
                                            <option value="ASB System 40">ASB System 40</option>
                                            <option value="ASB System 100">ASB System 100</option>
                                            <option value="ASB GlassCourt">ASB GlassCourt</option>
                                            <option value="ASB TPoint">ASB TPoint</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l border-slate-200 pl-3">
                                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="block text-sm font-semibold text-slate-700 ml-1 transition-colors group-focus-within:text-slate-900">상세 내용 *</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="프로젝트 규모, 일정 또는 궁금하신 사항을 자유롭게 적어주세요."
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm group-hover:border-slate-300 placeholder:text-slate-400 resize-none"
                                />
                            </div>

                            <div className="flex items-start gap-4 py-2">
                                <div className="relative flex items-center pt-1">
                                    <input type="checkbox" required id="privacy" className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-slate-200 bg-white checked:bg-slate-900 checked:border-slate-900 transition-all" />
                                    <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={16} />
                                </div>
                                <label htmlFor="privacy" className="text-sm text-slate-500 leading-relaxed select-none cursor-pointer">
                                    <span className="font-bold text-slate-700">[필수]</span> 개인정보 수집 및 이용에 동의합니다. <br />
                                    <span className="text-xs">보내주신 정보는 문의 답변을 위한 용도로만 사용됩니다.</span>
                                </label>
                            </div>

                            {submitStatus && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl border ${submitStatus.success ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'}`}
                                >
                                    <p className="flex items-center gap-2">
                                        {submitStatus.success ? <Check size={18} /> : null}
                                        {submitStatus.message}
                                    </p>
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl hover:bg-slate-800 active:scale-[0.99] transition-all tracking-wider text-base disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-3">
                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        문의 전송 중...
                                    </span>
                                ) : (
                                    <>
                                        문의하기
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[60%] lg:sticky lg:top-8 h-fit"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-10" />

                            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col gap-10">
                                <div className="text-center">
                                    <img src="/logo/logosquashcourt_s.svg" alt="ASB SquashCourts" className="w-[180px] h-auto mx-auto" />
                                </div>
                                
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-50 relative group">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/ASB%20ShowGlassCourt%202024%20Locations.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
