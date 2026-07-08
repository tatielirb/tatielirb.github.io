import { BoxServicesProps } from 'types/components/BoxServices'
import './boxservices.scss'
export default function BoxServices({
  title,
  icon,
  description,
}: BoxServicesProps) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 services">
      <div className="col d-flex align-items-start">
        <div className="box-services d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>




  )
}
