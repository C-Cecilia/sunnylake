import { useState, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ICONS } from '../../constants'
import '../../styles/Navbar.css'

const NAV_LINKS = [
  { label: 'What to do',    path: '/what-to-do' },
  { label: 'Where to stay', path: '/where-to-stay' },
  { label: 'Where to eat',  path: '/where-to-eat' },
  { label: 'Visitor info',  path: '/visitor-info' },
  { label: 'Blog',          path: '/blog' },
]

const MENU_SECTIONS = [
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

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [animKey,   setAnimKey]   = useState(0)
  const [textReady, setTextReady] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isActive = (path) => location.pathname === path

  const openMenu = useCallback(() => {
    setTextReady(false)
    setAnimKey((k) => k + 1)
    setMenuOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTextReady(true)
      })
    })
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setTextReady(false)
  }, [])

  const handleLinkClick = useCallback((path) => {
    closeMenu()
    // Parse path into pathname + hash/search
    const url = new URL(path, window.location.origin)
    navigate(url.pathname + url.search + url.hash)
  }, [closeMenu, navigate])

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={ICONS.logoFull} alt="Sunny Lake" />
        </Link>

        <div className="navbar__right">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="navbar__menu-btn" onClick={openMenu} aria-label="Open menu">
            <img src={ICONS.menu} alt="Menu" />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}>
        <div className="nav-overlay__header">
          <Link to="/" className="nav-overlay__logo" onClick={closeMenu}>
            <img src={ICONS.logoFull} alt="Sunny Lake" />
          </Link>
          <button className="nav-overlay__close" onClick={closeMenu} aria-label="Close menu">
            <img src={ICONS.close} alt="Close" />
          </button>
        </div>

        <div
          key={animKey}
          className={`nav-overlay__grid ${textReady ? 'nav-overlay__grid--animate' : ''}`}
        >
          {MENU_SECTIONS.map((section) => (
            <div key={section.title} className="nav-overlay__section">
              <div className="wipe-wrap">
                <button
                  className="nav-overlay__section-title"
                  onClick={() => handleLinkClick(section.path)}
                >
                  {section.title}
                </button>
              </div>

              <ul className="nav-overlay__section-links">
                {section.links.map((link) => (
                  <li key={link.label} className="wipe-wrap">
                    <button
                      className="nav-overlay__section-link"
                      onClick={() => handleLinkClick(link.path)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
