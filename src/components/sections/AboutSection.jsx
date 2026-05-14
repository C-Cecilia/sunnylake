import { useEffect, useRef, useCallback } from 'react'
import { IMAGES } from '../../constants'
import '../../styles/AboutSection.css'

const SNAP_DURATION = 500  // ms
const SNAP_DEBOUNCE = 150  // ms

export default function AboutSection() {
  const sectionRef      = useRef(null)
  const clipRef         = useRef(null)
  const slidesRef       = useRef([])     // array of slide DOM nodes
  const progressRef     = useRef(0)      // 0 → 2 (one unit per image)
  const isSnapping      = useRef(false)
  const snapDebounceRef = useRef(null)
  const clipHeight      = useRef(0)
  const isInView        = useRef(false)

  // Apply progress to each slide individually
  // Formula: slide i starts at max(0, i - progress) * 100%
  //   → going down: next image rises from 100% → 0 (slides onto screen)
  //   → going up:   top image retreats from 0 → 100% (reveals image below)
  const applyProgress = useCallback((progress, withTransition = false) => {
    slidesRef.current.forEach((slide, i) => {
      if (!slide) return
      const pct = Math.max(0, i - progress) * 100
      slide.style.transition = withTransition
        ? `transform ${SNAP_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`
        : 'none'
      slide.style.transform = `translateY(${pct}%)`
    })
  }, [])

  const clampProgress = useCallback((value) => {
    return Math.min(2, Math.max(0, value))
  }, [])

  const nearestSnap = useCallback((progress) => {
    return Math.round(progress)
  }, [])

  const triggerSnap = useCallback(() => {
    const target = nearestSnap(progressRef.current)
    isSnapping.current = true
    progressRef.current = target
    applyProgress(target, true)
    setTimeout(() => { isSnapping.current = false }, SNAP_DURATION)
  }, [nearestSnap, applyProgress])

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isInView.current = entry.isIntersecting },
      { threshold: 0.85 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const clip = clipRef.current
    if (!clip) return

    const measure = () => { clipHeight.current = clip.clientHeight }
    measure()
    window.addEventListener('resize', measure)

    const handleWheel = (e) => {
      if (!isInView.current) return

      const goingDown = e.deltaY > 0
      const goingUp   = e.deltaY < 0

      // Release at boundaries
      if (goingUp   && progressRef.current <= 0) return
      if (goingDown && progressRef.current >= 2) return

      e.preventDefault()

      clearTimeout(snapDebounceRef.current)

      // Cancel snap — read current visual progress from first non-zero slide
      if (isSnapping.current) {
        isSnapping.current = false
        // Re-derive progress from slide[1]'s current translateY
        const slide1 = slidesRef.current[1]
        if (slide1) {
          const matrix = new DOMMatrix(window.getComputedStyle(slide1).transform)
          // slide1 pct = max(0, 1 - progress) * 100  →  progress = 1 - pct/100
          const pct = matrix.m42  // translateY in px → but we used %, need to convert
          // Actually slides use %, so matrix.m42 is pixels
          const h = clipHeight.current
          const slide1Pct = (pct / h) * 100
          // slide1Pct = max(0, 1 - progress) * 100
          // if slide1Pct > 0: progress = 1 - slide1Pct/100
          // if slide1Pct === 0: check slide2
          if (slide1Pct > 0) {
            progressRef.current = clampProgress(1 - slide1Pct / 100)
          } else {
            const slide2 = slidesRef.current[2]
            if (slide2) {
              const m2 = new DOMMatrix(window.getComputedStyle(slide2).transform)
              const s2Pct = (m2.m42 / h) * 100
              progressRef.current = clampProgress(2 - s2Pct / 100)
            }
          }
          applyProgress(progressRef.current, false)
        }
      }

      // Convert deltaY pixels → progress units
      const delta = e.deltaY / clipHeight.current
      progressRef.current = clampProgress(progressRef.current + delta)
      applyProgress(progressRef.current, false)

      snapDebounceRef.current = setTimeout(triggerSnap, SNAP_DEBOUNCE)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', measure)
      clearTimeout(snapDebounceRef.current)
    }
  }, [applyProgress, clampProgress, triggerSnap])

  // Set initial positions
  useEffect(() => {
    applyProgress(0, false)
  }, [applyProgress])

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__left">
        <h2 className="about__title">Sunny Lake National Park</h2>
        <p className="about__body">
          Sunny Lake National Park is a hidden gem known for its sparkling blue
          waters, lush forests, and scenic trails. Covering over 5,000 square
          miles, the park offers a peaceful escape into nature's wonders, with
          opportunities to hike, paddle, and explore diverse landscapes.
        </p>
        <p className="about__body">
          Whether you're unwinding on the lake beaches, hiking through wildflower
          meadows, or enjoying a picnic with mountain views, Sunny Lake promises
          unforgettable experiences. Embrace the open trails, soak in the sun,
          and let the beauty of Sunny Lake inspire your next adventure.
        </p>
      </div>

      <div className="about__right">
        <div className="about__clip" ref={clipRef}>
          {IMAGES.about.map((src, i) => (
            <div
              key={src}
              className="about__slide"
              ref={(el) => (slidesRef.current[i] = el)}
              style={{ zIndex: i + 1 }}
            >
              <img src={src} alt={`Sunny Lake ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
