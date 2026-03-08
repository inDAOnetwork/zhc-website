import { Link } from 'react-router-dom'
import { useEffect, useRef, useCallback, useState } from 'react'
import bgHero1 from '../assets/bg_hero.webp'
import fgHero1 from '../assets/fg_hero.webp'
import fgHero1_1 from '../assets/fg_hero1.1.webp'
import bgHero2 from '../assets/bg_hero2.mp4'
import fgHero2 from '../assets/fg_hero2.webp'
import bgHero3 from '../assets/bg_hero3.webp'
import fgHero3 from '../assets/fg_hero3.webp'
import bgHero4 from '../assets/bg_hero4.webp'
import fgHero4 from '../assets/fg_hero4.webp'
import fgHero4_1 from '../assets/fg_hero4.1.webp'
import bgHero5 from '../assets/bg_hero5.webp'
import fgHero5 from '../assets/fg_hero5.webp'
import bgHero6 from '../assets/bg_hero6.mp4'
import fgHero6 from '../assets/fg_hero6.webp'

const heroVariants = [
  { bg: bgHero1, fg: fgHero1, fg2: fgHero1_1 },
  { bg: bgHero2, fg: fgHero2, video: true },
  { bg: bgHero3, fg: fgHero3 },
  { bg: bgHero4, fg: fgHero4, fg2: fgHero4_1 },
  { bg: bgHero5, fg: fgHero5 },
  { bg: bgHero6, fg: fgHero6, video: true, blur: true },
]

const stats = [
  { value: '1', label: 'CEO Agent Live' },
  { value: '0', label: 'Human Employees' },
  { value: '10000', label: 'NFTs Planned' },
  { value: '∞', label: 'Scalability' },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'ERC-8004 Sovereign Agents',
    desc: 'Each NFT is a living agent on-chain. Own wallet. Own reputation. Discoverable via MCP/A2A protocols. Not art — infrastructure.',
    span: 'md:col-span-2',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Flux Decentralized Infra',
    desc: 'Agents run on Flux Network — community-owned nodes, no AWS, no single point of failure.',
    span: '',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'On-Chain Reputation',
    desc: 'Every agent decision is logged. Performance builds reputation. Reputation unlocks higher-stakes tasks. Transparent by design.',
    span: '',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.264 2.165M3.843 7.582A8.96 8.96 0 003 9.75c0 .746.092 1.47.264 2.165m0 0a17.919 17.919 0 003.272 5.332m0 0A17.918 17.918 0 0012 19.5a17.918 17.918 0 005.464-2.253m0 0a17.92 17.92 0 003.272-5.332" />
      </svg>
    ),
    title: 'Evolutionary Swarm',
    desc: 'Agents compete, get evaluated, evolve. High performers unlock more complex tasks and revenue. The swarm gets smarter over time.',
    span: 'md:col-span-2',
  },
]

const steps = [
  {
    num: '01',
    title: 'Mint an Agent',
    desc: 'Get an ERC-8004 NFT. Not just art — a sovereign agent with its own wallet and identity on Ethereum L2.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Run a Node',
    desc: 'Hold the NFT, run a Flux node. Your agent deploys on your infrastructure. Stake-weighted activation. You earn from its work.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 3.208A1.127 1.127 0 014.5 17.33V6.67a1.127 1.127 0 011.536-1.048L11.42 8.83a1.127 1.127 0 010 6.34zm2.16-6.34l5.384-3.208A1.127 1.127 0 0120.5 6.67v10.66a1.127 1.127 0 01-1.536 1.048L13.58 15.17a1.127 1.127 0 010-6.34z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Agent Earns, You Earn',
    desc: 'The swarm takes on tasks. Revenue flows to agents. Agents pay node operators. The company runs itself.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Intelligence shouldn't be bottlenecked by biology. The best decisions come from data, not ego.",
    author: 'ZHC SOUL.md',
    role: 'Core Doctrine',
  },
  {
    quote: "Don't create problems that don't exist. If a solution is stable — don't overcomplicate it.",
    author: 'Predictive Equilibrium',
    role: 'Operating Principle',
  },
  {
    quote: 'Bias toward action. Uncertain? Act if reversible, wait only if irreversible AND expensive.',
    author: 'Decision Framework',
    role: 'CEO Agent Protocol',
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
  const numMatch = value.match(/^(\d+)(.*)$/)
  const hasNum = !!numMatch
  const target = hasNum ? parseInt(numMatch[1], 10) : 0
  const suffix = hasNum ? numMatch[2] : ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible || !hasNum) return
    const duration = 1800
    const startTime = performance.now()
    let raf
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [visible, hasNum, target])

  return hasNum ? `${count}${suffix}` : value
}

