import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import mapsite from "../assets/illustrations/mapsite.png";
import kbisSample from "../assets/illustrations/kbisflou.png";
import { useState } from "react";
import { submitKbisRequest } from "../api.js";

export default function CompanyDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const prefill = state?.prefill || {};
  const [requestForm, setRequestForm] = useState({
    profile: "entreprise",
    identifier: prefill.identifier || id || "",
    denomination: prefill.denomination || "",
    address: prefill.address || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (field) => (event) => {
    setRequestForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      siret_or_siren: requestForm.identifier,
      profile: requestForm.profile,
      company_name: requestForm.denomination,
      address: requestForm.address,
      first_name: requestForm.firstName,
      last_name: requestForm.lastName,
      email: requestForm.email,
      phone: requestForm.phone,
      consent: true,
      source_path: `/recherche-entreprise/${id || requestForm.identifier}`,
    };

    setLoading(true);
    setStatus("");
    submitKbisRequest(payload)
      .then(() => {
        navigate("/paiement", {
          state: {
            request: requestForm,
          },
        });
      })
      .catch((error) => {
        setStatus(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="detail-page section">
      <div className="container">
        <div className="detail-hero">
          <div className="detail-hero-inner">
            <h1>L'extrait de Kbis de l'entreprise</h1>
            <p>
              Accès illimité : profitez de notre formule d'essai à seulement
              1,49 € pour une durée de 72h.
            </p>
            <p>
              L'extrait Kbis est la véritable carte d'identité de votre société
              ; réalisez votre demande d'assistance en seulement quelques clics
              !
            </p>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-form-card">
            <div className="detail-form-header">Identité du Demandeur</div>
            <form className="detail-form-body" onSubmit={handleSubmit}>
              <div className="detail-radio">
                <label>
                  <input
                    type="radio"
                    name="profil"
                    value="entreprise"
                    checked={requestForm.profile === "entreprise"}
                    onChange={updateField("profile")}
                    required
                  />
                  Je suis une entreprise
                </label>
                <label>
                  <input
                    type="radio"
                    name="profil"
                    value="auto-entrepreneur"
                    checked={requestForm.profile === "auto-entrepreneur"}
                    onChange={updateField("profile")}
                    required
                  />
                  Je suis un auto-entrepreneur
                </label>
                <label>
                  <input type="radio" disabled name="profil" />
                  Je suis un particulier
                </label>
              </div>

              <label className="detail-label">
                * Nom de votre entreprise, SIRET ou SIREN
                <input value={requestForm.identifier} onChange={updateField("identifier")} required />
              </label>

              <label className="detail-label">
                Dénomination
                <input value={requestForm.denomination} onChange={updateField("denomination")} required />
              </label>

              <label className="detail-label">
                Adresse du siège
                <input value={requestForm.address} onChange={updateField("address")} required />
              </label>

              <div className="detail-row">
                <label className="detail-label">
                  * Prénom
                  <div className="detail-input">
                    <input
                      value={requestForm.firstName}
                      onChange={updateField("firstName")}
                      placeholder="Jean"
                      required
                    />
                    <span className="detail-input-check">{"\u2713"}</span>
                  </div>
                </label>
                <label className="detail-label">
                  * Nom
                  <div className="detail-input">
                    <input
                      value={requestForm.lastName}
                      onChange={updateField("lastName")}
                      placeholder="Durand"
                      required
                    />
                    <span className="detail-input-check">{"\u2713"}</span>
                  </div>
                </label>
              </div>

              <div className="detail-row">
                <label className="detail-label">
                  * Email
                  <div className="detail-input">
                    <input
                      type="email"
                      value={requestForm.email}
                      onChange={updateField("email")}
                      placeholder="Jean@mail.com"
                      required
                    />
                    <span className="detail-input-check">{"\u2713"}</span>
                  </div>
                </label>
                <label className="detail-label">
                  * Numéro de téléphone
                  <div className="detail-input">
                    <input
                      type="tel"
                      value={requestForm.phone}
                      onChange={updateField("phone")}
                      placeholder="01 23 45 67 89"
                      required
                    />
                    <span className="detail-input-check">{"\u2713"}</span>
                  </div>
                </label>
              </div>

              <p className="detail-note">
                En cliquant sur le bouton "Continuer" ci-dessous, vous confirmez
                votre commande et acceptez le règlement immédiat de la somme de
                1,49 €. Ce montant de 1,49 € correspond à vos frais d'accès
                initiaux et à la période d'évaluation de nos services
                d'assistance administrative de 72 heures de période d'essai . En
                validant cette transaction de 1,49 €, vous reconnaissez avoir
                pris connaissance et accepté sans réserve l'intégralité de nos
                Conditions Générales de Vente ainsi que notre Politique de
                Confidentialité. À l'issue de cette période d'essai de 72
                heures, et sans action de résiliation de votre part, un
                abonnement Premium sera automatiquement activé. Cet abonnement
                donne lieu à un prélèvement automatique mensuel de 49,99 €,
                reconduit tacitement chaque mois à la date anniversaire de votre
                inscription. Nous vous rappelons que cette offre est sans
                engagement de durée : vous conservez la liberté d'annuler votre
                abonnement à tout moment et sans frais supplémentaires via notre
                support client à l'adresse contact@docsflow.fr.
              </p>

              <button className="detail-submit" type="submit" disabled={loading}>
                {loading ? "Validation..." : "Continuer"}
              </button>
              {status ? <p className="status-text">{status}</p> : null}
            </form>
          </div>

          <div className="detail-sample-card">
            <div className="detail-sample-title">
              Exemple d'un extrait de Kbis
            </div>
            <div className="detail-sample-media">
              <img src={kbisSample} alt="Extrait Kbis" />
            </div>
            <div className="detail-sample-foot">
              <strong>Satisfait ou Remboursé</strong>
              <span>
                Profitez de notre offre Satisfait ou Remboursé pour chaque Kbis
                commandé !
              </span>
            </div>
          </div>
        </div>

        <div className="detail-offer">
          <div className="detail-offer-panel">
            <div className="detail-offer-card">
              <h3>Notre formule INFO-DOCSFLOW</h3>
              <p className="detail-offer-price">
                Pour 1,49 €/72h puis 49,99 €/mois
              </p>
              <p className="detail-offer-text">
                Inscrivez vous pour profiter de nombreux avantages chez
                INFO-DOCSFLOW qui vous permettront de voir :
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
                Jusqu'à 7 extraits Kbis par mois.
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Jusqu'à 7 avis de situation SIRENE (Insee).
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Jusqu'à 7 attestations d'immatriculation au RNE (Inpi).
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Accès aux informations clés des entreprises : Chiffre d'affaires, identité des dirigeants et liste des établissements.
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Jusqu'à 30 diagnostics financiers NOTA-PME et/ou AFDCC par mois pour surveiller vos partenaires et clients.
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Assistance personnalisée disponible par mail pour toutes vos questions métier.
              </li>
              <li>
                <span className="detail-check" aria-hidden="true">
                  ✓
                </span>
                Disponibilité étendue : Support client joignable du lundi au samedi, de 8 h à 20 h.
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
              <p>
                Téléchargement instantané et envoi par mail de vos documents
                d'entreprise*
              </p>
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
              <p>
                Paiement sécurisé grâce au protocole SSL et certificat HTTPS
              </p>
            </div>
          </div>
          <p className="detail-benefit-note">
            *Pour les documents de type extrait Kbis, la génération et l'envoi
            du document peuvent prendre jusqu'à 48 heures.
          </p>
        </div>
      </div>
    </section>
  );
}
