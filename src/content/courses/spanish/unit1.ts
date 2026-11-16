import { defineLesson, defineTopic, defineUnit, fb, li, mc, tr, wo } from '../../helpers'

const esU1L1 = defineLesson({
  id: 'es-u1-l1',
  title: 'Hola! Saluti e presentazioni',
  subtitle: 'Le prime frasi per iniziare una conversazione',
  objectives: [
    'Salutare in base al momento della giornata',
    'Dire il proprio nome e chiedere quello altrui',
    'Chiedere come sta una persona, con tu e con usted',
  ],
  vocab: [
    { term: 'hola', translation: 'ciao' },
    { term: 'buenos días', translation: 'buongiorno' },
    { term: 'buenas tardes', translation: 'buon pomeriggio' },
    { term: 'buenas noches', translation: 'buonasera / buonanotte' },
    { term: '¿qué tal?', translation: 'come va?' },
    { term: 'me llamo…', translation: 'mi chiamo…' },
    { term: 'mucho gusto', translation: 'piacere' },
    { term: 'hasta luego', translation: 'a dopo / arrivederci' },
  ],
  exercises: [
    mc('Come si dice «buongiorno»?', ['Buenos días', 'Buenas noches', 'Hasta luego', 'Mucho gusto'], 0),
    mc('«Me llamo Ana» significa…', ['Mi chiamo Ana', 'Vengo da Ana', 'Ho fame', 'Sono Anna'], 0),
    tr('Ciao, come stai?', ['Hola, ¿cómo estás?', 'Hola, ¿qué tal?']),
    fb('Mucho ___.', ['gusto'], 'Piacere.'),
    wo('Buongiorno, mi chiamo Carlos.', ['Buenos', 'días,', 'me', 'llamo', 'Carlos.']),
    li(
      'Hola, buenas tardes. ¿Cómo estás?',
      'In quale momento della giornata si saluta?',
      ['Nel pomeriggio', 'La mattina', 'Di notte', "All'alba"],
      0,
    ),
    mc('Come rispondi a «¿Cómo estás?»', ['Bien, gracias.', 'Me llamo Paolo.', 'Hasta luego.', 'Mucho gusto.'], 0),
    mc(
      'Come chiedi «come sta» a una persona a cui dai del lei?',
      ['¿Cómo está usted?', '¿Cómo estás tú?', '¿Cómo me llamo?', '¿De dónde eres?'],
      0,
    ),
    tr('Piacere, mi chiamo Laura.', [
      'Mucho gusto, me llamo Laura.',
      'Encantada, me llamo Laura.',
      'Encantado, me llamo Laura.',
    ]),
    fb('___ luego.', ['Hasta'], 'A dopo.'),
  ],
  faq: [
    {
      question: '«Buenas noches» si usa anche come saluto?',
      answer: 'Sì: in Spagna si usa sia per salutare la sera sia per augurare la buonanotte.',
    },
    {
      question: '«Hola» va bene in ogni situazione?',
      answer: 'È informale ma molto diffuso. In un contesto formale puoi usare «Buenos días» o «Buenas tardes».',
    },
    {
      question: 'Come si scrive «come stai» con il tu e con usted?',
      answer: 'Con il tu: «¿Cómo estás?». Con usted: «¿Cómo está?».',
    },
  ],
})

