import { useRef } from 'react'
import {
  Activity,
  Briefcase,
  GraduationCap,
  Layers,
  Palette,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

const TYPE_ICONS = {
  education: GraduationCap,
  work: Briefcase,
}

const HIGHLIGHT_ICONS = {
  'ui-ux': Palette,
  monitoring: Activity,
  architecture: Zap,
  collaboration: Users,
  ai: Sparkles,
  fullstack: Layers,
}

const timelineItems = [
  {
    type: 'work',
    title: 'SAP, Shanghai',
    subtitle: 'Software Developer',
    start: 'May 2021',
    end: 'Oct 2025',
    highlights: [
      {
        type: 'ui-ux',
        label: 'UI/UX Owner',
        description: 'Bridge between R&D and UI/UX for standardized delivery.',
        bullets: [
          'Standardized and shipped dozens of core features',
          'Aligned engineering with design standards',
        ],
      },
      {
        type: 'monitoring',
        label: 'Production Ops',
        description: 'Monitoring and observability ownership.',
        bullets: [
          'Grafana dashboards and alerts',
          'AWS CloudWatch for production monitoring',
        ],
      },
      {
        type: 'architecture',
        label: 'Async Architecture',
        description: 'Kafka messaging and Redis caching for payroll performance.',
        bullets: [
          'Kafka decoupled payroll calc from financial posting',
          'Redis cached tax rates and social security rules',
          '40% reduction in core API latency',
        ],
      },
      {
        type: 'collaboration',
        label: 'Collaboration',
        description: 'Cross-functional teamwork.',
        bullets: [
          'Strong communication across teams',
          'Effective in fast-paced R&D',
        ],
      },
      {
        type: 'ai',
        label: 'AI Engineering',
        description: 'AI tooling for development and operations.',
        bullets: [
          'Multi-Agent OnCall: response time hours to minutes',
          'Auto UI code generation',
          'AI batch fixes for accessibility',
        ],
      },
    ],
    projects: [
      {
        name: 'Global Cloud Payroll',
        description:
          'A cloud-native, payroll engine delivering compliant, localization logic, and AI exploratory features in a fast-paced RD environment handling sensitive HR and financial data.',
        techStack:
          'Java, SpringBoot, JavaScript, Kafka, Redis, Amalthea, Grafana, Distributed Transactions, Multi-Tenancy',
      },
    ],
  },
  {
    type: 'work',
    title: 'Verisk Analytics, U.S.',
    subtitle: 'Contract Full-Stack Developer',
    start: 'Aug 2019',
    end: 'Jan 2021',
    highlights: [
      {
        type: 'fullstack',
        label: 'Full-Stack Development',
        description: '0-to-1 cloud-native fintech platform.',
        bullets: [
          'Built platform from scratch, full-stack',
          'AWS and Elasticsearch at scale',
        ],
      },
    ],
    projects: [
      {
        name: 'Loan Verifier',
        description:
          'A cloud-based financial workflow platform for real-time insurance verification services.',
        techStack: 'C#, ASP.NET Core, Angular, AWS Lambda, DynamoDB, Elasticsearch',
      },
    ],
  },
  {
    type: 'education',
    title: 'University of Massachusetts Boston',
    subtitle: "Bachelor's degree in Computer Science",
    start: 'Sep 2014',
    end: 'Dec 2018',
  },
]

function HighlightRow({ highlight }) {
  const Icon = HIGHLIGHT_ICONS[highlight.type]

  return (
    <div className="highlight-row flex flex-col gap-2 border-t border-[#F3F4F6] pt-3 first:border-t-0 first:pt-0 md:flex-row md:gap-8 md:pt-3.5 md:first:pt-0">
      <div className="flex min-w-0 gap-2.5 md:w-[44%] md:shrink-0 lg:w-[40%]">
        <div
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1A1A1A] bg-white md:h-7 md:w-7"
          aria-hidden="true"
        >
          <Icon className="h-3 w-3 text-[#1A1A1A] md:h-3.5 md:w-3.5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-[0.02em] text-[#374151] md:text-sm">
            {highlight.label}
          </p>
          <p className="mt-0.5 text-[11px] leading-relaxed tracking-[0.03em] text-[#9CA3AF] md:mt-1 md:text-xs">
            {highlight.description}
          </p>
        </div>
      </div>

      <ul className="min-w-0 list-none space-y-1 md:flex-1 md:pt-0.5">
        {highlight.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2 text-[11px] leading-relaxed tracking-[0.03em] text-[#6B7280] md:text-xs"
          >
            <span className="shrink-0 text-[#9CA3AF]" aria-hidden="true">
              ·
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TimelineItem({ item, isLast, index }) {
  const Icon = TYPE_ICONS[item.type]
  const itemRef = useRef(null)
  const isVisible = useInView(itemRef, {
    threshold: 0.12,
    rootMargin: '0px 0px -4% 0px',
  })

  return (
    <div
      ref={itemRef}
      className={`timeline-item relative flex gap-5 md:gap-6${isVisible ? ' timeline-item--visible' : ''}`}
      style={isVisible ? { transitionDelay: `${index * 80}ms` } : undefined}
    >
      <div className="flex w-9 shrink-0 flex-col items-center md:w-10">
        <div
          className="timeline-icon relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#1A1A1A] bg-white md:h-10 md:w-10"
          aria-hidden="true"
        >
          <Icon className="h-4 w-4 text-[#1A1A1A] md:h-[18px] md:w-[18px]" strokeWidth={1.75} />
        </div>
        {!isLast && (
          <div className="timeline-connector mt-1 w-px flex-1 bg-[#D1D5DB]" aria-hidden="true" />
        )}
      </div>

      <div className={`timeline-content min-w-0 flex-1 pb-10 md:pb-12 ${isLast ? 'pb-0' : ''}`}>
        <time
          dateTime={`${item.start}/${item.end}`}
          className="text-[11px] uppercase tracking-[0.12em] text-[#9CA3AF] md:text-xs"
        >
          {item.start} — {item.end}
        </time>
        <h3 className="mt-1.5 font-serif text-sm font-semibold tracking-tight text-[#111827] md:mt-2 md:text-base">
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed tracking-[0.04em] text-[#374151] md:text-sm">
          {item.subtitle}
        </p>

        {item.highlights?.length > 0 && (
          <div className="mt-4 space-y-0 md:mt-5">
            {item.highlights.map((highlight) => (
              <HighlightRow key={highlight.label} highlight={highlight} />
            ))}
          </div>
        )}

        {item.projects?.map((project) => (
          <div
            key={project.name}
            className="mt-4 border-l border-[#E5E7EB] pl-3 md:mt-5 md:pl-4"
          >
            <h4 className="text-[11px] font-medium italic tracking-[0.02em] text-[#6B7280] md:text-xs">
              {project.name}
            </h4>
            <p className="mt-1 text-[10px] leading-relaxed tracking-[0.03em] text-[#9CA3AF] md:mt-1.5 md:text-[11px]">
              {project.description}
            </p>
            <p className="mt-1.5 text-[10px] leading-relaxed tracking-[0.03em] text-[#9CA3AF] md:text-[11px]">
              <span className="font-semibold uppercase tracking-[0.08em]">Tech Stack</span>
              {' · '}
              {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Timeline() {
  const timelineRef = useRef(null)
  const trackVisible = useInView(timelineRef, { threshold: 0.05, rootMargin: '0px 0px -2% 0px' })

  return (
    <section className="mx-auto max-w-[1386px] px-[5vw] pb-[6vw] md:px-[6vw] md:pb-12 lg:pl-[120px] lg:pr-6 lg:pb-16">
      <div ref={timelineRef} className="timeline relative">
        <div
          className={`timeline-track pointer-events-none absolute left-[18px] top-5 bottom-5 w-px bg-[#E5E7EB] md:left-5${trackVisible ? ' timeline-track--visible' : ''}`}
          aria-hidden="true"
        />
        <div className="relative flex flex-col">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={`${item.title}-${item.end}`}
              item={item}
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
