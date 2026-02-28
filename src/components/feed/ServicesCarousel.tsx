"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoreHorizontal, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import SydBadge from "@/components/ui/SydBadge";
import SydLogo from "@/components/ui/SydLogo";
import PostCard from "./PostCard";
import EngagementBar from "./EngagementBar";
import CommentDropdown from "./CommentDropdown";
import { services } from "@/data/services";
import { post2Comments } from "@/data/comments";

export default function ServicesCarousel() {
    const [current, setCurrent] = useState(0);
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
                                <p className="text-xs text-[#35182099] flex items-center gap-1">
                                    Promoted ·{" "}
                                    <Shield className="w-3 h-3" />
                                </p>
                            </div>
                        </div>
                        <MoreHorizontal className="w-5 h-5 text-[#35182080] cursor-pointer" />
                    </div>
                </div>

                {/* Caption */}
                <div className="px-4 py-2 text-sm leading-relaxed">
                    <p>
                        Ready to level up? Explore our suite of premium services designed for
                        visionaries. Swipe to see how we can transform your digital
                        presence. 👇
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-lg mx-4">
                    <div className="h-64">
                        <div
                            className="flex transition-transform duration-300 ease-in-out h-full"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {services.map((service) => (
                                <div key={service.id} className="min-w-full h-full flex">
                                    {/* Image half */}
                                    <div className="w-1/2 relative">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            sizes="300px"
                                        />
                                    </div>
                                    {/* Content half */}
                                    <div className="w-1/2 bg-brand-accent text-white p-5 flex flex-col justify-between">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/60">
                                                SERVICE 0{service.id}
                                            </p>
                                            <h3 className="font-display text-xl font-bold text-white mt-1">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs text-white/80 leading-relaxed mt-2">
                                                {service.description}
                                            </p>
                                        </div>
                                        <button className="mt-auto border border-white text-white text-xs px-4 py-2 rounded hover:bg-white hover:text-brand-accent transition w-fit cursor-pointer">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    {current > 0 && (
                        <button
                            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 cursor-pointer hover:bg-black/60 transition"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}

                    {/* Right Arrow */}
                    {current < services.length - 1 && (
                        <button
                            onClick={() =>
                                setCurrent((c) => Math.min(services.length - 1, c + 1))
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1.5 cursor-pointer hover:bg-black/60 transition"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-1.5 mt-3 pb-2">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current
                                ? "bg-brand-accent w-4"
                                : "bg-brand-muted w-2"
                                }`}
                        />
                    ))}
                </div>

                {/* Engagement Bar */}
                <div className="p-2">
                    <EngagementBar
                        likes={1923}
                        commentCount={87}
                        reposts={305}
                        impressions={12380}
                        onCommentToggle={() => setIsCommentOpen(!isCommentOpen)}
                        isCommentOpen={isCommentOpen}
                    />
                </div>

                {/* Comment Dropdown */}
                <CommentDropdown comments={post2Comments} isOpen={isCommentOpen} />
            </PostCard>
        </motion.div>
    );
}
