import { FormControl } from '@angular/forms'

export interface FieldModel {
  autofocus?: boolean
  autocomplete?: boolean
  disabled?: boolean
  controlName: string
  id?: string
  name: string
  pattern?: string
  placeholder?: string
  size?: number
  step?: number
  type: string
  value?: any
}
