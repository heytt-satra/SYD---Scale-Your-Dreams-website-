"use client";

import { ReactNode } from "react";

interface PostCardProps {
    children: ReactNode;
}

export default function PostCard({ children }: PostCardProps) {
    return (
        <div className="bg-brand-card text-brand-text rounded-xl border border-[rgba(53,24,32,0.2)] overflow-hidden shadow-lg">
            {children}
        </div>
    );
}
