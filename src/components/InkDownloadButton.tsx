"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function InkDownloadButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="relative inline-block w-full text-center py-12">
      <a
        href="/NolanGriffithResume2026.pdf"
        download
        className="relative z-10 px-4 py-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors text-sm font-bold tracking-widest inline-block"
      >
        download pdf
        
        {/* Splatter Effect that triggers on scroll-into-view */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {isInView && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
              animate={{ 
                scale: [0, 4, 0], 
                opacity: [1, 0.5, 0], 
                x: Math.cos(i * 60 * Math.PI / 180) * 80, 
                y: Math.sin(i * 60 * Math.PI / 180) * 80 
              }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="absolute w-6 h-6 bg-accent rounded-full"
            />
          ))}
        </motion.div>
      </a>
    </div>
  )
}
