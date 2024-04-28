import Title from 'components/Title'
import BoxServices from 'components/BoxServices'
import { servicesSolutions } from 'utils/DataServices'
import './servicesOffered.scss'

export default function ServicesOffered() {
  return (
    <div className="services-offered text-light bg-fixed" id="services-offered">
      <div className="filter">
        <Title textTitle="What I do" description="Services and Solutions" />

        <div className="container box-services-content">
          <div className="row">
            {servicesSolutions.map((item) => (
              <BoxServices {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
