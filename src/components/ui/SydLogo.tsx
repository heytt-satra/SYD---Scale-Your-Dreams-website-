import Image from "next/image";

export default function SydLogo({
    size = "md",
}: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
    const sizes = {
        xs: { w: 32, h: 32 },
        sm: { w: 40, h: 40 },
        md: { w: 48, h: 48 },
        lg: { w: 64, h: 64 },
        xl: { w: 80, h: 80 },
    };

    const s = sizes[size];

    return (
        <div
            className="rounded-full overflow-hidden shrink-0 bg-white"
            style={{ width: s.w, height: s.h }}
        >
            <Image
                src="/syd-logo.png"
                alt="Scale Your Dreams"
                width={s.w}
                height={s.h}
                className="w-full h-full object-contain"
                priority
            />
        </div>
    );
}
