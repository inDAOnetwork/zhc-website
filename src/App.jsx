import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Ecosystem from './pages/Ecosystem'
import Contact from './pages/Contact'
import Community from './pages/Community'
import ZHC from './pages/ZHC'
import Collections from './pages/Collections'
import Docs from './pages/Docs'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div className={`min-h-screen ${loading ? 'opacity-0' : ''}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/zhc" element={<ZHC />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
