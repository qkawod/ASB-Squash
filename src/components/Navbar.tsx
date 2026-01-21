"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    {
        label: "제품군",
        href: "/products",
    },
    {
        label: "테크놀로지",
        href: "/technology",
    },
    {
        label: "레퍼런스",
        href: "/references",
    },
    {
        label: "컴퍼니",
        href: "/company",
    },
    { label: "컨택트", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md text-slate-900 border-b border-slate-200">
            <div className="w-full px-10 h-24 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img src="/logo/logosquashcourt_s.svg" alt="ASB Squash" className="h-[5.4rem] w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8 mr-[300px]">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            <Link
                                href={item.href}
                                className="text-[20px] font-medium hover:text-yellow-600 transition-colors flex items-center gap-1"
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.href}
                                            className="text-lg font-medium text-slate-900 block py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    )
}
