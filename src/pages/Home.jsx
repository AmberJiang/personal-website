import Skills from '../components/Skills.jsx'
import Timeline from '../components/Timeline.jsx'

function Home() {
  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto flex min-h-0 max-w-[1386px] flex-col items-stretch gap-[5vw] px-[5vw] py-[6vw] md:flex-row md:items-start md:justify-start md:gap-[5vw] md:px-[6vw] md:py-[8vw] lg:gap-[64px] lg:py-24 lg:pl-[120px] lg:pr-6">
        <div className="flex w-full min-w-0 flex-col items-start text-left md:w-[48%] md:max-w-[400px] lg:min-w-[400px] lg:w-[400px] lg:shrink-0 lg:pl-10">
          <h2 className="font-serif text-lg font-semibold tracking-tight text-[#111827] md:text-xl lg:text-2xl">
            BIO
          </h2>
          <div className="mt-[2vw] flex max-w-[360px] flex-col gap-3 md:mt-5 md:gap-4">
            <p className="text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:text-sm">
              <span className="font-serif font-medium text-[#111827]">
                Full-stack developer since 2019
              </span>
              {' — building products from interface to infrastructure.'}
            </p>
            <p className="text-xs leading-relaxed tracking-[0.04em] text-[#9CA3AF] md:text-sm">
              Off the clock, I love cats, design, swimming, piano, and side projects in code.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[240px] md:max-w-[260px] lg:w-[280px] lg:max-w-[280px] lg:shrink-0">
          <img
            src="/bio.jpg"
            alt="Nanyan Jiang"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <Skills />

      <Timeline />

      <section className="mx-auto max-w-[1386px] pb-[4vw] px-[5vw] md:pb-12 md:px-[6vw] lg:pb-12 lg:pl-[107.5px] lg:pr-6">
        <p className="text-left text-xs tracking-[0.14em] text-[#9CA3AF]">
          Last updated June 2026
        </p>
      </section>
    </main>
  )
}

export default Home
