"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageCircle,
    Video,
    Calendar,
    ChevronUp,
    ChevronDown,
    ExternalLink,
} from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";

export default function BookingWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hidden lg:block fixed bottom-0 right-6 z-50">
            {/* Widget Header — always visible */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-brand-accent text-white px-4 py-2.5 rounded-t-xl shadow-2xl cursor-pointer hover:bg-brand-accent/90 transition w-72"
            >
                <div className="relative">
                    <SydLogo size="sm" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-brand-accent" />
                </div>
                <div className="flex items-center gap-1 flex-1">
                    <span className="font-semibold text-sm">Book a Call</span>
                    <SydBadge size="xs" />
                </div>
                <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-white/70" />
                    {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronUp className="w-4 h-4" />
                    )}
                </div>
            </button>

            {/* Widget Body */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-brand-bg border border-brand-border border-t-0 rounded-b-none shadow-2xl w-72"
                    >
                        <div className="p-4">
                            {/* Greeting */}
                            <div className="bg-[rgba(238,241,189,0.06)] rounded-lg p-3 mb-3 border border-brand-border">
                                <p className="text-brand-light text-sm leading-relaxed">
                                    👋 Hey there! Ready to scale your dreams?
                                    Let&apos;s book a free strategy call.
                                </p>
                            </div>

                            {/* Booking Options */}
                            <div className="space-y-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-brand-accent/20 flex items-center justify-center shrink-0">
                                        <Video className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-brand-light text-sm font-semibold group-hover:text-brand-card transition">
                                            Free Discovery Call
                                        </p>
                                        <p className="text-brand-muted text-xs">
                                            30 min · Google Meet
                                        </p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-brand-accent/20 flex items-center justify-center shrink-0">
                                        <Calendar className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-brand-light text-sm font-semibold group-hover:text-brand-card transition">
                                            Strategy Session
                                        </p>
                                        <p className="text-brand-muted text-xs">
                                            60 min · Custom plan
                                        </p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-brand-accent/20 flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-brand-light text-sm font-semibold group-hover:text-brand-card transition">
                                            Quick Chat
                                        </p>
                                        <p className="text-brand-muted text-xs">
                                            15 min · Any question
                                        </p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
                                </a>
                            </div>

                            {/* Footer note */}
                            <p className="text-brand-muted text-[10px] text-center mt-3">
                                Typically replies within 2 hours
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
