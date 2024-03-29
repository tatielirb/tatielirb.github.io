import { MenuItemProps } from 'types/components/Nav'
export default function MenuItem({ name, href }: MenuItemProps) {
  return (
    <div className="space-y-2 py-6">
      <a
        key={name}
        href={href}
        className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7"
      >
        {name}
      </a>
    </div>
  )
}
