"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PortfolioItem {
  id: string
  title: string
  category: string
  image: string
  description: string
  link: string
}

export default function WorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const portfolioItems: PortfolioItem[] = [
    {
      id: "01",
      title: "",
      category: "Website",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.",
      link: "https://www.behance.net/",
    },
    {
      id: "02",
      title: "",
      category: "Product Design",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      link: "https://www.behance.net/",
    },
    {
      id: "03",
      title: "",
      category: "",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.",
      link: "https://www.behance.net/",
    },
    {
      id: "04",
      title: "",
      category: "Website",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.",
      link: "https://www.behance.net/",
    },
    {
      id: "05",
      title: "",
      category: "Illustration",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      link: "https://www.behance.net/",
    },
    {
      id: "06",
      title: "",
      category: "",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.",
      link: "https://www.behance.net/",
    },
  ]

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  return (
    <section id="works" className="py-20 bg-muted tech-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-pretitle mb-6 text-primary glow-text">Recent Works</h2>
          <p className="text-3xl font-semibold">
            Here are some of my favorite projects I have done lately. Feel free to check them out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="overflow-hidden rounded-lg glow-box">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{item.category}</div>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <button
                  onClick={() => openModal(item)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
                  aria-label={`View details about ${item.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="currentColor"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-16 right-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                aria-label={`Visit project ${item.title}`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90 transition-all">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
        

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl bg-card">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.title}</DialogTitle>
                <DialogDescription>{selectedItem.category}</DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-md"
                />

                <p className="mt-4">{selectedItem.description}</p>

                <div className="mt-6">
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Project Link
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
                      className="ml-2 w-4 h-4"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

