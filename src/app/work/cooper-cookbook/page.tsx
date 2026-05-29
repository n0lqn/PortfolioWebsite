"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const cookbookPreviewUrl = "/electrical-engineering/cookbook/index.html";

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
          layoutId={`cooper-cookbook-${text.replace(/\W/g, "-")}-char-${i}`}
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
          layoutId={`cooper-cookbook-${text.replace(/\W/g, "-")}-underline`}
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

export default function CooperCookbook() {
  return (
    <motion.main
      className="min-h-screen pb-12"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="px-6 md:px-12 pt-12 flex justify-between items-center mb-12">
        <Link href="/" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back home
        </Link>
        <ThemeToggle />
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto mb-24">
        <div className="mb-12 border-b border-foreground/10 pb-12">
          <DancingTitle
            text="cooper cookbook"
            level={1}
            underline
            className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter"
          />
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-widest">
              project lead: nolan griffith <span className="opacity-30 mx-2">|</span>{" "}
              co-produced: alex valsamis (
              <a href="mailto:alex.valsamis@cooper.edu" className="hover:text-accent">
                alex.valsamis [AT] cooper.edu
              </a>
              )
            </p>
            <p className="text-sm opacity-50 tracking-widest">
              advised: christopher hong (
              <a href="mailto:christopher.hong@cooper.edu" className="hover:text-accent">
                christopher.hong [AT] cooper.edu
              </a>
              ) - spring 2026
            </p>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-accent/5 p-8 border-l-4 border-accent mb-16">
          <p className="text-lg font-medium leading-relaxed">
            the cooper cookbook was made in spring of 2026 as a project under{" "}
            <a
              href="https://hong3cooper.github.io/ece366_spring2026"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent hover:underline decoration-dotted"
            >
              ece 366: software engineering
            </a>
            , a technical requirement for cooper union students in electrical engineering under a computer engineering track.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              project overview
            </h3>
            <p className="text-lg opacity-80 leading-relaxed">
              cooper cookbook is a community-led documentation platform designed for recipes. the website allows users to discover recipes, maintain a personal inventory of favorites, and collaborate through a unique revision system.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              initial state & demo access
            </h3>
            <p className="text-lg opacity-80 leading-relaxed mb-4">
              the system includes pre-populated accounts for immediate exploration:
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm font-bold tracking-widest bg-foreground/5 p-6 rounded">
              <li>user1: password1</li>
              <li>user2: password2</li>
            </ul>
          </div>

          <a 
            href="https://github.com/n0lqn/ECE366CooperCookbook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold tracking-widest border-2 border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            view source on github ↗
          </a>
          <p className="text-xs opacity-40 italic">
            note: full testing framework and technical setup details are available in the repository.
          </p>
        </div>

        <div className="space-y-8 bg-foreground/[0.02] p-8 rounded-lg border border-foreground/5">
          <h3 className="text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            core features
          </h3>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1">
              <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                user systems
              </span>
              <p className="text-sm opacity-70">complete sign in/up with secure bcrypt hashing. "my kitchen" for creations and "the stash" for saved community favorites.</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                recipe management
              </span>
              <p className="text-sm opacity-70">editing control, keyword search, and one-click stashing. integrated collections for simplified organization.</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                forking system
              </span>
              <p className="text-sm opacity-70">create personal, editable copies of community recipes. the system automatically maintains a lineage record for attribution.</p>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                security
              </span>
              <p className="text-sm opacity-70">secure password update flows and a generated local reset link system for recovery.</p>
            </li>
          </ul>
        </div>
        </div>
        {/* Live Preview Window - Even Larger */}
        <div className="w-full h-[120vh] bg-background border border-foreground/20 shadow-2xl rounded-lg overflow-hidden flex flex-col">
          <div className="bg-foreground/5 border-b border-foreground/10 p-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
            </div>
            <div className="text-[10px] tracking-widest font-bold opacity-60">
              cooper cookbook static preview (v3.4.0)
            </div>
            <a 
              href={cookbookPreviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest font-bold hover:text-accent transition-colors"
            >
              open in new tab ↗
            </a>
          </div>
          
          <div className="flex-1 bg-white">
            <iframe 
              src={cookbookPreviewUrl} 
              className="w-full h-full border-none"
              title="Cooper Cookbook Preview"
            />
          </div>
        </div>
      </div>
      
      <footer className="max-w-screen-xl mx-auto px-6 md:px-12 opacity-30 text-[10px] tracking-[0.3em]">
        © 2026 alex valsamis & nolan griffith
      </footer>
    </motion.main>
  );
}
