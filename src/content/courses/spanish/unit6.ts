import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU6L1 = defineLesson({
  id: 'es-u6-l1',
  title: 'A tavola: cibo e bevande',
  subtitle: 'Pan, carne, verdura, agua…',
  objectives: [
    'Nominare i cibi e le bevande più comuni',
    'Dire che cosa ti piace mangiare e bere',
    'Usare gustar con il cibo',
  ],
  vocab: [
    { term: 'el pan', translation: 'il pane' },
    { term: 'la carne', translation: 'la carne' },
    { term: 'el pescado', translation: 'il pesce' },
    { term: 'la verdura', translation: 'la verdura' },
    { term: 'la fruta', translation: 'la frutta' },
    { term: 'el queso', translation: 'il formaggio' },
    { term: 'el agua', translation: "l'acqua" },
    { term: 'el vino', translation: 'il vino' },
    { term: 'la cerveza', translation: 'la birra' },
    { term: 'el café', translation: 'il caffè' },
  ],
  exercises: [
    mc('Come si dice «il pane»?', ['el pan', 'la carne', 'el queso', 'la fruta'], 0),
    mc('«El pescado» significa…', ['il pesce', 'la carne', 'il pollo', 'il formaggio'], 0),
    fb('Me gusta el ___ con tomate.', ['pan'], 'Mi piace il pane con il pomodoro.'),
    tr('Mi piace la frutta.', ['Me gusta la fruta.']),
    wo('Bevo acqua e mangio pane.', ['Bebo', 'agua', 'y', 'como', 'pan.']),
    li(
      'En el restaurante como pescado y bebo agua.',
      'Cosa beve?',
      ['Acqua', 'Vino', 'Caffè', 'Birra'],
      0,
    ),
    mc('Quale bevanda è «la cerveza»?', ['La birra', 'Il vino', "L'acqua", 'Il caffè'], 0),
    fb('No me gusta el ___. (formaggio)', ['queso'], 'Non mi piace il formaggio.'),
    mc(
      'Scegli la frase corretta.',
      ['Me gusta la carne.', 'Me gusta el carne.', 'Me gustan la carne.', 'Me gusta las carnes.'],
      0,
    ),
    tr('Non mi piace il pesce.', ['No me gusta el pescado.']),
  ],
  faq: [
    {
      question: '«El agua» è maschile o femminile?',
      answer: 'È femminile, ma al singolare usa «el» per evitare due «a» consecutive: el agua. Al plurale torna regolare: las aguas.',
    },
    {
      question: 'Come si dice «ho fame» e «ho sete»?',
      answer: 'Si usano «tener hambre» e «tener sed»: «Tengo hambre», «Tengo sed». Non si usa «ser».',
    },
  ],
})

