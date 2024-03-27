import './heroSections.scss'
import logo from 'assets/img/logo-tatieli-ramos.png'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'

export default function HeroSections() {
  return (
    <div className="hero-sections">
      <div className="hero-sections__filter">
        <header id="header" className="py-28">
          <nav className="flex justify-center items-center pb-10 lg:px-8">
            <div className="hidden lg:flex lg:gap-x-16">
              {menuSite.map((item, index) => (
                <Nav key={index} {...item} />
              ))}
            </div>
          </nav>

          <div className="container mx-auto text-center self-center pb-20">
            <img src={logo} alt="{</>} tatieli ramos logo" className="logo" />
            <h1 className="lg:text-6xl text-3xl lg:leading-snug tracking-tight text-white">
              Hey there!
              <br />
              I’m <strong>Tatieli Ramos</strong>
              <br />
              Software Engineer Front-end.
            </h1>
          </div>

          <a href="#portfolio" className="arrow">
            <p>ir para baixo</p>
            <i className="bi bi-chevron-down"></i>
          </a>
        </header>
      </div>
    </div>
  )
}
