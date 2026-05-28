"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">field notes.</h1>
        <p className="text-xl opacity-50 italic">travel, cities, and blog posts... coming soon.</p>
      </div>
    </main>
  );
}
