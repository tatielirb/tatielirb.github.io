import { cardProps } from 'types/components/Card'
import Badge from 'components/Badge'
import './card.scss'

export default function Card({
  title,
  image,
  subtitle,
  description,
  badges,
}: cardProps) {
  const imageSrc = require(`./../../assets/img/customers/${image}`)
  const style = {
    backgroundImage: `url(${imageSrc})`,
  }
  return (
    <div className="card">
      <div className="card-bg" style={style}>
        <span className="card-bg--hover"></span>
        <div className="valign">
          <div className="center row justify-content-center no-gutters">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            <Badge nameBadge={badges} />
          </div>
          <div className="alt-line"></div>
        </div>
      </div>
    </div>
  )
}
