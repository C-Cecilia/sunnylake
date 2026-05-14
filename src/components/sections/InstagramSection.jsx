import { IMAGES } from '../../constants'
import '../../styles/InstagramSection.css'

// landscape first (wide), then portrait (tall) — alternating
const ORIENTATIONS = ['landscape', 'portrait', 'landscape', 'portrait', 'landscape', 'portrait']

export default function InstagramSection() {
  const items = [...IMAGES.instagram, ...IMAGES.instagram]

  return (
    <section className="instagram">
      <h2 className="instagram__title">Follow us on Instagram</h2>

      <div className="instagram__track-wrapper">
        <div className="instagram__track">
          {items.map((src, i) => {
            const orientation = ORIENTATIONS[i % IMAGES.instagram.length]
            return (
              <div
                key={i}
                className={`instagram__item instagram__item--${orientation}`}
              >
                <img
                  src={src}
                  alt={`Instagram post ${(i % IMAGES.instagram.length) + 1}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
