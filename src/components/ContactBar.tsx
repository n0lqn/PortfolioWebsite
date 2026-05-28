"use client"

import { motion } from "framer-motion"

export function ContactBar() {
  return (
    <section className="w-full border-t border-b border-foreground py-12 my-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="text-xl md:text-2xl font-medium tracking-tight">
          have a project in mind?
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm tracking-[0.2em] font-bold">
          <motion.a 
            href="mailto:nolanrgriffith@gmail.com"
            whileHover={{ y: -4, color: "var(--accent)" }}
            className="transition-colors"
          >
            email.
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/nolan-griffith-759371217/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: "var(--accent)" }}
            className="transition-colors"
          >
            linkedin.
          </motion.a>
          <motion.a 
            href="https://github.com/n0lqn" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: "var(--accent)" }}
            className="transition-colors"
          >
            github.
          </motion.a>
        </div>
      </div>
    </section>
  )
}
