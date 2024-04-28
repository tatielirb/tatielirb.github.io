import { MenuItemProps } from 'types/components/Nav'
import useApp from 'hooks/useItemClick'

export default function MenuItem({ name, href }: MenuItemProps) {
  const scrollToTarget = useApp(href, {})
  return (
    <li className="nav-item">
      <a
        className="nav-link text-light"
        href={href}
        data-link={name}
        key={name}
        onClick={scrollToTarget}
      >
        {name}
      </a>
    </li>
  )
}
