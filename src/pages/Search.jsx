import { useEffect, useMemo, useState } from 'react'
import { searchCompanies } from '../api.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import kbisCard from '../assets/illustrations/kbisflou.png'
import badge from '../assets/illustrations/badge.svg'

export default function Search() {
  const { content } = useContent()
  const page = content.pages?.entreprises
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(content.search?.samples || [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const handleExtract = (value) => {
    if (!value) {
      return
    }
    setQuery(String(value))
    setShowModal(true)
    setStep(0)
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    if (!query.trim()) {
      setError('Veuillez saisir un SIRET ou SIREN.')
      return
    }
    setShowModal(true)
    setStep(0)
    setLoading(true)
    setError('')
    try {
      const data = await searchCompanies(query)
      setResults(data.results || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const intro = useMemo(() => page?.subtitle, [page])

  useEffect(() => {
    if (!query) {
      setResults(content.search?.samples || [])
    }
  }, [content.search, query])

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
    <section className="search-page">
      <div className="container">
        <div className="search-header">
          <h1>Recherche d'entreprise</h1>
          <p>{intro}</p>
        </div>

        <form className="search-hero" onSubmit={handleSearch}>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={'Nom de la soci\u00e9t\u00e9, SIRET ou SIREN'}
          />
          <button className="button primary" type="submit" disabled={loading}>
            {loading ? 'Recherche...' : 'Recherche'}
          </button>
        </form>
        {error && <p className="error-text">{error}</p>}

        <div className="search-table">
          <div className="search-table-head">
            <span>SIREN</span>
            <span>Nom</span>
            <span>Statut</span>
            <span>Code APE</span>
            <span>Année de création</span>
            <span></span>
            <span></span>
          </div>
          {results.map((item) => (
            <div key={`${item.name}-${item.ape}`} className="search-table-row">
              <span>{item.siren || '-'}</span>
              <span className="table-title">{item.name}</span>
              <span>{item.status}</span>
              <span>{item.ape}</span>
              <span>{item.created}</span>
              <NavLink className="search-link" to="/entreprises">
                Détails
              </NavLink>
              <button
                className="button primary search-kbis"
                type="button"
                onClick={() => handleExtract(item.siren || item.siret || item.name)}
              >
                Extrait Kbis
              </button>
            </div>
          ))}
        </div>
      </div>
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
                <img className="search-modal-verified" src={badge} alt="Vérifié" />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
