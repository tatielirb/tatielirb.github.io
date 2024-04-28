import Title from 'components/Title'
import CardSkill from 'components/Card-Skill'
import { skill } from 'utils/DataSkill'
import './skill.scss'

export default function Skill() {
  return (
    <div className="skills" id="skill">
      <Title textTitle="Skills" styleColor="blue" />
      <div className="container">
        <div className="row">
          {skill.map((item) => (
            <CardSkill {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
