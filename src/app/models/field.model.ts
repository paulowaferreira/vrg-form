import { FieldTypeEnum } from "../enums/field-type.enum"

export interface FieldModel {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  controlName?: string
  id?: string
  name?: string
  placeholder?: string
  rows?: number
  size?: number
  step?: number
  type: FieldTypeEnum
}