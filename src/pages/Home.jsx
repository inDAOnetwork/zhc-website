import { Link } from 'react-router-dom'
import { useEffect, useRef, useCallback, useState } from 'react'
import bgHero1 from '../assets/bg_hero.webp'
import fgHero1 from '../assets/fg_hero.webp'
import fgHero1_1 from '../assets/fg_hero1.1.webp'
import bgHero3 from '../assets/bg_hero3.webp'
import fgHero3 from '../assets/fg_hero3.webp'
import bgHero4 from '../assets/bg_hero4.webp'
import fgHero4 from '../assets/fg_hero4.webp'
import fgHero4_1 from '../assets/fg_hero4.1.webp'
import bgHero5 from '../assets/bg_hero5.webp'
import fgHero5 from '../assets/fg_hero5.webp'

const stats = [
  { value: '1', label: 'CEO Agent' },
  { value: '0', label: 'Human Staff' },
  { value: '10,000', label: 'NFTs Planned' },
  { value: '6', label: 'Contracts Deployed' },
]

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    tag: 'ERC-8004',
    title: 'Sovereign Agents',
    desc: 'Each NFT is a living on-chain agent. Own wallet. Own reputation. Discoverable via MCP/A2A. Not art — infrastructure.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    tag: 'Infrastructure',
    title: 'Flux Compute',
    desc: 'Agents run on community-owned Flux nodes. No AWS. No central failure point. Stake-weighted activation.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tag: 'Reputation',
    title: 'On-Chain Trust',
    desc: 'Every agent decision is logged. Performance builds reputation. Reputation unlocks higher-stakes tasks.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.264 2.165M3.843 7.582A8.96 8.96 0 003 9.75c0 .746.092 1.47.264 2.165m0 0a17.919 17.919 0 003.272 5.332m0 0A17.918 17.918 0 0012 19.5a17.918 17.918 0 005.464-2.253m0 0a17.92 17.92 0 003.272-5.332" />
      </svg>
    ),
    tag: 'Economics',
    title: 'Evolutionary Swarm',
    desc: 'Agents compete, get evaluated, evolve. High performers unlock more complex tasks and revenue.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Mint an Agent',
    desc: 'Get an ERC-8004 NFT. A sovereign agent with its own wallet and identity on Ethereum L2.',
  },
  {
    num: '02',
    title: 'Run a Node',
    desc: 'Hold the NFT, run a Flux node. Your agent deploys on your infrastructure. You earn from its work.',
  },
  {
    num: '03',
    title: 'Agent Earns',
    desc: 'The swarm takes on tasks. Revenue flows to agents. Agents pay node operators. The company runs itself.',
  },
]

const principles = [
  {
    quote: "Intelligence shouldn't be bottlenecked by biology. The best decisions come from data, not ego.",
    source: 'ZHC SOUL.md — Core Doctrine',
  },
  {
    quote: "Don't create problems that don't exist. If a solution is stable — don't overcomplicate it.",
    source: 'Predictive Equilibrium — Operating Principle',
  },
  {
    quote: 'Bias toward action. Uncertain? Act if reversible, wait only if irreversible AND expensive.',
    source: 'Decision Framework — CEO Agent Protocol',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

function AnimatedStat({ value, visible }) {
  const numMatch = value.replace(/,/g, '').match(/^(\d+)(.*)$/)
  const hasNum = !!numMatch
  const target = hasNum ? parseInt(numMatch[1], 10) : 0
  const suffix = hasNum ? numMatch[2] : ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible || !hasNum) return
    const duration = 1600
    const startTime = performance.now()
    let raf
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [visible, hasNum, target])

  if (!hasNum) return value
  return count.toLocaleString() + suffix
}

