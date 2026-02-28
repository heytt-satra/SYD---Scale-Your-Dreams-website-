"use client";

import { Info } from "lucide-react";

const blogItems = [
    {
        title: "Personal Branding trends for 2025: Authenticity wins",
        subtitle: "Top news · 10,934 readers",
    },
    {
        title: "Creator Economy hits new milestone",
        subtitle: "3h ago · 5,211 readers",
    },
    {
        title: "How AI is changing copywriting",
        subtitle: "14h ago · 8,402 readers",
    },
    {
        title: "Remote work leadership strategies",
        subtitle: "1d ago · 2,300 readers",
    },
];

const footerLinks = [
    "About",
    "Accessibility",
    "Help Center",
    "Privacy & Terms",
    "Ad Choices",
    "Advertising",
];

export default function RightSidebar() {
    return (
        <div className="bg-[rgba(238,241,189,0.06)] rounded-xl border border-brand-border p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-brand-light font-semibold text-sm">SYD Blogs</h3>
                <Info className="w-4 h-4 text-brand-muted cursor-pointer hover:text-brand-light transition" />
            </div>

            {/* Blog Items */}
            <div className="space-y-1">
                {blogItems.map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-2 items-start py-2 cursor-pointer group"
                    >
                        <div className="bg-brand-card w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" />
                        <div>
                            <p className="text-brand-light text-sm font-medium leading-snug group-hover:text-brand-card transition">
                                {item.title}
                            </p>
                            <p className="text-brand-muted text-xs mt-0.5">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="text-brand-muted text-xs mt-2 hover:text-brand-light transition cursor-pointer">
                Show more ▾
            </button>

            {/* Footer links */}
            <div className="mt-6 border-t border-brand-border pt-4">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {footerLinks.map((link) => (
                        <span
                            key={link}
                            className="text-[10px] text-brand-muted hover:text-brand-light cursor-pointer transition"
                        >
                            {link}
                        </span>
                    ))}
                </div>
                <p className="text-brand-muted text-[10px] text-center mt-2">
                    Corporation © 2024
                </p>
            </div>
        </div>
    );
}