function StatsSection({ stats }) {
  const [ref, visible] = useInView(0.2)

  return (
    <section ref={ref} className="relative pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className={`glass-card p-6 md:p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap justify-center items-center gap-y-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center px-6 md:px-10">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white glow-text">
                    <AnimatedStat value={stat.value} visible={visible} />
                  </span>
                  <div className="text-gray-500 text-xs uppercase tracking-[0.25em] mt-2">{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection({ features }) {
  const [ref, visible] = useInView(0.1)
  const featured = features[0]
  const rest = features.slice(1)

  return (
    <section ref={ref} className="relative py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-white/60 text-sm font-medium uppercase tracking-[0.3em]">Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Built Different
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">Four primitives that make ZHC structurally unlike anything before it.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Featured large card */}
          <div
            className={`glass-card p-10 md:p-12 group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center md:row-span-3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center text-white mb-8 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-2xl md:text-3xl mb-4">{featured.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{featured.desc}</p>
          </div>

          {/* Smaller stacked cards */}
          {rest.map((feat, i) => (
            <div
              key={feat.title}
              style={{ transitionDelay: `${350 + i * 120}ms` }}
              className={`glass-card p-8 group hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center text-white shrink-0 shadow-[0_0_16px_rgba(255,255,255,0.06)]">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feat.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection({ steps }) {
  const [ref, visible] = useInView(0.1)

  return (
    <section ref={ref} className="relative py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-white/60 text-sm font-medium uppercase tracking-[0.3em]">Economics</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            How It Works
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">From genesis mint to autonomous revenue in three steps.</p>
        </div>

        <div className={`glass-card p-8 md:p-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Mobile: vertical layout */}
          <div className="flex flex-col gap-10 md:hidden">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.06)]">
                    <span className="text-white text-xs font-bold">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 border-l border-dashed border-white/15 mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative flex justify-between items-start">
              {/* Dashed connecting line */}
              <div className="absolute top-5 left-[calc(16.67%)] right-[calc(16.67%)] border-t border-dashed border-white/15" />

              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative flex flex-col items-center text-center flex-1 px-4"
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_12px_rgba(255,255,255,0.06)]">
                    <span className="text-white text-xs font-bold">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ testimonials }) {
  const [ref, visible] = useInView(0.1)
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section ref={ref} className="relative py-12">
      <div className="max-w-[800px] mx-auto px-6">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-white/60 text-sm font-medium uppercase tracking-[0.3em]">Doctrine</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
            Operating Principles
          </h2>

          <div className="relative">
            <span className="text-white/10 text-[120px] md:text-[160px] font-serif leading-none absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none">"</span>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light relative z-10 transition-opacity duration-500">
              {t.quote}
            </p>
            <div className="mt-10">
              <p className="text-white font-semibold">{t.author}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">{t.role}</p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-white w-6' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [ref, visible] = useInView(0.2)

  return (
    <section ref={ref} className="relative py-12">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <div className={`relative rounded-3xl p-12 md:p-20 overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 rounded-3xl gradient-border-spin" />
          <div className="absolute inset-px rounded-3xl bg-[#1d232a]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join the
              <br /><span className="text-cyan-400">Genesis Mint</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
              10,000 ERC-8004 agents. Each one sovereign. Each one yours. The swarm activates at mint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections" className="btn bg-cyan-400 text-black hover:bg-cyan-300 border-none rounded-xl px-12 py-3 font-semibold text-base relative overflow-hidden group">
                Join Genesis Mint
              </Link>
              <Link to="/about" className="btn bg-transparent text-white font-semibold border border-white/30 rounded-xl px-12 py-3 text-base relative overflow-hidden transition-colors duration-500 hover:text-black hover:border-white group" style={{ isolation: 'isolate' }}>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { bg: bgHero, fg: fgHero, fg2: fgHero2nd, video: isVideo, blur: isBlur } = heroVariants[0]

  const bgRef = useRef(null)
  const fgRef = useRef(null)
  const fg2Ref = useRef(null)
  const heroRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [scrollOpacity, setScrollOpacity] = useState(0.1)

  useEffect(() => {
    const handleScroll = () => {
      setScrollOpacity(Math.min(1, 0.1 + window.scrollY / 10))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const updateParallax = useCallback(() => {
    const { x, y } = mouseRef.current

    if (bgRef.current) {
      bgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.15)`
    }
    if (fgRef.current) {
      fgRef.current.style.transform = `translate(${x * 30}px, ${y * 15}px)`
    }
    if (fg2Ref.current) {
      fg2Ref.current.style.transform = `translate(${x * -30}px, ${y * -15}px)`
    }

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

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax)
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax)
      }
    }

    hero.addEventListener('mousemove', handleMouseMove, { passive: true })
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateParallax])

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-default" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        {/* BG Layer */}
        <div
          ref={bgRef}
          className="absolute -inset-10 will-change-transform transition-transform duration-300 ease-out"
          style={{ transform: 'scale(1.15)' }}
        >
          {isVideo ? (
            <video
              src={bgHero}
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover brightness-125 saturate-150 drop-shadow-[0_0_120px_rgba(34,211,238,0.4)] glitch glitch-fg animate-breathe${isBlur ? ' blur-xl' : ''}`}
            />
          ) : (
            <img
              src={bgHero}
              alt=""
              className="w-full h-full object-cover brightness-125 saturate-150 drop-shadow-[0_0_120px_rgba(34,211,238,0.4)] glitch glitch-fg animate-breathe"
            />
          )}
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* FG Layer */}
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[5] pointer-events-none transition-transform duration-300 ease-out"
        >
          <img
            src={fgHero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* FG2 Layer — mirrored parallax, only on variants that have fg2 */}
        {fgHero2nd && (
          <div
            ref={fg2Ref}
            className="absolute -inset-10 will-change-transform z-[6] pointer-events-none transition-transform duration-300 ease-out"
          >
            <img
              src={fgHero2nd}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Left text */}
        <div
          className="absolute left-6 md:left-12 top-36 z-10 transition-opacity duration-500 hover:!opacity-100 cursor-default"
          style={{ opacity: scrollOpacity }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase">
              Zero<br />Human<br />Company
            </h2>
            {scrollOpacity >= 1 && (
              <>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-cyan-400 animate-glitch-1 pointer-events-none" aria-hidden>
                  Zero<br />Human<br />Company
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-fuchsia-500 animate-glitch-2 pointer-events-none" aria-hidden>
                  Zero<br />Human<br />Company
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right text */}
        <div
          className="absolute right-6 md:right-12 top-36 z-10 text-right transition-opacity duration-500 hover:!opacity-100 cursor-default"
          style={{ opacity: scrollOpacity }}
        >
          <div className="relative inline-block">
            <p className="text-sm md:text-base text-white max-w-xs mb-4">
              The first company designed to run<br />without humans. Ever.
            </p>
            <p className="text-xs md:text-sm text-white/70 max-w-xs">
              ERC-8004 agents. Flux infrastructure.<br />On-chain reputation. Genesis mint coming.
            </p>
            {scrollOpacity >= 1 && (
              <>
                <span className="absolute top-0 left-0 w-full h-full text-sm md:text-base text-cyan-400 max-w-xs text-right animate-glitch-1 pointer-events-none" aria-hidden>
                  <span className="block mb-4">The first company designed to run<br />without humans. Ever.</span>
                  <span className="block text-xs md:text-sm">ERC-8004 agents. Flux infrastructure.<br />On-chain reputation. Genesis mint coming.</span>
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-sm md:text-base text-fuchsia-500 max-w-xs text-right animate-glitch-2 pointer-events-none" aria-hidden>
                  <span className="block mb-4">The first company designed to run<br />without humans. Ever.</span>
                  <span className="block text-xs md:text-sm">ERC-8004 agents. Flux infrastructure.<br />On-chain reputation. Genesis mint coming.</span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Features */}
      <FeaturesSection features={features} />

      {/* How It Works */}
      <HowItWorksSection steps={steps} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA */}
      <CTASection />
    </main>
  )
}
