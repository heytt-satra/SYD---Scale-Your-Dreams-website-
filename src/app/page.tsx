"use client";

import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import BookingWidget from "@/components/layout/BookingWidget";
import Footer from "@/components/layout/Footer";
import PostComposer from "@/components/feed/PostComposer";
import AboutPost from "@/components/feed/AboutPost";
import ServicesCarousel from "@/components/feed/ServicesCarousel";
import TestimonialsThread from "@/components/testimonials/TestimonialsThread";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-6 grid grid-cols-12 gap-4 pb-12">
        {/* Left Sidebar */}
        <aside className="col-span-3 sticky top-20 h-fit hidden lg:block">
          <LeftSidebar />
        </aside>

        {/* Center Feed */}
        <section className="col-span-12 lg:col-span-6 flex flex-col gap-4">
          <PostComposer />
          <div className="flex justify-end text-brand-muted text-xs pr-1">
            Sort by:{" "}
            <span className="text-brand-light font-semibold ml-1">Top</span>
          </div>
          <AboutPost />
          <ServicesCarousel />
          <TestimonialsThread />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-3 sticky top-20 h-fit hidden lg:block">
          <RightSidebar />
        </aside>
      </main>

      {/* Booking Widget */}
      <BookingWidget />
      <Footer />
    </div>
  );
}
