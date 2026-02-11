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
    //cta: "Connexion",
    tags: ['#Marques', '#FicheEntreprise', '#Bilans', '#Actes', '#RCS', '#Sirene', '#SIRET/SIREN', '#Statuts'],
    benefits: [
      'Consultez et téléchargez toutes vos informations légales, juridiques et financières',
      "Accédez à tous vos documents professionnels avec l'abonnement Infosociete pour 1,49 €/72h puis 69,00 €/mois",
      "Infosociete est un service privé et indépendant des administrations publiques. Nos données sont mises à jour quotidiennement et sont fournies par le Groupement d’intérêt économique des greffiers des Tribunaux de commerce (G.I.E. INFOGREFFE).",
      'Toutes les informations fournies sont authentiques et certifiées',
    ],
    usefulTitle: 'Informations utiles',
    usefulBody:
      "Nous avons voulu moderniser et simplifier l'accès à l'information juridique, légale et financière des entreprises, ainsi qu'accompagner les entrepreneurs au quotidien, grâce à Infosociete. Pour relever ce défi, nous disposons d'une équipe opérationnelle rigoureuse et professionnelle dans chaque domaine, appuyée par des partenaires et des consultants de premier plan, afin de garantir un haut niveau de service, la fraîcheur de l'information et la facilité de consommation des données d'entreprise souvent indigestes et réservées aux institutions ou aux grands groupes.",
    learnMore:
      "Infosociete est un portail internet sur l'information légale, juridique et financière des entreprises françaises. Fiche identité, Statuts, Extrait Kbis, Bilan, APE, SIRET, RCS, TVA intra, DUNS number, Analyse financière, Diagnostic, Publications, Annonces Bodacc, RCS, Dirigeants. Accès en illimité des données des entreprises avec la formule Infosociete. Il suffit d'entrer le nom d'une entreprise et le tour est joué.",
    usefulNote: '*voir condition formule premium',
    formulaPrice: 'Pour 1,49 €/72h puis 69,00 €/mois',
    formulaIntro: 'Inscrivez vous pour profiter de nombreux avantages chez Infosociete qui vous permettront de voir :',
    formulaBullets: [
      "Le chiffre d'affaires d'une entreprise, le nom des dirigeants et les différents établissements",
      '7 extraits de Kbis par mois',
      "Bilans, Brevets, et documents de votre société à accès illimité",
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
      body: "Profitez d'un accès aux extraits de Kbis pour 1,49 € pendant 72h*",
      note: '*voir condition formule premium',
    },
    contactBlock: {
      title: 'Nous contacter',
      body: 'Prenez contact avec nous maintenant.',
      email: 'contact@infosociete.pro',
      phone: '0 805 086 583',
      hours: 'Du lundi au samedi, de 8h à 20h',
    },
      kbisHighlights: ['Société Identifiée', 'Dirigeant Identifié', 'Code APE Identifié', 'Identification Greffe', 'ID Greffe'],
    kbisIntro: 'Recevez votre Kbis',
    disclaimer:
      "Formule basique de 1,49 € pour 72h, puis 69,00 € sur la même carte bancaire à la date anniversaire par prélèvement automatique mensuel sauf en cas de résiliation anticipée (ou anticipée en cas d'impossibilité). La résiliation de la formule premium est possible via la page Résiliation, par email et par téléphone à tout moment.",
  },
  pages: {
    'a-propos': {
      title: 'A propos',
      subtitle: 'Historique',
      sections: [
        {
          title: 'Historique',
          body:
            "Depuis plus de 50 ans, Infosociete fournit des services d'information sur les entreprises françaises. Nous proposons une gamme de produits adaptés afin d'obtenir des informations fiables sur les entreprises.",
        },
        {
          title: 'Une experience de plus de 50 ans',
          body:
            "Infosociete regroupe aujourd'hui un large éventail de données juridiques, légales et financières pour accompagner les professionnels et entrepreneurs.",
        },
      ],
    },
    offre: {
      title: 'Formule Infosociete Pro',
      toolTitle: "Notre outil de recherche d'entreprise",
      toolBody:
        "Nous avons voulu actualiser et rendre plus accessible l'information juridique, légale et financière aux entreprises, ainsi qu'accompagner les entrepreneurs de manière régulière. Sur infosociete.pro nous vous proposons un outil permettant de retrouver n'importe quelle entreprise et d'obtenir des informations de celle ci.",
      formulaTitle: 'Notre formule Infosociete Pro',
      price: 'Pour 1,49 €/72h puis 69,00 €/mois',
      bullets: [
        "Le chiffre d'affaires d'une entreprise, le nom des dirigeants et les différents établissements",
        '7 extraits de Kbis par mois',
        "Bilans, Brevets, et documents de votre société à accès illimité",
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
            "Besoin de savoir si votre numéro de TVA a été enregistré et validé  Infosociete vous permet de retrouver si le numéro de TVA de n'importe quelle entreprise est valide.",
        },
        {
          title: 'Service clientele personnalise',
          body:
            "Notre service vous permet aussi de contacter notre service clientèle en cas de problème ou de demande particulière. Notre équipe vous répondra aussi rapidement que possible.",
        },
        {
          title: 'Formule',
          body: 'Profitez pleinement de notre formule premium en illimité pour 1,49 € pendant 72 h puis 69,00 € par mois.',
        },
      ],
    },
    resiliation: {
      title: 'Résiliation',
      body:
        "Vous voulez résilier votre formule Infosociete Pro  Vous pouvez le faire via ce formulaire en ligne en renseignant votre adresse e-mail. Votre demande sera prise en compte immédiatement.",
      field: 'Email',
    },
    contact: {
      title: 'Nous contacter',
      subtitle: "N'hésitez pas à nous contacter pour une question spécifique ou en cas de problème.",
      body:
        "Vous avez besoin de plus d'informations  Une question en particulière  Vous pouvez nous contacter via ce formulaire en ligne ou par téléphone. Un de nos agents se chargera de vous répondre le plus rapidement possible.",
    },
    reclamation: {
      title: 'R\u00e9clamation',
      subtitle:
        'Envoyez nous toute vos r\u00e9clamation ici, notre \u00e9quipe se chargera de vous r\u00e9pondre le plus rapidement possible.',
      body:
        "Vous avez besoin de faire une r\u00e9clamation ? Une question en particuli\u00e8re ? Vous pouvez nous contacter via ce formulaire en ligne ou par t\u00e9l\u00e9phone. Un de nos agent se chargera de vous r\u00e9pondre le plus rapidement possible.",
    },
    connexion: {
      title: 'Mon Espace Personnel',
      forgot: 'Mot de passe oublié ?',
      kbis: {
        label: 'Extrait KBIS',
        title: 'Recevez votre Kbis',
        highlights: ['Sociétée Identifiée', 'Dirigeant Identifié', 'Code APE Identifié', 'Identification Greffe', 'ID Greffe'],
        disclaimerPrefix:
          "Formule basique de 1,49 € pour 72h, puis 69,00 € sur la même carte bancaire à la date anniversaire par prélèvement automatique mensuel sauf en cas de résiliation anticipée (ou anticipée en cas d'impossibilité). La résiliation de la formule premium est possible via ",
        disclaimerLinkLabel: 'ce lien',
        disclaimerEmail: 'contact@infosociete.pro',
        disclaimerPhone: '0 805 086 583',
        disclaimerSuffix: 'à tout moment.',
      },
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
          q: "Qu'est-ce quʼInfosociete ",
          blocks: [
            {
              type: 'p',
              text:
                "Le Kbis est un document officiel regroupant certaines informations concernant l’entreprise, il a donc une durée de validité illimitée. Cependant, la plupart des démarches qui vous demanderont un extrait de Kbis, préciseront que ce dernier doit dater de moins de 3 mois. Les entreprises étant régulièrement amenées à changer, un extrait de Kbis de moins de 90 jours est une garantie que les informations communiquées sont encore fiables.",
            },
          ],
        },
        {
          q: 'Est-il possible de renouveler un extrait de Kbis ',
          blocks: [
            {
              type: 'p',
              text:
                "Oui il est possible de renouveler un extrait de Kbis car les entreprises ont l’obligation de mettre à jours leurs informations majeures notamment dans les situations suivantes :",
            },
            {
              type: 'ul',
              items: [
                'Changement de directeur ou gérant',
                "Modification du nom de l’entreprise",
                'Mise à jour des statuts juridiques',
                "Modification du montant du capital de l’offre",
              ],
            },
            {
              type: 'p',
              text:
                "Il est possible pour tous les représentants d’entreprise d’obtenir le renouvellement de son extrait de Kbis auprès de tous les organismes et sites web proposant ce service. Il est par exemple possible sur Infosociete d’obtenir un extrait de Kbis actualisé car nous disposons des dernières informations à jour. L’ancien extrait de Kbis peut quand même être conservé car il peut permettre de retracer l’historique de la société en question.",
            },
          ],
        },
        {
          q: 'Quelle est la différence entre un extrait de Kbis et un extrait K ',
          blocks: [
            {
              type: 'p',
              text:
                'Ces deux documents sont des documents officiels délivrés par les greffiers du tribunal de commerce. Cependant, les extrait de Kbis sont destinés aux personnes morales comme :',
            },
            { type: 'ul', items: ['SAS', 'SARL', 'SASU', 'EURL', 'SCI'] },
            {
              type: 'p',
              text: 'Quant aux extraits K ils sont destinés aux personnes physiques :',
            },
            { type: 'ul', items: ['Micro-entrepreneur', 'EIRL', 'Entreprises individuelles', 'Etc...'] },
          ],
        },
        {
          q: "Comment obtenir un extrait Kbis d’une entreprise autre que la mienne ",
          blocks: [
            {
              type: 'p',
              text:
                "Toutes les informations présentes dans l’extrait de Kbis sont publiques, ainsi toutes les personnes physiques ou morales sont en droit de demander un extrait de Kbis d’une société tierce enregistré au RCS. Vous pouvez effectuer ce service directement sur le site Infosociete.",
            },
          ],
        },
      ],
    },
    'information-kbis': {
      title: "A quoi sert l'extrait Kbis ?",
      intro:
        "Les entrepreneurs utilisent l'extrait légal Kbis à des fins diverses. Ce document est en effet nécessaire pour commencer une activit? professionnelle, ouvrir un compte bancaire professionnel, demander un financement d'entreprise, répondre à une demande d'offre ou acheter du matériel professionnel.",
      sections: [
        {
          title: 'Utilisation des informations',
          body:
            "De plus, les entreprises peuvent utiliser les informations qu'il contient pour mener des enquêtes sur des sociétés concurrentes ou pour s'assurer de la stabilité financière d'un partenaire.",
        },
        {
          title: 'Accés public',
          body:
            "Tout le monde a accès au Kbis car c'est un document public qui contient des informations publiques, que ce soit le Kbis de sa propre entreprise ou celui d'un tiers.",
        },
      ],
      meaningSection: {
        title: "Que signifie l'extrait Kbis ?",
        paragraphs: [
          "L'extrait Kbis est un document officiel qui atteste de la légitimit? d'une entreprise. Ce document fiable contient les derniéres informations relatives à l'entreprise mentionnée. On peut trouver une variét? de détails sur l'extrait Kbis, y compris le nom de la société, le numéro SIREN et l'adresse du siège social.",
          "Toutes les entreprises françaises inscrites au RCS (Registre du Commerce et des Sociétés) sont concernées par le Kbis. Il ne s'applique donc pas aux artisans, aux personnes exerçant une profession libérale ou aux propriétaires de véhicules.",
          "Les entreprises dépendent quotidiennement de l'extrait Kbis. En effet, il est utilis? pour démarrer leur activit? de maniére tout à fait légale. De plus, c'est un document qui est fréquemment nécessaire pour diverses opérations, telles que :",
        ],
        bullets: [
          "créer un compte chéque d'entreprise ;",
          "répondre à une demande de propositions ;",
          "obtenir une aide gouvernementale, etc.",
        ],
        tail:
          "En outre, les chefs d'entreprise peuvent vérifier l'extrait Kbis d'un ?ventuel partenaire pour voir si son entreprise est en régle.",
      },
      extraSections: [
        {
          title: 'Créer un compte bancaire professionnel et obtenir un financement',
          paragraphs: [
            "En outre, le Kbis est nécessaire pour créer un compte bancaire professionnel. La plupart du temps, les banques le demandent aux chefs d'entreprise qui souhaitent ouvrir un compte similaire dans leur entreprise.",
            "De même, c'est un document qui est fréquemment demand? lorsqu'un professionnel cherche un financement auprès d'une banque.",
          ],
        },
        {
          title: 'Aide publique',
          paragraphs: [
            'Les entrepreneurs qui remplissent les conditions requises peuvent demander une aide publique, notamment :',
          ],
          bullets: [
            'monétaire (par exemple, une subvention ou un prêt) ;',
            'technique (par exemple, un soutien) ;',
            'monétaire ou sociétale (comme des déductions ou des exemptions, entre autres).',
          ],
          tail:
            "Ces aides peuvent être demandées à des organismes privés chargés de les débourser ou à des organismes publics au sens strict du terme. Un Kbis récent doit être présent dans le dossier où cette derniére est fréquemment attribuée.",
        },
        {
          title: 'Acheter des biens ou des services pour son entreprise',
          paragraphs: [
            "Ensuite, lorsqu'il effectue des achats pour son entreprise, il utilise le Kbis. Il est courant que les fournisseurs le demandent. Ils peuvent l'utiliser pour vérifier que l'entreprise avec laquelle ils traitent est financièrement stable et sera en mesure de couvrir ses obligations. En outre, les informations de l'extrait peuvent être utilisées pour générer des factures.",
          ],
        },
        {
          title: "Participer à un appel d'offres",
          paragraphs: [
            "Et enfin, le Kbis est généralement requis lorsqu'on répond à une demande de propositions. La constitution d'un dossier est généralement requise pour remporter ces concours, et cet extrait est généralement l'un des documents requis.",
            "L'extrait permet à l'organisme qui a ?mis l'appel d'offres de confirmer l'existence légale des entités participant à l'appel d'offres et de déterminer si elles sont soumises à une procédure collective. Cette déclaration est faite sur le Kbis.",
          ],
        },
      ],
      obtainSection: {
        title: "Comment obtient-on un extrait Kbis ?",
        blocks: [
          {
            subtitle: "Obtenir l'extrait Kbis de sa propre entreprise",
            paragraphs: [
              "Une entreprise peut obtenir son propre extrait Kbis. Le dirigeant ou le représentant légal de l'entreprise doit se rendre sur le site de infosociete pour effectuer cette démarche. Il devra s'inscrire pour créer un compte. L'extrait Kbis de son entreprise sera alors disponible en téléchargement pour lui.",
              "Suite à l'immatriculation de l'entreprise au RCS, le greffier du tribunal de commerce remet en main propre le premier extrait Kbis de l'entreprise. Dans un délai de 10 à 15 jours, il vous est envoy? par courrier.",
            ],
          },
          {
            subtitle: "Obtenez l'extrait Kbis d'une autre entreprise.",
            paragraphs: [
              "Le Kbis est un document public qui est à la disposition de tous. L'extrait Kbis d'une entreprise tierce peut donc être obtenu de différentes maniéres :",
              "faire une demande auprès d'infosociete. La localisation du siège de l'entreprise doit être demandée au tribunal de commerce. Ensuite, l'intéress? peut s'envoyer par courrier une copie du Kbis de l'entreprise ;",
              "consulter les sites Internet consacrés aux données commerciales comme infosociete.pro. La partie intéressée peut obtenir directement le Kbis d'une entreprise tierce à partir de ces plateformes.",
            ],
          },
        ],
      },
      kbisCards: [
        {
          eyebrow: 'Notre formule Infosociete Pro',
          title: "Profitez d'un accès aux extraits de Kbis pour 1,49 à pendant 72h*",
          link: '*voir condition formule premium',
          button: "S'inscrire",
        },
        {
          eyebrow: 'Nous contacter',
          title: 'Prenez contact avec nous maintenant',
          email: 'contact@infosociete.pro',
          contactLink: 'Via la page de contact',
        },
        {
          eyebrow: 'Service client',
          title: 'Du lundi au samedi, par téléphone au',
          phone: '0 805 086 583',
          hours: 'De 8h à 20h',
        },
      ],
    },
