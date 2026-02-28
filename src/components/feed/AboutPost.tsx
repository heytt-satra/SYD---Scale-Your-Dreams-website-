"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoreHorizontal, Volume2 } from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";
import PostCard from "./PostCard";
import EngagementBar from "./EngagementBar";
import CommentDropdown from "./CommentDropdown";
import { post1Comments } from "@/data/comments";

export default function AboutPost() {
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <PostCard>
                {/* Post Header */}
                <div className="p-4 pb-2">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                            <SydLogo size="sm" />
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <span className="font-semibold text-brand-text text-sm">
                                        SYD | Scale Your Dreams
                                    </span>
                                    <SydBadge />
                                    <span className="text-brand-accent text-sm">· Following</span>
                                </div>
                                <p className="text-xs text-[#35182099]">
                                    50k+ Dreamers · 1h
                                </p>
                            </div>
                        </div>
                        <MoreHorizontal className="w-5 h-5 text-[#35182080] cursor-pointer" />
                    </div>
                </div>

                {/* Post Body */}
                <div className="px-4 py-2 text-sm leading-relaxed">
                    <p className="font-semibold mb-2">Our Mission is Simple. ✨</p>
                    <p>
                        At Scale Your Dreams (SYD), we believe in the raw power of personal
                        branding. We aren&apos;t just an agency; we are a movement dedicated to
                        helping you amplify your voice and reach your full potential. Whether
                        you&apos;re a founder, a creator, or a dreamer, your story deserves to
                        be heard on the global stage. 🌍
                    </p>
                    <p className="mt-3">
                        Join 50,000+ others who are rewriting their narratives. Let&apos;s build
                        something legendary together.{" "}
                        <span className="font-semibold">#ScaleYourDreams</span>{" "}
                        <span className="font-semibold">#PersonalBranding</span>{" "}
                        <span className="font-semibold">#SYD</span>
                    </p>
                </div>

                {/* Media Block */}
                <div className="relative w-full h-64 bg-[#1a0d10] mt-2">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                        alt="Team collaboration"
                        fill
                        className="object-cover opacity-70"
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                    {/* Bottom overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-display font-bold">
                            We Are SYD.
                        </h3>
                        <p className="text-white/80 text-sm">
                            Crafting narratives that change the world.
                        </p>
                    </div>
                    {/* Volume icon */}
                    <div className="absolute top-3 right-3 bg-black/40 p-1.5 rounded-full cursor-pointer">
                        <Volume2 className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Engagement Bar */}
                <div className="p-2">
                    <EngagementBar
                        likes={2453}
                        commentCount={142}
                        reposts={56}
                        impressions={18740}
                        onCommentToggle={() => setIsCommentOpen(!isCommentOpen)}
                        isCommentOpen={isCommentOpen}
                    />
                </div>

                {/* Comment Dropdown */}
                <CommentDropdown comments={post1Comments} isOpen={isCommentOpen} />
            </PostCard>
        </motion.div>
    );
}
