import { Link } from 'react-router-dom'
import { ICONS } from '../../constants'
import '../../styles/Footer.css'

const FOOTER_COLS = [
  {
    title: 'What to do',
    path:  '/what-to-do',
    links: [
      { label: 'Sightseeing',          path: '/what-to-do#sightseeing' },
      { label: 'Adventure & Outdoors', path: '/what-to-do#adventure' },
      { label: 'Wellness',             path: '/what-to-do#wellness' },
    ],
  },
  {
    title: 'Where to stay',
    path:  '/where-to-stay',
    links: [
      { label: 'Hotels',   path: '/where-to-stay?filter=hotels' },
      { label: 'Campings', path: '/where-to-stay?filter=campings' },
      { label: 'Cabins',   path: '/where-to-stay?filter=cabins' },
    ],
  },
  {
    title: 'Where to eat',
    path:  '/where-to-eat',
    links: [
      { label: 'Restaurants',  path: '/where-to-eat?filter=restaurants' },
      { label: 'Coffee shops', path: '/where-to-eat?filter=coffeeshops' },
      { label: 'Bars',         path: '/where-to-eat?filter=bars' },
    ],
  },
  {
    title: 'Visitor info',
    path:  '/visitor-info',
    links: [
      { label: 'When to go',   path: '/visitor-info#when-to-go' },
      { label: 'Getting here', path: '/visitor-info#getting-here' },
      { label: 'Get in touch', path: '/visitor-info#get-in-touch' },
    ],
  },
]

const SOCIAL_LINKS = [
  { icon: ICONS.instagram, label: 'Instagram', href: '#' },
  { icon: ICONS.facebook,  label: 'Facebook',  href: '#' },
  { icon: ICONS.twitter,   label: 'Twitter',   href: '#' },
  { icon: ICONS.tiktok,    label: 'TikTok',    href: '#' },
  { icon: ICONS.youtube,   label: 'YouTube',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo">
          <img src={ICONS.logoFull} alt="Sunny Lake" />
        </Link>

        <div className="footer__cols">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer__col">
              <Link to={col.path} className="footer__col-title">
                {col.title}
              </Link>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer__col-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-top">
          <p className="footer__copy">©Sunny Lake</p>
          <div className="footer__socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                <img src={s.icon} alt={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Instructions</a>
          <a href="#" className="footer__bottom-link">Licenses</a>
          <a href="#" className="footer__bottom-link">Styleguide</a>
          <a href="#" className="footer__bottom-link">Changelog</a>
        </div>
      </div>
    </footer>
  )
}
