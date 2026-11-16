import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU8L1 = defineLesson({
  id: 'es-u8-l1',
  title: 'Corpo e salute',
  subtitle: 'Me duele la cabeza',
  objectives: [
    'Nominare le parti del corpo',
    'Dire che cosa ti fa male',
    'Descrivere sintomi e stati di salute',
  ],
  vocab: [
    { term: 'la cabeza', translation: 'la testa' },
    { term: 'el brazo', translation: 'il braccio' },
    { term: 'la pierna', translation: 'la gamba' },
    { term: 'la espalda', translation: 'la schiena' },
    { term: 'el estómago', translation: 'lo stomaco' },
    { term: 'la garganta', translation: 'la gola' },
    { term: 'doler', translation: 'fare male' },
    { term: 'la fiebre', translation: 'la febbre' },
    { term: 'el dolor', translation: 'il dolore' },
    { term: 'el médico / la médica', translation: 'il medico' },
  ],
  exercises: [
    mc('Come si dice «la testa»?', ['la cabeza', 'el brazo', 'la pierna', 'la espalda'], 0),
    fb('Me ___ la cabeza. (doler)', ['duele'], 'Mi fa male la testa.'),
    tr('Ho mal di gola.', ['Me duele la garganta.']),
    wo('Devo andare dal medico.', ['Tengo', 'que', 'ir', 'al', 'médico.']),
    li(
      'Ayer fui al médico porque tenía fiebre y me dolía el estómago.',
      'Perché è andato dal medico?',
      ['Per febbre e mal di stomaco', 'Per mal di testa', 'Per un raffreddore', 'Per un infortunio'],
      0,
    ),
    mc('«La espalda» è…', ['la schiena', 'il braccio', 'la gamba', 'lo stomaco'], 0),
    fb('¿Te ___ (doler) los pies?', ['duelen'], 'Ti fanno male i piedi?'),
    tr('Mi sento meglio, grazie.', ['Me siento mejor, gracias.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Me duele la garganta.',
        'Me duelen la garganta.',
        'Me duele las gargantas.',
        'Mi duele la garganta.',
      ],
      0,
    ),
    wo('Ho bisogno di un medico.', ['Necesito', 'un', 'médico.']),
  ],
  faq: [
    {
      question: 'Come funziona «doler»?',
      answer: 'Funziona come «gustar»: la parte del corpo è il soggetto. «Me duele la cabeza» (singolare), «Me duelen los pies» (plurale). Il pronome cambia con la persona: me, te, le, nos, os, les.',
    },
    {
      question: 'Come si dice «sono raffreddato»?',
      answer: '«Estoy resfriado» (uomo) o «Estoy resfriada» (donna). Per il raffreddore: «Tengo un resfriado».',
    },
  ],
})