const esU1L2 = defineLesson({
  id: 'es-u1-l2',
  title: 'Nome, origine e nazionalità',
  subtitle: 'Soy de… soy…',
  objectives: [
    'Usare il verbo ser per identità e origine',
    'Parlare della propria nazionalità',
    'Chiedere e dire di dove viene una persona',
  ],
  vocab: [
    { term: 'soy de…', translation: 'sono di…' },
    { term: '¿de dónde eres?', translation: 'di dove sei?' },
    { term: 'italiano / italiana', translation: 'italiano / italiana' },
    { term: 'español / española', translation: 'spagnolo / spagnola' },
    { term: 'francés / francesa', translation: 'francese' },
    { term: 'alemán / alemana', translation: 'tedesco / tedesca' },
    { term: 'el país', translation: 'il paese' },
    { term: 'la ciudad', translation: 'la città' },
  ],
  exercises: [
    mc('Ana es ___. (spagnola)', ['española', 'español', 'España', 'españolas'], 0, 'Con una donna si usa la forma femminile dell\'aggettivo.'),
    fb('¿De dónde ___?', ['eres'], 'Di dove sei?'),
    tr('Sono italiano.', ['Soy italiano.']),
    wo('Mia madre è spagnola.', ['Mi', 'madre', 'es', 'española.']),
    li(
      'Hola, soy Lucía, soy de Madrid y soy médica.',
      'Di dov\'è Lucía?',
      ['Madrid', 'Barcellona', 'Roma', 'Siviglia'],
      0,
    ),
    mc(
      'Scegli la frase corretta.',
      ['Carlos es profesor.', 'Carlos es profesor un.', 'Carlos soy profesor.', 'Carlos es profesora.'],
      0,
    ),
    fb('Nosotros ___ de Roma.', ['somos'], 'Siamo di Roma.'),
    tr('Di dove sei?', ['¿De dónde eres?']),
    mc('Yo ___ de Italia.', ['soy', 'eres', 'es', 'somos'], 0),
    fb('Ella ___ española.', ['es'], 'Lei è spagnola.'),
  ],
  faq: [
    {
      question: 'Perché «un estudiante» ma «una estudiante»?',
      answer: 'Il genere dipende dalla persona: «un estudiante» (uomo), «una estudiante» (donna). L\'articolo cambia, il nome resta uguale.',
    },
    {
      question: 'Si dice «soy italiano» o «soy un italiano»?',
      answer: 'Con la nazionalità si preferisce «soy italiano». Con le professioni è normale usare l\'articolo indeterminativo quando si aggiunge una descrizione: «soy un profesor muy exigente».',
    },
  ],
})

const esU1L3 = defineLesson({
  id: 'es-u1-l3',
  title: 'Professioni e descrizioni',
  subtitle: 'Essere qualcuno, essere così',
  objectives: [
    'Dire la professione di una persona',
    'Concordare aggettivi e sostantivi',
    'Descrivere una persona con ser e gli aggettivi di base',
  ],
  vocab: [
    { term: 'profesor / profesora', translation: 'insegnante' },
    { term: 'estudiante', translation: 'studente, studentessa' },
    { term: 'médico / médica', translation: 'medico' },
    { term: 'ingeniero / ingeniera', translation: 'ingegnere' },
    { term: 'abogado / abogada', translation: 'avvocato / avvocatessa' },
    { term: 'alto / alta', translation: 'alto / alta' },
    { term: 'simpático / simpática', translation: 'simpatico / simpatica' },
    { term: 'trabajador / trabajadora', translation: 'lavoratore / lavoratrice' },
  ],
  exercises: [
    mc('Mi padre es ___. (medico)', ['médico', 'médica', 'médicos', 'medico'], 0),
    fb('Ana es ___. (insegnante)', ['profesora'], 'Ana è insegnante.'),
    tr('Siamo studenti.', ['Somos estudiantes.']),
    wo('Mio fratello è alto e simpatico.', ['Mi', 'hermano', 'es', 'alto', 'y', 'simpático.']),
    li(
      'Hola, me llamo Pablo. Soy ingeniero y trabajo en Madrid.',
      'Che lavoro fa Pablo?',
      ["L'ingegnere", 'Il medico', "L'insegnante", 'Lo studente'],
      0,
    ),
    mc(
      'Scegli la forma corretta.',
      [
        'Ella es una profesora simpática.',
        'Ella es un profesora simpática.',
        'Ella es una profesor simpático.',
        'Ella soy una profesora simpática.',
      ],
      0,
    ),
    fb('Ellos ___ altos.', ['son'], 'Loro sono alti.'),
    tr("Lei è un'insegnante.", ['Ella es profesora.', 'Ella es una profesora.']),
    mc('Il femminile di «trabajador» è…', ['trabajadora', 'trabajador', 'trabajadore', 'trabajadoras'], 0),
    wo('Noi siamo italiani.', ['Nosotros', 'somos', 'italianos.']),
  ],
  faq: [
    {
      question: 'Con le professioni serve l\'articolo?',
      answer: 'Di solito no: «Soy profesor», «Ella es médica». L\'articolo compare quando aggiungi una qualità: «Es una profesora excelente».',
    },
    {
      question: 'Come cambiano gli aggettivi al femminile?',
      answer: 'Molti aggiungono -a: alto → alta, simpático → simpática. Altri restano uguali, come «joven» o «inteligente».',
    },
  ],
})

