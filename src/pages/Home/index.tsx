import HeroSections from './components/HeroSections'
import Title from 'components/Title'

export default function Home() {
  return (
    <div className="home">
      <HeroSections />
      <Title textTitle="teste" description="ola tudo bem" styleColor="blue" />
    </div>
  )
}
