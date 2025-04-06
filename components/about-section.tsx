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
    handleScroll() 

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
              alt="Wishmith's profile photo"
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
                  Second Year - Reading <br />
                  <u>Second Semester (Reading)</u> <br />
                  Client-Server Architectures (Java) <br />
                  Machine Learning and Data Mining (Python, Google Colab) <br />
                  Software Development Group Project (Application design and development) <br /><br />
                  <u>First Semester (Completed)</u> <br />
                  Object Oriented Programming (Java Object Oriented Programming) <br />
                  Software Development Group Project <br />
                  Database Systems (MySQL, NoSQL) <br />
                  Robotic Principles (Python, Matlab, Simulink) <br /><br />
                  First Year - Completed <br />
                  <u>Second Semester (Completed)</u> <br />
                  Software Development II ( Programming with Java) <br />
                  Trends in Computer Science <br />
                  Web Design and Development (HTML, CSS, JavaScript) <br /><br />
                  <u>First Semester (Completed)</u> <br />
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
                    className="text-secondary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-lg font-semibold mb-2"> CCNAv7: Introduction to Networks</h3>
              <p className="text-muted-foreground mb-4">Cisco</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                </span>
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
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-lg font-semibold mb-2"> CCNAv7: Switching, Routing, and
              Wireless Essentials</h3>
              <p className="text-muted-foreground mb-4">Cisco</p>
              <div className="flex justify-between items-center">
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
                    className="text-secondary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CCNAv7: Enterprise Networking,
              Security, and Automation</h3>
              <p className="text-muted-foreground mb-4">Cisco</p>
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
                    enjoy wildlife photography and planetary photography.
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
                  <h3 className="text-lg font-semibold mb-2">Sketching</h3>
                  <p className="text-muted-foreground">
                    I find peace in expressing myself through pictures. My sketches often reflect my
                    love for automobiles and animations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="-1.5 0 32 32"  
                  className="text-accent"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="icomoon-ignore">
                  </g>
                  <path d="M5.867 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133 2.133-0.96 2.133-2.133-0.96-2.133-2.133-2.133zM5.867 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z" fill="#000000">

                  </path>
                  <path d="M22.933 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133c1.173 0 2.133-0.96 2.133-2.133s-0.96-2.133-2.133-2.133zM22.933 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z" fill="#000000">

                  </path>
                  <path d="M25.12 11.2l-0.907-4.267c-0.373-1.387-1.44-2.133-2.88-2.133h-13.867c-1.493 0-2.347 0.747-2.773 2.133l-0.96 4.267h-3.733v1.067h3.467v0.053c-1.653 0.107-2.933 1.493-2.933 3.2v7.413h1.6v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h13.867v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h1.6v-7.413c0-1.653-1.28-3.040-2.88-3.2v-0.053h3.413v-1.067h-3.68zM5.707 7.253c0.32-0.96 0.8-1.387 1.76-1.387h13.867c1.013 0 1.6 0.427 1.867 1.333l1.067 5.12h-19.733l1.173-5.067zM6.4 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM25.6 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM27.2 15.52v6.347h-25.6v-6.347c0-1.173 0.96-2.133 2.133-2.133h21.333c1.173 0 2.133 0.96 2.133 2.133z" fill="#000000">

                  </path>
                </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cars</h3>
                  <p className="text-muted-foreground">
                    I love working on cars and tinkering with them. I like electronics, hardware and enjoy soldering and fixing things.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <svg version="1.1" id="Capa_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24"
                  height="24"
                  className="text-accent"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  x="0px" y="0px"
	                viewBox="0 0 64 64">
                  <g id="Football-ball_1_">
	                <path id="Football-ball" d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32c17.645,0,32-14.355,32-32S49.645,0,32,0z M61.624,36.731
		                l-3.885-6.439l2.681-7.88C61.439,25.425,62,28.647,62,32C62,33.61,61.869,35.189,61.624,36.731z M54.066,52.298
		                c-0.129-0.033-0.267-0.043-0.408-0.02L43.98,53.83c-0.021-0.118-0.057-0.236-0.123-0.345l-5.502-9.17l8.896-13.7h8.428
		                c0.023,0.108,0.047,0.215,0.105,0.312l5.236,8.678C59.761,44.41,57.335,48.748,54.066,52.298z M43.981,55.855l7.688-1.232
		                c-3.338,2.906-7.321,5.087-11.706,6.296L43.981,55.855z M12.65,9.1c5.056-4.279,11.541-6.913,18.628-7.082
		                c0.052,0.138,0.126,0.268,0.24,0.376l5.525,5.214l-2.185,8.156l-14.237,5.465c-0.052-0.042-0.093-0.094-0.154-0.126l-8.87-4.701
		                L12.65,9.1z M38.386,6.124l-4.283-4.042c3.916,0.273,7.628,1.293,10.989,2.931L38.386,6.124z M21.93,38.737l-0.816-15.554
		                L35.655,17.6l9.803,12.106l-8.483,13.063L21.93,38.737z M59.305,19.596c-0.031,0.054-0.072,0.098-0.093,0.159l-3.015,8.86h-9.048
		                L36.882,15.937l2.113-7.887l8.27-1.371c0.176-0.029,0.323-0.114,0.453-0.218C52.768,9.581,56.823,14.156,59.305,19.596z
		                M10.311,11.307l-0.802,5.561L4.16,20.843C5.595,17.274,7.696,14.045,10.311,11.307z M3.056,24.127
		                c0.044-0.023,0.09-0.037,0.131-0.068l7.737-5.751l8.158,4.323l0.888,16.936c0.002,0.025,0.013,0.048,0.016,0.073l-7.71,7.629
		                c-0.066,0.065-0.105,0.145-0.149,0.222L4.734,44.32c-0.028-0.012-0.057-0.009-0.085-0.018C2.953,40.545,2,36.383,2,32
		                C2,29.275,2.372,26.638,3.056,24.127z M6.078,47.072l5.415,2.322l4.141,7.729C11.72,54.564,8.44,51.119,6.078,47.072z
		                M18.837,58.951c-0.019-0.064-0.025-0.131-0.058-0.192l-5.317-9.924c0.076-0.043,0.155-0.08,0.22-0.145l8.027-7.942l14.507,3.888
		                l5.927,9.879c0.05,0.083,0.11,0.154,0.178,0.217l-5.449,6.867C35.285,61.859,33.659,62,32,62C27.28,62,22.814,60.901,18.837,58.951
		              z"/>
                  </g>
                </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Football</h3>
                  <p className="text-muted-foreground">
                    I enjoy playing football and juggling a ball with my feet as a way of relieving stress.
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

