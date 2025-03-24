"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [typedText, setTypedText] = useState("")
  const fullText = "  Crafting innovative digital experiences with a focus on user-centered design and clean code."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  // Scroll animation handler
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (!href) return

    const targetElement = document.querySelector(href)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center pt-16 pb-20 relative tech-grid"
    >
      <div className="row intro-content wide">
        <div className="max-w-3xl px-4">
          <div className="text-pretitle with-line text-primary">
            <span className="glow-text">Hello</span>
          </div>

          <h1 className="text-huge-title glow-text">
            I am Wishmith, <br className="hidden sm:block" />a digital designer <br className="hidden sm:block" />&
            developer based <br className="hidden sm:block" />
            in Sri Lanka.
          </h1>

          <div className="mt-6 text-lg max-w-xl code-block">
            <div className="flex flex-wrap">
              <span className="text-accent mr-1">const</span>
              <span className="text-primary mr-1">mission</span>
              <span className="mr-1">=</span>
              <span className="text-secondary mr-1">"</span>
              <span className="mission-text">{typedText}</span>
              <span className="text-secondary">"</span>
              <span>;</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={handleScrollDown}
        className="intro-scrolldown bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </a>
    </section>
  )
}



