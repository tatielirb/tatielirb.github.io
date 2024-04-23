import { badgeProps } from 'types/components/Badge'

export default function Badge({ nameBadge }: badgeProps) {
  if (!nameBadge || nameBadge.length === 0) {
    return null
  }
  return (
    <>
      {nameBadge.map((badge, index) => (
        <span key={index} className="badge rounded-pill">
          {badge}
        </span>
      ))}
    </>
  )
}
