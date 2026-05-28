"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import { GitHubIcon } from "@/components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";
const essays = [
  {
    title: "soft-serve ice cream.",
    description: "exploring the infrastructure of soft-serve machines and how they relate to the fragmented labor of extraction systems, which in turn, estrange and alienate the worker from their product.",
    github: "https://github.com/n0lqn/HUM355SoftServeWebsite",
    link: "/writing/soft-serve-ice-cream",
    previewUrl: "https://taylornewengland.com/wp-content/uploads/2020/01/equipment-grouping.png",
    tags: ["philosophy", "infrastructure", "labor"]
  },
  {
    title: "monetary velocity.",
    description: "nominated for the charles goodman essay award in humanities. reexamining the quantity theory of money (mv = py) through the lens of privatized banking and digital transaction systems.",
    link: "/writing/monetary-velocity",
    previewUrl: "https://fred.stlouisfed.org/graph/graph-landing.php?g=1W10z&width=1000&height=550",
    tags: ["award nomination", "macroeconomics", "finance"]
  },
  {
    title: "feeling work.",
    description: "an exploration of blue-collar labor through literature, oral history, and personal experience, focusing on race, geography, and gender in the cultural archive.",
    link: "/writing/blue-collar-archive",
    previewUrl: "https://lawrencemigration.phillipscollection.org/sites/default/files/styles/panel/public/TPC_Panel3_900.jpg",
    tags: ["literature", "labor history", "ethnography"]
  },
  {
    title: "critical theory.",
    description: "a collection of response papers for hum-375, examining identity, structural power, and contemporary alienation through semiotics and critical theory.",
    link: "/writing/critical-theory",
    previewUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYgVaeLxlx3jPMsjlBX3RepObzkIQ044eYw&s",
    tags: ["critical theory", "philosophy", "education"]
  }
];

export default function Writing() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="flex justify-between items-center mb-24">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">writing.</h1>
        <p className="max-w-2xl text-lg opacity-60 mb-16 italic">
          essays developed from my interdisciplinary studies proposal. this research examines why workers feel alienated from the products of their labor, exploring the dialectic between global economic systems and local, identity-driven labor experiences.
        </p>
        
        <div className="grid grid-cols-1 gap-12">
          {essays.map((essay, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-foreground/10 pb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold tracking-tight">{essay.title}</h2>
                    {essay.github && (
                      <a href={essay.github} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                        <GitHubIcon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  <p className="text-xl opacity-80 max-w-2xl mb-6 leading-relaxed">{essay.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {essay.tags.map(tag => (
                      <span key={tag} className={`text-[10px] uppercase tracking-widest border px-2 py-1 ${tag === 'award nomination' ? 'border-[#D4AF37] text-[#D4AF37] font-bold' : 'border-foreground/20'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={essay.link}
                      className="inline-block text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                    >
                      view project →
                    </Link>
                  </div>
                </div>

                {/* Optional visual preview integration */}
                {essay.previewUrl && (
                  <Link href={essay.link} className="w-full md:w-[400px] aspect-video border border-foreground/10 bg-black overflow-hidden group-hover:border-accent/50 transition-colors hidden md:block relative">
                    <div className="absolute inset-0 z-10 bg-transparent" />
                    {essay.title === "soft-serve ice cream." || essay.title === "feeling work." || essay.title === "critical theory." ? (
                      <img 
                        src={essay.previewUrl} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={essay.title}
                      />
                    ) : (
                      <iframe 
                        src={essay.previewUrl} 
                        className="w-[800px] h-[450px] border-none scale-[0.5] origin-top-left grayscale group-hover:grayscale-0 transition-all duration-500"
                        title={essay.title}
                        scrolling="no"
                      />
                    )}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 opacity-40">
          <p className="text-sm italic">more essays and infrastructure notes coming soon...</p>
        </div>
      </div>
    </main>
  );
}
