import { VIDEOS } from '../../constants'
import '../../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src={VIDEOS.hero}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__title">
            Explore<br />Sunny Lake
          </h1>
          <a href="#about" className="hero__btn">Explore</a>
        </div>
        <div className="hero__right">
          <p className="hero__desc">
            Experience the beauty of Sunny Lake National Park, where sparkling
            waters, lush forests, and scenic trails await your next adventure.
          </p>
        </div>
      </div>
    </section>
  )
}
