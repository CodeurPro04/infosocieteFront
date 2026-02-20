import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import kbisSample from "../assets/illustrations/kbisflou.png";
import cards from "../assets/illustrations/cards.png";
import { createPaymentIntent, submitPaymentRecord } from "../api.js";

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

function StripeCheckoutForm({ customerName = "", paymentContext = {}, onCloseSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState(customerName);
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || submitting) {
      return;
    }
    if (!accepted) {
      setError("Veuillez accepter les conditions avant de continuer.");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess("");

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: name.trim(),
          },
        },
        return_url: `${window.location.origin}/paiement?status=ok`,
      },
      redirect: "if_required",
    });

    if (result.error) {
      setError(result.error.message || "Le paiement n'a pas pu être validé.");
      setSubmitting(false);
      return;
    }

    const confirmedIntentId = result.paymentIntent?.id || paymentContext.intentId || null;

    try {
      await submitPaymentRecord({
        siret_or_siren: paymentContext.identifier || "UNKNOWN",
        amount: "1.49",
        holder_name: name.trim(),
        profile: paymentContext.profile || null,
        company_name: paymentContext.denomination || null,
        address: paymentContext.address || null,
        first_name: paymentContext.firstName || null,
        last_name: paymentContext.lastName || null,
        phone: paymentContext.phone || null,
        email: paymentContext.email || null,
        consent: true,
        source_path: "/paiement",
        stripe_intent_id: confirmedIntentId,
      });
    } catch (recordError) {
      setError(recordError.message || "Paiement validé mais enregistrement impossible.");
      setSubmitting(false);
      return;
    }

    setSuccess("Paiement validé. Votre demande est en cours de traitement.");
    setShowSuccessModal(true);
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom du titulaire
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jean Dupont"
          required
        />
      </label>

      <label>
        Paiement sécurisé Stripe
        <div className="payment-stripe-field">
          <PaymentElement />
        </div>
      </label>

      <label className="payment-consent">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
          required
        />
        <span>
          Je déclare avoir lu et accepté les{" "}
          <a className="payment-link" href="/conditions-generales-de-vente">
            CGV
          </a>
          {" "}et la{" "}
          <a className="payment-link" href="/politique-de-confidentialite">
            Politique de confidentialité
          </a>
          . En validant, je confirme ma commande et j'accepte le règlement immédiat de 1,49 € pour
          un accès illimité de 72h à vos services d'assistance.
          <br />
          <br />
          Je reconnais qu'à l'issue de cet essai, et sans résiliation de ma part, un abonnement sera
          activé automatiquement au tarif de 49,99 € par mois. Cette offre est sans engagement : je
          peux annuler à tout moment et sans frais via contact@docsflow.fr.
        </span>
      </label>

      <button className="payment-submit" type="submit" disabled={!stripe || submitting || !accepted}>
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
            <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        {submitting ? "Paiement en cours..." : "Payer avec Stripe"}
      </button>

      {error ? <p className="payment-error">{error}</p> : null}
      {success ? <p className="payment-success">{success}</p> : null}
      <p className="payment-note">Votre transaction apparaîtra sous le libellé : Infosociete ou infosociete.pro</p>

      {showSuccessModal ? (
        <div className="payment-success-overlay" role="presentation">
          <div className="payment-success-modal" role="dialog" aria-modal="true" aria-label="Paiement effectué">
            <h3>Paiement effectué avec succès</h3>
            <p>
              Votre paiement de <strong>1,49 €</strong> a bien été validé.
            </p>
            <p>Votre demande d’extrait Kbis est enregistrée et en cours de traitement.</p>
            {paymentContext.intentId ? (
              <p className="payment-success-reference">Référence : {paymentContext.intentId}</p>
            ) : null}
            <button
              className="button primary"
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                if (typeof onCloseSuccess === "function") {
                  onCloseSuccess();
                }
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const payload = useMemo(() => state?.request || state?.signup || {}, [state]);
  const [clientSecret, setClientSecret] = useState("");
  const [intentId, setIntentId] = useState("");
  const [loadingIntent, setLoadingIntent] = useState(true);
  const [intentError, setIntentError] = useState("");
  const lastIntentKeyRef = useRef("");

  const customerName = `${payload.firstName || ""} ${payload.lastName || ""}`.trim();
  const identifier = payload.identifier || "";

  useEffect(() => {
    const intentKey = `${identifier || "UNKNOWN"}::${payload.email || ""}`;
    if (lastIntentKeyRef.current === intentKey) {
      return;
    }
    lastIntentKeyRef.current = intentKey;

    const initIntent = async () => {
      if (!stripePublicKey) {
        setIntentError("Clé publique Stripe manquante. Ajoutez VITE_STRIPE_PUBLISHABLE_KEY.");
        setLoadingIntent(false);
        return;
      }

      setLoadingIntent(true);
      setIntentError("");
      try {
        const data = await createPaymentIntent({
          amount: 1.49,
          siret_or_siren: identifier || "UNKNOWN",
          email: payload.email || null,
          description: "Paiement accès Kbis 72h",
          metadata: {
            source: "frontend",
            profile: payload.type || payload.profile || "",
            company_name: payload.denomination || "",
            first_name: payload.firstName || "",
            last_name: payload.lastName || "",
          },
        });
        setClientSecret(data.client_secret || "");
        setIntentId(data.intent_id || "");
      } catch (error) {
        setIntentError(error.message || "Impossible d'initialiser le paiement sécurisé.");
      } finally {
        setLoadingIntent(false);
      }
    };

    initIntent();
  }, [identifier, payload.email]);

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
                  <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
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

              {loadingIntent ? <p className="payment-loading">Initialisation du paiement sécurisé...</p> : null}
              {intentError ? <p className="payment-error">{intentError}</p> : null}

              {!loadingIntent && !intentError && clientSecret && stripePromise ? (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: { theme: "stripe" },
                  }}
                >
                  <StripeCheckoutForm
                    customerName={customerName}
                    paymentContext={{
                      identifier,
                      profile: payload.type || payload.profile || "",
                      denomination: payload.denomination || "",
                      address: payload.address || "",
                      firstName: payload.firstName || "",
                      lastName: payload.lastName || "",
                      phone: payload.phone || "",
                      email: payload.email || "",
                      intentId,
                    }}
                    onCloseSuccess={() => navigate("/")}
                  />
                </Elements>
              ) : null}
            </div>
          </div>

          <div className="payment-sample">
            <div className="payment-sample-title">Exemple d'un extrait de Kbis</div>
            <div className="payment-sample-media">
              <img src={kbisSample} alt="Extrait Kbis" />
            </div>
            <p className="payment-sample-note">
              *Notre formule premium Infogref.goentrypro est réservée aux entreprises et aux auto-entrepreneurs.
              Si vous êtes un particulier merci de vous rendre sur le site
              <a className="payment-sample-link" href="https://www.infogreffe.fr/">
                {" "}
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
          *Pour les documents de type extrait Kbis, la génération et l'envoi du document peuvent prendre jusqu'à 48
          heures.
        </p>

        <div className="detail-offer-panel payment-offer-panel">
          <div className="detail-offer-card">
            <h3>Notre formule Infogref.goentrypro</h3>
            <p className="detail-offer-price">Pour 1,49 €/72h puis 49,99 €/mois</p>
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
                {"\u2713"}
              </span>
              Jusqu'à 7 extraits Kbis par mois.
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Jusqu'à 7 avis de situation SIRENE (Insee).
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Jusqu'à 7 attestations d'immatriculation au RNE (Inpi).
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Accès aux informations clés des entreprises : chiffre d'affaires, identité des dirigeants et liste des
              établissements.
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Jusqu'à 30 diagnostics financiers NOTA-PME et/ou AFDCC par mois pour surveiller vos partenaires et
              clients.
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Assistance personnalisée disponible par mail pour toutes vos questions métier.
            </li>
            <li>
              <span className="detail-check" aria-hidden="true">
                {"\u2713"}
              </span>
              Disponibilité étendue : support client joignable du lundi au samedi, de 8 h à 20 h.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
