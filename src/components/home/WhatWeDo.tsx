import { motion } from 'framer-motion'
import { ArrowUpRight, Factory, Flame, Fuel, HardHat, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeUp } from '@/lib/motion'
import { images } from '@/lib/images'
import { Eyebrow, Heading, Item, Reveal, Section } from '@/components/ui/Section'

const biz = [
  { icon: Flame, title: 'Upstream', body: 'Exploration and production of oil and gas with experienced partners.', img: images.upstream, alt: 'Offshore oil and gas platform' },
  { icon: Factory, title: 'Midstream', body: 'Pipelines, storage, LNG and gas infrastructure that move energy safely.', img: images.midstream, alt: 'Gas pipeline infrastructure' },
  { icon: Fuel, title: 'Downstream & Trading', body: 'Fuel supply, distribution and trading to reach the end customer.', img: images.downstream, alt: 'Fuel tanker truck' },
  { icon: Zap, title: 'Power & Renewables', body: 'Power generation and renewable energy, including solar.', img: images.power, alt: 'Solar farm at sunrise' },
  { icon: HardHat, title: 'EPC & Infrastructure', body: 'Engineering, procurement and construction for energy projects.', img: images.epc, alt: 'Engineers on a construction site' },
]

export default function WhatWeDo() {
  return (
    <Section id="businesses" tone="white">
      <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Eyebrow>What we do</Eyebrow>
          <Heading className="max-w-2xl">Five areas. One energy platform.</Heading>
        </div>
        <Item><Button to="#businesses" variant="outline-dark">See all businesses</Button></Item>
      </Reveal>

      <Reveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6" s={0.1}>
        {biz.map(({ icon: Icon, title, body, img, alt }, i) => (
          <motion.a
            key={title}
            href="#businesses"
            variants={fadeUp}
            className={`group relative isolate flex min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white md:p-7 ${i < 2 ? 'lg:col-span-3 lg:min-h-[32rem]' : 'lg:col-span-2'} ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
          >
            <img src={img} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/10 transition-colors duration-500 group-hover:from-forest/95" />
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden /> 0{i + 1}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
            <div className="mt-auto">
              <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">{title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">{body}</p>
            </div>
          </motion.a>
        ))}
      </Reveal>
    </Section>
  )
}
