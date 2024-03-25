
import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_TEXTAREA_PROPS: VrgField = {
  initialValue: '',
  cols: 20,
  rows: 5,
  type: VrgFieldType.TEXTAREA
}

export const DEFAULT_TEXTAREA_VALIDATORS: VrgFieldValidators = {
  required: true,
  minLength: 3,
  maxLength: 300
}
