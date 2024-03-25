import { FormControl, FormGroup, ValidatorFn } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldOption } from './vrg-field-option.interface'
import { VrgFieldValidators } from './vrg-field-validators.interface'

export interface VrgField {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  controlName?: string
  disabled?: boolean
  formGroup?: FormGroup
  id?: string
  initialValue?: any
  labelText?: string
  name?: string
  placeholder?: string
  options?: VrgFieldOption[]
  required?: boolean
  rows?: number
  size?: number
  step?: number
  type: VrgFieldType
  validators?: VrgFieldValidators
}
