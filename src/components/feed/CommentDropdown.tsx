"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { Comment } from "@/types";

interface CommentDropdownProps {
    comments: Comment[];
    isOpen: boolean;
}

export default function CommentDropdown({
    comments,
    isOpen,
}: CommentDropdownProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="pt-2 px-2 pb-1">
                        {comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CommentItem({ comment }: { comment: Comment }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(comment.likes);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <div className="bg-[rgba(53,24,32,0.3)] rounded-lg p-3 mb-2 border border-brand-border">
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {comment.avatar}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-brand-light text-sm">
                            {comment.name}
                        </span>
                        <span className="text-brand-muted text-xs">
                            {comment.handle}
                        </span>
                        <span className="text-brand-muted text-xs">
                            · {comment.time}
                        </span>
                    </div>
                    <p className="text-brand-light text-sm mt-1 leading-relaxed">
                        {comment.text}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-brand-muted text-xs">
                        <motion.button
                            whileTap={{ scale: 1.4 }}
                            onClick={handleLike}
                            className={`flex items-center gap-1 cursor-pointer transition ${liked
                                    ? "text-blue-400"
                                    : "hover:text-brand-light"
                                }`}
                        >
                            {liked ? (
                                <motion.span
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ThumbsUp className="w-3 h-3 fill-current" />
                                </motion.span>
                            ) : (
                                <ThumbsUp className="w-3 h-3" />
                            )}
                            {likeCount}
                        </motion.button>
                        <span className="flex items-center gap-1 hover:text-brand-light cursor-pointer transition">
                            <MessageCircle className="w-3 h-3" />
                            {comment.replies}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