const esU8L2 = defineLesson({
  id: 'es-u8-l2',
  title: 'Obblighi e consigli',
  subtitle: 'Tener que, hay que, deberías',
  objectives: [
    'Esprimere obblighi personali e impersonali',
    'Dare consigli in modo gentile',
    'Usare le perifrasi più comuni',
  ],
  vocab: [
    { term: 'tener que + infinito', translation: 'dovere (obbligo personale)' },
    { term: 'hay que + infinito', translation: 'bisogna (obbligo impersonale)' },
    { term: 'deber', translation: 'dovere' },
    { term: 'deberías', translation: 'dovresti' },
    { term: 'es mejor', translation: 'è meglio' },
    { term: 'te recomiendo', translation: 'ti consiglio' },
    { term: 'descansar', translation: 'riposare' },
    { term: 'evitar', translation: 'evitare' },
    { term: 'la farmacia', translation: 'la farmacia' },
    { term: 'la pastilla', translation: 'la pastiglia' },
  ],
  exercises: [
    mc(
      '«Devo studiare» si dice…',
      [
        'Tengo que estudiar.',
        'Hay que estudio.',
        'Debo que estudiar.',
        'Tengo estudiar.',
      ],
      0,
    ),
    fb('___ que descansar. (impersonale)', ['Hay'], 'Bisogna riposare.'),
    tr('Dovresti andare dal medico.', ['Deberías ir al médico.']),
    wo('È meglio riposare oggi.', ['Es', 'mejor', 'descansar', 'hoy.']),
    li(
      'Tienes fiebre. Deberías descansar y beber mucha agua.',
      'Cosa consiglia il medico?',
      ['Riposare e bere molta acqua', 'Fare sport', 'Uscire con gli amici', 'Mangiare molto'],
      0,
    ),
    mc(
      '«Tomar una pastilla» significa…',
      ['prendere una pastiglia', 'comprare una medicina', 'misurare la febbre', 'chiamare il medico'],
      0,
    ),
    fb('No ___ fumar aquí. (obbligo impersonale)', ['hay que'], 'Non si deve fumare qui.'),
    tr('Non devi preoccuparti.', ['No tienes que preocuparte.', 'No debes preocuparte.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Es mejor beber agua.',
        'Es mejor bebes agua.',
        'Es mejor beber agua?',
        'Es mejor que beber agua.',
      ],
      0,
    ),
    wo('Ti consiglio di riposare.', ['Te', 'recomiendo', 'descansar.']),
  ],
  faq: [
    {
      question: '«Tener que» e «hay que» sono uguali?',
      answer: 'No. «Tener que» indica un obbligo personale: «Tengo que ir». «Hay que» indica un obbligo generale, senza soggetto: «Hay que respetar las normas».',
    },
    {
      question: 'Come si dà un consiglio gentile?',
      answer: 'Con «deberías» + infinito: «Deberías descansar». È meno diretto di «debes» e suona come un suggerimento.',
    },
  ],
})

const esU8L3 = defineLesson({
  id: 'es-u8-l3',
  title: 'Vita sociale: inviti e scuse',
  subtitle: 'Fiestas, cumpleaños y quedadas',
  objectives: [
    'Invitare, accettare e rifiutare',
    'Scusarsi in modo naturale',
    'Parlare di appuntamenti e incontri',
  ],
  vocab: [
    { term: 'la fiesta', translation: 'la festa' },
    { term: 'el cumpleaños', translation: 'il compleanno' },
    { term: 'el regalo', translation: 'il regalo' },
    { term: 'quedar', translation: 'incontrarsi, mettersi d\'accordo' },
    { term: 'invitar', translation: 'invitare' },
    { term: 'lo siento', translation: 'mi dispiace' },
    { term: 'no puedo', translation: 'non posso' },
    { term: 'otro día', translation: 'un altro giorno' },
    { term: 'la cita', translation: 'l\'appuntamento' },
    { term: 'la invitación', translation: 'l\'invito' },
  ],
  exercises: [
    mc(
      'Come inviti qualcuno a una festa?',
      [
        '¿Quieres venir a la fiesta?',
        '¿Quieres vienes a la fiesta?',
        '¿Quiero venir a la fiesta?',
        '¿Puedes vienes a la fiesta?',
      ],
      0,
    ),
    fb('Lo ___, no puedo ir.', ['siento'], 'Mi dispiace, non posso andare.'),
    tr('Ti invito al mio compleanno.', ['Te invito a mi cumpleaños.']),
    wo('Ci vediamo domani, va bene?', ['¿Quedamos', 'mañana,', 'vale?']),
    li(
      'El sábado es mi cumpleaños. Voy a hacer una fiesta en casa. ¿Quieres venir?',
      'Cosa festeggia?',
      ['Il compleanno', 'La laurea', 'Un nuovo lavoro', 'Un anniversario'],
      0,
    ),
    mc('«El regalo» è…', ['il regalo', 'la festa', "l'invito", 'il compleanno'], 0),
    fb('Prefiero ___ (quedar) a las ocho.', ['quedar'], "Preferisco incontrarci alle otto."),
    tr('Mi dispiace, ho un altro impegno.', ['Lo siento, tengo otro compromiso.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Gracias por la invitación.',
        'Gracias para la invitación.',
        'Gracias por el invitación.',
        'Gracias a la invitación.',
      ],
      0,
    ),
    wo('Festeggiamo insieme sabato sera.', [
      'Celebramos',
      'juntos',
      'el',
      'sábado',
      'por',
      'la',
      'noche.',
    ]),
  ],
  faq: [
    {
      question: 'Come si rifiuta un invito con gentilezza?',
      answer: '«Lo siento, no puedo» oppure «Me encantaría, pero no puedo». Per riproporre: «¿Quedamos otro día?».',
    },
    {
      question: '«Quedar» e «encontrarse»?',
      answer: '«Quedar» significa mettersi d\'accordo su un incontro: «¿Quedamos a las ocho?». «Encontrarse» significa incontrarsi, anche per caso: «Me encontré con Ana en el mercado».',
    },
  ],
})

