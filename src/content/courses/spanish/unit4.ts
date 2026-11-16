import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU4L1 = defineLesson({
  id: 'es-u4-l1',
  title: 'La casa e le stanze',
  subtitle: 'Casa, piso, cocina, dormitorio',
  objectives: [
    'Nominare le stanze e gli oggetti di casa',
    'Descrivere la propria abitazione',
    'Usare hay e tener con gli oggetti',
  ],
  vocab: [
    { term: 'la casa', translation: 'la casa' },
    { term: 'el piso', translation: "l'appartamento" },
    { term: 'la cocina', translation: 'la cucina' },
    { term: 'el baño', translation: 'il bagno' },
    { term: 'el dormitorio', translation: 'la camera da letto' },
    { term: 'el salón', translation: 'il soggiorno' },
    { term: 'la mesa', translation: 'il tavolo' },
    { term: 'la cama', translation: 'il letto' },
  ],
  exercises: [
    mc('La ___ es donde cocinamos.', ['cocina', 'cama', 'mesa', 'ventana'], 0),
    fb('Mi casa ___ tres dormitorios.', ['tiene'], 'Mia casa ha tre camere.'),
    tr('In casa ci sono due bagni.', ['Hay dos baños en casa.', 'En casa hay dos baños.']),
    wo('La cucina è grande e luminosa.', ['La', 'cocina', 'es', 'grande', 'y', 'luminosa.']),
    li(
      'Mi piso tiene dos dormitorios, un salón y una cocina pequeña.',
      'Quante camere da letto?',
      ['Due', 'Una', 'Tre', 'Quattro'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Hay una mesa en la cocina.', 'Está una mesa en la cocina.', 'Hay un mesa en la cocina.', 'Es una mesa en la cocina.'],
      0,
    ),
    fb('El baño ___ cerca del salón.', ['está'], 'Il bagno è vicino al soggiorno.'),
    tr('La mia camera è piccola.', ['Mi dormitorio es pequeño.', 'Mi habitación es pequeña.']),
    mc('«El salón» è…', ['il soggiorno', 'la cucina', 'il bagno', 'la camera'], 0),
    wo('Ci sono due finestre nel soggiorno.', ['Hay', 'dos', 'ventanas', 'en', 'el', 'salón.']),
  ],
  faq: [
    {
      question: '«Casa» e «piso» sono sinonimi?',
      answer: '«Casa» è la casa in generale, anche una villetta. «Piso» indica un appartamento, un piano di un edificio. In Spagna «piso» è molto comune per l\'abitazione urbana.',
    },
    {
      question: 'Differenza tra «dormitorio» e «habitación»?',
      answer: 'Sono entrambi validi. «Dormitorio» indica la camera da letto; «habitación» è più generico e significa anche «stanza». In molti contesti si usano come sinonimi.',
    },
  ],
})

const esU4L2 = defineLesson({
  id: 'es-u4-l2',
  title: 'Dov\'è? Preposizioni di luogo',
  subtitle: 'Encima, debajo, al lado, entre',
  objectives: [
    'Descrivere dove si trovano gli oggetti',
    'Usare estar con le preposizioni di luogo',
    'Differenziare hay e estar',
  ],
  vocab: [
    { term: 'encima de', translation: 'sopra' },
    { term: 'debajo de', translation: 'sotto' },
    { term: 'al lado de', translation: 'accanto a' },
    { term: 'entre', translation: 'tra' },
    { term: 'detrás de', translation: 'dietro a' },
    { term: 'delante de', translation: 'davanti a' },
    { term: 'dentro de', translation: 'dentro' },
    { term: 'sobre', translation: 'sopra, su' },
  ],
  exercises: [
    mc('Il libro è ___ la mesa. (sopra)', ['encima de', 'debajo de', 'detrás de', 'entre'], 0),
    fb('El gato está ___ la silla. (sotto)', ['debajo de'], 'Il gatto è sotto la sedia.'),
    tr('La banca è accanto al supermercato.', ['El banco está al lado del supermercado.']),
    wo('Il bagno è tra la cucina e il soggiorno.', ['El', 'baño', 'está', 'entre', 'la', 'cocina', 'y', 'el', 'salón.']),
    li(
      'El museo está delante del parque, entre la biblioteca y el café.',
      'Dov\'è il museo?',
      ['Davanti al parco', 'Dietro al parco', 'Dentro la biblioteca', 'Sopra il café'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['El libro está sobre la mesa.', 'El libro está en sobre la mesa.', 'El libro es sobre la mesa.', 'El libro está sobre de la mesa.'],
      0,
    ),
    fb('Las llaves están ___ el bolso. (dentro)', ['dentro de'], 'Le chiavi sono nella borsa.'),
    tr('Il gatto è dietro il divano.', ['El gato está detrás del sofá.']),
    mc('«Al lado de» significa…', ['accanto a', 'sopra', 'sotto', 'lontano da'], 0),
    wo('La finestra è sopra il letto.', ['La', 'ventana', 'está', 'encima', 'de', 'la', 'cama.']),
  ],
  faq: [
    {
      question: '«Delante de» e «enfrente de» sono uguali?',
      answer: '«Delante de» significa davanti a, in posizione frontale. «Enfrente de» significa di fronte, dall\'altra parte: «El banco está enfrente del parque».',
    },
    {
      question: 'Perché «del» e non «de el»?',
      answer: '«De + el» si contrae sempre in «del». Allo stesso modo «a + el» diventa «al». Le forme «de el» e «a el» non si usano.',
    },
  ],
})

const esU4L3 = defineLesson({
  id: 'es-u4-l3',
  title: 'In città e indicazioni',
  subtitle: 'Calle, plaza, izquierda, derecha',
  objectives: [
    'Chiedere e dare indicazioni stradali',
    'Nominare i luoghi della città',
    'Usare hay, estar e le espressioni di distanza',
  ],
  vocab: [
    { term: 'la calle', translation: 'la strada, via' },
    { term: 'la plaza', translation: 'la piazza' },
    { term: 'el mercado', translation: 'il mercato' },
    { term: 'la farmacia', translation: 'la farmacia' },
    { term: 'el supermercado', translation: 'il supermercato' },
    { term: 'a la izquierda', translation: 'a sinistra' },
    { term: 'a la derecha', translation: 'a destra' },
    { term: 'todo recto', translation: 'sempre dritto' },
  ],
  exercises: [
    mc('___ una farmacia cerca de aquí.', ['Hay', 'Está', 'Es', 'Tiene'], 0),
    fb('El banco ___ en la calle Mayor.', ['está'], 'La banca è in Calle Mayor.'),
    tr('Ci sono due camere nella mia casa.', ['Hay dos habitaciones en mi casa.']),
    wo('Dov\'è il supermercato?', ['¿Dónde', 'está', 'el', 'supermercado?']),
    li(
      'Mi barrio es tranquilo. Hay un parque y una biblioteca cerca de mi casa.',
      'Cosa c\'è vicino a casa?',
      ['Un parco e una biblioteca', 'Una stazione e un bar', 'Un museo e una scuola', 'Niente'],
      0,
    ),
    mc(
      'Come chiedi la strada per il museo?',
      ['¿Cómo voy al museo?', '¿Cómo voy el museo?', '¿Dónde voy al museo?', '¿Qué voy al museo?'],
      0,
    ),
    fb('Gira a la ___. (sinistra)', ['izquierda'], 'Gira a sinistra.'),
    tr('La farmacia è lontano dalla stazione.', ['La farmacia está lejos de la estación.']),
    mc(
      'Scegli la frase corretta.',
      ['Hay muchos libros en la mesa.', 'Está muchos libros en la mesa.', 'Hay mucha libros en la mesa.', 'Es muchos libros en la mesa.'],
      0,
    ),
    wo('La stazione è a destra.', ['La', 'estación', 'está', 'a', 'la', 'derecha.']),
  ],
  faq: [
    {
      question: 'Come si dice «sempre dritto»?',
      answer: '«Todo recto» oppure «todo derecho». Sono entrambe espressioni comuni per indicare di continuare senza girare.',
    },
    {
      question: '«Cerca de» e «cerca»?',
      answer: '«Cerca de» significa vicino a e si usa con un luogo: «cerca del parque». Da solo, «cerca» può essere un aggettivo o un avverbio, ma per la posizione si usa la forma con «de».',
    },
  ],
})

const esU4G1 = defineTopic({
  id: 'es-u4-g1',
  title: 'Ser, estar e hay',
  subtitle: 'Essere, stare e esserci',
  intro:
    'Lo spagnolo distingue tre modi che l\'italiano spesso confonde: «ser» per l\'identità, «estar» per stato e luogo, «hay» per l\'esistenza di qualcosa.',
  sections: [
    {
      heading: 'Ser: ciò che sei',
      paragraphs: ['Identità, origine, nazionalità, professione, caratteristiche stabili.'],
      examples: [
        { target: 'Soy italiano.', italian: 'Sono italiano.' },
        { target: 'Madrid es la capital de España.', italian: 'Madrid è la capitale della Spagna.' },
      ],
    },
    {
      heading: 'Estar: dove e come stai',
      paragraphs: ['Luogo di una persona o cosa specifica, stato temporaneo, emozioni.'],
      table: {
        headers: ['Persona', 'Estar'],
        rows: [
          ['yo', 'estoy'],
          ['tú', 'estás'],
          ['él / ella / usted', 'está'],
          ['nosotros', 'estamos'],
          ['vosotros', 'estáis'],
          ['ellos / ellas / ustedes', 'están'],
        ],
      },
      examples: [
        { target: 'Estoy en casa.', italian: 'Sono a casa.' },
        { target: 'La farmacia está cerca del parque.', italian: 'La farmacia è vicino al parco.' },
        { target: 'Estoy cansado.', italian: 'Sono stanco.' },
      ],
    },
    {
      heading: 'Hay: c\'è / ci sono',
      paragraphs: ['Indica l\'esistenza o la presenza di qualcosa, senza identificarla. È invariabile.'],
      examples: [
        { target: 'Hay un parque en mi barrio.', italian: 'C\'è un parco nel mio quartiere.' },
        { target: 'Hay tres habitaciones en el piso.', italian: 'Ci sono tre stanze nell\'appartamento.' },
        { target: 'No hay leche.', italian: 'Non c\'è latte.' },
      ],
    },
    {
      heading: 'Confronto rapido',
      table: {
        headers: ['Italiano', 'Spagnolo', 'Perché'],
        rows: [
          ['Sono italiano.', 'Soy italiano.', 'identità → ser'],
          ['Sono a casa.', 'Estoy en casa.', 'luogo → estar'],
          ['C\'è un banco qui.', 'Hay un banco aquí.', 'esistenza → hay'],
          ['Il banco è qui.', 'El banco está aquí.', 'luogo specifico → estar'],
        ],
      },
    },
  ],
  exercises: [
    mc('Mi hermano ___ en casa. (luogo)', ['está', 'es', 'hay', 'tiene'], 0),
    fb('___ tres habitaciones en el piso.', ['Hay'], 'Ci sono tre stanze nell\'appartamento.'),
    tr('Sono stanco.', ['Estoy cansado.', 'Estoy cansada.']),
    mc('Madrid ___ en España.', ['está', 'es', 'hay', 'son'], 0),
    wo('La farmacia è vicino al parco.', ['La', 'farmacia', 'está', 'cerca', 'del', 'parque.']),
    fb('___ un supermercado cerca de aquí.', ['Hay'], 'C\'è un supermercato qui vicino.'),
  ],
  faq: [
    {
      question: '«Estoy» o «soy» con gli aggettivi?',
      answer: 'Dipende: «Soy alegre» descrive il carattere; «Estoy alegre» descrive lo stato di adesso.',
    },
    {
      question: 'Perché «está» e non «es» per i luoghi?',
      answer: 'La posizione è considerata uno stato temporaneo: per questo si usa «estar», non «ser».',
    },
  ],
})

export const esU4 = defineUnit({
  id: 'es-u4',
  title: 'Casa e città',
  subtitle: 'Hay, estar, preposizioni e indicazioni',
  intro:
    'Impara a descrivere dove vivi e a orientarti in città. La differenza tra hay e estar è una delle più importanti dello spagnolo: qui la affrontiamo con esempi concreti, stanze, oggetti e indicazioni stradali.',
  keyPoints: [
    'Hay vs estar',
    'Preposizioni di luogo',
    'Stanze e oggetti di casa',
    'Chiedere e dare indicazioni',
  ],
  theory: [
    {
      heading: 'Hay: esistenza e presenza',
      paragraphs: [
        '«Hay» è invariabile e indica che qualcosa esiste o è presente, senza identificarlo. Corrisponde a «c\'è» e «ci sono». Non cambia al plurale: «Hay un libro», «Hay tres libros».',
        'Si usa per parlare di ciò che c\'è in un luogo, in una città, in una casa: «Hay un parque», «Hay dos baños». Non si usa con le persone specifiche: in quel caso si usa «estar».',
      ],
      examples: [
        { target: 'Hay una farmacia cerca de aquí.', italian: 'C\'è una farmacia qui vicino.' },
        { target: 'Hay tres habitaciones en el piso.', italian: 'Ci sono tre stanze nell\'appartamento.' },
        { target: 'No hay leche.', italian: 'Non c\'è latte.' },
      ],
    },
    {
      heading: 'Estar: luogo e stato',
      paragraphs: [
        '«Estar» indica dove si trova una persona o una cosa specifica e descrive stati temporanei. Le forme sono estoy, estás, está, estamos, estáis, están.',
        'La differenza con «hay» è sottile ma importante: «Hay un banco» significa che esiste una banca; «El banco está aquí» indica dove si trova quella banca. Con un articolo o un possessivo davanti al nome, di solito si usa «estar».',
      ],
      table: {
        headers: ['Espressione', 'Uso', 'Esempio'],
        rows: [
          ['hay + nome indeterminato', 'esistenza', 'Hay un parque.'],
          ['estar + luogo specifico', 'posizione', 'El parque está cerca.'],
          ['estar + aggettivo', 'stato temporaneo', 'Estoy cansado.'],
          ['ser + aggettivo', 'caratteristica stabile', 'Soy alegre.'],
        ],
      },
    },
    {
      heading: 'Preposizioni e indicazioni',
      paragraphs: [
        'Le preposizioni di luogo più utili sono: encima de (sopra), debajo de (sotto), al lado de (accanto a), entre (tra), detrás de (dietro), delante de (davanti), dentro de (dentro). «De + el» diventa «del»; «a + el» diventa «al».',
        'Per le indicazioni si usano espressioni come «a la izquierda», «a la derecha», «todo recto», «gira», «sigue». Per chiedere: «¿Cómo voy al…?» oppure «¿Dónde está el…?».',
      ],
      examples: [
        { target: 'El baño está entre la cocina y el salón.', italian: 'Il bagno è tra la cucina e il soggiorno.' },
        { target: 'Gira a la derecha y sigue todo recto.', italian: 'Gira a destra e continua sempre dritto.' },
        { target: 'La farmacia está al lado del supermercado.', italian: 'La farmacia è accanto al supermercato.' },
      ],
    },
  ],
  lessons: [esU4L1, esU4L2, esU4L3],
  grammar: [esU4G1],
})
