"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { SquigglyTimeline } from "@/components/SquigglyTimeline";
import { ZigZagDivider } from "@/components/ZigZagDivider";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {

  return (
    <main className="pb-12 px-6 md:px-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center py-8">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back to work
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="flex-grow">

          <motion.div 
            className="relative mb-16 inline-flex cursor-default"
            initial="initial"
            whileHover="hover"
          >
            {"about".split("").map((char, i) => (
              <motion.h1
                key={i}
                layoutId={`about-char-${i}`}
                className="text-5xl md:text-7xl font-bold tracking-tighter select-none"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
                initial="initial"
                animate="dance"
                variants={{
                  initial: { y: 0 },
                  hover: {
                    y: [0, -20, 0],
                    transition: { duration: 0.4, ease: "easeOut" }
                  },
                  dance: {
                    y: [0, -20, 0],
                    transition: { duration: 0.4, ease: "easeOut", delay: 4 + (i * 0.08) }
                  }
                }}
              >
                {char}
              </motion.h1>
            ))}
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter select-none"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 0.3 }}
            >
              .
            </motion.h1>
            <motion.div 
              layoutId="about-underline"
              className="absolute -bottom-2 left-0 w-full h-1 md:h-2 bg-accent"
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-24 flex flex-col md:flex-row gap-12"
          >
            {/* Main Bio */}
            <div className="md:col-span-8 space-y-6 flex-1">
              <div className="space-y-4 text-base md:text-lg opacity-80 leading-relaxed font-medium">
                <p className="text-xl md:text-2xl font-medium leading-tight opacity-100 mb-6 text-foreground">
                  my name is nolan griffith—raised in new jersey and now based in bay ridge, brooklyn, coming from a mixed american and indian background.
                </p>
                <p>
                  i’m currently a senior and prospective graduate student at cooper union. at bmw, my work as a technical service intern focuses on digitalization and mechanical/electrical diagnostics.
                </p>
                <p>
                  outside of engineering, i’m usually focused on automobiles, music, fitness, and traveling.
                </p>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex-shrink-0 w-full md:w-[400px] mt-8 md:mt-0 ml-0 md:ml-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl group">
                <img 
                  src="/about-me.jpg" 
                  alt="Nolan Griffith" 
                  className="w-full h-full object-cover object-top hover:scale-[1.05] transition-transform duration-500" 
                />
              </div>
            </div>
          </motion.div>

          <ZigZagDivider />

          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">my professional experience</h2>
            <p className="text-sm opacity-60 mt-2 font-medium">(scroll down to find out more!)</p>
          </div>

          <SquigglyTimeline />
        </div>
{/* Navigation & Footer Section */}
<div className="mt-12 space-y-12">

  <div className="flex justify-start">
    <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit tracking-widest">
      <span className="group-hover:-translate-x-1 transition-transform">←</span> back to home
    </Link>
  </div>

  <footer className="border-t border-foreground pt-12 flex justify-between items-center text-xs tracking-[0.2em]">
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
        </div>
      </div>
    </main>
  );
}
