export interface MenuItemProps {
  href: string
  name: string
  icon?: string
  closeNav?: () => void
}

export interface NavProps {
  items: MenuItemProps[]
}
