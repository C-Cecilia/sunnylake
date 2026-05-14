import { Link } from 'react-router-dom'
import { IMAGES } from '../../constants'
import '../../styles/BlogSection.css'

const POSTS = [
  {
    img:   IMAGES.blog[0],
    title: '5 hidden gems to discover at Sunny Lake',
    desc:  'From secret swimming holes to untouched forest trails, these lesser-known spots will make your Sunny Lake trip truly unforgettable.',
  },
  {
    img:   IMAGES.blog[1],
    title: 'A day in Sunny Lake: Itinerary for avid hikers',
    desc:  "Rise at dawn, conquer two summits, and end the day with a lakeside sunset. Here's the perfect one-day hiking plan for Sunny Lake.",
  },
  {
    img:   IMAGES.blog[2],
    title: 'How to pack for Sunny Lake: Seasoned tips',
    desc:  "Whether you're visiting in summer or fall, packing smart can make all the difference. Our rangers share their top gear recommendations.",
  },
]

export default function BlogSection() {
  return (
    <section className="blog">
      <h2 className="blog__title">Blog</h2>

      <div className="blog__grid">
        {POSTS.map((post) => (
          <article key={post.title} className="blog-card">
            <Link to="/blog" className="blog-card__thumb">
              <img src={post.img} alt={post.title} />
            </Link>
            <div className="blog-card__body">
              <p className="blog-card__tag">{post.tag}</p>
              <Link to="/blog" className="blog-card__title">{post.title}</Link>
              <p className="blog-card__desc">{post.desc}</p>
              <p className="blog-card__date">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
