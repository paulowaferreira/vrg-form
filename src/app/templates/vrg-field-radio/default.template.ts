import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

export const DEFAULT_RADIO_PROPS: VrgField = {
  initialValue: null,
  type: VrgFieldType.RADIO
}

export const DEFAULT_RADIO_VALIDATORS: VrgFieldValidators = {
  required: true
}
