import { TitleProp } from 'types/components/Title'
import './title.scss'
export default function Title({
  textTitle,
  description,
  styleColor,
}: TitleProp) {
  return (
    <div className={`box-title `}>
      <h2 className={`${styleColor}`}>&lt; {textTitle} &gt;</h2>
      <span className="line "></span>
      <p className={`${styleColor}`}>{description}</p>
    </div>
  )
}
