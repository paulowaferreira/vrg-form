import { ValidatorFn, Validators } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_DROPDOWN_PROPS: PropsModel = {
  initialValue: 'Opções',
  type: FieldTypeEnum.DROPDOWN
}

export const DEFAULT_DROPDOWN_VALIDATORS: ValidatorFn[] = [Validators.required]
