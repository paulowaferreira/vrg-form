import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldTextService {

  getDefaultValues(): PropsModel {
    return {
      ...this.getDefaultProps(),
      validators: this.getDefaultValidators(),
    }
  }

  getDefaultProps(): PropsModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.TEXT,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]
  }
}
