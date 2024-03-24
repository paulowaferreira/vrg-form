import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_PHONE_PROPS: VrgField = {
  initialValue: '',
  type: VrgFieldType.TEL
}

export const DEFAULT_PHONE_VALIDATORS: VrgFieldValidators = {
  required: true,
  pattern: /^0\d{2}9\d{8}$/
}
