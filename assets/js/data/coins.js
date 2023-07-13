export const COINS = [
    { 
        id: 'bitcoin',
        x: 300,
        y: 800
    },
    {
        id: 'blockchain',
        x: 950,
        y: 500
    },
    {
        id: 'carte-graphique',
        x: 1440,
        y: 660
    },
    {
        id: 'crypto-bro',
        x: 750,
        y: 800
    },
    {
        id: 'crypto-monnaie',
        x: 2000,
        y: 500
    },
    {
        id: 'crypto-troll',
        x: 250,
        y: 250
    },
    {
        id: 'dao-decentralized-autonomous-organization',
        x: 1950,
        y: 300
    },
    // {
    //     name: 'Ethereum',
    //     src: '/assets/images/coin/coin.png',
    //     x: 350,
    //     y: 600,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Crypto monnaie qui promet qu’elle va bientôt passer en Proof of Stake et devenir plus écologique (moins désastreuse). Ça fait 2 ans que c’est pour bientôt. Restez en ligne. C\'est bon, c\'est fait ! Ça s\'appelait The Merge, et c\'était le 15 septembre 2022.</p>'
    // },
    // {
    //     name: 'Fiat monnaie',
    //     src: '/assets/images/coin/coin.png',
    //     x: 800,
    //     y: 350,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Les pièces et les billets, aussi appelés monnaie fiduciaire. Il paraît que si on l’utilise, on devient vieux.</p>'
    // },
    // {
    //     name: 'Minage',
    //     src: '/assets/images/coin/coin.png',
    //     x: 900,
    //     y: 700,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Processus qui consiste à ne rien faire de ses dix doigts, en faisant travailler les processeurs graphiques de beaucoup trop d’ordinateurs pour produire des calculs qui vont à la poubelle la plupart du temps, si c’est du POW (voir POW). Si c’est du POS (voir POS), on ne fait toujours rien de ses dix doigts, mais les ordinateurs se mettent d’accord avant de travailler. Pour ce travail, on est généralement rémunéré en crypto monnaie, ce qui est intéressant tant que la valeur de la monnaie en question dépasse le coût de l’énergie dépensée pour les calculs. Parfois, si l’électricité est trop chère, ou si les cryptos ne valent pas assez, on laisse ces pauvres ordinateurs se reposer.'
    // },
    // {
    //     name: 'Minting',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1650,
    //     y: 600,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Processus de création d’un NFT à partir d’un objet numérique, par exemple un fichier ou une URL. On prend un bidule qu’on peut copier à l’infini, et on dépense de l’énergie pour faire croire que non.</p>'
    // },
    // {
    //     name: 'NFT (Non Fongible Token)',
    //     src: '/assets/images/coin/coin.png',
    //     x: 2200,
    //     y: 100,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Un identifiant unique, enregistré dans une blockchain, qui lie un objet numérique avec le compte d’une personne. Si les NFTs sont souvent présentés comme des titres de propriété, ils n’en sont absolument pas, comme l’illustre la vente du territoire de la Russie en NFT. C’est un dispositif permettant de vendre un droit illusoire sur une création que l’on ne possède pas. Plus absurde, dans la plupart des cas, les NFTs sont utilisés pour prétendre détenir une instance unique d’un fichier dupliqué à l’infini, comme une image que l’on peut s’envoyer par mail.</p>'
    // },
    // {
    //     name: 'Oracle',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1500,
    //     y: 380,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>C’est un grand nom pour un concept clé : le système qui raccorde une blockchain avec le monde réel. Par exemple, si je veux enregistrer des informations sur le blé utilisé pour faire un morceau de pain, il faut qu’un humain ou une machine le saisisse via une interface. Et si on lui dit n’importe quoi, et bien la blockchain enregistre ce n’importe quoi. Bref, ça sécurise la partie qui ne pose aucun problème (le registre), et ça ne sécurise pas la partie qui pose tous les problèmes (la source d’information). Reprenez un cookie, Neo.</p>'
    // },
    // {
    //     name: 'POA (Proof of Authority)',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1300,
    //     y: 500,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Un système dans lequel on centralise la décentralisation. Oui, c’est un contresens.</p>'
    // },
    // {
    //     name: 'POH (Proof of History)',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1080,
    //     y: 250,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Un genre de POS qui s’appuie sur les dates de transaction, avec un truc incroyablement nouveau, le timestamp. Le timestamp est le nombre de secondes écoulées entre une certaine date et le 1er janvier 1970 à 00:00:00, appelé aussi epoch. On se croirait dans Matrix, mais c’est juste une date, rien de spécial. Ah si, c’est la sortie de l’album “Third”, de Soft Machine.</p>'
    // },
    // {
    //     name: 'POS (Proof of Stake)',
    //     src: '/assets/images/coin/coin.png',
    //     x: 2000,
    //     y: 100,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Le mécanisme utilisé par Ethereum depuis 2022. Concrètement, dans le POW, tout le monde court. Dans le POS, on choisit d’abord les coureurs, ce qui limite la course pour rien. En revanche, ça crée un nouveau problème : sur quels critères choisit-on les coureurs ? Et bien on choisit les plus riches ! Révolutionnaire, comme idée !!!</p>'
    // },
    // {
    //     name: 'POW (Proof of Work)',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1800,
    //     y: 450,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Le système utilisé par Bitcoin pour enregistrer les transactions. Ca ressemble beaucoup à la course des spermatozoïdes, sauf que ce serait des spermatozoïdes avec une carte graphique énorme qui consomme beaucoup d’électricité. Et à la fin, il y en a un qui devient le papa d’un joli bloc tout rose, et tous les autres vont dans les toilettes.</p>'
    // },
    // {
    //     name: 'Satoshi Nakamoto',
    //     src: '/assets/images/coin/coin.png',
    //     x: 650,
    //     y: 500,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Le créateur légendaire du bitcoin. En réalité, c’est un pseudonyme, on ne sait pas qui a fait le coup, et cette question est devenue un vrai Cluedo en ligne.</p>'
    // },
    // {
    //     name: 'Smart contract',
    //     src: '/assets/images/coin/coin.png',
    //     x: 1070,
    //     y: 850,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Un contrat automatisé, qui s’exécutera quoi qu’il arrive. Enfin, sauf si le site a disparu entre temps, ou qu’il y a un problème de version, ou de sécurité, ou… Penser qu’avec des ordinateurs, dans plusieurs années, tout va bien se passer, c’est si bête que c’est mignon.</p>'
    // },
    // {
    //     name: 'Stablecoin',
    //     src: '/assets/images/coin/coin.png',
    //     x: 100,
    //     y: 550,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Une crypto-monnaie stable. Garantie totale ! Aucun crash, rien, jamais. Bon, ça va, c’était une blague.</p>'
    // },
    // {
    //     name: 'Token',
    //     src: '/assets/images/coin/coin.png',
    //     x: 150,
    //     y: 900,
    //     srcWidth: 160,
    //     srcHeight: 160,
    //     html: '<p>Un jeton qui se donne des grands airs. C’est juste une chaîne de caractères un peu longue.</p>'
    // }
];

