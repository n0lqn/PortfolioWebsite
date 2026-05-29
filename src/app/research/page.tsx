"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const researchProjects = [
  {
    title: "Master's Thesis Project (prospective Fall 2027 graduate, The Cooper Union)",
    description: "Prospective Master's thesis research.",
    tags: ["upcoming", "electrical engineering", "capstone"]
  },
  {
    title: "Senior Project (ECE-395)",
    description: "Fall 2026, Spring 2027. Advised by: Professor Neveen Shlayan, Professor Stella Banou, The Cooper Union for the Advancement of Science and Art.",
    tags: ["upcoming", "electrical engineering", "capstone"]
  }
];

export default function Research() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">research.</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {researchProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-foreground/10 pb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h2>
                  <p className="text-xl opacity-80 max-w-2xl mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