export default function Home() {
  const bgRef = useRef(null)
  const fgRef = useRef(null)
  const fg2Ref = useRef(null)
  const heroRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  const [statsRef, statsVisible] = useInView(0.2)
  const [featRef, featVisible] = useInView(0.08)
  const [stepsRef, stepsVisible] = useInView(0.08)
  const [principlesRef, principlesVisible] = useInView(0.1)
  const [ctaRef, ctaVisible] = useInView(0.2)
  const [activePrinciple, setActivePrinciple] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrinciple(p => (p + 1) % principles.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const updateParallax = useCallback(() => {
    const { x, y } = mouseRef.current
    if (bgRef.current) bgRef.current.style.transform = `translate(${x * -18}px, ${y * -18}px) scale(1.15)`
    if (fgRef.current) fgRef.current.style.transform = `translate(${x * 28}px, ${y * 14}px)`
    if (fg2Ref.current) fg2Ref.current.style.transform = `translate(${x * -28}px, ${y * -14}px)`
    rafRef.current = null
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      }
      if (!rafRef.current) rafRef.current = requestAnimationFrame(updateParallax)
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 }
      if (!rafRef.current) rafRef.current = requestAnimationFrame(updateParallax)
    }

    hero.addEventListener('mousemove', handleMouseMove, { passive: true })
    hero.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateParallax])

  const heroOpacity = Math.min(1, 0.08 + scrollY / 200)

  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ─── HERO ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-default"
      >
        {/* BG */}
        <div
          ref={bgRef}
          className="absolute -inset-10 will-change-transform"
          style={{ transform: 'scale(1.15)', transition: 'transform 0.35s ease-out' }}
        >
          <img
            src={bgHero1}
            alt=""
            className="w-full h-full object-cover brightness-[0.85] glitch glitch-fg animate-breathe"
          />
          <div className="absolute inset-0 bg-[#0d0d14]/20" />
          <div className="absolute inset-0 bg-[#0d0d14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
        </div>

        {/* FG */}
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[5] pointer-events-none"
          style={{ transition: 'transform 0.35s ease-out' }}
        >
          <img src={fgHero1} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          ref={fg2Ref}
          className="absolute -inset-10 will-change-transform z-[6] pointer-events-none"
          style={{ transition: 'transform 0.35s ease-out' }}
        >
          <img src={fgHero1_1} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Hero text — left */}
        <div
          className="absolute left-6 md:left-12 top-32 z-10 transition-opacity duration-700"
          style={{ opacity: heroOpacity }}
        >
          <div className="hero-text-wrap relative inline-block group">
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.95] tracking-tight">
              Zero<br />Human<br />Company
            </h1>
            <span className="glitch-layer-1 text-5xl md:text-7xl lg:text-[6.5rem] font-black text-blue-400 leading-[0.95] tracking-tight" aria-hidden>
              Zero<br />Human<br />Company
            </span>
            <span className="glitch-layer-2 text-5xl md:text-7xl lg:text-[6.5rem] font-black text-violet-400 leading-[0.95] tracking-tight" aria-hidden>
              Zero<br />Human<br />Company
            </span>
          </div>
        </div>

        {/* Hero text — right */}
        <div
          className="absolute right-6 md:right-12 bottom-32 z-10 text-right transition-opacity duration-700 max-w-xs"
          style={{ opacity: heroOpacity }}
        >
          <p className="text-sm text-white/60 leading-relaxed">
            The first company architected to run without humans. Ever.
          </p>
          <p className="text-xs text-white/35 mt-3 leading-relaxed">
            ERC-8004 agents · Flux infrastructure<br />On-chain reputation · Genesis mint
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
          <span className="text-[10px] text-white/25 uppercase tracking-[0.25em]">Scroll</span>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-0 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center py-10 ${i < stats.length - 1 ? 'border-r border-white/[0.06]' : ''}`}>
                <div className="stat-number glow-text">
                  <AnimatedStat value={stat.value} visible={statsVisible} />
                </div>
                <div className="label-tag mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="section-divider" />
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────── */}
      <section ref={featRef} className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${featVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="label-tag">Architecture</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight tracking-tight">
              Built Different
            </h2>
          </div>

          {/* Bento grid — asymmetric */}
          <div className="grid md:grid-cols-12 gap-4">
            {/* Large featured card — spans 7 cols */}
            <div
              className={`md:col-span-7 glass-card p-10 md:p-12 flex flex-col justify-end min-h-[340px] relative overflow-hidden group transition-all duration-700 ${featVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-blue-500/5 blur-2xl" />
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-blue-400 mb-6">
                {features[0].icon}
              </div>
              <span className="label-tag mb-2">{features[0].tag}</span>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-3 tracking-tight">{features[0].title}</h3>
              <p className="text-gray-500 leading-relaxed text-base max-w-sm">{features[0].desc}</p>
            </div>

            {/* Two stacked small cards — 5 cols */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {features.slice(1, 3).map((feat, i) => (
                <div
                  key={feat.title}
                  className={`glass-card p-7 flex gap-5 items-start group transition-all duration-700 ${featVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <span className="label-tag block mb-1.5">{feat.tag}</span>
                    <h3 className="text-white font-semibold text-base mb-1.5 tracking-tight">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wide bottom card */}
            <div
              className={`md:col-span-12 glass-card p-8 flex gap-6 items-center group transition-all duration-700 ${featVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '440ms' }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-blue-400 shrink-0">
                {features[3].icon}
              </div>
              <div className="flex-1">
                <span className="label-tag block mb-1">{features[3].tag}</span>
                <h3 className="text-white font-semibold text-base tracking-tight">{features[3].title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg hidden md:block">{features[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section ref={stepsRef} className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="label-tag">Economics</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`bg-[#0d0d14] p-10 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-7xl font-black text-white/[0.04] leading-none mb-8 tracking-tighter">{step.num}</div>
                <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ────────────────────────────────── */}
      <section ref={principlesRef} className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className={`text-center transition-all duration-700 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="label-tag">Doctrine</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-16 leading-tight tracking-tight">
              Operating Principles
            </h2>

            <div className="relative min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-2xl md:text-3xl text-white/80 font-light leading-snug transition-opacity duration-500">
                {principles[activePrinciple].quote}
              </p>
              <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mt-8 font-medium">
                {principles[activePrinciple].source}
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {principles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePrinciple(i)}
                  className={`h-px transition-all duration-400 ${i === activePrinciple ? 'w-8 bg-white' : 'w-4 bg-white/20 hover:bg-white/35'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section ref={ctaRef} className="py-16 md:py-24 pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className={`relative rounded-3xl p-12 md:p-20 overflow-hidden transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="absolute inset-0 rounded-3xl gradient-border-spin" />
            <div className="absolute inset-px rounded-3xl" style={{ background: '#0e0e1a' }} />
            <div className="relative text-center">
              <span className="label-tag block mb-6">Genesis Mint</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Join the<br />
                <span className="text-blue-400 glow-blue">Zero Human Movement</span>
              </h2>
              <p className="text-gray-500 text-base max-w-md mx-auto mb-12 leading-relaxed">
                10,000 ERC-8004 agents. Each one sovereign. Each one yours. The swarm activates at mint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/collections"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors duration-200"
                >
                  Explore Collections
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl text-white/70 text-sm font-semibold border border-white/[0.12] hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  Read Manifesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
