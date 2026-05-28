"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const archiveProjects = [
  {
    title: "Code Ninjas Instruction",
    description: "Curriculum development and instruction materials for 3D modeling, game logic, and hardware basics.",
    tags: ["instruction", "3d-modeling", "logic"]
  },
  {
    title: "Bergen Tech SAM",
    description: "Strategic Asset Management coursework and technical projects focused on systematic operations and engineering fundamentals.",
    tags: ["asset-management", "systems", "high-school"]
  },
  {
    title: "Early Logic Simulations",
    description: "A collection of MATLAB and C++ experiments from foundational engineering courses.",
    tags: ["matlab", "cpp", "simulation"]
  }
];

export default function Archive() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">archive.</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {archiveProjects.map((project, i) => (
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
