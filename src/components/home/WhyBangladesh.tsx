import { images } from '@/lib/images'
import ParallaxImg from '@/components/ui/ParallaxImg'
import { Eyebrow, Heading, Item, Reveal, Section } from '@/components/ui/Section'

// NOTE: Replace values/sources with the exact figures from the approved content document.
const tiles = [
  { v: '~1,000', u: 'MMCFD', label: 'Gas demand-supply gap', src: 'Petrobangla' },
  { v: '2', u: 'FSRUs', label: 'Floating LNG import terminals in operation', src: 'Petrobangla / RPGCL' },
  { v: '40%', u: '', label: 'Renewable electricity target by 2041', src: 'Mujib Climate Prosperity Plan' },
  { v: '2M+', u: 'tonnes', label: 'Annual urea fertiliser demand', src: 'Ministry of Industries' },
  { v: '170M+', u: '', label: 'People served by the national energy system', src: 'BBS' },
  { v: '6%+', u: '', label: 'Average annual GDP growth, past decade', src: 'World Bank' },
]

export default function WhyBangladesh() {
  return (
    <Section id="bangladesh" tone="white">
      <Reveal className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>Why Bangladesh, why now</Eyebrow>
          <Heading>A growing economy with growing energy needs.</Heading>
        </div>
        <Item className="self-end text-[17px] leading-relaxed text-charcoal/70 lg:col-span-5">
          <p>Bangladesh's demand for gas, fuel and power is rising faster than domestic supply. Closing that gap needs new exploration, more import and storage capacity, cleaner power and reliable infrastructure — delivered with experienced partners.</p>
        </Item>
      </Reveal>
      <div className="mt-16 grid gap-4 lg:grid-cols-12">
        <div className="group relative lg:col-span-5">
          <ParallaxImg src={images.dhaka} alt="Aerial view of a river running through Dhaka" className="h-80 rounded-[1.75rem] sm:h-[28rem] lg:h-full" />
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-ink/70 to-transparent" />
          <p className="absolute bottom-6 left-6 font-display text-2xl font-medium text-white">Bangladesh</p>
        </div>
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:col-span-7" s={0.08}>
          {tiles.map((t) => (
            <Item key={t.label} className="flex min-h-56 flex-col rounded-[1.5rem] bg-paper p-7 transition-colors duration-500 hover:bg-forest/[0.06]">
              <p className="font-display text-5xl font-medium tracking-[-0.05em] text-ink md:text-6xl">
                {t.v}{t.u && <span className="ml-2 text-base font-medium tracking-tight text-matco">{t.u}</span>}
              </p>
              <p className="mt-4 max-w-xs text-[15px] leading-snug text-charcoal/75">{t.label}</p>
              <p className="mt-auto pt-6 text-[11px] uppercase tracking-[0.18em] text-charcoal/45">Source: {t.src}</p>
            </Item>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
