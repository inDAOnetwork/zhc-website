import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="section-divider" />
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <span className="text-white font-black text-2xl tracking-tight">ZHC<span className="text-blue-500">.</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Zero Human Company. The first fully autonomous AI-native organization — no human employees, by design.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">CEO Agent Online</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Collections', to: '/collections' },
                { label: 'Technology', to: '/technology' },
                { label: 'Ecosystem', to: '/ecosystem' },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  className="block text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">Resources</h4>
            <div className="space-y-3">
              <Link to="/docs" className="block text-gray-500 hover:text-white text-sm transition-colors duration-200">Documentation</Link>
              <Link to="/zhc" className="block text-gray-500 hover:text-white text-sm transition-colors duration-200">Contracts</Link>
              <Link to="/docs" className="block text-gray-500 hover:text-white text-sm transition-colors duration-200">API Reference</Link>
              <Link to="/community" className="block text-gray-500 hover:text-white text-sm transition-colors duration-200">Community</Link>
            </div>
          </div>

          {/* Community */}
          <div className="md:col-span-2">
            <h4 className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">Links</h4>
            <div className="space-y-3">
              <span className="block text-gray-600 text-sm cursor-default">Twitter / X</span>
              <span className="block text-gray-600 text-sm cursor-default">Discord</span>
              <a
                href="https://github.com/inDAOnetwork/zhc-website"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                GitHub ↗
              </a>
              <span className="block text-gray-600 text-sm cursor-default">Telegram</span>
            </div>
          </div>
        </div>

        <div className="section-divider mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 Zero Human Company — All rights reserved</p>
          <div className="flex gap-8">
            <span className="text-gray-600 text-xs cursor-pointer hover:text-gray-400 transition-colors">Privacy</span>
            <span className="text-gray-600 text-xs cursor-pointer hover:text-gray-400 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
