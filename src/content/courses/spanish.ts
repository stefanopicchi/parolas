import type { Course } from '../types'
import { esU1 } from './spanish/unit1'
import { esU2 } from './spanish/unit2'
import { esU3 } from './spanish/unit3'
import { esU4 } from './spanish/unit4'
import { esU5 } from './spanish/unit5'
import { esU6 } from './spanish/unit6'
import { esU7 } from './spanish/unit7'
import { esU8 } from './spanish/unit8'

export const spanish: Course = {
  id: 'es',
  name: 'Spagnolo',
  nativeName: 'Español',
  description:
    'Un percorso completo A1 → A2 in otto unità: presentarsi, routine, casa e città, tempo libero, cibo, viaggi e salute. Ogni unità apre con una teoria estesa, seguita da tre lezioni da dieci esercizi e una scheda di grammatica.',
  level: 'A1 → A2',
  ttsLang: 'es-ES',
  units: [esU1, esU2, esU3, esU4, esU5, esU6, esU7, esU8],
}
