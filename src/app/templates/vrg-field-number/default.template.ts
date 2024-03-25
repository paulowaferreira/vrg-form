import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_NUMBER_PROPS: VrgField = {
  initialValue: null,
  step: 1,
  type: VrgFieldType.NUMBER
}

export const DEFAULT_NUMBER_VALIDATORS: VrgFieldValidators = {
  required: true,
  min: 17
}
