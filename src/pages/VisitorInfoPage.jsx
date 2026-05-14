import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero         from '../components/ui/PageHero'
import StickyLayout     from '../components/ui/StickyLayout'
import InstagramSection from '../components/sections/InstagramSection'
import Newsletter       from '../components/sections/Newsletter'
import { VISITOR_INFO_IMAGES } from '../constants'

const ITEMS = [
  {
    id:          'when-to-go',
    label:       'When to go',
    image:       VISITOR_INFO_IMAGES.whenToGo,
    description: 'Sunny Lake experiences warm summers and crisp, cool winters, perfect for year-round adventures. Weather can change quickly, so pack layers and check the forecast before you visit.',
    href:        '#',
  },
  {
    id:          'getting-here',
    label:       'Getting here',
    image:       VISITOR_INFO_IMAGES.gettingHere,
    description: 'Sunny Lake National Park is easily accessible by car and located just off the scenic Highway 89. The nearest major city is Hartland, a two-hour drive away, making it an easy escape into nature.',
    href:        '#',
  },
  {
    id:          'get-in-touch',
    label:       'Get in touch',
    image:       VISITOR_INFO_IMAGES.getInTouch,
    description: "Have questions? We're here to help. Reach out to our friendly team for visitor information, trip planning tips, and park updates.",
    href:        '#',
  },
]

export default function VisitorInfoPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, 100)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <main className="page">
      <PageHero
        images={[VISITOR_INFO_IMAGES.hero]}
        title="Visitor info"
        description="Plan your Sunny Lake adventure with essential tips, weather updates, and visitor guidelines to make the most of your visit."
      />
      <StickyLayout
        title="Plan your dream adventure at Sunny Lake"
        items={ITEMS}
      />
      <InstagramSection />
      <Newsletter />
    </main>
  )
}
