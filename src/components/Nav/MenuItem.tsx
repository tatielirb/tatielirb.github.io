import { MenuItemProps } from 'types/components/Nav'
import useApp from 'hooks/useItemClick'

export default function MenuItem({ name, href, closeNav }: MenuItemProps) {
  const scrollToTarget = useApp(href, {})

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (closeNav) {
      closeNav()
    }
    scrollToTarget(event)
  }
  return (
    <li className="nav-item">
      <a
        className="nav-link text-light"
        href={href}
        data-link={name}
        key={name}
        onClick={handleItemClick}
      >
        {name}
      </a>
    </li>
  )
}
