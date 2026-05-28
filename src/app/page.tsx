"use client"

import { Typewriter } from "@/components/Typewriter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectGrid } from "@/components/ProjectGrid";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { ContactInteractive } from "@/components/ContactInteractive";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-12">
            <Typewriter text="nolan griffith." delay={500} speed={75} />
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="max-w-none text-base md:text-lg font-medium opacity-60 min-h-[3em]">
                <Typewriter 
                  text="generalist exploring technology, art, infrastructure, and human-centered design." 
                  delay={3200} 
                  speed={40} 
                  hideCursorUntilStart={true}
                />
              </p>
              <p className="max-w-none text-base md:text-lg font-medium opacity-60 h-[1.5em]">
                <Typewriter 
                  text="based in nyc." 
                  delay={6000} 
                  speed={30} 
                  hideCursorUntilStart={true}
                />
              </p>
            </div>
            <div className="flex items-center gap-12 text-sm tracking-widest font-bold">
              <Link href="/about" className="hover:text-accent transition-colors group relative flex">
                {"about".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    layoutId={`about-char-${i}`}
                    transition={{ duration: 1, ease: "linear" }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                  layoutId="about-underline"
                  transition={{ duration: 1, ease: "linear" }}
                />
              </Link>
              <ContactInteractive />
            </div>
          </div>
        </div>
      </section>
{/* Motion Grid */}
<section className="max-w-screen-2xl mx-auto">
  <ProjectGrid />
</section>

{/* Footer */}
<footer className="mt-32 px-6 md:px-12 border-t border-foreground pt-12 flex justify-between items-center text-xs tracking-[0.2em]">
  <p>© 2026 nolan griffith</p>
  <div className="flex flex-col items-end gap-6 relative">
    <div className="flex flex-col items-center gap-0 mb-4">
      <span className="text-lg lowercase font-bold tracking-tight">have a project in mind?</span>
      <span className="text-lg lowercase font-bold tracking-tight">let's connect!</span>
      <img 
        src="/scribble-arrow.png" 
        alt="arrow" 
        className="w-20 h-20 mt-1 invert-on-light" 
      />
    </div>
    <div className="flex items-center gap-12">
      <motion.a 
        href="https://github.com/n0lqn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-accent transition-colors"
        whileHover={{ y: [0, -10, 0], scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <GitHubIcon className="w-12 h-12" />
      </motion.a>
      <motion.a 
        href="https://www.linkedin.com/in/nolan-griffith-759371217/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-accent transition-colors"
        whileHover={{ y: [0, -10, 0], scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <LinkedInIcon className="w-12 h-12" />
      </motion.a>
      <motion.a 
        href="https://www.instagram.com/n0lqn/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-accent transition-colors"
        whileHover={{ y: [0, -10, 0], scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <InstagramIcon className="w-12 h-12" />
      </motion.a>
    </div>
  </div>
      </footer>
    </main>
  );
}