'conditions-generales-de-vente': {
      title: 'CONDITIONS GENERALES DE VENTE (? CGV ?)',
      version: 'Version 1.1',
      intro:
        "Ce site est détenu et opéré par la société ODYSSEUS MEDIA LIMITED, Société Limited de droit irlandais au capital social de dix (10) euros, immatriculée auprès du Registre du commerce et des sociétés en Irlande sous le numéro 714131 , ayant son siège social à 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland (? Infosociete ?, ou « nous »).",
      blocks: [
        { type: 'heading', text: '1. Objet' },
        {
          type: 'paragraph',
          text:
            "Infosociete propose, dans le cadre de la souscription d’un abonnement mensuel, la fourniture des Services depuis la site Internet accessible à l’adresse URL suivante: infosociete.pro (? Site ?), uniquement à destination des professionnels (par opposition aux consommateurs)",
        },
        {
          type: 'paragraph',
          text: 'Les CGV régissent votre accès au Site et aux Services, et leur utilisation.',
        },
        {
          type: 'paragraph',
          text:
            'Lors de l’ouverture d’un compte sur le Site, vous serez invit?(e) à cocher une case confirmant que vous avez lu et que vous acceptez les CGV, qui formeront alors un contrat valable entre vous et Infosociete.',
        },
        {
          type: 'paragraph',
          text:
            'Nous vous remercions de lire attentivement ce qui suit. N’utilisez pas le Site si vous n’acceptez par les CGV. Nous pourrons mettre à jour les CGV de temps à autre, les CGV applicables sont celles en vigueur le jour de la souscription aux Services par le Client.',
        },
        {
          type: 'paragraph',
          text:
            'Nous pourrons ?galement être amenés à faire ?voluer sans préavis la structure et le design du Site, des certains Services ou contenus, afin d’améliorer votre expérience client.',
        },
        { type: 'heading', text: 'Définitions' },
        { type: 'paragraph', text: 'Dans ce document,' },
        { type: 'definition', term: '?CGV?', text: 'désigne le présent document.' },
        { type: 'definition', term: '?Compte?', text: 'désigne le compte que vous devez créer pour devenir Membre, et avoir accès aux Services disponibles sur le Site.' },
        {
          type: 'definition',
          term: '?Contenus?',
          text:
            "désignent les informations et/ou documents suivants, relatifs à des entreprises inscrites au registre du commerce et des sociétés sur le territoire français, en ce compris les informations juridiques et financières, accessibles dans le cadre de la souscription aux Services: extraits Kbis d’une société, chiffre d’affaire d’une société, nom des dirigeants et différents établissements d'une société, bilans, actes et brevets d’une société, annonces Bodacc et diagnostics financiers.",
        },
        { type: 'definition', term: '?Espace Client?', text: 'correspond à votre espace personnel et dédi?, où vous pourrez accéder aux Services.' },
        { type: 'definition', term: '?Formule?', text: 'désigne la formule de souscription aux Services telle que définie à l’article 5 des CGV.' },
        { type: 'definition', term: '?Lois Applicables?', text: "a le sens qui lui est donn? à l’Article 14." },
        {
          type: 'definition',
          term: '?Membre? ou ?vous?',
          text:
            "désigne toute personne physique ou morale souscrivant pour son compte aux Services proposés par Infosociete pour son activit? professionnelle et disposant d’un Compte sur le Site.",
        },
        {
          type: 'definition',
          term: '?Services?',
          text:
            'désignent les services payants fournis par la Société dans le cadre de la souscription à la formule Infosociete Pro et décrits à l’article 3 des CGV et qui vous sont proposées au travers du Site.',
        },
        { type: 'heading', text: '2. Ouvrir un Compte' },
        { type: 'subheading', text: 'A. Conditions' },
        {
          type: 'paragraph',
          text:
            'Vous devez être ?g?(e) d’au moins 18 ans. Vous devez être ?g?(e) d’au moins 18 ans pour pouvoir accéder à nos Services, ce que vous devrez certifier, le cas ?chéant, lors de l’ouverture du Compte.',
        },
        {
          type: 'paragraph',
          text:
            'Vous devez, le cas ?chéant, disposer du pouvoir d’engager la société que vous représentez. Vous certifiez que vous disposez du pouvoir d’engager la société ou l’entit? pour le compte de laquelle vous accédez à nos Services, et que cette derniére accepte sans réserve les T&G.',
        },
        { type: 'subheading', text: 'B. Créer un compte' },
        {
          type: 'paragraph',
          text: 'Le Site permet aux Membres de s’inscrire par la création d’un Compte, puis de bénéficier des Contenus.',
        },
        {
          type: 'paragraph',
          text:
            'Pour créer un Compte, vous devez remplir les champs obligatoires dans le formulaire d’enregistrement (en indiquant notamment le nom de votre entreprise, son SIRET ou SIREN, vos noms, prénom, email et numéro de téléphone), et nous vous enverrons un mot de passe par email. Vous devrez également lire et accepter les présentes CGV et notre Politique de données personnelles.',
        },
        { type: 'subheading', text: 'C. Exactitude des informations du Compte' },
        {
          type: 'paragraph',
          text:
            'Vous certifiez que votre Compte contient des informations exactes et réelles, et vous engagez à les mettre à jour, le cas ?chéant.',
        },
        { type: 'subheading', text: 'D. Mot de passe' },
        {
          type: 'paragraph',
          text:
            'Vous êtes responsable de votre mot de passe d’accès à votre Compte, dont vous devez préserver la confidentialit?. Vous vous engagez à nous informer de tout accès non autoris? à votre Compte ou de toute atteinte à la sécurit? de votre Compte, telle que la perte ou le vol de vos informations de connexion.',
        },
        { type: 'heading', text: '3. Services' },
        { type: 'subheading', text: 'A. Accés aux Contenus' },
        {
          type: 'paragraph',
          text: 'Notre service s’adresse uniquement aux professionnels, il inclut un espace personnalisé sur lequel vous pourrez télécharger :',
        },
        { type: 'paragraph', text: 'i. Contenus en accès limit? :' },
        {
          type: 'list',
          items: ['Extrait de Kbis: 7 par mois', 'Diagnostics Financier NOTA-PME et AFDCC: 30 par mois'],
        },
        { type: 'paragraph', text: 'ii. Contenus en accès illimit?:' },
        {
          type: 'list',
          items: ['Derniers comptes annuels', 'Derniers actes', 'Derniers brevets', "fiche de l'entreprise en PDF", 'Recherche de numéro de TVA valide'],
        },
        { type: 'subheading', text: 'B. Assistance' },
        {
          type: 'paragraph',
          text:
            'Vous pourrez bénéficier d’une ligne téléphonique spécialisée du lundi au samedi, de 8 heures à 20 heures, au 0 805 086 583',
        },
        {
          type: 'paragraph',
          text:
            'Vous pourrez ?galement communiquer et ?changer avec Infosociete, par courrier ?lectronique à l’adresse suivante contact@infosociete.pro et par chat depuis l’Espace Client.',
        },
        { type: 'heading', text: '4. Régles de conduite des Membres sur le Site' },
        { type: 'paragraph', text: 'L’utilisation du Site par les Membres est soumise à des règles. En utilisant le Site, vous acceptez:' },
        {
          type: 'list',
          items: [
            'de ne pas enfreindre les droits et image de Infosociete, tels que notamment ses droits de propriété intellectuelle ;',
            'de ne pas ouvrir de Compte au nom d’une autre personne que vous même ;',
            "de ne pas utiliser d’appareil, de logiciel ou d’autre ?lément susceptible d’interférer avec le bon fonctionnement du Site, ou dont l’objet est de détruire, interférer avec, intercepter ou détourner tout systéme, donnée ou information personnelle; et",
            'plus généralement, de ne rien faire qui puisse être contraire aux Lois Applicables, et aux CGV.',
          ],
        },
        { type: 'heading', text: '5. Paiement – facturation – modalités de paiement – intérêts de retard' },
        {
          type: 'paragraph',
          text:
            'Pour accéder aux Services, vous devez régler le montant de la formule mensuelle de Services (? Formule ?), tels que décrite sur le Site. Notre service ?tant destin? aux professionnels, les prix des Formules sont indiqués sur le Site, en euros (?) HT (Hors Taxes), ils prennent en compte le montant de la TVA applicable au jour de leur achat.',
        },
        {
          type: 'paragraph',
          text:
            'Tout accès membre au Service est conclu pour une durée indéterminée à compter de son engagement. Cet accès membre est sans engagement et résiliable à tout moment.',
        },
        { type: 'paragraph', text: 'La Formule comprend:' },
        {
          type: 'list',
          items: [
            'Une offre d’essai d’une durée déterminée de soixante-douze (72) heures au prix de 1,49 à euros TTC;',
            'Un abonnement mensuel renouvelable par tacite reconduction au prix de 69,00 à euros TTC.',
          ],
        },
        {
          type: 'paragraph',
          text:
            'La Formule est sans engagement et résiliable à tout moment, dont le prise en compte s’effectuera à la date anniversaire de la souscription de la Formule.',
        },
        {
          type: 'paragraph',
          text:
            'Afin de procéder au paiement de la Formule, vous autorisez Infosociete à effectuer des prélèvements sur votre compte bancaire et à aviser l’établissement domiciliataire. A cet effet, vous vous engagez à signer une autorisation de prélèvement et à maintenir en vigueur ladite autorisation pendant toute la durée d’exécution de la Formule.',
        },
        {
          type: 'paragraph',
          text:
            'Tout retard ou défaut de paiement, même partiel, entraîne, de plein droit et sans qu’une mise en demeure ne soit nécessaire, la perception par Infosociete, pour chaque facture impayée en tout ou en partie, de l’indemnité forfaitaire pour frais de recouvrement visée aux articles L. 441-9, I, alinéa 5 et D. 441-5 du Code de commerce (ou tous textes législatifs et/ou règlementaires qui leur serait substitué) en vigueur à la date de facturation assortie d’intérêts de retard auxquels s’ajouteront les taxes, ainsi que les frais et honoraires de recouvrement mêmes non répétibles.',
        },
        { type: 'paragraph', text: 'Infosociete se réserve le droit de modifier le montant de la Formule.' },
        {
          type: 'paragraph',
          text:
            'Vous en serez inform? au préalable par courrier ?lectronique deux (2) mois avant la fin de votre Formule en cours, et aurez alors la libert? de ne pas renouveler votre Formule.',
        },
        {
          type: 'paragraph',
          text:
            'La Formule est payable d’avance, par prélèvement sur le moyen de paiement renseigné sur le Site. En cas de défaut de paiement, Infosociete représentera le paiement et, en cas de nouveau défaut de paiement, pourra librement mettre fin aux Services, sans indemnité à sa charge, mais sans préjudice de la faculté qui lui est laissée de vous réclamer le paiement des sommes dues, et toutes réparations dont elle s’estime victime',
        },
        { type: 'heading', text: '6. Propriét? Intellectuelle' },
        { type: 'paragraph', text: 'Ce Site est opéré par Infosociete.' },
        {
          type: 'paragraph',
          text:
            "Notre logiciel propriétaire, et les contenus sur le Site, y compris notamment les logos, marques, noms commerciaux, images, textes, illustrations, fichiers audio, fichiers vidéo, ainsi que la sélection, la coordination et la combinaison de tels éléments, sont protégés par des droits d’auteur, les copyrights et le droit des marques, et d’autres droits de propriété intellectuelle ou industrielle qui sont soit détenus par nous, soit détenus par d’autres et pour lesquels nous avons obtenu une autorisation de leur part.",
        },
        {
          type: 'paragraph',
          text:
            'En devenant Membre, vous bénéficiez d’une licence non-exclusive, révocable, personnelle et non transférable d’utilisation du Site, pour votre usage personnel, ou celui de l’entreprise que vous représentez, et conformément à l’objet du Site.',
        },
        {
          type: 'paragraph',
          text:
            'Toute utilisation ou exploitation du Site, et de son contenu, différente de ce qui est permis par les présentes, vous est strictement interdite.',
        },
        {
          type: 'paragraph',
          text: 'La licence qui vous est consentie prendra fin en cas d’utilisation non conforme du Site.',
        },
        {
          type: 'paragraph',
          text:
            'Toutes nouvelles versions, mises à jour ou modifications du Site, des Services ou contenu séy rapportant seront régis par les CGV. Infosociete se réserve la faculté de se prévaloir de tout droit non expressément vis? par les présentes CGV.',
        },
        { type: 'heading', text: '7. Réle de Infosociete / Limitation de Responsabilit?' },
        { type: 'paragraph', text: 'Les Membres agissent sous leur pleine et entiére responsabilit?.' },
        {
          type: 'paragraph',
          text: 'En particulier, Infosociete ne pourra pas être tenue pour responsable si un Contenu ne produit pas l’effet désir? par le Membre, notamment à cause de :',
        },
        {
          type: 'list',
          items: [
            'D’informations erronées communiquées par le Membre lors de l’achat de son Contenu.',
            'D’un changement des lois applicables, rendant en tout ou en partie inexact, trompeur ou illégal, le Contenu;',
            "Une erreur quelconque de l??metteur à l’origine des Contenus qui sont fournis en l??tat, tel quéInfosociete les obtient, en particulier des greffes des Tribunaux de commerce",
          ],
        },
        {
          type: 'paragraph',
          text:
            'Nous ne sommes pas responsables des Contenus ou de l’utilisation des Contenus, de l’absence de résultat obtenu par rapport aux attentes dans l’utilisation des Contenus, de tout préjudice caus? par un Contenu, de tout dommage indirect tel que préjudice financier, perte d’exploitation ou préjudice moral dont pourrait se prévaloir un Membre du fait de sa navigation sur le Site ou de son recours aux Services.',
        },
        {
          type: 'emphasis',
          text:
            'A TITRE DE CONDITION ESSENTIELLE ET DETERMINANTE DES PRESENTES CGV, SI LA RESPONSABILITE D’INFOSOCIETE ETAIT RETENUE, LE CLIENT NE POURRAIT PRETENDRE, A D’AUTRES INDEMNITES ET DOMMAGES ET INTERETS OU REGLEMET QUELCONQUE, TOUTES CAUSES CONFONDUES, QUéAU MONTANT DE 5.000 EUROS TOUT PREJUDICE CONFONDU.',
        },
        {
          type: 'paragraph',
          text:
            'Vous acceptez de ne poursuivre Infosociete que pour les préjudices fondés sur des informations fournies par eux. Si vous intentez une action à l’encontre d’une autre personne morale ou physique que Infosociete vous renoncez expressément par les présentes à vous prévaloir de toute prêtention à l’encontre de Infosociete au titre de cette action.',
        },
        { type: 'heading', text: '8. Suspension du Compte, limitations d’accès et résiliation' },
        {
          type: 'paragraph',
          text:
            'Vous pouvez à tout moment mettre fin à votre relation contractuelle avec Infosociete en fermant votre Compte dans votre Espace Client. La suppression prendra fin immédiatement et votre Formule sera automatiquement résiliée pour une date d’effet à la date anniversaire de la souscription de la Formule.',
        },
        {
          type: 'paragraph',
          text:
            'Si vous ne respectez pas vos engagements prévus aux CGV, ou si nous avons de bonnes raisons de croire que la sécurit? et l’intégrit? de {0}, des Membres, ou de tiers sont à risque, nous nous réservons le droit de mettre fin immédiatement aux CGV vous liant à {0} et de fermer votre Compte',
        },
        {
          type: 'paragraph',
          text:
            'En cas de besoin, vous serez notifi?(e) d’une telle mesure afin de vous permettre déy répondre. Infosociete pourra décider à sa seule discrétion de mettre fin aux mesures mises en place.',
        },
        { type: 'heading', text: '9. Données Personnelles' },
        {
          type: 'paragraph',
          text:
            'Nous collectons et traitons certaines de vos données personnelles. En utilisant le Site et en vous enregistrant comme Membre, vous reconnaissez et consentez au traitement de vos données personnelles conformément à notre Politique de données personnelles.',
        },
        { type: 'heading', text: '10. Accessibilit? et fonctionnalités' },
        {
          type: 'paragraph',
          text:
            'Nous ferons nos meilleurs efforts pour maintenir une accessibilit? continue au Site. Mais l’accès au Site et l’utilisation de certaines fonctionnalités pourront être suspendus ou interrompus sans préavis, en raison d’opérations de maintenance, de migration, de mises à jour, de coupures ou de contraintes liées au réseau ou pour d’autres motifs techniques.',
        },
        {
          type: 'paragraph',
          text:
            'Nous nous réservons la faculté discrétionnaire de modifier ou de suspendre tout ou partie de votre accès au Site ou à ses fonctionnalités, de faéon temporaire ou permanente.',
        },
        { type: 'heading', text: '11. Hyperliens' },
        {
          type: 'paragraph',
          text:
            'Notre Site peut contenir des liens vers d’autres sites. Nous n’avons aucun contréle sur ces sites, et ne sommes pas responsables de leur contenu. En cliquant sur ces liens, vous reconnaissez que nous refusons toute responsabilit? pour le contenu de ces sites, et que nous n’avons aucun lien spécifique avec les personnes ou entités responsables de ces sites.',
        },
        { type: 'heading', text: '12. Modification des CGV' },
        {
          type: 'paragraph',
          text:
            'Ces CGV et les documents qui y sont expressément intégrés expriment l’intégralit? des accords entre vous et Infosociete concernant votre utilisation du Site et des Services.',
        },
        {
          type: 'paragraph',
          text:
            'Infosociete pourra modifier ces CGV afin de les adapter à l’environnement technologique et commercial, et de les rendre conforme à l’environnement légal et règlementaire. Toute version modifiée des CGV sera mise en ligne sur le Site avec la mention de sa date d’effet, et Infosociete vous informera de ces changements avant quéils ne prennent effect.',
        },
        { type: 'heading', text: '13. Droit de rétractation et politique de remboursement' },
        {
          type: 'emphasis',
          text:
            'CONFORMEMENT A L’ARTICLE L.221-3 DU CODE DE LA CONSOMMATION, DANS LE CADRE DE LA FORMULE, LE MEMBRE NE DISPOSE PAS DE DROIT DE RETRACTATION DONT SEUL LE CONSOMMATEUR AU SENS DU CODE PRECITE DISPOSE',
        },
        { type: 'heading', text: '14. Lois Applicable, Résolution des litiges' },
        {
          type: 'paragraph',
          text:
            'Les CGV sont régies par la loi française, sans préjudice de l’application de règles spécifiques liées aux règles générales de conflits de lois (les à Lois Applicables »).',
        },
        {
          type: 'paragraph',
          text:
            'Pour toute contestation qui se léverait entre le Membre et Infosociete, relativement à la validite, l’interprêtation, l’exécution, la résiliation, les conséquences et/ou les suites des CGV, le Membre et Infosociete s’efforceront en premier lieu, et dans la mesure du possible, de régler leur différend par voie amiable dans un délai d’un (1) mois à compter de la date de la premiére présentation du courrier recommand? avec avis de réception notifiant la contestation en cause.',
        },
        {
          type: 'paragraph',
          text:
            'Dans le cas où le litige ne peut être résolu de faéon amiable, vous acceptez de soumettre tous litiges aux tribunaux compétents du ressort de la Cour d’Appel de Paris, y compris en cas de pluralit? de défendeurs, procédure sur requéte, procédure d’urgence et appel en garantie.',
        },
        {
          type: 'paragraph',
          text:
            'Infosociete se réservera ?galement le droit d’initier, en fonction de la nature du litige, des procédures dans votre principal pays de d’exploitation de votre activit? professionnelle et/ou commerciale.',
        },
        { type: 'heading', text: "15. Délais de livraison d'un Contenu" },
        { type: 'paragraph', text: "Délai de réception d'un Contenu" },
        {
          type: 'paragraph',
          text:
            'Pour l’ensemble des commandes de Contenus, une fois la commande reéue par notre service, votre Contenu sera disponible dans les meilleurs délais et sous quarante-huit (48) heures ouvrées maximum.',
        },
        {
          type: 'paragraph',
          text:
            "Si un probléme survient ou si le Contenu est indisponible, notre service se réserve le droit de décliner votre demande de Contenu ainsi votre demande sera automatiquement déclinée et celle-ci ne seras pas comptée comme validée. Il vous sera alors possible de faire une autre demande d'un Contenu.",
        },
        {
          type: 'paragraph',
          text:
            "Ni Infosociete, ni notre service ne pourront être tenus pour responsable en cas de retard dans la réception d'un Contenu.",
        },
        { type: 'heading', text: '16. Date de mise à jour' },
        { type: 'paragraph', text: '22/01/2026' },
      ],
    },
