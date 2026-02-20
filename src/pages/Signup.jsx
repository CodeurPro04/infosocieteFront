import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitSignup } from '../api.js'

export default function Signup() {
  const [type, setType] = useState('entreprise')
  const [form, setForm] = useState({
    identifier: '',
    denomination: '',
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      profile: type,
      siret_or_siren: form.identifier,
      company_name: form.denomination,
      address: form.address,
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      source_path: '/inscription',
    }

    setLoading(true)
    setStatus('')
    submitSignup(payload)
      .then(() => {
        navigate('/paiement', {
          state: {
            signup: {
              type,
              ...form,
            },
          },
        })
      })
      .catch((error) => {
        setStatus(error.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="signup-section">
      <section className="signup-hero-section">
        <div className="signup-grid">
          <div className="signup-card">
            <div className="signup-header">Inscription accès personnel</div>
            <form className="signup-body" onSubmit={handleSubmit}>
              <div className="signup-radio">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="entreprise"
                    checked={type === 'entreprise'}
                    onChange={() => setType('entreprise')}
                  />
                  Je suis une entreprise
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="auto"
                    checked={type === 'auto'}
                    onChange={() => setType('auto')}
                  />
                  Je suis un auto-entrepreneur
                </label>
              </div>
              <label className="signup-label">
                * Nom de votre entreprise, SIRET ou SIREN
                <input
                  placeholder="Nom de votre entreprise, SIRET ou SIREN"
                  value={form.identifier}
                  onChange={handleChange('identifier')}
                  required
                />
              </label>
              <label className="signup-label">
                Dénomination
                <input
                  placeholder="Dénomination"
                  value={form.denomination}
                  onChange={handleChange('denomination')}
                  required
                />
              </label>
              <label className="signup-label">
                Adresse du siège
                <input
                  placeholder="Adresse du siège"
                  value={form.address}
                  onChange={handleChange('address')}
                  required
                />
              </label>
              <div className="signup-row">
                <label className="signup-label">
                  * Prénom
                  <input
                    placeholder="Jean"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    required
                  />
                </label>
                <label className="signup-label">
                  * Nom
                  <input
                    placeholder="Durand"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                    required
                  />
                </label>
              </div>
              <div className="signup-row">
                <label className="signup-label">
                  * Email
                  <input
                    placeholder="Jean@mail.com"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                </label>
                <label className="signup-label">
                  * Numéro de téléphone
                  <input
                    placeholder="01 23 45 67 89"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    required
                  />
                </label>
              </div>
              <button className="button primary signup-button" type="submit" disabled={loading}>
                {loading ? 'Validation...' : 'Continuer'}
              </button>
              {status ? <p className="status-text">{status}</p> : null}
            </form>
          </div>
          <div className="signup-info">
            <div className="signup-info-title">Accès illimité pour 1,49 €</div>
            <div className="signup-info-list">
              <div>
                <span className="signup-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 3.5 19 6v5.5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V6l7-2.5Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path d="m8.5 12.2 2.4 2.4 4.6-4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                Paiement sécurisé grâce au protocole SSL et certificat HTTPS
              </div>
              <div>
                <span className="signup-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M7 3.75h8.4l3.6 3.6V19a1.25 1.25 0 0 1-1.25 1.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path d="M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                Téléchargement instantané de vos documents d'entreprise et réception par mail
              </div>
              <div>
                <span className="signup-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
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
                Service d'assistance par téléphone lundi/samedi de 8h/20h
              </div>
              <div>
                <span className="signup-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 3.5 19 6v5.5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V6l7-2.5Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Accès illimité à toutes les informations des entreprises pour 1,49 €
              </div>
            </div>
            <div className="signup-info-note">
              Suite à ces 72H et sans une résiliation de votre part, votre formule basique se transformera en une
              formule premium sans engagement à durée illimitée au prix de 49,99 € par mois
            </div>
          </div>
        </div>
      </section>
      <section className="signup-rest">
        <div className="signup-formula-panel">
          <div className="signup-formula-card">
            <div className="signup-formula-title">Notre formule Infogref.goentrypro</div>
            <p className="signup-formula-price">Pour 1,49 €/72h puis 49,99 €/mois</p>
            <p>Inscrivez vous pour profiter de nombreux avantages chez Infosociete qui vous permettront de voir :</p>
          </div>
          <ul className="signup-formula-list">
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Jusqu'à 7 extraits Kbis par mois.
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Jusqu'à 7 avis de situation SIRENE (Insee).
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Jusqu'à 7 attestations d'immatriculation au RNE (Inpi).
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Accès aux informations clés des entreprises : Chiffre d'affaires, identité des dirigeants et liste des établissements.
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Jusqu'à 30 diagnostics financiers NOTA-PME et/ou AFDCC par mois pour surveiller vos partenaires et clients.
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Assistance personnalisée disponible par mail pour toutes vos questions métier.
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M9.5 16.2 5.8 12.5a.9.9 0 0 1 1.27-1.27l2.43 2.43 6.46-6.46a.9.9 0 0 1 1.27 1.27l-7.73 7.73a.9.9 0 0 1-1.27 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Disponibilité étendue : Support client joignable du lundi au samedi, de 8 h à 20 h.
            </li>
          </ul>
        </div>
        <div className="signup-extra">
          <div className="signup-benefits-grid">
            <div className="signup-benefit-card">
              <span className="signup-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 3.75h8.4l3.6 3.6V19a1.25 1.25 0 0 1-1.25 1.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <p>Consultez en illimité les informations de votre entreprise</p>
            </div>
            <div className="signup-benefit-card">
              <span className="signup-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 5.5h14v10H5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="m8 9 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M12 13v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <p>Téléchargement instantané et envoi par mail de vos documents d'entreprise</p>
            </div>
            <div className="signup-benefit-card">
              <span className="signup-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
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
              <p>Service d'assistance par téléphone lundi/samedi de 8h/20h</p>
            </div>
            <div className="signup-benefit-card">
              <span className="signup-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 3.5 19 6v5.5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V6l7-2.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>Paiement sécurisé grâce au protocole SSL et certificat HTTPS</p>
            </div>
          </div>
          <div className="signup-info-cards">
            <div className="signup-info-card">
              <div className="signup-info-eyebrow">Notre formule</div>
              <p>Profitez des données de l'entreprise pour 1,49 € pendant 72h*</p>
              <a className="signup-info-link" href="/conditions-de-la-formule">
                *voir condition formule premium
              </a>
            </div>
            <div className="signup-info-card">
              <div className="signup-info-eyebrow">Nous contacter</div>
              <p>Prenez contact avec nous maintenant</p>
              <div className="signup-info-row">
                <span className="signup-info-mini-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M17 17.5c-1.2 1-2.7 1.5-4.5 1.5a6 6 0 1 1 0-12c2.8 0 4.8 1.8 4.8 4.2 0 1.4-.7 2.3-1.8 2.3-1 0-1.7-.7-1.7-1.9v-.4a2.6 2.6 0 0 0-2.3-1.2 2.7 2.7 0 0 0 0 5.4 2.6 2.6 0 0 0 2.2-1.1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>contact@infosociete.pro</span>
              </div>
              <div className="signup-info-row">
                <span className="signup-info-mini-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
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
                <a href="/contact">Via la page de contact</a>
              </div>
            </div>
            <div className="signup-info-card">
              <div className="signup-info-eyebrow">Nous contacter</div>
              <p>Du lundi au samedi, par téléphone au</p>
              <div className="signup-info-row">
                <span className="signup-info-mini-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
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
                <span>0 805 086 583</span>
              </div>
              <div className="signup-info-row">
                <span className="signup-info-mini-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
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
                <span>de 8h à 20h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}


