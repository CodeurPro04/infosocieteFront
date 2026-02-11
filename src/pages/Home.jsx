import { NavLink, useNavigate } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import { useEffect, useState } from 'react'
import heroArt from '../assets/illustrations/hero.png'
import infoArt from '../assets/illustrations/service1.png'
import formulaArt from '../assets/illustrations/3.png'
import aboutArt from '../assets/illustrations/4.png'
import servicesArt from '../assets/illustrations/service2.png'
import contactArt from '../assets/illustrations/6.png'
import kbisArt from '../assets/illustrations/7.png'
import documentArt from '../assets/illustrations/document.png'
import kbisVideo from '../assets/illustrations/kbis-video.mp4'
import kbisCard from '../assets/illustrations/kbisflou.png'
import badge from '../assets/illustrations/badge.svg'

export default function Home() {
  const { content } = useContent()
  const home = content.home || {}
  const [query, setQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    if (!query.trim()) {
      return
    }
    setShowModal(true)
    setStep(0)
  }

  useEffect(() => {
    if (!showModal) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setStep((prev) => {
        if (prev >= 4) {
          window.clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 650)

    return () => window.clearInterval(timer)
  }, [showModal])

  useEffect(() => {
    if (step >= 4 && showModal) {
      const delay = window.setTimeout(() => {
        setShowModal(false)
        navigate(`/recherche-entreprise/${encodeURIComponent(query.trim())}`)
      }, 900)
      return () => window.clearTimeout(delay)
    }
    return undefined
  }, [step, showModal, query, navigate])

  return (
    <div>
      <section className="hero">
        <div className="container hero-grid hero-grid-infosociete">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-accent">Consultez et Téléchargez</span>
              <span className="hero-title-rest">les données de votre entreprise</span>
            </h1>
            <p className="hero-subtitle">{home.heroSubtitle}</p>
            <form className="hero-search" onSubmit={handleSearch}>
              <span className="hero-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M4 20.25h16a.75.75 0 0 0 0-1.5h-1.25V5.5A1.5 1.5 0 0 0 17.25 4h-4.5V3a1.5 1.5 0 0 0-1.5-1.5H6.75A1.5 1.5 0 0 0 5.25 3v15.75H4a.75.75 0 0 0 0 1.5Zm2.75-1.5V3h4.5v15.75h-4.5Zm6 0V5.5h4.5v13.25h-4.5Zm-4-9.25h1.5V8h-1.5v1.5Zm0 3h1.5v-1.5h-1.5V12.5Zm0 3h1.5V14h-1.5v1.5Zm6-6h1.5V8h-1.5v1.5Zm0 3h1.5v-1.5h-1.5V12.5Zm0 3h1.5V14h-1.5v1.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={'Nom de la soci\u00e9t\u00e9, SIRET ou SIREN'}
                aria-label="Recherche"
              />
              <button className="button primary search-button" type="submit">
                Recherche
              </button>
            </form>
            <div className="hero-tags">
              {home.tags?.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-note">
              {home.benefits?.map((item, index) => (
                <p key={item} className={`hero-note-line hero-note-line-${index + 1}`}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="hero-visual hero-visual-infosociete">
            <div className="hero-figure">
              <img src={heroArt} alt="Dossiers d'entreprise" />
            </div>
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="container">
          <div className="info-section-header">
            <h2>{home.usefulTitle}</h2>
            <hr className="blue-rule" />
          </div>
          <div className="info-columns">
            <div>
              <div className="info-column-title">{home.usefulTitle}</div>
              <p>{home.usefulBody}</p>
            </div>
            <div>
              <div className="info-column-title">En savoir plus</div>
              <p>{home.learnMore}</p>
              {home.usefulNote && (
                <NavLink className="info-note-link" to="/conditions-de-la-formule">
                  {home.usefulNote}
                </NavLink>
              )}
            </div>
          </div>
          <div className="formula-panel">
            <div className="formula-card">
              <div className="formula-card-title">Notre formule Infosociete Pro</div>
              <p className="formula-price">{home.formulaPrice}</p>
              <p>{home.formulaIntro}</p>
              <NavLink className="button primary formula-button" to="/inscription">
                S'inscrire
              </NavLink>
            </div>
            <ul className="formula-list">
              {home.formulaBullets?.map((item) => (
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
      </section>

      <section className="section learn-section">
        <div className="container">
          <div className="info-section-header">
            <h2>En apprendre plus sur notre service</h2>
            <hr className="blue-rule" />
          </div>
          <div className="learn-grid">
            <div className="learn-left">
              <div className="learn-media">
                <video src={kbisVideo} controls preload="metadata" />
              </div>
              <h3>{home.serviceTitle}</h3>
              <p>{home.serviceBody}</p>
            </div>
            <div className="learn-card">
              <div className="learn-card-eyebrow">Plus d'informations</div>
              <h3>{home.infoStrip?.heading}</h3>
              <p>{home.infoStrip?.body}</p>
              <NavLink className="button primary learn-button" to="/offre">
                En savoir plus
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section companies-section">
        <div className="container">
          <div className="info-section-header">
            <h2>{home.companiesTitle}</h2>
            <hr className="blue-rule" />
          </div>
          <div className="companies-grid">
            <div>
              <p className="companies-intro">{home.companiesIntro}</p>
              <p className="companies-note">{home.companiesNote}</p>
              <ul className="companies-bullets">
                <li>Elle affichera les 5 recherches les plus récentes effectuées par nos utilisateurs</li>
                <li>Vous n’aurez bien sur accès qu’à une petite partie des informations</li>
              </ul>
              <div className="table companies-table">
                <div className="table-head">
                  {home.companiesHeaders?.map((header) => (
                    <span key={header}>{header}</span>
                  ))}
                </div>
                {home.companiesRows?.map((row) => (
                  <div key={row.name} className="table-row">
                    <span className="table-title">{row.name}</span>
                    <span>{row.siren}</span>
                    <span>{row.address}</span>
                    <span className="status-pill">{row.status}</span>
                    <span>{row.ape}</span>
                    <span>{row.created}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="companies-aside">
              <div className="companies-image">
                <img src={documentArt} alt="Documents d'entreprise" />
              </div>
              <NavLink className="button primary companies-button" to="/entreprises">
                Rechercher un document
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="info-section-header">
            <h2>{home.aboutTitle}</h2>
            <hr className="blue-rule" />
          </div>
          <div className="about-body">
            <div className="about-subtitle">A propos de nous</div>
            <p>{home.aboutBody}</p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="info-section-header">
            <h2>Les services chez infosociete.pro</h2>
            <hr className="blue-rule" />
          </div>
          <div className="services-top-grid">
            {home.serviceCards?.slice(0, 2).map((card, index) => (
              <div key={card.title} className="service-media-card">
                <div className="service-media">
                  <img src={index === 0 ? infoArt : servicesArt} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <NavLink className="button primary service-button" to={index === 0 ? '/offre' : '/contact'}>
                  {index === 0 ? 'Notre formule' : 'Notre Service clientèle'}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="services-cards-grid">
            <div className="services-info-card">
              <div className="services-card-eyebrow">Notre formule Infosociete Pro</div>
              <p>Profitez d'un accès aux extraits de Kbis pour 1,49 € pendant 72h*</p>
              <NavLink className="services-link" to="/conditions-de-la-formule">
                *voir condition formule premium
              </NavLink>
              <NavLink className="button primary service-button" to="/inscription">
                S'inscrire
              </NavLink>
            </div>
            <div className="services-info-card">
              <div className="services-card-eyebrow">Nous contacter</div>
              <p>Prenez contact avec nous maintenant</p>
              <div className="services-contact">
                <span>@</span>
                <span>{home.contactBlock?.email}</span>
              </div>
              <div className="services-contact">
                <span>✉</span>
                <NavLink to="/contact">Via la page de contact</NavLink>
              </div>
            </div>
            <div className="services-info-card">
              <div className="services-card-eyebrow">Service client</div>
              <p>Du lundi au samedi, par téléphone au</p>
              <div className="services-contact">
                <span>☎</span>
                <span>{content.site?.phone}</span>
              </div>
              <div className="services-contact">
                <span>🕒</span>
                <span>{content.site?.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal ? (
        <div className="search-modal-overlay" role="presentation">
          <div className="search-modal" role="dialog" aria-modal="true">
            <div className="search-modal-card">
              <div className="search-modal-left">
                <img src={kbisCard} alt="Extrait KBIS" />
                <div className="search-modal-title">Extrait KBIS</div>
                <div className="search-modal-subtitle">Recevez votre Kbis</div>
              </div>
              <div className="search-modal-right">
                <div className={`search-modal-check ${step >= 1 ? 'active' : ''}`}>
                  <span className="search-modal-check-icon">{'\u2713'}</span>
                  <span>{'Soci\u00e9t\u00e9e Identifi\u00e9e'}</span>
                </div>
                <div className={`search-modal-check ${step >= 2 ? 'active' : ''}`}>
                  <span className="search-modal-check-icon">{'\u2713'}</span>
                  <span>{'Dirigeant Identifi\u00e9'}</span>
                </div>
                <div className={`search-modal-check ${step >= 3 ? 'active' : ''}`}>
                  <span className="search-modal-check-icon">{'\u2713'}</span>
                  <span>{'Code APE Identifi\u00e9'}</span>
                </div>
                <div className={`search-modal-check ${step >= 4 ? 'active' : ''}`}>
                  <span className="search-modal-check-icon">{'\u2713'}</span>
                  <span>Identification Greffe</span>
                </div>
              </div>
              {step >= 4 ? (
                <img className="search-modal-verified" src={badge} alt="V?rifi?" />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
