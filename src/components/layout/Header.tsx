import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'

const nav = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Businesses', to: '/#businesses' },
  { label: 'Projects', to: '/#bangladesh' },
  { label: 'Partner With Us', to: '/#partner' },
  { label: 'Sustainability', to: '/#why-matco' },
  { label: 'Contact', to: '/#contact' },
]

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))
  useEffect(() => setOpen(false), [pathname, hash])

  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 350)
    return () => clearTimeout(t)
  }, [pathname, hash])

  const isActive = (to: string) => (to === '/about' ? pathname === '/about' : pathname === '/' && hash === to.slice(1))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className={`mx-auto flex max-w-[86rem] items-center justify-between rounded-full border pl-3 pr-2.5 transition-all duration-500 md:pr-2.5 ${scrolled || open ? 'h-16 border-white/10 bg-ink/75 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'h-20 border-transparent'}`}>
        <Link to="/" aria-label="Matco Energy Holdings - Home" className="flex shrink-0 items-center self-center">
          <Logo variant="white" />
        </Link>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${isActive(n.to) ? 'text-white' : 'text-white/65 hover:text-white'}`}
                >
                  {isActive(n.to) && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                  )}
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-white/15 p-0.5 text-[11px] font-medium sm:flex" role="group" aria-label="Language">
            <button className="rounded-full bg-white px-2.5 py-1 text-ink" aria-pressed="true">EN</button>
            <button className="rounded-full px-2.5 py-1 text-white/70 hover:text-white" aria-pressed="false" lang="bn">বাংলা</button>
          </div>
          <Button to="/#partner" className="hidden h-11 md:inline-flex" icon={false}>Partner with Us</Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-auto mt-2 max-w-[86rem] overflow-hidden rounded-[1.75rem] bg-ink/90 backdrop-blur-xl xl:hidden"
          >
            <ul className="mx-auto max-w-7xl px-5 pb-8 pt-2 md:px-8">
              {nav.map((n, i) => (
                <motion.li key={n.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link to={n.to} className="block border-b border-white/10 py-4 font-display text-2xl tracking-tight text-white">
                    {n.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-6"><Button to="/#partner">Partner with Us</Button></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
