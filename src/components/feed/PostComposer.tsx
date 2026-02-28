"use client";

import { Target, TrendingDown, Megaphone } from "lucide-react";
import SydLogo from "@/components/ui/SydLogo";

export default function PostComposer() {
    return (
        <div className="bg-[rgba(238,241,189,0.06)] rounded-xl border border-brand-border p-4">
            {/* Row 1: Avatar + Input */}
            <div className="flex items-center gap-3">
                <SydLogo size="xs" />
                <input
                    type="text"
                    placeholder="Start a post, share your dream..."
                    className="flex-1 rounded-full bg-[rgba(238,241,189,0.08)] border border-brand-border px-4 py-2.5 text-sm text-brand-light placeholder:text-brand-muted outline-none"
                />
            </div>

            {/* Row 2: Problems SYD Solves */}
            <div className="flex items-center justify-around mt-3 pt-2">
                {[
                    { icon: TrendingDown, label: "Weak Brand Identity", color: "text-red-400" },
                    { icon: Megaphone, label: "Low Online Visibility", color: "text-amber-400" },
                    { icon: Target, label: "No Lead Pipeline", color: "text-blue-400" },
                ].map((action) => (
                    <button
                        key={action.label}
                        className="flex items-center gap-1.5 text-brand-muted text-sm hover:text-brand-light transition cursor-pointer px-3 py-1.5 rounded-lg hover:bg-[rgba(238,241,189,0.08)]"
                    >
                        <action.icon className={`w-4 h-4 ${action.color}`} />
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
