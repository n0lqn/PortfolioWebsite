"use client"

import { ThemeToggle as ThemeToggleButton } from "@/components/ThemeToggle";
import { GitHubIcon } from "@/components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cooper Cookbook",
    description: "A community-driven digital cookbook platform built for Cooper Union students.",
    attribution: "Alex Valsamis (alex.valsamis at cooper.edu)",
    github: "https://github.com/n0lqn/ECE366CooperCookbook",
    href: "/work/cooper-cookbook",
    tags: ["web", "community", "react"]
  }
];

export default function Work() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggleButton />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">work.</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-foreground/10 pb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                      <GitHubIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-xl opacity-80 max-w-2xl mb-6">{project.description}</p>
                  <p className="text-sm opacity-50 italic mb-6">attribution: {project.attribution}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={project.href}
                    className="inline-block text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                  >
                    view project →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
