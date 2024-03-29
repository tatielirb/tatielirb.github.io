import { NavProps } from 'types/components/Nav'
import MenuItem from './MenuItem'
import './nav.scss'
export default function Nav({ items }: NavProps) {
  return (
    <nav className="flex justify-center items-center pb-10 lg:px-8">
      <button className="button-menu" type="button">
        <span className="hamburger">
          <span className="bars bars-one"></span>
          <span className="bars bars-two"></span>
          <span className="bars bars-three"></span>
        </span>
      </button>

      <div className="hidden lg:flex lg:gap-x-16">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </nav>
  )
}
