import Link from "next/link";
import {
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    ArrowUpRight,
} from "lucide-react";
import SydLogo from "@/components/ui/SydLogo";

const footerLinks = {
    Services: [
        { label: "Brand Strategy", href: "#" },
        { label: "Content Creation", href: "#" },
        { label: "Growth Marketing", href: "#" },
        { label: "Full Package", href: "#" },
    ],
    Company: [
        { label: "About SYD", href: "#" },
        { label: "Contact", href: "/contact" },
    ],
};

const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="border-t border-brand-border bg-[rgba(238,241,189,0.03)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Main Footer */}
                <div className="py-8 sm:py-14">
                    {/* Top row: Brand + Links side by side on mobile */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                        {/* Brand Column */}
                        <div className="lg:flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <SydLogo size="sm" />
                                <div>
                                    <p className="font-display font-bold text-brand-light text-lg">
                                        SYD
                                    </p>
                                    <p className="text-brand-muted text-xs">
                                        Scale Your Dreams
                                    </p>
                                </div>
                            </div>
                            <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-4">
                                We help visionaries build powerful personal brands that
                                attract opportunities, create impact, and scale globally.
                            </p>

                            {/* Socials */}
                            <div className="flex items-center gap-2">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="w-9 h-9 rounded-lg bg-[rgba(238,241,189,0.08)] border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-card hover:border-brand-card/30 transition"
                                    >
                                        <s.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link Columns — 2 columns grid on mobile */}
                        <div className="grid grid-cols-2 gap-6 lg:gap-16">
                            {Object.entries(footerLinks).map(([title, links]) => (
                                <div key={title}>
                                    <h4 className="text-brand-light font-semibold text-sm mb-3">
                                        {title}
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-brand-muted text-sm hover:text-brand-light transition flex items-center gap-1 group"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-border py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-brand-muted text-xs">
                        © {new Date().getFullYear()} SYD — Scale Your Dreams. All rights reserved.
                    </p>
                    <a
                        href="mailto:hello@scaleyourdreams.com"
                        className="text-brand-muted text-xs hover:text-brand-light transition flex items-center gap-1"
                    >
                        <Mail className="w-3 h-3" />
                        hello@scaleyourdreams.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