const esU6L2 = defineLesson({
  id: 'es-u6-l2',
  title: 'Al ristorante',
  subtitle: 'La carta, el camarero y la cuenta',
  objectives: [
    'Ordinare al ristorante',
    'Chiedere il menù e il conto',
    'Usare le formule di cortesia',
  ],
  vocab: [
    { term: 'el menú', translation: 'il menù' },
    { term: 'la carta', translation: 'la carta, il menù' },
    { term: 'el camarero / la camarera', translation: 'il cameriere / la cameriera' },
    { term: 'la cuenta', translation: 'il conto' },
    { term: 'pedir', translation: 'chiedere, ordinare' },
    { term: 'el primer plato', translation: 'il primo piatto' },
    { term: 'el postre', translation: 'il dessert' },
    { term: 'la propina', translation: 'la mancia' },
    { term: '¿qué me recomienda?', translation: 'cosa mi consiglia?' },
    { term: 'la mesa', translation: 'il tavolo' },
  ],
  exercises: [
    mc(
      'Come chiedi il menù?',
      [
        '¿Me trae el menú, por favor?',
        '¿Me trae la cuenta, por favor?',
        '¿Dónde está el baño?',
        '¿Cuánto cuesta?',
      ],
      0,
    ),
    fb('Yo ___ (pedir) una paella.', ['pido'], 'Io ordino una paella.'),
    tr('Vorrei ordinare, per favore.', ['Quiero pedir, por favor.', 'Quisiera pedir, por favor.']),
    wo('Il cameriere porta la carta.', ['El', 'camarero', 'trae', 'la', 'carta.']),
    li(
      'Buenas tardes, ¿qué desea? — Quiero el menú del día, por favor.',
      'Cosa ordina il cliente?',
      ['Il menù del giorno', 'La carta dei vini', 'Solo un caffè', 'La cuenta'],
      0,
    ),
    mc('«La cuenta» è…', ['il conto', 'il menù', 'il cameriere', 'la mancia'], 0),
    fb('De postre, ___ (querer) helado.', ['quiero'], 'Di dessert voglio il gelato.'),
    tr('Il pesce è delizioso.', ['El pescado está delicioso.', 'El pescado es delicioso.']),
    mc(
      'Scegli la frase corretta.',
      [
        'El menú está en la mesa.',
        'El menú están en la mesa.',
        'La menú está en la mesa.',
        'El menú está en el mesa.',
      ],
      0,
    ),
    wo('Vorremmo un tavolo per due.', ['Queremos', 'una', 'mesa', 'para', 'dos.']),
  ],
  faq: [
    {
      question: '«La carta» e «el menú» sono uguali?',
      answer: 'In molti ristoranti «la carta» è il menù completo con tutti i piatti, mentre «el menú» indica spesso il menù fisso del giorno, con prezzo unico.',
    },
    {
      question: 'Come si chiede il conto?',
      answer: '«La cuenta, por favor» è la formula più comune. In America Latina si sente anche «la factura», ma «cuenta» è compreso ovunque.',
    },
  ],
})

const esU6L3 = defineLesson({
  id: 'es-u6-l3',
  title: 'Fare la spesa',
  subtitle: 'Mercado, supermercado, kilos y litros',
  objectives: [
    'Fare la spesa al mercato e al supermercato',
    'Chiedere quantità e prezzi',
    'Parlare di ciò che è caro o economico',
  ],
  vocab: [
    { term: 'el mercado', translation: 'il mercato' },
    { term: 'el supermercado', translation: 'il supermercato' },
    { term: 'la bolsa', translation: 'la borsa, il sacchetto' },
    { term: 'el kilo', translation: 'il chilo' },
    { term: 'medio kilo', translation: 'mezzo chilo' },
    { term: 'un litro', translation: 'un litro' },
    { term: 'barato / barata', translation: 'economico / economica' },
    { term: 'caro / cara', translation: 'caro / cara' },
    { term: 'la oferta', translation: "l'offerta" },
    { term: 'pagar', translation: 'pagare' },
  ],
  exercises: [
    mc(
      'Come chiedi «quanto costa»?',
      ['¿Cuánto cuesta?', '¿Cuántos cuesta?', '¿Dónde cuesta?', '¿Qué cuesta?'],
      0,
    ),
    fb('Un ___ de manzanas, por favor.', ['kilo'], 'Un chilo di mele, per favore.'),
    tr('Vorrei mezzo chilo di pomodori.', [
      'Quiero medio kilo de tomates.',
      'Quisiera medio kilo de tomates.',
    ]),
    wo('Il mercato è economico.', ['El', 'mercado', 'es', 'barato.']),
    li(
      'En el mercado compro fruta y verdura. Todo es muy barato.',
      'Cosa compra?',
      ['Frutta e verdura', 'Carne e pesce', 'Pane e formaggio', 'Solo mele'],
      0,
    ),
    mc('Il contrario di «caro» è…', ['barato', 'grande', 'nuevo', 'bueno'], 0),
    fb('¿___ pagar con tarjeta?', ['Puedo'], 'Posso pagare con la carta?'),
    tr('La borsa è pesante.', ['La bolsa es pesada.']),
    mc(
      'Scegli la frase corretta.',
      [
        'Necesito un litro de leche.',
        'Necesito una litro de leche.',
        'Necesito un litro de leches.',
        'Necesito unos litro de leche.',
      ],
      0,
    ),
    wo('Faccio la spesa al mercato.', ['Hago', 'la', 'compra', 'en', 'el', 'mercado.']),
  ],
  faq: [
    {
      question: '«Hacer la compra» o «ir de compras»?',
      answer: '«Hacer la compra» significa fare la spesa alimentare. «Ir de compras» significa andare a fare acquisti, per esempio vestiti o regali.',
    },
    {
      question: 'Come si dice «un etto»?',
      answer: '«Cien gramos» oppure «un hectogramo», ma al mercato si sente spesso «cien gramos». Per le quantità piccole si usa molto «un poco de».',
    },
  ],
})

