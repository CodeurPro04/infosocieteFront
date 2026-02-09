import { useState } from 'react'
import { submitClaim } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'

export default function Claim() {
  const { content } = useContent()
  const page = content.pages?.reclamation
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    setLoading(true)
    setStatus('')
    try {
      await submitClaim(payload)
      event.target.reset()
      setStatus('Votre reclamation a ete enregistree.')
    } catch (error) {
      setStatus(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.subtitle}</p>
        <p className="muted">{page?.body}</p>
      </div>
      <form className="form-card wide" onSubmit={handleSubmit}>
        <label>
          Nom complet
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Numero de dossier ou commande
          <input name="order" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button className="button primary" type="submit" disabled={loading}>
          {loading ? 'Envoi...' : 'Envoyer la reclamation'}
        </button>
        {status && <p className="status-text">{status}</p>}
      </form>
    </section>
  )
}
