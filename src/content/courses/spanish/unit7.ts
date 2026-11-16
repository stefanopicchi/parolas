import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU7L1 = defineLesson({
  id: 'es-u7-l1',
  title: 'In viaggio: trasporti e biglietti',
  subtitle: 'Tren, autobús, avión',
  objectives: [
    'Nominare i mezzi di trasporto',
    'Comprare un biglietto e chiedere informazioni',
    'Parlare di partenze e arrivi',
  ],
  vocab: [
    { term: 'el tren', translation: 'il treno' },
    { term: 'el autobús', translation: "l'autobus" },
    { term: 'el avión', translation: "l'aereo" },
    { term: 'el billete', translation: 'il biglietto' },
    { term: 'la estación', translation: 'la stazione' },
    { term: 'el aeropuerto', translation: "l'aeroporto" },
    { term: 'el andén', translation: 'il binario' },
    { term: 'la maleta', translation: 'la valigia' },
    { term: 'el pasaporte', translation: 'il passaporto' },
    { term: 'la reserva', translation: 'la prenotazione' },
  ],
  exercises: [
    mc('Come si dice «il treno»?', ['el tren', 'el autobús', 'el avión', 'el coche'], 0),
    fb('Quiero un ___ de ida y vuelta.', ['billete'], 'Voglio un biglietto andata e ritorno.'),
    tr("Dov'è la stazione?", ['¿Dónde está la estación?']),
    wo('Il treno parte alle nove.', ['El', 'tren', 'sale', 'a', 'las', 'nueve.']),
    li(
      'El tren para Barcelona sale del andén tres a las nueve.',
      'Da quale binario parte?',
      ['Dal binario tre', 'Dal binario nove', 'Dal binario uno', 'Dal binario cinque'],
      0,
    ),
    mc('«El avión» significa…', ["l'aereo", 'il treno', 'la nave', "l'autobus"], 0),
    fb('¿A qué hora ___ (salir) el autobús?', ['sale'], "A che ora parte l'autobus?"),
    tr('Devo prendere un taxi.', ['Tengo que tomar un taxi.', 'Debo tomar un taxi.']),
    mc(
      'Scegli la frase corretta.',
      [
        'El billete está en el bolsillo.',
        'La billete está en el bolsillo.',
        'El billete están en el bolsillo.',
        'El billetes está en el bolsillo.',
      ],
      0,
    ),
    wo('Ho una valigia e un passaporto.', ['Tengo', 'una', 'maleta', 'y', 'un', 'pasaporte.']),
  ],
  faq: [
    {
      question: '«Billete» o «boleto»?',
      answer: 'In Spagna si dice «el billete»; in molti paesi dell\'America Latina si usa «el boleto», soprattutto per i trasporti urbani.',
    },
    {
      question: 'Come si dice «andata e ritorno»?',
      answer: '«Ida y vuelta». Solo andata è «solo ida». Per il treno si può anche chiedere «un billete de ida y vuelta».',
    },
  ],
})

