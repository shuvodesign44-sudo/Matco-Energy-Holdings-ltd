import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'
import { fadeUp } from '@/lib/motion'
import { images } from '@/lib/images'
import { Eyebrow, Reveal, Section } from '@/components/ui/Section'

const stats = [
  { n: 6, label: 'Business areas' },
  { n: 21, label: 'Defined business activities' },
  { n: 3, label: 'Energy value-chain segments' },
]

const Card = ({ n, label }: { n: number; label: string }) => (
  <motion.div variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    className="flex min-h-64 flex-col rounded-2xl bg-forest/[0.07] p-7 md:min-h-80">
    <p className="font-display text-5xl font-medium tracking-[-0.04em] text-ink md:text-6xl"><Counter to={n} /></p>
    <p className="mt-2 text-[15px] text-charcoal/75">{label}</p>
    <span className="mt-auto h-1 w-10 rounded-full bg-matco" aria-hidden />
  </motion.div>
)

export default function Glance() {
  return (
    <Section tone="white">
      <Reveal className="text-center">
        <Eyebrow>Matco at a glance</Eyebrow>
        <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.035em] text-ink text-balance">
          Integrated energy
          <span className="mx-3 inline-flex translate-y-1 align-middle" aria-hidden>
            {[images.power, images.upstream].map((src, i) => (
              <img key={src} src={src} alt="" className={`h-11 w-11 rounded-full object-cover ring-4 ring-white md:h-14 md:w-14 ${i ? '-ml-4' : ''}`} />
            ))}
          </span>
          for Bangladesh.
        </motion.h2>
      </Reveal>

      <Reveal className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center" s={0.1}>
        <Card {...stats[0]} />
        <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl bg-ink p-7 text-white md:min-h-[22rem]">
          <img src={images.dhaka} alt="Aerial view of Dhaka, Bangladesh" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <div className="relative">
            <p className="font-display text-3xl font-medium leading-none tracking-[-0.03em] md:text-4xl">Bangladesh<span className="block text-[#7FD3A8]">and beyond</span></p>
            <p className="mt-3 text-[15px] text-white/80">Geography</p>
          </div>
        </motion.div>
        <Card {...stats[1]} />
        <Card {...stats[2]} />
      </Reveal>
    </Section>
  )
}
