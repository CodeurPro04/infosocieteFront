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
      setStatus('Votre r\u00e9clamation a \u00e9t\u00e9 enregistr\u00e9e.')
    } catch (error) {
      setStatus(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="info-section-header">
          <h2>{page?.title}</h2>
          <hr className="blue-rule" />
        </div>
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-intro">
              <h3>{page?.subtitle}</h3>
              <p>{page?.body}</p>
            </div>
            <div className="contact-card">
              <h4>Prenez contact avec nous maintenant</h4>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                    <path
                      d="M7.2 3.75c.42 0 .82.2 1.06.55l1.52 2.2c.28.4.3.93.05 1.35l-1.02 1.7a.9.9 0 0 0 .1 1.06 11.9 11.9 0 0 0 4.05 3.53.9.9 0 0 0 1.1-.2l1.43-1.43c.38-.38.95-.5 1.44-.3l2.38.95c.58.23.92.83.83 1.45l-.32 2.22a1.5 1.5 0 0 1-1.48 1.29c-7.45 0-13.5-6.05-13.5-13.5A1.5 1.5 0 0 1 6.6 3.75h.6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>tel : {content.site?.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
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
                <span>mail : {content.site?.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                    <path
                      d="M12 6.5v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Du Lundi au Samedi, 8h - 20h</span>
              </div>
              <div className="contact-item contact-address">
                13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland
              </div>
            </div>
          </div>
          <form className="form-card contact-form" onSubmit={handleSubmit}>
            <h2>Nous contacter</h2>
            <label>
              Pr\u00e9nom et nom de famille
              <input name="name" placeholder="Jean Dupont" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Jean@mail.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Message" required />
            </label>
            <label className="contact-consent">
              <input type="checkbox" required />
              <span>
                En soumettant ce formulaire, j'accepte que les informations saisies soient utilis\u00e9es pour me
                recontacter.
              </span>
            </label>
            <button className="button primary contact-submit" type="submit" disabled={loading}>
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>
            {status && <p className="status-text">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
