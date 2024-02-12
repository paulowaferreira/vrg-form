import { ValidatorFn } from '@angular/forms'
import { FieldTypeEnum } from 'src/app/enums'
import { PropsModel } from 'src/app/models'

export const DEFAULT_TEXTAREA_PROPS: PropsModel = {
  initialValue: '',
  cols: 20,
  rows: 2,
  type: FieldTypeEnum.TEXTAREA
}

export const DEFAULT_TEXTAREA_VALIDATORS: ValidatorFn[] = []
