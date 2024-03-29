import './heroSections.scss'
import logo from 'assets/img/logo-tatieli-ramos.png'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'

export default function HeroSections() {
  return (
    <div className="hero-sections text-light">
      <div className="hero-sections__filter">
        <header id="header" className="py-28">
          <Nav items={menuSite} />

          <div className="container">
            <div className="row">
              <div className="description col-12 align-self-center">
                <img
                  src={logo}
                  alt="{</>} Tatieli Ramos logo"
                  className="logo"
                />
                <h1>
                  Hey there!
                  <br />
                  I’m <strong>Tatieli Ramos</strong>
                  <br />
                  Software Engineer Front-end.
                </h1>
              </div>
            </div>
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