'mentions-legales': {
      title: 'Mentions L\u00e9gales',
      lines: [
        'Le pr\u00e9sent site Web est fourni par',
        'ODYSSEUS MEDIA,',
        'Soci\u00e9t\u00e9 \u00e0 responsabilit\u00e9 limit\u00e9e de droit irlandais immatricul\u00e9e au registre du commerce et des soci\u00e9t\u00e9s en Irlande sous le num\u00e9ro 714131 ,',
        'dont le si\u00e8ge social est situ\u00e9 au 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland',
        'Num\u00e9ro de TVA : IE 3985411WH',
        '',
        'Le pr\u00e9sent site Web est fourni par',
        'Noreen K.',
        '',
        'Le site Web est h\u00e9berg\u00e9 par',
        'Le site infosociete.pro est h\u00e9berg\u00e9 par la soci\u00e9t\u00e9 GoDaddy',
        'Adresse : 14455 N. Hayden Rd., Ste. 226, Scottsdale, AZ 85260 USA',
        'T\u00e9l\u00e9phone : +44 20 7084 1810',
        '',
        'Vous pouvez nous contacter \u00e0 l\u2019adresse suivante',
        'E-mail : contact@infosociete.pro',
        'T\u00e9l\u00e9phone : 0 805 086 583',
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
      blocks: [
        { type: 'heading', text: '1. Informations générales' },
        {
          type: 'paragraph',
          text:
            '1.1 Le présent document utilise la même terminologie et les mêmes abréviations que le document sur les Conditions Générales de Vente. Un cookie est un petit fichier texte servant à stocker des informations sur les navigateurs Web. Il mémorise des informations liées à votre visite sur notre site Web, comme, par exemple, votre devise préférée et d’autres paramètres ; il nous aide à optimiser la navigation des utilisateurs sur le site Web.',
        },
        {
          type: 'paragraph',
          text:
            'Les cookies nous permettent de vous fournir un service plus convivial et plus satisfaisant grâce à l’activation de fonctionnalités essentielles.',
        },
        {
          type: 'paragraph',
          text:
            '1.2 Nos cookies (et d’autres types de technologies que nous utilisons dans un but similaire à celui des cookies, également dénommées dans les présentes « cookies ») peuvent varier dans le temps car nous mettons à jour continuellement nos services afin de les améliorer. Nous utilisons les cookies nécessaires dès votre accès à notre Site. Toutefois, nous avons besoin de votre consentement pour utiliser des cookies analytiques.',
        },
        {
          type: 'paragraph',
          text: 'Vous trouverez de plus amples informations sur nos cookies dans notre liste des cookies les plus utilisés ci-dessous.',
        },
        {
          type: 'table',
          headers: ['Catégorie d’utilisation', 'Exemple'],
          rows: [
            {
              label: 'Préférences',
              value:
                'Les cookies liés aux préférences activent les fonctionnalités de nos services, nous aidant ainsi à offrir à l’utilisateur une navigation personnalisée sur notre site. Ils mémorisent des informations comme, par exemple, la langue et la devise préférées, puis permettent au site de s’y adapter.',
            },
            {
              label: 'Authentification',
              value:
                'Si vous possédez un compte sur le Site, nous utilisons des cookies pour le vérifier et, selon vos préférences, afin de vous garder connecté pour vous donner un accès plus facile à nos services. Les cookies nous permettent également de stocker des informations de sécurité pour pouvoir récupérer votre compte en cas de piratage ou d’oubli de mot de passe.',
            },
            {
              label: 'Sécurité',
              value:
                'Si vous possédez un compte sur le Site, les cookies liés à la sécurité nous aident à protéger votre compte et les données des utilisateurs contre les parties non autorisées. Ces cookies préviennent l’utilisation frauduleuse d’identifiants de connexion grâce, par exemple, à des mesures de sécurité supplémentaires qui sont mises en œuvre lorsque quelqu’un tente d’accéder à votre compte sans autorisation appropriée.',
            },
            {
              label: 'Performances',
              value:
                'Les cookies liés aux performances permettent à toutes les fonctions de notre site Web de fonctionner correctement. Par exemple, vous ne pourrez pas vous servir de notre fonction de recherche ou avoir accès à notre page de connexion (si vous possédez un compte) sans ces cookies.',
            },
            {
              label: 'Analyse',
              value:
                'Ces cookies fournissent des informations sur la manière dont les visiteurs utilisent nos services et nous permettent de collecter des données sur les aspects à développer afin d’améliorer la navigation des utilisateurs.',
            },
          ],
        },
        {
          type: 'paragraph',
          text:
            '1.3 Nous sommes susceptibles de recourir à des services tiers comme Google Analytics. Les cookies provenant de ces services servent à collecter des données en vue de compiler des rapports statistiques.',
        },
        {
          type: 'paragraph',
          text:
            '1.4 Le Site utilise Google Analytics à des fins statistiques. L’application Google Analytics est configurée de sorte à ne pas collecter votre adresse IP ni aucune autre information personnelle permettant de vous identifier. Nous nous intéressons uniquement à la façon dont le Site est utilisé afin de pouvoir améliorer, modifier et adapter le Site et les Services pour répondre au mieux aux besoins des utilisateurs.',
        },
        {
          type: 'paragraph',
          text:
            'Vous trouverez de plus amples informations sur le fonctionnement de Google Analytics et sur la manière dont vous pouvez vous opposer à son utilisation sur le site : https://policies.google.com/technologies/partner-sites.',
        },
        { type: 'heading', text: '2. Gestion des cookies' },
        {
          type: 'paragraph',
          text:
            '2.1 Vous avez la possibilité de gérer vos préférences en matière de cookies à tout moment. Pour ce faire, ouvrez les paramètres de votre navigateur ou de votre appareil. Selon votre navigateur et votre appareil, vous pourrez décider quels cookies autoriser, quels cookies bloquer à l’avenir et quels cookies supprimer. Pour obtenir plus d’informations sur ces paramètres, consultez la page d’aide de votre navigateur ou de votre appareil.',
        },
        {
          type: 'paragraph',
          text:
            'Notez que certains des Services de Infosociete peuvent ne pas fonctionner comme prévu si vous choisissez de désactiver des cookies.',
        },
        { type: 'heading', text: '3. Coordonnées' },
        {
          type: 'paragraph',
          text:
            '3.1 En cas de questions ou d’inquiétude à l’égard de notre politique sur les cookies et la manière dont les informations sont traitées, ou encore si vous souhaitez accéder à vos Informations, les récupérer, les modifier ou les mettre à jour, n’hésitez pas à nous contacter à l’adresse contact@infosociete.pro.',
        },
        { type: 'heading', text: 'Vous pouvez nous contacter à l’adresse suivante' },
        { type: 'paragraph', text: 'E-mail : contact@infosociete.pro' },
        { type: 'paragraph', text: 'Téléphone : 0 805 086 583' },
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
            '1,49 € pour 72 heures puis 69,00 € par mois si non résilié dans les 72h. Facturation à la date anniversaire, prélèvement bancaire. Libellé Infosociete/infosociete.pro.',
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
      intro:
        "Si vous avez récemment consulté votre relevé bancaire et remarqué l'apparition de HPY*INFOSCTE ou Hp*infosociete parmi vos transactions, vous vous demandez probablement ce que cela représente. Ne vous inquiétez pas, nous sommes là pour clarifier cette énigme et vous aider à mieux comprendre vos finances.",
      questionTitle: "Qu'est-ce que HPY*INFOSCTE ou Hp*infosociete ?",
      questionBody:
        "HPY*INFOSCTE ou Hp*infosociete est une mention qui peut sembler obscure au premier abord. Cependant, derrière ces caractères se cache une signification spécifique liée à vos activités financières.",
      interpretationsTitle: 'Interprétations',
      interpretations: [
        {
          title: 'Transaction Commerciale',
          body:
            "HPY*INFOSCTE ou Hp*infosociete pourrait correspondre à un achat ou un paiement effectué avec votre carte bancaire. Il peut s'agir d'une transaction liée à notre service acheté en ligne.",
        },
        {
          title: 'Abonnement',
          body:
            "La partie INFOSCTE suggère une transaction liée à des services. Cela peut inclure notre abonnement à notre service en ligne et des frais pour l'accès à nos données.",
        },
        {
          title: 'Traitement en Cours',
          body:
            "Dans certains cas, HPY*INFOSCTE ou Hp*infosociete peut indiquer une transaction en cours de traitement ou d'autorisation. Les détails de la transaction peuvent ne pas encore être complets ou l'opération peut être en attente de confirmation.",
        },
      ],
      conclusionTitle: 'Conclusion',
      conclusionBody:
        "En conclusion, HPY*INFOSCTE ou Hp*infosociete peut sembler énigmatique au premier abord, mais il est important de comprendre son contexte et sa signification sur votre relevé bancaire. En suivant les conseils ci-dessus, vous pouvez éviter toute confusion liée à cette inscription.",
      kbis: {
        label: 'Extrait KBIS',
        title: 'Recevez votre Kbis',
        highlights: ['Sociétée Identifiée', 'Dirigeant Identifié', 'Code APE Identifié', 'Identification Greffe', 'ID Greffe'],
        disclaimerPrefix:
          "Formule basique de 1,49 € pour 72h, puis 69,00 € sur la même carte bancaire à la date anniversaire par prélèvement automatique mensuel sauf en cas de résiliation anticipée (ou anticipée en cas d'impossibilité). La résiliation de la formule premium est possible via ",
        disclaimerLinkLabel: 'ce lien',
        disclaimerEmail: 'contact@infosociete.pro',
        disclaimerPhone: '0 805 086 583',
        disclaimerSuffix: 'à tout moment.',
      },
    },
    'hpy-infoscte': {
      title: 'Annulez Facilement Votre Abonnement avec Infosociete - HPY*INFOSOCIETE à HPY*11 INFOSCTE',
      sections: [
        {
          title: 'Résiliez Votre Abonnement en Quelques Clics avec Infosociete pour \"HPY*INFOSOCIETE\"',
          body:
            'Vous souhaitez annuler votre abonnement marqué \"HPY*INFOSOCIETE\" sur votre relevé bancaire en quelques clics seulement ? Avec Infosociete, c’est désormais possible ! Utilisez notre formulaire en ligne convivial pour soumettre votre demande de résiliation facilement et rapidement. Simplifiez vos démarches dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Comment Annuler Votre Abonnement en Ligne avec Infosociete pour \"HPY*1 INFOSCTE\"',
          body:
            "Besoin d’annuler votre abonnement marqué \"HPY*1 INFOSCTE\" sur votre relevé bancaire en toute simplicité ? Laissez Infosociete vous guider ! Notre formulaire en ligne intuitif vous permet de résilier votre abonnement en quelques étapes simples. Mettez fin à votre abonnement sans tracas avec Infosociete.",
        },
        {
          title: 'Annulez Rapidement Votre Abonnement en Ligne avec Infosociete pour \"HPY*2 INFOSCTE\"',
          body:
            'Avec Infosociete, annuler votre abonnement marqué \"HPY*2 INFOSCTE\" sur votre relevé bancaire est un jeu d’enfant. Utilisez notre formulaire en ligne rapide et efficace pour soumettre votre demande de résiliation en quelques minutes seulement. Simplifiez vos démarches dès maintenant avec Infosociete.',
        },
        {
          title: 'Résiliez Votre Abonnement Facilement avec Infosociete pour \"HPY*3 INFOSCTE\"',
          body:
            'Vous recherchez un moyen facile et rapide d’annuler votre abonnement marqué \"HPY*3 INFOSCTE\" sur votre relevé bancaire ? Ne cherchez plus ! Utilisez notre formulaire en ligne convivial pour mettre fin à votre abonnement en quelques clics seulement. Simplifiez vos résiliations dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Mettez Fin à Votre Abonnement sans Stress avec Infosociete pour \"HPY*4 INFOSCTE\"',
          body:
            'Besoin de résilier votre abonnement marqué \"HPY*4 INFOSCTE\" sur votre relevé bancaire sans stress ni tracas ? Laissez Infosociete vous accompagner ! Remplissez notre formulaire en ligne facile à utiliser pour annuler votre abonnement en toute simplicité. Simplifiez vos résiliations en ligne dès maintenant avec Infosociete.',
        },
        {
          title: 'Annulation Simplifiée en Ligne avec Infosociete pour \"HPY*5 INFOSCTE\"',
          body:
            'Avec Infosociete, annuler votre abonnement marqué \"HPY*5 INFOSCTE\" sur votre relevé bancaire n’a jamais été aussi simple. Utilisez notre formulaire en ligne intuitif pour soumettre votre demande de résiliation en quelques clics seulement. Simplifiez vos démarches dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Découvrez Notre Formulaire de Résiliation en Ligne avec Infosociete pour \"HPY*6 INFOSCTE\"',
          body:
            'Envie d’annuler votre abonnement marqué \"HPY*6 INFOSCTE\" sur votre relevé bancaire en quelques clics seulement ? Laissez Infosociete vous faciliter la tâche ! Notre formulaire en ligne rapide et efficace vous permet de résilier votre abonnement en toute simplicité. Simplifiez vos démarches dès maintenant avec Infosociete.',
        },
        {
          title: 'Comment Résilier Facilement en Ligne avec Infosociete pour \"HPY*7 INFOSCTE\"',
          body:
            'Vous souhaitez résilier votre abonnement marqué \"HPY*7 INFOSCTE\" sur votre relevé bancaire sans souci ? Laissez Infosociete vous aider ! Utilisez notre formulaire en ligne convivial pour mettre fin à votre abonnement en quelques étapes simples. Simplifiez vos résiliations dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Annulez Votre Abonnement en Toute Tranquillité avec Infosociete pour \"HPY*8 INFOSCTE\"',
          body:
            'Mettez fin à votre abonnement marqué \"HPY*8 INFOSCTE\" sur votre relevé bancaire en toute tranquillité avec Infosociete. Notre formulaire en ligne simplifié vous permet de résilier votre abonnement sans stress ni tracas. Simplifiez vos démarches dès maintenant avec Infosociete.',
        },
        {
          title: 'Résiliez Votre Abonnement sans Tracas avec Infosociete pour \"HPY*9 INFOSCTE\"',
          body:
            'Besoin d’annuler votre abonnement marqué \"HPY*9 INFOSCTE\" sur votre relevé bancaire en quelques clics seulement ? Ne cherchez plus ! Utilisez notre formulaire en ligne convivial pour soumettre votre demande de résiliation facilement et rapidement. Simplifiez vos résiliations dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Comment Annuler Votre Abonnement en Ligne avec Infosociete pour \"HPY*10 INFOSCTE\"',
          body:
            'Vous recherchez un moyen facile et rapide d’annuler votre abonnement marqué \"HPY*10 INFOSCTE\" sur votre relevé bancaire ? Ne cherchez plus ! Utilisez notre formulaire en ligne intuitif pour mettre fin à votre abonnement en quelques clics seulement. Simplifiez vos résiliations dès aujourd’hui avec Infosociete.',
        },
        {
          title: 'Annulation Simplifiée en Ligne avec Infosociete pour \"HPY*11 INFOSCTE\"',
          body:
            'Avec Infosociete, annuler votre abonnement marqué \"HPY*11 INFOSCTE\" sur votre relevé bancaire n’a jamais été aussi simple. Utilisez notre formulaire en ligne intuitif pour soumettre votre demande de résiliation en quelques clics seulement. Simplifiez vos démarches dès aujourd’hui avec Infosociete.',
        },
      ],
      contactTitle: 'Nous contacter',
      contactFormTitle: 'Formulaire de Contact',
      consentText:
        "En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me recontacter.",
      kbis: {
        label: 'Extrait KBIS',
        title: 'Recevez votre Kbis',
        highlights: ['Sociétée Identifiée', 'Dirigeant Identifié', 'Code APE Identifié', 'Identification Greffe', 'ID Greffe'],
        disclaimerPrefix:
          "Formule basique de 1,49 € pour 72h, puis 69,00 € sur la même carte bancaire à la date anniversaire par prélèvement automatique mensuel sauf en cas de résiliation anticipée (ou anticipée en cas d'impossibilité). La résiliation de la formule premium est possible via ",
        disclaimerLinkLabel: 'ce lien',
        disclaimerEmail: 'contact@infosociete.pro',
        disclaimerPhone: '0 805 086 583',
        disclaimerSuffix: 'à tout moment.',
      },
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
      { label: 'Résiliation', path: '/resiliation' },
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
