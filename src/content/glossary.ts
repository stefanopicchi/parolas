import { foldForSearch } from '../lib/text'

export interface GlossaryEntry {
  /** Categoria grammaticale, in italiano. */
  pos: string
  /** Definizione in spagnolo. */
  definition: string
  /** Definizione in italiano. */
  definitionIt: string
}

export interface GlossaryLookup extends GlossaryEntry {
  source: 'glossary' | 'generated'
}

/**
 * Glossario essenziale dello spagnolo usato nelle lezioni.
 * Le chiavi vengono normalizzate: maiuscole e accenti non contano.
 */
const entries: Record<string, GlossaryEntry> = {
  hola: {
    pos: 'interiezione',
    definition: 'Saludo informal que se usa al encontrarse o al despedirse.',
    definitionIt: 'Saluto informale usato quando ci si incontra o ci si congeda.',
  },
  'buenos días': {
    pos: 'locuzione',
    definition: 'Saludo que se usa durante la mañana.',
    definitionIt: 'Saluto usato durante la mattina.',
  },
  'buenas tardes': {
    pos: 'locuzione',
    definition: 'Saludo que se usa desde el mediodía hasta el anochecer.',
    definitionIt: 'Saluto usato dal pomeriggio alla sera.',
  },
  'buenas noches': {
    pos: 'locuzione',
    definition: 'Saludo nocturno o fórmula para desear una buena noche.',
    definitionIt: 'Saluto serale o formula per augurare la buonanotte.',
  },
  '¿qué tal?': {
    pos: 'locuzione',
    definition: 'Pregunta informal sobre el estado de alguien.',
    definitionIt: 'Domanda informale per chiedere come sta qualcuno.',
  },
  'me llamo…': {
    pos: 'locuzione',
    definition: 'Fórmula para decir el propio nombre.',
    definitionIt: 'Formula per dire il proprio nome.',
  },
  'mucho gusto': {
    pos: 'locuzione',
    definition: 'Expresión de cortesía que se usa al conocer a alguien.',
    definitionIt: 'Formula di cortesia usata quando si conosce qualcuno.',
  },
  'hasta luego': {
    pos: 'locuzione',
    definition: 'Despedida que indica que se volverá a ver pronto.',
    definitionIt: 'Commiato che indica che ci si rivedrà presto.',
  },
  'soy de…': {
    pos: 'locuzione',
    definition: 'Fórmula para indicar el lugar de origen.',
    definitionIt: 'Formula per indicare il luogo di origine.',
  },
  '¿de dónde eres?': {
    pos: 'locuzione',
    definition: 'Pregunta informal sobre el origen de una persona.',
    definitionIt: "Domanda informale sull'origine di una persona.",
  },
  'italiano / italiana': {
    pos: 'aggettivo e sostantivo',
    definition: 'Persona natural de Italia; también el idioma.',
    definitionIt: "Persona originaria dell'Italia; anche la lingua.",
  },
  'español / española': {
    pos: 'aggettivo e sostantivo',
    definition: 'Persona natural de España; también el idioma.',
    definitionIt: 'Persona originaria della Spagna; anche la lingua.',
  },
  'francés / francesa': {
    pos: 'aggettivo e sostantivo',
    definition: 'Persona natural de Francia; también el idioma.',
    definitionIt: 'Persona originaria della Francia; anche la lingua.',
  },
  'alemán / alemana': {
    pos: 'aggettivo e sostantivo',
    definition: 'Persona natural de Alemania; también el idioma.',
    definitionIt: 'Persona originaria della Germania; anche la lingua.',
  },
  'el país': {
    pos: 'sostantivo maschile',
    definition: 'Territorio con un gobierno y una población propios.',
    definitionIt: 'Territorio con un proprio governo e una propria popolazione.',
  },
  'la ciudad': {
    pos: 'sostantivo femminile',
    definition: 'Núcleo urbano grande, con calles y servicios.',
    definitionIt: 'Grande centro urbano con strade e servizi.',
  },
  'profesor / profesora': {
    pos: 'sostantivo',
    definition: 'Persona que enseña en una escuela o universidad.',
    definitionIt: "Persona che insegna a scuola o all'università.",
  },
  estudiante: {
    pos: 'sostantivo',
    definition: 'Persona que estudia en una escuela o universidad.',
    definitionIt: "Persona che studia a scuola o all'università.",
  },
  'médico / médica': {
    pos: 'sostantivo',
    definition: 'Profesional que diagnostica y trata enfermedades.',
    definitionIt: 'Professionista che diagnostica e cura le malattie.',
  },
  'ingeniero / ingeniera': {
    pos: 'sostantivo',
    definition: 'Profesional que diseña o construye máquinas y estructuras.',
    definitionIt: 'Professionista che progetta o costruisce macchine e strutture.',
  },
  'abogado / abogada': {
    pos: 'sostantivo',
    definition: 'Profesional que defiende a clientes en asuntos legales.',
    definitionIt: 'Professionista che difende i clienti in questioni legali.',
  },
  'alto / alta': {
    pos: 'aggettivo',
    definition: 'Que tiene una estatura elevada; también de nivel superior.',
    definitionIt: 'Di statura elevata; anche di livello superiore.',
  },
  'simpático / simpática': {
    pos: 'aggettivo',
    definition: 'Agradable y fácil de tratar.',
    definitionIt: 'Simpatico e facile da trattare.',
  },
  'trabajador / trabajadora': {
    pos: 'aggettivo e sostantivo',
    definition: 'Que trabaja con esfuerzo; persona que trabaja.',
    definitionIt: 'Che lavora con impegno; persona che lavora.',
  },
  'el libro': {
    pos: 'sostantivo maschile',
    definition: 'Conjunto de hojas impresas o digitales que se lee.',
    definitionIt: 'Insieme di pagine stampate o digitali da leggere.',
  },
  'la mesa': {
    pos: 'sostantivo femminile',
    definition: 'Mueble con una superficie plana sostenida por patas.',
    definitionIt: 'Mobile con un piano orizzontale sostenuto da gambe.',
  },
  'el chico / la chica': {
    pos: 'sostantivo',
    definition: 'Persona joven, niño o adolescente.',
    definitionIt: 'Persona giovane, ragazzo o ragazza.',
  },
  'el problema': {
    pos: 'sostantivo maschile',
    definition: 'Asunto difícil que hay que resolver. Es masculino.',
    definitionIt: 'Questione difficile da risolvere. È maschile.',
  },
  'el día': {
    pos: 'sostantivo maschile',
    definition: 'Periodo de veinticuatro horas. Es masculino.',
    definitionIt: 'Periodo di ventiquattro ore. È maschile.',
  },
  'la mano': {
    pos: 'sostantivo femminile',
    definition: 'Parte del cuerpo con que se agarra. Es femenino.',
    definitionIt: 'Parte del corpo con cui si afferra. È femminile.',
  },
  'un / una': {
    pos: 'articolo indeterminativo',
    definition:
      'Artículo indeterminado singular: un antes de masculino, una antes de femenino.',
    definitionIt:
      'Articolo indeterminativo singolare: un per il maschile, una per il femminile.',
  },
  'unos / unas': {
    pos: 'articolo indeterminativo',
    definition: 'Artículo indeterminado plural; también «algunos».',
    definitionIt: 'Articolo indeterminativo plurale; anche «alcuni».',
  },
  'uno, dos, tres': {
    pos: 'numeri cardinali',
    definition: 'Números cardinales del uno al tres.',
    definitionIt: 'Numeri cardinali da uno a tre.',
  },
  'cuatro, cinco': {
    pos: 'numeri cardinali',
    definition: 'Números cardinales cuatro y cinco.',
    definitionIt: 'Numeri cardinali quattro e cinque.',
  },
  'seis, siete, ocho': {
    pos: 'numeri cardinali',
    definition: 'Números cardinales del seis al ocho.',
    definitionIt: 'Numeri cardinali da sei a otto.',
  },
  'nueve, diez': {
    pos: 'numeri cardinali',
    definition: 'Números cardinales nueve y diez.',
    definitionIt: 'Numeri cardinali nove e dieci.',
  },
  'rojo / roja': {
    pos: 'aggettivo',
    definition: 'Color de la sangre y de las amapolas.',
    definitionIt: 'Colore del sangue e dei papaveri.',
  },
  azul: {
    pos: 'aggettivo',
    definition: 'Color del cielo despejado.',
    definitionIt: 'Colore del cielo sereno.',
  },
  verde: {
    pos: 'aggettivo',
    definition: 'Color de la hierba y de las hojas.',
    definitionIt: "Colore dell'erba e delle foglie.",
  },
  'negro / negra': {
    pos: 'aggettivo',
    definition: 'Color más oscuro, como la noche sin luz.',
    definitionIt: 'Colore più scuro, come la notte senza luce.',
  },
  'bajo / baja': {
    pos: 'aggettivo',
    definition: 'Que tiene poca altura.',
    definitionIt: 'Di statura bassa.',
  },
  'delgado / delgada': {
    pos: 'aggettivo',
    definition: 'De cuerpo esbelto y con poca grasa.',
    definitionIt: 'Di corporatura snella e con poca grassezza.',
  },
  'gordo / gorda': {
    pos: 'aggettivo',
    definition: 'De cuerpo grueso y con mucha grasa.',
    definitionIt: 'Di corporatura grossa e con molta grassezza.',
  },
  joven: {
    pos: 'aggettivo',
    definition: 'Que tiene poca edad.',
    definitionIt: 'Che ha poca età.',
  },
  'viejo / vieja': {
    pos: 'aggettivo',
    definition: 'Que tiene mucha edad.',
    definitionIt: 'Che ha molta età.',
  },
  'guapo / guapa': {
    pos: 'aggettivo',
    definition: 'De aspecto agradable y atractivo.',
    definitionIt: 'Di aspetto piacevole e attraente.',
  },
  'nuevo / nueva': {
    pos: 'aggettivo',
    definition: 'Recién hecho, comprado o poco usado.',
    definitionIt: 'Appena fatto, comprato o poco usato.',
  },
  levantarse: {
    pos: 'verbo riflessivo',
    definition: 'Pasar de estar acostado a estar de pie.',
    definitionIt: "Passare dall'essere sdraiato all'essere in piedi.",
  },
  desayunar: {
    pos: 'verbo',
    definition: 'Tomar el desayuno, la primera comida del día.',
    definitionIt: 'Fare colazione, il primo pasto della giornata.',
  },
  trabajar: {
    pos: 'verbo',
    definition: 'Realizar una actividad profesional o un esfuerzo.',
    definitionIt: "Svolgere un'attività professionale o uno sforzo.",
  },
  estudiar: {
    pos: 'verbo',
    definition: 'Aprender una materia leyendo, practicando o asistiendo a clases.',
    definitionIt: 'Imparare una materia leggendo, esercitandosi o seguendo lezioni.',
  },
  comer: {
    pos: 'verbo',
    definition: 'Ingerir alimentos, normalmente al mediodía.',
    definitionIt: 'Ingerire cibo, normalmente a mezzogiorno.',
  },
  cenar: {
    pos: 'verbo',
    definition: 'Comer la última comida del día, por la noche.',
    definitionIt: "Consumare l'ultimo pasto della giornata, la sera.",
  },
  dormir: {
    pos: 'verbo',
    definition: 'Descansar con los ojos cerrados y sin conciencia.',
    definitionIt: 'Riposare con gli occhi chiusi e senza coscienza.',
  },
  'todos los días': {
    pos: 'locuzione',
    definition: 'Cada día, sin excepción.',
    definitionIt: 'Ogni giorno, senza eccezioni.',
  },
  'a la una': {
    pos: 'locuzione',
    definition: 'A la una en punto.',
    definitionIt: "All'una in punto.",
  },
  'a las dos': {
    pos: 'locuzione',
    definition: 'A las dos en punto.',
    definitionIt: 'Alle due in punto.',
  },
  'y media': {
    pos: 'locuzione',
    definition: 'Treinta minutos después de la hora indicada.',
    definitionIt: "Trenta minuti dopo l'ora indicata.",
  },
  'por la mañana': {
    pos: 'locuzione',
    definition: 'Durante la mañana.',
    definitionIt: 'Durante la mattina.',
  },
  'por la tarde': {
    pos: 'locuzione',
    definition: 'Durante la tarde.',
    definitionIt: 'Durante il pomeriggio.',
  },
  'por la noche': {
    pos: 'locuzione',
    definition: 'Durante la noche o al anochecer.',
    definitionIt: 'Durante la notte o la sera.',
  },
  temprano: {
    pos: 'avverbio',
    definition: 'Antes de la hora habitual.',
    definitionIt: "Prima dell'ora abituale.",
  },
  tarde: {
    pos: 'avverbio e sostantivo',
    definition: 'Después de la hora habitual; también la parte final del día.',
    definitionIt: "Dopo l'ora abituale; anche la parte finale della giornata.",
  },
  'la madre': {
    pos: 'sostantivo femminile',
    definition: 'Mujer que tiene hijos.',
    definitionIt: 'Donna che ha figli.',
  },
  'el padre': {
    pos: 'sostantivo maschile',
    definition: 'Hombre que tiene hijos.',
    definitionIt: 'Uomo che ha figli.',
  },
  'el hermano / la hermana': {
    pos: 'sostantivo',
    definition: 'Hijo o hija de los mismos padres.',
    definitionIt: 'Figlio o figlia degli stessi genitori.',
  },
  'los hijos': {
    pos: 'sostantivo maschile plurale',
    definition: 'Los descendientes directos de una persona.',
    definitionIt: 'I discendenti diretti di una persona.',
  },
  'los abuelos': {
    pos: 'sostantivo maschile plurale',
    definition: 'Los padres del padre o de la madre.',
    definitionIt: 'I genitori del padre o della madre.',
  },
  tener: {
    pos: 'verbo',
    definition: 'Poseer algo o mantener una relación.',
    definitionIt: 'Possedere qualcosa o avere una relazione.',
  },
  mayor: {
    pos: 'aggettivo',
    definition: 'De más edad; también más grande.',
    definitionIt: 'Di età maggiore; anche più grande.',
  },
  'pequeño / pequeña': {
    pos: 'aggettivo',
    definition: 'De tamaño reducido.',
    definitionIt: 'Di dimensioni ridotte.',
  },
  'la casa': {
    pos: 'sostantivo femminile',
    definition: 'Edificio o vivienda donde se vive.',
    definitionIt: 'Edificio o abitazione in cui si vive.',
  },
  'el piso': {
    pos: 'sostantivo maschile',
    definition: 'Vivienda en un edificio; también cada planta.',
    definitionIt: 'Abitazione in un edificio; anche ogni piano.',
  },
  'la cocina': {
    pos: 'sostantivo femminile',
    definition: 'Habitación donde se prepara la comida.',
    definitionIt: 'Stanza in cui si prepara il cibo.',
  },
  'el baño': {
    pos: 'sostantivo maschile',
    definition: 'Habitación con ducha o bañera y lavabo.',
    definitionIt: 'Stanza con doccia o vasca e lavandino.',
  },
  'el dormitorio': {
    pos: 'sostantivo maschile',
    definition: 'Habitación donde se duerme.',
    definitionIt: 'Stanza in cui si dorme.',
  },
  'el salón': {
    pos: 'sostantivo maschile',
    definition: 'Habitación principal para estar y recibir visitas.',
    definitionIt: 'Stanza principale per stare insieme e ricevere ospiti.',
  },
  'la cama': {
    pos: 'sostantivo femminile',
    definition: 'Mueble donde se duerme.',
    definitionIt: 'Mobile su cui si dorme.',
  },
  'encima de': {
    pos: 'locuzione prepositiva',
    definition: 'En la parte superior de algo.',
    definitionIt: 'Nella parte superiore di qualcosa.',
  },
  'debajo de': {
    pos: 'locuzione prepositiva',
    definition: 'En la parte inferior de algo.',
    definitionIt: 'Nella parte inferiore di qualcosa.',
  },
  'al lado de': {
    pos: 'locuzione prepositiva',
    definition: 'Junto a algo o alguien.',
    definitionIt: 'Accanto a qualcosa o qualcuno.',
  },
  entre: {
    pos: 'preposizione',
    definition: 'En el espacio que separa dos cosas o personas.',
    definitionIt: 'Nello spazio che separa due cose o persone.',
  },
  'detrás de': {
    pos: 'locuzione prepositiva',
    definition: 'En la parte posterior de algo.',
    definitionIt: 'Nella parte posteriore di qualcosa.',
  },
  'delante de': {
    pos: 'locuzione prepositiva',
    definition: 'En la parte anterior de algo.',
    definitionIt: 'Nella parte anteriore di qualcosa.',
  },
  'dentro de': {
    pos: 'locuzione prepositiva',
    definition: 'En el interior de algo.',
    definitionIt: "All'interno di qualcosa.",
  },
  sobre: {
    pos: 'preposizione',
    definition: 'Encima de algo; también acerca de.',
    definitionIt: 'Sopra qualcosa; anche riguardo a.',
  },
  'la calle': {
    pos: 'sostantivo femminile',
    definition: 'Vía de una ciudad donde circulan personas y vehículos.',
    definitionIt: 'Via di una città dove passano persone e veicoli.',
  },
  'la plaza': {
    pos: 'sostantivo femminile',
    definition: 'Espacio público abierto con edificios alrededor.',
    definitionIt: 'Spazio pubblico aperto circondato da edifici.',
  },
  'el mercado': {
    pos: 'sostantivo maschile',
    definition: 'Lugar donde se compran y venden productos.',
    definitionIt: 'Luogo dove si comprano e vendono prodotti.',
  },
  'la farmacia': {
    pos: 'sostantivo femminile',
    definition: 'Establecimiento donde se venden medicamentos.',
    definitionIt: 'Negozio dove si vendono medicinali.',
  },
  'el supermercado': {
    pos: 'sostantivo maschile',
    definition: 'Tienda grande de alimentación y productos domésticos.',
    definitionIt: 'Grande negozio di alimentari e prodotti per la casa.',
  },
  'a la izquierda': {
    pos: 'locuzione',
    definition: 'En el lado izquierdo.',
    definitionIt: 'Sul lato sinistro.',
  },
  'a la derecha': {
    pos: 'locuzione',
    definition: 'En el lado derecho.',
    definitionIt: 'Sul lato destro.',
  },
  'todo recto': {
    pos: 'locuzione',
    definition: 'Sin girar, siguiendo la misma dirección.',
    definitionIt: 'Senza girare, nella stessa direzione.',
  },
  'me gusta': {
    pos: 'locuzione verbale',
    definition: 'Expresión para decir que algo agrada a quien habla.',
    definitionIt: 'Espressione per dire che qualcosa piace a chi parla.',
  },
  'te gusta': {
    pos: 'locuzione verbale',
    definition: 'Expresión para decir que algo agrada al interlocutor.',
    definitionIt: "Espressione per dire che qualcosa piace all'interlocutore.",
  },
  'le gusta': {
    pos: 'locuzione verbale',
    definition: 'Expresión para decir que algo agrada a él o a ella.',
    definitionIt: 'Espressione per dire che qualcosa piace a lui o a lei.',
  },
  leer: {
    pos: 'verbo',
    definition: 'Interpretar un texto escrito.',
    definitionIt: 'Interpretare un testo scritto.',
  },
  bailar: {
    pos: 'verbo',
    definition: 'Mover el cuerpo al ritmo de la música.',
    definitionIt: 'Muovere il corpo al ritmo della musica.',
  },
  'la música': {
    pos: 'sostantivo femminile',
    definition: 'Arte de organizar sonidos; también su resultado.',
    definitionIt: 'Arte di organizzare i suoni; anche il risultato.',
  },
  'el deporte': {
    pos: 'sostantivo maschile',
    definition: 'Actividad física con reglas, practicada por diversión o competición.',
    definitionIt: 'Attività fisica con regole, praticata per divertimento o competizione.',
  },
  'el cine': {
    pos: 'sostantivo maschile',
    definition: 'Arte y local donde se proyectan películas.',
    definitionIt: 'Arte e luogo dove si proiettano film.',
  },
  'el fútbol': {
    pos: 'sostantivo maschile',
    definition: 'Deporte de equipo en el que se juega con un balón y los pies.',
    definitionIt: 'Sport di squadra in cui si gioca con un pallone e i piedi.',
  },
  'la natación': {
    pos: 'sostantivo femminile',
    definition: 'Deporte que consiste en nadar.',
    definitionIt: 'Sport che consiste nel nuotare.',
  },
  'la película': {
    pos: 'sostantivo femminile',
    definition: 'Obra cinematográfica.',
    definitionIt: 'Opera cinematografica.',
  },
  'la canción': {
    pos: 'sostantivo femminile',
    definition: 'Composición musical con letra para cantar.',
    definitionIt: 'Composizione musicale con testo da cantare.',
  },
  'el concierto': {
    pos: 'sostantivo maschile',
    definition: 'Actuación musical en público.',
    definitionIt: 'Esibizione musicale in pubblico.',
  },
  jugar: {
    pos: 'verbo',
    definition: 'Participar en un juego o deporte.',
    definitionIt: 'Partecipare a un gioco o a uno sport.',
  },
  ver: {
    pos: 'verbo',
    definition: 'Percibir con los ojos.',
    definitionIt: 'Percepire con gli occhi.',
  },
  querer: {
    pos: 'verbo',
    definition: 'Desear algo o amar a alguien.',
    definitionIt: 'Desiderare qualcosa o amare qualcuno.',
  },
  'ir a + infinito': {
    pos: 'perifrasi verbale',
    definition: 'Perífrasis que expresa una intención o un futuro próximo.',
    definitionIt: "Perifrasi che esprime un'intenzione o un futuro vicino.",
  },
  'este fin de semana': {
    pos: 'locuzione',
    definition: 'El sábado y el domingo de esta semana.',
    definitionIt: 'Il sabato e la domenica di questa settimana.',
  },
  '¿quieres…?': {
    pos: 'formula di cortesia',
    definition: 'Fórmula para invitar a alguien a hacer algo.',
    definitionIt: 'Formula per invitare qualcuno a fare qualcosa.',
  },
  quedar: {
    pos: 'verbo',
    definition: 'Encontrarse con alguien o acordar una cita.',
    definitionIt: 'Incontrarsi con qualcuno o fissare un appuntamento.',
  },
  'el plan': {
    pos: 'sostantivo maschile',
    definition: 'Programa de actividades; también intención.',
    definitionIt: 'Programma di attività; anche intenzione.',
  },
  preferir: {
    pos: 'verbo',
    definition: 'Elegir algo por encima de otra cosa.',
    definitionIt: "Scegliere qualcosa al posto di un'altra.",
  },
  'juntos / juntas': {
    pos: 'avverbio',
    definition: 'En compañía, uno con otro.',
    definitionIt: "In compagnia, uno con l'altro.",
  },
  'el pan': {
    pos: 'sostantivo maschile',
    definition: 'Alimento hecho con harina, agua y levadura.',
    definitionIt: 'Alimento fatto con farina, acqua e lievito.',
  },
  'la carne': {
    pos: 'sostantivo femminile',
    definition: 'Tejido muscular de animales usado como alimento.',
    definitionIt: 'Tessuto muscolare degli animali usato come alimento.',
  },
  'el pescado': {
    pos: 'sostantivo maschile',
    definition: 'Pez comestible, fresco o cocinado.',
    definitionIt: 'Pesce commestibile, fresco o cucinato.',
  },
  'la verdura': {
    pos: 'sostantivo femminile',
    definition: 'Hortalizas y plantas comestibles.',
    definitionIt: 'Ortaggi e piante commestibili.',
  },
  'la fruta': {
    pos: 'sostantivo femminile',
    definition: 'Fruto comestible, normalmente dulce.',
    definitionIt: 'Frutto commestibile, di solito dolce.',
  },
  'el queso': {
    pos: 'sostantivo maschile',
    definition: 'Alimento elaborado con leche cuajada.',
    definitionIt: 'Alimento prodotto con latte cagliato.',
  },
  'el agua': {
    pos: 'sostantivo femminile',
    definition: 'Líquido transparente esencial para la vida. Es femenino, pero usa «el».',
    definitionIt: 'Liquido trasparente essenziale per la vita. È femminile, ma usa «el».',
  },
  'el vino': {
    pos: 'sostantivo maschile',
    definition: 'Bebida alcohólica hecha de uva fermentada.',
    definitionIt: "Bevanda alcolica ottenuta dall'uva fermentata.",
  },
  'la cerveza': {
    pos: 'sostantivo femminile',
    definition: 'Bebida alcohólica hecha de cebada fermentada.',
    definitionIt: "Bevanda alcolica ottenuta dall'orzo fermentato.",
  },
  'el café': {
    pos: 'sostantivo maschile',
    definition: 'Bebida oscura y amarga hecha con granos tostados.',
    definitionIt: 'Bevanda scura e amara ottenuta dai chicchi tostati.',
  },
  'el menú': {
    pos: 'sostantivo maschile',
    definition: 'Lista de platos y bebidas de un restaurante.',
    definitionIt: 'Elenco di piatti e bevande di un ristorante.',
  },
  'la carta': {
    pos: 'sostantivo femminile',
    definition: 'Lista de platos; también documento escrito.',
    definitionIt: 'Lista dei piatti; anche documento scritto.',
  },
  'el camarero / la camarera': {
    pos: 'sostantivo',
    definition: 'Persona que sirve en un restaurante.',
    definitionIt: 'Persona che serve in un ristorante.',
  },
  'la cuenta': {
    pos: 'sostantivo femminile',
    definition: 'Cantidad que hay que pagar en un restaurante o tienda.',
    definitionIt: 'Importo da pagare in un ristorante o in un negozio.',
  },
  pedir: {
    pos: 'verbo',
    definition: 'Solicitar algo, por ejemplo en un restaurante.',
    definitionIt: 'Chiedere qualcosa, per esempio al ristorante.',
  },
  'el primer plato': {
    pos: 'sostantivo maschile',
    definition: 'Primer plato de una comida completa.',
    definitionIt: 'Primo piatto di un pasto completo.',
  },
  'el postre': {
    pos: 'sostantivo maschile',
    definition: 'Plato dulce que se come al final.',
    definitionIt: 'Piatto dolce che si mangia alla fine.',
  },
  'la propina': {
    pos: 'sostantivo femminile',
    definition: 'Dinero extra que se deja por el servicio.',
    definitionIt: 'Denaro extra lasciato per il servizio.',
  },
  '¿qué me recomienda?': {
    pos: 'locuzione',
    definition: 'Pregunta cortés para pedir una sugerencia al camarero.',
    definitionIt: 'Domanda cortese per chiedere un consiglio al cameriere.',
  },
  'la bolsa': {
    pos: 'sostantivo femminile',
    definition: 'Contenedor flexible para llevar cosas.',
    definitionIt: 'Contenitore flessibile per portare cose.',
  },
  'el kilo': {
    pos: 'sostantivo maschile',
    definition: 'Unidad de peso equivalente a mil gramos.',
    definitionIt: 'Unità di peso pari a mille grammi.',
  },
  'medio kilo': {
    pos: 'locuzione',
    definition: 'La mitad de un kilo, quinientos gramos.',
    definitionIt: 'Metà di un chilo, cinquecento grammi.',
  },
  'un litro': {
    pos: 'locuzione',
    definition: 'Unidad de volumen equivalente a mil mililitros.',
    definitionIt: 'Unità di volume pari a mille millilitri.',
  },
  'barato / barata': {
    pos: 'aggettivo',
    definition: 'Que cuesta poco.',
    definitionIt: 'Che costa poco.',
  },
  'caro / cara': {
    pos: 'aggettivo',
    definition: 'Que cuesta mucho.',
    definitionIt: 'Che costa molto.',
  },
  'la oferta': {
    pos: 'sostantivo femminile',
    definition: 'Precio reducido o producto puesto a la venta con descuento.',
    definitionIt: 'Prezzo ridotto o prodotto in vendita con sconto.',
  },
  pagar: {
    pos: 'verbo',
    definition: 'Entregar dinero por un producto o servicio.',
    definitionIt: 'Dare denaro per un prodotto o un servizio.',
  },
  'el tren': {
    pos: 'sostantivo maschile',
    definition: 'Vehículo que circula sobre raíles.',
    definitionIt: 'Veicolo che corre su rotaie.',
  },
  'el autobús': {
    pos: 'sostantivo maschile',
    definition: 'Vehículo grande de transporte urbano.',
    definitionIt: 'Grande veicolo per il trasporto urbano.',
  },
  'el avión': {
    pos: 'sostantivo maschile',
    definition: 'Vehículo que vuela por el aire.',
    definitionIt: "Veicolo che vola nell'aria.",
  },
  'el billete': {
    pos: 'sostantivo maschile',
    definition: 'Título que permite viajar o entrar a un lugar.',
    definitionIt: 'Titolo che permette di viaggiare o entrare in un luogo.',
  },
  'la estación': {
    pos: 'sostantivo femminile',
    definition: 'Lugar donde los trenes o autobuses recogen pasajeros.',
    definitionIt: 'Luogo dove treni o autobus prendono i passeggeri.',
  },
  'el aeropuerto': {
    pos: 'sostantivo maschile',
    definition: 'Instalación donde aterrizan y despegan aviones.',
    definitionIt: 'Struttura dove atterrano e decollano gli aerei.',
  },
  'el andén': {
    pos: 'sostantivo maschile',
    definition: 'Zona junto a la vía donde se espera el tren.',
    definitionIt: 'Zona accanto al binario dove si aspetta il treno.',
  },
  'la maleta': {
    pos: 'sostantivo femminile',
    definition: 'Equipaje rígido o blando para viajar.',
    definitionIt: 'Bagaglio rigido o morbido per viaggiare.',
  },
  'el pasaporte': {
    pos: 'sostantivo maschile',
    definition: 'Documento oficial para viajar al extranjero.',
    definitionIt: "Documento ufficiale per viaggiare all'estero.",
  },
  'la reserva': {
    pos: 'sostantivo femminile',
    definition: 'Acuerdo que asegura una plaza o una habitación.',
    definitionIt: 'Accordo che garantisce un posto o una camera.',
  },
  'el hotel': {
    pos: 'sostantivo maschile',
    definition: 'Establecimiento donde se alojan viajeros.',
    definitionIt: 'Struttura dove alloggiano i viaggiatori.',
  },
  'la habitación': {
    pos: 'sostantivo femminile',
    definition: 'Cuarto de un hotel o de una casa.',
    definitionIt: 'Stanza di un hotel o di una casa.',
  },
  'la llave': {
    pos: 'sostantivo femminile',
    definition: 'Objeto que abre una cerradura.',
    definitionIt: 'Oggetto che apre una serratura.',
  },
  'el recepcionista': {
    pos: 'sostantivo maschile',
    definition: 'Persona que atiende a los clientes en la recepción.',
    definitionIt: 'Persona che accoglie i clienti alla reception.',
  },
  'la cama doble': {
    pos: 'sostantivo femminile',
    definition: 'Cama grande para dos personas.',
    definitionIt: 'Letto grande per due persone.',
  },
  'el desayuno incluido': {
    pos: 'locuzione',
    definition: 'Comida de la mañana incluida en el precio.',
    definitionIt: 'Colazione inclusa nel prezzo.',
  },
  'la noche': {
    pos: 'sostantivo femminile',
    definition: 'Periodo sin luz solar.',
    definitionIt: 'Periodo senza luce solare.',
  },
  libre: {
    pos: 'aggettivo',
    definition: 'Que no está ocupado.',
    definitionIt: 'Che non è occupato.',
  },
  'el ascensor': {
    pos: 'sostantivo maschile',
    definition: 'Máquina que sube y baja personas entre pisos.',
    definitionIt: 'Macchina che porta persone su e giù tra i piani.',
  },
  'el año pasado': {
    pos: 'locuzione',
    definition: 'El año anterior al actual.',
    definitionIt: "L'anno precedente a quello attuale.",
  },
  'las vacaciones': {
    pos: 'sostantivo femminile plurale',
    definition: 'Periodo de descanso sin trabajo.',
    definitionIt: 'Periodo di riposo senza lavoro.',
  },
  'el viaje': {
    pos: 'sostantivo maschile',
    definition: 'Desplazamiento de un lugar a otro.',
    definitionIt: 'Spostamento da un luogo a un altro.',
  },
  visitar: {
    pos: 'verbo',
    definition: 'Ir a ver un lugar o a una persona.',
    definitionIt: 'Andare a vedere un luogo o una persona.',
  },
  llegar: {
    pos: 'verbo',
    definition: 'Alcanzar el destino.',
    definitionIt: 'Raggiungere la destinazione.',
  },
  volver: {
    pos: 'verbo',
    definition: 'Regresar al lugar de origen.',
    definitionIt: 'Tornare al luogo di partenza.',
  },
  durar: {
    pos: 'verbo',
    definition: 'Mantener su efecto o existencia durante un tiempo.',
    definitionIt: 'Continuare nel tempo, avere una durata.',
  },
  'el paisaje': {
    pos: 'sostantivo maschile',
    definition: 'Vista de un territorio natural o urbano.',
    definitionIt: 'Veduta di un territorio naturale o urbano.',
  },
  'el recuerdo': {
    pos: 'sostantivo maschile',
    definition: 'Memoria de algo vivido; también objeto que la evoca.',
    definitionIt: 'Ricordo di qualcosa vissuto; anche oggetto che lo evoca.',
  },
  conocer: {
    pos: 'verbo',
    definition: 'Saber de algo o tener contacto con alguien por primera vez.',
    definitionIt:
      'Sapere qualcosa o entrare in contatto con qualcuno per la prima volta.',
  },
  'la cabeza': {
    pos: 'sostantivo femminile',
    definition: 'Parte superior del cuerpo que contiene el cerebro.',
    definitionIt: 'Parte superiore del corpo che contiene il cervello.',
  },
  'el brazo': {
    pos: 'sostantivo maschile',
    definition: 'Extremidad superior del cuerpo.',
    definitionIt: 'Arto superiore del corpo.',
  },
  'la pierna': {
    pos: 'sostantivo femminile',
    definition: 'Extremidad inferior del cuerpo.',
    definitionIt: 'Arto inferiore del corpo.',
  },
  'la espalda': {
    pos: 'sostantivo femminile',
    definition: 'Parte posterior del tronco.',
    definitionIt: 'Parte posteriore del tronco.',
  },
  'el estómago': {
    pos: 'sostantivo maschile',
    definition: 'Órgano donde se digiere la comida.',
    definitionIt: 'Organo in cui si digerisce il cibo.',
  },
  'la garganta': {
    pos: 'sostantivo femminile',
    definition: 'Zona interior del cuello.',
    definitionIt: 'Zona interna del collo.',
  },
  doler: {
    pos: 'verbo',
    definition: 'Producir dolor una parte del cuerpo.',
    definitionIt: 'Fare male, provare dolore.',
  },
  'la fiebre': {
    pos: 'sostantivo femminile',
    definition: 'Temperatura corporal anormalmente alta.',
    definitionIt: 'Temperatura corporea anormalmente alta.',
  },
  'el dolor': {
    pos: 'sostantivo maschile',
    definition: 'Sensación física desagradable.',
    definitionIt: 'Sensazione fisica sgradevole.',
  },
  'el médico / la médica': {
    pos: 'sostantivo',
    definition: 'Profesional que atiende a los enfermos.',
    definitionIt: 'Professionista che cura i malati.',
  },
  'tener que + infinito': {
    pos: 'perifrasi verbale',
    definition: 'Perífrasis que expresa obligación personal.',
    definitionIt: 'Perifrasi che esprime un obbligo personale.',
  },
  'hay que + infinito': {
    pos: 'perifrasi verbale',
    definition: 'Perífrasis que expresa obligación impersonal.',
    definitionIt: 'Perifrasi che esprime un obbligo impersonale.',
  },
  deber: {
    pos: 'verbo',
    definition: 'Estar obligado a hacer algo; también tener una deuda.',
    definitionIt: 'Essere obbligato a fare qualcosa; anche avere un debito.',
  },
  deberías: {
    pos: 'verbo al condizionale',
    definition: 'Condicional de «deber»: sería conveniente que hicieras algo.',
    definitionIt: 'Condizionale di «deber»: sarebbe bene che tu facessi qualcosa.',
  },
  'es mejor': {
    pos: 'locuzione',
    definition: 'Expresión para recomendar la opción más conveniente.',
    definitionIt: "Espressione per consigliare l'opzione migliore.",
  },
  'te recomiendo': {
    pos: 'locuzione verbale',
    definition: 'Expresión para sugerir algo a alguien.',
    definitionIt: 'Espressione per suggerire qualcosa a qualcuno.',
  },
  descansar: {
    pos: 'verbo',
    definition: 'Reposar y recuperar fuerzas.',
    definitionIt: 'Riposare e recuperare le forze.',
  },
  evitar: {
    pos: 'verbo',
    definition: 'Impedir o alejarse de algo negativo.',
    definitionIt: 'Impedire o allontanarsi da qualcosa di negativo.',
  },
  'la pastilla': {
    pos: 'sostantivo femminile',
    definition: 'Porción pequeña de medicamento para tomar.',
    definitionIt: 'Piccola dose di medicinale da prendere.',
  },
  'la fiesta': {
    pos: 'sostantivo femminile',
    definition: 'Reunión social para celebrar algo.',
    definitionIt: 'Incontro sociale per celebrare qualcosa.',
  },
  'el cumpleaños': {
    pos: 'sostantivo maschile',
    definition: 'Aniversario del nacimiento de una persona.',
    definitionIt: 'Anniversario della nascita di una persona.',
  },
  'el regalo': {
    pos: 'sostantivo maschile',
    definition: 'Objeto que se da a alguien como muestra de afecto.',
    definitionIt: 'Oggetto che si dà a qualcuno come segno di affetto.',
  },
  invitar: {
    pos: 'verbo',
    definition: 'Pedir a alguien que participe o que reciba algo.',
    definitionIt: 'Chiedere a qualcuno di partecipare o di ricevere qualcosa.',
  },
  'lo siento': {
    pos: 'locuzione',
    definition: 'Expresión para disculparse o mostrar pesar.',
    definitionIt: 'Espressione per scusarsi o mostrare dispiacere.',
  },
  'no puedo': {
    pos: 'locuzione verbale',
    definition: 'Expresión para indicar que no es posible hacer algo.',
    definitionIt: 'Espressione per indicare che non è possibile fare qualcosa.',
  },
  'otro día': {
    pos: 'locuzione',
    definition: 'Expresión para posponer un encuentro.',
    definitionIt: 'Espressione per rimandare un incontro.',
  },
  'la cita': {
    pos: 'sostantivo femminile',
    definition: 'Encuentro acordado, a menudo romántico o profesional.',
    definitionIt: 'Incontro fissato, spesso romantico o professionale.',
  },
  'la invitación': {
    pos: 'sostantivo femminile',
    definition: 'Propuesta para participar en un acto.',
    definitionIt: 'Proposta di partecipare a un evento.',
  },
}

