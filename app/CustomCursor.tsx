'use client'

import { useEffect, useState } from 'react'

export function SvgCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      setHover(target.classList.contains('cursor-hover'))
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed pointer-events-none z-50" 
      style={{ left: pos.x, top: pos.y }}>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r={hover ? 12 : 8}
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="transition-all duration-200"
        />
        <circle
          cx="16"
          cy="16"
          r={hover ? 4 : 2}
          fill="white"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  )
}