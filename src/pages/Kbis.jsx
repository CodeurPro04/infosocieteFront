import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import kbisVisual from '../assets/illustrations/informationskbis.png'

export default function Kbis() {
  const { content } = useContent()
  const page = content.pages?.['information-kbis']
  const meaning = page?.meaningSection
  const extraSections = page?.extraSections ?? []
  const obtainSection = page?.obtainSection
  const cards = page?.kbisCards ?? []

  return (
    <section className="kbis-page section">
      <div className="container">
        <div className="info-section-header kbis-header">
          <h2>{page?.title}</h2>
          <hr className="blue-rule" />
        </div>
        <div className="kbis-layout">
          <div className="kbis-text">
            <p>{page?.intro}</p>
            {page?.sections?.slice(0, 2).map((section) => (
              <p key={section.title}>{section.body}</p>
            ))}
          </div>
          <div className="kbis-media">
            <img src={kbisVisual} alt="Extrait Kbis" />
          </div>
        </div>
        <div className="kbis-meaning">
          <div className="info-section-header">
            <h2>{meaning?.title}</h2>
            <hr className="blue-rule" />
          </div>
          <div className="kbis-text">
            {meaning?.paragraphs?.map((item, index) => (
              <p key={`${meaning?.title}-${index}`}>{item}</p>
            ))}
            <ul className="kbis-list">
              {meaning?.bullets?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{meaning?.tail}</p>
          </div>
        </div>
        <div className="kbis-details">
          {extraSections.map((section) => (
            <div className="kbis-block" key={section.title}>
              <h3 className="kbis-subtitle">{section.title}</h3>
              <div className="kbis-text">
                {section.paragraphs?.map((item, index) => (
                  <p key={`${section.title}-${index}`}>{item}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="kbis-list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.tail ? <p className="kbis-text">{section.tail}</p> : null}
            </div>
          ))}
        </div>
        <div className="kbis-obtain">
          <div className="info-section-header">
            <h2>{obtainSection?.title}</h2>
            <hr className="blue-rule" />
          </div>
          <div className="kbis-text">
            {obtainSection?.blocks?.map((block) => (
              <div className="kbis-block" key={block.subtitle}>
                <h3 className="kbis-subtitle">{block.subtitle}</h3>
                {block.paragraphs?.map((item, index) => (
                  <p key={`${block.subtitle}-${index}`}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="kbis-cards">
          <div className="kbis-info-cards">
            {cards.map((card) => (
              <div className="kbis-info-card" key={card.eyebrow}>
                <div className="kbis-info-eyebrow">{card.eyebrow}</div>
                <p>{card.title}</p>
                {card.link ? (
                  <Link className="kbis-info-link" to="/conditions-formule-premium">
                    {card.link}
                  </Link>
                ) : null}
                {card.button ? (
                  <Link className="button" to="/inscription">
                    {card.button}
                  </Link>
                ) : null}
                {card.email ? (
                  <>
                    <div className="kbis-info-row">
                      <span className="kbis-info-mini-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" role="img" focusable="false">
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
                      <span>{card.email}</span>
                    </div>
                    <div className="kbis-info-row">
                      <span className="kbis-info-mini-icon">✎</span>
                      <span>{card.contactLink}</span>
                    </div>
                  </>
                ) : null}
                {card.phone ? (
                  <>
                    <div className="kbis-info-row">
                      <span className="kbis-info-mini-icon">☎</span>
                      <span>{card.phone}</span>
                    </div>
                    <div className="kbis-info-row">
                      <span className="kbis-info-mini-icon">🕒</span>
                      <span>{card.hours}</span>
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
