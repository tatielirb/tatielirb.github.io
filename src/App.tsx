import './App.scss'
import logo from 'assets/img/logo-tatieli-ramos.png'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'

function App() {
  return (
    <div className="App">
      <div className="hero-sections">
        <div className="hero-sections__filter">
          <header id="header">
            <nav className="flex items-center justify-between p-6 lg:px-8">
              <div className="hidden lg:flex lg:gap-x-12">
                {menuSite.map((item, index) => (
                  <Nav key={index} {...item} />
                ))}
              </div>
            </nav>

            <div className="text-center">
              <div className="container mx-auto">
                <img
                  src={logo}
                  alt="{</>} tatieli ramos logo"
                  className="logo"
                />
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Hey there!
                  <br />
                  I’m <strong>Tatieli Ramos</strong>
                  <br />
                  Software Engineer Front-end.
                </h1>
              </div>
            </div>

            <a href="#portfolio" className="arrow">
              <p>ir para baixo</p>
              <i className="bi bi-chevron-down"></i>
            </a>
          </header>
        </div>
      </div>
    </div>
  )
}

export default App
