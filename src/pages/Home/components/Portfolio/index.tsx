import { useState } from 'react'
import Title from 'components/Title'
import Card from 'components/Card'
import { customers } from 'utils/DataCustomer'
import './portfolio.scss'

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(12)

  const handleLoadMore = () => {
    if (visibleCount >= customers.length) {
      setVisibleCount(12)
    } else {
      setVisibleCount(visibleCount + 12)
    }
  }

  const visibleCustomers = customers.slice(0, visibleCount)

  return (
    <div className="portfolio" id="portfolio">
      <Title
        textTitle="Portfolio"
        description="Projects developed for companies"
        styleColor="blue"
      />

      {visibleCustomers.map((item, index) => (
        <Card key={index} {...item} />
      ))}

      <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-md-center box-button">
        <button className="btn load-more" onClick={handleLoadMore}>
          {visibleCount >= customers.length ? 'Load Less' : 'Load More'}
        </button>
      </div>
    </div>
  )
}