const esU8G1 = defineTopic({
  id: 'es-u8-g1',
  title: 'Imperativo e perifrasi verbali',
  subtitle: 'Dare ordini, consigli e obblighi',
  intro:
    'L\'imperativo serve per dare istruzioni, consigli e ordini. Le perifrasi verbali (tener que, hay que, ir a, acabar de) aggiungono sfumature di obbligo, futuro o azione appena conclusa.',
  sections: [
    {
      heading: 'Imperativo affermativo',
      paragraphs: [
        'Le forme più usate sono quelle di tú e usted. Per i verbi in -ar: habla (tú), hable (usted). Per -er: come (tú), coma (usted). Per -ir: vive (tú), viva (usted).',
        'Noi diciamo «hablemos» (parliamo), voi «hablad» (parlate), loro «hablen» (parlino). Alcune forme sono irregolari: «di» (dì), «haz» (fai), «ve» (vai), «pon» (metti), «sal» (esci), «ten» (tieni), «ven» (vieni).',
      ],
      table: {
        headers: ['Persona', 'hablar', 'comer', 'vivir'],
        rows: [
          ['tú', 'habla', 'come', 'vive'],
          ['usted', 'hable', 'coma', 'viva'],
          ['nosotros', 'hablemos', 'comamos', 'vivamos'],
          ['vosotros', 'hablad', 'comed', 'vivid'],
          ['ustedes', 'hablen', 'coman', 'vivan'],
        ],
      },
      examples: [
        { target: 'Habla más despacio, por favor.', italian: 'Parla più lentamente, per favore.' },
        { target: 'Coma más verdura.', italian: 'Mangi più verdura.' },
        { target: 'Ven conmigo.', italian: 'Vieni con me.' },
      ],
    },
    {
      heading: 'Imperativo negativo',
      paragraphs: [
        'L\'imperativo negativo usa le forme del presente di congiuntivo: «no hables», «no coma», «no vayas». È una struttura che si incontra spesso nei consigli e nei divieti.',
      ],
      examples: [
        { target: 'No fumes aquí.', italian: 'Non fumare qui.' },
        { target: 'No te preocupes.', italian: 'Non preoccuparti.' },
        { target: 'No vayas tan rápido.', italian: 'Non andare così veloce.' },
      ],
    },
    {
      heading: 'Perifrasi: obbligo, futuro e passato recente',
      paragraphs: [
        '«Tener que» + infinito = obbligo personale. «Hay que» + infinito = obbligo impersonale. «Deber» + infinito = dovere, anche morale. «Deberías» + infinito = consiglio gentile.',
        '«Ir a» + infinito indica un futuro vicino o un\'intenzione: «Voy a estudiar». «Acabar de» + infinito indica un\'azione appena conclusa: «Acabo de llegar» (sono appena arrivato). «Volver a» + infinito indica ripetizione: «Vuelvo a leer» (rileggo).',
      ],
      table: {
        headers: ['Struttura', 'Significato', 'Esempio'],
        rows: [
          ['tener que + inf.', 'dovere personale', 'Tengo que ir.'],
          ['hay que + inf.', 'bisogna', 'Hay que descansar.'],
          ['deberías + inf.', 'consiglio', 'Deberías dormir.'],
          ['ir a + inf.', 'futuro vicino', 'Voy a salir.'],
          ['acabar de + inf.', 'appena fatto', 'Acabo de llegar.'],
          ['volver a + inf.', 'fare di nuovo', 'Vuelvo a leer.'],
        ],
      },
    },
  ],
  exercises: [
    mc('___ (hablar, tú) más despacio, por favor.', ['Habla', 'Hablas', 'Hable', 'Habláis'], 0),
    fb('___ (comer, usted) más verdura.', ['Coma'], 'Mangi più verdura (lei).'),
    tr('Riposati e bevi acqua.', ['Descansa y bebe agua.']),
    mc('Scegli la forma corretta: no ___ (fumar, tú)', ['fumes', 'fumas', 'fuma', 'fumáis'], 0),
    wo('Dobbiamo partire presto.', ['Tenemos', 'que', 'salir', 'temprano.']),
    fb('___ que estudiar más. (impersonale)', ['Hay'], 'Bisogna studiare di più.'),
  ],
  faq: [
    {
      question: 'Perché «no fumes» e non «no fuma»?',
      answer: 'L\'imperativo negativo di tú prende la forma del congiuntivo: fumar → no fumes. La forma «no fuma» sarebbe terza persona singolare, non un ordine diretto.',
    },
    {
      question: '«Acabo de llegar» che tempo è?',
      answer: 'È una perifrasi con «acabar de» + infinito e significa «sono appena arrivato». Si usa solo per azioni appena concluse.',
    },
  ],
})

