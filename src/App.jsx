import { Linkedin, Mail } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFA] text-[#1A1A1A]">
      {/* Top nav */}
      <header className="bg-white/80">
        <div className="mx-auto flex h-[200px] max-w-[1386px] items-center justify-between pl-[120px] pr-6 sm:pr-10">
          <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl h-[62px] w-[552px] flex items-center -mt-[5px]">
            Nanyan Amber Jiang
          </h1>
          <nav className="flex items-center gap-[40px] pr-[64px] text-sm uppercase -mt-[5px]">
            <a href="#ongoing" className="font-rubik no-underline !text-[#1A1A1A] hover:!text-[#003366] h-[23px] min-w-[61px] flex items-center justify-center">
              Ongoing
            </a>
            <a href="#contact" className="font-rubik no-underline !text-[#1A1A1A] hover:!text-[#003366] h-[23px] w-[61px] flex items-center justify-center">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main hero + bio block */}
      <main className="flex-1 bg-white">
        <section className="mx-auto flex h-[865px] max-w-[1386px] flex-row items-center justify-start gap-[64px] py-16 pl-[120px] pr-6 sm:pr-10 md:py-24">
          {/* Illustration */}
          <div className="flex shrink-0 justify-start">
            <div className="h-[459.4px] w-[682px] overflow-hidden rounded-2xl bg-white">
              <img
                src="/bio.jpg"
                alt="Illustration of Nanyan Amber Jiang"
                width={682}
                height={459.4}
                className="h-[459.4px] w-[682px] rounded-[16px] object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="h-[145px] min-w-[400px] w-[400px] shrink-0 md:pl-10 flex flex-col items-start text-left">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#111827]">
              BIO
            </h2>
            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-[#374151]">
              Since 2019, I have been working as a Full‑Stack Developer.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed tracking-[0.04em] text-[#374151]">
              I love cats, design, swimming, and coding.
            </p>
            <button
              type="button"
              role="button"
              className="button-27 mt-1.5"
              style={{ width: '90px', height: '21px', minHeight: '21px' }}
              onClick={() => {
                window.open('/NanyanJiang江南燕_Resume.pdf', '_blank', 'noopener,noreferrer')
              }}
            >
              VIEW CV
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-[1386px] pb-12 pl-[107.5px] pr-6 sm:pr-10">
          <p className="text-left text-xs tracking-[0.14em] text-[#9CA3AF]">
            Last updated March 4, 2026
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#FCFCFA]">
        <div className="mx-auto flex h-[167px] max-w-[1386px] flex-col justify-start gap-[56px] pt-[80px] pl-[120px] pr-6 pb-8 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:pr-10">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nanyanjiang/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-[#111827]"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nanyanjiang@qq.com"
              aria-label="Email"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-[#111827]"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
