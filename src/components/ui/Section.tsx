import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger } from '@/lib/motion'

type Props = { id?: string; className?: string; children: ReactNode; tone?: 'light' | 'dark' | 'green' | 'white' }

const tones = {
  light: 'bg-paper text-charcoal',
  white: 'bg-white text-charcoal',
  dark: 'bg-ink text-white',
  green: 'bg-forest text-white',
}

export function Section({ id, className = '', children, tone = 'light' }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-[130px] ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[86rem] px-3">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <motion.p
      variants={fadeUp}
      className={`mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] ${dark ? 'border-white/15 bg-white/5 text-white/70' : 'border-ink/10 bg-white text-charcoal/60'}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-matco" aria-hidden />
      {children}
    </motion.p>
  )
}

export function Reveal({ children, className = '', s = 0.1, as = 'div' }: { children: ReactNode; className?: string; s?: number; as?: 'div' | 'ul' }) {
  const C = as === 'ul' ? motion.ul : motion.div
  return (
    <C className={className} variants={stagger(s)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
      {children}
    </C>
  )
}

export function Item({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>
}

export function Heading({ children, className = '', dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <motion.h2
      variants={fadeUp}
      className={`font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance ${dark ? 'text-white' : 'text-ink'} ${className}`}
    >
      {children}
    </motion.h2>
  )
}
