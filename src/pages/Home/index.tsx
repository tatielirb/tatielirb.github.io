import HeroSections from 'pages/Home/components/HeroSections'
import Portfolio from 'pages/Home/components/Portfolio'
import About from './components/About'
import Skill from './components/Skill'
import ServicesOffered from './components/ServicesOffered'

export default function Home() {
  return (
    <div className="home">
      <HeroSections />
      <Portfolio />
      <About />
      <Skill />
      <ServicesOffered />
    </div>
  )
}
