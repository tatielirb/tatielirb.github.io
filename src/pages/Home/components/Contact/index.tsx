import Title from 'components/Title'
import NavSocial from 'components/NavSocial'
import Footer from 'components/Footer'
import { menuSocialMidas } from 'utils/DataMenu'
import './contact.scss'

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Title
        textTitle="Contacts"
        description="Have a question or want to work together?"
      />
      <div className="container">
        <div className="row">
          <NavSocial items={menuSocialMidas} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
