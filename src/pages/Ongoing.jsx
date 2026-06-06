const ongoingProjects = [
  {
    name: 'Personal Website',
    url: 'https://github.com/AmberJiang/personal-website',
    intro:
      'A minimal portfolio site — refining layout, timeline, and project pages as an ongoing side build.',
    focus: [
      'Responsive layout tuned for desktop, tablet, and mobile',
      'Career timeline with scroll-driven animations',
      'Dedicated pages for ongoing and shipped projects',
    ],
    techStack: 'React, Tailwind CSS, Vite',
  },
  {
    name: 'Repo Reader',
    intro:
      'A CLI mini-program for reading and exploring Git repositories — browse structure, files, and history without leaving the terminal.',
    focus: [
      'Navigate repo trees and preview file contents from the shell',
      'Jump across branches, commits, and README at a glance',
      'Fast, script-friendly workflow for day-to-day code reading',
    ],
    techStack: 'CLI, Git',
  },
]

function Ongoing() {
  return (
    <main className="flex-1 bg-white text-left">
      <section className="mx-auto max-w-[1386px] px-[5vw] py-[6vw] text-left md:px-[6vw] md:py-[8vw] lg:py-24 lg:pl-[120px] lg:pr-6">
        <div className="flex flex-col gap-[8vw] md:gap-16">
          {ongoingProjects.map((project) => (
            <article key={project.name} className="border-t border-[#E5E7EB] pt-6 text-left md:pt-8">
              <div className="flex flex-wrap items-center gap-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover link-hover--heading font-serif text-base font-semibold md:text-lg lg:text-xl"
                  >
                    {project.name}
                  </a>
                ) : (
                  <h2 className="font-serif text-base font-semibold md:text-lg lg:text-xl">
                    {project.name}
                  </h2>
                )}
                <span className="rounded-full border border-[#6ba3d6] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#6ba3d6] md:text-xs">
                  In Progress
                </span>
              </div>

              <p className="mt-2 max-w-[640px] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:mt-3 md:text-sm">
                {project.intro}
              </p>

              <div className="mt-4 max-w-[640px] md:mt-5">
                <h3 className="font-serif text-sm font-semibold tracking-tight text-[#111827] md:text-base">
                  Current Focus
                </h3>
                <ul className="mt-2 space-y-1.5 md:mt-3">
                  {project.focus.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-xs leading-relaxed tracking-[0.04em] text-[#6B7280] md:text-sm"
                    >
                      <span className="shrink-0 text-[#9CA3AF]" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.techStack && (
                <p className="mt-4 text-[11px] leading-relaxed tracking-[0.03em] text-[#9CA3AF] md:mt-5 md:text-xs">
                  <span className="font-semibold uppercase tracking-[0.08em]">Tech Stack</span>
                  {' · '}
                  {project.techStack}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Ongoing
