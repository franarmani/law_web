// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import AreasGrid from '@/components/home/AreasGrid'
import TeamSection from '@/components/home/TeamSection'
import HowWeWork from '@/components/home/HowWeWork'
import AboutSection from '@/components/home/AboutSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import FAQSection from '@/components/home/FAQSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AreasGrid />
      <TeamSection />
      <HowWeWork />
      <WhyUsSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
