import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero         from '../components/ui/PageHero'
import StickyLayout     from '../components/ui/StickyLayout'
import InstagramSection from '../components/sections/InstagramSection'
import Newsletter       from '../components/sections/Newsletter'
import { WHAT_TO_DO_IMAGES } from '../constants'

const ITEMS = [
  {
    id:          'sightseeing',
    label:       'Sightseeing',
    image:       WHAT_TO_DO_IMAGES.activities.sightseeing,
    description: 'Explore breathtaking views at Sunny Lake, from panoramic lookouts to hidden waterfalls. Discover scenic trails, guided tours, and stunning spots that showcase nature in all its beauty.',
    href:        '#',
  },
  {
    id:          'adventure',
    label:       'Adventure & Outdoors',
    image:       WHAT_TO_DO_IMAGES.activities.adventure,
    description: 'Experience year-round adventure at Sunny Lake. Hike, bike, paddle, or ski through stunning landscapes and enjoy endless outdoor fun surrounded by nature.',
    href:        '#',
  },
  {
    id:          'wellness',
    label:       'Wellness',
    image:       WHAT_TO_DO_IMAGES.activities.wellness,
    description: 'Unwind with a lakeside yoga session, enjoy a serene spa day, or simply bask in the calm of nature. Sunny Lake is your perfect retreat to relax and rejuvenate.',
    href:        '#',
  },
]

export default function WhatToDoPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    // Wait for page to render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, 100)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <main className="page">
      <PageHero
        images={WHAT_TO_DO_IMAGES.hero}
        title="What to do"
        description="Explore on your own, or join one of the many incredible sightseeing tours and go with a knowledgeable guide who can show you the very best of the area."
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
