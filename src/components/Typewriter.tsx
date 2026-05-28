"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  hideCursorUntilStart?: boolean
  onComplete?: () => void
}

export function Typewriter({ 
  text, 
  speed = 100, 
  delay = 1000, 
  hideCursorUntilStart = false,
  onComplete
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const startTyping = () => {
      setHasStarted(true)
      let i = 0
      const timer = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1))
        i++
        if (i === text.length) {
          clearInterval(timer)
          setIsDone(true)
          if (onComplete) onComplete()
        }
      }, speed)
    }

    timeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [text, speed, delay])

  const showCursor = !isDone && (!hideCursorUntilStart || hasStarted)

  return (
    <span className={showCursor ? "typewriter-cursor" : ""}>
      {displayedText}
    </span>
  )
}
