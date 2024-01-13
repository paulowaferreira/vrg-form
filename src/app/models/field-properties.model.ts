import { FieldTypeEnum } from '../enums/field-type.enum'

export interface FieldPropertiesModel {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  disabled?: boolean
  controlName?: string
  id?: string
  pattern?: string
  placeholder?: string
  rows?: number
  size?: number
  step?: number
  type: FieldTypeEnum
}
