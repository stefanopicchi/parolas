import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../helpers'
import type { Course } from '../types'

/* ------------------------------------------------------------------ */
/* Unità 1 — Primi passi                                               */
/* ------------------------------------------------------------------ */

const frU1L1 = defineLesson({
  id: 'fr-u1-l1',
  title: 'Bonjour ! Se présenter',
  subtitle: 'Saluti e prime conversazioni',
  objectives: ['Salutare', 'Dire il proprio nome', 'Chiedere come sta una persona'],
  vocab: [
    { term: 'bonjour', translation: 'buongiorno, ciao' },
    { term: 'bonsoir', translation: 'buonasera' },
    { term: 'salut', translation: 'ciao (informale)' },
    { term: "je m'appelle…", translation: 'mi chiamo…' },
    { term: 'comment ça va ?', translation: 'come stai?' },
    { term: 'bien, merci', translation: 'bene, grazie' },
    { term: 'au revoir', translation: 'arrivederci' },
    { term: 'enchanté', translation: 'piacere' },
  ],
  exercises: [
    mc('«Buongiorno» in francese è…', ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'], 0),
    mc('«Je m\'appelle Marie» significa…', ['Mi chiamo Marie', 'Sto bene, Marie', 'Vengo da Marie', 'Piaccio a Marie'], 0),
    tr('Ciao, come stai?', ['Salut, comment ça va ?', 'Salut, comment ça va', 'Salut, comment vas-tu ?']),
    fb('Enchanté de te ___.', ['rencontrer'], 'Piacere di conoscerti.'),
    wo('Buonasera, mi chiamo Paul.', ['Bonsoir,', "je", "m'appelle", 'Paul.']),
    li(
      'Bonjour ! Je m\'appelle Claire. Comment ça va ?',
      'Cosa fa Claire?',
      ['Si presenta e chiede come stai', 'Chiede l\'ora', 'Dice arrivederci', 'Ordina un caffè'],
      0,
    ),
  ],
  faq: [
    {
      question: '«Bonjour» o «salut»?',
      answer: '«Bonjour» va bene in quasi ogni contesto. «Salut» è informale, tra amici o coetanei.',
    },
    {
      question: '«Bonne nuit» si usa come saluto?',
      answer: 'No, si usa solo per augurare la buonanotte quando si va a dormire.',
    },
    {
      question: 'Come si dice «piacere»?',
      answer: '«Enchanté» se sei un uomo, «enchantée» se sei una donna (si aggiunge la -e).',
    },
  ],
})

const frU1L2 = defineLesson({
  id: 'fr-u1-l2',
  title: 'Articles et nationalités',
  subtitle: 'Un, une, le, la…',
  objectives: ['Usare gli articoli indeterminativi', 'Riconoscere il genere dei nomi', 'Parlare di nazionalità'],
  vocab: [
    { term: 'un / une', translation: 'un / una' },
    { term: 'le / la / les', translation: 'il / la / i, le' },
    { term: 'français / française', translation: 'francese' },
    { term: 'anglais / anglaise', translation: 'inglese' },
    { term: 'italien / italienne', translation: 'italiano / italiana' },
    { term: 'professeur', translation: 'insegnante' },
    { term: 'étudiant / étudiante', translation: 'studente / studentessa' },
  ],
  exercises: [
    mc('___ livre (maschile)', ['un', 'une', 'des', 'la'], 0),
    fb("C'est ___ étudiante. (una)", ['une'], 'È una studentessa.'),
    tr('Lui è inglese.', ['Il est anglais.']),
    wo('Gli studenti sono italiani.', ['Les', 'étudiants', 'sont', 'italiens.']),
    li(
      'Marie est française et elle est professeure.',
      'Di che nazionalità è Marie?',
      ['Francese', 'Italiana', 'Inglese', 'Spagnola'],
      0,
    ),
    mc('Scegli l\'articolo corretto: ___ écoles (plurale femminile)', ['les', 'le', 'la', 'des'], 0),
  ],
  faq: [
    {
      question: 'Come riconosco il genere di un nome?',
      answer: 'Spesso i nomi che finiscono in -e sono femminili e quelli in consonante maschili, ma ci sono molte eccezioni: impara il nome con il suo articolo.',
    },
    {
      question: '«Des» o «les»?',
      answer: '«Des» è indeterminativo plurale (dei, delle). «Les» è determinativo (i, gli, le).',
    },
  ],
})

const frU1G1 = defineTopic({
  id: 'fr-u1-g1',
  title: 'Le verbe être',
  subtitle: 'Essere: la base del francese',
  intro:
    'Il verbo «être» (essere) è irregolare e indispensabile: serve per presentarsi, descrivere, indicare nazionalità e professioni.',
  sections: [
    {
      heading: 'Forme',
      table: {
        headers: ['Persona', 'Être'],
        rows: [
          ['je', 'suis'],
          ['tu', 'es'],
          ['il / elle / on', 'est'],
          ['nous', 'sommes'],
          ['vous', 'êtes'],
          ['ils / elles', 'sont'],
        ],
      },
      examples: [
        { target: 'Je suis italien.', italian: 'Sono italiano.' },
        { target: 'Elle est professeure.', italian: 'Lei è insegnante.' },
        { target: 'Nous sommes de Rome.', italian: 'Siamo di Roma.' },
      ],
    },
    {
      heading: 'Negazione',
      paragraphs: [
        'La negazione è «ne ... pas» attorno al verbo. Davanti a vocale «ne» diventa «n\'».',
      ],
      examples: [
        { target: "Je ne suis pas français.", italian: 'Non sono francese.' },
        { target: "Il n'est pas mon frère.", italian: 'Lui non è mio fratello.' },
      ],
    },
    {
      heading: 'Domande',
      paragraphs: [
        'Si può usare l\'intonazione, «est-ce que» oppure l\'inversione. Nel parlato l\'intonazione è la forma più comune.',
      ],
      examples: [
        { target: 'Tu es prêt ?', italian: 'Sei pronto? (intonazione)' },
        { target: 'Est-ce que vous êtes prêts ?', italian: 'Siete pronti?' },
        { target: 'Es-tu prêt ?', italian: 'Sei pronto? (inversione, più formale)' },
      ],
    },
  ],
  exercises: [
    mc('Je ___ italien.', ['suis', 'es', 'est', 'sommes'], 0),
    fb('Nous ___ français.', ['sommes'], 'Siamo francesi.'),
    tr('Lei è una studentessa.', ['Elle est étudiante.', 'Elle est une étudiante.']),
    mc('___ êtes prêts ?', ['Vous', 'Tu', 'Ils', 'Nous'], 0),
    wo('Lui non è mio fratello.', ["Il", "n'est", 'pas', 'mon', 'frère.']),
  ],
  faq: [
    {
      question: 'Perché «je suis» e non «je es»?',
      answer: '«Être» è irregolare: le forme vanno imparate a memoria, non seguono uno schema unico.',
    },
    {
      question: '«C\'est» o «il est»?',
      answer: '«C\'est» introduce un\'identificazione («C\'est Marie»). «Il est» descrive una persona («Il est médecin»).',
    },
  ],
})

const frU1G2 = defineTopic({
  id: 'fr-u1-g2',
  title: 'Articoli e genere',
  subtitle: 'Un, une, des, le, la, les',
  intro:
    'In francese ogni nome ha un genere. L\'articolo cambia in base al genere e al numero, e spesso si fonde con la parola che segue.',
  sections: [
    {
      heading: 'Articoli indeterminativi',
      table: {
        headers: ['Genere / numero', 'Articolo', 'Esempio'],
        rows: [
          ['maschile singolare', 'un', 'un livre'],
          ['femminile singolare', 'une', 'une table'],
          ['plurale', 'des', 'des livres'],
        ],
      },
    },
    {
      heading: 'Articoli determinativi',
      table: {
        headers: ['Genere / numero', 'Articolo', 'Esempio'],
        rows: [
          ['maschile singolare', 'le', 'le livre'],
          ['femminile singolare', 'la', 'la table'],
          ['davanti a vocale o h muta', "l'", "l'école, l'homme"],
          ['plurale', 'les', 'les livres'],
        ],
      },
    },
    {
      heading: 'Plurale',
      paragraphs: ['Nella maggior parte dei casi si aggiunge -s al nome e all\'aggettivo. La -s finale non si pronuncia.'],
      examples: [
        { target: 'un étudiant → des étudiants', italian: 'uno studente → degli studenti' },
        { target: 'une maison → des maisons', italian: 'una casa → delle case' },
        { target: 'un journal → des journaux', italian: 'un giornale → dei giornali (irregolare)' },
      ],
    },
    {
      heading: 'Genere: qualche indizio',
      bullets: [
        'Spesso -tion, -té, -ette, -ance sono femminili: la nation, la liberté, la maison.',
        'Spesso -ment, -age, -eau sono maschili: le moment, le voyage, le bureau.',
        'Le eccezioni sono molte: impara ogni nome insieme al suo articolo.',
      ],
    },
  ],
  exercises: [
    mc('___ amie (un\'amica)', ['une', 'un', 'le', 'des'], 0),
    fb("J'aime ___ musique. (la)", ['la'], 'Mi piace la musica.'),
    tr('I libri sono nuovi.', ['Les livres sont nouveaux.']),
    mc('Plurale di «un journal»', ['des journaux', 'des journals', 'les journal', 'un journaux'], 0),
    wo('È una bella casa.', ["C'est", 'une', 'belle', 'maison.']),
  ],
  faq: [
    {
      question: 'La -s del plurale si pronuncia?',
      answer: 'Di solito no. Si sente però il plurale dell\'articolo: «le livre» /lə livʁ/ e «les livres» /le livʁ/.',
    },
    {
      question: '«L\'école» è maschile o femminile?',
      answer: 'È femminile: «une école». Davanti a vocale l\'articolo perde la vocale e diventa «l\'», quindi il genere non si vede.',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 2 — Vita quotidiana                                           */
/* ------------------------------------------------------------------ */

const frU2L1 = defineLesson({
  id: 'fr-u2-l1',
  title: 'Verbes en -er',
  subtitle: 'Parlare, abitare, lavorare',
  objectives: ['Coniugare i verbi regolari in -er', 'Descrivere la routine', 'Parlare del tempo libero'],
  vocab: [
    { term: 'parler', translation: 'parlare' },
    { term: 'habiter', translation: 'abitare' },
    { term: 'travailler', translation: 'lavorare' },
    { term: 'étudier', translation: 'studiare' },
    { term: 'aimer', translation: 'amare, piacere' },
    { term: 'regarder', translation: 'guardare' },
    { term: 'écouter', translation: 'ascoltare' },
    { term: 'manger', translation: 'mangiare' },
  ],
  exercises: [
    mc('Je ___ français. (parler)', ['parle', 'parles', 'parlons', 'parlent'], 0),
    fb('Nous ___ à Paris. (habiter)', ['habitons'], 'Abitiamo a Parigi.'),
    tr('Lavoro in un ufficio.', ['Je travaille dans un bureau.']),
    wo('Lei studia il francese a scuola.', ['Elle', 'étudie', 'le', 'français', 'à', "l'école."]),
    li(
      "J'aime écouter de la musique et regarder des films.",
      'Cosa gli piace fare?',
      ['Ascoltare musica e guardare film', 'Leggere e scrivere', 'Cucinare', 'Viaggiare'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Ils mangent au restaurant.', 'Ils mange au restaurant.', 'Ils mangons au restaurant.', 'Ils mangez au restaurant.'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Tutti i verbi in -er sono regolari?',
      answer: 'Quasi tutti. Le eccezioni più comuni sono «aller» (vado), «être» e «avoir», che sono irregolari.',
    },
    {
      question: 'Come si pronuncia la desinenza -ent?',
      answer: 'Non si pronuncia: «ils parlent» suona come «il parle».',
    },
  ],
})

const frU2L2 = defineLesson({
  id: 'fr-u2-l2',
  title: 'Avoir et la famille',
  subtitle: 'Avere, età e possessivi',
  objectives: ['Usare «avoir»', 'Parlare della famiglia', 'Esprimere l\'età'],
  vocab: [
    { term: 'avoir', translation: 'avere' },
    { term: 'mère', translation: 'madre' },
    { term: 'père', translation: 'padre' },
    { term: 'frère', translation: 'fratello' },
    { term: 'sœur', translation: 'sorella' },
    { term: 'parents', translation: 'genitori' },
    { term: 'enfant', translation: 'bambino, figlio' },
    { term: 'grand-père', translation: 'nonno' },
  ],
  exercises: [
    mc('J\'___ un frère.', ['ai', 'as', 'a', 'avons'], 0),
    fb('Elle ___ (avoir) vingt ans.', ['a'], 'Lei ha vent\'anni.'),
    tr('Ho due sorelle.', ["J'ai deux sœurs.", "J'ai deux soeurs."]),
    wo('Mio padre ha una macchina rossa.', ['Mon', 'père', 'a', 'une', 'voiture', 'rouge.']),
    li(
      "J'ai un frère et une sœur. Ma sœur a dix ans.",
      'Quanti anni ha la sorella?',
      ['Dieci', 'Venti', 'Cinque', 'Quindici'],
      0,
    ),
    mc('___ parents habitent à Nice. (i miei)', ['Mes', 'Mon', 'Ma', 'Moi'], 0),
  ],
  faq: [
    {
      question: '«J\'ai 20 ans» o «Je suis 20 ans»?',
      answer: 'In francese l\'età si esprime con «avoir»: «J\'ai vingt ans». «Je suis vingt ans» è sbagliato.',
    },
    {
      question: 'Come si dice «mio padre» e «mia madre»?',
      answer: '«Mon père» e «ma mère». Attenzione: davanti a vocale si usa «mon» anche al femminile: «mon amie».',
    },
  ],
})

const frU2G1 = defineTopic({
  id: 'fr-u2-g1',
  title: 'Présent des verbes en -er',
  subtitle: 'La coniugazione più comune',
  intro:
    'Circa il 90% dei verbi francesi finisce in -er ed è regolare. Il presente si forma togliendo -er e aggiungendo le desinenze della persona.',
  sections: [
    {
      heading: 'Desinenze',
      table: {
        headers: ['Persona', 'parler'],
        rows: [
          ['je', 'parle'],
          ['tu', 'parles'],
          ['il / elle / on', 'parle'],
          ['nous', 'parlons'],
          ['vous', 'parlez'],
          ['ils / elles', 'parlent'],
        ],
      },
      paragraphs: [
        'Je, tu, il e ils hanno desinenze che spesso non si pronunciano: «parle», «parles», «parlent» suonano uguali. Si distinguono dal contesto e dal pronome.',
      ],
    },
    {
      heading: 'Esempi',
      examples: [
        { target: "J'habite à Lyon.", italian: 'Abito a Lione.' },
        { target: 'Tu travailles beaucoup.', italian: 'Lavori molto.' },
        { target: 'Nous étudions le français.', italian: 'Studiamo il francese.' },
        { target: 'Ils regardent un film.', italian: 'Guardano un film.' },
      ],
    },
    {
      heading: 'Negazione e domande',
      examples: [
        { target: 'Je ne parle pas anglais.', italian: 'Non parlo inglese.' },
        { target: 'Est-ce que tu aimes la musique ?', italian: 'Ti piace la musica?' },
      ],
    },
  ],
  exercises: [
    mc('Tu ___ bien. (chanter)', ['chantes', 'chante', 'chantez', 'chantons'], 0),
    fb('Ils ___ (travailler) ici.', ['travaillent'], 'Lavorano qui.'),
    tr('Abita a Lione.', ['Il habite à Lyon.', 'Elle habite à Lyon.']),
    mc('Scegli la forma corretta: vous ___ (aimer)', ['aimez', 'aime', 'aimes', 'aiment'], 0),
    wo('Parliamo francese insieme.', ['Nous', 'parlons', 'français', 'ensemble.']),
  ],
  faq: [
    {
      question: 'Perché «nous parlons» ma «ils parlent»?',
      answer: 'Le desinenze sono diverse: -ons per nous, -ent per ils/elles. La -ent non si pronuncia.',
    },
    {
      question: 'Come si fa la domanda con «est-ce que»?',
      answer: 'Si mette «est-ce que» all\'inizio: «Est-ce que tu parles français ?». Nel parlato basta l\'intonazione: «Tu parles français ?».',
    },
  ],
})

const frU2G2 = defineTopic({
  id: 'fr-u2-g2',
  title: 'Le verbe avoir',
  subtitle: 'Avere: possesso, età ed espressioni',
  intro:
    '«Avoir» (avere) è irregolare e si usa per il possesso, per l\'età e in molte espressioni idiomatiche come «avere fame» o «avere sete».',
  sections: [
    {
      heading: 'Forme',
      table: {
        headers: ['Persona', 'Avoir'],
        rows: [
          ['j\'', 'ai'],
          ['tu', 'as'],
          ['il / elle / on', 'a'],
          ['nous', 'avons'],
          ['vous', 'avez'],
          ['ils / elles', 'ont'],
        ],
      },
      examples: [
        { target: "J'ai une sœur.", italian: 'Ho una sorella.' },
        { target: 'Nous avons une maison.', italian: 'Abbiamo una casa.' },
      ],
    },
    {
      heading: 'Età ed espressioni',
      table: {
        headers: ['Francese', 'Italiano'],
        rows: [
          ["J'ai vingt ans.", 'Ho vent\'anni.'],
          ["J'ai faim.", 'Ho fame.'],
          ["J'ai soif.", 'Ho sete.'],
          ["J'ai froid.", 'Ho freddo.'],
          ["J'ai chaud.", 'Ho caldo.'],
        ],
      },
    },
    {
      heading: 'Negazione',
      paragraphs: ['«Ne ... pas» attorno al verbo. Con i nomi indeterminati, dopo la negazione «un/une/des» diventa «de».'],
      examples: [
        { target: "Je n'ai pas de voiture.", italian: 'Non ho una macchina.' },
        { target: "Elle n'a pas faim.", italian: 'Lei non ha fame.' },
      ],
    },
  ],
  exercises: [
    mc('Nous ___ une grande maison.', ['avons', 'avez', 'ont', 'as'], 0),
    fb('Ils ___ faim.', ['ont'], 'Hanno fame.'),
    tr('Hai sete?', ['Tu as soif ?', 'Tu as soif?']),
    mc(
      'Scegli la frase corretta.',
      ["Elle n'a pas de voiture.", "Elle n'as pas de voiture.", "Elle n'a pas une voiture.", "Elle ne a pas voiture."],
      0,
    ),
    wo('Oggi ho vent\'anni.', ["J'ai", 'vingt', 'ans', "aujourd'hui."]),
  ],
  faq: [
    {
      question: 'Perché «j\'ai» e non «je ai»?',
      answer: 'Davanti a vocale «je» perde la -e e si usa l\'apostrofo: j\'ai, j\'habite, j\'aime.',
    },
    {
      question: 'Perché «je n\'ai pas de voiture» e non «une voiture»?',
      answer: 'Dopo una negazione, l\'articolo indeterminativo singolare diventa «de» (o «d\'» davanti a vocale).',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Corso                                                               */
/* ------------------------------------------------------------------ */

export const french: Course = {
  id: 'fr',
  name: 'Francese',
  nativeName: 'Français',
  description:
    'Un avvio A1: presentarsi, articoli, verbi in -er e avere. Con spiegazioni chiare su genere, plurali e negazione.',
  level: 'A1',
  ttsLang: 'fr-FR',
  units: [
    defineUnit({
      id: 'fr-u1',
      title: 'Primi passi',
      subtitle: 'Saluti, articoli e verbo être',
      intro:
        'Prime frasi in francese: saluti, articoli, genere dei nomi e verbo être. Qui metti le basi della struttura della frase.',
      keyPoints: ['Saluti e presentazioni', 'Articoli e genere', 'Verbo être'],
      lessons: [frU1L1, frU1L2],
      grammar: [frU1G1, frU1G2],
    }),
    defineUnit({
      id: 'fr-u2',
      title: 'Vita quotidiana',
      subtitle: 'Verbi in -er, avere e famiglia',
      intro:
        'La vita quotidiana con i verbi in -er, il verbo avoir e il vocabolario della famiglia.',
      keyPoints: ['Presente dei verbi in -er', 'Verbo avoir', 'Famiglia e possessivi'],
      lessons: [frU2L1, frU2L2],
      grammar: [frU2G1, frU2G2],
    }),
  ],
}
