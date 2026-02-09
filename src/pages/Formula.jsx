import { useContent } from '../context/ContentContext.jsx'

export default function Formula() {
  const { content } = useContent()
  const page = content.pages?.offre

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.toolTitle}</p>
        <p className="muted">{page?.toolBody}</p>
      </div>
      <div className="offer-panel">
        <div>
          <div className="offer-price">{page?.price}</div>
          <ul className="offer-list">
            {page?.bullets?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="offer-aside">
          <div className="eyebrow">{page?.formulaTitle}</div>
          <div className="offer-aside-text">{page?.price}</div>
          <button className="button primary">Souscrire</button>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>{page?.advantagesTitle}</h2>
        </div>
        <div className="feature-grid">
          {page?.advantages?.map((adv) => (
            <div key={adv.title} className="feature-card">
              <h3>{adv.title}</h3>
              <p className="muted">{adv.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
