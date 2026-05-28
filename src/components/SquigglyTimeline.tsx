"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

interface TimelineItem {
  date: string
  duration: string
  title: string
  company: string
  logo: string
  type: string
  details: string
}

const timelineData: TimelineItem[] = [
  { date: "2018 — 2022", duration: "4y", title: "major in strategic asset management", company: "BERGEN COUNTY TECHNICAL HIGH SCHOOL, TETERBORO", logo: "/bergen-tech-logo.png", type: "education", details: "Technical High School with a focus on Strategic Asset Management, providing a foundation in systematic planning and technical operations." },
  { date: "mar 2021 — aug 2022", duration: "1y 5m", title: "coding instructor", company: "CODE NINJAS", logo: "/code-ninjas-logo.png", type: "experience", details: "Led instructional groups of 10–30 students, teaching complex concepts accessibly and advising on 3D modeling and hardware-based design discussions." },
  { date: "sept 2021 — june 2022", duration: "9m", title: "legal services intern", company: "BMW OF NORTH AMERICA, LLC", logo: "/bmw-logo.png", type: "experience", details: "Managed and categorized the electronic law library for improved file access and collaborated with paralegals to proofread legal documentation." },
  { date: "2022 — 2026", duration: "4y", title: "bachelor of engineering in electrical engineering", company: "THE COOPER UNION", logo: "/cooper-logo.png", type: "education", details: "Bachelor of Engineering in Electrical Engineering (ABET Accredited), with a concentration in Computer Engineering and minor in Political Economy." },
  { date: "may 2024 — sept 2024", duration: "4m", title: "electromobility intern", company: "BAYERISCHE MOTOREN WERKE AG", logo: "/bmw-logo.png", type: "experience", details: "Represented technical interests with infrastructure partners, implemented new charging session functions, and unified data systems to increase operational efficiency by 25%." },
  { date: "may 2025 — aug 2025", duration: "3m", title: "energy management intern", company: "BMW MANUFACTURING CO., LLC", logo: "/bmw-logo.png", type: "experience", details: "Utilized acoustic imagery for air leak detection, developed a predictive forecasting model (Prophet) for cost/consumption planning (9% error rate), and managed 280+ solar panel inverters." },
  { date: "june 2026 — aug 2026", duration: "3m", title: "technical service intern", company: "BMW OF NORTH AMERICA, LLC", logo: "/bmw-logo.png", type: "experience", details: "Supporting technical service operations with a focus on electrical/mechanical vehicle diagnostics, digitalization, and process improvement." },
]

export function SquigglyTimeline() {
  const containerRef = useRef(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.8"]
  })

  const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })
  const arrowDistance = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative py-24 min-h-[100vh]">
      {/* SVG Path - follows scroll normally */}
      <div className="absolute left-1/2 top-[-150px] h-[calc(100%+150px)] w-[300px] -translate-x-1/2 -z-10">
        <svg viewBox="0 0 300 1300" className="h-full w-full overflow-visible">
        {/* Start Circle */}
          <circle cx="150" cy="-100" r="12" className="fill-[var(--foreground)]" />

          <motion.path
            d="M 150 -100 Q 170 200, 150 400 T 150 800 T 150 1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-[var(--foreground)] transition-colors duration-500"
            style={{ pathLength }}
          />

          {/* End Circle */}
          <circle cx="150" cy="1200" r="12" className="fill-[var(--foreground)]" />
        </svg>
      </div>

      <div className="flex flex-col gap-40">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: item.type === "education" ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            className={`flex items-center w-full ${item.type === "education" ? "justify-start" : "justify-end"}`}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className={`w-[45%] flex items-center gap-4 relative ${item.type === "experience" ? "flex-row-reverse text-right" : ""}`}>
              <div className="text-center w-32 shrink-0">
                <div className="text-xs font-bold tracking-widest opacity-70">{item.date}</div>
                <div className="text-[10px] font-mono italic opacity-50">[{item.duration}]</div>
              </div>
              <img src={item.logo} alt={item.company} className="w-12 h-12 object-contain" />
              <div>
                {item.type === "education" ? (
                  <a href={item.company === "THE COOPER UNION" ? "https://www.cooper.edu" : "https://www.bergen.org/Page/4674"} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider font-bold hover:text-accent transition-colors">{item.company}</a>
                ) : (
                  <a href={item.company === "CODE NINJAS" ? "https://www.codeninjas.com/" : (item.company === "BAYERISCHE MOTOREN WERKE AG" ? "/Internship_certificate.pdf" : "#")} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider font-bold hover:text-accent transition-colors">{item.company}</a>
                )}
                <div className="italic opacity-80 text-[11px]">{item.title}</div>
                
                {/* Description Popup - Centered vertically with title */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                    className={`absolute top-1/2 -translate-y-1/2 ${item.type === "education" ? "left-[140%]" : "right-[140%]"} w-96 p-8 bg-foreground text-background text-sm pointer-events-none rounded shadow-2xl z-50`}
                >
                    {item.details}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <a 
              href="/NolanGriffithResume2026.pdf" 
              download
              className="block hover:scale-105 transition-transform"
            >
              <img src="/cv-button.png" alt="download resume" className="w-auto h-64 object-contain invert-on-dark" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
