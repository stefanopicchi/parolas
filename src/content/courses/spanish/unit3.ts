import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU3L1 = defineLesson({
  id: 'es-u3-l1',
  title: 'La giornata e i verbi regolari',
  subtitle: 'Presente indicativo: -ar, -er, -ir',
  objectives: [
    'Descrivere la propria giornata',
    'Coniugare i verbi regolari al presente',
    'Formare frasi negative e domande',
  ],
  vocab: [
    { term: 'levantarse', translation: 'alzarsi' },
    { term: 'desayunar', translation: 'fare colazione' },
    { term: 'trabajar', translation: 'lavorare' },
    { term: 'estudiar', translation: 'studiare' },
    { term: 'comer', translation: 'mangiare' },
    { term: 'cenar', translation: 'cenare' },
    { term: 'dormir', translation: 'dormire' },
    { term: 'todos los días', translation: 'ogni giorno' },
  ],
  exercises: [
    mc('Yo ___ español todos los días.', ['estudio', 'estudias', 'estudia', 'estudian'], 0),
    fb('Ella ___ (trabajar) en un hospital.', ['trabaja'], 'Lei lavora in un ospedale.'),
    tr('Mi alzo alle sette.', ['Me levanto a las siete.', 'Me levanto a las 7.']),
    wo('Faccio colazione alle otto del mattino.', ['Desayuno', 'a', 'las', 'ocho', 'de', 'la', 'mañana.']),
    li(
      'Trabajo de lunes a viernes y estudio inglés por la noche.',
      'Quando studia l\'inglese?',
      ['La sera', 'La mattina', 'Il pomeriggio', 'Il fine settimana'],
      0,
    ),
    mc('Nosotros ___ a las once. (dormir)', ['dormimos', 'duermen', 'duermo', 'dormís'], 0),
    fb('Tú ___ (comer) a las dos.', ['comes'], 'Tu mangi alle due.'),
    tr('Loro vivono a Madrid.', ['Ellos viven en Madrid.']),
    mc(
      'Scegli la frase corretta.',
      [
        'No trabajo los domingos.',
        'No trabajo en los domingos.',
        'No yo trabajo los domingos.',
        'No trabajas los domingos.',
      ],
      0,
    ),
    wo('Noi studiamo spagnolo ogni giorno.', ['Nosotros', 'estudiamos', 'español', 'todos', 'los', 'días.']),
  ],
  faq: [
    {
      question: 'Come riconosco un verbo regolare?',
      answer: 'Se la radice non cambia e le desinenze seguono il modello di hablar, comer o vivir, il verbo è regolare. I verbi irregolari modificano la radice o la desinenza.',
    },
    {
      question: 'Il pronome soggetto è obbligatorio?',
      answer: 'No. La desinenza dice già chi compie l\'azione: «trabajo» = io lavoro. Il pronome si usa per enfasi o per evitare ambiguità.',
    },
  ],
})

