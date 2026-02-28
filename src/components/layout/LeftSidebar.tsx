"use client";

import { useState, useEffect, useMemo } from "react";
import { Bookmark, HelpCircle, Info } from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";

const faqs = [
    { q: "What does SYD do?", a: "We help visionaries build powerful personal brands through strategy, content, and growth systems." },
    { q: "How long to see results?", a: "Most clients see measurable growth within 4–8 weeks of launching their brand strategy." },
    { q: "Do you work with beginners?", a: "Absolutely! Whether you're starting fresh or scaling up, we tailor our approach to your stage." },
    { q: "What's included in a package?", a: "Each package includes auditing, strategy, content creation, and ongoing growth support." },
];

export default function LeftSidebar() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Base date: Feb 28, 2026, base count: 1,248
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

    return (
        <div className="bg-[rgba(238,241,189,0.06)] rounded-xl border border-brand-border overflow-hidden">
            {/* Banner */}
            <div className="h-16 bg-brand-accent rounded-t-xl" />

            {/* Avatar + Profile */}
            <div className="flex flex-col items-center -mt-8 px-4 pb-3">
                <SydLogo size="lg" />
                <div className="flex items-center gap-1 mt-2">
                    <h3 className="font-semibold text-brand-light text-sm">
                        SYD | Scale Your Dreams
                    </h3>
                    <SydBadge />
                </div>
                <p className="text-brand-muted text-xs text-center leading-tight">
                    Premium Personal Branding Agency
                </p>
            </div>

            {/* Stats */}
            <div className="border-t border-brand-border mt-1 pt-3 px-4 pb-3">
                <div className="flex justify-between items-center text-xs mb-1.5">
                    <div className="flex items-center gap-1 relative">
                        <span className="text-brand-muted">Profile viewers</span>
                        <button
                            className="cursor-pointer"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            onClick={() => setShowTooltip(!showTooltip)}
                        >
                            <Info className="w-3 h-3 text-brand-muted hover:text-brand-light transition" />
                        </button>
                        {showTooltip && (
                            <div className="absolute left-0 top-full mt-1 z-50 bg-brand-bg border border-brand-border rounded-lg p-2.5 shadow-xl text-[11px] text-brand-light w-48 leading-relaxed">
                                Number of people who visited the website. Increases by 75+ every day.
                            </div>
                        )}
                    </div>
                    <span className="text-brand-card font-semibold">
                        {displayCount.toLocaleString()}
                    </span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="text-brand-muted">Post impressions</span>
                    <span className="text-brand-card font-semibold">15.3k</span>
                </div>
            </div>

            {/* Saved items */}
            <div className="border-t border-brand-border mt-1 pt-3 px-4 pb-3">
                <div className="flex items-center gap-2 text-brand-muted text-sm cursor-pointer hover:text-brand-light transition">
                    <Bookmark className="w-4 h-4" />
                    <span>Saved items</span>
                </div>
            </div>

            {/* FAQs */}
            <div className="border-t border-brand-border mt-1 pt-3 px-4 pb-4">
                <h4 className="text-brand-light text-sm font-semibold mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    FAQs
                </h4>
                <ul className="space-y-1">
                    {faqs.map((faq, i) => (
                        <li key={i}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="flex items-start gap-2 text-brand-muted text-xs py-1.5 hover:text-brand-light cursor-pointer transition w-full text-left"
                            >
                                <span className="text-brand-card mt-0.5 shrink-0">Q</span>
                                <span>{faq.q}</span>
                            </button>
                            {openFaq === i && (
                                <div className="ml-5 mb-2 text-brand-light text-xs leading-relaxed bg-[rgba(238,241,189,0.06)] rounded-lg p-2.5 border border-brand-border">
                                    {faq.a}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
