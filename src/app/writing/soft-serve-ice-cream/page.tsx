"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import { GitHubIcon } from "@/components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

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
          layoutId={`soft-serve-${text.replace(/\W/g, "-")}-char-${i}`}
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
          layoutId={`soft-serve-${text.replace(/\W/g, "-")}-underline`}
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

export default function SoftServeIceCream() {
  const projectUrl = "https://n0lqn.github.io/HUM355SoftServeWebsite/";
  
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
            text="soft-serve ice cream"
            level={1}
            underline
            className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter"
          />
          <div className="space-y-2">
            <p className="text-sm opacity-50 tracking-widest leading-relaxed">
              advisor: professor matthew bower (
              <a href="mailto:matthew.bower@cooper.edu" className="hover:text-accent">
                matthew [DOT] bower [AT] cooper [DOT] edu
              </a>
              )<br />
              spring 2026
            </p>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-accent/5 p-8 border-l-4 border-accent mb-16">
          <p className="text-lg font-medium leading-relaxed">
            this project was developed for <strong>HUM355: Philosophy of Infrastructure</strong> at the cooper union, where i explore the infrastructure in regards to soft-serve machines and how it relates to fragmented labor of the extraction system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                thesis
              </h3>
              <p className="text-lg opacity-80 leading-relaxed">
                contemporary fast-food soft serve is more than a consumer product: it constitutes an infrastructure of alienation. the vanilla soft serve concoction is the end product of an extraction network that estranges and alienates the worker from their product.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/n0lqn/HUM355SoftServeWebsite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
                title="view source on github"
              >
                <GitHubIcon className="w-12 h-12" />
              </a>
            </div>
          </div>
          
          <div className="space-y-8 bg-foreground/[0.02] p-8 rounded-lg border border-foreground/5">
            <h3 className="text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              conceptual nodes
            </h3>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  the machine as authority
                </span>
                <p className="text-sm opacity-70">exploring how proprietary machines like the taylor c602 enforce specific labor patterns and corporate lockouts.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  fragmented labor
                </span>
                <p className="text-sm opacity-70">analyzing the worker's separation from the product, process, and value of their labor under industrial capitalism.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  hidden flows
                </span>
                <p className="text-sm opacity-70">mapping the cold chain logistics and extraction networks that remain invisible to the consumer until the system breaks.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Live Preview Window - Expanded Width */}
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24">
        <div className="w-full h-[120vh] bg-background border border-foreground/20 shadow-2xl rounded-lg overflow-hidden flex flex-col">
          <div className="bg-foreground/5 border-b border-foreground/10 p-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
            </div>
            <div className="text-[10px] tracking-widest font-bold opacity-60">
              soft-serve alienation interactive article
            </div>
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest font-bold hover:text-accent transition-colors"
            >
              open in new tab ↗
            </a>
          </div>
          
          <div className="flex-1 bg-white">
            <iframe 
              src={projectUrl} 
              className="w-full h-full border-none"
              title="Soft-Serve Alienation Preview"
            />
          </div>
        </div>
      </div>
      
      <footer className="max-w-screen-xl mx-auto px-6 md:px-12 opacity-30 text-[10px] tracking-[0.3em]">
        © 2026 nolan griffith
      </footer>
    </motion.main>
  );
}