const esU6G1 = defineTopic({
  id: 'es-u6-g1',
  title: 'Verbi con cambio di radice e pedir',
  subtitle: 'e → ie, o → ue, e → i',
  intro:
    'Molti verbi spagnoli cambiano la vocale della radice nelle forme forti (yo, tú, él/ella/usted, ellos/ellas/ustedes). Noi e voi restano regolari. È un meccanismo da riconoscere, non da imparare verbo per verbo.',
  sections: [
    {
      heading: 'I tre gruppi principali',
      paragraphs: [
        'I cambiamenti più frequenti sono tre: e → ie (pensar → pienso), o → ue (poder → puedo), e → i (pedir → pido). Il cambio avviene nella sillaba tonica, quindi solo nelle persone in cui l\'accento cade sulla radice.',
        'Le forme nosotros e vosotros mantengono la vocale originale: pensamos, pensáis; podemos, podéis; pedimos, pedís. È il motivo per cui il fenomeno si chiama «verbo con cambio di radice» e non «verbo irregolare» in senso pieno.',
      ],
      table: {
        headers: ['Persona', 'pensar (e → ie)', 'poder (o → ue)', 'pedir (e → i)'],
        rows: [
          ['yo', 'pienso', 'puedo', 'pido'],
          ['tú', 'piensas', 'puedes', 'pides'],
          ['él / ella / usted', 'piensa', 'puede', 'pide'],
          ['nosotros', 'pensamos', 'podemos', 'pedimos'],
          ['vosotros', 'pensáis', 'podéis', 'pedís'],
          ['ellos / ellas / ustedes', 'piensan', 'pueden', 'piden'],
        ],
      },
    },
    {
      heading: 'Verbi utili con e → ie',
      bullets: [
        'pensar → pienso (pensare)',
        'querer → quiero (volere)',
        'preferir → prefiero (preferire)',
        'empezar → empiezo (iniziare)',
        'entender → entiendo (capire)',
        'cerrar → cierro (chiudere)',
      ],
      examples: [
        { target: 'Pienso en mis vacaciones.', italian: 'Penso alle mie vacanze.' },
        { target: '¿Entiendes la pregunta?', italian: 'Capisci la domanda?' },
      ],
    },
    {
      heading: 'Verbi utili con o → ue',
      bullets: [
        'poder → puedo (potere)',
        'volver → vuelvo (tornare)',
        'dormir → duermo (dormire)',
        'encontrar → encuentro (trovare)',
        'recordar → recuerdo (ricordare)',
        'costar → cuesta (costare)',
      ],
      examples: [
        { target: 'No puedo venir hoy.', italian: 'Non posso venire oggi.' },
        { target: '¿Cuánto cuesta el menú?', italian: 'Quanto costa il menù?' },
      ],
    },
    {
      heading: 'Pedir e gli altri verbi con e → i',
      paragraphs: [
        '«Pedir» significa chiedere qualcosa a qualcuno, ordinare al ristorante o richiedere. Le sue forme forti hanno la i: pido, pides, pide, piden. Noi e voi restano regolari: pedimos, pedís.',
        'Altri verbi dello stesso gruppo sono «servir» (servire), «repetir» (ripetere) e «seguir» (seguire). Attenzione: «preguntar» significa fare una domanda, mentre «pedir» significa chiedere un oggetto o un favore.',
      ],
      table: {
        headers: ['Verbo', 'yo', 'tú', 'él / ella', 'nosotros', 'ellos'],
        rows: [
          ['pedir', 'pido', 'pides', 'pide', 'pedimos', 'piden'],
          ['servir', 'sirvo', 'sirves', 'sirve', 'servimos', 'sirven'],
          ['repetir', 'repito', 'repites', 'repite', 'repetimos', 'repiten'],
          ['seguir', 'sigo', 'sigues', 'sigue', 'seguimos', 'siguen'],
        ],
      },
      examples: [
        { target: 'Pido la cuenta, por favor.', italian: 'Chiedo il conto, per favore.' },
        { target: '¿Puedes repetir, por favor?', italian: 'Puoi ripetere, per favore?' },
        { target: 'Seguimos todo recto.', italian: 'Continuiamo sempre dritto.' },
      ],
    },
  ],
  exercises: [
    mc('Yo ___ (querer) un café.', ['quiero', 'quero', 'quiere', 'queremos'], 0),
    fb('Ellos ___ (poder) venir mañana.', ['pueden'], 'Loro possono venire domani.'),
    tr('Chiedo il conto.', ['Pido la cuenta.']),
    mc('Scegli la forma corretta: tú ___ (pedir)', ['pides', 'pedes', 'pide', 'pedís'], 0),
    wo('No possiamo pagare oggi.', ['No', 'podemos', 'pagar', 'hoy.']),
    fb('Ella ___ (preferir) el pescado.', ['prefiere'], 'Lei preferisce il pesce.'),
  ],
  faq: [
    {
      question: 'Tutti i verbi con cambio di radice sono irregolari?',
      answer: 'Sì, ma in modo prevedibile: il cambio riguarda solo le persone forti. Una volta riconosciuto il gruppo, puoi coniugare molti verbi senza studiarli uno per uno.',
    },
    {
      question: '«Pedir» e «preguntar» sono la stessa cosa?',
      answer: 'No. «Pedir» significa chiedere qualcosa (un oggetto, un favore, un piatto). «Preguntar» significa porre una domanda: «Pregunto dónde está el baño».',
    },
  ],
})

