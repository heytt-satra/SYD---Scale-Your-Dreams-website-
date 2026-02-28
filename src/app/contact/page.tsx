"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Send,
    Calendar,
    Clock,
    CheckCircle2,
} from "lucide-react";
import SydLogo from "@/components/ui/SydLogo";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("sending");
        setTimeout(() => {
            setFormStatus("sent");
            setFormData({ name: "", email: "", company: "", service: "", message: "" });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-brand-bg">
            {/* Header */}
            <motion.header
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sticky top-0 z-50 bg-brand-bg/95 border-b border-brand-border backdrop-blur-md"
            >
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-brand-muted hover:text-brand-light transition"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <SydLogo size="sm" />
                </div>
            </motion.header>

            <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <h1 className="text-3xl sm:text-5xl font-display font-bold text-brand-light mb-3">
                        Let&apos;s Scale Your Dreams
                    </h1>
                    <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Ready to transform your personal brand? Tell us about your vision
                        and we&apos;ll craft the perfect strategy.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-[rgba(238,241,189,0.06)] rounded-2xl border border-brand-border p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-brand-light mb-6">
                                Send us a message
                            </h2>

                            {formStatus === "sent" ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-brand-light text-xl font-semibold mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-brand-muted text-sm mb-6">
                                        We&apos;ll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="text-brand-card text-sm font-medium hover:underline cursor-pointer"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-brand-muted text-xs mb-1.5 uppercase tracking-wider">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                placeholder="John Doe"
                                                className="w-full bg-[rgba(238,241,189,0.08)] border border-brand-border rounded-lg px-4 py-3 text-brand-light text-sm placeholder:text-brand-muted/50 outline-none focus:border-brand-card/50 transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-brand-muted text-xs mb-1.5 uppercase tracking-wider">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                placeholder="john@example.com"
                                                className="w-full bg-[rgba(238,241,189,0.08)] border border-brand-border rounded-lg px-4 py-3 text-brand-light text-sm placeholder:text-brand-muted/50 outline-none focus:border-brand-card/50 transition"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-brand-muted text-xs mb-1.5 uppercase tracking-wider">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, company: e.target.value })
                                                }
                                                placeholder="Your company"
                                                className="w-full bg-[rgba(238,241,189,0.08)] border border-brand-border rounded-lg px-4 py-3 text-brand-light text-sm placeholder:text-brand-muted/50 outline-none focus:border-brand-card/50 transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-brand-muted text-xs mb-1.5 uppercase tracking-wider">
                                                Service Interested In
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, service: e.target.value })
                                                }
                                                className="w-full bg-[rgba(238,241,189,0.08)] border border-brand-border rounded-lg px-4 py-3 text-brand-light text-sm outline-none focus:border-brand-card/50 transition appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-brand-bg">Select a service</option>
                                                <option value="brand-strategy" className="bg-brand-bg">Brand Strategy</option>
                                                <option value="content-creation" className="bg-brand-bg">Content Creation</option>
                                                <option value="growth-marketing" className="bg-brand-bg">Growth Marketing</option>
                                                <option value="full-package" className="bg-brand-bg">Full Package</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-brand-muted text-xs mb-1.5 uppercase tracking-wider">
                                            Your Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            placeholder="Tell us about your vision, goals, and what you're looking to achieve..."
                                            className="w-full bg-[rgba(238,241,189,0.08)] border border-brand-border rounded-lg px-4 py-3 text-brand-light text-sm placeholder:text-brand-muted/50 outline-none focus:border-brand-card/50 transition resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "sending"}
                                        className="w-full bg-brand-card text-brand-text font-semibold py-3 rounded-lg hover:bg-brand-card/90 transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                                    >
                                        {formStatus === "sending" ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-brand-text/30 border-t-brand-text rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        {/* Quick Contact */}
                        <div className="bg-[rgba(238,241,189,0.06)] rounded-2xl border border-brand-border p-6">
                            <h3 className="text-brand-light font-semibold mb-4">
                                Quick Contact
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:hello@scaleyourdreams.com"
                                    className="flex items-center gap-3 text-brand-muted hover:text-brand-light transition group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-brand-card/10 flex items-center justify-center group-hover:bg-brand-card/20 transition">
                                        <Mail className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-muted">Email</p>
                                        <p className="text-sm text-brand-light">hello@scaleyourdreams.com</p>
                                    </div>
                                </a>
                                <a
                                    href="tel:+1234567890"
                                    className="flex items-center gap-3 text-brand-muted hover:text-brand-light transition group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-brand-card/10 flex items-center justify-center group-hover:bg-brand-card/20 transition">
                                        <Phone className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-muted">Phone</p>
                                        <p className="text-sm text-brand-light">+1 (234) 567-890</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-card/10 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-brand-card" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-muted">Location</p>
                                        <p className="text-sm text-brand-light">Global · Remote First</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Book a Call */}
                        <div className="bg-[rgba(238,241,189,0.06)] rounded-2xl border border-brand-border p-6">
                            <h3 className="text-brand-light font-semibold mb-4">
                                Prefer a Call?
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                >
                                    <Calendar className="w-5 h-5 text-brand-card" />
                                    <div>
                                        <p className="text-sm text-brand-light font-medium group-hover:text-brand-card transition">
                                            Free Discovery Call
                                        </p>
                                        <p className="text-xs text-brand-muted">30 min · Google Meet</p>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(238,241,189,0.06)] border border-brand-border hover:bg-[rgba(238,241,189,0.12)] transition cursor-pointer group"
                                >
                                    <Clock className="w-5 h-5 text-brand-card" />
                                    <div>
                                        <p className="text-sm text-brand-light font-medium group-hover:text-brand-card transition">
                                            Strategy Session
                                        </p>
                                        <p className="text-xs text-brand-muted">60 min · Custom plan</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="bg-brand-card/10 rounded-2xl border border-brand-card/20 p-5 text-center">
                            <p className="text-brand-card font-semibold text-sm">⚡ Average Response Time</p>
                            <p className="text-brand-light text-2xl font-bold mt-1">Under 2 Hours</p>
                            <p className="text-brand-muted text-xs mt-1">During business hours</p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
