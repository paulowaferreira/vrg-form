import { FieldTypeEnum } from '../enums/'
import { FieldRadioOptionsModel } from "./field-radio-options.model"

export interface FieldModel {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  controlName?: string
  id?: string
  name?: string
  placeholder?: string
  options?: FieldRadioOptionsModel[]
  rows?: number
  size?: number
  step?: number
  type: FieldTypeEnum
}