import { NavLink, useParams } from 'react-router-dom'
import mapsite from '../assets/illustrations/mapsite.png'
import kbisSample from '../assets/illustrations/kbisflou.png'

export default function CompanyDetail() {
  const { id } = useParams()

  return (
    <section className="detail-page section">
      <div className="container">
        <div className="detail-hero">
          <div className="detail-hero-inner">
            <h1>L'extrait de Kbis de l'entreprise</h1>
            <p>
              Accès illimité : formule d'essai Infosociete Pro de 1,49 € pour 72h, puis 69,00 € par mois sans
              obligation de reconduction
            </p>
            <p>
              L'extrait de Kbis est la carte d'identité de votre société, faites la demande en seulement quelques
              clics !
            </p>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-form-card">
            <div className="detail-form-header">Identité du Demandeur</div>
            <div className="detail-form-body">
              <div className="detail-radio">
                <label>
                  <input type="radio" name="profil" defaultChecked />
                  Je suis une entreprise
                </label>
                <label>
                  <input type="radio" name="profil" />
                  Je suis un auto-entrepreneur
                </label>
                <label>
                  <input type="radio" disabled name="profil" />
                  Je suis un particulier
                </label>
              </div>

              <label className="detail-label">
                * Nom de votre entreprise, SIRET ou SIREN
                <input defaultValue={id || ''} />
              </label>

              <div className="detail-row">
                <label className="detail-label">
                  * Prénom
                  <div className="detail-input"><input placeholder="Jean" /><span className="detail-input-check">{'\u2713'}</span></div>
                </label>
                <label className="detail-label">
                  * Nom
                  <div className="detail-input"><input placeholder="Jean" /><span className="detail-input-check">{'\u2713'}</span></div>
                </label>
              </div>

              <div className="detail-row">
                <label className="detail-label">
                  * Email
                  <div className="detail-input"><input placeholder="Jean@mail.com" /><span className="detail-input-check">{'\u2713'}</span></div>
                </label>
                <label className="detail-label">
                  * Numéro de téléphone
                  <div className="detail-input"><input placeholder="01 23 45 67 89" /><span className="detail-input-check">{'\u2713'}</span></div>
                </label>
              </div>

              <p className="detail-note">
                En cliquant sur "Continuer" ci-dessous, vous acceptez d'être facturé 1,49 € immédiatement et
                d'accepter nos Conditions Générales de Vente ainsi que notre Politique de confidentialité. Un
                prélèvement automatique mensuel de 69,00 € sera effectué après 72 heures, puis chaque mois à la même
                date, avec la possibilité d'annuler à tout moment.
              </p>

              <NavLink className="detail-submit" to="/paiement">
                Continuer
              </NavLink>
            </div>
          </div>

          <div className="detail-sample-card">
            <div className="detail-sample-title">Exemple d'un extrait de Kbis</div>
            <div className="detail-sample-media">
              <img src={kbisSample} alt="Extrait Kbis" />
            </div>
            <div className="detail-sample-foot">
              <strong>Satisfait ou Remboursé</strong>
              <span>Profitez de notre offre Satisfait ou Remboursé pour chaque Kbis commandé !</span>
            </div>
          </div>
        </div>

        <div className="detail-offer">
          <div className="detail-offer-panel">
            <div className="detail-offer-card">
              <h3>Notre formule Infosociete Pro</h3>
              <p className="detail-offer-price">Pour 1,49 €/72h puis 69,00 €/mois</p>
              <p className="detail-offer-text">
                Inscrivez vous pour profiter de nombreux avantages chez Infosociete qui vous permettront de voir :
              </p>
              <button className="detail-offer-button" type="button">
                S'inscrire
              </button>
            </div>
            <ul className="detail-offer-list">
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Le chiffre d'affaire d'une entreprise, le nom des dirigeants et les différents établissements
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                7 extraits de Kbis par mois
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Bilans, Brevets, et documents de votre société à accès illimité
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Une assistance personnalisée disponible par mail et par téléphone
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Support disponible du lundi au samedi de 8 h à 20 h
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Accès limité à 30 diagnostics Financier NOTA-PME et/ou AFDCC par mois
              </li>
            </ul>
          </div>

          <div className="detail-benefits">
            <div className="detail-benefit-card">
              <div className="detail-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 3.5h7l4 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Zm6.5 1.5v3h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Consultez en illimité les informations de votre entreprise</p>
            </div>
            <div className="detail-benefit-card">
              <div className="detail-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4.5 6.5h15a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15v-7a1.5 1.5 0 0 1 1.5-1.5Zm3 11 1.5 3m6.5-3-1.5 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Téléchargement instantané et envoi par mail de vos documents d'entreprise*</p>
            </div>
            <div className="detail-benefit-card">
              <div className="detail-benefit-icon" aria-hidden="true">
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
              </div>
              <p>Service d'Assistance par Téléphone lundi/samedi de 8h/20h</p>
            </div>
            <div className="detail-benefit-card">
              <div className="detail-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 3.5 18.5 6v6.8c0 3.7-2.6 7-6.5 7.7-3.9-.7-6.5-4-6.5-7.7V6L12 3.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Paiement sécurisé grâce au protocole SSL et certificat HTTPS</p>
            </div>
          </div>
          <p className="detail-benefit-note">
            *Pour les documents de type extrait Kbis, la génération et l'envoi du document peuvent prendre
            jusqu'à 48 heures.
          </p>
        </div>

        <div className="detail-company">
          <div className="detail-company-header">
            <h2>Totalenergies se (totalenergie se)</h2>
          </div>
          <div className="detail-company-body">
            <div className="detail-company-info">
              <div className="detail-company-row">
                <span className="detail-company-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M9 4 7.5 20M16.5 4 15 20M4 9.5h16M3.5 14.5h16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="detail-company-label">SIREN</span>
                <span className="detail-company-value">542051180</span>
              </div>
              <div className="detail-company-row">
                <span className="detail-company-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 7.5h.01M11.25 10.5h1.5v6h-1.5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="detail-company-label">Legal Status</span>
                <span className="detail-company-value">Actif</span>
              </div>
              <div className="detail-company-row">
                <span className="detail-company-icon" aria-hidden="true">
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
                <span className="detail-company-label">Fondée</span>
                <span className="detail-company-value">01/01/1954</span>
              </div>
              <div className="detail-company-row">
                <span className="detail-company-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 21s6-4.2 6-10a6 6 0 1 0-12 0c0 5.8 6 10 6 10Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="11" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="detail-company-label">Adress</span>
                <span className="detail-company-value">LA DEFENSE 6 2 PLACE JEAN MILLIER 92400 COURBEVOIE</span>
              </div>
            </div>
            <div className="detail-company-map">
              <img src={mapsite} alt="Carte" />
            </div>
          </div>
        </div>


        <div className="detail-key">
          <div className="info-section-header">
            <h2>Chiffres clés</h2>
            <hr className="blue-rule" />
          </div>
          <div className="detail-key-placeholder"><span className="detail-key-blur">Aucune donnnée n'est disponible</span></div>
        </div>


        
        <div className="detail-legal">
          <div className="info-section-header">
            <h2>Informations légales</h2>
          </div>
          <div className="detail-legal-card">
            <div className="detail-legal-row detail-legal-top">
              <span className="detail-legal-label">Dénomination</span>
              <span className="detail-legal-value">TOTALENERGIES SE (TOTALENERGIE SE)</span>
            </div>
            <div className="detail-legal-grid">
              <div className="detail-legal-item">
                <span className="detail-legal-label">SIREN</span>
                <span className="detail-legal-value">542051180</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">SIRET du siège</span>
                <span className="detail-legal-value">54205118000066</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Adresse du siège</span>
                <span className="detail-legal-value">LA DEFENSE 6 2 PLACE JEAN MILLIER 92400 COURBEVOIE</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Statut juridique</span>
                <span className="detail-legal-value">5800</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Date de création</span>
                <span className="detail-legal-value">01/01/1954</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Etablissements ouverts</span>
                <span className="detail-legal-value">5</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Type d'entreprise</span>
                <span className="detail-legal-value">Société</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Etat administratif</span>
                <span className="detail-legal-value">Actif</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Activité principale</span>
                <span className="detail-legal-value">70.10Z</span>
              </div>
              <div className="detail-legal-item">
                <span className="detail-legal-label">Tranche d'effectifs</span>
                <span className="detail-legal-value">51</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>

        
    </section>
  )
}
