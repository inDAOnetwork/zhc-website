import { useState, useEffect, useRef } from 'react'
import loadingVideo from '../assets/loading.mp4'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const displayRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    // Wait a frame so the page DOM is rendered (opacity-0) and assets start loading
    const timer = setTimeout(() => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const vids = Array.from(document.querySelectorAll('video'))
      const total = imgs.length + vids.length

      if (total === 0) {
        setProgress(100)
        setDone(true)
        return
      }

      let loaded = 0
      const check = () => {
        loaded++
        setProgress(Math.round((loaded / total) * 100))
        if (loaded >= total) setDone(true)
      }

      imgs.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
          check()
        } else {
          img.addEventListener('load', check, { once: true })
          img.addEventListener('error', check, { once: true })
        }
      })

      vids.forEach((vid) => {
        if (vid.readyState >= 3) {
          check()
        } else {
          vid.addEventListener('canplaythrough', check, { once: true })
          vid.addEventListener('error', check, { once: true })
        }
      })

      // Safety timeout — don't block forever
      const safetyTimeout = setTimeout(() => {
        setProgress(100)
        setDone(true)
      }, 8000)

      return () => clearTimeout(safetyTimeout)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  // Animate the displayed number smoothly
  useEffect(() => {
    const animate = () => {
      const diff = progress - displayRef.current
      if (Math.abs(diff) < 0.5) {
        displayRef.current = progress
      } else {
        displayRef.current += diff * 0.15
      }
      setDisplayNum(Math.round(displayRef.current))

      if (displayRef.current < progress) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [progress])

  const [displayNum, setDisplayNum] = useState(0)

  // Once done and display caught up, fade out
  useEffect(() => {
    if (done && displayNum >= 99) {
      setDisplayNum(100)
      const t = setTimeout(() => setFadeOut(true), 300)
      return () => clearTimeout(t)
    }
  }, [done, displayNum])

  // After fade-out animation, call onFinish
  useEffect(() => {
    if (fadeOut) {
      const t = setTimeout(onFinish, 600)
      return () => clearTimeout(t)
    }
  }, [fadeOut, onFinish])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <video
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        loop
        className="w-64 h-64 md:w-80 md:h-80 object-cover"
      />
    </div>
  )
}
