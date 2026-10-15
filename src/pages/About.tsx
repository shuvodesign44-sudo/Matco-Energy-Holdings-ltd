import PageTransition from '@/components/layout/PageTransition'
import { Banner, Governance, HowWeWork, Mission, Values, Vision, WhoWeAre } from '@/components/about/AboutSections'
import useSeo from '@/lib/useSeo'

export default function About() {
  useSeo(
    'About Us | Matco Energy Holdings Limited',
    "Learn about Matco Energy Holdings Limited: our vision, mission, values, way of working and the licences behind Bangladesh's integrated energy platform.",
  )
  return (
    <PageTransition>
      <Banner />
      <WhoWeAre />
      <Vision />
      <Mission />
      <Values />
      <HowWeWork />
      <Governance />
    </PageTransition>
  )
}
