"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Experience {
  date: string
  duration: string
  company: string
  role: string
  logo: string
  details: string
}

const experienceData: Experience[] = [
  { 
    date: "june 2026 — aug 2026", 
    duration: "3m", 
    company: "BMW OF NORTH AMERICA, LLC", 
    role: "technical service intern", 
    logo: "/bmw-logo.png",
    details: "supporting technical service operations with a focus on electrical/mechanical vehicle diagnostics, digitalization, and process improvement." 
  },
  { 
    date: "may 2025 — aug 2025", 
    duration: "3m", 
    company: "BMW MANUFACTURING CO., LLC", 
    role: "energy management intern", 
    logo: "/bmw-logo.png",
    details: "utilized acoustic imagery for air leak detection, developed a predictive forecasting model (Prophet) for cost/consumption planning (9% error rate), and managed 280+ solar panel inverters." 
  },
  { 
    date: "may 2024 — sept 2024", 
    duration: "4m", 
    company: "BAYERISCHE MOTOREN WERKE AG", 
    role: "electromobility intern", 
    logo: "/bmw-logo.png",
    details: "represented technical interests with infrastructure partners, implemented new charging session functions, and unified data systems to increase operational efficiency by 25%." 
  },
  { 
    date: "sept 2021 — june 2022", 
    duration: "9m", 
    company: "BMW OF NORTH AMERICA, LLC", 
    role: "legal services intern", 
    logo: "/bmw-logo.png",
    details: "managed and categorized the electronic law library for improved file access and collaborated with paralegals to proofread legal documentation." 
  },
  { 
    date: "mar 2021 — aug 2022", 
    duration: "1y 5m", 
    company: "CODE NINJAS", 
    role: "coding instructor", 
    logo: "/code-ninjas-logo.png",
    details: "led instructional groups of 10–30 students in coding and 3D modeling, simplifying complex technical concepts and facilitating hardware-based design discussions." 
  },
]

export function ExperienceTimeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-20">
      {experienceData.map((item, i) => (
        <motion.div
          key={i}
          className="flex items-center w-full justify-end"
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <div className="w-[45%] flex flex-row-reverse text-right items-center gap-4">
            <div className="text-center w-32 shrink-0">
              <div className="text-xs font-bold tracking-widest opacity-70">{item.date}</div>
              <div className="text-[10px] font-mono italic opacity-50">[{item.duration}]</div>
            </div>
            <img src={item.logo} alt={item.company} className="w-12 h-12 object-contain" />
            <div className="relative">
              <div className="text-sm uppercase tracking-wider font-bold">{item.company}</div>
              <div className="italic opacity-80 text-[11px]">{item.role}</div>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: hoveredIdx === i ? 1 : 0, height: hoveredIdx === i ? "auto" : 0 }}
                className="absolute right-0 top-full mt-2 w-72 bg-background border border-foreground/20 p-4 shadow-xl z-20 text-[10px] italic"
              >
                {item.details}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
