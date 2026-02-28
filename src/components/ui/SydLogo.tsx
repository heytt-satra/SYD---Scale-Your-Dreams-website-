export default function SydLogo({
    size = "md",
}: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
    const sizes = {
        xs: { w: "w-8", h: "h-8", title: "text-[8px]", sub: "text-[3.5px]", gap: "gap-[0.5px]" },
        sm: { w: "w-10", h: "h-10", title: "text-[10px]", sub: "text-[4px]", gap: "gap-[1px]" },
        md: { w: "w-12", h: "h-12", title: "text-[12px]", sub: "text-[5px]", gap: "gap-[1px]" },
        lg: { w: "w-16", h: "h-16", title: "text-[16px]", sub: "text-[6px]", gap: "gap-[2px]" },
        xl: { w: "w-20", h: "h-20", title: "text-[20px]", sub: "text-[8px]", gap: "gap-[2px]" },
    };

    const s = sizes[size];

    return (
        <div
            className={`${s.w} ${s.h} rounded-full bg-white flex flex-col items-center justify-center shrink-0 ${s.gap}`}
        >
            <span
                className={`font-display font-bold ${s.title} text-black leading-none`}
                style={{ letterSpacing: "-0.02em" }}
            >
                Scale
            </span>
            <span
                className={`font-sans font-bold ${s.sub} text-black leading-none uppercase`}
                style={{ letterSpacing: "0.12em" }}
            >
                YOUR DREAMS
            </span>
        </div>
    );
}
