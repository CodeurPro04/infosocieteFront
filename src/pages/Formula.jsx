import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import offerArt from '../assets/illustrations/outil.png'
import servicesArt from '../assets/illustrations/service2.png'

export default function Formula() {
  const { content } = useContent()
  const page = content.pages?.offre

  return (
    <section className="page offer-page">
      <div className="container">
        <div className="info-section-header">
          <h2>{page?.toolTitle}</h2>
          <hr className="blue-rule" />
        </div>
        <div className="offer-tool">
          <div className="offer-tool-text">
            <p>{page?.toolBody}</p>
            <p>{page?.toolBody}</p>
            <p>{page?.toolBody}</p>
          </div>
          <div className="offer-tool-image">
            <img src={offerArt} alt="Outil de recherche" />
          </div>
        </div>
        <div className="offer-panel offer-panel-light">
            <div className="offer-card">
              <div className="offer-card-title">{page?.formulaTitle}</div>
              <p className="offer-card-price">{page?.price}</p>
              <p className="offer-card-intro">{page?.formulaIntro}</p>
            <NavLink className="button primary offer-card-button" to="/inscription">
              S'inscrire
            </NavLink>
            </div>
          <ul className="offer-checklist">
            {page?.bullets?.map((item) => (
              <li key={item}>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                    <path
                      d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="advantages-section">
        <div className="container">
          <div className="info-section-header">
            <h2>{page?.advantagesTitle}</h2>
          </div>
          <div className="advantages-grid">
            {page?.advantages?.map((adv) => (
              <div key={adv.title} className="advantage-card">
                <div className="advantage-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                    <path
                      d="M6 3.75h9A1.25 1.25 0 0 1 16.25 5v14A1.25 1.25 0 0 1 15 20.25H6A1.25 1.25 0 0 1 4.75 19V5A1.25 1.25 0 0 1 6 3.75Zm1 3.5h7m-7 3h7m-7 3h7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="section offer-support">
        <div className="container">
          <div className="info-section-header">
            <h2>Mon espace et service clientèle</h2>
            <hr className="blue-rule" />
          </div>
          <div className="offer-support-grid">
            <div className="offer-support-text">
              <p>
                En utilisant notre service, vous aurez accès à votre espace personnel ou sera enregistrer vos
                recherche, vous aurez le droit à 5 recherche d'extrait de Kbis ainsi que de pouvoir modifier vos
                infos personnel.
              </p>
              <p>
                Une équipe opérationnelle rigoureuse et compétente dans chaque département sera a votre
                disposition, épaulée par des partenaires et des consultants de premier ordre, afin d'assurer un
                haut niveau de service, la fraîcheur de l'information et la facilité de consommation des données
                d'entreprise, souvent « indigestes » et réservées aux institutions ou aux grands groupes
              </p>
            </div>
            <div className="offer-support-image">
              <img src={servicesArt} alt="Service clientèle" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
