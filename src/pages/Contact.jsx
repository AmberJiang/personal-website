import { Github, Linkedin, Mail } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'nanyanjiang@qq.com',
    href: 'mailto:nanyanjiang@qq.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nanyanjiang',
    href: 'https://www.linkedin.com/in/nanyanjiang/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/AmberJiang',
    href: 'https://github.com/AmberJiang',
    icon: Github,
    external: true,
  },
]

function Contact() {
  return (
    <main className="flex-1 bg-white text-left">
      <section className="mx-auto max-w-[1386px] px-[5vw] py-[6vw] md:px-[6vw] md:py-[8vw] lg:py-24 lg:pl-[120px] lg:pr-6">
        <h2 className="font-serif text-lg font-semibold tracking-tight text-[#111827] md:text-xl lg:text-2xl">
          Contact
        </h2>
        <p className="mt-[2vw] max-w-[640px] text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:mt-4 md:text-sm">
          Feel free to reach out for collaboration, opportunities, or just a friendly hello.
        </p>

        <ul className="mt-[6vw] flex max-w-[640px] flex-col gap-4 md:mt-12 md:gap-5">
          {contacts.map((contact) => {
            const Icon = contact.icon

            return (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-[#FCFCFA] px-5 py-4 transition-colors duration-200 hover:border-[#6ba3d6] md:px-6 md:py-5"
                >
                  <span className="link-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF] md:text-xs">
                      {contact.label}
                    </span>
                    <span className="link-hover link-hover--heading mt-1 block truncate text-sm font-medium md:text-base">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Contact
