import './heroSections.scss'
import logo from 'assets/img/logo-tatieli-ramos.png'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'

export default function HeroSections() {
  return (
    <div className="hero-sections text-white_color">
      <div className="hero-sections__filter">
        <header id="header" className="py-28">
          <Nav items={menuSite} />

          <div className="container mx-auto text-center self-center pb-20">
            <img src={logo} alt="{</>} Tatieli Ramos logo" className="logo" />
            <h1 className="lg:text-6xl text-3xl lg:leading-snug tracking-tight text-white">
              Hey there!
              <br />
              I’m <strong>Tatieli Ramos</strong>
              <br />
              Software Engineer Front-end.
            </h1>
          </div>

          <a href="#portfolio" className="animate-bounce arrow">
            <p>ir para baixo</p>
            <i className="bi bi-chevron-down"></i>
          </a>
        </header>
      </div>
    </div>
  )
}
