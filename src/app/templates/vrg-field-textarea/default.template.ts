import { ValidatorFn } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'

export const DEFAULT_TEXTAREA_PROPS: VrgField = {
  initialValue: '',
  cols: 20,
  rows: 2,
  type: VrgFieldType.TEXTAREA
}

export const DEFAULT_TEXTAREA_VALIDATORS: ValidatorFn[] = []