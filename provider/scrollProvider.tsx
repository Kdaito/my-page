import React, { createContext, useCallback, useEffect, useState } from 'react'

interface ScrollValue {
  scrollY: number
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
})

const ScrollProvider: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    // passive: true → この関数内でevent.preventDefault()を呼んでいないことをブラウザに通知
    document.addEventListener('scroll', handleScroll, { passive: true })
    // DOMのアンマウント時にhandleScrollをscrollのeventListnerから外す
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
