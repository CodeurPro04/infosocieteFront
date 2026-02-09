import { useState } from 'react'
import { submitContact } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'

export default function Contact() {
  const { content } = useContent()
  const page = content.pages?.contact
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    setLoading(true)
    setStatus('')
    try {
      await submitContact(payload)
      event.target.reset()
      setStatus('Merci, votre message a ete envoye.')
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
      <div className="contact-grid">
        <div className="contact-card">
          <h2>Coordonnees</h2>
          <ul className="contact-list">
            <li>{content.site?.email}</li>
            <li>{content.site?.phone}</li>
            <li>{content.site?.hours}</li>
          </ul>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Envoyer un message</h2>
          <label>
            Nom complet
            <input name="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Entreprise
            <input name="company" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="button primary" type="submit" disabled={loading}>
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  )
}
