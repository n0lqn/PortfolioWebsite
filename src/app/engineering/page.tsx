"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import { GitHubIcon } from "@/components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Habla-Ghjeepeetee CPU",
    description: "A custom CPU architecture designed and implemented as part of ECE 251. Features a custom instruction set, data path, and control unit logic.",
    github: "https://github.com/n0lqn/final-project-ece-251-spring-2024-habla-ghjeepeetee",
    tags: ["hardware", "architecture", "cpu-design"]
  },
  {
    title: "Frankiebot OCR",
    description: "Sign recognition and floor navigation logic for a food delivery robot using Python and Tesseract OCR.",
    tags: ["robotics", "computer-vision", "python"]
  }
];

export default function Engineering() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">engineering systems.</h1>
        
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
                    const projects = [
                      {
                        title: "Cooper Cookbook (v3.4.0)",
                        description: "A comprehensive digital cookbook system. This static preview showcases the frontend interface, originally designed with a Spring Boot and SQL backend for recipe management and collaboration.",
                        github: "https://github.com/n0lqn/cooper-cookbook",
                        link: "/electrical-engineering/cookbook/index.html",
                        tags: ["web", "frontend", "ui/ux", "database-design"]
                      },
                      {
                        title: "Habla-Ghjeepeetee CPU",
                    ...
                                      <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map(tag => (
                                          <span key={tag} className="text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-1">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>

                                      <div className="flex gap-4">
                                        {project.github && (
                                          <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                                          >
                                            view on github →
                                          </a>
                                        )}
                                        {project.link && (
                                          <a 
                                            href={project.link}
                                            className="inline-block text-sm font-bold uppercase tracking-[0.2em] bg-foreground text-background border-2 border-foreground px-6 py-3 hover:bg-transparent hover:text-foreground transition-colors"
                                          >
                                            view project →
                                          </a>
                                        )}
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
