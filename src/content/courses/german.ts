import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../helpers'
import type { Course } from '../types'

/* ------------------------------------------------------------------ */
/* Unità 1 — Primi passi                                               */
/* ------------------------------------------------------------------ */

const deU1L1 = defineLesson({
  id: 'de-u1-l1',
  title: 'Hallo! Sich vorstellen',
  subtitle: 'Saluti e presentazioni',
  objectives: ['Salutare in base al momento', 'Dire il proprio nome', 'Chiedere come sta una persona'],
  vocab: [
    { term: 'hallo', translation: 'ciao' },
    { term: 'guten Morgen', translation: 'buongiorno (mattina)' },
    { term: 'guten Tag', translation: 'buongiorno (giorno)' },
    { term: 'guten Abend', translation: 'buonasera' },
    { term: 'tschüss', translation: 'ciao (informale, per andare via)' },
    { term: 'ich heiße…', translation: 'mi chiamo…' },
    { term: "wie geht's?", translation: 'come stai?' },
    { term: 'danke', translation: 'grazie' },
  ],
  exercises: [
    mc('«Buongiorno» al mattino è…', ['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Tschüss'], 0),
    mc('«Ich heiße Anna» significa…', ['Mi chiamo Anna', 'Sono Anna?', 'Sto bene, Anna', 'Vengo da Anna'], 0),
    tr('Ciao, come stai?', ["Hallo, wie geht's?", 'Hallo, wie geht es dir?', 'Hallo, wie geht es Ihnen?']),
    fb('___ Tag, Herr Müller.', ['Guten'], 'Buongiorno, signor Müller.'),
    wo('Buonasera, mi chiamo Peter.', ['Guten', 'Abend,', 'ich', 'heiße', 'Peter.']),
    li(
      "Guten Morgen! Ich heiße Lena. Wie geht's?",
      'Cosa fa Lena?',
      ['Si presenta e chiede come stai', 'Chiede l\'ora', 'Dice arrivederci', 'Ordina da bere'],
      0,
    ),
    mc('Come si dice «arrivederci» in modo informale?', ['Tschüss', 'Danke', 'Bitte', 'Hallo'], 0),
  ],
  faq: [
    {
      question: '«Guten Tag» e «Guten Morgen»: quale usare?',
      answer: '«Guten Morgen» al mattino, «Guten Tag» durante il giorno, «Guten Abend» dalla sera. «Gute Nacht» solo prima di dormire.',
    },
    {
      question: '«Wie geht\'s?» è formale?',
      answer: 'No, è informale. In un contesto formale si usa «Wie geht es Ihnen?».',
    },
    {
      question: 'Si dà del tu o del lei?',
      answer: 'Con amici e coetanei si usa «du»; con sconosciuti e in contesti formali «Sie» (con il verbo al plurale).',
    },
  ],
})

