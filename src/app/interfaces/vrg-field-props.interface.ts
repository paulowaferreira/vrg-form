import { ValidatorFn } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldOption } from './vrg-field-option.interface'

export interface VrgFieldProps {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  fieldControlName?: string
  disabled?: boolean
  id?: string
  initialValue?: any
  name?: string
  placeholder?: string
  options?: VrgFieldOption[]
  rows?: number
  size?: number
  step?: number
  type: VrgFieldType
  validators?: ValidatorFn[]
}
