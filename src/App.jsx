import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar        from './components/ui/Navbar'
import Footer        from './components/ui/Footer'
import HomePage      from './pages/HomePage'
import WhatToDoPage   from './pages/WhatToDoPage'
import WhereToStayPage from './pages/WhereToStayPage'
import WhereToEatPage  from './pages/WhereToEatPage'
import VisitorInfoPage from './pages/VisitorInfoPage'
import ScrollToTop from './components/ScrollToTop'
import BlogPage        from './pages/BlogPage'
import './styles/tokens.css'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/what-to-do"   element={<WhatToDoPage />} />
        <Route path="/where-to-stay" element={<WhereToStayPage />} />
        <Route path="/where-to-eat" element={<WhereToEatPage />} />
        <Route path="/visitor-info" element={<VisitorInfoPage />} />
        <Route path="/blog"          element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
