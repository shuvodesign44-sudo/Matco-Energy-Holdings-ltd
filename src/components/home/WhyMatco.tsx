import { motion } from 'framer-motion'
import { Globe2, Leaf, Link2, ShieldCheck } from 'lucide-react'
import { fadeUp } from '@/lib/motion'
import { images } from '@/lib/images'
import ParallaxImg from '@/components/ui/ParallaxImg'
import { Eyebrow, Heading, Reveal, Section } from '@/components/ui/Section'

const cards = [
  { icon: Link2, title: 'One integrated value chain', body: 'From exploration to the end customer, our businesses connect across upstream, midstream, downstream, power and renewables.' },
  { icon: Globe2, title: 'Global partnerships', body: 'We work with international energy companies, investors and suppliers to bring proven technology and capital to Bangladesh.' },
  { icon: ShieldCheck, title: 'Local compliance', body: 'We operate in line with national energy policy and hold the licences and approvals each activity requires.' },
  { icon: Leaf, title: 'Responsible growth', body: 'Safety, environmental care and community benefit guide how we plan, build and operate.' },
]

export default function WhyMatco() {
  return (
    <Section id="why-matco">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Why Matco</Eyebrow>
              <Heading>Four reasons partners choose Matco.</Heading>
            </Reveal>
            <ParallaxImg src={images.solarHill} alt="Solar farm on a green hillside" className="mt-10 hidden aspect-[4/3] rounded-[1.75rem] lg:block" />
          </div>
        </div>
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:col-span-7" s={0.12}>
          {cards.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`group flex min-h-80 flex-col rounded-[1.75rem] border border-ink/8 bg-white p-7 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/10 md:p-8 ${i % 2 === 1 ? 'sm:translate-y-12' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-forest/8 text-forest transition-colors duration-500 group-hover:bg-matco group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <span className="font-display text-sm text-charcoal/35">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-12 font-display text-2xl font-medium leading-tight tracking-tight text-ink">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">{body}</p>
            </motion.article>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
