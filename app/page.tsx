import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import ConfigurationSection from '@/components/ConfigurationSection'
import FeaturedServices from '@/components/FeaturedServices'
import SideImageSlider from '@/components/SideImageSlider'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import EnquiryModal from '@/components/EnquiryModal'
import { EnquiryProvider } from '@/context/EnquiryContext'

export default function Home() {
  return (
    <EnquiryProvider>
      <EnquiryModal />
      <main>
        <Navbar />
        <HeroSlider />
        <AboutSection />
        <FeaturedServices />
        <SideImageSlider />
        <ExpertiseSection />
        <ProjectsGrid />
        <CTASection />
        <Footer />
      </main>
    </EnquiryProvider>
  )
}
