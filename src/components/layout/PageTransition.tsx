import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.main>
  )
}
