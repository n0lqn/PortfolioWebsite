"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

interface Project {
  id: number
  title: string
  category: string
  color: string
  href: string
  video?: string
  options: { label: string; href: string; previewUrl?: string }[]
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "work", 
    category: "industry / technical service / bmw", 
    color: "bg-gray-300", 
    href: "/work",
    video: "https://media.tenor.com/q04ErcYx150AAAAM/bmw-m330i-drift.gif",
    options: [
      { label: "legal", href: "/work" },
      { label: "electromobility", href: "/work" },
      { label: "energy management", href: "/work" },
      { label: "technical service", href: "/work" }
    ]
  },
  { 
    id: 2, 
    title: "projects", 
    category: "engineering / research / code", 
    color: "bg-gray-400", 
    href: "/engineering",
    options: [
      { label: "coming soon!", href: "/research" },
      { label: "data + geography", href: "/data-geography" },
      { label: "engineering systems", href: "/engineering" },
      { label: "cookbook", href: "/cookbook/index.html" }
    ]
  },
  { 
    id: 3, 
    title: "writing", 
    category: "essays / infrastructure / labor", 
    color: "bg-gray-600", 
    href: "/writing",
    options: [
      { label: "monetary velocity", href: "/writing/monetary-velocity", previewUrl: "https://fred.stlouisfed.org/graph/graph-landing.php?g=1W10z&width=1000&height=550" },
      { label: "feeling work", href: "/writing/blue-collar-archive", previewUrl: "https://lawrencemigration.phillipscollection.org/sites/default/files/styles/panel/public/TPC_Panel3_900.jpg" },
      { label: "soft-serve ice cream", href: "/writing/soft-serve-ice-cream", previewUrl: "https://taylorproducts.net/wp-content/uploads/2022/05/Soft-Serve-Frozen-Yogurt-Hero-Image.png" },
      { label: "critical theory", href: "/writing/critical-theory", previewUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYgVaeLxlx3jPMsjlBX3RepObzkIQ044eYw&s" }
    ]
  },
  { 
    id: 4, 
    title: "travel blog", 
    category: "travel / cities / blog", 
    color: "bg-accent", 
    href: "/blog", 
    video: "/travel-video.mp4",
    options: [
      { label: "2026", href: "/blog" },
      { label: "2025", href: "/blog" },
      { label: "2024", href: "/blog" },
      { label: "2023", href: "/blog" }
    ]
  },
]

export function ProjectGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activePreview, setActivePreview] = useState<{ url: string; label: string } | null>(null)

  const hoveredRow = hoveredIdx !== null ? Math.floor(hoveredIdx / 2) : null
  const hoveredCol = hoveredIdx !== null ? hoveredIdx % 2 : null

  return (
    <div className="relative">
      {/* Live Preview Overlay */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-12 bg-background/90 backdrop-blur-sm">
          <div className="relative w-full h-full border border-foreground/10 bg-white overflow-hidden shadow-2xl rounded-xl flex items-center justify-center">
            {activePreview.url.includes('github') || activePreview.url.includes('fred.stlouisfed.org') ? (
              <iframe 
                src={activePreview.url} 
                className="w-full h-full border-none"
                title={activePreview.label}
              />
            ) : (
              <img src={activePreview.url} className="max-w-full max-h-full object-contain" alt={activePreview.label} />
            )}
            <button 
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 text-sm font-black uppercase tracking-[0.2em] bg-background border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              close preview
            </button>
          </div>
        </div>
      )}

      <motion.div 
        className="grid gap-1 px-1 h-[100vh] md:h-[90vh]"
        animate={{
          gridTemplateColumns: hoveredCol !== null 
            ? [0, 1].map(i => i === hoveredCol ? '1.8fr' : '0.6fr').join(' ')
            : '1fr 1fr',
          gridTemplateRows: hoveredRow !== null
            ? [0, 1].map(i => i === hoveredRow ? '1.8fr' : '0.6fr').join(' ')
            : '1fr 1fr'
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1 }}
      >
        {projects.map((project, index) => {
          const isHovered = hoveredIdx === index;
          
          return (
            <div 
              key={project.id}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative overflow-hidden border border-foreground/5 bg-background group"
            >
              {/* Background Layer */}
              <div className="absolute inset-0 z-0">
                {project.video ? (
                  <video 
                    src={project.video}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  />
                ) : (
                  <div className={`absolute inset-0 ${project.color} transition-transform duration-700 opacity-80`} />
                )}
              </div>
              
              {/* Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

              {/* Link to Section (Base Layer) */}
              <Link href={project.href} className="absolute inset-0 z-20" />

              {/* Side Menu */}
              {isHovered && (
                <div className="absolute right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 text-right">
                  {project.options.map((option, i) => (
                    <div key={`${option.label}-${i}`} className="flex flex-col items-end gap-1">
                      <Link href={option.href} download={option.label === "curriculum vitae"}>
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 0.9, x: 0 }}
                          whileHover={{ opacity: 1, x: -10, scale: 1.1, color: "var(--accent)" }}
                          transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                          className="text-xs md:text-sm lowercase tracking-[0.5em] font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        >
                          {option.label}
                        </motion.div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Category/Title text */}
              <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                <p className="text-[10px] tracking-widest uppercase font-bold text-white/80 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
              </div>

              {/* Motion Overlay */}
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 opacity-100 pointer-events-none z-10"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    background: [
                      "radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 40%)",
                      "radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 40%)",
                      "radial-gradient(circle at 20% 80%, var(--accent) 0%, transparent 40%)",
                      "radial-gradient(circle at 80% 20%, var(--accent) 0%, transparent 40%)",
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5 },
                    background: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                />
              )}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
