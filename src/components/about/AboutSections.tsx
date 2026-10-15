import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Counter from '@/components/ui/Counter'
import logo from '@/assets/matco-logo.png'
import { images } from '@/lib/images'
import ParallaxImg from '@/components/ui/ParallaxImg'
import { Globe2, TrendingUp, Link2, MapPinned, Target, Layers, LayoutGrid, ListChecks, Award, Check, ChevronRight, FileCheck2, Flag, Handshake, HardHat, Landmark, Leaf, Scale, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '@/lib/motion'
import { Eyebrow, Heading, Item, Reveal, Section } from '@/components/ui/Section'

const trust = [
  { n: 6, label: 'Business areas', icon: LayoutGrid },
  { n: 21, label: 'Defined business activities', icon: ListChecks },
  { n: 3, label: 'Energy value-chain segments', icon: Layers },
]

export function Banner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  return (
    <section ref={ref} className="bg-paper p-2 md:p-3">
      <div className="relative isolate flex min-h-[100svh] items-center overflow-hidden rounded-[1.75rem] text-white md:rounded-[2.25rem]">
        <motion.img style={{ y }} src="/media/about-hero.png" alt="" className="absolute inset-x-0 -top-[6%] -z-20 h-[112%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/60" />
        <motion.div className="mx-auto w-full max-w-5xl px-5 pb-96 pt-40 text-center sm:pb-72 md:px-8" variants={stagger(0.12, 0.2)} initial="hidden" animate="show">
          <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="flex justify-center">
            <ol className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="text-white">About Us</li>
            </ol>
          </motion.nav>
          <motion.h1 variants={fadeUp} className="mx-auto mt-8 max-w-4xl py-[0.1em] font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-balance">
            About Matco Energy Holdings | Vision, Mission and Values
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">
            Learn who Matco Energy Holdings is, what we stand for and how we work with the Government, regulators and global energy partners.
          </motion.p>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-3 bottom-6 grid grid-cols-1 divide-y divide-ink/10 rounded-2xl bg-white text-ink shadow-2xl shadow-black/20 sm:inset-x-6 sm:bottom-12 md:bottom-16 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:left-1/2 md:w-full md:max-w-4xl md:-translate-x-1/2 md:rounded-3xl"
        >
          {trust.map(({ n, label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-between gap-4 px-6 py-4 sm:block sm:px-8 sm:py-7">
              <dd className="font-display text-3xl font-medium tracking-[-0.04em] sm:text-5xl"><Counter to={n} /></dd>
              <dt className="flex items-center gap-2.5 text-[15px] text-charcoal/80 sm:mt-4">
                <Icon className="h-5 w-5 text-forest" strokeWidth={1.5} aria-hidden />{label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

const facts = [
  ['Legal form', 'Private company limited by shares, under the Companies Act, 1994'],
  ['Mandate', 'Holding and investment company for energy, power and mineral businesses'],
  ['Where we work', 'Bangladesh and elsewhere'],
  ['Our roles', 'Principal, agent, contractor, partner or investor'],
  ['Head office', 'Dhaka, Bangladesh'],
]

export function WhoWeAre() {
  return (
    <Section tone="light">
      <Reveal className="mx-auto max-w-4xl text-center">
        <Eyebrow>Who we are</Eyebrow>
        <Heading>One platform for Bangladesh’s energy needs.</Heading>
      </Reveal>
      <div className="mt-16 grid gap-4 lg:grid-cols-12">
        <div className="group relative lg:col-span-7">
          <ParallaxImg src={images.epc} alt="Engineers in hard hats on an energy project site" className="h-80 rounded-[1.75rem] sm:h-[30rem] lg:h-full" />
        </div>
        <Reveal className="flex flex-col gap-4 lg:col-span-5">
          <Item className="space-y-5 rounded-[1.75rem] bg-white p-8 text-[17px] leading-relaxed text-charcoal/70 md:p-10">
            <p>Matco Energy Holdings Limited is a private company limited by shares, formed under the Companies Act, 1994 of Bangladesh. We are a holding and investment company for energy, power and mineral businesses.</p>
            <p>We work in Bangladesh and elsewhere. Depending on the project, we act as principal, agent, contractor, partner or investor.</p>
            <p>Our business covers three parts of the energy chain: upstream (finding and producing oil and gas), midstream (processing, storage and LNG) and downstream (fuels, gas products and trading). We also build power and renewable energy projects and provide engineering and infrastructure services.</p>
          </Item>
          <Item className="rounded-[1.75rem] bg-forest p-8 text-white md:p-10">
            <h3 id="glance" className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">At a glance</h3>
            <dl className="mt-4 divide-y divide-white/10">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5">
                  <dt className="text-sm text-white/60">{k}</dt>
                  <dd className="text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Item>
        </Reveal>
      </div>
    </Section>
  )
}

export function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 bg-paper px-2 md:px-3">
      <div className="relative isolate mx-auto w-full max-w-[86rem] overflow-hidden rounded-[1.75rem] bg-forest px-3 py-20 text-white md:rounded-[2.25rem] md:py-[130px]">
        {/* Faint emblem watermark */}
        <motion.img
          src={logo}
          alt=""
          aria-hidden
          initial={{ opacity: 0, rotate: -8 }}
          whileInView={{ opacity: 0.07, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-24 top-1/2 -z-10 w-[28rem] -translate-y-1/2 grayscale brightness-[3] md:-right-16 md:w-[40rem]"
        />
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-matco/20 blur-3xl" aria-hidden />
        <Reveal className="mx-auto max-w-5xl text-center">
          <Eyebrow dark>Our vision</Eyebrow>
          <Item>
            <blockquote className="font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.1] tracking-[-0.035em] text-balance">
              To be a leading integrated energy company serving Bangladesh across the upstream, midstream and downstream segments.
            </blockquote>
          </Item>
          <Item>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              We want Bangladesh to have energy that is secure, affordable and cleaner. We want Matco to be a trusted partner in getting there.
            </p>
          </Item>
        </Reveal>
      </div>
    </section>
  )
}

const mission = [
  { icon: Landmark, t: 'Working with the Government and national institutions to meet Bangladesh’s energy priorities.' },
  { icon: Globe2, t: 'Bringing proven international partners, technology and capital into Bangladesh.' },
  { icon: Leaf, t: 'Operating safely, protecting the environment and investing in communities.' },
  { icon: TrendingUp, t: 'Building a business that creates long-term value for partners, investors and the country.' },
]

export function Mission() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Our mission</Eyebrow>
            <Heading className="!text-[clamp(2rem,3.5vw,3.25rem)]">To secure, trade and deliver energy responsibly, in partnership with global principals.</Heading>
          </div>
        </Reveal>
        <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:col-span-7" s={0.1}>
          {mission.map(({ icon: Icon, t: m }, i) => (
            <motion.li key={m} variants={fadeUp} whileHover={{ y: -6 }} className="flex min-h-56 flex-col rounded-[1.5rem] bg-white p-7 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/10">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white"><Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden /></span>
                <span className="font-display text-sm text-charcoal/35">0{i + 1}</span>
              </div>
              <span className="mt-auto pt-10 text-[17px] leading-relaxed text-ink">{m}</span>
            </motion.li>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

const values = [
  { icon: ShieldCheck, t: 'Safety first', d: 'No project is worth risking people or the environment. We plan for safety before we plan for profit.' },
  { icon: Handshake, t: 'Integrity', d: 'We act honestly, follow the law and keep our word. We bid and trade openly and fairly.' },
  { icon: Link2, t: 'Partnership', d: 'We succeed when our partners succeed. We listen, share information and work as one team.' },
  { icon: ListChecks, t: 'Compliance', d: 'We obtain every licence and approval before operations begin, and we follow every rule that applies.' },
  { icon: MapPinned, t: 'Commitment to Bangladesh', d: 'We build for the long term. We support local skills, local suppliers and local communities.' },
  { icon: Target, t: 'Excellence', d: 'We prepare carefully, deliver on time and keep improving.' },
]

export function Values() {
  return (
    <Section tone="white">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Our values</Eyebrow>
        <Heading>What guides us.</Heading>
      </Reveal>
      <Reveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" s={0.08}>
        {values.map(({ icon: Icon, t, d }) => (
          <motion.article key={t} variants={fadeUp} whileHover={{ y: -6 }} className="group flex min-h-72 flex-col rounded-[1.5rem] bg-forest/[0.06] p-8 transition-colors duration-500 hover:bg-forest hover:text-white">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-forest">
              <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </span>
            <h3 className="mt-auto pt-12 font-display text-2xl font-medium tracking-tight">{t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65 transition-colors group-hover:text-white/75">{d}</p>
          </motion.article>
        ))}
      </Reveal>
    </Section>
  )
}

const steps = [
  { icon: Users, t: 'Partner-led', d: 'We combine global expertise with local knowledge.' },
  { icon: Landmark, t: 'Government aligned', d: 'We work in line with national energy policy.' },
  { icon: ShieldCheck, t: 'Fully licensed', d: 'We hold the approvals each activity requires.' },
  { icon: Leaf, t: 'Responsible', d: 'We put safety, environment and communities first.' },
]

export function HowWeWork() {
  return (
    <section className="bg-white px-2 md:px-3">
      <div className="rounded-[1.75rem] bg-gradient-to-b from-[#0B3D2E] to-[#072A20] px-3 py-20 text-white md:rounded-[2.25rem] md:py-[130px]">
        <div className="mx-auto max-w-[86rem] px-3">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow dark>How we work</Eyebrow>
            <Heading dark>Partner-led. Government aligned. Fully licensed. Responsible.</Heading>
          </Reveal>
          <Reveal as="ul" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" s={0.15}>
            {steps.map(({ icon: Icon, t, d }, i) => (
              <motion.li key={t} variants={fadeUp} whileHover={{ y: -6 }} className="flex min-h-72 flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-white/25 hover:bg-white/10">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10"><Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden /></span>
                  <p className="text-xs font-medium tracking-[0.2em] text-[#7FD3A8]">STEP 0{i + 1}</p>
                </div>
                <h3 className="mt-auto pt-12 font-display text-2xl font-medium tracking-tight">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{d}</p>
              </motion.li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const gov = [
  { a: 'Petrobangla', r: 'Production sharing, gas and exploration', img: images.rig, alt: 'Offshore gas exploration platform' },
  { a: 'Bangladesh Energy Regulatory Commission', r: 'Energy business licences', img: images.power, alt: 'Solar power plant' },
  { a: 'Department of Explosives', r: 'Storage, LPG, cylinders and fuel outlets', img: images.midstream, alt: 'Fuel storage and pipework' },
  { a: 'Department of Environment', r: 'Environmental clearance for projects', img: images.solarHill, alt: 'Green landscape with solar panels' },
]

export function Governance() {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('article')
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 600) + 16), behavior: 'smooth' })
  }
  return (
    <section id="governance" className="scroll-mt-20 overflow-hidden bg-white py-20 md:py-[130px]">
      <div className="mx-auto max-w-[86rem] px-3">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Governance and licences</Eyebrow>
            <Heading>Licensed and accountable.</Heading>
          </div>
          <Item className="flex flex-col gap-8 lg:items-end">
            <p className="max-w-md text-[17px] leading-relaxed text-charcoal/70">We work with Bangladesh's energy authorities and regulators, and we hold the licences and approvals required for our activities.</p>
            <div className="flex gap-2">
              {([-1, 1] as const).map((d) => (
                <button key={d} onClick={() => scroll(d)} aria-label={d < 0 ? 'Previous authority' : 'Next authority'}
                  className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:bg-forest hover:text-white">
                  <ChevronRight className={`h-5 w-5 ${d < 0 ? 'rotate-180' : ''}`} aria-hidden />
                </button>
              ))}
            </div>
          </Item>
        </Reveal>
      </div>

      <div
        ref={track}
        className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-3 pb-4 [scrollbar-width:none] xl:px-[max(0.75rem,calc((100vw_-_86rem)/2_+_0.75rem))] scroll-px-3 xl:scroll-px-[max(0.75rem,calc((100vw_-_86rem)/2_+_0.75rem))] [&::-webkit-scrollbar]:hidden"
      >
        {gov.map((g, i) => (
          <motion.article
            key={g.a}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/5] w-[85vw] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-ink sm:aspect-[4/3] sm:w-[70vw] lg:aspect-[16/9] lg:w-[min(58rem,70vw)]"
          >
            <img src={g.img} alt={g.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md md:left-7 md:top-7">0{i + 1}</span>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-6 rounded-2xl border border-white/15 bg-ink/35 p-5 text-white backdrop-blur-xl md:inset-x-auto md:bottom-7 md:left-7 md:max-w-md md:p-6">
              <div>
                <h3 className="font-display text-xl font-medium leading-snug tracking-tight md:text-2xl">{g.a}</h3>
                <p className="mt-2 flex items-center gap-2 text-[15px] text-white/80"><ShieldCheck className="h-4 w-4 shrink-0 text-[#7FD3A8]" aria-hidden />{g.r}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-forest transition-transform duration-500 group-hover:rotate-12">
                <FileCheck2 className="h-4 w-4" aria-hidden />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
