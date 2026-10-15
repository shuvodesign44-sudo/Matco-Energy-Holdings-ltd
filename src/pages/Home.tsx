import PageTransition from '@/components/layout/PageTransition'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import Glance from '@/components/home/Glance'
import WhyMatco from '@/components/home/WhyMatco'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhyBangladesh from '@/components/home/WhyBangladesh'
import PartnerCta from '@/components/home/PartnerCta'
import News from '@/components/home/News'
import ClosingBanner from '@/components/home/ClosingBanner'
import useSeo from '@/lib/useSeo'

export default function Home() {
  useSeo(
    'Matco Energy Holdings | Integrated Energy for Bangladesh',
    'Matco Energy Holdings is a Bangladesh energy company building across upstream, midstream, downstream, power and renewables, with global partners.',
  )
  return (
    <PageTransition>
      <Hero />
      <Intro />
      <Glance />
      <WhyMatco />
      <WhatWeDo />
      <WhyBangladesh />
      <PartnerCta />
      <News />
      <ClosingBanner />
    </PageTransition>
  )
}