export const esU6 = defineUnit({
  id: 'es-u6',
  title: 'Cibo e acquisti',
  subtitle: 'A tavola, al ristorante e al mercato',
  intro:
    'Questa unità porta lo spagnolo nella vita di tutti i giorni: ordinare un pranzo, chiedere il conto, comprare frutta e verdura. Imparerai il vocabolario del cibo e i verbi con cambio di radice, che compaiono continuamente quando parli di ciò che vuoi, puoi o preferisci.',
  keyPoints: [
    'Cibi, bevande e pasti',
    'Ordinare al ristorante e chiedere il conto',
    'Quantità, prezzi e spesa',
    'Verbi con cambio di radice e pedir',
  ],
  theory: [
    {
      heading: 'Cibo e pasti della giornata',
      paragraphs: [
        'I pasti principali sono «el desayuno» (colazione), «la comida» (pranzo) e «la cena» (cena). «La merienda» è la merenda del pomeriggio, molto comune in Spagna. Per dire che cosa mangi si usa «comer»; per le bevande «beber» o, più colloquiale, «tomar».',
        'Il cibo si accompagna spesso con l\'articolo: «el pan», «la carne», «el pescado», «la fruta». Attenzione a «el agua», femminile ma con l\'articolo maschile al singolare per evitare il suono «la agua».',
        'Per esprimere gusti si usa «gustar»: «Me gusta el pescado», «Me gustan las verduras». Il verbo concorda con il cibo, non con la persona. Per parlare di ciò che si beve: «Bebo agua», «Tomo un café».',
      ],
      examples: [
        { target: 'Para el desayuno tomo café y pan.', italian: 'A colazione prendo caffè e pane.' },
        { target: 'Me gustan las verduras, pero no me gusta el pescado.', italian: 'Mi piacciono le verdure, ma non mi piace il pesce.' },
        { target: 'Tengo hambre y sed.', italian: 'Ho fame e sete.' },
      ],
    },
    {
      heading: 'Al ristorante: ordinare e chiedere',
      paragraphs: [
        'Quando entri in un ristorante puoi chiedere «Una mesa para dos, por favor». Per il menù: «¿Me trae el menú?» oppure «¿Nos trae la carta?». Per ordinare: «Quiero…», «Para mí…», «De primero…», «De segundo…», «De postre…».',
        'Per chiedere un consiglio: «¿Qué me recomienda?». Per chiedere il conto: «La cuenta, por favor». La mancia si chiama «propina» ed è facoltativa; in Spagna è comune lasciare una cifra piccola o arrotondare.',
        'Le formule di cortesia rendono la frase più naturale: «por favor», «gracias», «disculpe». «Quisiera» è una forma cortese di «quiero» e suona particolarmente educata: «Quisiera un café».',
      ],
      examples: [
        { target: '¿Qué me recomienda de primero?', italian: 'Cosa mi consiglia come primo?' },
        { target: 'Para mí, el pescado y una ensalada.', italian: 'Per me, il pesce e un\'insalata.' },
        { target: 'La cuenta, por favor. ¿Puedo pagar con tarjeta?', italian: 'Il conto, per favore. Posso pagare con la carta?' },
      ],
    },
    {
      heading: 'Fare la spesa: quantità e prezzi',
      paragraphs: [
        'Al mercato si compra a peso: «un kilo de…», «medio kilo de…», «cien gramos de…», «un litro de…». Per chiedere il prezzo: «¿Cuánto cuesta?» (singolare) o «¿Cuánto cuestan?» (plurale). Per dire che è conveniente: «Es barato»; per il contrario: «Es caro».',
        '«Hacer la compra» significa fare la spesa alimentare; «ir de compras» significa andare a fare acquisti in generale. In negozio si sentono spesso «¿Algo más?» (altro?) e «Nada más, gracias» (niente altro, grazie).',
      ],
      examples: [
        { target: 'Un kilo de manzanas y medio de tomates.', italian: 'Un chilo di mele e mezzo di pomodori.' },
        { target: '¿Cuánto cuestan estas naranjas?', italian: 'Quanto costano queste arance?' },
        { target: 'Hoy la fruta está de oferta.', italian: 'Oggi la frutta è in offerta.' },
      ],
    },
    {
      heading: 'Verbi con cambio di radice: la regola pratica',
      paragraphs: [
        'Nei verbi come querer, poder, pedir e preferir la vocale della radice cambia nelle persone forti: yo, tú, él/ella/usted, ellos/ellas/ustedes. Noi e voi restano regolari. Il cambio non è casuale: dipende dalla posizione dell\'accento.',
        'I tre schemi principali sono e → ie (quiero), o → ue (puedo) e e → i (pido). Riconoscere il gruppo ti permette di coniugare correttamente molti verbi nuovi, soprattutto quelli legati al cibo e agli acquisti: «pedir», «servir», «probar», «costar».',
      ],
      table: {
        headers: ['Persona', 'querer', 'poder', 'pedir'],
        rows: [
          ['yo', 'quiero', 'puedo', 'pido'],
          ['tú', 'quieres', 'puedes', 'pides'],
          ['él / ella / usted', 'quiere', 'puede', 'pide'],
          ['nosotros', 'queremos', 'podemos', 'pedimos'],
          ['vosotros', 'queréis', 'podéis', 'pedís'],
          ['ellos / ellas / ustedes', 'quieren', 'pueden', 'piden'],
        ],
      },
      examples: [
        { target: 'Quiero pedir la cuenta.', italian: 'Voglio chiedere il conto.' },
        { target: '¿Puedes traer más pan?', italian: 'Puoi portare altro pane?' },
        { target: 'Pedimos dos cafés.', italian: 'Ordiniamo due caffè.' },
      ],
    },
  ],
  lessons: [esU6L1, esU6L2, esU6L3],
  grammar: [esU6G1],
})
