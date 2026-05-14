import BlogSection       from '../components/sections/BlogSection'
import InstagramSection  from '../components/sections/InstagramSection'
import Newsletter        from '../components/sections/Newsletter'

export default function BlogPage() {
  return (
    <main className="page">
      <BlogSection />
      <InstagramSection />
      <Newsletter />
    </main>
  )
}
