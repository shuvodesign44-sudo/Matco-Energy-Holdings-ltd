import { motion } from 'framer-motion'
import { Building2, Landmark, Package } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeUp } from '@/lib/motion'
import { images } from '@/lib/images'
import ParallaxImg from '@/components/ui/ParallaxImg'
import { Eyebrow, Heading, Item, Reveal } from '@/components/ui/Section'

const aud = [
  { icon: Building2, title: 'Global energy companies', body: 'Bring your technology and experience to Bangladesh with a local partner across the value chain.' },
  { icon: Landmark, title: 'Investors', body: 'Access energy projects in Bangladesh through a licensed, compliant and integrated platform.' },
  { icon: Package, title: 'Suppliers', body: 'Supply equipment, services and materials to our projects and operations.' },
]

export default function PartnerCta() {
  return (
    <section id="partner" className="scroll-mt-20 bg-white px-2 md:px-3">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest px-3 py-20 text-white md:rounded-[2.25rem] md:py-[130px]">
        <ParallaxImg src={images.rig} alt="" className="!absolute inset-0 -z-20 opacity-30" amount={10} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest via-forest/90 to-ink/80" />
        <div className="mx-auto max-w-[86rem] px-3">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow dark>Partner with us</Eyebrow>
              <Heading dark>Let's build Bangladesh's energy future together.</Heading>
            </div>
            <Item className="lg:justify-self-end"><Button to="#contact" variant="light">Start a conversation</Button></Item>
          </Reveal>
          <Reveal className="mt-16 grid gap-4 md:grid-cols-3" s={0.12}>
            {aud.map(({ icon: Icon, title, body }) => (
              <motion.article key={title} variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-[1.5rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-xl transition-colors duration-500 hover:bg-white hover:text-ink">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70 transition-colors group-hover:text-charcoal/70">{body}</p>
              </motion.article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
