import Title from 'components/Title'
import Card from 'components/Card'
import { customers } from 'utils/DataCustomer'
import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Title
        textTitle="Portfolio"
        description="Projects developed for companies"
        styleColor="blue"
      />

      {customers.map((item) => (
        <Card {...item} />
      ))}
    </div>
  )
}
