import { IMAGES } from '../../constants'
import '../../styles/ActivitiesSection.css'

const ACTIVITIES = [
  { key: 'sightseeing', label: 'Sightseeing',         img: IMAGES.activities.sightseeing },
  { key: 'adventure',   label: 'Adventure & Outdoors', img: IMAGES.activities.adventure },
  { key: 'wellness',    label: 'Wellness',             img: IMAGES.activities.wellness },
]

export default function ActivitiesSection() {
  return (
    <section className="activities">
      <h2 className="activities__title">
        Plan your dream<br />adventure at Sunny Lake
      </h2>

      <div className="activities__grid">
        {ACTIVITIES.map((item) => (
          <div key={item.key} className="activity-card">
            <img className="activity-card__img" src={item.img} alt={item.label} />
            <div className="activity-card__overlay" />
            <div className="activity-card__content">
              <span className="activity-card__label">{item.label}</span>
              <a href="#" className="activity-card__btn">Explore</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
