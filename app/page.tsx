import Header from "@/components/header"
import IntroSection from "@/components/intro-section"
import AboutSection from "@/components/about-section"
import WorksSection from "@/components/works-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="s-pagewrap min-h-screen">
      <div className="circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Header />

      <main className="pt-20">
        <IntroSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