export const esU8 = defineUnit({
  id: 'es-u8',
  title: 'Salute e vita sociale',
  subtitle: 'Corpo, consigli, imperativo e inviti',
  intro:
    'Chiudiamo il corso con due ambiti che servono subito: la salute e la vita sociale. Impari a dire che cosa ti fa male, a chiedere consiglio, a dare istruzioni e a organizzare un incontro con gli amici, usando imperativo e perifrasi verbali.',
  keyPoints: [
    'Parti del corpo e sintomi con doler',
    'Obblighi con tener que e hay que',
    'Consigli con deberías',
    'Imperativo e perifrasi verbali',
  ],
  theory: [
    {
      heading: 'Salute: descrivere sintomi',
      paragraphs: [
        'Per dire che una parte del corpo fa male si usa «doler», che funziona come «gustar»: «Me duele la cabeza», «Me duelen los pies». Il pronome cambia con la persona: me, te, le, nos, os, les.',
        'Espressioni utili: «Tengo fiebre», «Estoy resfriado», «Me siento mal», «Me mareo» (mi gira la testa), «Tengo tos» (ho la tosse). Per chiedere aiuto: «Necesito un médico», «¿Dónde está la farmacia?».',
        'Dal medico si sentono domande come «¿Qué le pasa?» (che cosa ha?), «¿Desde cuándo?» (da quando?), «¿Le duele aquí?». Per rispondere: «Me duele desde ayer», «Tengo dolor de garganta».',
      ],
      examples: [
        { target: 'Me duele la cabeza desde esta mañana.', italian: 'Mi fa male la testa da stamattina.' },
        { target: 'Tengo fiebre y me duelen los pies.', italian: 'Ho la febbre e mi fanno male i piedi.' },
        { target: 'Deberías beber mucha agua y descansar.', italian: 'Dovresti bere molta acqua e riposare.' },
      ],
    },
    {
      heading: 'Obblighi, consigli e divieti',
      paragraphs: [
        '«Tener que» + infinito esprime un obbligo personale: «Tengo que ir al médico». «Hay que» + infinito esprime un obbligo generale: «Hay que descansar». «Deber» + infinito è più formale e può indicare dovere morale: «Debes respetar a los demás».',
        'Per dare un consiglio gentile si usa «deberías» + infinito: «Deberías dormir más». Alternative: «Es mejor…», «Te recomiendo…», «¿Por qué no…?». Per un divieto: «No puedes…», «No hay que…», «Está prohibido…».',
        'Le perifrasi aggiungono sfumature: «ir a» + infinito per il futuro vicino, «acabar de» + infinito per un\'azione appena conclusa, «volver a» + infinito per un\'azione ripetuta.',
      ],
      examples: [
        { target: 'Tienes que tomar la pastilla después de comer.', italian: 'Devi prendere la pastiglia dopo mangiato.' },
        { target: 'Hay que evitar el azúcar.', italian: 'Bisogna evitare lo zucchero.' },
        { target: 'Acabo de volver del médico.', italian: 'Sono appena tornato dal medico.' },
      ],
    },
    {
      heading: 'Imperativo: istruzioni e consigli',
      paragraphs: [
        'L\'imperativo affermativo di tú per i verbi regolari è uguale alla terza persona del presente: habla, come, vive. Per usted si aggiunge la vocale opposta: hable, coma, viva. Le forme di noi (hablemos), voi (hablad) e loro (hablen) completano il quadro.',
        'Alcuni imperativi sono irregolari e molto frequenti: di (dire), haz (hacer), ve (ir), pon (poner), sal (salir), ten (tener), ven (venir). L\'imperativo negativo di tú usa il congiuntivo: no hables, no comas, no vayas.',
        'Nella vita sociale l\'imperativo serve per invitare e proporre: «Ven a la fiesta», «Pásalo bien», «Dime si puedes». Attenzione al tono: in spagnolo un imperativo diretto può suonare brusco, quindi spesso si aggiunge «por favor» o si usa una domanda.',
      ],
      table: {
        headers: ['Infinito', 'tú', 'usted', 'negativo tú'],
        rows: [
          ['hablar', 'habla', 'hable', 'no hables'],
          ['comer', 'come', 'coma', 'no comas'],
          ['vivir', 'vive', 'viva', 'no vivas'],
          ['ir', 've', 'vaya', 'no vayas'],
          ['hacer', 'haz', 'haga', 'no hagas'],
          ['venir', 'ven', 'venga', 'no vengas'],
        ],
      },
      examples: [
        { target: 'Descansa y bebe mucha agua.', italian: 'Riposati e bevi molta acqua.' },
        { target: 'No te preocupes, todo va bien.', italian: 'Non preoccuparti, va tutto bene.' },
        { target: 'Ven a mi cumpleaños el sábado.', italian: 'Vieni al mio compleanno sabato.' },
      ],
    },
    {
      heading: 'Vita sociale: invitare e scusarsi',
      paragraphs: [
        'Per invitare: «¿Quieres venir…?», «¿Te apetece…?» (ti va?), «Te invito a…». Per accettare: «Sí, me encantaría», «Vale, nos vemos allí». Per rifiutare: «Lo siento, no puedo», «Otro día, ¿vale?».',
        '«Quedar» significa mettersi d\'accordo: «¿Quedamos a las ocho?». «La cita» è l\'appuntamento, anche romantico. «El regalo» è il regalo; «la fiesta» la festa; «el cumpleaños» il compleanno. «¡Feliz cumpleaños!» è l\'augurio standard.',
      ],
      examples: [
        { target: '¿Te apetece venir a cenar el viernes?', italian: 'Ti va di venire a cena venerdì?' },
        { target: 'Lo siento, tengo una cita. ¿Quedamos el domingo?', italian: 'Mi dispiace, ho un impegno. Ci vediamo domenica?' },
        { target: 'Gracias por el regalo, ¡me encanta!', italian: 'Grazie per il regalo, mi piace moltissimo!' },
      ],
    },
  ],
  lessons: [esU8L1, esU8L2, esU8L3],
  grammar: [esU8G1],
})
