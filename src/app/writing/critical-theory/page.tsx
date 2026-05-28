"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useState } from "react";

function DancingTitle({
  text,
  className,
  level = 3,
  underline = false,
}: {
  text: string;
  className: string;
  level?: 1 | 3 | "span";
  underline?: boolean;
}) {
  const letters = text.split("");
  const content = (
    <>
      {letters.map((char, i) => (
        <motion.span
          key={`${text}-${char}-${i}`}
          layoutId={`critical-theory-${text.replace(/\W/g, "-")}-char-${i}`}
          className="select-none"
          initial="initial"
          animate="dance"
          variants={{
            initial: { y: 0 },
            hover: {
              y: [0, -20, 0],
              transition: { duration: 0.4, ease: "easeOut" },
            },
            dance: {
              y: [0, -20, 0],
              transition: { duration: 0.4, ease: "easeOut", delay: i * 0.06 },
            },
          }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
      {underline && (
        <motion.div
          layoutId={`critical-theory-${text.replace(/\W/g, "-")}-underline`}
          className="absolute -bottom-2 left-0 h-1 w-full bg-accent md:h-2"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </>
  );

  const sharedProps = {
    className: `relative inline-flex cursor-default flex-wrap ${className}`,
    initial: "initial",
    whileHover: "hover",
    style: { fontFamily: '"Courier New", Courier, monospace' },
  };

  if (level === 1) return <motion.h1 {...sharedProps}>{content}</motion.h1>;
  if (level === "span") return <motion.span {...sharedProps}>{content}</motion.span>;
  return <motion.h3 {...sharedProps}>{content}</motion.h3>;
}

const papers = [
  { 
    title: "syntagmatic structures and the construction of the self", 
    date: "28 april 2026", 
    pdf: "/critical-theory-paper-1.pdf", 
    preview: "https://leibniz.stanford.edu/previews/critical-theory.png",
    content: "Chandler’s ideas on syntagmatic analysis in Semiotics for Beginners redefines meaning as a product of structured relations among signs... Extending this insight, my central claim is that my career-facing identity is created syntagmatically: not as an inner essence expressed outwardly, but as a series of actions, achievements, comparisons, and explanations arranged into a narrative of progress." 
  },
  { 
    title: "the idea of poetic justice in the justice system", 
    date: "17 may 2026", 
    pdf: "/critical-theory-paper-2.pdf", 
    preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSydGXAzJYXBDyal0BkSJn52YCo1CqSXu3A&s",
    content: "When I first encountered Foucault, I found myself questioning assumptions I had taken for granted about the justice system... Foucault complicates punishment: it is not only repression or exclusion. He warns that power does not just exclude or repress; 'power produces; it produces reality; it produces domains of objects and rituals of truth.'" 
  },
  { 
    title: "internalizing alienation", 
    date: "27 february 2026", 
    pdf: "/critical-theory-paper-3.pdf", 
    preview: "https://m.media-amazon.com/images/I/71Ky6QDmpvL._AC_UF1000,1000_QL80_.jpg",
    content: "When I first encountered the concept of alienation, it was hard to relate to it and really understand the crux of it. Marx’s 19th-century factory worker dilemma seemed irrelevant to me... The reading proposes that alienation involves not only external domination but also the way human-produced entities can be 'wrongly taken by them as something given or outside their conscious control.'" 
  },
];

function PaperAccordion({ title, date, content, pdf, preview }: { title: string, date: string, content: string, pdf: string, preview: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden my-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between hover:bg-foreground/5 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-xl font-bold lowercase tracking-tight">{title}</h3>
          <p className="text-xs opacity-50 mt-1 uppercase">{date}</p>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-foreground/5"
          >
            <div className="p-8 space-y-6">
              <img src={preview} alt={title} className="w-full max-h-[300px] object-contain rounded-lg" />
              <p className="text-lg opacity-80 leading-relaxed">{content}</p>
              <a 
                href={pdf} 
                target="_blank" 
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors"
              >
                <Download className="w-4 h-4" /> download full pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CriticalTheory() {
  return (
    <motion.main
      className="min-h-screen pb-12"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="px-6 md:px-12 pt-12 flex justify-between items-center mb-12">
        <Link href="/writing" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back to writing
        </Link>
        <ThemeToggle />
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto mb-24">
        <div className="mb-12 border-b border-foreground/10 pb-12">
          <DancingTitle
            text="critical theory"
            level={1}
            underline
            className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter"
          />
          <div className="space-y-2">
            <p className="text-sm opacity-50 tracking-widest leading-relaxed">
              advisor: professor sohnya sayres<br />
              spring 2026
            </p>
          </div>
        </div>

        <div className="bg-accent/5 p-8 border-l-4 border-accent mb-16">
          <p className="text-lg font-medium leading-relaxed">
            a collection of response papers written for <strong>HUM-375: Critical Theory</strong> at the cooper union. these essays synthesize complex theoretical texts to re-examine identity, structural power, and contemporary alienation.
          </p>
        </div>

        <div className="space-y-4">
          {papers.map((paper, i) => (
            <PaperAccordion key={i} {...paper} />
          ))}
        </div>
      </div>
      
      <div className="text-center pb-24 text-xs italic opacity-40">
        Footnotes and additional attributions are mentioned in the PDFs of these papers.
      </div>

      <footer className="max-w-screen-xl mx-auto px-6 md:px-12 opacity-30 text-[10px] tracking-[0.3em] py-12 border-t border-foreground/5">
        © 2026 nolan griffith
      </footer>
    </motion.main>
  );
}
