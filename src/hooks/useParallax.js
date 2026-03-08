import { useRef, useCallback, useEffect } from 'react'

export default function useParallax() {
  const bgRef = useRef(null)
  const fgRef = useRef(null)
  const heroRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const pausedRef = useRef(false)

  const updateParallax = useCallback(() => {
    const { x, y } = mouseRef.current

    if (bgRef.current) {
      bgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.15)`
    }
    if (fgRef.current) {
      fgRef.current.style.transform = `translate(${x * 30}px, ${y * 15}px)`
    }

    rafRef.current = null
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e) => {
      if (pausedRef.current) return
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

  const setParallaxPaused = useCallback((val) => {
    pausedRef.current = val
  }, [])

  return { heroRef, bgRef, fgRef, setParallaxPaused }
}
