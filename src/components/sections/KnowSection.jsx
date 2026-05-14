import { useNavigate } from 'react-router-dom'
import { ICONS } from '../../constants'
import '../../styles/KnowSection.css'

const CARDS = [
  {
    icon:  ICONS.whenToGo,
    title: 'When to go',
    body:  'The best time to visit Sunny Lake is from late spring through early fall (May–October). Summer offers warm days perfect for swimming and hiking, while September brings stunning golden foliage and crisp mountain air.',
    path:  '/visitor-info#when-to-go',
  },
  {
    icon:  ICONS.gettingHere,
    title: 'Getting here',
    body:  'Sunny Lake is accessible by car via Highway 89, approximately 3 hours from the nearest major city. Seasonal shuttle services run from the regional airport on weekends during peak season.',
    path:  '/visitor-info#getting-here',
  },
  {
    icon:  ICONS.getInTouch,
    title: 'Get in touch',
    body:  'Our visitor center is open daily from 8am to 6pm during peak season. Contact our rangers for trail conditions, permit information, and guided tour bookings. Emergency services are available 24/7.',
    path:  '/visitor-info#get-in-touch',
  },
]

export default function KnowSection() {
  const navigate = useNavigate()

  return (
    <section className="know">
      <h2 className="know__title">Know before you go</h2>

      <div className="know__grid">
        {CARDS.map((card) => (
          <div key={card.title} className="know-card">
            <div className="know-card__icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h3 className="know-card__title">{card.title}</h3>
            <p className="know-card__body">{card.body}</p>
            <button
              className="know-card__btn"
              onClick={() => navigate(card.path)}
            >
              Learn more
              <img src={ICONS.arrowBlack} alt="" className="know-card__btn-arrow" />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
