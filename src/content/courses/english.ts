import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../helpers'
import type { Course } from '../types'

/* ------------------------------------------------------------------ */
/* Unità 1 — Le basi                                                   */
/* ------------------------------------------------------------------ */

const enU1L1 = defineLesson({
  id: 'en-u1-l1',
  title: 'Ciao! Presentarsi',
  subtitle: 'Saluti, nomi e prime conversazioni',
  objectives: [
    'Salutare in base al momento della giornata',
    'Dire il proprio nome',
    'Chiedere come sta una persona',
  ],
  vocab: [
    { term: 'hello', translation: 'ciao, salve', example: 'Hello, my name is Anna.', exampleTranslation: 'Ciao, mi chiamo Anna.' },
    { term: 'good morning', translation: 'buongiorno', example: 'Good morning, Mr Brown.', exampleTranslation: 'Buongiorno, signor Brown.' },
    { term: 'good evening', translation: 'buonasera' },
    { term: 'my name is…', translation: 'mi chiamo…' },
    { term: 'nice to meet you', translation: 'piacere di conoscerti' },
    { term: 'how are you?', translation: 'come stai?' },
    { term: "I'm fine, thank you", translation: 'sto bene, grazie' },
    { term: 'goodbye', translation: 'arrivederci' },
  ],
  exercises: [
    mc(
      'Come rispondi a «How are you?»',
      ["I'm fine, thank you.", 'My name is Anna.', 'Goodbye!', 'Nice to meet you.'],
      0,
      '«How are you?» chiede come stai, quindi si risponde con «I\'m fine, thank you».',
    ),
    mc(
      'Quale espressione usi la mattina?',
      ['Good morning', 'Good night', 'Good evening', 'Good afternoon'],
      0,
      '«Good night» si usa solo per augurare la buonanotte, non come saluto.',
    ),
    tr('Mi chiamo Marco.', ['My name is Marco.', 'I am Marco.', "I'm Marco."], 'Usa «My name is…» oppure «I am…».'),
    fb('Nice to ___ you.', ['meet'], 'Piacere di conoscerti.'),
    wo('Buonasera, come stai?', ['Good', 'evening,', 'how', 'are', 'you?']),
    li(
      'Hello! My name is Anna. Nice to meet you.',
      'Cosa fa Anna?',
      ['Si presenta e dice piacere di conoscerti.', 'Chiede dove abiti.', 'Dice arrivederci.', 'Chiede che ore sono.'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Qual è la differenza tra «hello» e «hi»?',
      answer: '«Hello» va bene in ogni situazione. «Hi» è più informale e si usa con amici, familiari o coetanei.',
    },
    {
      question: 'Quando si usa «good night»?',
      answer: 'Solo quando si va a dormire o ci si congeda la sera tardi. Non è un saluto di arrivo.',
    },
    {
      question: '«Nice to meet you» si dice sempre?',
      answer: 'Si usa quando conosci qualcuno per la prima volta. Se rivedi una persona puoi dire «Nice to see you again».',
    },
  ],
})

const enU1L2 = defineLesson({
  id: 'en-u1-l2',
  title: 'Persone e nazionalità',
  subtitle: 'Chi è? Da dove viene?',
  objectives: ['Usare il verbo «to be»', 'Parlare di nazionalità e professioni', 'Presentare un\'altra persona'],
  vocab: [
    { term: 'teacher', translation: 'insegnante' },
    { term: 'student', translation: 'studente, studentessa' },
    { term: 'doctor', translation: 'medico' },
    { term: 'friend', translation: 'amico, amica' },
    { term: 'from', translation: 'da, di (origine)' },
    { term: 'Italy', translation: 'Italia' },
    { term: 'England', translation: 'Inghilterra' },
    { term: 'the United States', translation: 'gli Stati Uniti' },
  ],
  exercises: [
    mc(
      '«Lei è un\'insegnante» si traduce…',
      ['She is a teacher.', 'She are a teacher.', 'She is teacher.', 'Her is a teacher.'],
      0,
      'Davanti a una professione singolare si usa l\'articolo «a».',
    ),
    fb('We ___ from Italy.', ['are'], 'Siamo italiani.'),
    tr('Lui è mio fratello.', ['He is my brother.', "He's my brother."]),
    wo('Sei uno studente?', ['Are', 'you', 'a', 'student?']),
    li(
      'My friend is a doctor from London.',
      'Che lavoro fa l\'amico?',
      ['Fa il medico', 'Fa l\'insegnante', 'È uno studente', 'Fa l\'ingegnere'],
      0,
    ),
    mc(
      'Scegli la coppia corretta per un amico maschio.',
      ['He / His', 'She / Her', 'He / Her', 'It / Its'],
      0,
      '«He» è il pronome soggetto, «his» il possessivo.',
    ),
  ],
  faq: [
    {
      question: 'Perché si dice «a teacher» ma «an engineer»?',
      answer: 'Si usa «a» davanti a un suono consonantico e «an» davanti a un suono vocalico: a teacher, an engineer, an actor.',
    },
    {
      question: '«He is Italian» o «He is an Italian»?',
      answer: 'Entrambe esistono, ma «He is Italian» è la forma più naturale quando si parla di nazionalità.',
    },
  ],
})

const enU1G1 = defineTopic({
  id: 'en-u1-g1',
  title: 'Il verbo to be',
  subtitle: 'Essere: la base di tutto',
  intro:
    'Il verbo «to be» (essere) è il più importante dell\'inglese. Serve per presentarsi, dire la nazionalità, la professione, descrivere qualcosa o indicare un luogo.',
  sections: [
    {
      heading: 'Forme affermative',
      table: {
        headers: ['Persona', 'Forma', 'Contrazione'],
        rows: [
          ['I', 'am', "I'm"],
          ['you', 'are', "you're"],
          ['he / she / it', 'is', "he's / she's / it's"],
          ['we', 'are', "we're"],
          ['you', 'are', "you're"],
          ['they', 'are', "they're"],
        ],
      },
      examples: [
        { target: "I'm Italian.", italian: 'Sono italiano.' },
        { target: 'She is a teacher.', italian: 'Lei è un\'insegnante.' },
        { target: 'We are from Rome.', italian: 'Siamo di Roma.' },
      ],
    },
    {
      heading: 'Forme negative',
      paragraphs: [
        'La negazione si forma aggiungendo «not» dopo il verbo. Nella lingua parlata si usa quasi sempre la contrazione.',
      ],
      table: {
        headers: ['Forma estesa', 'Contrazione'],
        rows: [
          ['I am not', "I'm not"],
          ['you are not', "you aren't"],
          ['he / she / it is not', "he / she / it isn't"],
          ['we / you / they are not', "we / you / they aren't"],
        ],
      },
      examples: [
        { target: "They aren't at home.", italian: 'Non sono a casa.' },
        { target: "He isn't my brother.", italian: 'Lui non è mio fratello.' },
      ],
    },
    {
      heading: 'Domande e risposte brevi',
      paragraphs: [
        'Per fare una domanda si mette il verbo all\'inizio della frase. La risposta breve ripete il soggetto e il verbo, senza contrazione nella forma affermativa.',
      ],
      examples: [
        { target: 'Are you ready? — Yes, I am. / No, I\'m not.', italian: 'Sei pronto? — Sì. / No.' },
        { target: 'Is she Italian? — Yes, she is.', italian: 'Lei è italiana? — Sì.' },
      ],
    },
    {
      heading: 'Quando si usa',
      bullets: [
        'Identità: I am Marco.',
        'Nazionalità e origine: She is Spanish. They are from London.',
        'Professioni: He is a doctor.',
        'Caratteristiche: The house is big.',
        'Età: I am twenty years old. (in inglese l\'età si esprime con «be», non con «have»).',
      ],
    },
  ],
  exercises: [
    mc('She ___ Italian.', ['is', 'are', 'am', 'be'], 0),
    fb('They ___ from Rome.', ['are'], 'Loro sono di Roma.'),
    tr('Sono stanco.', ['I am tired.', "I'm tired."]),
    mc('___ you ready?', ['Are', 'Is', 'Am', 'Do'], 0, 'Con «you» il verbo è sempre «are».'),
    wo('Lui non è mio fratello.', ['He', 'is', 'not', 'my', 'brother.']),
    fb('___ am a student.', ['I'], 'Sono uno studente.'),
  ],
  faq: [
    {
      question: '«I am» o «I\'m»?',
      answer: 'Sono equivalenti. La contrazione è più comune nel parlato e nelle conversazioni informali.',
    },
    {
      question: 'Perché «I am 20 years old» e non «I have 20 years»?',
      answer: 'In inglese l\'età si esprime con il verbo essere: «I am 20 years old». «I have 20 years» è un errore tipico degli italofoni.',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 2 — Oggetti e quantità                                        */
/* ------------------------------------------------------------------ */

const enU2L1 = defineLesson({
  id: 'en-u2-l1',
  title: 'Oggetti e articoli',
  subtitle: 'A, an, the… e questo e quello',
  objectives: ['Scegliere tra «a» e «an»', 'Usare «this» e «these»', 'Indicare oggetti vicini e lontani'],
  vocab: [
    { term: 'a book', translation: 'un libro' },
    { term: 'an apple', translation: 'una mela' },
    { term: 'a chair', translation: 'una sedia' },
    { term: 'an orange', translation: 'un\'arancia' },
    { term: 'a table', translation: 'un tavolo' },
    { term: 'a pen', translation: 'una penna' },
  ],
  exercises: [
    mc('Scegli l\'articolo giusto: ___ apple', ['an', 'a', 'the', '—'], 0, '«Apple» inizia con un suono vocalico, quindi si usa «an».'),
    fb('I have ___ orange.', ['an'], 'Ho un\'arancia.'),
    mc('___ is my book. (questo)', ['This', 'These', 'Those', 'That'], 0),
    tr('Quella è una sedia.', ['That is a chair.', "That's a chair."]),
    wo('Questi sono i miei libri.', ['These', 'are', 'my', 'books.']),
    li(
      'Look! This is my new table and these are my chairs.',
      'Di cosa parla?',
      ['Di un tavolo e delle sedie nuove', 'Di una macchina nuova', 'Di due libri', 'Di una casa'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Qual è la differenza tra «this» e «that»?',
      answer: '«This» indica qualcosa vicino a chi parla; «that» qualcosa lontano. Al plurale diventano «these» e «those».',
    },
    {
      question: 'Quando NON si usa l\'articolo?',
      answer: 'Davanti a plurali e nomi non numerabili usati in senso generale: «I like books», «She drinks water».',
    },
  ],
})

const enU2L2 = defineLesson({
  id: 'en-u2-l2',
  title: 'Numeri, colori e quantità',
  subtitle: 'Quanti? Di che colore?',
  objectives: ['Contare da 1 a 10', 'Descrivere con i colori', 'Chiedere una quantità'],
  vocab: [
    { term: 'one, two, three', translation: 'uno, due, tre' },
    { term: 'seven', translation: 'sette' },
    { term: 'ten', translation: 'dieci' },
    { term: 'red', translation: 'rosso' },
    { term: 'blue', translation: 'blu' },
    { term: 'green', translation: 'verde' },
    { term: 'white', translation: 'bianco' },
    { term: 'black', translation: 'nero' },
  ],
  exercises: [
    mc('«Sette» in inglese è…', ['seven', 'seventeen', 'six', 'seventy'], 0),
    fb('I have ___ (2) brothers.', ['two'], 'Ho due fratelli.'),
    tr('Ho tre libri rossi.', ['I have three red books.']),
    wo('Quante mele hai?', ['How', 'many', 'apples', 'do', 'you', 'have?']),
    li(
      'The car is blue and the house is white.',
      'Di che colore è la macchina?',
      ['Blu', 'Bianca', 'Rossa', 'Nera'],
      0,
    ),
    mc('___ color is your bag?', ['What', 'How many', 'Who', 'Where'], 0, 'Per chiedere un colore si usa «What color…?».'),
  ],
  faq: [
    {
      question: '«How many» o «how much»?',
      answer: '«How many» si usa con i nomi numerabili (apples, books). «How much» con quelli non numerabili (water, money).',
    },
    {
      question: 'L\'aggettivo va prima o dopo il nome?',
      answer: 'In inglese va prima: «a red car», non «a car red».',
    },
  ],
})

const enU2G1 = defineTopic({
  id: 'en-u2-g1',
  title: 'Articoli e plurali',
  subtitle: 'A, an, the e la formazione del plurale',
  intro:
    'In inglese ci sono due tipi di articolo: indeterminativo (a / an) e determinativo (the). Il plurale dei nomi segue regole regolari, con alcune eccezioni importanti.',
  sections: [
    {
      heading: 'A o an?',
      paragraphs: [
        'Si sceglie in base al suono con cui inizia la parola, non alla lettera scritta.',
      ],
      bullets: [
        '«a» davanti a suono consonantico: a book, a car, a university (si pronuncia «yu»).',
        '«an» davanti a suono vocalico: an apple, an orange, an hour (la «h» è muta).',
      ],
    },
    {
      heading: 'The',
      paragraphs: [
        '«The» corrisponde a il, lo, la, i, gli, le. Si usa quando l\'oggetto è specifico o già noto a chi ascolta.',
      ],
      examples: [
        { target: 'The book on the table is mine.', italian: 'Il libro sul tavolo è mio.' },
        { target: 'I like music.', italian: 'Mi piace la musica. (senso generale: nessun articolo)' },
      ],
    },
    {
      heading: 'Il plurale regolare',
      table: {
        headers: ['Regola', 'Esempio'],
        rows: [
          ['+ s (caso normale)', 'book → books'],
          ['+ es dopo -s, -sh, -ch, -x, -o', 'box → boxes, watch → watches'],
          ['-y → -ies dopo consonante', 'city → cities'],
          ['-y → -ys dopo vocale', 'boy → boys'],
          ['-f / -fe → -ves (alcuni)', 'knife → knives'],
        ],
      },
    },
    {
      heading: 'Plurali irregolari',
      table: {
        headers: ['Singolare', 'Plurale'],
        rows: [
          ['man', 'men'],
          ['woman', 'women'],
          ['child', 'children'],
          ['person', 'people'],
          ['foot', 'feet'],
          ['tooth', 'teeth'],
          ['mouse', 'mice'],
        ],
      },
    },
  ],
  exercises: [
    mc('___ elephant', ['an', 'a', 'the', '—'], 0),
    fb('There are three ___ (child) in the park.', ['children'], 'Ci sono tre bambini nel parco.'),
    mc('Plurale di «box»', ['boxes', 'boxs', 'boxies', 'box'], 0),
    tr('Ho due sorelle.', ['I have two sisters.']),
    mc(
      'Scegli la frase corretta.',
      ['I like music.', 'I like the music.', 'I like a music.', 'I like musics.'],
      0,
      'Per parlare di qualcosa in generale non si usa l\'articolo.',
    ),
    mc('Plurale di «woman»', ['women', 'womans', 'womens', 'woman'], 0),
  ],
  faq: [
    {
      question: '«People» è singolare o plurale?',
      answer: 'È il plurale di «person» e vuole il verbo al plurale: «People are nice», non «People is nice».',
    },
    {
      question: 'Si dice «a hotel» o «an hotel»?',
      answer: 'Oggi si dice «a hotel», perché la «h» di hotel si pronuncia. «An hour» invece è corretto perché la «h» è muta.',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 3 — La routine                                                */
/* ------------------------------------------------------------------ */

const enU3L1 = defineLesson({
  id: 'en-u3-l1',
  title: 'La giornata',
  subtitle: 'Abitudini e present simple',
  objectives: ['Descrivere la propria giornata', 'Usare la terza persona singolare', 'Parlare di azioni abituali'],
  vocab: [
    { term: 'to wake up', translation: 'svegliarsi' },
    { term: 'to get up', translation: 'alzarsi' },
    { term: 'to have breakfast', translation: 'fare colazione' },
    { term: 'to go to work', translation: 'andare al lavoro' },
    { term: 'to study', translation: 'studiare' },
    { term: 'to eat', translation: 'mangiare' },
    { term: 'to sleep', translation: 'dormire' },
    { term: 'every day', translation: 'ogni giorno' },
  ],
  exercises: [
    mc('She ___ to school every day.', ['goes', 'go', 'going', 'gos'], 0, 'Alla terza persona singolare il verbo prende -s (o -es).'),
    fb("I ___ up at seven o'clock. (svegliarsi)", ['wake'], 'Mi sveglio alle sette.'),
    tr('Lui lavora ogni giorno.', ['He works every day.']),
    wo('Faccio colazione alle otto.', ['I', 'have', 'breakfast', 'at', 'eight', "o'clock."]),
    li(
      'I get up at seven and go to work by bus.',
      'Come va al lavoro?',
      ['In autobus', 'A piedi', 'In macchina', 'In treno'],
      0,
    ),
    mc('They ___ English.', ['study', 'studies', 'studying', 'studys'], 0),
  ],
  faq: [
    {
      question: 'Perché «she goes» e non «she gos»?',
      answer: 'I verbi che finiscono in -o prendono «-es» alla terza persona: go → goes, do → does.',
    },
    {
      question: '«I get up» o «I wake up»?',
      answer: '«Wake up» è svegliarsi (aprire gli occhi), «get up» è alzarsi dal letto.',
    },
  ],
})

const enU3L2 = defineLesson({
  id: 'en-u3-l2',
  title: 'Domande e negazioni',
  subtitle: 'Do, does e avverbi di frequenza',
  objectives: ['Fare domande al presente', 'Negare un\'azione abituale', 'Collocare gli avverbi di frequenza'],
  vocab: [
    { term: 'always', translation: 'sempre' },
    { term: 'usually', translation: 'di solito' },
    { term: 'often', translation: 'spesso' },
    { term: 'sometimes', translation: 'a volte' },
    { term: 'never', translation: 'mai' },
    { term: 'early', translation: 'presto' },
    { term: 'late', translation: 'tardi' },
  ],
  exercises: [
    mc('___ you speak English?', ['Do', 'Does', 'Are', 'Is'], 0),
    fb('He ___ not like fish.', ['does'], 'A lui non piace il pesce.'),
    tr('Di solito mi alzo presto.', ['I usually get up early.']),
    wo('Dove vivi?', ['Where', 'do', 'you', 'live?']),
    li(
      'She never eats meat.',
      'Cosa non mangia mai?',
      ['Carne', 'Pesce', 'Pasta', 'Verdura'],
      0,
    ),
    mc(
      'Scegli la domanda corretta.',
      ['Does he play football?', 'Does he plays football?', 'Do he play football?', 'Is he play football?'],
      0,
      'Dopo «does» il verbo resta alla forma base.',
    ),
  ],
  faq: [
    {
      question: 'Dove va l\'avverbio di frequenza?',
      answer: 'Prima del verbo principale, ma dopo il verbo essere: «I often study», «She is always happy».',
    },
    {
      question: '«Don\'t» o «doesn\'t»?',
      answer: '«Don\'t» con I, you, we, they; «doesn\'t» con he, she, it.',
    },
  ],
})

const enU3G1 = defineTopic({
  id: 'en-u3-g1',
  title: 'Present simple',
  subtitle: 'Il presente delle abitudini',
  intro:
    'Il present simple si usa per abitudini, routine, verità generali e opinioni. Non descrive ciò che sta accadendo in questo momento (per quello c\'è il present continuous).',
  sections: [
    {
      heading: 'Forme affermative',
      table: {
        headers: ['Soggetto', 'Verbo', 'Esempio'],
        rows: [
          ['I / you / we / they', 'forma base', 'I work in Rome.'],
          ['he / she / it', 'forma base + s', 'She works in Rome.'],
        ],
      },
      bullets: [
        'Dopo -s, -sh, -ch, -x, -o si aggiunge -es: watches, goes, finishes.',
        'Dopo consonante + y, la y diventa i: study → studies.',
        'Dopo vocale + y resta -s: play → plays.',
        'Irregolare: have → has.',
      ],
    },
    {
      heading: 'Negazioni',
      paragraphs: ['Si usa do not / don\'t oppure does not / doesn\'t + forma base del verbo.'],
      examples: [
        { target: "I don't drink coffee.", italian: 'Non bevo caffè.' },
        { target: "She doesn't work on Sundays.", italian: 'Lei non lavora la domenica.' },
      ],
    },
    {
      heading: 'Domande',
      paragraphs: ['Si mette Do o Does all\'inizio della frase, seguito dal soggetto e dalla forma base.'],
      examples: [
        { target: 'Do you speak English?', italian: 'Parli inglese?' },
        { target: 'Where does he live?', italian: 'Dove vive?' },
        { target: 'Does she like tea? — Yes, she does.', italian: 'Le piace il tè? — Sì.' },
      ],
    },
    {
      heading: 'Avverbi di frequenza',
      paragraphs: [
        'Sempre, di solito, spesso, a volte, mai: always, usually, often, sometimes, never. Vanno prima del verbo principale e dopo «to be».',
      ],
      examples: [
        { target: 'I always have breakfast.', italian: 'Faccio sempre colazione.' },
        { target: 'He is never late.', italian: 'Non è mai in ritardo.' },
      ],
    },
  ],
  exercises: [
    mc('He ___ coffee every morning.', ['drinks', 'drink', 'drinking', 'drinkes'], 0),
    fb('My sister ___ (watch) TV in the evening.', ['watches'], 'Mia sorella guarda la TV la sera.'),
    tr('Non bevo caffè.', ['I do not drink coffee.', "I don't drink coffee."]),
    mc('___ she like tea?', ['Does', 'Do', 'Is', 'Has'], 0),
    wo('Di solito si alza presto.', ['She', 'usually', 'gets', 'up', 'early.']),
    mc(
      'Scegli la frase corretta.',
      ["He doesn't play tennis.", "He don't play tennis.", "He doesn't plays tennis.", 'He not plays tennis.'],
      0,
    ),
  ],
  faq: [
    {
      question: 'Perché dopo «doesn\'t» il verbo perde la s?',
      answer: 'Perché la -s è già contenuta in «does». Dire «doesn\'t plays» sarebbe una doppia marca della terza persona.',
    },
    {
      question: 'Il present simple può indicare il futuro?',
      answer: 'Sì, per orari e programmi fissi: «The train leaves at 8». Per piani personali si usa di solito «going to».',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 4 — Casa e famiglia                                           */
/* ------------------------------------------------------------------ */

const enU4L1 = defineLesson({
  id: 'en-u4-l1',
  title: 'La casa',
  subtitle: 'C\'è, ci sono e dove sono le cose',
  objectives: ['Usare «there is» e «there are»', 'Descrivere le stanze', 'Indicare la posizione di un oggetto'],
  vocab: [
    { term: 'house', translation: 'casa (edificio)' },
    { term: 'flat', translation: 'appartamento' },
    { term: 'kitchen', translation: 'cucina' },
    { term: 'bedroom', translation: 'camera da letto' },
    { term: 'bathroom', translation: 'bagno' },
    { term: 'living room', translation: 'soggiorno' },
    { term: 'garden', translation: 'giardino' },
    { term: 'sofa', translation: 'divano' },
  ],
  exercises: [
    mc('___ two bedrooms in my house.', ['There are', 'There is', 'It is', 'They are'], 0),
    fb('There ___ a cat on the sofa.', ['is'], 'C\'è un gatto sul divano.'),
    tr("C'è un tavolo in cucina.", ['There is a table in the kitchen.', "There's a table in the kitchen."]),
    wo('Ci sono tre sedie in giardino.', ['There', 'are', 'three', 'chairs', 'in', 'the', 'garden.']),
    li(
      'My flat has a small kitchen and two bedrooms.',
      'Quante camere da letto ci sono?',
      ['Due', 'Una', 'Tre', 'Nessuna'],
      0,
    ),
    mc('The book is ___ the table.', ['on', 'in', 'at', 'to'], 0, '«On» indica sopra una superficie.'),
  ],
  faq: [
    {
      question: '«There is» o «it is»?',
      answer: '«There is» introduce l\'esistenza di qualcosa («c\'è»). «It is» descrive o identifica: «It is a big house».',
    },
    {
      question: 'Come si dice «non c\'è»?',
      answer: '«There isn\'t» (singolare) o «There aren\'t» (plurale). Con i plurali si può usare anche «There are no…».',
    },
  ],
})

const enU4L2 = defineLesson({
  id: 'en-u4-l2',
  title: 'La famiglia e i possessivi',
  subtitle: 'My, your, his, her…',
  objectives: ['Parlare della famiglia', 'Usare gli aggettivi possessivi', 'Descrivere i rapporti familiari'],
  vocab: [
    { term: 'mother', translation: 'madre' },
    { term: 'father', translation: 'padre' },
    { term: 'sister', translation: 'sorella' },
    { term: 'brother', translation: 'fratello' },
    { term: 'parents', translation: 'genitori' },
    { term: 'son', translation: 'figlio' },
    { term: 'daughter', translation: 'figlia' },
    { term: 'grandparents', translation: 'nonni' },
  ],
  exercises: [
    mc('This is ___ bag. (di lei)', ['her', 'his', 'their', 'our'], 0),
    fb('___ house is big. (di loro)', ['Their'], 'La loro casa è grande.'),
    tr('Mia sorella ha una bicicletta.', ['My sister has a bike.', 'My sister has a bicycle.']),
    wo('I suoi genitori vivono a Londra.', ['His', 'parents', 'live', 'in', 'London.']),
    li(
      'Her brother is twelve years old.',
      'Quanti anni ha il fratello?',
      ['Dodici', 'Dieci', 'Venti', 'Due'],
      0,
    ),
    mc('___ teacher is very kind. (di noi)', ['Our', 'Their', 'Her', 'My'], 0),
  ],
  faq: [
    {
      question: '«His» o «her»?',
      answer: '«His» si riferisce a un possessore maschile, «her» a uno femminile. Dipendono da chi possiede, non dall\'oggetto posseduto.',
    },
    {
      question: 'Gli aggettivi possessivi prendono la -s al plurale?',
      answer: 'No, sono invariabili: my books, his sisters, our parents.',
    },
  ],
})

const enU4G1 = defineTopic({
  id: 'en-u4-g1',
  title: 'There is / There are e preposizioni di luogo',
  subtitle: 'Descrivere ciò che c\'è e dove si trova',
  intro:
    '«There is» e «There are» servono a dire che qualcosa esiste o è presente. Le preposizioni di luogo indicano invece la posizione precisa di un oggetto.',
  sections: [
    {
      heading: 'There is / There are',
      table: {
        headers: ['Forma', 'Uso', 'Esempio'],
        rows: [
          ['There is', 'singolare / non numerabile', 'There is a park near here.'],
          ['There are', 'plurale', 'There are two bedrooms.'],
          ["There isn't / aren't", 'negazione', "There isn't any milk."],
          ['Is there…? / Are there…?', 'domanda', 'Are there any chairs?'],
        ],
      },
      examples: [
        { target: 'There is a table in the kitchen.', italian: 'C\'è un tavolo in cucina.' },
        { target: 'There are some books on the shelf.', italian: 'Ci sono dei libri sullo scaffale.' },
      ],
    },
    {
      heading: 'Preposizioni di luogo',
      table: {
        headers: ['Inglese', 'Italiano', 'Esempio'],
        rows: [
          ['in', 'dentro, in', 'in the box'],
          ['on', 'sopra (a contatto)', 'on the table'],
          ['under', 'sotto', 'under the bed'],
          ['behind', 'dietro', 'behind the house'],
          ['in front of', 'davanti a', 'in front of the school'],
          ['next to', 'accanto a', 'next to the window'],
          ['between', 'tra due cose', 'between the chairs'],
          ['over', 'sopra (senza contatto)', 'over the door'],
        ],
      },
    },
    {
      heading: 'Some e any',
      paragraphs: [
        '«Some» si usa nelle frasi affermative (alcuni, un po\'). «Any» nelle negative e nelle domande.',
      ],
      examples: [
        { target: 'There are some apples.', italian: 'Ci sono delle mele.' },
        { target: "There aren't any apples.", italian: 'Non ci sono mele.' },
        { target: 'Are there any apples?', italian: 'Ci sono mele?' },
      ],
    },
  ],
  exercises: [
    mc('___ any milk in the fridge?', ['Is there', 'Are there', 'There is', 'Has there'], 0),
    fb('There ___ not any chairs in the room.', ['are'], 'Non ci sono sedie nella stanza.'),
    tr('Ci sono molti libri sullo scaffale.', ['There are many books on the shelf.']),
    mc('The cat is ___ the table. (sotto)', ['under', 'on', 'in', 'next to'], 0),
    wo('C\'è un piccolo giardino dietro la casa.', ['There', 'is', 'a', 'small', 'garden', 'behind', 'the', 'house.']),
  ],
  faq: [
    {
      question: 'Si dice «there is any»?',
      answer: 'No. «Any» si usa con negazioni e domande: «There isn\'t any milk», «Is there any milk?».',
    },
    {
      question: '«In the table» o «on the table»?',
      answer: '«On the table» significa sul tavolo (sopra la superficie). «In the table» significherebbe dentro il tavolo.',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 5 — Il passato                                                */
/* ------------------------------------------------------------------ */

const enU5L1 = defineLesson({
  id: 'en-u5-l1',
  title: 'Il passato regolare',
  subtitle: 'Yesterday, last week…',
  objectives: ['Formare il past simple dei verbi regolari', 'Collocare un\'azione nel passato', 'Negare e chiedere al passato'],
  vocab: [
    { term: 'yesterday', translation: 'ieri' },
    { term: 'last week', translation: 'la settimana scorsa' },
    { term: 'last year', translation: 'l\'anno scorso' },
    { term: 'ago', translation: 'fa' },
    { term: 'visited', translation: 'visitato' },
    { term: 'played', translation: 'giocato' },
    { term: 'watched', translation: 'guardato' },
    { term: 'studied', translation: 'studiato' },
  ],
  exercises: [
    mc('Yesterday I ___ football.', ['played', 'play', 'playing', 'plays'], 0),
    fb('She ___ (watch) a film last night.', ['watched'], 'Ha guardato un film ieri sera.'),
    tr('Ho visitato Roma l\'anno scorso.', ['I visited Rome last year.']),
    wo('Ieri abbiamo studiato inglese.', ['We', 'studied', 'English', 'yesterday.']),
    li(
      'Last weekend I played tennis with my friends.',
      'Quando ha giocato a tennis?',
      ['Lo scorso fine settimana', 'Ieri mattina', 'Due anni fa', 'Stasera'],
      0,
    ),
    mc('They ___ enjoy the party.', ['did not', 'do not', 'not', 'was not'], 0, 'La negazione al passato è «did not» + forma base.'),
  ],
  faq: [
    {
      question: 'Come si pronuncia «-ed»?',
      answer: 'Può suonare /t/ (watched), /d/ (played) o /ɪd/ (visited). Dipende dal suono finale del verbo.',
    },
    {
      question: 'Perché «did not enjoy» e non «did not enjoyed»?',
      answer: 'Dopo «did / didn\'t» il verbo torna alla forma base: il passato è già espresso da «did».',
    },
  ],
})

const enU5L2 = defineLesson({
  id: 'en-u5-l2',
  title: 'Il passato irregolare',
  subtitle: 'Went, saw, had, ate…',
  objectives: ['Riconoscere i verbi irregolari più comuni', 'Raccontare eventi passati', 'Fare domande al passato'],
  vocab: [
    { term: 'went', translation: 'andato (go)' },
    { term: 'saw', translation: 'visto (see)' },
    { term: 'had', translation: 'avuto (have)' },
    { term: 'ate', translation: 'mangiato (eat)' },
    { term: 'came', translation: 'venuto (come)' },
    { term: 'bought', translation: 'comprato (buy)' },
    { term: 'was / were', translation: 'ero, era / eravamo, erano' },
  ],
  exercises: [
    mc('She ___ a great time.', ['had', 'haved', 'have', 'has'], 0),
    fb('They ___ (come) home late.', ['came'], 'Sono tornati a casa tardi.'),
    tr('Ho mangiato una pizza ieri.', ['I ate a pizza yesterday.', 'I ate pizza yesterday.']),
    wo('Abbiamo visto un bel film.', ['We', 'saw', 'a', 'beautiful', 'film.']),
    li(
      'He bought a new car last month.',
      'Cosa ha comprato?',
      ['Una macchina nuova', 'Una bicicletta', 'Un telefono', 'Una casa'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ["I didn't go to school.", "I didn't went to school.", 'I not went to school.', "I don't went to school."],
      0,
    ),
  ],
  faq: [
    {
      question: 'Devo imparare tutti i verbi irregolari?',
      answer: 'No. All\'inizio bastano i più frequenti: be, have, do, go, see, eat, come, buy, get, make, take, say.',
    },
    {
      question: '«I was» o «I were»?',
      answer: '«I was», «he/she/it was»; «you/we/they were».',
    },
  ],
})

const enU5G1 = defineTopic({
  id: 'en-u5-g1',
  title: 'Past simple',
  subtitle: 'Raccontare il passato',
  intro:
    'Il past simple descrive azioni concluse nel passato, con un momento preciso o implicito. È il tempo più usato per raccontare ciò che è successo.',
  sections: [
    {
      heading: 'Verbi regolari: -ed',
      table: {
        headers: ['Regola', 'Esempio'],
        rows: [
          ['+ ed', 'work → worked'],
          ['verbo già in -e: + d', 'live → lived'],
          ['consonante + y → ied', 'study → studied'],
          ['raddoppio consonantico (breve + vocale + consonante)', 'stop → stopped'],
        ],
      },
    },
    {
      heading: 'Verbi irregolari',
      paragraphs: [
        'Molti verbi molto comuni hanno una forma propria che va memorizzata. Non esiste una regola unica.',
      ],
      table: {
        headers: ['Base', 'Past simple', 'Italiano'],
        rows: [
          ['go', 'went', 'andare'],
          ['see', 'saw', 'vedere'],
          ['have', 'had', 'avere'],
          ['eat', 'ate', 'mangiare'],
          ['come', 'came', 'venire'],
          ['buy', 'bought', 'comprare'],
          ['make', 'made', 'fare'],
          ['take', 'took', 'prendere'],
        ],
      },
    },
    {
      heading: 'Negazioni e domande',
      paragraphs: [
        'Si usa «did not / didn\'t» + forma base per negare, e «Did + soggetto + forma base» per chiedere. Il verbo principale resta alla forma base.',
      ],
      examples: [
        { target: "I didn't watch TV.", italian: 'Non ho guardato la TV.' },
        { target: 'Did you visit Rome? — Yes, I did.', italian: 'Hai visitato Roma? — Sì.' },
        { target: 'Where did she go?', italian: 'Dove è andata?' },
      ],
    },
    {
      heading: 'Espressioni di tempo',
      bullets: [
        'yesterday — ieri',
        'last night / week / year — ieri sera / la settimana scorsa / l\'anno scorso',
        'two days ago — due giorni fa',
        'in 2010 — nel 2010',
      ],
    },
  ],
  exercises: [
    mc('I ___ to the cinema last night.', ['went', 'go', 'gone', 'going'], 0),
    fb('He ___ (work) in London two years ago.', ['worked'], 'Ha lavorato a Londra due anni fa.'),
    tr('Non ho guardato la TV.', ['I did not watch TV.', "I didn't watch TV."]),
    mc('Where ___ you go?', ['did', 'do', 'was', 'were'], 0),
    wo('Ha comprato un telefono nuovo la settimana scorsa.', ['She', 'bought', 'a', 'new', 'phone', 'last', 'week.']),
  ],
  faq: [
    {
      question: 'Past simple o present perfect?',
      answer: 'Il past simple indica un momento passato concluso («I saw him yesterday»). Il present perfect collega il passato al presente («I have seen him»).',
    },
    {
      question: '«Did you went?» è sbagliato?',
      answer: 'Sì. Dopo «did» si usa la forma base: «Did you go?».',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Unità 6 — Futuro e azioni in corso                                  */
/* ------------------------------------------------------------------ */

const enU6L1 = defineLesson({
  id: 'en-u6-l1',
  title: 'Programmi futuri',
  subtitle: 'Going to e intenzioni',
  objectives: ['Parlare di piani futuri', 'Usare «going to»', 'Fare previsioni'],
  vocab: [
    { term: 'tomorrow', translation: 'domani' },
    { term: 'next week', translation: 'la prossima settimana' },
    { term: 'tonight', translation: 'stasera' },
    { term: 'plan', translation: 'piano, programma' },
    { term: 'to travel', translation: 'viaggiare' },
    { term: 'to meet', translation: 'incontrare' },
    { term: 'to stay', translation: 'restare' },
    { term: 'going to', translation: 'stare per / avere intenzione di' },
  ],
  exercises: [
    mc('Tomorrow I ___ visit my grandmother.', ['am going to', 'going to', 'is going to', 'go to'], 0),
    fb('She ___ to Spain next month. (travel)', ['is going to travel'], 'Andrà in Spagna il mese prossimo.'),
    tr('Domani ho intenzione di visitare il museo.', ['I am going to visit the museum tomorrow.', "I'm going to visit the museum tomorrow."]),
    wo('La prossima settimana viaggeremo.', ['We', 'are', 'going', 'to', 'travel', 'next', 'week.']),
    li(
      'I am going to meet my friends tonight.',
      'Cosa farà stasera?',
      ['Incontrerà gli amici', 'Andrà in palestra', 'Studierà', 'Lavorerà'],
      0,
    ),
    mc('Look at the clouds! It ___ rain.', ['is going to', 'goes to', 'is going', 'going to'], 0, '«Going to» si usa anche per previsioni basate su un segnale evidente.'),
  ],
  faq: [
    {
      question: '«Going to» o «will»?',
      answer: '«Going to» per piani già decisi e previsioni con prove visibili. «Will» per decisioni prese sul momento, promesse e offerte.',
    },
    {
      question: 'Come si contrae «going to» nel parlato?',
      answer: 'Spesso si sente «gonna» (informale): «I\'m gonna call you». Nello scritto formale si usa la forma completa.',
    },
  ],
})

const enU6L2 = defineLesson({
  id: 'en-u6-l2',
  title: 'Azioni in corso',
  subtitle: 'Present continuous',
  objectives: ['Descrivere ciò che sta accadendo ora', 'Distinguere abitudine e azione in corso', 'Usare le espressioni di tempo giuste'],
  vocab: [
    { term: 'now', translation: 'adesso' },
    { term: 'at the moment', translation: 'in questo momento' },
    { term: 'right now', translation: 'proprio ora' },
    { term: 'usually', translation: 'di solito' },
    { term: 'today', translation: 'oggi' },
    { term: 'to read', translation: 'leggere' },
    { term: 'to cook', translation: 'cucinare' },
  ],
  exercises: [
    mc('She ___ a book now.', ['is reading', 'reads', 'read', 'reading'], 0),
    fb('I ___ today. (not / work)', ['am not working', "'m not working"], 'Oggi non lavoro.'),
    tr('Sto studiando inglese.', ['I am studying English.', "I'm studying English."]),
    wo('Stanno giocando in giardino adesso.', ['They', 'are', 'playing', 'in', 'the', 'garden', 'now.']),
    li(
      'At the moment he is cooking dinner.',
      'Cosa sta facendo?',
      ['Sta cucinando la cena', 'Sta mangiando', 'Sta studiando', 'Sta dormendo'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      [
        'Every day I go to work by bus.',
        'Every day I am going to work by bus.',
        'Every day I going to work by bus.',
        'Every day I goes to work by bus.',
      ],
      0,
      'Con «every day» serve il present simple, non il present continuous.',
    ),
  ],
  faq: [
    {
      question: 'Quando si usa il present continuous?',
      answer: 'Per azioni in corso ora, situazioni temporanee e appuntamenti già fissati nel futuro: «I\'m meeting Anna tomorrow».',
    },
    {
      question: 'Come si forma?',
      answer: 'Verbo essere (am / is / are) + verbo in -ing: I am studying, she is working, they are playing.',
    },
  ],
})

const enU6G1 = defineTopic({
  id: 'en-u6-g1',
  title: 'Il futuro: going to, will e present continuous',
  subtitle: 'Tre modi per parlare di domani',
  intro:
    'L\'inglese non ha un unico futuro. La scelta dipende dall\'intenzione: un piano, una decisione spontanea o un appuntamento già fissato.',
  sections: [
    {
      heading: 'Going to',
      paragraphs: ['Si usa per piani e intenzioni già decise, e per previsioni basate su qualcosa che vediamo.'],
      examples: [
        { target: "I'm going to study tonight.", italian: 'Stasera ho intenzione di studiare.' },
        { target: 'Look at those clouds! It\'s going to rain.', italian: 'Guarda quelle nuvole! Sta per piovere.' },
      ],
    },
    {
      heading: 'Will',
      paragraphs: ['Si usa per decisioni prese nel momento in cui si parla, promesse, offerte e previsioni personali.'],
      examples: [
        { target: 'I\'m thirsty. I\'ll get some water.', italian: 'Ho sete. Prendo un po\' d\'acqua.' },
        { target: "I'll help you.", italian: 'Ti aiuto.' },
        { target: 'I think it will be sunny tomorrow.', italian: 'Penso che domani sarà soleggiato.' },
      ],
    },
    {
      heading: 'Present continuous per appuntamenti',
      paragraphs: ['Si usa per impegni già organizzati, spesso con un\'altra persona e un orario preciso.'],
      examples: [
        { target: "We're meeting Anna at 8.", italian: 'Ci incontriamo con Anna alle 8.' },
        { target: "I'm flying to London tomorrow.", italian: 'Domani volo a Londra. (biglietto già preso)' },
      ],
    },
    {
      heading: 'In sintesi',
      table: {
        headers: ['Forma', 'Uso', 'Esempio'],
        rows: [
          ['going to', 'piano / previsione con prove', "I'm going to buy a car."],
          ['will', 'decisione spontanea / promessa', "I'll buy it!"],
          ['present continuous', 'appuntamento fissato', "I'm seeing the doctor tomorrow."],
        ],
      },
    },
  ],
  exercises: [
    mc('I\'m thirsty. I ___ get some water.', ['will', 'am going to', 'going to', 'am'], 0, 'La decisione è presa mentre si parla: si usa «will».'),
    fb('They ___ (not / come) tomorrow.', ['are not going to come', "aren't going to come"], 'Domani non verranno.'),
    tr('Cosa farai questo fine settimana?', ['What are you going to do this weekend?', 'What will you do this weekend?']),
    mc('We ___ my parents next Sunday. (appuntamento fissato)', ['are visiting', 'will visit', 'visit', 'visited'], 0),
    wo('Stanotte nevicherà.', ['It', 'is', 'going', 'to', 'snow', 'tonight.']),
  ],
  faq: [
    {
      question: '«Will» si usa anche per i piani?',
      answer: 'Meno naturale. Se il piano è già deciso, «going to» è la scelta migliore. «Will» suona come una decisione presa al momento.',
    },
    {
      question: 'Come si contrae «will not»?',
      answer: '«Won\'t»: «I won\'t come» = «I will not come».',
    },
  ],
})

/* ------------------------------------------------------------------ */
/* Corso                                                               */
/* ------------------------------------------------------------------ */

export const english: Course = {
  id: 'en',
  name: 'Inglese',
  nativeName: 'English',
  description:
    'Dalle prime presentazioni al passato e al futuro. Un percorso A1→A2 con grammatica spiegata e esercizi guidati.',
  level: 'A1 → A2',
  ttsLang: 'en-US',
  units: [
    defineUnit({
      id: 'en-u1',
      title: 'Le basi',
      subtitle: 'Saluti, presentazioni e verbo essere',
      intro:
        'Qui costruisci le prime frasi: saluti, presentazioni e il verbo «to be». Imparerai anche a dire da dove vieni e che lavoro fai.',
      keyPoints: ['Saluti e presentazioni', 'Pronomi e verbo to be', 'Nazionalità e professioni'],
      lessons: [enU1L1, enU1L2],
      grammar: [enU1G1],
    }),
    defineUnit({
      id: 'en-u2',
      title: 'Oggetti e quantità',
      subtitle: 'Articoli, plurali, numeri e colori',
      intro:
        'Questa unità ti insegna a parlare degli oggetti intorno a te: articoli, plurali, numeri e colori. È il vocabolario di base per descrivere ciò che vedi.',
      keyPoints: ['Articoli a, an, the', 'Plurali regolari e irregolari', 'Numeri, colori e quantità'],
      lessons: [enU2L1, enU2L2],
      grammar: [enU2G1],
    }),
    defineUnit({
      id: 'en-u3',
      title: 'La routine',
      subtitle: 'Presente semplice, domande e negazioni',
      intro:
        'La routine quotidiana richiede il present simple. Vedrai come formare domande e negazioni e come collocare gli avverbi di frequenza.',
      keyPoints: ['Present simple', 'Do/does e negazioni', 'Avverbi di frequenza'],
      lessons: [enU3L1, enU3L2],
      grammar: [enU3G1],
    }),
    defineUnit({
      id: 'en-u4',
      title: 'Casa e famiglia',
      subtitle: 'There is/are, possessivi e preposizioni',
      intro:
        'Impari a descrivere casa e famiglia con there is/there are, i possessivi e le preposizioni di luogo.',
      keyPoints: ['There is / there are', 'Aggettivi possessivi', 'Preposizioni di luogo'],
      lessons: [enU4L1, enU4L2],
      grammar: [enU4G1],
    }),
    defineUnit({
      id: 'en-u5',
      title: 'Il passato',
      subtitle: 'Past simple regolare e irregolare',
      intro:
        'Racconta il passato con il past simple: verbi regolari, irregolari e le domande più comuni.',
      keyPoints: ['Past simple regolare', 'Verbi irregolari frequenti', 'Domande e negazioni al passato'],
      lessons: [enU5L1, enU5L2],
      grammar: [enU5G1],
    }),
    defineUnit({
      id: 'en-u6',
      title: 'Futuro e azioni in corso',
      subtitle: 'Going to, will e present continuous',
      intro:
        'Parla di piani e azioni in corso: going to, will e present continuous, scegliendo la forma giusta.',
      keyPoints: ['Going to per i piani', 'Will per decisioni e previsioni', 'Present continuous per azioni in corso'],
      lessons: [enU6L1, enU6L2],
      grammar: [enU6G1],
    }),
  ],
}