const esU7L2 = defineLesson({
  id: 'es-u7-l2',
  title: 'Hotel e prenotazioni',
  subtitle: 'Habitación, llave, desayuno',
  objectives: [
    'Prenotare una camera',
    'Chiedere informazioni sull\'hotel',
    'Usare il lessico del soggiorno',
  ],
  vocab: [
    { term: 'el hotel', translation: "l'hotel" },
    { term: 'la habitación', translation: 'la camera' },
    { term: 'la reserva', translation: 'la prenotazione' },
    { term: 'la llave', translation: 'la chiave' },
    { term: 'el recepcionista', translation: 'il receptionist' },
    { term: 'la cama doble', translation: 'il letto matrimoniale' },
    { term: 'el desayuno incluido', translation: 'la colazione inclusa' },
    { term: 'la noche', translation: 'la notte' },
    { term: 'libre', translation: 'libero' },
    { term: 'el ascensor', translation: "l'ascensore" },
  ],
  exercises: [
    mc(
      'Come chiedi «avete una camera libera?»',
      [
        '¿Tienen una habitación libre?',
        '¿Tienen una habitación ocupada?',
        '¿Dónde está la habitación?',
        '¿Cuánto cuesta el desayuno?',
      ],
      0,
    ),
    fb('He ___ una habitación doble.', ['reservado'], 'Ho prenotato una camera doppia.'),
    tr('Vorrei una camera per due notti.', [
      'Quiero una habitación para dos noches.',
      'Quisiera una habitación para dos noches.',
    ]),
    wo('La colazione è inclusa.', ['El', 'desayuno', 'está', 'incluido.']),
    li(
      'La habitación está en el tercer piso y tiene vistas al mar.',
      'Dove si trova la camera?',
      ['Al terzo piano', 'Al primo piano', 'Al piano terra', 'In cantina'],
      0,
    ),
    mc('«La llave» è…', ['la chiave', 'la camera', 'la prenotazione', "l'ascensore"], 0),
    fb('¿A qué hora ___ (ser) el desayuno?', ['es'], 'A che ora è la colazione?'),
    tr("L'hotel è vicino alla spiaggia.", ['El hotel está cerca de la playa.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Hemos reservado dos habitaciones.',
        'Hemos reservado dos habitación.',
        'Hemos reservada dos habitaciones.',
        'Hemos reservado dos habitacións.',
      ],
      0,
    ),
    wo('Possiamo lasciare le valigie qui?', [
      '¿Podemos',
      'dejar',
      'las',
      'maletas',
      'aquí?',
    ]),
  ],
  faq: [
    {
      question: 'Come si chiede una camera con letto matrimoniale?',
      answer: '«Una habitación con cama de matrimonio» oppure «una habitación doble». Se vuoi due letti separati: «una habitación con dos camas».',
    },
    {
      question: '«Habitación» e «cuarto»?',
      answer: '«Habitación» è la parola standard per camera d\'hotel o stanza. «Cuarto» è più colloquiale e in Spagna indica spesso una stanza qualsiasi, anche il bagno in alcune espressioni.',
    },
  ],
})

const esU7L3 = defineLesson({
  id: 'es-u7-l3',
  title: 'Raccontare un viaggio',
  subtitle: 'El año pasado fui a…',
  objectives: [
    'Raccontare un viaggio al passato',
    'Usare il pretérito indefinido',
    'Collocare gli eventi nel tempo',
  ],
  vocab: [
    { term: 'el año pasado', translation: "l'anno scorso" },
    { term: 'las vacaciones', translation: 'le vacanze' },
    { term: 'el viaje', translation: 'il viaggio' },
    { term: 'visitar', translation: 'visitare' },
    { term: 'llegar', translation: 'arrivare' },
    { term: 'volver', translation: 'tornare' },
    { term: 'durar', translation: 'durare' },
    { term: 'el paisaje', translation: 'il paesaggio' },
    { term: 'el recuerdo', translation: 'il ricordo' },
    { term: 'conocer', translation: 'conoscere' },
  ],
  exercises: [
    mc(
      '«El año pasado» significa…',
      ["l'anno scorso", "l'anno prossimo", 'quest\'anno', 'due anni fa'],
      0,
    ),
    fb('El verano pasado ___ (viajar) a Sevilla.', ['viajé'], "L'estate scorsa ho viaggiato a Siviglia."),
    tr("L'anno scorso sono andato in Spagna.", [
      'El año pasado fui a España.',
      'El año pasado viajé a España.',
    ]),
    wo('Abbiamo visitato un museo molto bello.', [
      'Visitamos',
      'un',
      'museo',
      'muy',
      'bonito.',
    ]),
    li(
      'El viaje duró cinco días y volvimos el domingo.',
      'Quanto è durato il viaggio?',
      ['Cinque giorni', 'Tre giorni', 'Una settimana', 'Un mese'],
      0,
    ),
    mc('Il passato di «ir» (noi) è…', ['fuimos', 'imos', 'vamos', 'iremos'], 0),
    fb('Ellos ___ (llegar) ayer por la tarde.', ['llegaron'], 'Sono arrivati ieri pomeriggio.'),
    tr('Il paesaggio era bellissimo.', [
      'El paisaje era precioso.',
      'El paisaje era muy bonito.',
    ]),
    mc(
      'Scegli la frase corretta.',
      [
        'Ayer visité la catedral.',
        'Ayer visité a la catedral.',
        'Ayer visito la catedral.',
        'Ayer visité la catedral ayer.',
      ],
      0,
    ),
    wo('Sono tornato a casa stanco ma felice.', [
      'Volví',
      'a',
      'casa',
      'cansado',
      'pero',
      'feliz.',
    ]),
  ],
  faq: [
    {
      question: 'Quando si usa il pretérito indefinido?',
      answer: 'Per azioni concluse e collocate in un momento preciso del passato: «Ayer fui al cine», «El año pasado visité Sevilla». Spesso compare con marcatori come ayer, la semana pasada, en 2019.',
    },
    {
      question: '«Fui» significa «sono stato» o «sono andato»?',
      answer: 'Entrambi: «fui» è il passato di «ser» e di «ir», che hanno le stesse forme. Il contesto chiarisce se significa «sono stato» o «sono andato».',
    },
  ],
})

