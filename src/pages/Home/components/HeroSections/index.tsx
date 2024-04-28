import './heroSections.scss'
import logo from 'assets/img/logo-tatieli-ramos.png'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'
import useApp from 'hooks/useItemClick'

export default function HeroSections() {
  const href = '#portfolio'
  const scrollToTarget = useApp(href, {})
  return (
    <div className="hero-sections bg-fixed text-light" id="hero-sections">
      <div className="filter">
        <header id="header">
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

          <a href={href} className="arrow text-light" onClick={scrollToTarget}>
            <p>ir para baixo</p>
            <i className="bi bi-chevron-down"></i>
          </a>
        </header>
      </div>
    </div>
  )
}
