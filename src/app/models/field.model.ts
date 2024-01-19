import { ValidatorFn } from "@angular/forms"
import { FieldTypeEnum } from "../enums/field-type.enum"

export interface FieldModel {
  autofocus?: boolean
  autocomplete?: boolean
  cols?: number
  disabled?: boolean
  controlName?: string
  id?: string
  initialValue?: any
  name?: string
  placeholder?: string
  rows?: number
  size?: number
  step?: number
  type: FieldTypeEnum
  validators?: ValidatorFn[]
}