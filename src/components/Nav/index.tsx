import { useState, useEffect, useCallback } from 'react'
import { NavProps } from 'types/components/Nav'
import MenuItem from './MenuItem'
import './nav.scss'

export default function Nav({ items }: NavProps) {
  const [isNavOpen, setNavOpen] = useState(false)
  const [isMenuFixed, setIsMenuFixed] = useState(false)

  const toggleNavigation = useCallback(() => {
    setNavOpen((prev) => !prev)
  }, [])

  const closeNavigation = useCallback(() => {
    setNavOpen(false)
  }, [])

  const handleScroll = useCallback(() => {
    const portfolioSection = document.getElementById('portfolio')
    const offset = portfolioSection ? portfolioSection.offsetTop : 0

    setIsMenuFixed(window.scrollY >= offset)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isMenuFixed ? 'menu-fixed' : ''
      }`}
    >
      <button
        className={`button-menu navbar-toggler ${isNavOpen ? 'show' : ''}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavigation}
      >
        <span className="hamburger">
          <span className="bars bars-one"></span>
          <span className="bars bars-two"></span>
          <span className="bars bars-three"></span>
        </span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarToggleExternalContent"
      >
        <ul className="navbar-nav">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} closeNav={closeNavigation} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
