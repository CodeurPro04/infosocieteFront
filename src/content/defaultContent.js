const defaultContent = {
  site: {
    name: 'Infosociete Pro',
    phone: '0 805 086 583',
    email: 'contact@infosociete.pro',
    hours: 'Du lundi au samedi, de 8h a 20h',
  },
  navigation: [
    { label: 'Formule Infosociete Pro', path: '/offre' },
    { label: 'Résiliation', path: '/resiliation' },
    { label: 'Contact', path: '/contact' },
  ],
  home: {
    heroTitle: 'Consultez et Téléchargez les données de votre entreprise',
    heroSubtitle: "Recherchez l'entreprise dont vous souhaitez obtenir les données.",
    cta: "Connexion",
    tags: ['#Marques', '#FicheEntreprise', '#Bilans', '#Actes', '#RCS', '#Sirene', '#SIRET/SIREN', '#Statuts'],
    benefits: [
      'Consultez et téléchargez toutes vos informations légales, juridiques et financières',
      "Accédez à tous vos documents professionnels avec l'abonnement Infosociete pour 1,49 € /72h puis 69,00 € /mois",
      "Infosociete est un service privé et indépendant des administrations publiques. Nos données sont mises à jour quotidiennement et sont fournies par le Groupement d’intérêt économique des greffiers des Tribunaux de commerce (G.I.E. INFOGREFFE).",
      'Toutes les informations fournies sont authentiques et certifiées',
    ],
    usefulTitle: 'Informations utiles',
    usefulBody:
      "Nous avons voulu moderniser et simplifier l'accès à l'information juridique, légale et financière des entreprises, ainsi qu'accompagner les entrepreneurs au quotidien, grâce à Infosociete. Pour relever ce défi, nous disposons d'une équipe opérationnelle rigoureuse et professionnelle dans chaque domaine, appuyée par des partenaires et des consultants de premier plan, afin de garantir un haut niveau de service, la fraîcheur de l'information et la facilité de consommation des données d'entreprise souvent indigestes et réservées aux institutions ou aux grands groupes.",
    learnMore:
      "Infosociete est un portail internet sur l'information légale, juridique et financière des entreprises françaises. Fiche identité, Statuts, Extrait Kbis, Bilan, APE, SIRET, RCS, TVA intra, DUNS number, Analyse financière, Diagnostic, Publications, Annonces Bodacc, RCS, Dirigeants. Accès en illimité des données des entreprises avec la formule Infosociete. Il suffit d'entrer le nom d'une entreprise et le tour est joué.",
    usefulNote: '*voir condition formule premium',
    formulaPrice: 'Pour 1,49 EUR/72h puis 69,00 EUR/mois',
    formulaIntro: 'Inscrivez vous pour profiter de nombreux avantages chez Infosociete qui vous permettront de voir :',
    formulaBullets: [
      "Le chiffre d'affaires d'une entreprise, le nom des dirigeants et les différents établissements",
      '7 extraits de Kbis par mois',
      "Bilans, Brevets, et documents de votre societe a acces illimite",
      'Une assistance personnalisée disponible par mail et par téléphone',
      'Support disponible du lundi au samedi de 8 h à 20 h',
      'Accès limité à 30 diagnostics Financier NOTA-PME et/ou AFDCC par mois',
    ],
    serviceTitle: 'Un service pour les professionnels',
    serviceIntro: 'En apprendre plus sur notre service',
    serviceBody:
      "Nous offrons notre service à tous les professionnels. Vous pouvez trouver vos documents d'entreprise en faisant une demande sur notre site. Même les documents de vos concurrents sont disponibles, tous nos envois se font de façon sécurisée. Nous possédons un grand nombre de fichiers dans notre base de données alors n'hésitez pas à rejoindre Infosociete.",
    companiesTitle: 'Liste des entreprises',
    companiesIntro: 'Voici la liste des entreprises recherche par nos utilisateurs.',
    companiesNote:
      "La liste est actualisée chaque seconde. Elle affichera les 5 recherches les plus récentes effectuées par nos utilisateurs. Vous n'aurez bien sûr accès qu'à une petite partie des informations.",
    companiesHeaders: ['Nom', 'SIREN', 'Adresse', 'Statut', 'Code APE', 'Creation'],
    companiesRows: [
      {
        name: 'TOTAL',
        siren: '542051180',
        address: '2 Place Jean Millier 92400 Courbevoie',
        status: 'Actif',
        ape: '70.10Z',
        created: '1954',
      },
      {
        name: 'VINCI',
        siren: '552037806',
        address: '1973 Boulevard de la Defense 92000 Nanterre',
        status: 'Actif',
        ape: '70.10Z',
        created: '1955',
      },
      {
        name: 'AXA',
        siren: '572093920',
        address: '25 Avenue Matignon 75008 Paris',
        status: 'Actif',
        ape: '64.20Z',
        created: '1957',
      },
      {
        name: 'RENAULT SAS',
        siren: '780129987',
        address: '13 Quai Alphonse le Gallo 92100 Boulogne-Billancourt',
        status: 'Actif',
        ape: '29.10Z',
        created: '1900',
      },
      {
        name: 'BNP PARIBAS',
        siren: '662042449',
        address: '16 Boulevard des Italiens 75009 Paris',
        status: 'Actif',
        ape: '64.19Z',
        created: '1966',
      },
    ],
    infoStrip: {
      title: "Plus d'informations",
      heading: 'Accédez à tous les documents de votre société',
      body: "Vous pourrez accéder à tous les documents de votre entreprise : Bilan, Actes , Brevets,....",
      primaryCta: 'En savoir plus',
      secondaryCta: 'Rechercher un document',
    },
    aboutTitle: 'A propos de nous',
    aboutBody:
      "Nous avions l'intention de moderniser et de simplifier l'accès à l'information juridique, légale et financière des entreprises, ainsi que d'accompagner les entrepreneurs au quotidien, grâce à Infosociete. Vérifiez, examinez et téléchargez tous les documents et données relatifs à l'identité et aux procédures d'une entreprise en quelques clics seulement. Infosociete a rassemblé pour vous les documents les plus importants, notamment les actes, les avis du BODACC, les extraits Kbis, les statuts, et bien plus encore...",
    serviceCards: [
      {
        title: 'Accédez à toutes nos données et documents exclusifs sur les entreprises',
        body: "Chez Infosociete, nous mettons à disposition tous les types de documents d'entreprises qu'ils soient juridiques, légaux ou financiers. N'attendez pas et demandez vos documents dès maintenant.",
      },
      {
        title: 'Une équipe de services à la clientèle toujours prête à répondre à tous vos besoins',
        body: "En cas de problème, vous pouvez joindre nos équipes du service clientèle par téléphone, par courriel ou via la page de contact de ce site web. Nous vous répondrons dans les plus brefs délais.",
      },
    ],
    formulaCta: {
      title: 'Notre formule Infosociete Pro',
      body: "Profitez d'un acces aux extraits de Kbis pour 1,49 EUR pendant 72h*",
      note: '*voir condition formule premium',
    },
    contactBlock: {
      title: 'Nous contacter',
      body: 'Prenez contact avec nous maintenant.',
      email: 'contact@infosociete.pro',
      phone: '0 805 086 583',
      hours: 'Du lundi au samedi, de 8h a 20h',
    },
    kbisHighlights: ['Societee Identifiee', 'Dirigeant Identifie', 'Code APE Identifie', 'Identification Greffe', 'ID Greffe'],
    kbisIntro: 'Recevez votre Kbis',
    disclaimer:
      "Formule basique de 1,49 EUR pour 72h, puis 69,00 EUR sur la meme carte bancaire a la date anniversaire par prelevement automatique mensuel sauf en cas de resiliation anticipee (ou anticipee en cas d'impossibilite). La resiliation de la formule premium est possible via la page Resiliation, par email et par telephone a tout moment.",
  },
  pages: {
    'a-propos': {
      title: 'A propos',
      subtitle: 'Historique',
      sections: [
        {
          title: 'Historique',
          body:
            "Depuis plus de 50 ans, Infosociete fournit des services d'information sur les entreprises francaises. Nous proposons une gamme de produits adaptes afin d'obtenir des informations fiables sur les entreprises.",
        },
        {
          title: 'Une experience de plus de 50 ans',
          body:
            "Infosociete regroupe aujourd'hui un large eventail de donnees juridiques, legales et financieres pour accompagner les professionnels et entrepreneurs.",
        },
      ],
    },
    offre: {
      title: 'Formule Infosociete Pro',
      toolTitle: "Notre outil de recherche d'entreprise",
      toolBody:
        "Nous avons voulu actualiser et rendre plus accessible l'information juridique, legale et financiere aux entreprises, ainsi qu'accompagner les entrepreneurs de maniere reguliere. Sur infosociete.pro nous vous proposons un outil permettant de retrouver n'importe quelle entreprise et d'obtenir des informations de celle ci.",
      formulaTitle: 'Notre formule Infosociete Pro',
      price: 'Pour 1,49 EUR/72h puis 69,00 EUR/mois',
      bullets: [
        "Le chiffre d'affaire d'une entreprise, le nom des dirigeants et les differents etablissements",
        '7 extraits de Kbis par mois',
        "Bilans, Bretets, et documents de votre société à accès illimité",
        'Une assistance personnalisée disponible par mail et par téléphone',
        'Support disponible du lundi au samedi de 8 h à 20 h',
        'Accès limité à 30 diagnostics Financier NOTA-PME et/ou AFDCC par mois',
      ],
      advantagesTitle: 'Nos avantages',
      advantages: [
        {
          title: 'Extrait de Kbis',
          body:
            "Profitez de notre service afin de trouver n'importe quel extrait de Kbis. Vous avez en plus la possibilité de demander 7 extraits de Kbis par mois.",
        },
        {
          title: 'Actes, Brevets et Bilans',
          body:
            "Il peut être utile d'accéder aux informations contenues dans les documents des entreprises. Infosociete vous permet d'accéder à ces informations.",
        },
        {
          title: 'Diagnostics financier',
          body:
            "Le diagnostic financier NOTA-PME et/ou AFDCC est un des principaux documents qui permettent d'analyser la comptabilité d'une entreprise, avec Infosociete bénéficiez de 30 diagnostics par mois.",
        },
        {
          title: 'Recherche de TVA',
          body:
            "Besoin de savoir si votre numéro de TVA a été enregistré et validé ? Infosociete vous permet de retrouver si le numéro de TVA de n'importe quelle entreprise est valide.",
        },
        {
          title: 'Service clientele personnalise',
          body:
            "Notre service vous permet aussi de contacter notre service clientèle en cas de problème ou de demande particulière. Notre équipe vous répondra aussi rapidement que possible.",
        },
        {
          title: 'Formule',
          body: 'Profitez pleinement de notre formule premium en illimite pour 1,49 EUR pendant 72 h puis 69,00 EUR par mois.',
        },
      ],
    },
    resiliation: {
      title: 'Résiliation',
      body:
        "Vous voulez résilier votre formule Infosociete Pro ? Vous pouvez le faire via ce formulaire en ligne en renseignant votre adresse e-mail. Votre demande sera prise en compte immédiatement.",
      field: 'Email',
    },
    contact: {
      title: 'Nous contacter',
      subtitle: "N'hésitez pas à nous contacter pour une question spécifique ou en cas de problème.",
      body:
        "Vous avez besoin de plus d'informations ? Une question en particulière ? Vous pouvez nous contacter via ce formulaire en ligne ou par téléphone. Un de nos agents se chargera de vous répondre le plus rapidement possible.",
    },
    reclamation: {
      title: 'Réclamation',
      subtitle:
        'Envoyez nous toutes vos réclamations ici, notre équipe se chargera de vous répondre le plus rapidement possible.',
      body:
        "Vous avez besoin de faire une réclamation ? Une question en particulière ? Vous pouvez nous contacter via ce formulaire en ligne ou par téléphone. Un de nos agents se chargera de vous répondre le plus rapidement possible.",
    },
    connexion: {
      title: 'Mon Espace Personnel',
      forgot: 'Mot de passe oublié ?',
    },
    entreprises: {
      title: "Recherche d'entreprise",
      subtitle:
        "Utilisez notre outil de recherche pour trouver des informations juridiques et financières sur l'entreprise que vous recherchez en ce moment.",
      placeholder: 'Recherche',
    },
    faq: {
      title: 'FAQ',
      intro: 'Retrouver toutes les questions les plus fréquemment posées dans notre FAQ dédiée à notre service',
      items: [
        {
          q: "Qu'est-ce qu'Infosociete ?",
          a: "Le Kbis est un document officiel regroupant certaines informations concernant l'entreprise. Il a une durée de validité illimitée. Cependant, la plupart des démarches demandent un extrait de moins de 3 mois afin de garantir la fiabilité des informations.",
        },
        {
          q: "Est-il possible de renouveler un extrait de Kbis ?",
          a: "Oui. Les entreprises doivent mettre à jour leurs informations majeures (directeur, nom, statuts juridiques, capital). Les représentants peuvent demander un extrait de Kbis actualisé. L'ancien extrait peut être conservé pour retracer l'historique.",
        },
        {
          q: "Quelle est la difference entre un extrait de Kbis et un extrait K ?",
          a: "Les extraits Kbis concernent les personnes morales (SAS, SARL, SASU, EURL, SCI). Les extraits K concernent les personnes physiques (micro-entrepreneur, EIRL, entreprises individuelles, etc.).",
        },
        {
          q: "Comment obtenir un extrait Kbis d'une entreprise autre que la mienne ?",
          a: "Les informations de l'extrait Kbis sont publiques. Toute personne physique ou morale peut demander un extrait Kbis d'une societe tierce enregistree au RCS. Vous pouvez effectuer ce service sur Infosociete.",
        },
      ],
    },
    'information-kbis': {
      title: 'Information KBIS',
      intro:
        "A quoi sert l'extrait Kbis ? Les entrepreneurs utilisent l'extrait légal Kbis à des fins diverses : débuter une activité, ouvrir un compte bancaire professionnel, demander un financement, répondre à un appel d'offres ou acheter du matériel professionnel.",
      sections: [
        {
          title: "Certifier la capacité d'une entreprise à fonctionner légalement",
          body:
            "Le greffe du tribunal de commerce délivre le Kbis, document officiel utilisé pour attester du statut juridique d'une entreprise. Il bénéficie à l'entreprise et à ses partenaires.",
        },
        {
          title: 'Aide publique',
          body:
            'Les entrepreneurs éligibles peuvent demander une aide publique, notamment monétaire (subvention, prêt), technique (soutien) ou monétaire/sociétale (déductions, exemptions).',
        },
        {
          title: "Participer à un appel d'offres",
          body:
            "L'extrait est généralement requis lors des réponses à des appels d'offres pour confirmer l'existence légale des entités et vérifier l'absence de procédure collective.",
        },
        {
          title: "Obtenir l'extrait Kbis d'une autre entreprise",
          body:
            "Le Kbis est un document public disponible pour tous. Il peut être demandé via un service en ligne ou auprès du tribunal de commerce du siège de l'entreprise.",
        },
      ],
    },
    'conditions-generales-de-vente': {
      title: 'Conditions Générales de Vente (CGV)',
      version: 'Version 1.1',
      sections: [
        {
          title: 'Éditeur',
          body:
            'Le site est détenu et opéré par ODYSSEUS MEDIA LIMITED, société de droit irlandais, numéro 714131, siège social 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland.',
        },
        {
          title: "Conditions d'accès",
          body: "Vous devez avoir au moins 18 ans et disposer du pouvoir d'engager la société que vous représentez pour accéder aux services.",
        },
        {
          title: 'Règles de conduite',
          body: "L'utilisation du site est soumise à des règles de conduite et au respect des CGV.",
        },
        {
          title: 'Limitation de responsabilité',
          body: "Infosociete ne peut être tenue pour responsable de l'absence de résultat attendu ou des dommages indirects. En cas de responsabilité engagée, l'indemnis ation est limitée à 5 000 euros.",
        },
        {
          title: 'Droit de rétractation',
          body: "Conformément à l'article L.221-3 du Code de la consommation, le membre ne dispose pas du droit de rétractation dans le cadre de la formule.",
        },
        {
          title: 'Droit applicable et litiges',
          body:
            "Les CGV sont régies par la loi française. Les parties tenteront un règlement amiable avant toute action. A défaut, les tribunaux compétents sont ceux du ressort de la Cour d'appel de Paris.",
        },
      ],
    },
    'mentions-legales': {
      title: 'Mentions Légales',
      sections: [
        {
          title: 'Éditeur',
          body:
            'ODYSSEUS MEDIA, société à responsabilité limitée de droit irlandais, numéro 714131, siège social 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland. TVA : IE 3985411WH.',
        },
        {
          title: 'Responsable',
          body: 'Noreen K.',
        },
        {
          title: 'Hébergeur',
          body:
            'Le site infosociete.pro est hébergé par GoDaddy. Adresse : 14455 N. Hayden Rd., Ste. 226, Scottsdale, AZ 85260 USA. Téléphone : +44 20 7084 1810.',
        },
        {
          title: 'Contact',
          body: 'Email : contact@infosociete.pro | Telephone : 0 805 086 583.',
        },
      ],
    },
    'politique-de-confidentialite': {
      title: 'Politique de confidentialité',
      effective: 'En vigueur à partir du 18 Avril 2022',
      sections: [
        {
          title: 'Disposition générale',
          body: "Cette politique régit la collecte, l'utilisation et le stockage des informations obtenues lors de l'utilisation de la plateforme.",
        },
        {
          title: "Collecte d'informations personnelles",
          body:
            'Les informations collectées peuvent inclure nom, email, téléphone, adresse IP, journaux serveur, informations de paiement et autres informations fournies volontairement.',
        },
        {
          title: 'Données non personnelles',
          body:
            "Les plateformes d'analyse collectent des données générales (types et versions de logiciels, système d'exploitation, date/heure d'accès, FAI) pour la sécurité et l'optimisation.",
        },
        {
          title: 'Stockage et durée',
          body:
            "Les informations sont stockées le temps nécessaire à la fourniture des services et au maintien de l'intégrité des bases, avec registres de traitement RGPD.",
        },
        {
          title: 'Droits',
          body: 'Vous pouvez demander confirmation, accès, copie, correction, suppression, ou opposition au traitement de vos informations personnelles.',
        },
      ],
    },
    cookies: {
      title: 'Politique de cookies',
      sections: [
        {
          title: 'Informations générales',
          body: 'Un cookie est un fichier texte qui stocke des informations sur le navigateur pour optimiser la navigation (devise, paramétres, etc.).',
        },
        {
          title: 'Google Analytics',
          body: "Le site utilise Google Analytics a des fins statistiques sans collecter l'adresse IP ni des informations permettant de vous identifier.",
        },
        {
          title: 'Gestion des préférences',
          body: 'Vous pouvez gérer vos préférences dans les paramétres de votre navigateur ou appareil pour autoriser, bloquer ou supprimer les cookies.',
        },
      ],
    },
    'conditions-de-la-formule': {
      title: 'Conditions formule premium',
      sections: [
        {
          title: 'Privilèges inclus',
          body:
            '7 extraits de Kbis par mois, hotline service clientèle, derniers comptes annuels, derniers actes, derniers brevets, 30 diagnostics financiers NOTA-PME/AFDCC, fiche entreprise en PDF, recherche de numéro de TVA valide.',
        },
        {
          title: 'Prix',
          body:
            '1,49 EUR pour 72 heures puis 69,00 EUR par mois si non résilié dans les 72h. Facturation à la date anniversaire, prélèvement bancaire. Libellé Infosociete/infosociete.pro.',
        },
        {
          title: 'Résiliation',
          body:
            "La formule est résilable à tout moment et gratuitement via la page Résiliation. Vous devez renseigner l'email utilisé lors de l'achat.",
        },
        {
          title: 'Modalités',
          body: "La formule est mensuelle et se renouvelle automatiquement à l'échéance.",
        },
        {
          title: 'Communications',
          body:
            "Les communications se font via l'espace personnel ou par email. Contact par téléphone au 0 805 086 583 ou par email à contact@infosociete.pro.",
        },
        {
          title: "Délai de réception d'un extrait de Kbis",
          body: "L'extrait est disponible sous 48h en jour ouvré. En cas d'indisponibilité, Infosociete peut décliner la demande et celle-ci ne sera pas comptée.",
        },
        {
          title: 'Stockage et transfert',
          body:
            'Les informations sont stockées sur des serveurs sécurisés. Des transferts UE/tiers peuvent avoir lieu avec garanties adéquates. Des tiers peuvent traiter certaines données selon leurs politiques.',
        },
      ],
    },
    'votre-releve-bancaire': {
      title: 'Service de HPY*INFOSCTE et Hp*infosociete',
      body:
        "Si vous avez remarqué HPY*INFOSCTE ou Hp*infosociete sur votre relevé bancaire, cela correspond à un paiement lié au service Infosociete. Nous sommes là pour vous aider à mieux comprendre vos finances et l'origine du prélèvement.",
    },
    'hpy-infoscte': {
      title: 'Annulez Facilement Votre Abonnement avec Infosociete - HPY*INFOSOCIETE a HPY*11 INFOSCTE',
      sections: [
        {
          title: 'HPY*10 INFOSCTE',
          body: 'Utilisez notre formulaire en ligne pour soumettre votre demande de résiliation en quelques clics.',
        },
        {
          title: 'HPY*11 INFOSCTE',
          body: 'Annulez votre abonnement en ligne rapidement via le formulaire Infosociete.',
        },
        {
          title: 'Nous contacter',
          body: 'Pour toute question, contactez notre equipe par email ou telephone.',
        },
      ],
    },
  },
  search: {
    samples: [
      {
        name: 'TOTAL',
        siren: '542051180',
        address: '2 Place Jean Millier 92400 Courbevoie',
        status: 'Actif',
        ape: '70.10Z',
        created: '1954',
      },
      {
        name: 'VINCI',
        siren: '552037806',
        address: '1973 Boulevard de la Defense 92000 Nanterre',
        status: 'Actif',
        ape: '70.10Z',
        created: '1955',
      },
      {
        name: 'AXA',
        siren: '572093920',
        address: '25 Avenue Matignon 75008 Paris',
        status: 'Actif',
        ape: '64.20Z',
        created: '1957',
      },
      {
        name: 'RENAULT SAS',
        siren: '780129987',
        address: '13 Quai Alphonse le Gallo 92100 Boulogne-Billancourt',
        status: 'Actif',
        ape: '29.10Z',
        created: '1900',
      },
      {
        name: 'BNP PARIBAS',
        siren: '662042449',
        address: '16 Boulevard des Italiens 75009 Paris',
        status: 'Actif',
        ape: '64.19Z',
        created: '1966',
      },
    ],
  },
  footer: {
    description:
      "Infosociete vous propose des Informations sur les entreprises françaises inscrites au registre du commerce et des sociétés, y compris les informations juridiques et financières. Consultez de manière simple les fiches financières, les données de gestion et les données publiques des organisations.",
    links: [
      { label: 'A propos', path: '/a-propos' },
      { label: 'Formule Infosociete Pro', path: '/offre' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Rechercher une entreprise', path: '/entreprises' },
      { label: 'Information KBIS', path: '/information-kbis' },
      { label: 'Conditions Générales de Vente', path: '/conditions-generales-de-vente' },
      { label: 'Mentions Légales', path: '/mentions-legales' },
      { label: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
      { label: 'Politique de cookies', path: '/cookies' },
      { label: 'Conditions formule premium', path: '/conditions-de-la-formule' },
      { label: 'Contact', path: '/contact' },
      { label: 'Reclamation', path: '/reclamation' },
      { label: 'Informations relevé bancaire', path: '/votre-releve-bancaire' },
      { label: 'HpyInfoscte', path: '/hpy-infoscte' },
    ],
  },
}

export default defaultContent
