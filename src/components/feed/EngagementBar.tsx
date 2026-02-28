"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle, Repeat2, Send, Eye, Check } from "lucide-react";

interface EngagementBarProps {
    likes: number;
    commentCount: number;
    reposts: number;
    impressions: number;
    onCommentToggle: () => void;
    isCommentOpen: boolean;
}

export default function EngagementBar({
    likes,
    commentCount,
    reposts,
    impressions,
    onCommentToggle,
    isCommentOpen,
}: EngagementBarProps) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [reposted, setReposted] = useState(false);
    const [repostCount, setRepostCount] = useState(reposts);
    const [sent, setSent] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const handleRepost = () => {
        setReposted(!reposted);
        setRepostCount((prev) => (reposted ? prev - 1 : prev + 1));
    };

    const handleSend = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setSent(true);
            setTimeout(() => setSent(false), 2000);
        } catch {
            // Fallback for older browsers
            const text = window.location.href;
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setSent(true);
            setTimeout(() => setSent(false), 2000);
        }
    };

    return (
        <div>
            {/* Stats row */}
            <div className="flex justify-between text-brand-text/60 text-xs px-1 mb-1">
                <div className="flex items-center gap-1">
                    <span className="flex -space-x-1">
                        <span className="text-xs">👍</span>
                        <span className="text-xs">❤️</span>
                        <span className="text-xs">🔥</span>
                    </span>
                    <span className="ml-1">{likeCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{commentCount} comments</span>
                    <span>·</span>
                    <span>{repostCount.toLocaleString()} reposts</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {impressions.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-text/15 my-1" />

            {/* Action buttons */}
            <div className="grid grid-cols-4 gap-1">
                {/* Like */}
                <motion.button
                    whileTap={{ scale: 1.4 }}
                    onClick={handleLike}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${liked
                        ? "text-blue-600 bg-blue-50"
                        : "text-brand-text/70 hover:bg-brand-text/10 hover:text-brand-text"
                        }`}
                >
                    {liked ? (
                        <motion.span
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <ThumbsUp className="w-5 h-5 fill-current" />
                        </motion.span>
                    ) : (
                        <ThumbsUp className="w-5 h-5" />
                    )}
                    <span>Like</span>
                </motion.button>

                {/* Comment */}
                <button
                    onClick={onCommentToggle}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${isCommentOpen
                        ? "text-brand-accent bg-brand-accent/10"
                        : "text-brand-text/70 hover:bg-brand-text/10 hover:text-brand-text"
                        }`}
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Comment</span>
                </button>

                {/* Repost */}
                <motion.button
                    whileTap={{ scale: 1.3 }}
                    onClick={handleRepost}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${reposted
                        ? "text-green-600 bg-green-50"
                        : "text-brand-text/70 hover:bg-brand-text/10 hover:text-brand-text"
                        }`}
                >
                    {reposted ? (
                        <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Repeat2 className="w-5 h-5" />
                        </motion.span>
                    ) : (
                        <Repeat2 className="w-5 h-5" />
                    )}
                    <span>Repost</span>
                </motion.button>

                {/* Send — copies website link */}
                <motion.button
                    whileTap={{ scale: 1.2 }}
                    onClick={handleSend}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${sent
                        ? "text-brand-accent bg-brand-accent/10"
                        : "text-brand-text/70 hover:bg-brand-text/10 hover:text-brand-text"
                        }`}
                >
                    {sent ? (
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Check className="w-5 h-5" />
                        </motion.span>
                    ) : (
                        <Send className="w-5 h-5" />
                    )}
                    <span>{sent ? "Copied!" : "Send"}</span>
                </motion.button>
            </div>
        </div>
    );
}
