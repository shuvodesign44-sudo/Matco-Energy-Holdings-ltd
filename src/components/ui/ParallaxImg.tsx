import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Props = { src: string; alt: string; className?: string; imgClassName?: string; amount?: number }

/** Rounded image frame with subtle scroll parallax and hover zoom. */
export default function ParallaxImg({ src, alt, className = '', imgClassName = '', amount = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`])
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 ${imgClassName}`}
      />
    </div>
  )
}
