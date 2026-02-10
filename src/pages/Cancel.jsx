import { useState } from 'react'
import { submitCancel } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'

export default function Cancel() {
  const { content } = useContent()
  const page = content.pages?.resiliation
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    setLoading(true)
    setStatus('')
    try {
      await submitCancel(payload)
      event.target.reset()
      setStatus('Votre demande a ete recue. Nous revenons vers vous rapidement.')
    } catch (error) {
      setStatus(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="cancel-section">
      <div className="cancel-card">
        <h1>{page?.title}</h1>
        <p>{page?.body}</p>
        <form className="cancel-form" onSubmit={handleSubmit}>
          <label>
            {page?.field || 'Email'}
            <input name="email" type="email" placeholder="Jean@mail.com" required />
          </label>
          <button className="button primary cancel-button" type="submit" disabled={loading}>
            {loading ? 'Envoi...' : 'Résilier'}
          </button>
          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  )
}
