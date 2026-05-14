import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero         from '../components/ui/PageHero'
import FilterGrid       from '../components/ui/FilterGrid'
import InstagramSection from '../components/sections/InstagramSection'
import Newsletter       from '../components/sections/Newsletter'
import { WHERE_TO_STAY_IMAGES } from '../constants'

const FILTERS = [
  { id: 'hotels',   label: 'Hotels' },
  { id: 'campings', label: 'Campings' },
  { id: 'cabins',   label: 'Cabins' },
]

const ITEMS = [
  {
    id:          'sunny-lake-lodge',
    name:        'Sunny Lake Lodge',
    image:       WHERE_TO_STAY_IMAGES.properties.sunnyLakeLodge,
    categories:  ['hotels'],
    description: 'Escape to Sunny Lake Lodge, where stunning lake views, beautifully designed rooms, and top-notch amenities create the perfect retreat for all types of travelers.',
  },
  {
    id:          'lakeside-cabins',
    name:        'Lakeside Cabins',
    image:       WHERE_TO_STAY_IMAGES.properties.lakesideCabins,
    categories:  ['hotels', 'cabins'],
    description: 'Stay at our Lakeside Cabins, tucked among the trees with private decks and cozy interiors. Enjoy nature up close in a charming, rustic setting right by the water.',
  },
  {
    id:          'mountain-view',
    name:        'Mountain View',
    image:       WHERE_TO_STAY_IMAGES.properties.mountainView,
    categories:  ['campings', 'cabins'],
    description: 'Camp at Mountain View Campground with spacious sites, modern facilities, and gorgeous mountain vistas. Perfect for adventurers seeking nature and tranquility.',
  },
  {
    id:          'pines-bed-breakfast',
    name:        'The Pines Bed & Breakfast',
    image:       WHERE_TO_STAY_IMAGES.properties.thePinesBedBreakfast,
    categories:  ['campings', 'cabins'],
    description: 'Relax at The Pines Bed & Breakfast, where cozy rooms, warm hospitality, and a delicious homemade breakfast offer a delightful and personalized stay.',
  },
  {
    id:          'lakeshore-hotel-spa',
    name:        'Lakeshore Hotel & Spa',
    image:       WHERE_TO_STAY_IMAGES.properties.lakeshoreHotelSpa,
    categories:  ['hotels'],
    description: 'Enjoy stunning lake views, beautifully designed rooms, and top-notch amenities. The perfect retreat for all types of travelers.',
  },
  {
    id:          'whispering-pines-rv',
    name:        'Whispering Pines RV Park',
    image:       WHERE_TO_STAY_IMAGES.properties.whisperingPinesRVPark,
    categories:  ['campings'],
    description: 'Park at Whispering Pines RV Park, offering spacious sites, full amenities, and quick access to nature — ideal for RV travelers exploring Sunny Lake.',
  },
]

export default function WhereToStayPage() {
  const [searchParams] = useSearchParams()
  const initialFilter  = searchParams.get('filter') || 'all'

  // When a filter param is present, scroll to the grid after page loads
  useEffect(() => {
    if (!initialFilter || initialFilter === 'all') return
    const timer = setTimeout(() => {
      const el = document.getElementById('filter-grid')
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, 120)
    return () => clearTimeout(timer)
  }, [initialFilter])

  return (
    <main className="page">
      <PageHero
        images={WHERE_TO_STAY_IMAGES.hero}
        title="Where to stay"
        description="Sunny Lake offers a range of accommodations, from charming cabins and family-friendly lodges to campgrounds under the stars. Relax and unwind in the perfect spot that fits your style and budget."
      />
      <div id="filter-grid">
        <FilterGrid
          title="Accommodation"
          filters={FILTERS}
          items={ITEMS}
          initialFilter={initialFilter}
        />
      </div>
      <InstagramSection />
      <Newsletter />
    </main>
  )
}
