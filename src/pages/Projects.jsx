const projects = [
  {
    name: "What's For Lunch",
    url: 'https://github.com/AmberJiang/what-s-for-lunch',
    liveUrl: 'https://amberjiang.github.io/what-s-for-lunch/',
    intro:
      'A smart lunch picker that solves the daily "what to eat" problem — combining live location data with curated cafeteria options.',
    sections: [
      {
        title: 'Less Decision Fatigue',
        body: 'Turns an open-ended daily choice into one tap — so you spend less mental energy deciding and more time actually eating.',
      },
      {
        title: 'Random Pick',
        body: 'Rolls through candidates with animated scrolling and confetti, then saves your five most recent picks to history.',
      },
      {
        title: 'Map Navigation',
        body: 'One tap opens directions in Amap, Baidu Maps, or Tencent Maps — with a native-style bottom sheet on mobile.',
      },
    ],
  },
]

function Projects() {
  return (
    <main className="flex-1 bg-white text-left">
      <section className="mx-auto max-w-[1386px] px-[5vw] py-[6vw] text-left md:px-[6vw] md:py-[8vw] lg:py-24 lg:pl-[120px] lg:pr-6">
        <p className="max-w-[640px] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:text-sm">
          Some interesting personal projects I built for fun.
        </p>

        <div className="mt-[6vw] flex flex-col gap-[8vw] md:mt-12 md:gap-16 lg:mt-16">
          {projects.map((project) => (
            <article key={project.url} className="border-t border-[#E5E7EB] pt-6 text-left md:pt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="link-hover link-hover--heading font-serif text-base font-semibold md:text-lg lg:text-xl"
              >
                {project.name}
              </a>
              <p className="mt-2 max-w-[640px] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:mt-3 md:text-sm">
                {project.intro}
              </p>

              <div className="mt-4 flex flex-col gap-6 md:mt-5 md:flex-row md:items-start md:gap-10 lg:gap-12">
                <div className="aspect-[9/16] w-full shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FCFCFA] sm:max-w-[360px] md:w-[52%] md:max-w-none lg:w-[560px] xl:w-[640px]">
                  <iframe
                    src={project.liveUrl}
                    title={project.name}
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col items-start gap-4 text-left md:gap-5">
                  {project.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-serif text-sm font-semibold tracking-tight text-[#111827] md:text-base">
                        {section.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed tracking-[0.04em] text-[#6B7280] md:mt-2 md:text-sm">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
