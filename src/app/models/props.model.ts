import { ValidatorFn } from '@angular/forms'
import { FieldModel } from './field.model'

export interface PropsModel extends FieldModel {
  disabled?: boolean
  initialValue?: any
  validators?: ValidatorFn[]
}
