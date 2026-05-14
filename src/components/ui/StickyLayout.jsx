import { useState, useEffect, useRef } from 'react'
import '../../styles/StickyLayout.css'

export default function StickyLayout({ title, items }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const sectionRefs = useRef({})

  // Highlight pill based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollTo = (id) => {
    const el = sectionRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }

  return (
    <div className="sticky-layout">
      {/* Left — sticky */}
      <div className="sticky-layout__left">
        <h2 className="sticky-layout__title">{title}</h2>
        <nav className="sticky-layout__nav">
          {items.map((item) => (
            <button
              key={item.id}
              className={`sticky-layout__pill ${activeId === item.id ? 'sticky-layout__pill--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right — scrollable sections */}
      <div className="sticky-layout__right">
        {items.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="sticky-layout__section"
            data-id={item.id}
            ref={(el) => (sectionRefs.current[item.id] = el)}
          >
            <div className="sticky-layout__img-wrap">
              <img src={item.image} alt={item.label} />
            </div>
            <h3 className="sticky-layout__section-title">{item.label}</h3>
            <p className="sticky-layout__section-body">{item.description}</p>
            <a href={item.href || '#'} className="sticky-layout__btn">
              Explore more
              <span className="sticky-layout__btn-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
