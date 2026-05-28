"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  date: string
  duration: string
  title: string
  company: string
  logo: string
  type: string
}

const education: TimelineItem[] = [
  { date: "2022 — 2026", duration: "4y", title: "bachelor of engineering in electrical engineering", company: "THE COOPER UNION", logo: "/cooper-logo.png", type: "education" },
  { date: "2018 — 2022", duration: "4y", title: "major in strategic asset management", company: "BERGEN COUNTY TECHNICAL HIGH SCHOOL, TETERBORO", logo: "/bergen-tech-logo.png", type: "education" },
]

const experience: TimelineItem[] = [
  { date: "june 2026 — aug 2026", duration: "3m", title: "technical service intern", company: "BMW OF NORTH AMERICA, LLC", logo: "/bmw-logo.png", type: "experience" },
  { date: "may 2025 — aug 2025", duration: "3m", title: "energy management intern", company: "BMW MANUFACTURING CO., LLC", logo: "/bmw-logo.png", type: "experience" },
  { date: "may 2024 — sept 2024", duration: "4m", title: "electromobility intern", company: "BAYERISCHE MOTOREN WERKE AG", logo: "/bmw-logo.png", type: "experience" },
  { date: "sept 2021 — june 2022", duration: "9m", title: "legal services intern", company: "BMW OF NORTH AMERICA, LLC", logo: "/bmw-logo.png", type: "experience" },
  { date: "mar 2021 — aug 2022", duration: "1y 5m", title: "coding instructor", company: "CODE NINJAS", logo: "/code-ninjas-logo.png", type: "experience" },
]

export function HorizontalTimeline() {
  return (
    <section className="py-24 overflow-x-auto">
      <div className="flex gap-16 px-12 min-w-max">
        {[...education, ...experience].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-72 flex flex-col gap-4 border-l-2 border-foreground pl-6"
          >
            <div className="text-xs font-bold tracking-widest opacity-70">{item.date} [{item.duration}]</div>
            <div className="flex items-center gap-4">
              <img src={item.logo} alt={item.company} className="w-12 h-12 object-contain" />
              <div className="text-sm uppercase tracking-wider font-bold">{item.company}</div>
            </div>
            <div className="italic opacity-80 text-sm">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
