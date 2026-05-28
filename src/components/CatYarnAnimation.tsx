"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function CatYarnAnimation() {
  const controls = useAnimation()

  const startAnimation = async () => {
    // Cat pushes the yarn
    await controls.start({ y: 50, transition: { duration: 1 } })
    // Yarn reveals "resume"
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <a href="/NolanGriffithResume2026.pdf" download className="relative w-48 h-48 block cursor-pointer">
      <motion.div animate={controls} className="absolute inset-0">
        {/* Simple Cat Shape (Minimalist) */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-foreground">
          <circle cx="50" cy="50" r="20" fill="currentColor" />
          <path d="M35 40 L25 20 M65 40 L75 20" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </motion.div>
      
      {/* Yarn revealing text "resume" */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-0 w-full text-center font-bold tracking-widest uppercase text-accent"
      >
        resume.
      </motion.div>
    </a>
  )
}
