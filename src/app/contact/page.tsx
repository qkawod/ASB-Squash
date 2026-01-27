'use client'

import { useState } from 'react'
import { Check } from "lucide-react"

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
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent successfully.' });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col lg:flex-row pt-20">
            {/* Left Column: Form */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:pb-0 flex flex-col justify-start lg:pt-32 border-r border-transparent relative">
                <div className="max-w-xl mx-auto w-full relative z-30">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-slate-900 leading-tight">Start Your Project</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Name *</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name *</label>
                                <input
                                    name="companyName"
                                    type="text"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Job Title</label>
                                <input
                                    name="jobTitle"
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Email *</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Telephone *</label>
                                <input
                                    name="telephone"
                                    type="tel"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Inquiry Type *</label>
                                <select name="inquiryType" className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                                    <option>Sales</option>
                                    <option>Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Product Interest *</label>
                                <select name="productInterest" className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                                    <option>ASB System 40</option>
                                    <option>ASB System 100</option>
                                    <option>ASB GlassCourt</option>
                                    <option>ASB GameCourt</option>
                                    <option>ASB TPoint</option>
                                    <option>ASB RainbowCourt</option>
                                    <option>ASB LumiFlex</option>
                                    <option>ASB GlassFloor</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message *</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="프로젝트 규모, 일정 등..."
                                className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-slate-900 focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-slate-400"
                            />
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="relative flex items-center">
                                <input type="checkbox" required className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:bg-slate-900 checked:border-slate-900 transition-all" />
                                <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={14} />
                            </div>
                            <label className="text-sm text-slate-500 leading-tight select-none">
                                [필수] 개인정보 수집 및 이용에 동의합니다.
                            </label>
                        </div>

                        {submitStatus && (
                            <div className={`p-4 rounded ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-slate-900 text-white font-bold py-4 rounded hover:bg-slate-800 transition-colors tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Column: Visual */}
            <div className="w-full lg:w-1/2 bg-white relative flex flex-col items-center justify-center z-10 overflow-visible">
                <div className="w-full flex flex-col items-center justify-center gap-[25px] transform transition-transform duration-500 lg:-translate-x-[30px] lg:-translate-y-[30px] xl:-translate-x-[90px] xl:-translate-y-[120px]">
                    {/* Logo Area */}
                    <img src="/logo/logosquashcourt_s.svg" alt="ASB SquashCourts" className="w-64 h-auto mx-auto translate-x-[40px]" />

                    {/* Video replacing image */}
                    <div className="w-full aspect-video relative translate-x-[20px] rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                        >
                            <source src="/ASB%20ShowGlassCourt%202024%20Locations.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
