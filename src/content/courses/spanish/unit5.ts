import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU5L1 = defineLesson({
  id: 'es-u5-l1',
  title: 'Cosa ti piace?',
  subtitle: 'Me gusta, te gusta, le gusta',
  objectives: [
    'Esprimere gusti e preferenze',
    'Usare gustar al singolare e al plurale',
    'Capire la struttura «a mí me gusta»',
  ],
  vocab: [
    { term: 'me gusta', translation: 'mi piace' },
    { term: 'te gusta', translation: 'ti piace' },
    { term: 'le gusta', translation: 'gli / le piace' },
    { term: 'leer', translation: 'leggere' },
    { term: 'bailar', translation: 'ballare' },
    { term: 'la música', translation: 'la musica' },
    { term: 'el deporte', translation: 'lo sport' },
    { term: 'el cine', translation: 'il cinema' },
  ],
  exercises: [
    mc('___ gusta la música. (a me)', ['Me', 'Te', 'Le', 'Nos'], 0),
    fb('Me ___ leer y bailar.', ['gusta'], 'Mi piace leggere e ballare.'),
    tr('Mi piace il cinema.', ['Me gusta el cine.']),
    wo('Ti piace lo sport?', ['¿Te', 'gusta', 'el', 'deporte?']),
    li(
      'En mi tiempo libre me gusta leer y pasar tiempo con mis amigos.',
      'Cosa ti piace fare?',
      ['Leggere e stare con gli amici', 'Ballare e cantare', 'Guardare la TV', 'Fare sport'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Me gustan los libros.', 'Me gusta los libros.', 'Me gustan el libro.', 'Yo gusto los libros.'],
      0,
    ),
    fb('A nosotros ___ gustan las películas.', ['nos'], 'A noi piacciono i film.'),
    tr('Non mi piace il calcio.', ['No me gusta el fútbol.']),
    mc('Come si dice «ti piace»?', ['Te gusta', 'Me gusta', 'Le gusta', 'Nos gusta'], 0),
    wo('A María le piace ballare.', ['A', 'María', 'le', 'gusta', 'bailar.']),
  ],
  faq: [
    {
      question: 'Perché si dice «me gustan los libros»?',
      answer: 'Con «gustar» il soggetto grammaticale è la cosa che piace. Se è plurale, il verbo diventa «gustan»: «me gustan los libros», «me gusta el libro».',
    },
    {
      question: 'A cosa serve «a mí»?',
      answer: 'Serve per enfatizzare o chiarire chi prova il piacere: «A mí me gusta», «A él le gusta». Spesso si può omettere, ma è utile quando ci sono più persone.',
    },
  ],
})

const esU5L2 = defineLesson({
  id: 'es-u5-l2',
  title: 'Sport, cinema e musica',
  subtitle: 'Jugar, ver, escuchar',
  objectives: [
    'Parlare delle proprie attività del tempo libero',
    'Usare jugar, ver e escuchar',
    'Descrivere film, canzoni e concerti',
  ],
  vocab: [
    { term: 'el fútbol', translation: 'il calcio' },
    { term: 'la natación', translation: 'il nuoto' },
    { term: 'el cine', translation: 'il cinema' },
    { term: 'la película', translation: 'il film' },
    { term: 'la canción', translation: 'la canzone' },
    { term: 'el concierto', translation: 'il concerto' },
    { term: 'jugar', translation: 'giocare' },
    { term: 'ver', translation: 'vedere' },
  ],
  exercises: [
    mc('Juego al ___.', ['fútbol', 'cine', 'música', 'película'], 0),
    fb('Me gusta ___ películas. (vedere)', ['ver'], 'Mi piace vedere film.'),
    tr('Nel tempo libero vado al cinema.', ['En mi tiempo libre voy al cine.']),
    wo('Mi piace ascoltare la musica.', ['Me', 'gusta', 'escuchar', 'la', 'música.']),
    li(
      'Los sábados juego al fútbol con mis amigos y por la noche veo una película.',
      'Cosa fa il sabato sera?',
      ['Guarda un film', 'Gioca a calcio', 'Va al concerto', 'Ascolta musica'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      [
        'Me gusta la música española.',
        'Me gusta el música española.',
        'Me gustan la música española.',
        'Me gusta las músicas españolas.',
      ],
      0,
    ),
    fb('Nosotros ___ (jugar) al tenis los domingos.', ['jugamos'], 'Noi giochiamo a tennis la domenica.'),
    tr('Ti piace il cinema?', ['¿Te gusta el cine?']),
    mc('«La canción» significa…', ['la canzone', 'il concerto', 'il film', 'lo sport'], 0),
    wo('Mi piace andare ai concerti.', ['Me', 'gusta', 'ir', 'a', 'los', 'conciertos.']),
  ],
  faq: [
    {
      question: '«Jugar al fútbol» o «jugar fútbol»?',
      answer: 'In Spagna si dice «jugar al fútbol», con la contrazione «al». In America Latina è comune anche «jugar fútbol», ma la forma con «al» è quella standard.',
    },
    {
      question: '«Ver» è irregolare?',
      answer: 'Sì, al presente fa «veo, ves, ve, vemos, veis, ven». È uno dei verbi irregolari più frequenti.',
    },
  ],
})

const esU5L3 = defineLesson({
  id: 'es-u5-l3',
  title: 'Inviti e piani',
  subtitle: '¿Quieres…? Vamos a…',
  objectives: [
    'Invitare qualcuno e rispondere a un invito',
    'Parlare di piani con ir a + infinito',
    'Usare querer e preferir',
  ],
  vocab: [
    { term: 'querer', translation: 'volere' },
    { term: 'ir a + infinito', translation: 'andare a + infinito' },
    { term: 'este fin de semana', translation: 'questo fine settimana' },
    { term: '¿quieres…?', translation: 'vuoi…?' },
    { term: 'quedar', translation: 'incontrarsi, mettersi d\'accordo' },
    { term: 'el plan', translation: 'il programma, il piano' },
    { term: 'preferir', translation: 'preferire' },
    { term: 'juntos / juntas', translation: 'insieme' },
  ],
  exercises: [
    mc('Yo ___ ir al cine. (volere)', ['quiero', 'quieres', 'quiere', 'queremos'], 0),
    fb('¿___ venir conmigo? (tu, querer)', ['Quieres'], 'Vuoi venire con me?'),
    tr('Questo fine settimana vado al cinema.', ['Este fin de semana voy al cine.']),
    wo('Vuoi uscire con me?', ['¿Quieres', 'salir', 'conmigo?']),
    li(
      'Este sábado vamos a cenar en un restaurante y después al cine.',
      'Cosa fanno sabato?',
      ['Cenano e vanno al cinema', 'Vanno al parco', 'Restano a casa', 'Vanno a teatro'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Vamos a estudiar juntos.', 'Vamos estudiar juntos.', 'Vamos a estudiamos juntos.', 'Vamos en estudiar juntos.'],
      0,
    ),
    fb('Ella ___ (preferir) quedarse en casa.', ['prefiere'], 'Lei preferisce restare a casa.'),
    tr('Preferisco restare a casa.', ['Prefiero quedarme en casa.']),
    mc('«Quedar» significa…', ['incontrarsi, mettersi d\'accordo', 'andare', 'volere', 'preferire'], 0),
    wo('Noi andiamo a mangiare insieme.', ['Nosotros', 'vamos', 'a', 'comer', 'juntos.']),
  ],
  faq: [
    {
      question: '«Ir a» + infinito come si usa?',
      answer: 'Esprime un piano futuro vicino: «Voy a estudiar» = sto per studiare / studierò. Si coniuga solo «ir»: voy, vas, va, vamos, vais, van.',
    },
    {
      question: '«Quedar» e «quedarse» sono uguali?',
      answer: 'No. «Quedar» significa incontrarsi o mettersi d\'accordo: «¿Quedamos a las ocho?». «Quedarse» significa restare: «Me quedo en casa».',
    },
  ],
})

const esU5G1 = defineTopic({
  id: 'es-u5-g1',
  title: 'Gustar e verbi irregolari',
  subtitle: 'Volere, preferire, andare',
  intro:
    '«Gustar» funziona in modo diverso dagli altri verbi: il soggetto grammaticale è la cosa che piace. Insieme a querer, preferir e ir completa il vocabolario per parlare di gusti e piani.',
  sections: [
    {
      heading: 'La struttura di gustar',
      table: {
        headers: ['Persona', 'Pronome', 'Forma', 'Esempio'],
        rows: [
          ['a mí', 'me', 'gusta / gustan', 'Me gusta el cine.'],
          ['a ti', 'te', 'gusta / gustan', '¿Te gusta la música?'],
          ['a él / ella / usted', 'le', 'gusta / gustan', 'Le gustan los libros.'],
          ['a nosotros', 'nos', 'gusta / gustan', 'Nos gusta viajar.'],
          ['a vosotros', 'os', 'gusta / gustan', 'Os gusta el deporte.'],
          ['a ellos / ellas / ustedes', 'les', 'gusta / gustan', 'Les gusta bailar.'],
        ],
      },
      paragraphs: [
        'Il verbo concorda con la cosa che piace, non con la persona: «Me gusta el libro» (singolare), «Me gustan los libros» (plurale). Con un infinito si usa sempre «gusta»: «Me gusta leer».',
      ],
    },
    {
      heading: 'Querer e preferir',
      paragraphs: [
        '«Querer» e «preferir» cambiano la radice in alcune persone. Querer: quiero, quieres, quiere, queremos, queréis, quieren. Preferir: prefiero, prefieres, prefiere, preferimos, preferís, prefieren.',
      ],
      examples: [
        { target: 'Quiero ir al cine.', italian: 'Voglio andare al cinema.' },
        { target: '¿Prefieres quedarte en casa?', italian: 'Preferisci restare a casa?' },
      ],
    },
    {
      heading: 'Ir a + infinito',
      paragraphs: [
        'Per esprimere un piano futuro vicino si usa «ir a» + infinito. «Ir» è irregolare: voy, vas, va, vamos, vais, van.',
      ],
      examples: [
        { target: 'Voy a estudiar español.', italian: 'Sto per studiare / studierò spagnolo.' },
        { target: 'Vamos a cenar juntos.', italian: 'Andiamo a cenare insieme.' },
      ],
    },
  ],
  exercises: [
    mc('Me ___ los libros.', ['gustan', 'gusta', 'gustas', 'gusto'], 0),
    fb('¿Te ___ la música?', ['gusta'], 'Ti piace la musica?'),
    tr('Voglio imparare lo spagnolo.', ['Quiero aprender español.']),
    mc('Nosotros ___ aprender juntos. (querer)', ['queremos', 'quiero', 'quieren', 'queréis'], 0),
    wo('Loro vogliono venire con noi.', ['Ellos', 'quieren', 'venir', 'con', 'nosotros.']),
    fb('Ella ___ (preferir) el cine.', ['prefiere'], 'Lei preferisce il cinema.'),
  ],
  faq: [
    {
      question: 'Perché «me gusta» e non «yo gusto»?',
      answer: 'Perché «gustar» funziona come «piacere» in italiano: il soggetto è ciò che piace. «Yo gusto» significherebbe «io piaccio», che è un\'altra cosa.',
    },
    {
      question: '«Quiero» o «te quiero»?',
      answer: '«Quiero» significa «voglio». «Te quiero» significa «ti voglio bene / ti amo». Il contesto e il pronome cambiano completamente il senso.',
    },
  ],
})

export const esU5 = defineUnit({
  id: 'es-u5',
  title: 'Tempo libero e gusti',
  subtitle: 'Gustar, sport, cinema e piani',
  intro:
    'Parlare di ciò che ti piace è il modo più naturale per conoscere qualcuno. In questa unità impari gustar, i verbi per le attività del tempo libero e le espressioni per invitare una persona e organizzare un piano.',
  keyPoints: [
    'Gustar e i pronomi me/te/le/nos/os/les',
    'Sport, cinema, musica e concerti',
    'Querer e preferir',
    'Ir a + infinito per i piani',
  ],
  theory: [
    {
      heading: 'Gustar: non è «piacere» all\'italiana',
      paragraphs: [
        'In spagnolo «gustar» si costruisce con un pronome indiretto (me, te, le, nos, os, les) e con la cosa che piace come soggetto grammaticale. Il verbo è «gusta» con un singolare o un infinito, «gustan» con un plurale.',
        'Per enfatizzare si aggiunge «a mí», «a ti», «a él»…: «A mí me gusta», «A él le gustan los libros». È una struttura molto frequente e vale anche per verbi simili come «encantar» (piacere moltissimo).',
      ],
      table: {
        headers: ['Italiano', 'Spagnolo'],
        rows: [
          ['Mi piace il cinema.', 'Me gusta el cine.'],
          ['Mi piacciono i film.', 'Me gustan las películas.'],
          ['Mi piace leggere.', 'Me gusta leer.'],
          ['Non mi piace il calcio.', 'No me gusta el fútbol.'],
        ],
      },
    },
    {
      heading: 'Querer, preferir e ir',
      paragraphs: [
        'Questi tre verbi sono irregolari e compaiono continuamente nei piani e negli inviti. La vocale della radice cambia in tutte le persone tranne nosotros e vosotros (querer: quiero…; preferir: prefiero…). «Ir» cambia completamente: voy, vas, va, vamos, vais, van.',
      ],
      table: {
        headers: ['Persona', 'querer', 'preferir', 'ir'],
        rows: [
          ['yo', 'quiero', 'prefiero', 'voy'],
          ['tú', 'quieres', 'prefieres', 'vas'],
          ['él / ella / usted', 'quiere', 'prefiere', 'va'],
          ['nosotros', 'queremos', 'preferimos', 'vamos'],
          ['vosotros', 'queréis', 'preferís', 'vais'],
          ['ellos / ellas / ustedes', 'quieren', 'prefieren', 'van'],
        ],
      },
    },
    {
      heading: 'Invitare e organizzare un piano',
      paragraphs: [
        'Per invitare si usa «¿Quieres…?» + infinito, oppure «¿Vamos a…?». Per accettare: «Sí, me encanta», «Vale», «Perfecto». Per rifiutare con gentilezza: «Lo siento, no puedo», «Otro día».',
        '«Quedar» significa mettersi d\'accordo o incontrarsi: «¿Quedamos a las ocho?». «Quedarse» significa restare: «Me quedo en casa». Non confonderli.',
      ],
      examples: [
        { target: '¿Quieres ir al cine conmigo?', italian: 'Vuoi andare al cinema con me?' },
        { target: 'Vamos a cenar a las nueve.', italian: 'Andiamo a cena alle nove.' },
        { target: 'Lo siento, no puedo. ¿Quedamos mañana?', italian: 'Mi dispiace, non posso. Ci vediamo domani?' },
      ],
    },
  ],
  lessons: [esU5L1, esU5L2, esU5L3],
  grammar: [esU5G1],
})
