import { motion, useScroll, useTransform } from 'framer-motion'
import { Factory, Flame, Fuel, Zap } from 'lucide-react'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { ease, fadeUp, stagger } from '@/lib/motion'

const segments = [
  { icon: Flame, label: 'Upstream' },
  { icon: Factory, label: 'Midstream' },
  { icon: Fuel, label: 'Downstream' },
  { icon: Zap, label: 'Power & Renewables' },
]

const words = ['Powering', "Bangladesh's", 'energy', 'future.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-svh items-center overflow-hidden bg-paper p-2 text-white md:p-3">
      <div className="absolute inset-2 -z-10 overflow-hidden rounded-[1.75rem] md:inset-3 md:rounded-[2.25rem]" aria-hidden>
        {/* Static GPU layer: no transform animation on the video, so playback stays stable */}
        <video
          className="absolute inset-0 h-full w-full transform-gpu object-cover [backface-visibility:hidden]"
          src="/media/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/50 via-transparent to-transparent" />
      </div>

      <motion.div style={{ opacity: fade }} className="mx-auto w-full max-w-[86rem] px-3 pb-10 pt-32 text-center md:pb-12">
        <motion.div variants={stagger(0.12, 0.3)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-matco" /> Matco Energy Holdings Limited
          </motion.p>
          <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5.25rem)] font-medium py-[0.1em] leading-[1.12] tracking-[-0.04em]">
            {words.map((w, i) => (
              <span key={w} className="mx-[0.11em] inline-block">
                <motion.span className="inline-block" initial={{ y: '0.4em', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.09 }}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-col items-center gap-10">
            <div>
              <motion.p variants={fadeUp} className="mx-auto max-w-xl text-base leading-relaxed text-white/80 md:text-xl">
                Matco Energy Holdings is a Bangladesh energy company building across upstream, midstream, downstream, power and renewables, with global partners..
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
                <Button to="#businesses" variant="light">Explore Our Businesses</Button>
                <Button to="#partner" variant="outline-light">Partner with Us</Button>
              </motion.div>
            </div>
            <motion.ul variants={stagger(0.08)} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {segments.map(({ icon: Icon, label }) => (
                <motion.li key={label} variants={fadeUp} whileHover={{ y: -4 }} className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl lg:w-36">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15"><Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden /></span>
                  <span className="text-xs font-medium leading-snug text-white/90">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
