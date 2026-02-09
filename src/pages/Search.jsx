import { useEffect, useMemo, useState } from 'react'
import { searchCompanies } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'

export default function Search() {
  const { content } = useContent()
  const page = content.pages?.entreprises
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(content.search?.samples || [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault()
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

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{intro}</p>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={page?.placeholder || 'Recherche'}
        />
        <button className="button primary" type="submit" disabled={loading}>
          {loading ? 'Recherche...' : 'Rechercher'}
        </button>
      </form>
      {error && <p className="error-text">{error}</p>}

      <div className="table">
        <div className="table-head">
          <span>Nom</span>
          <span>SIREN</span>
          <span>Adresse</span>
          <span>Statut</span>
          <span>Code APE</span>
          <span>Creation</span>
        </div>
        {results.map((item) => (
          <div key={`${item.name}-${item.ape}`} className="table-row">
            <span className="table-title">{item.name}</span>
            <span>{item.siren || '-'}</span>
            <span>{item.address}</span>
            <span>{item.status}</span>
            <span>{item.ape}</span>
            <span>{item.created}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
