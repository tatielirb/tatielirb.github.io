import Title from 'components/Title'
import './about.scss'

export default function About() {
  return (
    <div className="about text-light bg-fixed" id="about">
      <div className="filter">
        <Title
          textTitle="About me"
          description="Besides a nice person and addicted to coffee."
        />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="description col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 align-self-center">
              <p>
                Frontend Software Engineer with 10+ years of experience building scalable and user-centered web applications.
                I have a degree in Internet Systems from Alcides Maya Institute of Technology and a specialization in User Experience from UniRitter. My expertise includes HTML, CSS, responsive design, accessibility, and UX driven development.
                I focus on delivering clean, efficient, and accessible interfaces that provide seamless user experiences, from simple journeys to complex application flows.
                I’m a strong believer in continuous learning, currently deepening my expertise in JavaScript and modern frontend ecosystems. I thrive in collaborative environments and enjoy solving problems that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
