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
import col7 from '../assets/collections/IMG_2373.webp'

const collections = [
  {
    name: 'Genesis Agents',
    items: '1,000',
    status: 'Live',
    desc: 'The founding collection. 1,000 unique autonomous AI agents with on-chain intelligence and self-evolving traits.',
    tag: 'OG',
    image: col1,
    size: 'tall', // editorial sizing hint
  },
  {
    name: 'Neural Relics',
    items: '5,000',
    status: 'Live',
    desc: 'Artifacts from the first autonomous operations. Each relic carries embedded neural patterns and utility access.',
    tag: 'Utility',
    image: col2,
    size: 'wide',
  },
  {
    name: 'Phantom Nodes',
    items: '3,333',
    status: 'Live',
    desc: 'Decentralized node passes granting governance power, staking boosts, and priority access to new deployments.',
    tag: 'Governance',
    image: col3,
    size: 'square',
  },
  {
    name: 'Zero Portraits',
    items: '10,000',
    status: 'Coming Soon',
    desc: 'AI-generated identity collection. Each portrait is a unique digital identity within the Zero Human network.',
    tag: 'Identity',
    image: col4,
    size: 'square',
  },
  {
    name: 'Swarm Keys',
    items: '777',
    status: 'Coming Soon',
    desc: 'Ultra-rare keys that unlock swarm intelligence protocols. Holders gain access to collective AI compute pools.',
    tag: 'Rare',
    image: col5,
    size: 'wide',
  },
  {
    name: 'Epoch Passes',
    items: '2,500',
    status: 'Coming Soon',
    desc: 'Season-based access passes. Each epoch unlocks new agent capabilities, airdrops, and exclusive network features.',
    tag: 'Season',
    image: col6,
    size: 'tall',
  },
]

const swipeImages = [col1, col2, col3, col4, col5, col6, col7]

const statsRow = [
  { value: '22.8K', label: 'Total Items' },
  { value: '4.2K', label: 'Holders' },
  { value: '1,280', label: 'ETH Volume' },
  { value: '6', label: 'Collections' },
]

