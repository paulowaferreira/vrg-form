import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_TEXT_PROPS: PropsModel = {
  initialValue: '',
  type: FieldTypeEnum.TEXT
}

export const DEFAULT_TEXT_VALIDATORS: ValidatorFn[] = [
  Validators.required
]
