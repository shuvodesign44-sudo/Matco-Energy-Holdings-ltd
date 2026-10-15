import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'light' | 'outline-light' | 'outline-dark' | 'dark'

const styles: Record<Variant, string> = {
  primary: 'bg-matco text-white hover:bg-[#178150]',
  light: 'bg-white text-ink hover:bg-paper',
  dark: 'bg-ink text-white hover:bg-forest',
  'outline-light': 'border border-white/30 text-white hover:bg-white/10',
  'outline-dark': 'border border-ink/20 text-ink hover:bg-ink/5',
}

type Props = { to: string; children: ReactNode; variant?: Variant; icon?: boolean; className?: string }

const MotionLink = motion.create(Link)

export default function Button({ to, children, variant = 'primary', icon = true, className = '' }: Props) {
  const cls = `group inline-flex h-12 items-center gap-2 rounded-full pl-6 ${icon ? 'pr-2' : 'pr-6'} text-sm font-medium tracking-tight transition-colors ${styles[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="grid h-8 w-8 place-items-center rounded-full bg-current/10 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </>
  )
  const anim = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }
  if (to.startsWith('#') || to.startsWith('mailto:')) {
    return <motion.a href={to} className={cls} {...anim}>{inner}</motion.a>
  }
  return <MotionLink to={to} className={cls} {...anim}>{inner}</MotionLink>
}
