import { CardSkillProps } from 'types/components/CardSkill'
import Badge from 'components/Badge'

export default function CardSkill({
  title,
  description,
  skills,
}: CardSkillProps) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 mb-sm-0">
      <div className="card skill">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {description}
          </h6>
          <Badge nameBadge={skills} />
        </div>
      </div>
    </div>
  )
}
