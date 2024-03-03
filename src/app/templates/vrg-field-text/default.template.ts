import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_TEXT_PROPS: VrgField = {
  initialValue: '',
  type: VrgFieldType.TEXT
}

export const DEFAULT_TEXT_VALIDATORS: VrgFieldValidators = {
  required: true,
  minLength: 3
}
