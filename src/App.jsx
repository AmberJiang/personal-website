import { Linkedin, Mail } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFA] text-[#1A1A1A]">
      {/* Top nav */}
      <header className="bg-white/80">
        <div className="mx-auto flex min-h-[72px] max-w-[1386px] flex-col items-start justify-center gap-3 px-[5vw] py-4 md:min-h-[120px] md:flex-row md:items-center md:justify-between md:px-[6vw] md:py-5 lg:h-[200px] lg:flex-row lg:justify-between lg:px-0 lg:pl-[120px] lg:pr-6 lg:py-0">
          <h1 className="font-serif text-xl font-semibold tracking-tight md:text-2xl lg:text-4xl lg:h-[62px] lg:w-[552px] lg:flex lg:items-center -mt-[5px]">
            Nanyan Amber Jiang
          </h1>
          <nav className="flex items-center gap-[3vw] text-xs uppercase md:gap-[4vw] lg:gap-[40px] lg:pr-[64px] lg:text-sm -mt-[5px]">
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
        <section className="mx-auto flex min-h-0 max-w-[1386px] flex-col items-stretch gap-[5vw] px-[5vw] py-[6vw] md:flex-row md:items-center md:justify-start md:gap-[5vw] md:px-[6vw] md:py-[8vw] lg:h-[865px] lg:flex-row lg:gap-[64px] lg:py-24 lg:pl-[120px] lg:pr-6">
          {/* Illustration */}
          <div className="flex w-full justify-center md:w-[48%] md:max-w-[682px] md:shrink-0 lg:w-auto lg:max-w-none">
            <div className="aspect-[682/459.4] w-full max-w-full overflow-hidden rounded-2xl bg-white lg:h-[459.4px] lg:w-[682px]">
              <img
                src="/bio.jpg"
                alt="Illustration of Nanyan Amber Jiang"
                width={682}
                height={459.4}
                className="h-full w-full rounded-[16px] object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="flex w-full min-w-0 flex-col items-start text-left md:w-[48%] md:max-w-[400px] lg:h-[145px] lg:min-w-[400px] lg:w-[400px] lg:shrink-0 lg:pl-10">
            <h2 className="font-serif text-lg font-semibold tracking-tight text-[#111827] md:text-xl lg:text-2xl">
              BIO
            </h2>
            <p className="mt-[2vw] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:mt-4 md:text-sm">
              Since 2019, I have been working as a Full‑Stack Developer.
            </p>
            <p className="mt-[1.5vw] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:mt-1.5 md:text-sm">
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

        <section className="mx-auto max-w-[1386px] pb-[4vw] px-[5vw] md:pb-12 md:px-[6vw] lg:pb-12 lg:pl-[107.5px] lg:pr-6">
          <p className="text-left text-xs tracking-[0.14em] text-[#9CA3AF]">
            Last updated {__LAST_UPDATED_DISPLAY__}
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#FCFCFA]">
        <div className="mx-auto flex min-h-0 max-w-[1386px] flex-col justify-start gap-[4vw] px-[5vw] pb-[4vw] pt-[6vw] text-xs text-[#6B7280] md:flex-row md:items-center md:gap-[5vw] md:px-[6vw] md:pb-8 md:pt-[8vw] lg:h-[167px] lg:gap-[56px] lg:pt-[80px] lg:pl-[120px] lg:pr-6 lg:pb-8">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nanyanjiang/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full text-[#111827] md:h-[48px] md:w-[48px] lg:h-[52px] lg:w-[52px]"
            >
              <Linkedin className="h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </a>
            <a
              href="mailto:nanyanjiang@qq.com"
              aria-label="Email"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full text-[#111827] md:h-[48px] md:w-[48px] lg:h-[52px] lg:w-[52px]"
            >
              <Mail className="h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
