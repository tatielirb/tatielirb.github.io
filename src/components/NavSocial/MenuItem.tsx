import { MenuItemProps } from 'types/components/Nav'
export default function MenuItem({ name, href, icon }: MenuItemProps) {
  return (
    <li>
      <a href={href} target="_blank">
        <p>{name}</p>
        <i className={`bi bi-${icon}`}></i>
      </a>
    </li>
  )
}
