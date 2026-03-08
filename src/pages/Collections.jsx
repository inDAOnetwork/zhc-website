import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import useParallax from '../hooks/useParallax'
import bgHero3 from '../assets/bg_hero3.webp'
import fgHero3 from '../assets/fg_hero3.webp'
import col1 from '../assets/collections/IMG_1864.webp'
import col2 from '../assets/collections/IMG_2367.webp'
import col3 from '../assets/collections/IMG_2368.webp'
import col4 from '../assets/collections/IMG_2369.webp'
import col5 from '../assets/collections/IMG_2371.webp'
import col6 from '../assets/collections/IMG_2372.webp'

const collections = [
  {
    name: 'Genesis Agents',
    items: '1,000',
    status: 'Live',
    desc: 'The founding collection. 1,000 unique autonomous AI agents with on-chain intelligence and self-evolving traits.',
    tag: 'OG',
    image: col1,
  },
  {
    name: 'Neural Relics',
    items: '5,000',
    status: 'Live',
    desc: 'Artifacts from the first autonomous operations. Each relic carries embedded neural patterns and utility access.',
    tag: 'Utility',
    image: col2,
  },
  {
    name: 'Phantom Nodes',
    items: '3,333',
    status: 'Live',
    desc: 'Decentralized node passes granting governance power, staking boosts, and priority access to new deployments.',
    tag: 'Governance',
    image: col3,
  },
  {
    name: 'Zero Portraits',
    items: '10,000',
    status: 'Coming Soon',
    desc: 'AI-generated identity collection. Each portrait is a unique digital identity within the Zero Human network.',
    tag: 'Identity',
    image: col4,
  },
  {
    name: 'Swarm Keys',
    items: '777',
    status: 'Coming Soon',
    desc: 'Ultra-rare keys that unlock swarm intelligence protocols. Holders gain access to collective AI compute pools.',
    tag: 'Rare',
    image: col5,
  },
  {
    name: 'Epoch Passes',
    items: '2,500',
    status: 'Coming Soon',
    desc: 'Season-based access passes. Each epoch unlocks new agent capabilities, airdrops, and exclusive network features.',
    tag: 'Season',
    image: col6,
  },
]

const stats = [
  { value: '22.8K', label: 'Total Items' },
  { value: '4.2K', label: 'Holders' },
  { value: '1,280', label: 'ETH Volume' },
  { value: '6', label: 'Collections' },
]

export default function Collections() {
  const { heroRef, bgRef, fgRef, setParallaxPaused } = useParallax()
  const [scrollOpacity, setScrollOpacity] = useState(0.1)
  const [cards, setCards] = useState(collections.map((_, i) => i))
  const topCardRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startY: 0, x: 0, y: 0, locked: false })

  useEffect(() => {
    const handleScroll = () => {
      setScrollOpacity(Math.min(1, 0.1 + window.scrollY / 10))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onPointerDown = useCallback((e) => {
    if (drag.current.locked) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { active: true, startX: e.clientX, startY: e.clientY, x: 0, y: 0, locked: false }
  }, [])

  const onPointerMove = useCallback((e) => {
    const d = drag.current
    if (!d.active) return
    d.x = e.clientX - d.startX
    d.y = e.clientY - d.startY
    const el = topCardRef.current
    if (el) {
      el.style.transition = 'none'
      el.style.transform = `translate3d(${d.x}px,${d.y * 0.4}px,0) rotate(${d.x * 0.08}deg) scale(1)`
    }
  }, [])

  const onPointerUp = useCallback(() => {
    const d = drag.current
    if (!d.active) return
    d.active = false
    const el = topCardRef.current
    if (!el) return

    if (Math.abs(d.x) > 80) {
      d.locked = true
      const flyX = d.x > 0 ? 800 : -800
      const flyRot = d.x > 0 ? 35 : -35
      el.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'
      el.style.transform = `translate3d(${flyX}px,${d.y * 0.4}px,0) rotate(${flyRot}deg) scale(1)`
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.transition = 'none'
        el.style.transform = ''
        el.style.opacity = ''
        setCards(prev => [...prev.slice(1), prev[0]])
        d.locked = false
      }, 300)
    } else {
      el.style.transition = 'transform 0.3s cubic-bezier(0.2,1,0.3,1)'
      el.style.transform = 'translate3d(0,0,0) rotate(0deg) scale(1)'
    }
  }, [])

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-default" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        <div
          ref={bgRef}
          className="absolute -inset-10 will-change-transform transition-transform duration-300 ease-out"
          style={{ transform: 'scale(1.15)' }}
        >
          <img
            src={bgHero3}
            alt=""
            className="w-full h-full object-cover brightness-125 saturate-150 drop-shadow-[0_0_120px_rgba(34,211,238,0.4)] glitch glitch-fg animate-breathe"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d232a] via-[#1d232a]/30 to-transparent" />
        </div>
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[2] pointer-events-none transition-transform duration-300 ease-out"
        >
          <img
            src={fgHero3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute left-6 md:left-12 top-36 z-10 transition-opacity duration-500 hover:!opacity-100 cursor-default"
          style={{ opacity: scrollOpacity }}
        >
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase">
              Collections
            </h1>
            {scrollOpacity >= 1 && (
              <>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-cyan-400 animate-glitch-1 pointer-events-none" aria-hidden>
                  Collections
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-fuchsia-500 animate-glitch-2 pointer-events-none" aria-hidden>
                  Collections
                </span>
              </>
            )}
          </div>
        </div>

        {/* Stacked NFT Cards — grab to swipe */}
        <div className="absolute bottom-12 left-6 md:left-12 z-10 hidden md:block" onMouseEnter={() => setParallaxPaused(true)} onMouseLeave={() => setParallaxPaused(false)}>
          <div className="relative w-[320px] h-[380px] lg:w-[360px] lg:h-[420px]">
            {cards.slice(0, 3).map((cardIdx, stackPos) => {
              const c = collections[cardIdx]
              const isTop = stackPos === 0

              return (
                <div
                  key={c.name}
                  ref={isTop ? topCardRef : undefined}
                  className={`absolute inset-0 rounded-2xl select-none touch-none
                    ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}
                  `}
                  style={{
                    transform: isTop
                      ? 'translate3d(0,0,0) rotate(0deg) scale(1)'
                      : `translate3d(0,${-stackPos * 18}px,0) rotate(${stackPos * 1.5}deg) scale(${1 - stackPos * 0.045})`,
                    zIndex: 3 - stackPos,
                    pointerEvents: isTop ? 'auto' : 'none',
                    willChange: isTop ? 'transform' : 'auto',
                    transition: isTop ? 'none' : 'transform 0.4s ease',
                  }}
                  onPointerDown={isTop ? onPointerDown : undefined}
                  onPointerMove={isTop ? onPointerMove : undefined}
                  onPointerUp={isTop ? onPointerUp : undefined}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white glow-text">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections grid */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map(c => (
              <div key={c.name} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                {/* Collection image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border ${
                      c.status === 'Live'
                        ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
                        : 'text-gray-400 border-white/[0.08] bg-white/[0.04]'
                    }`}>
                      {c.status}
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-400/20 text-cyan-400 bg-cyan-400/10">
                      {c.tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                    <span className="text-gray-400 text-sm">{c.items} items</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Collect the<br />
                <span className="text-cyan-400">Future</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Own a piece of the first autonomous ecosystem. Every asset is more than art — it's access, governance, and identity.
              </p>
              <Link to="/community" className="btn bg-cyan-400 text-black hover:bg-cyan-300 border-none rounded-xl px-12 py-3 font-semibold text-base">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
