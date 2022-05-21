# phrases-cultes

## Une API permettant d'optenir des répliques cultes de films francophones

Inspirée de https://github.com/FotieMConstant/geek-quote-api

## Production host

https://phrases-cultes.herokuapp.com/

## APIs

      GET /v1/quote

Returns an object with one random quote:

    {"id":"28",
    "quote":"Mais je vous en prie. Figurez-vous que Thérèse n’est pas moche. Elle n’a pas un physique facile… C’est différent",
    "personage":"Pierre ",
    "actor":"Thierry Lhermitte",
    "film":"Le père noël est une ordure",
    "year":1982,
    "from":"Jean-Marie Poiré"
    }

    GET /v1/quotes/

Returns an array of all quotes

    [...
    {
    "id":"21",
    "quote":"Pas d'bras, pas d'chocolat!",
    "personage":"Driss",
    "actor":"Omar Sy",
    "film":"Intouchables",
    "year":2011,
    "from":"Olivier Nakache et Éric Toledano"
    },
    {
    "id":"18",
    "quote":"- Et toi, tu penses quoi de la peine de mort ? - Des fois je suis contre mais des fois je ne suis pas pour !",
    "personage":["Mademoiselle Lajoie","Gérard Barbier"],
    "actor":["Josiane Balasko","Coluche"],
    "film":"Le maître d’école",
    "year":1981,
    "from":"Claude Berri"
    }
    ...]

    GET /v1/quote/<count> e.g GET /v1/quote/4

Returns an array of the number of quotes specified

    [
    {
    "id":"9",
    "quote":"- En tout cas, ils peuvent me tuer je ne parlerai pas - Mais moi non plus ! ils peuvent vous tuer, je ne parlerai pas - Je savais qu’on pouvait compter sur vous",
    "personage":["Augustin Bouvet","Stanislas Lefort"],
    "actor":["Bourvil","Louis de Funès"],
    "film":"La grande vadrouille",
    "year":1966,
    "from":"Gérard Oury"
    },
    {
    "id":"4",
    "quote":"- J’ai bon caractère mais j’ai le glaive vengeur et le bras séculier. L’aigle va fondre sur la vieille buse.- C’est chouette ça, comme métaphore… - C’est pas une métaphore, c’est une périphrase. - Fais pas chier ! - Ca c’est une métaphore.",
    "personage":["Monsieur Charles","2 hommes de main"],
    "actor":["Bernard Blier","Jean Saudray","Dominique Zardi"],
    "film":" Faut pas prendre les enfants du bon dieu pour des canards sauvages",
    "year":1968,
    "from":"Michel Audiard"
    },
    {
    "id":"10",
    "quote":"J’ai vécu avec une femme, et puis, au bout de 48 heures, elle a décidé qu’on se séparerait d’un commun accord. Alors j’ai pas bien supporté. J’ai même essayé de me suicider [...] J’ai mis l’adagio d’Albinoni, j’ai avalé deux tubes de laxatifs et puis hop ! j’ai perdu 16 kilos et ma moquette.",
    "personage":"Jean-Claude Dusse",
    "actor":"Michel Blanc",
    "film":"Les Bronzés",
    "year":1978,
    "from":"Patrice Leconte"
    },
    {
    "id":"21",
    "quote":"Pas d'bras, pas d'chocolat!",
    "personage":"Driss",
    "actor":"Omar Sy",
    "film":"Intouchables",
    "year":2011,
    "from":"Olivier Nakache et Éric Toledano"
    }
    ]

    GET /v1/quote/filter/{{keyword}} e.g GET /v1/quote/filter/bien

Returns an object with random quote with the searched keyword:

    {
    "id":"27",
    "quote":"Très bien, on va faire l’appel. – Pierre? – Présent. – Pierre? – Présent. – Pierre? – Présente. – Pierre? – Présente. – Ah, Pierre? – Présent. – Pierre? … Pierre… Évidemment encore absent celui-là. J’imagine que Pierre n’est pas là non plus! Comme par hasard, toujours ensemble ces deux-là.",
    "personage":"Pierre",
    "actor":"Maurice Barthélémy",
    "film":"RRRrrrr !!!",
    "year":2004,
    "from":"Alain Chabat"
    }

    GET /v1/quote/filter/all/{{keyword}} e.g GET /v1/quote/filter/all/bien

Returns an array with all quotes with the searched keyword:

    [
    {
    "id":"10",
    "quote":"J’ai vécu avec une femme, et puis, au bout de 48 heures, elle a décidé qu’on se séparerait d’un commun accord. Alors j’ai pas bien supporté. J’ai même essayé de me suicider [...] J’ai mis l’adagio d’Albinoni, j’ai avalé deux tubes de laxatifs et puis hop ! j’ai perdu 16 kilos et ma moquette.",
    "personage":"Jean-Claude Dusse",
    "actor":"Michel Blanc",
    "film":"Les Bronzés",
    "year":1978,
    "from":"Patrice Leconte"
    },
    {
    "id":"16",
    "quote":"Quelque fois dans la rue, il y a devant moi une belle fille qui marche les cheveux au vent. Les battements de mon cœur s'accélèrent, je presse le pas pour arriver à sa hauteur. Je la regarde, elle est moche. Et bien je vous assure, je suis soulagé. Je trouve ça rassurant",
    "personage":"Fergus ",
    "actor":"Charles Denner",
    "film":"La mariée était en noir",
    "year":1968,
    "from":"François Truffaut"
    },
    {
    "id":"25",
    "quote":"- Il s’appelle Juste Leblanc. – Ah bon, il n’a pas de prénom? – Je viens de vous le dire Juste Leblanc… Votre prénom c’est François, c’est juste? Eh bien lui c’est pareil, c’est Juste.",
    "personage":["Pierre Brochant","François Pignon"],
    "actor":["Thierry Lhermitte","Jacques Villeret"],
    "film":"Le dîner de cons","year":1998,"from":"Francis Veber"
    },
    {
    "id":"26",
    "quote":"Merci la gueuse. Tu es un laideron mais tu es bien bonne.",
    "personage":"Jacquouille",
    "actor":"Christian Clavier",
    "film":"les Visiteurs",
    "year":1993,"from":"Jean-Marie Poiré "
    },
    {
    "id":"27",
    "quote":"Très bien, on va faire l’appel. – Pierre? – Présent. – Pierre? – Présent. – Pierre? – Présente. – Pierre? – Présente. – Ah, Pierre? – Présent. –   Pierre? … Pierre… Évidemment encore absent celui-là. J’imagine que Pierre n’est pas là non plus! Comme par hasard, toujours ensemble ces deux-là.",
    "personage":"Pierre",
    "actor":"Maurice Barthélémy",
    "film":"RRRrrrr !!!",
    "year":2004,
    "from":"Alain Chabat"
    }
    ]

## Local development

Once you've cloned this repo,

      run npm install

to install the dependencies.

Then you can run:

    npm start

runs the compiled server
