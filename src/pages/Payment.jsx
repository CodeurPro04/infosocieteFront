import kbisSample from '../assets/illustrations/kbisflou.png'
import cards from '../assets/illustrations/cards.png'

export default function Payment() {
  return (
    <section className="payment-page section">
      <div className="payment-hero">
        <div className="container payment-grid">
          <div className="payment-card">
          <div className="payment-header">
            <span className="payment-lock" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            Paiement en ligne sécurisé
          </div>
          <div className="payment-body">
            <div className="payment-amount">
              <div>
                Montant à régler : <strong>1,49 €</strong>
              </div>
              <img src={cards} alt="Visa et MasterCard" />
            </div>

            <label>
              Nom du titulaire
              <input placeholder="Jean Dupont" />
            </label>
            <label>
              Numéro de carte
              <input placeholder="1234 1234 1234 1234" />
            </label>
            <div className="payment-row">
              <label>
                Date d'exp
                <input placeholder="MM/AA" />
              </label>
              <label className="payment-cvv">
                CVV ?
                <input placeholder="123" />
              </label>
            </div>

            <label className="payment-consent">
              <input type="checkbox" />
              <span>
                Je déclare avoir lu et accepté les{' '}
                <a className="payment-link" href="/conditions-generales-de-vente">
                  Conditions Générales de Vente
                </a>
                , les{' '}
                <a className="payment-link" href="/conditions-generales-de-vente">
                  Conditions Générales de Service
                </a>{' '}
                et la{' '}
                <a className="payment-link" href="/politique-de-confidentialite">
                  Politique de confidentialité
                </a>{' '}
                de infosociete.pro. En validant les informations ci-dessus, je confirme que j'ai commandé un accès
                mensuel illimité au tarif de 69,00 €, avec une formule basique de 72 heures au tarif de 1,49 €.
                Pour annuler votre formule premium, veuillez{' '}
                <a className="payment-link" href="/resiliation">
                  cliquer ici
                </a>
                . Vous pouvez contacter notre support par email à contact@infosociete.pro ou bien par téléphone
                au 0 805 086 583.
              </span>
            </label>

            <button className="payment-submit" type="button">
              <span className="payment-lock-inline" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              Obtenir l'extrait de Kbis
            </button>

            <p className="payment-note">
              Votre transaction apparaitra sous le libellé : Infosociete ou infosociete.pro
            </p>
          </div>
          </div>

          <div className="payment-sample">
          <div className="payment-sample-title">Exemple d'un extrait de Kbis</div>
          <div className="payment-sample-media">
            <img src={kbisSample} alt="Extrait Kbis" />
          </div>
          <p className="payment-sample-note">
            *Notre formule premium Infosociete Pro est réservée aux entreprises et aux auto-entrepreneurs. Si
            vous êtes un particulier merci de vous rendre sur le site
            <a className="payment-sample-link" href="https://www.infogreffe.fr/">
              {' '}
              https://www.infogreffe.fr/
            </a>
          </p>
          </div>
        </div>
      </div>

      <div className="container payment-followup">
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

        <div className="detail-offer-panel payment-offer-panel">
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
                {'\u2713'}
              </span>
              Le chiffre d’affaire d’une entreprise, le nom des dirigeants et les différents établissements
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {'\u2713'}
              </span>
              7 extraits de Kbis par mois
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {'\u2713'}
              </span>
              Bilans, Brevets, et documents de votre société à accès illimité
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {'\u2713'}
              </span>
              Une assistance personnalisée disponible par mail et par téléphone
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {'\u2713'}
              </span>
              Support disponible du lundi au samedi de 8 h à 20 h
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {'\u2713'}
              </span>
              Accès limité à 30 diagnostics Financier NOTA-PME et/ou AFDCC par mois
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
