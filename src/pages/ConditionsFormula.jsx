import { useContent } from '../context/ContentContext.jsx'

export default function ConditionsFormula() {
  const { content } = useContent()
  const page = content.pages?.['conditions-de-la-formule']
  const privilegeSection = page?.sections?.[0]
  const privilegeItems = privilegeSection?.body
    ? privilegeSection.body.split(',').map((item) => item.trim()).filter(Boolean)
    : []
  const priceSection = page?.sections?.[1]
  const cancelSection = page?.sections?.[2]
  const modalitySection = page?.sections?.[3]
  const commSection = page?.sections?.[4]
  const delaySection = page?.sections?.[5]
  const storageSection = page?.sections?.[6]

  return (
    <section className="conditions-page">
      <div className="container">
        <h1 className="conditions-title">Termes et Conditions de notre formule Infosociete Pro</h1>
        <div className="conditions-card">
          <h2 className="conditions-subtitle">Condition formule premium</h2>
          <p>La formule Infosociete vous permet d'accéder à plusieurs privilèges :</p>
          {privilegeItems.length > 0 && (
            <div className="conditions-list">
              <div>- {privilegeItems[0]}</div>
              <div className="conditions-connector">AINSI QUE</div>
              {privilegeItems.slice(1).map((item) => (
                <div key={item}>- {item}</div>
              ))}
            </div>
          )}
        </div>
        <div className="conditions-block">
          <h2 className="conditions-subtitle">Prix de la formule à Infosociete</h2>
          <p>{priceSection?.body}</p>
          <p>
            Lors de l'achat d'un extrait de Kbis sur Infosociete, vous bénéficierez de la formule basique pour 72
            heures, puis passez en formule premium à 49,99 € par mois sans une résiliation du compte dans les 72H
            suivant l'achat de la formule.
          </p>
          <p>
            La formule à Infosociete peut être résilié à tout moment et sans conditions. De plus, la résiliation
            de votre formule Infosociete est totalement gratuite.
          </p>
          <p>
            Si vous souhaitez résilier, il vous suffit de cliquer sur le lien de résiliation suivant:{' '}
            <span className="conditions-link">https://infosociete.pro/resiliation</span>.
          </p>
        </div>
        <div className="conditions-block">
          <h2 className="conditions-subtitle">Modalité de la formule Infosociete</h2>
          <p>{modalitySection?.body}</p>
          <p>
            Votre formule Infosociete est bien évidemment résiliable à tout moment et sans aucune condition. Rien
            ne vous sera facturé lors de la résiliation de votre formule car elle est entièrement gratuite !
          </p>
          <p>
            Pour résilier votre formule il vous suffit de vous rendre sur la page « Résiliation » et de renseigner
            l'adresse mail avec laquelle vous avez acheté votre formule Infosociete. Vous pouvez mettre fin à votre
            formule <span className="conditions-link">ici</span>.
          </p>
        </div>
        <div className="conditions-block">
          <h2 className="conditions-subtitle">Communications</h2>
          <p>{commSection?.body}</p>
        </div>
        <div className="conditions-block">
          <h2 className="conditions-subtitle">Délai de réception d'un extrait de Kbis</h2>
          <p>{delaySection?.body}</p>
          <p>
            Si un problème survient ou si l'extrait de Kbis est indisponible, Infosociete se réserve le droit de
            décliner votre demande d'extrait de Kbis ainsi votre demande sera automatiquement déclinée et celle-ci
            ne seras pas comptabilisé. Il vous sera alors possibles de faire une autre demande d'un extrait de
            Kbis.
          </p>
        </div>
        <div className="conditions-block">
          <h2 className="conditions-subtitle">Stockage et transfert d'informations</h2>
          <p>{storageSection?.body}</p>
          <p>
            Les informations sont stockées sur les serveurs uniquement pour la durée nécessaire à la fourniture
            des services et au maintien de l'intégrité de nos bases de données. Nous tiendrons des registres des
            activités de traitement dans le but de démontrer la conformité avec la RGPD de l'UE.
          </p>
          <p>
            Certains services requièrent l'utilisation de solutions tierces. Lorsque vous êtes redirigé de notre
            site vers le site web d'un tiers, vous n'êtes plus en interaction avec notre site. Toute information
            que vous fournissez par le biais de sites web tiers sera traitée conformément à leur politique de
            confidentialité et aux autres conditions applicables.
          </p>
          <p>
            Pour plus d'information sur notre politique de confidentialité merci de vouloir voir notre{' '}
            <a className="conditions-link" href="/politique-de-confidentialite">
              politique de confidentialité
            </a>.
          </p>
          <p>Nous sommes PCI compliant niveau 3</p>
          <p>ODYSSEUS MEDIA - 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland</p>
        </div>
      </div>
    </section>
  )
}
