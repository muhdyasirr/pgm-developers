import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import SideImageSlider from '@/components/SideImageSlider'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <SideImageSlider />
      <ExpertiseSection />
      <ProjectsGrid />
      <CTASection />
      <Footer />
    </main>
  )
}
