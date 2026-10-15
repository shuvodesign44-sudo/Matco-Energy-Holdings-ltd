import { motion, useScroll, useTransform } from 'framer-motion'
import { Play } from 'lucide-react'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { Eyebrow, Heading, Item, Reveal, Section } from '@/components/ui/Section'

const img = 'https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000'

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1])
  return (
    <Section id="who-we-are" tone="light">
      <Reveal className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4"><Eyebrow>Who we are</Eyebrow></div>
        <div className="lg:col-span-8">
          <Heading>An energy company built for Bangladesh's next chapter.</Heading>
          <Item className="mt-12 grid gap-8 border-t border-ink/10 pt-10 text-[17px] leading-relaxed text-charcoal/70 md:grid-cols-2">
            <p>Matco Energy Holdings Limited is a Bangladesh-based integrated energy company. We work across upstream, midstream, downstream, power and renewables, bringing the full energy value chain together under one platform.</p>
            <p>We partner with global energy companies, investors and suppliers to deliver projects that meet Bangladesh's growing energy needs, working in line with national policy and with every required licence in place.</p>
          </Item>
          <Item className="mt-10"><Button to="/about" variant="dark">Learn more about Matco</Button></Item>
        </div>
      </Reveal>
      <motion.div ref={ref} style={{ scale }} className="group relative mt-20 aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink sm:aspect-video md:mt-28">
        <motion.img style={{ y }} src={img} alt="Industrial energy facility illuminated at night" loading="lazy" className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover opacity-80 transition-transform duration-[1.4s] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-tr from-forest/85 via-forest/20 to-transparent" />
        <button className="absolute inset-0 grid place-items-center" aria-label="Play brand film (coming soon)">
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40" aria-hidden />
            <Play className="relative ml-1 h-6 w-6" fill="currentColor" />
          </span>
        </button>
        <p className="absolute bottom-6 left-6 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md md:bottom-8 md:left-8">Brand film — coming soon</p>
      </motion.div>
    </Section>
  )
}