const esU3L2 = defineLesson({
  id: 'es-u3-l2',
  title: 'Orari e verbi riflessivi',
  subtitle: 'A las siete, me levanto',
  objectives: [
    'Dire l\'ora e parlare di orari',
    'Usare i verbi riflessivi della routine',
    'Collocare le azioni nella giornata',
  ],
  vocab: [
    { term: 'a la una', translation: "all'una" },
    { term: 'a las dos', translation: 'alle due' },
    { term: 'y media', translation: 'e mezza' },
    { term: 'por la mañana', translation: 'di mattina' },
    { term: 'por la tarde', translation: 'di pomeriggio' },
    { term: 'por la noche', translation: 'di sera / di notte' },
    { term: 'temprano', translation: 'presto' },
    { term: 'tarde', translation: 'tardi' },
  ],
  exercises: [
    mc('Come si dice «alle sette»?', ['a las siete', 'a la siete', 'en las siete', 'las siete a'], 0),
    fb('Me ___ (levantar) a las seis.', ['levanto'], 'Mi alzo alle sei.'),
    tr('Mi sveglio presto ogni giorno.', ['Me despierto temprano todos los días.']),
    wo('Lei si alza alle otto.', ['Ella', 'se', 'levanta', 'a', 'las', 'ocho.']),
    li(
      'Normalmente me levanto a las siete y desayuno a las ocho.',
      'A che ora fa colazione?',
      ['Alle otto', 'Alle sette', 'Alle nove', 'Non fa colazione'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      [
        '¿A qué hora te levantas?',
        '¿A qué hora te levanto?',
        '¿A qué hora se levantas?',
        '¿A qué hora te levanta?',
      ],
      0,
    ),
    fb('Nosotros ___ (acostarse) a las once.', ['nos acostamos'], 'Andiamo a letto alle undici.'),
    tr('Di sera guardo la TV.', ['Por la noche veo la tele.', 'Por la noche miro la televisión.']),
    mc('«Temprano» significa…', ['presto', 'tardi', 'sempre', 'mai'], 0),
    wo('Io mi alzo tardi la domenica.', ['Yo', 'me', 'levanto', 'tarde', 'los', 'domingos.']),
  ],
  faq: [
    {
      question: 'Come funzionano i verbi riflessivi?',
      answer: 'Il pronome riflessivo cambia con la persona: me, te, se, nos, os, se. Si mette prima del verbo coniugato: «me levanto», «te levantas», «se levanta».',
    },
    {
      question: 'Perché «a la una» e non «a las una»?',
      answer: 'Perché «una» è singolare. Tutte le altre ore usano il plurale: «a las dos», «a las tres».',
    },
  ],
})

const esU3L3 = defineLesson({
  id: 'es-u3-l3',
  title: 'Famiglia, tener e possessivi',
  subtitle: 'Tengo due hermanos, mi madre…',
  objectives: [
    'Presentare la propria famiglia',
    'Usare tener per possesso ed età',
    'Scegliere i possessivi giusti',
  ],
  vocab: [
    { term: 'la madre', translation: 'la madre' },
    { term: 'el padre', translation: 'il padre' },
    { term: 'el hermano / la hermana', translation: 'il fratello / la sorella' },
    { term: 'los hijos', translation: 'i figli' },
    { term: 'los abuelos', translation: 'i nonni' },
    { term: 'tener', translation: 'avere' },
    { term: 'mayor', translation: 'più grande, maggiore' },
    { term: 'pequeño / pequeña', translation: 'piccolo / piccola' },
  ],
  exercises: [
    mc('Tengo dos ___. (fratelli)', ['hermanos', 'hermana', 'hermanas', 'hermano'], 0),
    fb('Mi hermana ___ (tener) veinte años.', ['tiene'], 'Mia sorella ha vent\'anni.'),
    tr('Ho una famiglia grande.', ['Tengo una familia grande.']),
    wo('I miei nonni vivono in campagna.', ['Mis', 'abuelos', 'viven', 'en', 'el', 'campo.']),
    li(
      'Tengo un hermano mayor y una hermana pequeña.',
      'Chi è più grande?',
      ['Il fratello', 'La sorella', 'I nonni', 'Nessuno'],
      0,
    ),
    mc('___ padres son profesores. (i miei)', ['Mis', 'Mi', 'Mías', 'Míos'], 0),
    fb('Yo ___ (tener) veinte años.', ['tengo'], 'Ho vent\'anni.'),
    tr('Mia madre ha due fratelli.', ['Mi madre tiene dos hermanos.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Nuestros abuelos viven aquí.',
        'Nuestro abuelos viven aquí.',
        'Nuestras abuelos viven aquí.',
        'Nuestros abuelo viven aquí.',
      ],
      0,
    ),
    wo('Mio cugino è più giovane di me.', ['Mi', 'primo', 'es', 'más', 'joven', 'que', 'yo.']),
  ],
  faq: [
    {
      question: 'Come si dice l\'età?',
      answer: 'Con «tener»: «Tengo veinte años». Non si usa «ser» come in inglese.',
    },
    {
      question: '«Mi» o «mis»?',
      answer: '«Mi» davanti al singolare (mi madre), «mis» davanti al plurale (mis hermanos). Lo stesso vale per tu/tus e su/sus.',
    },
  ],
})

const esU3G1 = defineTopic({
  id: 'es-u3-g1',
  title: 'Presente indicativo regolare',
  subtitle: 'Le tre coniugazioni: -ar, -er, -ir',
  intro:
    'I verbi spagnoli si dividono in tre gruppi in base all\'infinito: -ar, -er, -ir. Al presente indicativo prendono desinenze diverse per ogni persona.',
  sections: [
    {
      heading: 'Le desinenze',
      table: {
        headers: ['Persona', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
        rows: [
          ['yo', 'hablo', 'como', 'vivo'],
          ['tú', 'hablas', 'comes', 'vives'],
          ['él / ella / usted', 'habla', 'come', 'vive'],
          ['nosotros', 'hablamos', 'comemos', 'vivimos'],
          ['vosotros', 'habláis', 'coméis', 'vivís'],
          ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven'],
        ],
      },
      examples: [
        { target: 'Hablo español e inglés.', italian: 'Parlo spagnolo e inglese.' },
        { target: '¿Dónde vives?', italian: 'Dove vivi?' },
        { target: 'Comemos a las dos.', italian: 'Mangiamo alle due.' },
      ],
    },
    {
      heading: 'Negazione e domande',
      paragraphs: [
        'Basta mettere «no» davanti al verbo coniugato; non servono ausiliari. Per le domande spesso l\'ordine resta uguale e cambia solo l\'intonazione, con ¿ … ? nello scritto.',
      ],
      examples: [
        { target: 'No trabajo los domingos.', italian: 'Non lavoro la domenica.' },
        { target: '¿Estudias español?', italian: 'Studi spagnolo?' },
        { target: '¿Dónde trabajas?', italian: 'Dove lavori?' },
      ],
    },
    {
      heading: 'Verbi riflessivi',
      paragraphs: [
        'Molti verbi della routine sono riflessivi: levantarse, despertarse, acostarse, ducharse. Il pronome (me, te, se, nos, os, se) precede il verbo coniugato.',
      ],
      table: {
        headers: ['Persona', 'levantarse'],
        rows: [
          ['yo', 'me levanto'],
          ['tú', 'te levantas'],
          ['él / ella / usted', 'se levanta'],
          ['nosotros', 'nos levantamos'],
          ['vosotros', 'os levantáis'],
          ['ellos / ellas / ustedes', 'se levantan'],
        ],
      },
    },
  ],
  exercises: [
    mc('Tú ___ en Madrid. (vivir)', ['vives', 'vivo', 'vive', 'vivimos'], 0),
    fb('Nosotros ___ (comer) a las dos.', ['comemos'], 'Mangiamo alle due.'),
    tr('Parlo spagnolo e inglese.', ['Hablo español e inglés.']),
    mc('Scegli la forma corretta: ellos ___ (aprender)', ['aprenden', 'aprendemos', 'aprendéis', 'aprende'], 0),
    wo('Lei non lavora la domenica.', ['Ella', 'no', 'trabaja', 'los', 'domingos.']),
    fb('Yo ___ (levantarse) a las siete.', ['me levanto'], 'Mi alzo alle sette.'),
  ],
  faq: [
    {
      question: 'Come faccio a sapere se un verbo è regolare?',
      answer: 'Guarda l\'infinito: se mantiene la stessa radice in tutte le persone, è regolare. I verbi irregolari cambiano radice o desinenza.',
    },
    {
      question: '«Vosotros» si usa in America Latina?',
      answer: 'Poco. In America Latina si preferisce «ustedes» anche in contesti informali. In Spagna «vosotros» è normale tra amici.',
    },
  ],
})

export const esU3 = defineUnit({
  id: 'es-u3',
  title: 'Vita quotidiana',
  subtitle: 'Routine, orari, famiglia e presente regolare',
  intro:
    'Questa unità ti dà gli strumenti per raccontare la tua giornata: che cosa fai, a che ora, con chi vivi e quanti anni hai. Il presente regolare e i verbi riflessivi sono il motore di quasi ogni conversazione quotidiana.',
  keyPoints: [
    'Presente dei verbi in -ar, -er, -ir',
    'Verbi riflessivi della routine',
    'Ore e momenti della giornata',
    'Tener, età e possessivi',
  ],
  theory: [
    {
      heading: 'Il presente regolare',
      paragraphs: [
        'Il presente indicativo si usa per azioni abituali, descrizioni e verità generali. Le desinenze cambiano in base alla coniugazione. Per i verbi in -ar: -o, -as, -a, -amos, -áis, -an. Per quelli in -er: -o, -es, -e, -emos, -éis, -en. Per quelli in -ir: -o, -es, -e, -imos, -ís, -en.',
        'La negazione è semplice: «no» prima del verbo. Non esistono ausiliari come il «do» inglese. Per le domande si usa l\'intonazione o si mette il pronome interrogativo all\'inizio.',
      ],
      table: {
        headers: ['Persona', 'trabajar', 'comer', 'vivir'],
        rows: [
          ['yo', 'trabajo', 'como', 'vivo'],
          ['tú', 'trabajas', 'comes', 'vives'],
          ['él / ella / usted', 'trabaja', 'come', 'vive'],
          ['nosotros', 'trabajamos', 'comemos', 'vivimos'],
          ['vosotros', 'trabajáis', 'coméis', 'vivís'],
          ['ellos / ellas / ustedes', 'trabajan', 'comen', 'viven'],
        ],
      },
    },
    {
      heading: 'Routine e verbi riflessivi',
      paragraphs: [
        'I verbi riflessivi descrivono azioni che ricadono sul soggetto: alzarsi, lavarsi, vestirsi, addormentarsi. In spagnolo il pronome riflessivo si mette prima del verbo coniugato: «me levanto», «te duchas», «se acuesta».',
        'Con i verbi modali o con «ir a», il pronome può restare attaccato all\'infinito: «voy a levantarme» oppure «me voy a levantar». Entrambe le forme sono corrette.',
      ],
      examples: [
        { target: 'Me levanto a las siete y desayuno a las ocho.', italian: 'Mi alzo alle sette e faccio colazione alle otto.' },
        { target: '¿A qué hora te acuestas?', italian: 'A che ora vai a letto?' },
        { target: 'Los domingos no trabajo.', italian: 'La domenica non lavoro.' },
      ],
    },
    {
      heading: 'Ore, tener e possessivi',
      paragraphs: [
        'Per l\'ora si usa «son las…» tranne con l\'una: «es la una». «A las…» significa «alle…». «Y media» = e mezza, «y cuarto» = e un quarto, «menos cuarto» = meno un quarto.',
        '«Tener» significa avere e si usa anche per l\'età: «Tengo veinte años». I possessivi davanti al nome sono mi/mis, tu/tus, su/sus, nuestro/nuestra/nuestros/nuestras.',
      ],
      table: {
        headers: ['Persona', 'tener', 'Possessivo'],
        rows: [
          ['yo', 'tengo', 'mi / mis'],
          ['tú', 'tienes', 'tu / tus'],
          ['él / ella / usted', 'tiene', 'su / sus'],
          ['nosotros', 'tenemos', 'nuestro / nuestra / nuestros / nuestras'],
          ['vosotros', 'tenéis', 'vuestro / vuestra / vuestros / vuestras'],
          ['ellos / ellas / ustedes', 'tienen', 'su / sus'],
        ],
      },
    },
  ],
  lessons: [esU3L1, esU3L2, esU3L3],
  grammar: [esU3G1],
})
