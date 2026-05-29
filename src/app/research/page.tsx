"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const researchProjects = [
  {
    title: "master's thesis project",
    date: "fall 2027",
    institution: "the cooper union for the advancement of science and art",
    description: "prospective master's thesis research. stay tuned!"
  },
  {
    title: "senior projects (ece-395 and ece-396)",
    date: "fall 2026 — spring 2027",
    institution: "the cooper union for the advancement of science and art",
    advisors: "advised by: professors stella banou and neveen shlayan",
    description: "i plan to take the following course: courses ece 395 and ece 396 constitute the year-long senior design project. students work in small groups on projects chosen with the advice and consent of the faculty adviser. projects may be oriented towards research or product development, and may be in any area of electrical and computer engineering, such as in: computer engineering, signal processing (imaging, sensor arrays, multimedia), telecommunications, computer networks, microwaves, optics, advanced electronics, vlsi chip design, or an interdisciplinary area such as robotics or bioengineering. students perform all aspects of project management, such as scheduling, budgeting, system design and developing milestones, as well as technical work including hardware and software implementation, testing and performance evaluation. students also give several spontaneous and rehearsed oral presentations and prepare written reports. students attend weekly lectures covering: social, economic, legal and ethical issues; safety and laboratory practice; design methodologies; technical writing; preparation of multimedia presentations and tailoring presentations to target audiences."
  }
];

export default function Capstone() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="relative mb-16 inline-flex cursor-default"
          initial="initial"
          whileHover="hover"
        >
          {"capstone".split("").map((char, i) => (
            <motion.h1
            key={i}
            className="text-5xl md:text-7xl font-bold tracking-tighter select-none"
            initial="initial"
            animate="dance"              variants={{
                initial: { y: 0 },
                hover: {
                  y: [0, -20, 0],
                  transition: { duration: 0.4, ease: "easeOut" }
                },
                dance: {
                  y: [0, -20, 0],
                  transition: { duration: 0.4, ease: "easeOut", delay: 1 + (i * 0.08) }
                }
              }}
            >
              {char}
            </motion.h1>
          ))}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            .
          </motion.h1>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-16">
          {researchProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-foreground/10 pb-16"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight uppercase">{project.title}</h2>
                <div className="text-lg font-bold italic opacity-70">{project.date}</div>
                <div className="text-md italic opacity-60 font-semibold">{project.institution}</div>
                {project.advisors && <div className="text-md italic opacity-60">{project.advisors}</div>}
                <p className="text-lg opacity-90 max-w-4xl leading-relaxed mt-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