const esU1G1 = defineTopic({
  id: 'es-u1-g1',
  title: 'Il verbo ser',
  subtitle: 'Essere: identità, origine e caratteristiche',
  intro:
    '«Ser» è uno dei due verbi “essere” dello spagnolo. Si usa per identità, origine, nazionalità, professione e caratteristiche considerate stabili.',
  sections: [
    {
      heading: 'Forme',
      table: {
        headers: ['Persona', 'Ser'],
        rows: [
          ['yo', 'soy'],
          ['tú', 'eres'],
          ['él / ella / usted', 'es'],
          ['nosotros / nosotras', 'somos'],
          ['vosotros / vosotras', 'sois'],
          ['ellos / ellas / ustedes', 'son'],
        ],
      },
      examples: [
        { target: 'Soy italiano.', italian: 'Sono italiano.' },
        { target: 'Ella es profesora.', italian: 'Lei è insegnante.' },
        { target: 'Somos de Roma.', italian: 'Siamo di Roma.' },
      ],
    },
    {
      heading: 'Quando si usa',
      bullets: [
        'Identità: Soy Lucía.',
        'Origine: Soy de Italia.',
        'Nazionalità: Es española.',
        'Professione: Él es médico.',
        'Caratteristiche: La casa es grande.',
        'Ora e date: Son las tres. Hoy es lunes.',
      ],
    },
    {
      heading: 'Negazione e domande',
      paragraphs: [
        'Per negare si mette «no» prima del verbo. Per fare una domanda si cambia l\'intonazione o si inverte l\'ordine.',
      ],
      examples: [
        { target: 'No soy español.', italian: 'Non sono spagnolo.' },
        { target: '¿Eres estudiante? — Sí, soy estudiante.', italian: 'Sei uno studente? — Sì.' },
        { target: '¿De dónde eres?', italian: 'Di dove sei?' },
      ],
    },
    {
      heading: 'Ser e estar: un primo sguardo',
      paragraphs: [
        '«Ser» indica ciò che una cosa è (identità, caratteristica stabile). «Estar» indica stato o luogo. Approfondiremo la differenza più avanti.',
      ],
      examples: [
        { target: 'Soy italiano.', italian: 'Sono italiano. (identità)' },
        { target: 'Estoy cansado.', italian: 'Sono stanco. (stato temporaneo)' },
      ],
    },
  ],
  exercises: [
    mc('Yo ___ italiano.', ['soy', 'eres', 'es', 'somos'], 0),
    fb('Nosotros ___ de Roma.', ['somos'], 'Siamo di Roma.'),
    tr('Lei è spagnola.', ['Ella es española.', 'Es española.']),
    mc('¿___ tú estudiante?', ['Eres', 'Es', 'Soy', 'Son'], 0),
    wo('Loro sono i miei amici.', ['Ellos', 'son', 'mis', 'amigos.']),
    fb('Madrid ___ la capital de España.', ['es'], 'Madrid è la capitale della Spagna.'),
  ],
  faq: [
    {
      question: '«Ser» e «estar»: qual è la differenza?',
      answer: '«Ser» = identità e caratteristiche stabili. «Estar» = stato temporaneo e luogo. «Soy alegre» (sono una persona allegra) vs «Estoy alegre» (sono allegro adesso).',
    },
    {
      question: 'Perché «son las tres» e non «es las tres»?',
      answer: 'Per l\'ora si usa «ser» al plurale perché si sottintende «las horas»: «Son las tres» = sono le tre.',
    },
  ],
})

