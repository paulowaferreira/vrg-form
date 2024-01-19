import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldTextareaService {

  getDefaultValues(): PropsModel {
    return {
      ...this.getDefaulProps(),
      ...this.getDefaultValidators()
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: '',
      cols: 20,
      rows: 2,
      type: FieldTypeEnum.TEXTAREA,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]
  }
}
