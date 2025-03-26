export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-pretitle mb-6 text-primary glow-text">Get In Touch</h2>
          <p className="text-3xl font-semibold max-w-2xl">
            I'd love to hear from you. Whether you have a question or just want to chat about design & tech — shoot
            me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-pretitle mb-2">Reach me at</h3>
            <p className="contact-links">
              <a href="mailto:wishmithdissanayaka@gmail.com" className="animated-underline">
                wishmithdissanayaka@gmail.com
              </a>{" "}
              <br />
              <a href="tel:+1975432345" className="animated-underline">
                +94 76 237 9491
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-pretitle mb-2">Social</h3>
            <ul className="contact-social">
              <li>
                <a href="https://www.linkedin.com/in/wishmith-dissanayaka-b0954a294/" className="animated-underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/WishmithDissanayaka" className="animated-underline">
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="mailto:hello@example.com"
              className="inline-block w-full px-6 py-4 bg-secondary text-secondary-foreground text-center rounded-md text-lg hover:bg-secondary/90 transition-colors shadow-md"
            >
              Say Hello.
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

