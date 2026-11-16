import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU2L1 = defineLesson({
  id: 'es-u2-l1',
  title: 'Articoli e genere',
  subtitle: 'El, la, un, una: come riconoscere il genere',
  objectives: [
    'Scegliere l\'articolo determinativo e indeterminativo',
    'Riconoscere il genere dei nomi più comuni',
    'Usare el/la anche con i nomi irregolari',
  ],
  vocab: [
    { term: 'el libro', translation: 'il libro' },
    { term: 'la mesa', translation: 'il tavolo' },
    { term: 'el chico / la chica', translation: 'il ragazzo / la ragazza' },
    { term: 'el problema', translation: 'il problema' },
    { term: 'el día', translation: 'il giorno' },
    { term: 'la mano', translation: 'la mano' },
    { term: 'un / una', translation: 'un / una' },
    { term: 'unos / unas', translation: 'alcuni / alcune' },
  ],
  exercises: [
    mc('___ libro', ['el', 'la', 'los', 'una'], 0),
    mc('___ mesa', ['la', 'el', 'los', 'un'], 0),
    fb('___ chica es italiana.', ['La'], 'La ragazza è italiana.'),
    tr('Il ragazzo è alto.', ['El chico es alto.']),
    wo('Una ragazza e un ragazzo.', ['Una', 'chica', 'y', 'un', 'chico.']),
    li(
      'En la mesa hay un libro y una revista.',
      'Cosa c\'è sul tavolo?',
      ['Un libro e una rivista', 'Un libro e un quaderno', 'Una penna e una rivista', 'Due libri'],
      0,
    ),
    mc('Scegli l\'articolo giusto: ___ problema', ['el', 'la', 'los', 'una'], 0),
    fb('___ libros son nuevos.', ['Los'], 'I libri sono nuovi.'),
    tr('Le ragazze sono simpatiche.', ['Las chicas son simpáticas.']),
    mc(
      'Quale coppia è corretta?',
      ['un libro / una mesa', 'una libro / un mesa', 'un mesa / una libro', 'los libro / las mesa'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Perché «el problema» e «el día» sono maschili?',
      answer: 'Molti nomi in -ma di origine greca sono maschili: el problema, el mapa, el tema. «Día» è maschile nonostante finisca in -a. Non basta guardare l\'ultima lettera.',
    },
    {
      question: '«La mano» è davvero femminile?',
      answer: 'Sì. È un\'eccezione: si dice «la mano» e «las manos», anche se finisce in -o.',
    },
  ],
})

const esU2L2 = defineLesson({
  id: 'es-u2-l2',
  title: 'Plurali, numeri e colori',
  subtitle: 'Da uno a dieci, dal singolare al plurale',
  objectives: [
    'Formare il plurale dei nomi e degli aggettivi',
    'Contare da uno a dieci',
    'Concordare i colori con il nome',
  ],
  vocab: [
    { term: 'uno, dos, tres', translation: 'uno, due, tre' },
    { term: 'cuatro, cinco', translation: 'quattro, cinque' },
    { term: 'seis, siete, ocho', translation: 'sei, sette, otto' },
    { term: 'nueve, diez', translation: 'nove, dieci' },
    { term: 'rojo / roja', translation: 'rosso / rossa' },
    { term: 'azul', translation: 'blu' },
    { term: 'verde', translation: 'verde' },
    { term: 'negro / negra', translation: 'nero / nera' },
  ],
  exercises: [
    mc('Il plurale di «libro» è…', ['libros', 'libroes', 'libres', 'libroses'], 0),
    fb('Hay ___ libros. (tre)', ['tres'], 'Ci sono tre libri.'),
    tr('Ho cinque amici.', ['Tengo cinco amigos.']),
    wo('La macchina è rossa.', ['El', 'coche', 'es', 'rojo.']),
    li(
      'Tengo dos hermanos y tres hermanas.',
      'Quanti fratelli e sorelle?',
      ['Due fratelli e tre sorelle', 'Tre fratelli e due sorelle', 'Due fratelli e due sorelle', 'Tre fratelli'],
      0,
    ),
    mc('Il plurale di «ciudad» è…', ['ciudades', 'ciudads', 'ciudadeses', 'ciudade'], 0),
    fb('Las flores son ___. (blu)', ['azules'], 'I fiori sono blu.'),
    tr('Dieci libri verdi.', ['Diez libros verdes.']),
    mc(
      'Scegli la frase corretta.',
      ['Hay un libro rojo.', 'Hay una libro rojo.', 'Hay un libro roja.', 'Hay unos libro rojo.'],
      0,
    ),
    wo('Ci sono cinque sedie nere.', ['Hay', 'cinco', 'sillas', 'negras.']),
  ],
  faq: [
    {
      question: 'Come si forma il plurale?',
      answer: 'Se il nome finisce in vocale si aggiunge -s: libro → libros. Se finisce in consonante si aggiunge -es: ciudad → ciudades. La z finale diventa c: lápiz → lápices.',
    },
    {
      question: 'I colori cambiano al plurale?',
      answer: 'Sì, quando sono aggettivi: «un coche rojo», «dos coches rojos». «Azul» aggiunge -es: «azul → azules».',
    },
  ],
})

const esU2L3 = defineLesson({
  id: 'es-u2-l3',
  title: 'Descrivere persone e cose',
  subtitle: 'Alto, bajo, joven: aggettivi che si accordano',
  objectives: [
    'Descrivere l\'aspetto di una persona',
    'Concordare gli aggettivi in genere e numero',
    'Distinguere aggettivi invariabili e variabili',
  ],
  vocab: [
    { term: 'alto / alta', translation: 'alto / alta' },
    { term: 'bajo / baja', translation: 'basso / bassa' },
    { term: 'delgado / delgada', translation: 'magro / magra' },
    { term: 'gordo / gorda', translation: 'grasso / grassa' },
    { term: 'joven', translation: 'giovane' },
    { term: 'viejo / vieja', translation: 'vecchio / vecchia' },
    { term: 'guapo / guapa', translation: 'bello / bella' },
    { term: 'nuevo / nueva', translation: 'nuovo / nuova' },
  ],
  exercises: [
    mc('Ana es ___. (alta)', ['alta', 'alto', 'altas', 'altos'], 0),
    fb('Mi abuelo es ___. (vecchio)', ['viejo'], 'Mio nonno è vecchio.'),
    tr('Mio fratello è giovane e magro.', ['Mi hermano es joven y delgado.']),
    wo('Le ragazze sono belle.', ['Las', 'chicas', 'son', 'guapas.']),
    li(
      'Mi amiga Marta es baja, delgada y muy simpática.',
      'Com\'è Marta?',
      ['Bassa, magra e simpatica', 'Alta, magra e timida', 'Bassa, grassa e simpatica', 'Alta e antipatica'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Los chicos son altos.', 'Los chicos son altas.', 'Las chicas son altos.', 'Los chico son alto.'],
      0,
    ),
    fb('Nosotros somos ___. (giovani)', ['jóvenes'], 'Noi siamo giovani.'),
    tr('È una ragazza bella e simpatica.', ['Es una chica guapa y simpática.']),
    mc('Il contrario di «alto» è…', ['bajo', 'gordo', 'joven', 'nuevo'], 0),
    wo('Mio padre non è vecchio.', ['Mi', 'padre', 'no', 'es', 'viejo.']),
  ],
  faq: [
    {
      question: 'Tutti gli aggettivi cambiano al femminile?',
      answer: 'No. Quelli in -o cambiano: alto → alta. Quelli in -e o in consonante spesso restano uguali: joven, inteligente, grande. Alcuni aggiungono -a: trabajador → trabajadora.',
    },
    {
      question: 'L\'aggettivo va prima o dopo il nome?',
      answer: 'Di solito dopo: «una casa grande», «un chico alto». Alcuni aggettivi comuni possono precedere il nome, ma all\'inizio è più sicuro metterli dopo.',
    },
  ],
})

const esU2G1 = defineTopic({
  id: 'es-u2-g1',
  title: 'Articoli, genere e numero',
  subtitle: 'La struttura del nome spagnolo',
  intro:
    'Ogni nome spagnolo ha un genere (maschile o femminile) e un numero (singolare o plurale). Articoli e aggettivi devono concordare con il nome.',
  sections: [
    {
      heading: 'Articoli determinativi e indeterminativi',
      table: {
        headers: ['', 'Maschile singolare', 'Femminile singolare', 'Maschile plurale', 'Femminile plurale'],
        rows: [
          ['Determinativo', 'el', 'la', 'los', 'las'],
          ['Indeterminativo', 'un', 'una', 'unos', 'unas'],
        ],
      },
      examples: [
        { target: 'el libro / los libros', italian: 'il libro / i libri' },
        { target: 'la mesa / las mesas', italian: 'il tavolo / i tavoli' },
        { target: 'un chico / una chica', italian: 'un ragazzo / una ragazza' },
      ],
    },
    {
      heading: 'Come riconoscere il genere',
      bullets: [
        'Finiscono in -o: spesso maschili (libro, chico, vaso).',
        'Finiscono in -a: spesso femminili (mesa, casa, chica).',
        'Finiscono in -ción, -sión, -dad, -tad: femminili (canción, ciudad).',
        'Finiscono in -ma di origine greca: spesso maschili (problema, mapa, tema).',
        'Eccezioni da imparare: la mano, el día, la foto, la moto.',
      ],
    },
    {
      heading: 'Plurale',
      paragraphs: [
        'Vocale finale + s; consonante finale + es. Se il nome finisce in z, la z diventa c e si aggiunge -es.',
      ],
      table: {
        headers: ['Singolare', 'Plurale', 'Regola'],
        rows: [
          ['libro', 'libros', 'vocale + s'],
          ['mesa', 'mesas', 'vocale + s'],
          ['ciudad', 'ciudades', 'consonante + es'],
          ['lápiz', 'lápices', 'z → c + es'],
        ],
      },
    },
    {
      heading: 'Accordo degli aggettivi',
      paragraphs: [
        'L\'aggettivo concorda con il nome in genere e numero. Quelli in -o hanno quattro forme; quelli in -e o consonante ne hanno due (singolare e plurale).',
      ],
      table: {
        headers: ['', 'Maschile singolare', 'Femminile singolare', 'Maschile plurale', 'Femminile plurale'],
        rows: [
          ['alto', 'alto', 'alta', 'altos', 'altas'],
          ['joven', 'joven', 'joven', 'jóvenes', 'jóvenes'],
          ['azul', 'azul', 'azul', 'azules', 'azules'],
        ],
      },
    },
  ],
  exercises: [
    mc('___ casa es grande.', ['La', 'El', 'Los', 'Un'], 0),
    fb('Tengo ___ libro nuevo. (un)', ['un'], 'Ho un libro nuovo.'),
    tr('Le case sono nuove.', ['Las casas son nuevas.']),
    mc('Il plurale di «lápiz» è…', ['lápices', 'lápizes', 'lápizs', 'lápice'], 0),
    wo('I ragazzi sono simpatici.', ['Los', 'chicos', 'son', 'simpáticos.']),
    fb('___ problema es difícil.', ['El'], 'Il problema è difficile.'),
  ],
  faq: [
    {
      question: 'Un nome in -a è sempre femminile?',
      answer: 'No: «el problema», «el mapa», «el día» sono maschili. Il genere va imparato insieme alla parola, non solo dalla desinenza.',
    },
    {
      question: 'Perché «el agua» ma «las aguas»?',
      answer: '«Agua» è femminile, ma al singolare usa «el» per evitare due suoni a vicini. Al plurale torna «las aguas».',
    },
  ],
})

export const esU2 = defineUnit({
  id: 'es-u2',
  title: 'Persone e oggetti',
  subtitle: 'Articoli, genere, plurali, numeri e colori',
  intro:
    'Qui impari a nominare le cose e a descriverle. Il genere dei nomi, gli articoli e l\'accordo degli aggettivi sono la base per costruire frasi corrette e non solo parole isolate.',
  keyPoints: [
    'Articoli el/la/los/las e un/una',
    'Plurali regolari e casi particolari',
    'Numeri e colori',
    'Accordo di aggettivi e sostantivi',
  ],
  theory: [
    {
      heading: 'Genere: maschile o femminile',
      paragraphs: [
        'In spagnolo ogni nome ha un genere grammaticale. Non sempre coincide con il sesso della persona o della cosa: «la mesa» è femminile, «el libro» maschile. Il genere si nota dall\'articolo e dagli aggettivi che lo accompagnano.',
        'Le desinenze aiutano, ma non bastano. I nomi in -o sono spesso maschili, quelli in -a spesso femminili. Esistono però eccezioni importanti: «el problema», «el mapa», «el día», «la mano». Quando impari una parola nuova, imparala insieme al suo articolo.',
      ],
      examples: [
        { target: 'el libro', italian: 'il libro (maschile)' },
        { target: 'la mesa', italian: 'il tavolo (femminile)' },
        { target: 'el problema', italian: 'il problema (maschile)' },
        { target: 'la mano', italian: 'la mano (femminile)' },
      ],
    },
    {
      heading: 'Articoli e plurali',
      paragraphs: [
        'L\'articolo determinativo indica qualcosa di noto: el, la, los, las. Quello indeterminativo indica qualcosa di non specificato: un, una, unos, unas. «Unos/unas» corrisponde spesso a «alcuni/alcune» o a un plurale indefinito.',
        'Il plurale si forma aggiungendo -s dopo una vocale e -es dopo una consonante. I nomi che finiscono in z cambiano z in c: lápiz → lápices. Gli aggettivi seguono le stesse regole e concordano con il nome.',
      ],
      table: {
        headers: ['Singolare', 'Plurale', 'Esempio'],
        rows: [
          ['libro', 'libros', 'un libro / dos libros'],
          ['mesa', 'mesas', 'una mesa / dos mesas'],
          ['ciudad', 'ciudades', 'una ciudad / dos ciudades'],
          ['lápiz', 'lápices', 'un lápiz / dos lápices'],
        ],
      },
    },
    {
      heading: 'Numeri e colori',
      paragraphs: [
        'I numeri da uno a diez sono: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Davanti a un nome maschile «uno» diventa «un»: un libro. Davanti a un nome femminile diventa «una»: una mesa.',
        'I colori sono aggettivi e si mettono dopo il nome: «un coche rojo», «una casa blanca». Concordano in genere e numero. Alcuni, come «azul» o «verde», hanno una sola forma al singolare e aggiungono -es al plurale: azul → azules, verde → verdes.',
      ],
      table: {
        headers: ['Colore', 'Maschile', 'Femminile', 'Plurale'],
        rows: [
          ['rosso', 'rojo', 'roja', 'rojos / rojas'],
          ['blu', 'azul', 'azul', 'azules'],
          ['verde', 'verde', 'verde', 'verdes'],
          ['nero', 'negro', 'negra', 'negros / negras'],
        ],
      },
    },
  ],
  lessons: [esU2L1, esU2L2, esU2L3],
  grammar: [esU2G1],
})
