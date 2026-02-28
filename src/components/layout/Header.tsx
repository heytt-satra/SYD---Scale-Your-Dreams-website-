"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Search,
    House,
    MessageSquareMore,
    X,
    Video,
    Calendar,
    MessageCircle,
    ExternalLink,
    Bookmark,
    HelpCircle,
    Info,
} from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";

const faqs = [
    { q: "What does SYD do?", a: "We help visionaries build powerful personal brands through strategy, content, and growth systems." },
    { q: "How long to see results?", a: "Most clients see measurable growth within 4–8 weeks of launching their brand strategy." },
    { q: "Do you work with beginners?", a: "Absolutely! Whether you're starting fresh or scaling up, we tailor our approach to your stage." },
    { q: "What's included in a package?", a: "Each package includes auditing, strategy, content creation, and ongoing growth support." },
];

export default function Header() {
    const [mobileBooking, setMobileBooking] = useState(false);
    const [mobileProfile, setMobileProfile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const profileViewers = useMemo(() => {
        const baseDate = new Date("2026-02-28T00:00:00+05:30");
        const now = new Date();
        const diffDays = Math.floor(
            (now.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const daysSinceBase = Math.max(0, diffDays);
        const totalIncrease = Array.from({ length: daysSinceBase }, (_, i) => {
            const seed = ((i + 7) * 31) % 25;
            return 75 + seed;
        }).reduce((sum, val) => sum + val, 0);
        return 1248 + totalIncrease;
    }, []);

    const [displayCount, setDisplayCount] = useState(profileViewers);

    useEffect(() => {
        const target = profileViewers;
        const start = target - 50;
        const duration = 1200;
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayCount(Math.round(start + (target - start) * eased));
            if (progress >= 1) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [profileViewers]);

    const openBooking = () => {
        setMobileProfile(false);
        setMobileBooking(!mobileBooking);
    };
    const openProfile = () => {
        setMobileBooking(false);
        setMobileProfile(!mobileProfile);
    };

    return (
        <>
            <motion.header
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sticky top-0 z-50 bg-brand-bg/95 border-b border-brand-border backdrop-blur-md"
            >
                <div className="flex items-center justify-between px-4 sm:px-6 py-2 max-w-7xl mx-auto">
                    {/* Left — Logo */}
                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={openProfile}
                            className="lg:hidden cursor-pointer"
                        >
                            <SydLogo size="sm" />
                        </button>
                        <div className="hidden lg:block">
                            <SydLogo size="sm" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-bold text-brand-light font-display text-lg">
                                SYD
                            </span>
                            <p className="text-brand-muted text-xs leading-none">
                                Scale Your Dreams
                            </p>
                        </div>
                    </div>

                    {/* Center — Search (desktop) */}
                    <div className="hidden md:flex items-center gap-2 rounded-full bg-[rgba(238,241,189,0.08)] border border-brand-border px-4 py-2 w-64">
                        <Search className="w-4 h-4 text-brand-muted" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-brand-light text-sm placeholder:text-brand-muted w-full"
                        />
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <div className="flex flex-col items-center text-brand-light cursor-pointer hover:text-brand-card transition">
                            <House className="w-5 h-5" />
                            <span className="text-[10px] mt-0.5 hidden sm:block">Home</span>
                        </div>

                        {/* Messaging — mobile only */}
                        <button
                            onClick={openBooking}
                            className="lg:hidden relative flex flex-col items-center text-brand-light cursor-pointer hover:text-brand-card transition"
                        >
                            <div className="relative">
                                <MessageSquareMore className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] mt-0.5 hidden sm:block">Meet</span>
                        </button>

                        <Link href="/contact" className="border border-brand-card text-brand-card rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium hover:bg-brand-card hover:text-brand-text transition cursor-pointer">
                            Start Free
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* ============ MOBILE PROFILE DRAWER — slides from left ============ */}
            <AnimatePresence>
                {mobileProfile && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                            onClick={() => setMobileProfile(false)}
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 left-0 bottom-0 w-[80vw] max-w-[320px] z-50 lg:hidden overflow-y-auto bg-brand-bg border-r border-brand-border shadow-2xl"
                        >
                            {/* Close */}
                            <div className="flex justify-end p-3">
                                <button
                                    onClick={() => setMobileProfile(false)}
                                    className="text-brand-muted hover:text-brand-light transition cursor-pointer p-1"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Banner */}
                            <div className="h-20 bg-brand-accent mx-4 rounded-xl" />

                            {/* Avatar + Profile */}
                            <div className="flex flex-col items-center -mt-10 px-4 pb-3">
                                <SydLogo size="xl" />
                                <div className="flex items-center gap-1.5 mt-2">
                                    <h3 className="font-semibold text-brand-light text-base">
                                        SYD | Scale Your Dreams
                                    </h3>
                                    <SydBadge />
                                </div>
                                <p className="text-brand-muted text-sm text-center leading-tight">
                                    Premium Personal Branding Agency
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="border-t border-brand-border mx-4 pt-3 pb-3">
                                <div className="flex justify-between items-center text-sm mb-2 px-1">
                                    <div className="flex items-center gap-1.5 relative">
                                        <span className="text-brand-muted">Profile viewers</span>
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => setShowTooltip(!showTooltip)}
                                        >
                                            <Info className="w-3.5 h-3.5 text-brand-muted hover:text-brand-light transition" />
                                        </button>
                                        {showTooltip && (
                                            <div className="absolute left-0 top-full mt-1 z-50 bg-brand-bg border border-brand-border rounded-lg p-2.5 shadow-xl text-xs text-brand-light w-52 leading-relaxed">
                                                Number of people who visited the website. Increases by 75+ every day.
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-brand-card font-semibold text-base">
                                        {displayCount.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm px-1">
                                    <span className="text-brand-muted">Post impressions</span>
                                    <span className="text-brand-card font-semibold text-base">15.3k</span>
                                </div>
                            </div>

                            {/* Saved items */}
                            <div className="border-t border-brand-border mx-4 pt-3 pb-3">
                                <div className="flex items-center gap-2 text-brand-muted text-sm cursor-pointer hover:text-brand-light transition px-1">
                                    <Bookmark className="w-4 h-4" />
                                    <span>Saved items</span>
                                </div>
                            </div>

                            {/* FAQs */}
                            <div className="border-t border-brand-border mx-4 pt-3 pb-6">
                                <h4 className="text-brand-light text-sm font-semibold mb-2 flex items-center gap-1.5 px-1">
                                    <HelpCircle className="w-4 h-4" />
                                    FAQs
                                </h4>
                                <ul className="space-y-1 px-1">
                                    {faqs.map((faq, i) => (
                                        <li key={i}>
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="flex items-start gap-2 text-brand-muted text-sm py-2 hover:text-brand-light cursor-pointer transition w-full text-left"
                                            >
                                                <span className="text-brand-card mt-0.5 shrink-0 font-semibold">Q</span>
                                                <span>{faq.q}</span>
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-6 mb-2 text-brand-light text-sm leading-relaxed bg-[rgba(238,241,189,0.06)] rounded-lg p-3 border border-brand-border">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ============ MOBILE BOOKING PANEL ============ */}
            <AnimatePresence>
                {mobileBooking && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                            onClick={() => setMobileBooking(false)}
                        />
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="fixed top-[52px] left-0 right-0 z-50 lg:hidden"
                        >
                            <div className="bg-brand-bg border-b border-brand-border shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border">
                                    <div className="flex items-center gap-2">
                                        <SydLogo size="sm" />
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-brand-light text-sm font-semibold">
                                                    Book a Call
                                                </span>
                                                <SydBadge size="xs" />
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                                <span className="text-brand-muted text-[10px]">
                                                    Online now
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setMobileBooking(false)}
                                        className="text-brand-muted hover:text-brand-light transition cursor-pointer"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="px-4 pt-3">
                                    <div className="bg-[rgba(238,241,189,0.06)] rounded-lg p-3 mb-3 border border-brand-border">
                                        <p className="text-brand-light text-sm leading-relaxed">
                                            👋 Hey there! Ready to scale your dreams?
                                            Let&apos;s book a free strategy call.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-4 pb-4 space-y-2">
                                    {[
                                        { icon: Video, label: "Free Discovery Call", sub: "30 min · Google Meet" },
                                        { icon: Calendar, label: "Strategy Session", sub: "60 min · Custom plan" },
                                        { icon: MessageCircle, label: "Quick Chat", sub: "15 min · Any question" },
                                    ].map((opt) => (
                                        <a
                                            key={opt.label}
                                            href="#"
                                            className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center shrink-0">
                                                <opt.icon className="w-5 h-5 text-brand-card" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-brand-light text-sm font-semibold group-hover:text-brand-card transition">
                                                    {opt.label}
                                                </p>
                                                <p className="text-brand-muted text-xs">{opt.sub}</p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-brand-muted" />
                                        </a>
                                    ))}
                                </div>

                                <p className="text-brand-muted text-[10px] text-center pb-3">
                                    Typically replies within 2 hours
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
