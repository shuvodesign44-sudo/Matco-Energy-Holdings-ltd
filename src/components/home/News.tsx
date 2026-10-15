import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '@/lib/motion'
import { images } from '@/lib/images'
import { Eyebrow, Heading, Reveal, Section } from '@/components/ui/Section'

const items = [
  { tag: 'Company', date: 'Coming soon', title: 'News and announcements from Matco Energy Holdings will appear here.', img: images.crane },
  { tag: 'Partnerships', date: 'Coming soon', title: 'Partnership updates will be published as they are confirmed.', img: images.midstream },
  { tag: 'Projects', date: 'Coming soon', title: 'Project milestones will be shared here.', img: images.power },
]

export default function News() {
  return (
    <Section id="news" tone="white">
      <Reveal>
        <Eyebrow>Latest news</Eyebrow>
        <Heading>News and updates.</Heading>
      </Reveal>
      <Reveal className="mt-14 grid gap-6 md:grid-cols-3" s={0.1}>
        {items.map((n) => (
          <motion.a key={n.tag} href="#news" variants={fadeUp} className="group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink">
              <img src={n.img} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-forest backdrop-blur">{n.tag}</span>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-charcoal/50">{n.date}</p>
            <h3 className="mt-2 font-display text-xl font-medium leading-snug tracking-tight text-ink">{n.title}</h3>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-matco">Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" /></span>
          </motion.a>
        ))}
      </Reveal>
    </Section>
  )
}
