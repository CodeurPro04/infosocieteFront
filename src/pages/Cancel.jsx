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
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.body}</p>
      </div>
      <form className="form-card wide" onSubmit={handleSubmit}>
        <label>
          {page?.field || 'Email'}
          <input name="email" type="email" required />
        </label>
        <button className="button primary" type="submit" disabled={loading}>
          {loading ? 'Envoi...' : 'Confirmer la resiliation'}
        </button>
        {status && <p className="status-text">{status}</p>}
      </form>
    </section>
  )
}
