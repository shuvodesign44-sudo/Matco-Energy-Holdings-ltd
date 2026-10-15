import logo from '@/assets/matco-logo.png'

type Props = { variant?: 'color' | 'white'; className?: string; withWordmark?: boolean }

export default function Logo({ variant = 'color', className = '', withWordmark = true }: Props) {
  const white = variant === 'white'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="Matco Energy Holdings logo"
        width={40}
        height={40}
        className="block h-11 w-11 shrink-0 rounded-full object-contain"
      />
      {withWordmark && (
        <span className="leading-none">
          <span className={`block font-display text-[15px] font-semibold tracking-tight ${white ? 'text-white' : 'text-ink'}`}>
            Matco Energy
          </span>
          <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] ${white ? 'text-white/60' : 'text-charcoal/55'}`}>
            Holdings Limited
          </span>
        </span>
      )}
    </span>
  )
}
