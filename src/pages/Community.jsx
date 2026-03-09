import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import bgHero6 from '../assets/bg_hero6.mp4'
import fgHero6 from '../assets/fg_hero6.webp'
import useParallax from '../hooks/useParallax'
import music from '../assets/music.mp3'

const socials = [
  { label: 'Discord', desc: 'Join real-time discussions with the community.', link: '#' },
  { label: 'Twitter / X', desc: 'Follow for updates, announcements, and threads.', link: '#' },
  { label: 'GitHub', desc: 'Contribute to open-source ZHC projects.', link: '#' },
  { label: 'Telegram', desc: 'Quick updates and community chat.', link: '#' },
]

const stats = [
  { value: '10K+', label: 'Community Members' },
  { value: '50+', label: 'Contributors' },
  { value: '24/7', label: 'Active Chat' },
  { value: '100+', label: 'Projects Built' },
]

export default function Community() {
  const { heroRef, bgRef, fgRef } = useParallax()
  const [scrollOpacity, setScrollOpacity] = useState(0.1)
  const [muted, setMuted] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollOpacity(Math.min(1, 0.1 + window.scrollY / 10))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.4
    audio.muted = true
    audio.play().catch(() => {})
    return () => { audio.pause(); audio.currentTime = 0 }
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    const next = !muted
    setMuted(next)
    audio.muted = next
    if (!next) audio.play().catch(() => {})
  }

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-default" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        <div
          ref={bgRef}
          className="absolute -inset-10 will-change-transform transition-transform duration-300 ease-out"
          style={{ transform: 'scale(1.15)' }}
        >
          <video
            src={bgHero6}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover blur-xl"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d232a] via-[#1d232a]/30 to-transparent" />
        </div>
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[2] pointer-events-none transition-transform duration-300 ease-out"
        >
          <img
            src={fgHero6}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div
          className="absolute right-6 md:right-12 top-36 z-10 text-right transition-opacity duration-500 hover:!opacity-100 cursor-default"
          style={{ opacity: scrollOpacity }}
        >
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase">
              Community
            </h1>
            {scrollOpacity >= 1 && (
              <>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-cyan-400 animate-glitch-1 pointer-events-none" aria-hidden>
                  Community
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-fuchsia-500 animate-glitch-2 pointer-events-none" aria-hidden>
                  Community
                </span>
              </>
            )}
          </div>
        </div>

        {/* Audio */}
        <audio ref={audioRef} src={music} loop muted={muted} />

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-10 right-6 md:right-12 z-10 w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.15a.75.75 0 011.28.53v13.62a.75.75 0 01-1.28.53L6.75 16.5H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.15a.75.75 0 011.28.53v13.62a.75.75 0 01-1.28.53L6.75 16.5H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="glass-card rounded-2xl p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-[0.3em]">Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Find Us Everywhere</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.link}
                className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{s.label}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl gradient-border-spin" />
            <div className="absolute inset-px rounded-3xl bg-[#1d232a]" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join?</h2>
              <p className="text-gray-400 text-lg mb-10">
                Be part of the movement building the world's first fully autonomous company.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