const esU7G1 = defineTopic({
  id: 'es-u7-g1',
  title: 'Il pretérito indefinido',
  subtitle: 'Il passato concluso: regolari e irregolari',
  intro:
    'Il pretérito indefinido è il passato delle azioni concluse: ieri, la settimana scorsa, nel 2019. Si usa per raccontare eventi puntuali e sequenze di fatti, ed è essenziale per parlare di viaggi.',
  sections: [
    {
      heading: 'Forme regolari',
      paragraphs: [
        'I verbi in -ar prendono -é, -aste, -ó, -amos, -asteis, -aron. I verbi in -er e -ir condividono le stesse desinenze: -í, -iste, -ió, -imos, -isteis, -ieron.',
        'Attenzione agli accenti: «hablé» e «hablo» sono tempi diversi; «comió» e «comio» non esistono come forme distinte, ma l\'accento è obbligatorio. Noi e voi non hanno accento: hablamos, comimos.',
      ],
      table: {
        headers: ['Persona', 'hablar', 'comer', 'vivir'],
        rows: [
          ['yo', 'hablé', 'comí', 'viví'],
          ['tú', 'hablaste', 'comiste', 'viviste'],
          ['él / ella / usted', 'habló', 'comió', 'vivió'],
          ['nosotros', 'hablamos', 'comimos', 'vivimos'],
          ['vosotros', 'hablasteis', 'comisteis', 'vivisteis'],
          ['ellos / ellas / ustedes', 'hablaron', 'comieron', 'vivieron'],
        ],
      },
      examples: [
        { target: 'Ayer hablé con Ana.', italian: 'Ieri ho parlato con Ana.' },
        { target: 'Comimos en un restaurante.', italian: 'Abbiamo mangiato in un ristorante.' },
        { target: 'Vivieron en Madrid dos años.', italian: 'Hanno vissuto a Madrid due anni.' },
      ],
    },
    {
      heading: 'Irregolari frequenti',
      paragraphs: [
        'Molti verbi molto comuni sono irregolari e vanno memorizzati. «Ser» e «ir» hanno le stesse forme: fui, fuiste, fue, fuimos, fuisteis, fueron. «Tener» fa tuve, «estar» estuve, «hacer» hice, «poder» pude, «querer» quise, «venir» vine, «decir» dije.',
        'Le desinenze degli irregolari forti non portano l\'accento grafico: «tuve», «estuvo», «hizo». È una differenza importante rispetto ai regolari.',
      ],
      table: {
        headers: ['Verbo', 'yo', 'tú', 'él / ella', 'nosotros', 'ellos'],
        rows: [
          ['ser / ir', 'fui', 'fuiste', 'fue', 'fuimos', 'fueron'],
          ['tener', 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron'],
          ['estar', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron'],
          ['hacer', 'hice', 'hiciste', 'hizo', 'hicimos', 'hicieron'],
          ['poder', 'pude', 'pudiste', 'pudo', 'pudimos', 'pudieron'],
          ['decir', 'dije', 'dijiste', 'dijo', 'dijimos', 'dijeron'],
        ],
      },
    },
    {
      heading: 'Marcatori temporali',
      paragraphs: [
        'Il pretérito indefinido si accompagna spesso a espressioni che chiudono l\'azione nel passato: ayer, anoche, la semana pasada, el mes pasado, el año pasado, hace dos años, en 2019, el verano pasado.',
        'Non è obbligatorio usarli, ma aiutano a capire il contesto. Se il momento non è precisato, lo spagnolo può scegliere tra indefinido e imperfecto a seconda che l\'azione sia vista come conclusa o come sfondo.',
      ],
      examples: [
        { target: 'El año pasado viajé a México.', italian: "L'anno scorso ho viaggiato in Messico." },
        { target: 'Anoche vimos una película.', italian: 'Ieri sera abbiamo visto un film.' },
        { target: 'Hace dos años conocí a María.', italian: 'Due anni fa ho conosciuto María.' },
      ],
    },
    {
      heading: 'Indefinido e imperfecto: prima distinzione',
      paragraphs: [
        'L\'indefinido racconta il fatto concluso: «Ayer fui al museo». L\'imperfecto descrive lo sfondo, le abitudini e le circostanze: «Cuando era niño, vivía en Roma». Spesso i due tempi convivono nello stesso racconto.',
      ],
      examples: [
        { target: 'Ayer fui al museo. Hacía frío y había poca gente.', italian: 'Ieri sono andato al museo. Faceva freddo e c\'era poca gente.' },
        { target: 'Cuando vivía en Sevilla, iba a la playa todos los días.', italian: 'Quando vivevo a Siviglia, andavo in spiaggia ogni giorno.' },
      ],
    },
  ],
  exercises: [
    mc('Ayer ___ (hablar) con Ana.', ['hablé', 'hablo', 'hablaba', 'hablaré'], 0),
    fb('Nosotros ___ (comer) en un restaurante.', ['comimos'], 'Abbiamo mangiato in un ristorante.'),
    tr('Sono andato al museo.', ['Fui al museo.']),
    mc('Loro ___ (vivir) en Madrid dos años.', ['vivieron', 'vivían', 'viven', 'vivirán'], 0),
    wo('La settimana scorsa ho visitato Siviglia.', [
      'La',
      'semana',
      'pasada',
      'visité',
      'Sevilla.',
    ]),
    fb('Ella ___ (tener) un problema ayer.', ['tuvo'], 'Ieri ha avuto un problema.'),
  ],
  faq: [
    {
      question: '«Hablamos» è presente o passato?',
      answer: 'Può essere entrambi: «hablamos» è la forma di noi al presente e anche al pretérito indefinido. Il contesto e i marcatori temporali chiariscono il senso.',
    },
    {
      question: 'Perché «fui» ha due significati?',
      answer: 'Perché «ser» e «ir» condividono le stesse forme nel pretérito indefinido. «Fui a Madrid» significa «sono andato a Madrid»; «fui feliz» significa «sono stato felice».',
    },
  ],
})

export const esU7 = defineUnit({
  id: 'es-u7',
  title: 'Viaggi',
  subtitle: 'Trasporti, hotel e racconto al passato',
  intro:
    'Viaggiare richiede lessico preciso e un passato chiaro. In questa unità impari a muoverti tra stazioni e aeroporti, a prenotare una camera e a raccontare un viaggio con il pretérito indefinido, il tempo delle azioni concluse.',
  keyPoints: [
    'Trasporti e biglietti',
    'Hotel, camere e prenotazioni',
    'Pretérito indefinido regolare',
    'Irregolari frequenti e marcatori temporali',
  ],
  theory: [
    {
      heading: 'Muoversi: mezzi e biglietti',
      paragraphs: [
        'I mezzi principali sono «el tren», «el autobús», «el avión», «el coche» e «el metro». I luoghi di partenza e arrivo sono «la estación», «el aeropuerto» e «la parada» (la fermata). Il binario è «el andén»; il gate è «la puerta».',
        'Per comprare un biglietto: «Quiero un billete de ida y vuelta a Barcelona». Per chiedere informazioni: «¿A qué hora sale el tren?», «¿De qué andén sale?», «¿Cuánto tarda el viaje?». «Tardar» indica la durata: «El viaje tarda dos horas».',
        '«Tener que» + infinito esprime obbligo personale: «Tengo que tomar un taxi». «Hay que» + infinito esprime obbligo impersonale: «Hay que llegar temprano». Sono due strutture da non confondere.',
      ],
      examples: [
        { target: '¿De qué andén sale el tren para Sevilla?', italian: 'Da quale binario parte il treno per Siviglia?' },
        { target: 'Tengo que facturar la maleta.', italian: 'Devo imbarcare la valigia.' },
        { target: 'El vuelo sale a las seis de la mañana.', italian: 'Il volo parte alle sei del mattino.' },
      ],
    },
    {
      heading: 'In hotel: prenotare e sistemarsi',
      paragraphs: [
        'Alla reception si usa spesso il condizionale di cortesia: «Quisiera reservar una habitación». Per chiedere disponibilità: «¿Tienen una habitación libre?». Per precisare: «una habitación doble», «con dos camas», «para dos noches».',
        'Espressioni utili: «¿El desayuno está incluido?», «¿A qué hora es la salida?» (check-out), «¿Puedo dejar las maletas aquí?», «¿Hay ascensor?». La chiave è «la llave»; la camera è «la habitación»; il piano è «el piso».',
        'Per parlare del soggiorno al passato si usa l\'indefinido: «Reservé una habitación», «Llegué el viernes», «Volvimos el domingo».',
      ],
      examples: [
        { target: 'Quisiera reservar una habitación para dos noches.', italian: 'Vorrei prenotare una camera per due notti.' },
        { target: '¿El desayuno está incluido en el precio?', italian: 'La colazione è inclusa nel prezzo?' },
        { target: 'Dejamos las maletas en la recepción.', italian: 'Lasciamo le valigie alla reception.' },
      ],
    },
    {
      heading: 'Raccontare: il pretérito indefinido',
      paragraphs: [
        'Per raccontare un viaggio concluso si usa il pretérito indefinido. Le forme regolari sono hablé, hablaste, habló, hablamos, hablasteis, hablaron per i verbi in -ar; comí, comiste, comió, comimos, comisteis, comieron per -er e -ir.',
        'Molti verbi di movimento sono irregolari: ir/ser → fui, fuiste, fue, fuimos, fueron; tener → tuve; estar → estuve; hacer → hice; poder → pude; querer → quise; venir → vine. Sono forme da riconoscere rapidamente, perché ricorrono in ogni racconto.',
        'I marcatori tipici sono «ayer», «anoche», «la semana pasada», «el año pasado», «hace dos años». Servono a chiudere l\'azione in un momento preciso e rendono naturale l\'uso dell\'indefinido.',
      ],
      table: {
        headers: ['Persona', 'viajar', 'comer', 'vivir'],
        rows: [
          ['yo', 'viajé', 'comí', 'viví'],
          ['tú', 'viajaste', 'comiste', 'viviste'],
          ['él / ella / usted', 'viajó', 'comió', 'vivió'],
          ['nosotros', 'viajamos', 'comimos', 'vivimos'],
          ['vosotros', 'viajasteis', 'comisteis', 'vivisteis'],
          ['ellos / ellas / ustedes', 'viajaron', 'comieron', 'vivieron'],
        ],
      },
      examples: [
        { target: 'El año pasado viajé a España con mis amigos.', italian: "L'anno scorso ho viaggiato in Spagna con i miei amici." },
        { target: 'Visitamos la Alhambra y nos encantó.', italian: 'Abbiamo visitato l\'Alhambra e ci è piaciuta moltissimo.' },
        { target: 'Volvimos a casa cansados pero felices.', italian: 'Siamo tornati a casa stanchi ma felici.' },
      ],
    },
  ],
  lessons: [esU7L1, esU7L2, esU7L3],
  grammar: [esU7G1],
})
