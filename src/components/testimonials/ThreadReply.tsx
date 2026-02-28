"use client";

import { motion } from "framer-motion";
import { ThreadReplyType } from "@/types";
import {
    MessageCircle,
    Repeat2,
    Heart,
    BarChart3,
    Share2,
} from "lucide-react";

interface ThreadReplyProps {
    reply: ThreadReplyType;
    index: number;
}

export default function ThreadReply({ reply, index }: ThreadReplyProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-[19px]"
        >
            {/* Vertical thread line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-brand-border" />

            <div className="flex gap-3 pb-4 pl-5">
                {/* Avatar */}
                {reply.avatarImage ? (
                    <img
                        src={reply.avatarImage}
                        alt={reply.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 relative z-10"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center text-xs text-white font-bold shrink-0 relative z-10">
                        {reply.avatar}
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-brand-light text-sm">
                            {reply.name}
                        </span>
                        {reply.verified && (
                            <span className="text-blue-400 text-xs">✓</span>
                        )}
                        <span className="text-brand-muted text-xs">{reply.handle}</span>
                        <span className="text-brand-muted text-xs">· {reply.time}</span>
                    </div>
                    <p className="text-brand-light text-sm leading-relaxed mt-1">
                        {reply.text}
                    </p>
                    <div className="flex items-center gap-5 mt-2 text-brand-muted text-xs">
                        <span className="flex items-center gap-1 hover:text-brand-light cursor-pointer transition">
                            <MessageCircle className="w-3.5 h-3.5" />
                            {reply.replies}
                        </span>
                        <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer transition">
                            <Repeat2 className="w-3.5 h-3.5" />
                            {reply.reposts}
                        </span>
                        <span className="flex items-center gap-1 hover:text-red-400 cursor-pointer transition">
                            <Heart className="w-3.5 h-3.5" />
                            {reply.likes}
                        </span>
                        <span className="flex items-center gap-1">
                            <BarChart3 className="w-3.5 h-3.5" />
                            {reply.views}
                        </span>
                        <Share2 className="w-3.5 h-3.5 hover:text-brand-light cursor-pointer transition" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