export const esU1 = defineUnit({
  id: 'es-u1',
  title: 'Primi passi',
  subtitle: 'Saluti, presentazioni e verbo ser',
  intro:
    'In questa unità impari a presentarti, dire da dove vieni e che cosa fai. Sono le prime mosse di ogni conversazione: salutare, dire il nome, chiedere come sta l\'altra persona e rispondere con sicurezza.',
  keyPoints: [
    'Saluti e registro formale/informale',
    'Pronomi personali e verbo ser',
    'Origine, nazionalità e professioni',
    'Aggettivi maschili e femminili',
  ],
  theory: [
    {
      heading: 'Pronuncia e accenti: le prime regole',
      paragraphs: [
        'Lo spagnolo si legge in modo abbastanza regolare. Le vocali a, e, i, o, u hanno sempre lo stesso suono, breve e netto. La h è muta: «hola» si pronuncia «ola».',
        'La lettera ñ suona come il nostro gn di «gnomo»: «España», «mañana». Il gruppo ll assomiglia a una «gli» molto morbida o, in molte varianti, a una «i»: «llamo», «calle». La j e la g davanti a e/i hanno un suono aspirato, simile a una «h» pronunciata in gola: «trabajo», «gente».',
        'L\'accento scritto non è decorativo: indica dove cade l\'accento tonico e, in alcuni casi, distingue parole con significati diversi. Confronta «esta» (questa) con «está» (è), «si» (se) con «sí» (sì), «el» (il) con «él» (lui).',
      ],
      examples: [
        { target: 'hola', italian: 'ciao (h muta)' },
        { target: 'España', italian: 'Spagna (ñ = gn)' },
        { target: 'trabajo', italian: 'lavoro (j aspirata)' },
        { target: 'está / esta', italian: 'è / questa' },
      ],
    },
    {
      heading: 'Saluti, tu e usted',
      paragraphs: [
        'I saluti cambiano con il momento della giornata: «Buenos días» al mattino, «Buenas tardes» dal primo pomeriggio fino al tramonto, «Buenas noches» la sera e la notte. «Hola» è la forma più semplice e informale, valida a qualsiasi ora.',
        'In spagnolo esistono due modi di rivolgersi a una persona: «tú» per amici, familiari, coetanei e contesti informali; «usted» per persone che non conosci, superiori, clienti o situazioni formali. Il verbo cambia: «¿Cómo estás?» (tu) e «¿Cómo está?» (lei).',
        'Per presentarsi si usa «Me llamo…» oppure «Soy…». Per chiedere il nome: «¿Cómo te llamas?» (tu) o «¿Cómo se llama?» (lei). «Mucho gusto» e «Encantado/Encantada» significano «piacere»; la forma con -a si usa se chi parla è una donna.',
      ],
      examples: [
        { target: 'Buenos días, ¿cómo está usted?', italian: 'Buongiorno, come sta?' },
        { target: 'Hola, me llamo Ana. ¿Y tú?', italian: 'Ciao, mi chiamo Ana. E tu?' },
        { target: 'Mucho gusto, soy Carlos.', italian: 'Piacere, sono Carlos.' },
      ],
    },
    {
      heading: 'Pronomi e verbo ser',
      paragraphs: [
        'I pronomi soggetto sono yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas/ustedes. In spagnolo il pronome si omette spesso, perché la desinenza del verbo dice già chi compie l\'azione.',
        '«Ser» è irregolare. Le forme più importanti all\'inizio sono soy, eres, es, somos, sois, son. Si usa per dire chi sei, da dove vieni, la nazionalità, la professione e le caratteristiche stabili.',
      ],
      table: {
        headers: ['Persona', 'Ser', 'Esempio'],
        rows: [
          ['yo', 'soy', 'Soy italiano.'],
          ['tú', 'eres', 'Eres estudiante.'],
          ['él / ella / usted', 'es', 'Ella es médica.'],
          ['nosotros', 'somos', 'Somos de Roma.'],
          ['vosotros', 'sois', 'Sois amigos.'],
          ['ellos / ellas / ustedes', 'son', 'Son profesores.'],
        ],
      },
      examples: [
        { target: '¿De dónde eres? — Soy de Milán.', italian: 'Di dove sei? — Sono di Milano.' },
        { target: 'No soy español, soy italiano.', italian: 'Non sono spagnolo, sono italiano.' },
      ],
    },
  ],
  lessons: [esU1L1, esU1L2, esU1L3],
  grammar: [esU1G1],
})
