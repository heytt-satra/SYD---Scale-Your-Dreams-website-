"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquare,
    MessageCircle,
    Repeat2,
    Heart,
    BarChart3,
    Share2,
} from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";
import { threadReplies, extendedReplies } from "@/data/testimonials";
import ThreadReplyComponent from "./ThreadReply";

export default function TestimonialsThread() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {/* Section header */}
            <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-brand-muted" />
                <span className="text-brand-muted text-xs tracking-widest uppercase">
                    Testimonials Thread
                </span>
            </div>

            {/* Root tweet */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[rgba(238,241,189,0.06)] rounded-xl border border-brand-border p-4"
            >
                {/* Header */}
                <div className="flex items-start gap-3">
                    <SydLogo size="sm" />
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-brand-light font-bold text-sm">SYD</span>
                            <SydBadge size="xs" />
                            <span className="text-brand-muted text-sm">
                                @ScaleYourDreams
                            </span>
                            <span className="text-brand-muted text-sm">· 4h</span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <p className="text-brand-light text-sm mt-2 leading-relaxed">
                    We asked our clients one simple question: &ldquo;How did SYD change
                    your trajectory?&rdquo; The answers were mind-blowing. 🧵👇
                </p>

                {/* Engagement */}
                <div className="flex items-center gap-5 mt-3 text-brand-muted text-xs">
                    <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        34
                    </span>
                    <span className="flex items-center gap-1">
                        <Repeat2 className="w-3.5 h-3.5" />
                        12
                    </span>
                    <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" />
                        189
                    </span>
                    <span className="flex items-center gap-1">
                        <BarChart3 className="w-3.5 h-3.5" />
                        2.1k
                    </span>
                    <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-brand-light transition" />
                </div>
            </motion.div>

            {/* Thread line connector */}
            <div className="ml-[19px] h-4 w-0.5 bg-brand-border" />

            {/* Thread replies */}
            <div className="mt-0">
                {threadReplies.map((reply, i) => (
                    <ThreadReplyComponent key={reply.id} reply={reply} index={i} />
                ))}
            </div>

            {/* Extended thread replies */}
            <AnimatePresence>
                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {extendedReplies.map((reply, i) => (
                            <ThreadReplyComponent
                                key={reply.id}
                                reply={reply}
                                index={i + threadReplies.length}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Show this thread / Hide thread */}
            <div className="mt-2 ml-12">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-brand-accent text-sm font-semibold hover:underline cursor-pointer"
                >
                    {showMore ? "Hide thread" : "Show this thread"}
                </button>
            </div>
        </div>
    );
}
