import Title from 'components/Title'
import './about.scss'

export default function About() {
  return (
    <div className="about text-light bg-fixed">
      <div className="filter">
        <Title
          textTitle="About me"
          description="Besides a nice person and addicted to coffee."
        />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="description col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 align-self-center">
              <p>
                Graduated in Systems for Internet by the institution of
                Technology Alcides Maya with graduation in User Experience by
                the institution UniRitter. I have been working in the technology
                field for 13 years, of which 10 years as a developer Software
                Engineer Front end, specialized in HTLM and CSS, responsive web,
                accessibility in websites and especilista UX. Eternal student of
                Java Script. I love teamwork, always strive to show my
                creativity, increase my knowledge of advanced coding techniques
                with the goal of bringing the best possible experience to the
                end user, from basic navigation to complex interactions with the
                application. Always in search of new challenges always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
