import { useEffect, useRef } from 'react'
import { IMAGES, ICONS } from '../../constants'
import '../../styles/FoodSection.css'

export default function FoodSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = sectionRef.current
        if (!el) return
        if (entry.isIntersecting) {
          el.classList.remove('food--visible')
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add('food--visible')
            })
          })
        } else {
          el.classList.remove('food--visible')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="food" ref={sectionRef}>
      <div className="food__text">

        <div className="food__wipe-wrap">
          <h2 className="food__title">Taste the best of Sunny Lake</h2>
        </div>

        <div className="food__wipe-wrap">
          <p className="food__body">
            Discover local dining options, from lakeside restaurants to cozy
            mountain bistros. Experience fresh, seasonal dishes and vibrant flavours
            that make every meal a memorable part of your adventure.
          </p>
        </div>

        <div className="food__wipe-wrap">
          <button
            className="food__btn"
            onClick={() => window.location.href = '/where-to-eat'}
          >
            Explore
            <img src={ICONS.arrowBlack} alt="" className="food__btn-arrow" />
          </button>
        </div>

      </div>

      <div className="food__image">
        <img src={IMAGES.food} alt="Taste the best of Sunny Lake" />
      </div>
    </section>
  )
}
