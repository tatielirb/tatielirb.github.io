import { useCallback } from 'react'

interface UseSmoothScrollProps {
  onScroll?: () => void
}

const useApp = (href: string, options: UseSmoothScrollProps = {}) => {
  const { onScroll } = options

  const scrollToTarget = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()

      const targetId = href.startsWith('#') ? href.substring(1) : href
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        if (onScroll) {
          onScroll()
        }
      }
    },
    [href, onScroll]
  )

  return scrollToTarget
}

export default useApp
