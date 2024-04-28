import { BoxServicesProps } from 'types/components/BoxServices'
import './boxservices.scss'
export default function BoxServices({
  title,
  icon,
  description,
}: BoxServicesProps) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 services">
      <div className="box-services">
        <i className={`bi bi-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
