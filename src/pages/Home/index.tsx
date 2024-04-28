import HeroSections from 'pages/Home/components/HeroSections'
import Portfolio from 'pages/Home/components/Portfolio'
import About from './components/About'
import Skill from './components/Skill'
import ServicesOffered from './components/ServicesOffered'
import Contact from './components/Contact'
import Nav from 'components/Nav'
import { menuSite } from 'utils/DataMenu'

export default function Home() {
  return (
    <div className="home">
      <div role="navigation">
        <a id="skippy" href="#portfolio" title="Skip to main content">
          Skip to Main Content
        </a>
      </div>
      <Nav items={menuSite} />
      <HeroSections />
      <Portfolio />
      <About />
      <Skill />
      <ServicesOffered />
      <Contact />
    </div>
  )
}
