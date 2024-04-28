import './footer.scss'
import useApp from 'hooks/useItemClick'
export default function Footer() {
  const href = '#hero-sections'
  const scrollToTarget = useApp(href, {})

  return (
    <footer>
      <p>
        Copyright © 2024 Tatieli Ramos Dev, made with lot of
        <i className="bi bi-cup-hot-fill"></i>
      </p>
      <a href={href} className="to-top" onClick={scrollToTarget}>
        <p>Voltar ao topo</p>
        <i className="bi bi-arrow-up"></i>
      </a>
    </footer>
  )
}
