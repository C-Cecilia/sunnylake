import Hero              from '../components/sections/Hero'
import AboutSection      from '../components/sections/AboutSection'
import ActivitiesSection from '../components/sections/ActivitiesSection'
import StaySection       from '../components/sections/StaySection'
import FoodSection       from '../components/sections/FoodSection'
import InstagramSection  from '../components/sections/InstagramSection'
import KnowSection       from '../components/sections/KnowSection'
import Newsletter        from '../components/sections/Newsletter'
import BlogSection       from '../components/sections/BlogSection'

export default function HomePage() {
  return (
    <main className="page">
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <StaySection />
      <FoodSection />
      <InstagramSection />
      <KnowSection />
      <Newsletter />
      <BlogSection />
    </main>
  )
}
