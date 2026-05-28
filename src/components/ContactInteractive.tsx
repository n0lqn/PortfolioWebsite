import Link from "next/link"
import { motion } from "framer-motion"

export function ContactInteractive() {
  return (
    <Link 
      href="/contact"
      className="hover:text-accent transition-colors group relative flex"
    >
      {"contact".split("").map((char, i) => (
        <motion.span
          key={i}
          layoutId={`contact-char-${i}`}
          transition={{ duration: 1, ease: "linear" }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.span 
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
        layoutId="contact-underline"
        transition={{ duration: 1, ease: "linear" }}
      />
    </Link>
  )
}
