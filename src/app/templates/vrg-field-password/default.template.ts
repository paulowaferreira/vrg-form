import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_PASSWORD_PROPS: PropsModel = {
  initialValue: 0,
  type: FieldTypeEnum.PASSWORD
}

export const DEFAULT_PASSWORD_VALIDATORS: ValidatorFn[] = [Validators.required]
