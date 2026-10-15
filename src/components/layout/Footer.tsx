import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'

const cols = [
  { title: 'Company', links: [['About Us', '/about'], ['Vision & Mission', '/about#vision'], ['Governance', '/about#governance'], ['News', '/#news']] },
  { title: 'Businesses', links: [['Upstream', '/#businesses'], ['Midstream', '/#businesses'], ['Downstream & Trading', '/#businesses'], ['Power & Renewables', '/#businesses'], ['EPC & Infrastructure', '/#businesses']] },
  { title: 'Engage', links: [['Partner With Us', '/#partner'], ['Investors', '/#partner'], ['Suppliers', '/#partner'], ['Contact', '/#contact']] },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-[86rem] px-3 pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-8 max-w-sm font-display text-3xl font-medium leading-tight tracking-tight">Integrated energy for Bangladesh.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([l, to]) => (
                    <li key={l}><Link to={to} className="text-sm text-white/80 transition-colors hover:text-white">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 border-t border-white/15 py-8 text-xs leading-relaxed text-white/55">
          <p className="max-w-4xl">
            <strong className="font-medium text-white/75">Forward-looking statements.</strong> This website may contain forward-looking statements about planned activities, projects and partnerships. These reflect current expectations and are subject to risks, approvals and uncertainties. Actual outcomes may differ.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row">
            <p>© 2026 Matco Energy Holdings Limited. All rights reserved.</p>
            <ul className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((l) => (
                <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
