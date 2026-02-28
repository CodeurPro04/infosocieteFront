import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'

export default function Faq() {
  const { content } = useContent()
  const page = content.pages?.faq
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-page">
      <div className="container">
        <div className="faq-title-row">
          <div className="faq-title">FAQ</div>
          <div className="faq-rule" />
        </div>
        <div className="faq-intro">
          <span className="faq-quote">“</span>
          <h2>Retrouver toutes les questions les plus fréquemment posées dans notre FAQ dédiée à notre service</h2>
        </div>
        <div className="faq-list">
          {page?.items?.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.q} className={`faq-row ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-toggle"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-plus" aria-hidden="true">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  {item.blocks?.map((block, blockIndex) => {
                    if (block.type === 'ul') {
                      return (
                        <ul key={`${item.q}-${blockIndex}`}>
                          {block.items?.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      )
                    }
                    return <p key={`${item.q}-${blockIndex}`}>{block.text}</p>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="faq-cards">
          <div className="faq-card">
            <div className="faq-card-eyebrow">Notre formule INFO-DOCSFLOW</div>
            <h3>Profitez d'un accès aux extraits de Kbis pour 1,49 € pendant 72h*</h3>
            <NavLink className="faq-card-link" to="/conditions-de-la-formule">
              *voir condition formule premium
            </NavLink>
            <NavLink className="button primary faq-card-button" to="/inscription">
              S'inscrire
            </NavLink>
          </div>
          <div className="faq-card">
            <div className="faq-card-eyebrow">Nous contacter</div>
            <h3>Prenez contact avec nous maintenant</h3>
            <div className="faq-card-row">
              <span className="faq-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M17 17.5c-1.2 1-2.7 1.5-4.5 1.5a6 6 0 1 1 0-12c2.8 0 4.8 1.8 4.8 4.2 0 1.4-.7 2.3-1.8 2.3-1 0-1.7-.7-1.7-1.9v-.4a2.6 2.6 0 0 0-2.3-1.2 2.7 2.7 0 0 0 0 5.4 2.6 2.6 0 0 0 2.2-1.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{content.site?.email}</span>
            </div>
            <div className="faq-card-row">
              <span className="faq-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.75v-7.5a1.5 1.5 0 0 1 1.5-1.5Zm.6 1.8 6.9 4.7 6.9-4.7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <NavLink to="/contact">Via la page de contact</NavLink>
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-card-eyebrow">Service client</div>
            <h3>Du lundi au samedi, par téléphone au</h3>
            <div className="faq-card-row">
              <span className="faq-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7.2 3.75c.42 0 .82.2 1.06.55l1.52 2.2c.28.4.3.93.05 1.35l-1.02 1.7a.9.9 0 0 0 .1 1.06 11.9 11.9 0 0 0 4.05 3.53.9.9 0 0 0 1.1-.2l1.43-1.43c.38-.38.95-.5 1.44-.3l2.38.95c.58.23.92.83.83 1.45l-.32 2.22a1.5 1.5 0 0 1-1.48 1.29c-7.45 0-13.5-6.05-13.5-13.5A1.5 1.5 0 0 1 6.6 3.75h.6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{content.site?.phone}</span>
            </div>
            <div className="faq-card-row">
              <span className="faq-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 6.5v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>De 8h à 20h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
