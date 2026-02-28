export default function SydBadge({ size = "sm" }: { size?: "sm" | "xs" }) {
    const sizes = {
        sm: "w-[18px] h-[18px] text-[6.5px] rounded-[3px]",
        xs: "w-[15px] h-[15px] text-[5.5px] rounded-[2px]",
    };
    return (
        <span
            className={`inline-flex items-center justify-center font-black tracking-wider bg-[#C28B2D] text-white shrink-0 leading-none ${sizes[size]}`}
        >
            in
        </span>
    );
}