export default function Collections() {
  const { heroRef, bgRef, fgRef, setParallaxPaused } = useParallax()
  const [scrollY, setScrollY] = useState(0)
  const [cardOrder, setCardOrder] = useState(swipeImages.map((_, i) => i))
  const topCardRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startY: 0, x: 0, y: 0, locked: false })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroOpacity = Math.min(1, 0.08 + scrollY / 200)

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
      el.style.transform = `translate3d(${d.x}px,${d.y * 0.4}px,0) rotate(${d.x * 0.07}deg)`
    }
  }, [])

  const onPointerUp = useCallback(() => {
    const d = drag.current
    if (!d.active) return
    d.active = false
    const el = topCardRef.current
    if (!el) return

    if (Math.abs(d.x) > 75) {
      d.locked = true
      const flyX = d.x > 0 ? 700 : -700
      const flyRot = d.x > 0 ? 30 : -30
      el.style.transition = 'transform 0.28s ease-out, opacity 0.28s ease-out'
      el.style.transform = `translate3d(${flyX}px,${d.y * 0.4}px,0) rotate(${flyRot}deg)`
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.transition = 'none'
        el.style.transform = ''
        el.style.opacity = ''
        setCardOrder(prev => [...prev.slice(1), prev[0]])
        d.locked = false
      }, 280)
    } else {
      el.style.transition = 'transform 0.3s cubic-bezier(0.2,1,0.3,1)'
      el.style.transform = 'translate3d(0,0,0) rotate(0deg)'
    }
  }, [])

  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ─── HERO ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-default"
      >
        <div
          ref={bgRef}
          className="absolute -inset-10 will-change-transform"
          style={{ transform: 'scale(1.15)', transition: 'transform 0.35s ease-out' }}
        >
          <img
            src={bgHero3}
            alt=""
            className="w-full h-full object-cover brightness-[0.75] glitch glitch-fg animate-breathe"
          />
          <div className="absolute inset-0 bg-[#0d0d14]/30" />
          <div className="absolute inset-0 bg-[#0d0d14]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
        </div>
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[2] pointer-events-none"
          style={{ transition: 'transform 0.35s ease-out' }}
        >
          <img src={fgHero3} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <div
          className="absolute left-6 md:left-12 top-32 z-10 transition-opacity duration-700"
          style={{ opacity: heroOpacity }}
        >
          <div className="hero-text-wrap relative inline-block group">
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.95] tracking-tight">
              Collections
            </h1>
            <span className="glitch-layer-1 text-5xl md:text-7xl lg:text-[6.5rem] font-black text-blue-400 leading-[0.95] tracking-tight" aria-hidden>
              Collections
            </span>
            <span className="glitch-layer-2 text-5xl md:text-7xl lg:text-[6.5rem] font-black text-violet-400 leading-[0.95] tracking-tight" aria-hidden>
              Collections
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed">
            Sovereign AI agents. Not art — infrastructure.
          </p>
        </div>

        {/* Swipe deck */}
        <div
          className="absolute bottom-12 left-6 md:left-12 z-10 hidden md:block"
          onMouseEnter={() => setParallaxPaused(true)}
          onMouseLeave={() => setParallaxPaused(false)}
        >
          <div className="relative w-[300px] h-[360px] lg:w-[340px] lg:h-[400px]">
            {cardOrder.slice(0, 3).map((cardIdx, stackPos) => {
              const isTop = stackPos === 0
              return (
                <div
                  key={cardIdx}
                  ref={isTop ? topCardRef : undefined}
                  className={`absolute inset-0 rounded-2xl select-none touch-none overflow-hidden ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  style={{
                    transform: isTop
                      ? 'translate3d(0,0,0) rotate(0deg)'
                      : `translate3d(0,${-stackPos * 16}px,0) rotate(${stackPos * 2}deg) scale(${1 - stackPos * 0.04})`,
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
                    src={swipeImages[cardIdx]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 border border-white/[0.08] rounded-2xl pointer-events-none" />
                  {isTop && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Drag to browse</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
          <span className="text-[10px] text-white/25 uppercase tracking-[0.25em]">Scroll</span>
        </div>
      </section>

      {/* ─── STATS ROW ─────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/[0.06] rounded-2xl overflow-hidden">
            {statsRow.map((s, i) => (
              <div key={s.label} className={`py-10 text-center ${i < statsRow.length - 1 ? 'border-r border-white/[0.06]' : ''}`}>
                <div className="stat-number glow-text">{s.value}</div>
                <div className="label-tag mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL GRID ────────────────────────────── */}
      <section className="py-12 md:py-20 pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="label-tag block mb-3">All Collections</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Six Collections</h2>
          </div>

          {/* Editorial asymmetric grid */}
          <div className="grid md:grid-cols-12 gap-4 auto-rows-[240px]">
            {/* Row 1: tall left + 2 stack right */}
            {/* Card 0 — tall (2 rows) */}
            <div className="md:col-span-5 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[0].image}
                alt={collections[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/30 to-transparent" />
              <CollectionOverlay c={collections[0]} />
            </div>

            {/* Card 1 — top right */}
            <div className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[1].image}
                alt={collections[1].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
              <CollectionOverlay c={collections[1]} />
            </div>

            {/* Card 2 — bottom right, split with card 3 */}
            <div className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[2].image}
                alt={collections[2].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
              <CollectionOverlay c={collections[2]} />
            </div>

            <div className="md:col-span-3 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[3].image}
                alt={collections[3].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
              <CollectionOverlay c={collections[3]} />
            </div>

            {/* Row 2: wide + tall right */}
            <div className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[4].image}
                alt={collections[4].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
              <CollectionOverlay c={collections[4]} />
            </div>

            <div className="md:col-span-5 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-default">
              <img
                src={collections[5].image}
                alt={collections[5].name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/30 to-transparent" />
              <CollectionOverlay c={collections[5]} />
            </div>

            {/* Bottom row left filler — email CTA */}
            <div className="md:col-span-7 glass-card flex flex-col justify-center px-10 py-8">
              <span className="label-tag block mb-3">Early Access</span>
              <p className="text-white/70 text-base font-light mb-6 leading-relaxed">
                Get notified when genesis collections drop.
              </p>
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CollectionOverlay({ c }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${
          c.status === 'Live'
            ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
            : 'text-white/30 border-white/[0.08] bg-white/[0.04]'
        }`}>
          {c.status}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400/70">{c.tag}</span>
      </div>
      <h3 className="text-white font-bold text-lg md:text-xl tracking-tight mb-1">{c.name}</h3>
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 max-w-xs">{c.desc}</p>
      <p className="text-white/25 text-[10px] uppercase tracking-[0.2em] mt-3">{c.items} items</p>
    </div>
  )
}

function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('Enter a valid email address')
      return
    }
    setLoading(true)
    setStatus('')
    await new Promise(r => setTimeout(r, 600))
    console.log('Waitlist signup:', { email, timestamp: new Date().toISOString() })
    setStatus('✓ Added to waitlist')
    setEmail('')
    setLoading(false)
    setTimeout(() => setStatus(''), 4000)
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/20 w-64"
        />
        <button
          onClick={submit}
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? '…' : 'Notify Me'}
        </button>
      </div>
      {status && (
        <p className={`mt-3 text-xs ${status.startsWith('✓') ? 'text-emerald-400' : 'text-red-400'}`}>{status}</p>
      )}
    </div>
  )
}
