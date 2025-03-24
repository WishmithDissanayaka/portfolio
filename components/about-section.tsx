"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about")
      if (!section) return

      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-20">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <div className="lg:order-1 order-2">
            <Image
              src="/portfolio.jpeg?height=600&width=450"
              alt="Luther's profile photo"
              width={450}
              height={600}
              className="rounded-lg shadow-lg glow-box mx-auto w-full h-auto object-cover"
            />
          </div>

          <div className="lg:order-2 order-1">
            <h2 className="text-pretitle mb-6 text-primary glow-text">About</h2>
            <p className="attention-getter mb-8">
            Since the invention of the analytical engine, computers have evolved leaps
            and bounds and as a result peaked my interest in the field making me eager
            to apply the knowledge and skills I have accumulated in the real world
            through solving problems and working as part of a team. I have expertise in
            programming languages such as Java and Python and am well versed in
            agile methodologies. I am also a quick learner and am always eager to learn
            new technologies and methodologies.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-pretitle mb-6 text-primary glow-text">Expertise</h2>
          <ul className="skills-list flex flex-wrap">
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Blender</li>
            <li>NodeJs</li>
            <li>Python</li>
            <li>React</li>
            <li>NextJs</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div>
            <h2 className="text-pretitle mb-6 text-primary glow-text">Education</h2>

            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title"> Informatics Institute of Technology</h4>
                  <h5 className="timeline__meta">BSc (Hons) Computer Science</h5>
                  <p className="timeline__timeframe">2023 - Present</p>
                </div>
                <div className="timeline__desc">
                  <p>
                  Second Year - Reading <br /><br />
                  Second Semester (Reading) <br />
                  Client-Server Architectures (Java) <br />
                  Machine Learning and Data Mining (Python, Google Colab) <br />
                  BSc (Hons) Computer Science (Reading) <br />
                  Software Development Group Project (Application design and development) <br /><br />
                  First Semester (Completed) <br />
                  Object Oriented Programming (Java Object Oriented Programming) <br />
                  Software Development Group Project <br />
                  Database Systems (MySQL, NoSQL) <br />
                  Robotic Principles (Python, Matlab, Simulink) <br /><br />
                  First Year - Completed <br /><br />
                  Second Semester (Completed) <br />
                  Software Development II ( Programming with Java) <br />
                  Trends in Computer Science <br />
                  Web Design and Development (HTML, CSS, JavaScript) <br /><br />
                  First Semester (Completed) <br />
                  Software Development I (Programming with Python) <br />
                  Mathematics for Computing <br />
                  Computer Systems Fundamentals
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title"> Informatics Institute of Technology</h4>
                  <h5 className="timeline__meta">Foundation certificate in higher education</h5>
                  <p className="timeline__timeframe">2022 - 2023</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Passed with Distinction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-pretitle mb-6 text-primary glow-text">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L10.4 6.2a2 2 0 0 1 1.4-.6h.4a2 2 0 0 1 1.4.6l1.2 1.2a2 2 0 0 0 1.4.6h3.8a2 2 0 0 1 1.2.4Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M9 16h6"></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Introduction to Packet Tracer</h3>
              <p className="text-muted-foreground mb-4">Cisco</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium"> 2024
                </span>
                <a href="#" className="text-primary hover:underline text-sm">
                  Verify
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-secondary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Frontend Developer</h3>
              <p className="text-muted-foreground mb-4">Meta (Facebook)</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Credential ID: META-789012</span>
                <a href="#" className="text-primary hover:underline text-sm">
                  Verify
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">2021</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design Certification</h3>
              <p className="text-muted-foreground mb-4">Google</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Credential ID: GGL-345678</span>
                <a href="#" className="text-accent hover:underline text-sm">
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="text-pretitle mb-6 text-primary glow-text">Hobbies & Interests</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Photography</h3>
                  <p className="text-muted-foreground">
                    I love capturing moments and exploring different perspectives through my camera lens. I particularly
                    enjoy street photography and landscapes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-secondary"
                  >
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                    <circle cx="17" cy="7" r="5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Painting</h3>
                  <p className="text-muted-foreground">
                    I find peace in expressing myself through watercolors and acrylics. My paintings often reflect my
                    love for nature and abstract concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M2 3h20" />
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                    <path d="m7 21 5-5 5 5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reading</h3>
                  <p className="text-muted-foreground">
                    I'm an avid reader with a particular interest in science fiction, philosophy, and design theory.
                    Books help me gain new perspectives and inspire my creative work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 8a6 6 0 0 0-9.33-5" />
                    <path d="m6 15 4-4 4 4 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hiking</h3>
                  <p className="text-muted-foreground">
                    I enjoy exploring trails and connecting with nature. Hiking helps me clear my mind and find
                    inspiration in natural patterns and landscapes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

