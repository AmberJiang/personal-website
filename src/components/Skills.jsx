import { useRef } from 'react'
import { Cloud, Code2, Database, Heart, Palette, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

const CATEGORY_ICONS = {
  languages: Code2,
  data: Database,
  cloud: Cloud,
  product: Palette,
  ai: Sparkles,
  hobbies: Heart,
}

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages & Frameworks',
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'TypeScript',
      'React',
      'C#',
      'ASP.NET Core',
      'Angular',
    ],
  },
  {
    id: 'data',
    label: 'Data & Architecture',
    skills: [
      'Kafka',
      'Redis',
      'DynamoDB',
      'Elasticsearch',
      'Distributed Transactions',
      'Multi-Tenancy',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Ops',
    skills: ['AWS Lambda', 'CloudWatch', 'Grafana', 'Monitoring & Alerting'],
  },
  {
    id: 'product',
    label: 'Product & Design',
    skills: ['UI/UX', 'Responsive Design', 'Accessibility', 'Design Systems'],
  },
  {
    id: 'ai',
    label: 'AI Engineering',
    skills: ['Multi-Agent Systems', 'LLM Tooling', 'Auto Code Generation', 'AI Ops'],
  },
  {
    id: 'hobbies',
    label: 'Hobbies',
    skills: ['Piano', 'Swimming'],
  },
]

function SkillCategory({ category, index, isVisible }) {
  const Icon = CATEGORY_ICONS[category.id]

  return (
    <div
      className={`skills-category flex flex-col gap-3 border-t border-[#F3F4F6] pt-6 pb-8 first:border-t-0 first:pt-0 md:gap-3.5 md:pt-8 md:pb-10 md:first:pt-0${isVisible ? ' skills-category--visible' : ''}`}
      style={isVisible ? { transitionDelay: `${index * 70}ms` } : undefined}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1A1A1A] bg-white md:h-7 md:w-7"
          aria-hidden="true"
        >
          <Icon className="h-3 w-3 text-[#1A1A1A] md:h-3.5 md:w-3.5" strokeWidth={1.75} />
        </div>
        <h3 className="text-xs font-medium tracking-[0.02em] text-[#374151] md:text-sm">
          {category.label}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2 pl-0 md:pl-9">
        {category.skills.map((skill) => (
          <li key={skill}>
            <span className="inline-flex rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[11px] tracking-[0.03em] text-[#6B7280] md:text-xs">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  const sectionRef = useRef(null)
  const isVisible = useInView(sectionRef, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })

  return (
    <section className="mx-auto max-w-[1386px] px-[5vw] pb-[6vw] md:px-[6vw] md:pb-12 lg:pl-[120px] lg:pr-6 lg:pb-16">
      <div ref={sectionRef}>
        <div className={`skills-grid space-y-0${isVisible ? ' skills-grid--visible' : ''}`}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
