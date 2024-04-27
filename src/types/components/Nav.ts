export interface MenuItemProps {
  href: string
  name: string
  icon?: string
}

export interface NavProps {
  items: MenuItemProps[]
}
