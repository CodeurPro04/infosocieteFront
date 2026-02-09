import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import heroArt from '../assets/illustrations/hero.png'
import infoArt from '../assets/illustrations/2.png'
import formulaArt from '../assets/illustrations/3.png'
import aboutArt from '../assets/illustrations/4.png'
import servicesArt from '../assets/illustrations/5.png'
import contactArt from '../assets/illustrations/6.png'
import kbisArt from '../assets/illustrations/7.png'

export default function Home() {
  const { content } = useContent()
  const home = content.home || {}

  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="eyebrow">Infosociete</div>
            <h1>{home.heroTitle}</h1>
            <p>{home.heroSubtitle}</p>
            <div className="hero-actions">
              <NavLink className="button primary" to="/offre">
                {home.cta}
              </NavLink>
            </div>
            <div className="hero-search">
              <input placeholder="Recherche" aria-label="Recherche" />
              <NavLink className="button primary" to="/entreprises">
                Rechercher
              </NavLink>
            </div>
            <div className="hero-highlight">
              {home.tags?.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-media">
              <img src={heroArt} alt="Illustration de recherche d'entreprise" />
              <div className="hero-media-pill">Infosociete Pro</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-header">Infosociete Pro</div>
              <div className="hero-card-score">{home.formulaPrice}</div>
              <div className="hero-card-list">
                {home.benefits?.map((item) => (
                  <div key={item} className="hero-card-item">
                    {item}
                  </div>
                ))}
              </div>
              <NavLink className="button light" to="/offre">
                Decouvrir la formule
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container section split-section split-reverse">
        <div className="split-media">
          <img src={infoArt} alt="Illustration information entreprise" />
        </div>
        <div className="split-content">
          <div className="section-header">
            <h2>{home.usefulTitle}</h2>
          </div>
          <div className="page-card">
            <p className="muted">{home.usefulBody}</p>
            <p className="muted">{home.learnMore}</p>
            {home.usefulNote && (
              <NavLink className="link" to="/conditions-de-la-formule">
                {home.usefulNote}
              </NavLink>
            )}
          </div>
        </div>
      </section>

      <section className="accent-section">
        <div className="container accent-grid">
          <div className="accent-content">
            <div className="eyebrow">Formule Infosociete Pro</div>
            <h2>{home.formulaPrice}</h2>
            <p className="muted">{home.formulaIntro}</p>
            <ul className="offer-list">
              {home.formulaBullets?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <NavLink className="button light" to="/offre">
              Je m'inscris
            </NavLink>
          </div>
          <div className="accent-visual">
            <img src={formulaArt} alt="Illustration formule premium" />
            <div className="process-card">
              <div className="eyebrow">{home.serviceIntro}</div>
              <div className="process-title">{home.serviceTitle}</div>
              <p className="muted">{home.serviceBody}</p>
              <NavLink className="button primary" to="/offre">
                Decouvrir la formule
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>{home.companiesTitle}</h2>
        </div>
        <p className="muted">{home.companiesIntro}</p>
        <p className="muted">{home.companiesNote}</p>
        <div className="table">
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
              <span>{row.status}</span>
              <span>{row.ape}</span>
              <span>{row.created}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="info-strip">
          <div className="eyebrow">{home.infoStrip?.title}</div>
          <h2>{home.infoStrip?.heading}</h2>
          <p className="muted">{home.infoStrip?.body}</p>
          <div className="hero-actions">
            <NavLink className="button primary" to="/offre">
              {home.infoStrip?.primaryCta}
            </NavLink>
            <NavLink className="button ghost" to="/entreprises">
              {home.infoStrip?.secondaryCta}
            </NavLink>
          </div>
        </div>
      </section>

      <section className="container section split-section">
        <div className="split-content">
          <div className="section-header">
            <h2>{home.aboutTitle}</h2>
          </div>
          <div className="page-card">
            <p className="muted">{home.aboutBody}</p>
          </div>
        </div>
        <div className="split-media">
          <img src={aboutArt} alt="Illustration a propos" />
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Les services</h2>
        </div>
        <div className="services-layout">
          <div className="services-media">
            <img src={servicesArt} alt="Illustration services" />
          </div>
          <div className="feature-grid">
            {home.serviceCards?.map((card) => (
              <div key={card.title} className="feature-card">
                <h3>{card.title}</h3>
                <p className="muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="formula-cta">
          <div>
            <div className="eyebrow">{home.formulaCta?.title}</div>
            <h2>{home.formulaCta?.body}</h2>
            <p className="muted">{home.formulaCta?.note}</p>
          </div>
          <NavLink className="button primary" to="/offre">
            Decouvrir
          </NavLink>
        </div>
      </section>

      <section className="container section split-section split-reverse">
        <div className="split-media">
          <img src={contactArt} alt="Illustration contact" />
        </div>
        <div className="split-content">
          <div className="section-header">
            <h2>{home.contactBlock?.title}</h2>
          </div>
          <div className="page-card">
            <p className="muted">{home.contactBlock?.body}</p>
            <div className="footer-contact">
              <span>{home.contactBlock?.email}</span>
              <span>{home.contactBlock?.phone}</span>
              <span>{home.contactBlock?.hours}</span>
            </div>
            <NavLink className="button primary" to="/contact">
              Nous contacter
            </NavLink>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Extrait KBIS</h2>
        </div>
        <p className="muted">{home.kbisIntro}</p>
        <div className="kbis-layout">
          <div className="feature-grid">
            {home.kbisHighlights?.map((item) => (
              <div key={item} className="feature-card">
                {item}
              </div>
            ))}
          </div>
          <div className="kbis-media">
            <img src={kbisArt} alt="Illustration extrait kbis" />
          </div>
        </div>
        <p className="muted">{home.disclaimer}</p>
      </section>
    </div>
  )
}
