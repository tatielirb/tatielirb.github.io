import { MenuItemProps } from 'types/components/Nav'
export default function MenuItem({ name, href }: MenuItemProps) {
  return (
    <li className="nav-item">
      <a
        className="nav-link text-light"
        href={href}
        data-link={name}
        key={name}
      >
        {name}
      </a>
    </li>
  )
}
