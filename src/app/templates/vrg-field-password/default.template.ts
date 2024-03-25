import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_PASSWORD_PROPS: VrgField = {
  initialValue: '',
  type: VrgFieldType.PASSWORD
}

export const DEFAULT_PASSWORD_VALIDATORS: VrgFieldValidators = {
  required: true,
  minLength: 8,
  maxLength: 16,
  pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/
}