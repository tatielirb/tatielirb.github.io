import { NavProps } from 'types/components/Nav'
import MenuItem from './MenuItem'
import './navSocial.scss'

export default function NavSocial({ items }: NavProps) {
  return (
    <div className="nav-social">
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  )
}
