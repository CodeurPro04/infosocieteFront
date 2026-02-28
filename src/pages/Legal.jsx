import { useContent } from '../context/ContentContext.jsx'

export default function Legal({ slug }) {
  const { content } = useContent()
  const page = content.pages?.[slug]

  if (!page) {
    return (
      <section className="container page">
        <h1>Page introuvable</h1>
      </section>
    )
  }

  if (slug === 'politique-de-confidentialite') {
    return (
      <section className="privacy-page">
        <div className="container">
          <div className="privacy-header">
            <h1>Politique de confidentialité</h1>
            <p className="privacy-effective">en vigueur à partir du 18 Avril 2022</p>
          </div>
          <div className="privacy-section">
            <h2>1. Disposition Générale</h2>
            <p>
              1.1 Le présent document utilise la même terminologie et les mêmes abréviations que notre document
              sur les conditions d'utilisation. Cette politique de confidentialité régit la collecte, l'utilisation
              et le stockage des informations obtenues des utilisateurs lors de l'utilisation de notre plate-forme
            </p>
            <p>
              1.2 Les informations sur les utilisateurs sont divisées en informations personnellement identifiables
              et informations non-personnellement identifiables selon si les informations peuvent ou non identifier
              l'utilisateur comme une personne spécifique. Les informations sur les personnes morales n'entrent pas
              dans le champ d'application des informations telles que définies dans nos conditions d'utilisation et
              notre politique de confidentialité
            </p>
            <p>
              1.3 ODYSSEUS MEDIA, une société à responsabilité limitée irlandais, enregistrée au registre du commerce
              et des sociétés en Irlande sous le numéro 714131, dont le siège social est situé au 13 Baggot Street
              Upper, Dublin 4, D04 W7K5, Republic of Ireland, occupe un poste de "contrôleur" tel que défini dans la
              directive européenne RGPD et nous sommes responsables du respect des principes relatifs au traitement
              des données à caractère personnel et nous devons être en mesure d'en apporter la preuve. Vous pouvez
              nous contacter en envoyant un e-mail à contact@INFO-DOCSFLOW.pro
            </p>
            <p>
              1.4 Le Site utilise Google Analytics à des fins statistiques. L'application Google Analytics est
              configurée de sorte à ne pas collecter votre adresse IP ni aucune autre information personnelle
              permettant de vous identifier. Nous nous intéressons uniquement à la façon dont le Site est utilisé
              afin de pouvoir améliorer, modifier et adapter le Site et les Services pour répondre au mieux aux
              besoins des utilisateurs. Vous trouverez de plus amples informations sur le fonctionnement de Google
              Analytics et sur la manière dont vous pouvez vous opposer à son utilisation sur le site :
              https://policies.google.com/technologies/partner-sites
            </p>
          </div>
          <div className="privacy-section">
            <h2>2. La collecte et l'utilisation d'informations permettant d'identifier une personne</h2>
            <p>
              2.1 Nous pouvons obtenir certaines de vos informations personnelles afin de vous fournir nos services.
              Les informations que nous recueillons sont nécessaires pour fournir nos services, et nous ne recueillons
              aucune information qui ne soit pas requise par la nature de nos services. Nous pouvons collecter
              certaines des informations personnelles suivantes :
            </p>
            <ul>
              <li>Prénom et nom de famille</li>
              <li>Adresse électronique</li>
              <li>Numéro de téléphone</li>
              <li>Adresse IP et fichiers journaux du serveur</li>
              <li>Informations sur les paiements</li>
              <li>Autres informations que vous choisissez de fournir</li>
            </ul>
          </div>
          <div className="privacy-section">
            <h2>3. Collecte et utilisation d'informations non personnelles identifiables</h2>
            <p>
              3.1 La Plateforme et les autres plateformes d'analyse tiers collectent une série de données et
              d'informations générales lorsqu'un Utilisateur ou un système automatisé appelle la Plateforme. Ces
              données et informations générales sont stockées dans les fichiers journaux du serveur. Les données et
              informations collectées peuvent être (1) les types et versions de logiciels utilisés, (2) le système
              d'exploitation utilisé par le système d'accès, (3) la date et l'heure d'accès aux services, (4) le
              fournisseur d'accès Internet du système d'accès et (5) toute autre donnée et information similaire
              pouvant être utilisée en cas d'attaque de nos systèmes informatiques
            </p>
            <p>
              3.2 Nous recueillons ces informations à des fins d'enquête sur les violations. Lors de l'utilisation
              de ces informations, nous ne tirons aucune conclusion sur l'utilisateur. Ces informations sont plutôt
              nécessaires pour (1) fournir correctement le contenu de notre Plateforme, (2) optimiser le contenu de
              notre Plateforme ainsi que sa publicité, (3) assurer la viabilité à long terme de nos systèmes
              informatiques et de la technologie de notre site web, et (4) fournir aux autorités répressives les
              informations nécessaires aux poursuites pénales en cas de cyber-attaque. Les données anonymes des
              fichiers journaux du serveur sont stockées séparément de toutes les données personnelles fournies par
              une personne concernée
            </p>
          </div>
          <div className="privacy-section">
            <h2>4. INFO-DOCSFLOW en tant que sous-traitant - Collecte et utilisation d'informations personnelles identifiables</h2>
            <p>
              4.1 En ce qui concerne les informations que nous recueillons auprès des utilisateurs, INFO-DOCSFLOW agit
              en tant que sous-traitant pour répondre à la demande de services de l'utilisateur. INFO-DOCSFLOW ne peut
              pas utiliser les informations collectées pour son propre usage et ne collecte ces informations que
              pour le compte des Utilisateurs. En ce qui concerne ces informations, les utilisateurs ont le statut
              de responsable du traitement des données au sens de la directive EU GDPR
            </p>
          </div>
          <div className="privacy-section">
            <h2>5. Stockage et transfert d'informations</h2>
            <p>
              5.1 Les informations seront stockées sur des serveurs sécurisés, contrôlés et entretenus conformément
              aux mesures de protection de la vie privée. Nous pouvons stocker ou transférer des informations sur les
              personnes concernées situées dans l'UE vers des serveurs situés dans des pays jugés adéquats par la
              Commission européenne, ou dans des pays que la Commission européenne n'a pas jugés inadéquats, à
              condition que ces pays mettent en place des garanties appropriées et adéquates concernant la sécurité
              des informations personnelles
            </p>
            <p>
              5.2 Les informations sont stockées sur les serveurs uniquement pour la durée nécessaire à la fourniture
              des services et au maintien de l'intégrité de nos bases de données. Nous tiendrons des registres des
              activités de traitement dans le but de démontrer la conformité avec la RGPD de l'UE
            </p>
          </div>
          <div className="privacy-section">
            <h2>6. Sites web, services et cookies de tiers</h2>
            <p>
              6.1 Le site ou les e-mails peuvent contenir des liens vers d'autres sites web externes qui ne relèvent
              pas de notre domaine. Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de
              ces sites web externes. Si vous choisissez de suivre ces liens vers des sites web externes, vous le
              faites à vos risques et périls.
            </p>
            <p>
              6.2 Les cookies nous aident à optimiser et à améliorer l'expérience des utilisateurs du site en nous
              permettant de fournir des fonctionnalités essentielles. Les cookies que nous utilisons peuvent varier
              dans le temps car nous mettons à jour et améliorons continuellement notre site et nos services. Vous
              trouverez de plus amples informations dans notre politique en matière de cookies.
            </p>
          </div>
          <div className="privacy-section">
            <h2>7. Période de conservation des informations</h2>
            <p>
              Si vous enregistrez un compte chez nous, nous conserverons vos informations aussi longtemps que vous
              aurez un compte actif. Dès que vous supprimerez votre compte, nous supprimerons toutes les informations
              que nous avons recueillies à votre sujet, sauf si nous avons des motifs légaux appropriés pour
              poursuivre leur traitement. Si votre compte a été résilié ou suspendu en raison d'une violation des
              conditions, nous conserverons vos informations pendant deux ans au maximum afin d'éviter des
              enregistrements répétés et d'appliquer les mesures de suspension.
            </p>
          </div>
          <div className="privacy-section">
            <h2>8. Droits de l'utilisateur</h2>
            <p>8.1 Vous pouvez demander à :</p>
            <ul>
              <li>Obtenir la confirmation que vos informations sont traitées, accéder aux informations vous concernant que nous avons stockées ainsi qu'à des informations complémentaires.</li>
              <li>Recevoir une copie des Informations vous concernant qui sont détenues par INFO-DOCSFLOW dans un format structuré, couramment utilisé et lisible par machine</li>
              <li>Corriger vos Informations</li>
              <li>Faire supprimer vos Informations personnelles</li>
              <li>S'opposer au traitement des Informations par INFO-DOCSFLOW</li>
              <li>Restreindre le traitement de vos Informations par INFO-DOCSFLOW</li>
              <li>Déposer une plainte auprès d'une autorité de contrôle</li>
            </ul>
            <p>
              8.2 Ces droits peuvent être limités s'ils sont soumis aux intérêts légitimes et aux exigences
              réglementaires propres à INFO-DOCSFLOW.
            </p>
          </div>
          <div className="privacy-section">
            <h2>9. Mise à jour</h2>
            <p>
              Nous nous réservons le droit de modifier notre politique de confidentialité à tout moment. La version
              actuelle de notre politique de confidentialité est disponible sur le site, en indiquant la date
              d'entrée en vigueur. Nous vous encourageons à consulter régulièrement notre politique de
              confidentialité.
            </p>
          </div>
          <div className="privacy-section">
            <h2>10. Informations de contact</h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité et la
              manière dont les informations sont traitées, ou si vous souhaitez accéder à vos informations, les
              récupérer, les modifier ou les mettre à jour, n'hésitez pas à nous contacter à l'adresse
              contact@INFO-DOCSFLOW.pro.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (slug === 'conditions-generales-de-vente') {
    return (
      <section className="cgv-page">
        <div className="container">
          <div className="page-header cgv-header">
            <h1>{page.title}</h1>
            {page.version && <p className="muted">{page.version}</p>}
          </div>
          {page.intro && <p className="cgv-intro">{page.intro}</p>}
          <div className="cgv-body">
            {page.blocks?.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={`${block.type}-${index}`} className="cgv-heading">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'subheading') {
                return (
                  <h3 key={`${block.type}-${index}`} className="cgv-subheading">
                    {block.text}
                  </h3>
                )
              }
              if (block.type === 'definition') {
                return (
                  <p key={`${block.type}-${index}`} className="cgv-definition">
                    <strong>{block.term}</strong> {block.text}
                  </p>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={`${block.type}-${index}`} className="cgv-list">
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'emphasis') {
                return (
                  <p key={`${block.type}-${index}`} className="cgv-emphasis">
                    {block.text}
                  </p>
                )
              }
              return (
                <p key={`${block.type}-${index}`} className="cgv-paragraph">
                  {block.text}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  if (slug === 'mentions-legales') {
    return (
      <section className="mentions-page">
        <div className="container">
          <div className="page-header mentions-header">
            <h1>{page.title}</h1>
          </div>
          <div className="mentions-body">
            {page.lines?.map((line, index) =>
              line === '' ? (
                <div key={`mentions-space-${index}`} className="mentions-spacer" />
              ) : (
                <p key={`mentions-line-${index}`}>{line}</p>
              )
            )}
          </div>
        </div>
      </section>
    )
  }

  if (slug === 'cookies') {
    return (
      <section className="cookies-page">
        <div className="container">
          <div className="cookies-body">
            {page.blocks?.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={`${block.type}-${index}`} className="cookies-heading">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'table') {
                return (
                  <div key={`${block.type}-${index}`} className="cookies-table">
                    <div className="cookies-table-head">
                      <span>{block.headers?.[0]}</span>
                      <span>{block.headers?.[1]}</span>
                    </div>
                    {block.rows?.map((row) => (
                      <div key={row.label} className="cookies-table-row">
                        <strong>{row.label}</strong>
                        <span>{row.value}</span>
                      </div>
                    ))}
                  </div>
                )
              }
              return (
                <p key={`${block.type}-${index}`} className="cookies-paragraph">
                  {block.text}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page.title}</h1>
        {page.version && <p className="muted">{page.version}</p>}
        {page.effective && <p className="muted">{page.effective}</p>}
        {!page.version && !page.effective && <p className="muted">Informations legales et administratives.</p>}
      </div>
      <div className="page-grid">
        {page.sections?.map((section) => (
          <div key={section.title} className="page-card">
            <h2>{section.title}</h2>
            <p className="muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
