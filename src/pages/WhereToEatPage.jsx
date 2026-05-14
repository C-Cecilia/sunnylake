import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero         from '../components/ui/PageHero'
import FilterGrid       from '../components/ui/FilterGrid'
import InstagramSection from '../components/sections/InstagramSection'
import Newsletter       from '../components/sections/Newsletter'
import { WHERE_TO_EAT_IMAGES } from '../constants'

const FILTERS = [
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'coffeeshops', label: 'Coffee shops' },
  { id: 'bars',        label: 'Bars' },
]

const ITEMS = [
  {
    id:          'whisper-pines-coffee',
    name:        'Whisper Pines Coffee',
    image:       WHERE_TO_EAT_IMAGES.restaurants.whisperPinesCoffee,
    categories:  ['restaurants', 'coffeeshops'],
    description: 'Unwind at Whispering Pines Coffee House, a cozy spot offering gourmet coffee, light bites, and a relaxed atmosphere perfect for a quick refresh or a leisurely afternoon.',
  },
  {
    id:          'trails-end-diner',
    name:        "Trail's End Diner",
    image:       WHERE_TO_EAT_IMAGES.restaurants.trailsEndDiner,
    categories:  ['bars'],
    description: "Fuel up at Trail's End Diner, a classic spot offering all-day breakfast, hearty comfort food, and a welcoming atmosphere perfect for families and travelers.",
  },
  {
    id:          'pinecone-tavern',
    name:        'Pinecone Tavern',
    image:       WHERE_TO_EAT_IMAGES.restaurants.pineconeTavern,
    categories:  ['restaurants', 'bars'],
    description: 'Enjoy a casual dining experience at Pinecone Tavern, where hearty meals, craft beers, and a laid-back vibe make it a local favorite for lunch and dinner.',
  },
  {
    id:          'sunset-bistro',
    name:        'Sunset Bistro',
    image:       WHERE_TO_EAT_IMAGES.restaurants.sunsetBistro,
    categories:  ['restaurants', 'coffeeshops'],
    description: 'Dine in style at Sunset Bistro, where creative dishes and an elegant atmosphere meet stunning lake and mountain views. Perfect for romantic dinners or special occasions.',
  },
  {
    id:          'mountain-hearth-cafe',
    name:        'Mountain Hearth Café',
    image:       WHERE_TO_EAT_IMAGES.restaurants.mountainHearthCafe,
    categories:  ['coffeeshops'],
    description: 'Stop by Mountain Hearth Café for cozy comfort food, freshly baked pastries, and locally roasted coffee. A perfect spot for a quick bite or a relaxed afternoon.',
  },
  {
    id:          'lakeside-grille',
    name:        'The Lakeside Grille',
    image:       WHERE_TO_EAT_IMAGES.restaurants.lakesideGrille,
    categories:  ['restaurants', 'bars'],
    description: 'Savor fresh, locally inspired dishes with a stunning view of Sunny Lake. The Lakeside Grille combines delicious cuisine with a relaxed lakeside ambiance perfect for any occasion.',
  },
]

export default function WhereToEatPage() {
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
        images={WHERE_TO_EAT_IMAGES.hero}
        title="Where to eat"
        description="Discover diverse dining options, from lakeside restaurants to cozy cafes nestled in nature. Savor fresh, local flavors while enjoying stunning views that make every meal memorable."
      />
      <div id="filter-grid">
        <FilterGrid
          title="Taste the best of Sunny Lake"
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
