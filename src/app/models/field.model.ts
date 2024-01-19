import { FieldTypeEnum } from '../enums/'
import { FieldOptionsModel } from "./field-options.model"

export interface FieldModel {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  controlName?: string
  id?: string
  name?: string
  placeholder?: string
  options?: FieldOptionsModel[]
  rows?: number
  size?: number
  step?: number
  type: FieldTypeEnum
}