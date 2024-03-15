import { ValidatorFn } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'

export const DEFAULT_NUMBER_PROPS: VrgField = {
  initialValue: 0,
  step: 1,
  type: VrgFieldType.NUMBER
}

export const DEFAULT_NUMBER_VALIDATORS: ValidatorFn[] = []