import HeroSection from '@/components/home/HeroSection'
import AreasGrid from '@/components/home/AreasGrid'
import AboutTeamSection from '@/components/home/AboutTeamSection'
import HowWeWork from '@/components/home/HowWeWork'
import FAQSection from '@/components/home/FAQSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AreasGrid />
      <AboutTeamSection />
      <HowWeWork />
      <FAQSection />
      <ContactSection />
    </>
  )
}

