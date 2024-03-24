import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_EMAIL_PROPS: VrgField = {
  initialValue: '',
  type: VrgFieldType.EMAIL
}

export const DEFAULT_EMAIL_VALIDATORS: VrgFieldValidators = {
  required: true,
  minLength:1,
  pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com.br|com)'
}

