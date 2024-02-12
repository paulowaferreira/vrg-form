import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_PHONE_PROPS: PropsModel = {
  initialValue: '',
  type: FieldTypeEnum.TEL
}

export const DEFAULT_PHONE_VALIDATORS: ValidatorFn[] = [
  Validators.minLength(11),
  Validators.maxLength(11)
]
