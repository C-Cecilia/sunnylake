import { useState, useEffect, useRef, useCallback } from 'react'
import '../../styles/PageHero.css'

const SLIDE_DURATION = 5000

export default function PageHero({ images = [], title = '', description = '' }) {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const timerRef  = useRef(null)
  const imagesRef = useRef(images)

  // Keep imagesRef in sync so timer callback always has latest length
  useEffect(() => {
    imagesRef.current = images
  }, [images])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % imagesRef.current.length)
      setAnimKey((k) => k + 1)
    }, SLIDE_DURATION)
  }, [])

  useEffect(() => {
    if (images.length <= 1) return
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [images.length, startTimer])

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + imagesRef.current.length + imagesRef.current.length) % imagesRef.current.length)
    setAnimKey((k) => k + 1)
    startTimer()
  }, [startTimer])

  return (
    <div className="page-hero">
      {images.map((src, i) => (
        <div
          key={src}
          className={`page-hero__slide ${i === current ? 'page-hero__slide--active' : ''}`}
        >
          <img
            key={i === current ? `active-${animKey}` : `idle-${i}`}
            src={src}
            alt=""
            className="page-hero__img"
          />
        </div>
      ))}

      <div className="page-hero__overlay" />

      <div className="page-hero__content">
        <div className="page-hero__left">
          <button className="page-hero__prev" onClick={goPrev} aria-label="Previous image">
            ←
          </button>
          <h1 className="page-hero__title">{title}</h1>
        </div>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </div>
  )
}
