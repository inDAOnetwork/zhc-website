import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/zhc', label: 'ZHC' },
  { to: '/community', label: 'Community' },
]

const moreLinks = [
  { to: '/collections', label: 'Collections' },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef(null)

  // Glass background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
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
    <nav className="fixed top-4 left-6 right-6 z-50" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
      <div className={`mx-auto px-5 h-14 flex items-center justify-between rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-md border-white/10 shadow-xs shadow-black/20' : ''}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center flex-1 gap-3 group">
          <span className="text-white font-bold -mb-2 text-4xl tracking-tight">
            ZHC<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-1 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                link.label === 'ZHC' ? 'text-3xl pb-0' : 'text-sm pb-1'
              } ${
                location.pathname === link.to
                  ? 'text-white bg-[#fff]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                isMoreActive
                  ? 'text-white bg-[#fff]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              More
              <svg
                className={`w-3 h-3 transition-transform -mt-1 duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-white/10 py-2 shadow-xl"
                   style={{ background: '#1d232a', backdropFilter: 'blur(20px)' }}>
                {moreLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      location.pathname === link.to
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
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
            className="btn btn-md pt-1 bg-transparent text-white font-semibold border border-white/30 rounded-lg px-6 text-base relative overflow-hidden transition-colors duration-500 hover:text-black hover:border-white group"
            style={{ isolation: 'isolate' }}
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
            Connect Wallet
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-white/5 px-6 py-4 space-y-1"
             style={{ background: '#1d232a', backdropFilter: 'blur(20px)' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? 'text-white bg-[#141E30]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/5 mt-2 pt-2">
            <span className="block px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">More</span>
            {moreLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'text-white bg-[#141E30]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
