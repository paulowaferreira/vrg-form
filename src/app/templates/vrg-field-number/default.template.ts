import { ValidatorFn } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_NUMBER_PROPS: PropsModel = {
  initialValue: 0,
  step: 1,
  type: FieldTypeEnum.NUMBER
}

export const DEFAULT_NUMBER_VALIDATORS: ValidatorFn[] = []
