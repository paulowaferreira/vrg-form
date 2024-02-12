import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_RADIO_PROPS: PropsModel = {
  initialValue: null,
  type: FieldTypeEnum.RADIO
}

export const DEFAULT_RADIO_VALIDATORS: ValidatorFn[] = [Validators.required]
