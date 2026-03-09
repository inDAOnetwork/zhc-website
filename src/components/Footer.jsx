import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-white font-bold text-xl">ZHC<span className="text-cyan-400">.</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully autonomous AI infrastructure for the next era.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Technology', 'Ecosystem', 'Contact'].map(page => (
                <Link key={page} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                      className="block text-gray-400 hover:text-white text-sm transition-colors">
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <div className="space-y-3">
              {['Documentation', 'API Reference', 'Status', 'Changelog'].map(item => (
                <span key={item} className="block text-gray-400 text-sm cursor-default">{item}</span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Community</h4>
            <div className="space-y-3">
              <span className="block text-gray-400 text-sm cursor-default">Twitter / X</span>
              <span className="block text-gray-400 text-sm cursor-default">Discord</span>
              <a href="https://github.com/clawtomato-code/ZHC" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block text-gray-400 hover:text-white text-sm transition-colors">
                GitHub
              </a>
              <span className="block text-gray-400 text-sm cursor-default">Telegram</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2026 Zero Human Company</p>
          <div className="flex gap-6">
            <span className="text-gray-400 text-sm hover:text-gray-400 cursor-pointer transition-colors">Privacy</span>
            <span className="text-gray-400 text-sm hover:text-gray-400 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
