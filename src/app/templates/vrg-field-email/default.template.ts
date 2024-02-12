import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_EMAIL_PROPS: PropsModel = {
  initialValue: '',
  type: FieldTypeEnum.EMAIL
}

export const DEFAULT_EMAIL_VALIDATORS: ValidatorFn[] = [
  Validators.minLength(1),
  Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com.br|com)')
]
