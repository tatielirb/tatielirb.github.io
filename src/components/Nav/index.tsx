import { NavProps } from 'types/components/Nav'
import MenuItem from './MenuItem'
import './nav.scss'

export default function Nav({ items }: NavProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="button-menu navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
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
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
