import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'

export const DEFAULT_TEXT_PROPS: VrgField = {
  initialValue: '',
  type: VrgFieldType.TEXT
}

export const DEFAULT_TEXT_VALIDATORS: ValidatorFn[] = [
  Validators.required
]
