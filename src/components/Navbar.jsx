import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/zhc', label: 'ZHC' },
  { to: '/collections', label: 'Collections' },
  { to: '/community', label: 'Community' },
]

const moreLinks = [
  { to: '/technology', label: 'Technology' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/docs', label: 'Docs' },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isMoreActive = moreLinks.some(link => location.pathname === link.to)

  return (
    <nav className="fixed top-4 left-6 right-6 z-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className={`mx-auto px-5 h-14 flex items-center justify-between rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d14]/80 backdrop-blur-xl border border-white/[0.07] shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center flex-1 gap-3 group">
          <span className="text-white font-black text-2xl tracking-tight">
            ZHC<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-1 gap-0.5 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isMoreActive
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              More
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {moreOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-44 rounded-xl border border-white/[0.08] py-1.5 shadow-2xl"
                style={{ background: 'rgba(16, 16, 24, 0.96)', backdropFilter: 'blur(20px)' }}
              >
                {moreLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      location.pathname === link.to
                        ? 'text-white'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            to="/contact"
            className="text-sm font-semibold text-white/70 hover:text-white border border-white/[0.12] hover:border-white/30 rounded-lg px-5 py-2 transition-all duration-200"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl border border-white/[0.07] px-4 py-4 space-y-1"
          style={{ background: 'rgba(13, 13, 20, 0.97)', backdropFilter: 'blur(24px)' }}
        >
          {[...navLinks, ...moreLinks].map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? 'text-white bg-white/[0.06]'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-white/[0.06]">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 px-4 rounded-xl text-sm font-semibold text-white border border-white/[0.12] hover:border-white/30 transition-all"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
