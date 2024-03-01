import { FormControl, ValidatorFn } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldOption } from './vrg-field-option.interface'

export interface VrgField {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  fieldControlName?: string
  control?: FormControl
  disabled?: boolean
  id?: string
  initialValue?: any
  labelText?: string
  name?: string
  placeholder?: string
  options?: VrgFieldOption[]
  rows?: number
  size?: number
  step?: number
  type: VrgFieldType
  validators?: ValidatorFn[]
}
