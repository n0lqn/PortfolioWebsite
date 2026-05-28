"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="relative mb-16 inline-flex cursor-default"
          initial="initial"
          whileHover="hover"
        >
          {"contact".split("").map((char, i) => (
            <motion.h1
              key={i}
              layoutId={`contact-char-${i}`}
              className="text-5xl font-bold tracking-tighter select-none"
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
                  transition: { duration: 0.4, ease: "easeOut", delay: 1 + (i * 0.08) }
                }
              }}
            >
              {char}
            </motion.h1>
          ))}
          <motion.h1
            className="text-5xl font-bold tracking-tighter select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            .
          </motion.h1>
          <motion.div 
            layoutId="contact-underline"
            className="absolute -bottom-2 left-0 w-full h-2 bg-accent"
            transition={{ duration: 1, ease: "linear" }}
          />
        </motion.div>
        
        <ContactForm />

        <div className="flex flex-col gap-8 pb-12 border-t border-foreground/10 pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest opacity-60">personal inquiries</span>
            <a href="mailto:nolanrgriffith@gmail.com" className="text-xl font-bold hover:text-accent transition-colors">nolanrgriffith [AT] gmail [DOT] com</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest opacity-60">work inquiries (pending)</span>
            <a href="mailto:nolan.griffith@bmwna.com" className="text-xl font-bold hover:text-accent transition-colors">nolan [DOT] griffith [AT] bmwna [DOT] com</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest opacity-60">research inquiries</span>
            <a href="mailto:nolan.griffith@cooper.edu" className="text-xl font-bold hover:text-accent transition-colors">nolan [DOT] griffith [AT] cooper [DOT] edu</a>
          </div>
          <div className="flex items-center gap-8 text-lg font-bold pt-4">
            <a href="https://www.linkedin.com/in/nolan-griffith-759371217/" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2">
              <LinkedInIcon className="w-6 h-6" />
              linkedin
            </a>
            <a href="https://github.com/n0lqn" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2">
              <GitHubIcon className="w-6 h-6" />
              github
            </a>
            <a href="https://www.instagram.com/n0lqn/" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-2">
              <InstagramIcon className="w-6 h-6" />
              instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
