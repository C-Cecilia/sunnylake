import { useState, useEffect } from 'react'
import '../../styles/FilterGrid.css'

export default function FilterGrid({ title, filters, items, initialFilter = 'all' }) {
  const [active, setActive] = useState(initialFilter)

  // Sync when initialFilter changes (e.g. navigating with different query param)
  useEffect(() => {
    setActive(initialFilter)
  }, [initialFilter])

  const visible = active === 'all'
    ? items
    : items.filter((item) => item.categories.includes(active))

  return (
    <div className="filter-grid">
      <h2 className="filter-grid__title">{title}</h2>

      <div className="filter-grid__filters">
        <button
          type = "button"
          className={`filter-grid__pill ${active === 'all' ? 'filter-grid__pill--active' : ''}`}
          onClick={() => setActive('all')}
        >
          All places
        </button>
        {filters.map((f) => (
          <button
            type = "button"
            key={f.id}
            className={`filter-grid__pill ${active === f.id ? 'filter-grid__pill--active' : ''}`}
            onClick={() => {
              console.log('cilcked',f.id)
              setActive(f.id)}}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="filter-grid__grid">
        {visible.map((item) => (
          <div key={item.id} className="filter-card">
            <div className="filter-card__thumb">
              <img src={item.image} alt={item.name} />
            </div>
            <h3 className="filter-card__name">{item.name}</h3>
            <p className="filter-card__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
