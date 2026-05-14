import { IMAGES, ICONS } from '../../constants'
import '../../styles/StaySection.css'

export default function StaySection() {
  return (
    <section className="stay">
      <div className="stay__image">
        <img src={IMAGES.stay} alt="Find your perfect stay" />
      </div>

      <div className="stay__text">
        <h2 className="stay__title">Find your perfect stay</h2>
        <p className="stay__body">
          Sunny Lake offers a range of accommodations, from charming cabins and
          family-friendly lodges to campgrounds under the stars. Relax and unwind
          in the perfect spot that fits your style and budget.
        </p>
        <button
          className="stay__btn"
          onClick={() => window.location.href = '/where-to-stay'}
        >
          Explore
          <img src={ICONS.arrowBlack} alt="" className="stay__btn-arrow" />
        </button>
      </div>
    </section>
  )
}
