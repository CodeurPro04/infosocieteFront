import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitContact } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'
import kbisCard from '../assets/illustrations/document-kbis.webp'
import kbisList from '../assets/illustrations/document.png'

export default function Hpy() {
  const { content } = useContent()
  const page = content.pages?.['hpy-infoscte']
  const kbis = page?.kbis
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
      setStatus('Merci, votre message a été envoyé.')
    } catch (error) {
      setStatus(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="hpy-page section">
      <div className="container">
        <div className="hpy-header">
          <h1>{page?.title}</h1>
        </div>
        <div className="hpy-sections">
          {page?.sections?.map((section) => (
            <div key={section.title} className="hpy-section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="hpy-contact">
          <h2>{page?.contactTitle}</h2>
          <div className="hpy-contact">
            <form className="form-card contact-form" onSubmit={handleSubmit}>
              <h3>{page?.contactFormTitle}</h3>
              <label>
                Prénom et nom de famille
                <input name="name" placeholder="Jean Dupont" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="Jean@mail.com" required />
              </label>
              <label>
                Sujet
                <input name="subject" placeholder="Sujet" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Message" required />
              </label>
              <label className="contact-consent">
                <input type="checkbox" required />
                <span>{page?.consentText}</span>
              </label>
              <button className="button primary contact-submit" type="submit" disabled={loading}>
                {loading ? 'Envoi...' : 'Envoyer'}
              </button>
              {status && <p className="status-text">{status}</p>}
            </form>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
