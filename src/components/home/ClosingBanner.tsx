import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { Item, Reveal } from '@/components/ui/Section'

const img = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000'

export default function ClosingBanner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  return (
    <section id="contact" ref={ref} className="scroll-mt-16 bg-white p-2 pb-20 md:p-3 md:pb-[130px]">
      <div className="relative isolate mx-auto w-full max-w-[86rem] overflow-hidden rounded-[2rem] py-36 text-white md:rounded-[2.25rem] md:py-52">
        <motion.img style={{ y }} src={img} alt="" loading="lazy" className="absolute inset-x-0 -top-[10%] -z-20 h-[120%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/80 via-forest/70 to-ink/90" />
        <Reveal className="mx-auto max-w-[86rem] px-3 text-center">
          <Item>
            <h2 className="mx-auto max-w-5xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-balance md:text-8xl">
              Energy for Bangladesh. <span className="text-white/60">Partnership for the world.</span>
            </h2>
          </Item>
          <Item className="mt-12"><Button to="mailto:info@matcoenergy.com" variant="primary">Contact us</Button></Item>
        </Reveal>
      </div>
    </section>
  )
}