function cleanKey(value: string): string {
  return foldForSearch(value)
    .replace(/…/g, '')
    .replace(/\.\.\./g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const normalizedEntries = new Map(
  Object.entries(entries).map(([term, entry]) => [cleanKey(term), entry] as const),
)

function guessPos(term: string, language: string): string {
  if (term.includes('+')) return 'perifrasi'
  if (/[?!¿¡]/.test(term) || term.includes(' ')) return 'locuzione'
  if (language === 'es') {
    if (/(ar|er|ir)$/.test(term)) return 'verbo'
    if (/^(el|los)\s/.test(term)) return 'sostantivo maschile'
    if (/^(la|las)\s/.test(term)) return 'sostantivo femminile'
    if (/[oa]$/.test(term)) return 'aggettivo o sostantivo'
  }
  return 'voce del vocabolario'
}

export function lookupGlossary(
  term: string,
  translation: string,
  language = 'es',
): GlossaryLookup {
  if (language === 'es') {
    const base = cleanKey(term)
    const candidates = [
      base,
      base.replace(/^(el|la|los|las|un|una|unos|unas)\s+/, ''),
      cleanKey(term.split('/')[0] ?? term),
    ]
    for (const key of candidates) {
      const entry = normalizedEntries.get(key)
      if (entry) return { ...entry, source: 'glossary' }
    }
  }

  const pos = guessPos(term, language)
  return {
    pos,
    definition:
      language === 'es'
        ? `«${term}»: voz del vocabulario de esta unidad. En italiano significa «${translation}».`
        : `«${term}»: voce del vocabolario di questa lingua.`,
    definitionIt: `«${term}» significa «${translation}».`,
    source: 'generated',
  }
}