const deU1L2 = defineLesson({
  id: 'de-u1-l2',
  title: 'Nationalitäten und Artikel',
  subtitle: 'Der, die, das…',
  objectives: ['Usare gli articoli determinativi', 'Parlare di nazionalità', 'Presentare una persona'],
  vocab: [
    { term: 'der Mann', translation: 'l\'uomo' },
    { term: 'die Frau', translation: 'la donna' },
    { term: 'das Kind', translation: 'il bambino' },
    { term: 'der Lehrer / die Lehrerin', translation: 'l\'insegnante (m/f)' },
    { term: 'der Student / die Studentin', translation: 'lo studente / la studentessa' },
    { term: 'aus', translation: 'da, di (origine)' },
    { term: 'Deutscher / Deutsche', translation: 'tedesco / tedesca' },
    { term: 'Italiener / Italienerin', translation: 'italiano / italiana' },
  ],
  exercises: [
    mc('___ Mann (l\'uomo)', ['der', 'die', 'das', 'den'], 0),
    fb('___ Frau ist Lehrerin. (la)', ['Die'], 'La donna è insegnante.'),
    tr('Sono tedesco.', ['Ich bin Deutscher.', 'Ich bin deutsch.']),
    wo('Questa è la mia amica.', ['Das', 'ist', 'meine', 'Freundin.']),
    li(
      'Das ist Herr Schmidt. Er ist Lehrer aus Berlin.',
      'Che lavoro fa?',
      ['L\'insegnante', 'Il medico', 'Lo studente', 'Il cuoco'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Sie ist Studentin.', 'Sie ist ein Studentin.', 'Sie bist Studentin.', 'Sie sind Studentin.'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Come faccio a sapere se un nome è der, die o das?',
      answer: 'Non c\'è una regola affidabile al 100%. Impara ogni nome con il suo articolo. Alcuni indizi: -ung, -heit, -keit sono spesso femminili; -chen, -lein neutri.',
    },
    {
      question: 'Perché «Ich bin Deutscher» e non «Ich bin ein Deutscher»?',
      answer: 'Con nazionalità e professioni si usa di norma il nome senza articolo: «Ich bin Lehrer», «Ich bin Italiener».',
    },
  ],
})

const deU1G1 = defineTopic({
  id: 'de-u1-g1',
  title: 'Das Verb sein',
  subtitle: 'Essere: la base del tedesco',
  intro:
    '«Sein» (essere) è irregolare e fondamentale: serve per presentarsi, dire la nazionalità, descrivere e indicare un luogo.',
  sections: [
    {
      heading: 'Forme',
      table: {
        headers: ['Persona', 'Sein'],
        rows: [
          ['ich', 'bin'],
          ['du', 'bist'],
          ['er / sie / es', 'ist'],
          ['wir', 'sind'],
          ['ihr', 'seid'],
          ['sie / Sie', 'sind'],
        ],
      },
      examples: [
        { target: 'Ich bin Italiener.', italian: 'Sono italiano.' },
        { target: 'Sie ist Lehrerin.', italian: 'Lei è insegnante.' },
        { target: 'Wir sind aus Rom.', italian: 'Siamo di Roma.' },
      ],
    },
    {
      heading: 'Negazione',
      paragraphs: ['Si aggiunge «nicht» dopo il verbo.'],
      examples: [
        { target: 'Ich bin nicht müde.', italian: 'Non sono stanco.' },
        { target: 'Er ist nicht mein Bruder.', italian: 'Lui non è mio fratello.' },
      ],
    },
    {
      heading: 'Domande',
      paragraphs: ['Si mette il verbo all\'inizio della frase (inversione).'],
      examples: [
        { target: 'Bist du müde?', italian: 'Sei stanco?' },
        { target: 'Sind Sie aus Deutschland?', italian: 'Lei è della Germania?' },
      ],
    },
  ],
  exercises: [
    mc('Ich ___ Italiener.', ['bin', 'bist', 'ist', 'sind'], 0),
    fb('Wir ___ aus Rom.', ['sind'], 'Siamo di Roma.'),
    tr('Lei è una studentessa.', ['Sie ist Studentin.', 'Sie ist eine Studentin.']),
    mc('___ du müde?', ['Bist', 'Bin', 'Ist', 'Seid'], 0),
    wo('Lui non è mio fratello.', ['Er', 'ist', 'nicht', 'mein', 'Bruder.']),
  ],
  faq: [
    {
      question: 'Perché «sie sind» può significare sia «loro sono» sia «lei è»?',
      answer: '«Sie» minuscolo al plurale significa «loro»; «Sie» maiuscolo è la forma di cortesia e vuole il verbo al plurale.',
    },
    {
      question: 'Dove va «nicht»?',
      answer: 'Di solito dopo il verbo e prima dell\'aggettivo o del nome: «Ich bin nicht müde», «Er ist nicht mein Bruder».',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 2 — Vita quotidiana                                           */
/* ------------------------------------------------------------------ */

const deU2L1 = defineLesson({
  id: 'de-u2-l1',
  title: 'Verben im Präsens',
  subtitle: 'La routine e i verbi regolari',
  objectives: ['Coniugare i verbi regolari', 'Descrivere la giornata', 'Parlare di dove si vive'],
  vocab: [
    { term: 'kommen', translation: 'venire' },
    { term: 'wohnen', translation: 'abitare' },
    { term: 'arbeiten', translation: 'lavorare' },
    { term: 'lernen', translation: 'imparare' },
    { term: 'sprechen', translation: 'parlare' },
    { term: 'gehen', translation: 'andare' },
    { term: 'jeden Tag', translation: 'ogni giorno' },
  ],
  exercises: [
    mc('Ich ___ aus Italien. (kommen)', ['komme', 'kommst', 'kommt', 'kommen'], 0),
    fb('Er ___ in Berlin. (wohnen)', ['wohnt'], 'Lui abita a Berlino.'),
    tr('Imparo il tedesco ogni giorno.', ['Ich lerne jeden Tag Deutsch.']),
    wo('Parliamo tedesco e italiano.', ['Wir', 'sprechen', 'Deutsch', 'und', 'Italienisch.']),
    li(
      'Ich wohne in München und arbeite jeden Tag.',
      'Dove abita?',
      ['A Monaco', 'A Berlino', 'A Roma', 'A Vienna'],
      0,
    ),
    mc('Scegli la frase corretta.', ['Du lernst Deutsch.', 'Du lernen Deutsch.', 'Du lernt Deutsch.', 'Du lerne Deutsch.'], 0),
  ],
  faq: [
    {
      question: 'Perché «du lernst» ma «er lernt»?',
      answer: 'Le desinenze cambiano con la persona: du → -st, er/sie/es → -t. Solo la terza persona singolare prende -t.',
    },
    {
      question: 'Il verbo va sempre al secondo posto?',
      answer: 'Nella frase principale affermativa sì. Se l\'frase inizia con un avverbio, il soggetto va dopo il verbo: «Am Montag arbeite ich».',
    },
  ],
})

const deU2L2 = defineLesson({
  id: 'de-u2-l2',
  title: 'Haben und die Familie',
  subtitle: 'Avere, famiglia e possessivi',
  objectives: ['Usare «haben»', 'Parlare della famiglia', 'Usare i possessivi'],
  vocab: [
    { term: 'haben', translation: 'avere' },
    { term: 'die Mutter', translation: 'la madre' },
    { term: 'der Vater', translation: 'il padre' },
    { term: 'der Bruder', translation: 'il fratello' },
    { term: 'die Schwester', translation: 'la sorella' },
    { term: 'die Eltern', translation: 'i genitori' },
    { term: 'das Kind', translation: 'il bambino, il figlio' },
    { term: 'der Großvater', translation: 'il nonno' },
  ],
  exercises: [
    mc('Ich ___ einen Bruder.', ['habe', 'hast', 'hat', 'haben'], 0),
    fb('Sie ___ (haben) zwei Kinder.', ['hat'], 'Lei ha due figli.'),
    tr('Ho due sorelle.', ['Ich habe zwei Schwestern.']),
    wo('Mia madre ha una piccola casa.', ['Meine', 'Mutter', 'hat', 'ein', 'kleines', 'Haus.']),
    li(
      'Ich habe einen Bruder und eine Schwester. Mein Bruder ist zehn.',
      'Quanti anni ha il fratello?',
      ['Dieci', 'Venti', 'Cinque', 'Quindici'],
      0,
    ),
    mc('___ Eltern wohnen in Hamburg. (i miei)', ['Meine', 'Mein', 'Meiner', 'Meinen'], 0),
  ],
  faq: [
    {
      question: 'Perché «einen Bruder» e non «ein Bruder»?',
      answer: '«Bruder» è maschile e qui è complemento oggetto: al caso accusativo «ein» diventa «einen».',
    },
    {
      question: 'I possessivi cambiano forma?',
      answer: 'Sì. Prendono la desinenza dell\'articolo: mein Vater, meine Mutter, mein Kind; al plurale meine Eltern.',
    },
  ],
})

const deU2G1 = defineTopic({
  id: 'de-u2-g1',
  title: 'Präsens',
  subtitle: 'Il presente dei verbi regolari',
  intro:
    'Il presente tedesco si forma aggiungendo le desinenze alla radice del verbo. Nella frase principale il verbo coniugato occupa sempre il secondo posto.',
  sections: [
    {
      heading: 'Desinenze',
      table: {
        headers: ['Persona', 'lernen', 'wohnen', 'arbeiten'],
        rows: [
          ['ich', 'lerne', 'wohne', 'arbeite'],
          ['du', 'lernst', 'wohnst', 'arbeitest'],
          ['er / sie / es', 'lernt', 'wohnt', 'arbeitet'],
          ['wir', 'lernen', 'wohnen', 'arbeiten'],
          ['ihr', 'lernt', 'wohnt', 'arbeitet'],
          ['sie / Sie', 'lernen', 'wohnen', 'arbeiten'],
        ],
      },
      paragraphs: [
        'Se la radice finisce in -t o -d, si aggiunge una -e tra radice e desinenza: arbeiten → du arbeitest, er arbeitet.',
      ],
    },
    {
      heading: 'Cambi di vocale',
      paragraphs: [
        'Alcuni verbi cambiano la vocale alla seconda e terza persona singolare. È un fenomeno irregolare ma frequente.',
      ],
      table: {
        headers: ['Infinito', 'du', 'er / sie'],
        rows: [
          ['sprechen', 'sprichst', 'spricht'],
          ['fahren', 'fährst', 'fährt'],
          ['lesen', 'liest', 'liest'],
          ['essen', 'isst', 'isst'],
        ],
      },
    },
    {
      heading: 'Ordine delle parole',
      paragraphs: [
        'Nella frase principale il verbo coniugato sta al secondo posto. Se la frase inizia con un avverbio o un complemento, il soggetto si sposta dopo il verbo.',
      ],
      examples: [
        { target: 'Ich arbeite am Montag.', italian: 'Lavoro lunedì.' },
        { target: 'Am Montag arbeite ich.', italian: 'Lunedì lavoro.' },
        { target: 'Heute lerne ich Deutsch.', italian: 'Oggi imparo il tedesco.' },
      ],
    },
  ],
  exercises: [
    mc('Du ___ gut Deutsch. (sprechen)', ['sprichst', 'sprechst', 'spricht', 'sprechen'], 0),
    fb('Ihr ___ in Rom. (wohnen)', ['wohnt'], 'Abitate a Roma.'),
    tr('Vado a scuola.', ['Ich gehe zur Schule.']),
    mc(
      'Scegli la frase corretta.',
      ['Er arbeitet jeden Tag.', 'Er arbeiten jeden Tag.', 'Er arbeite jeden Tag.', 'Er arbeitest jeden Tag.'],
      0,
    ),
    wo('Lunedì non lavoro.', ['Am', 'Montag', 'arbeite', 'ich', 'nicht.']),
  ],
  faq: [
    {
      question: 'Perché il verbo sta al secondo posto?',
      answer: 'È una regola fissa del tedesco. Il secondo “posto” è occupato dal verbo coniugato, anche se la frase inizia con un avverbio.',
    },
    {
      question: 'Tutti i verbi cambiano vocale?',
      answer: 'No. Solo alcuni verbi forti, come sprechen, fahren, lesen, essen. I verbi regolari mantengono la radice.',
    },
  ],
})

const deU2G2 = defineTopic({
  id: 'de-u2-g2',
  title: 'Das Verb haben',
  subtitle: 'Avere: possesso ed espressioni',
  intro:
    '«Haben» (avere) è irregolare e si usa per il possesso, per l\'età e in espressioni come «Hunger haben» (avere fame).',
  sections: [
    {
      heading: 'Forme',
      table: {
        headers: ['Persona', 'Haben'],
        rows: [
          ['ich', 'habe'],
          ['du', 'hast'],
          ['er / sie / es', 'hat'],
          ['wir', 'haben'],
          ['ihr', 'habt'],
          ['sie / Sie', 'haben'],
        ],
      },
      examples: [
        { target: 'Ich habe einen Bruder.', italian: 'Ho un fratello.' },
        { target: 'Wir haben ein Haus.', italian: 'Abbiamo una casa.' },
      ],
    },
    {
      heading: 'Espressioni con haben',
      table: {
        headers: ['Tedesco', 'Italiano'],
        rows: [
          ['Hunger haben', 'avere fame'],
          ['Durst haben', 'avere sete'],
          ['Zeit haben', 'avere tempo'],
          ['Angst haben', 'avere paura'],
        ],
      },
    },
    {
      heading: 'Negazione e domande',
      paragraphs: [
        '«Nicht» nega un verbo o un aggettivo; «kein/keine» nega un nome indeterminato. Per le domande si inverte il verbo.',
      ],
      examples: [
        { target: 'Ich habe keine Zeit.', italian: 'Non ho tempo.' },
        { target: 'Hast du Hunger?', italian: 'Hai fame?' },
      ],
    },
  ],
  exercises: [
    mc('Wir ___ ein Haus.', ['haben', 'habt', 'hat', 'habe'], 0),
    fb('Er ___ keine Zeit.', ['hat'], 'Lui non ha tempo.'),
    tr('Hai fame?', ['Hast du Hunger?']),
    mc(
      'Scegli la frase corretta.',
      ['Ich habe keine Zeit.', 'Ich habe nicht Zeit.', 'Ich habe kein Zeit.', 'Ich habe nicht keine Zeit.'],
      0,
    ),
    wo('Lei ha un cane.', ['Sie', 'hat', 'einen', 'Hund.']),
  ],
  faq: [
    {
      question: '«Nicht» o «kein»?',
      answer: '«Kein» nega un nome con articolo indeterminativo (Ich habe kein Geld). «Nicht» nega verbi, aggettivi e nomi determinati (Ich habe das Geld nicht).',
    },
    {
      question: 'Perché «einen Hund»?',
      answer: '«Hund» è maschile e oggetto diretto: all\'accusativo l\'articolo indeterminativo diventa «einen».',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Corso                                                               */
/* ------------------------------------------------------------------ */

export const german: Course = {
  id: 'de',
  name: 'Tedesco',
  nativeName: 'Deutsch',
  description:
    'Un avvio A1: saluti, articoli, verbo sein, presente e avere. Un primo assaggio della struttura della frase tedesca.',
  level: 'A1',
  ttsLang: 'de-DE',
  units: [
    defineUnit({
      id: 'de-u1',
      title: 'Primi passi',
      subtitle: 'Saluti, articoli e verbo sein',
      intro:
        'Primi passi con saluti, articoli der/die/das, nazionalità e verbo sein. Attenzione al genere dei nomi.',
      keyPoints: ['Saluti e presentazioni', 'Articoli determinativi', 'Verbo sein'],
      lessons: [deU1L1, deU1L2],
      grammar: [deU1G1],
    }),
    defineUnit({
      id: 'de-u2',
      title: 'Vita quotidiana',
      subtitle: 'Presente, famiglia e verbo haben',
      intro:
        'Il presente dei verbi regolari, il verbo haben e il vocabolario di famiglia e routine.',
      keyPoints: ['Presente regolare', 'Verbo haben', 'Famiglia e possessivi'],
      lessons: [deU2L1, deU2L2],
      grammar: [deU2G1, deU2G2],
    }),
  ],
}
