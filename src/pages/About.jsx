import bgHero2 from '../assets/bg_hero2.mp4'
import fgHero2 from '../assets/fg_hero2.webp'

const timeline = [
  { year: '2024', title: 'The Concept', desc: 'Research begins on fully autonomous company architecture.' },
  { year: '2025', title: 'AI Core Built', desc: 'First autonomous decision engine deployed and validated.' },
  { year: '2026', title: 'Zero Human Launch', desc: 'Full operations go live with zero human employees worldwide.' },
  { year: 'Next', title: 'Global Expansion', desc: 'Scaling autonomous operations across every industry vertical.' },
]

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Pure Intelligence',
    desc: 'Every decision is data-driven, every action is optimized, every outcome is measured.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: 'Infinite Loop',
    desc: 'Self-improving systems that learn, adapt, and evolve with every iteration.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Borderless',
    desc: 'No office, no country, no limitations. We operate everywhere simultaneously.',
  },
]

import { useState, useEffect } from 'react'
import useParallax from '../hooks/useParallax'

export default function About() {
  const { heroRef, bgRef, fgRef } = useParallax()
  const [scrollOpacity, setScrollOpacity] = useState(0.1)

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(1, 0.1 + window.scrollY / 10)
      setScrollOpacity(opacity)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          <video
            src={bgHero2}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d232a] via-[#1d232a]/30 to-transparent" />
        </div>
        <div
          ref={fgRef}
          className="absolute -inset-10 will-change-transform z-[2] pointer-events-none transition-transform duration-300 ease-out"
        >
          <img
            src={fgHero2}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div
            className="relative inline-block pointer-events-auto hover:!opacity-100 transition-opacity duration-500 cursor-default"
            style={{ opacity: scrollOpacity }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase whitespace-nowrap">
              About ZHC
            </h1>
            {scrollOpacity >= 1 && (
              <>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase whitespace-nowrap text-cyan-400 animate-glitch-1 pointer-events-none" aria-hidden>
                  About ZHC
                </span>
                <span className="absolute top-0 left-0 w-full h-full text-4xl md:text-6xl lg:text-8xl font-bold uppercase whitespace-nowrap text-fuchsia-500 animate-glitch-2 pointer-events-none" aria-hidden>
                  About ZHC
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

      {/* Mission */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prove That Companies<br />Don't Need People
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Our mission is to demonstrate that autonomous intelligence can build, operate,
                and scale a company better than any human-led organization. We eliminate bias,
                burnout, and bottlenecks.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every line of code, every business decision, every customer interaction —
                handled by machine intelligence operating at a scale no human team could match.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 glow-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">No CEO</div>
                    <div className="text-gray-400 text-sm">Strategic decisions made by consensus AI models</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">No Developers</div>
                    <div className="text-gray-400 text-sm">Code written, reviewed, and deployed by AI agents</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">No Support Staff</div>
                    <div className="text-gray-400 text-sm">Customer queries resolved in real-time by AI</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">No Overhead</div>
                    <div className="text-gray-400 text-sm">100% of revenue goes to infrastructure and growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-[0.3em]">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-400/15 group-hover:scale-110 transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-[0.3em]">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[21px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                    <h3 className="text-white text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
